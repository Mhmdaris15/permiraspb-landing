import { useEffect, useState } from "react";

/** Live Moscow-time clock, formatted exactly like the prototype: "СПб · HH:MM:SS MSK". */
export const useClock = () => {
  const [label, setLabel] = useState("—");

  useEffect(() => {
    const tick = () => {
      const t = new Date().toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Europe/Moscow",
      });
      setLabel(`СПб · ${t} MSK`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return label;
};
