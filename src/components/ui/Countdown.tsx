"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";

interface CountdownProps {
  targetDate: Date;
  onComplete?: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const emptySubscribe = () => () => {};

export function Countdown({ targetDate, onComplete }: CountdownProps) {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const getTimeLeft = useCallback((): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft());

  useEffect(() => {
    if (!mounted) return;

    const checkCompletion = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      if (difference <= 0) {
        onComplete?.();
      }
    };

    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
      checkCompletion();
    }, 1000);

    return () => clearInterval(timer);
  }, [mounted, getTimeLeft, targetDate, onComplete]);

  const timeUnits = [
    { value: mounted ? timeLeft.days : 0, label: "Days" },
    { value: mounted ? timeLeft.hours : 0, label: "Hours" },
    { value: mounted ? timeLeft.minutes : 0, label: "Mins" },
    { value: mounted ? timeLeft.seconds : 0, label: "Secs" },
  ];

  return (
    <div className="flex gap-2 xs:gap-3 sm:gap-4">
      {timeUnits.map(({ value, label }) => (
        <div
          key={label}
          className="flex flex-col items-center p-2 xs:p-3 sm:p-4 min-w-[52px] xs:min-w-[60px] sm:min-w-[80px] rounded-xl bg-foreground/5 border border-border hover:bg-foreground/10 transition-colors"
        >
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
            {mounted ? value.toString().padStart(2, "0") : "--"}
          </div>
          <div className="text-[9px] xs:text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mt-0.5 sm:mt-1">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
