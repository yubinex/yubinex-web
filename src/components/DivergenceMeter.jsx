import { useEffect, useState } from "react";
import styles from "./DivergenceMeter.module.css";

// These are the temporary world lines used by the profile README's meter.
const ALTERNATE_WORLDLINES = ["0.571024", "0.037187"];

// Milliseconds. Keep effect tuning separate from the scheduling logic below.
const TIMING = {
    transition: 420,
    frame: 60,
    flicker: 180,
    flickerWait: 5000,
    flickerVariation: 4000,
    excursionWait: 12000,
    excursionVariation: 6000,
    excursionHold: 1000,
};

const DivergenceMeter = ({ value }) => {
    const [displayValue, setDisplayValue] = useState(value);
    const [flickeringDigit, setFlickeringDigit] = useState(null);

    useEffect(() => {
        const motionPreference = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        );
        const timers = new Set();
        const digitPositions = [...value]
            .map((character, index) => (/\d/.test(character) ? index : null))
            .filter((index) => index !== null);
        let frameTimer;
        let excursionIndex = 0;
        let excursionActive = false;

        const later = (callback, delay) => {
            const timer = setTimeout(() => {
                timers.delete(timer);
                callback();
            }, delay);
            timers.add(timer);
        };

        const clearTimers = () => {
            clearInterval(frameTimer);
            timers.forEach(clearTimeout);
            timers.clear();
        };

        const transitionTo = (target, onComplete) => {
            clearInterval(frameTimer);
            const start = performance.now();
            const duration = TIMING.transition;

            const updateFrame = () => {
                const progress = (performance.now() - start) / duration;
                setDisplayValue(
                    [...target]
                        .map((character, index) => {
                            if (
                                !/\d/.test(character) ||
                                progress > (index + 1) / target.length
                            ) {
                                return character;
                            }
                            return String(Math.floor(Math.random() * 10));
                        })
                        .join(""),
                );
            };

            updateFrame();
            frameTimer = setInterval(updateFrame, TIMING.frame);
            later(() => {
                clearInterval(frameTimer);
                setDisplayValue(target);
                onComplete();
            }, duration);
        };

        const scheduleFlicker = () => {
            later(
                () => {
                    if (!document.hidden && !excursionActive) {
                        const position =
                            digitPositions[
                                Math.floor(
                                    Math.random() * digitPositions.length,
                                )
                            ];
                        setFlickeringDigit(position);
                        later(() => setFlickeringDigit(null), TIMING.flicker);
                    }
                    scheduleFlicker();
                },
                TIMING.flickerWait + Math.random() * TIMING.flickerVariation,
            );
        };

        const scheduleExcursion = () => {
            later(
                () => {
                    if (document.hidden) {
                        scheduleExcursion();
                        return;
                    }

                    const target =
                        ALTERNATE_WORLDLINES[
                            excursionIndex % ALTERNATE_WORLDLINES.length
                        ];
                    excursionIndex += 1;
                    excursionActive = true;
                    setFlickeringDigit(null);

                    transitionTo(target, () => {
                        // Hold a readable alternate number, not a second of noise.
                        later(() => {
                            transitionTo(value, () => {
                                excursionActive = false;
                                scheduleExcursion();
                            });
                        }, TIMING.excursionHold);
                    });
                },
                TIMING.excursionWait +
                    Math.random() * TIMING.excursionVariation,
            );
        };

        const synchronize = () => {
            clearTimers();
            excursionActive = false;
            setFlickeringDigit(null);
            setDisplayValue(value);

            if (!motionPreference.matches && digitPositions.length > 0) {
                transitionTo(value, () => {
                    scheduleFlicker();
                    scheduleExcursion();
                });
            }
        };

        synchronize();
        motionPreference.addEventListener("change", synchronize);

        return () => {
            clearTimers();
            motionPreference.removeEventListener("change", synchronize);
        };
    }, [value]);

    return (
        <p className={styles["worldline-value"]}>
            <span className="visually-hidden">{value}</span>
            <span aria-hidden="true">
                {[...displayValue].map((character, index) => (
                    <span
                        className={`${styles["worldline-digit"]}${
                            flickeringDigit === index
                                ? ` ${styles["is-flickering"]}`
                                : ""
                        }`}
                        key={index}
                    >
                        {character}
                    </span>
                ))}
            </span>
        </p>
    );
};

export default DivergenceMeter;
