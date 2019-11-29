import { useRef, useEffect } from 'react';

export function useInterval(fn: () => any, delay: number): void {
    const savedCallback = useRef(() => {});

    useEffect(() => {
        savedCallback.current = fn;
    });

    useEffect(() => {
        const tick = () => savedCallback.current();

        const id = setInterval(tick, delay);
        return () => clearInterval(id);
    }, [delay]);
}
