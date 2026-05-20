"use client";

import { useEffect, useRef, useState } from "react";

const states = [
  "Create / Amplify / Imagine / Repeat",
  "Systems / Signals / Software / Scale",
  "Human / Machine / Direction / Momentum",
];

export function SignalStage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [captionIndex, setCaptionIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCaptionIndex((current) => (current + 1) % states.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div
      className="signal-stage"
      aria-label="Creation and inspiration loop"
      ref={stageRef}
      onPointerMove={(event) => {
        const stage = stageRef.current;

        if (!stage) {
          return;
        }

        const bounds = stage.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 18;
        const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 18;

        stage.style.setProperty("--tilt-x", `${y.toFixed(2)}deg`);
        stage.style.setProperty("--tilt-y", `${-x.toFixed(2)}deg`);
      }}
      onPointerLeave={() => {
        const stage = stageRef.current;

        if (!stage) {
          return;
        }

        stage.style.removeProperty("--tilt-x");
        stage.style.removeProperty("--tilt-y");
      }}
    >
      <div className="stage-grid" />
      <div className="signal-ring">
        <span className="node node-output">Output</span>
        <span className="node node-systems">Systems</span>
        <span className="node node-imagination">Imagination</span>
        <span className="node node-making">Making</span>
      </div>
      <p className="stage-caption">{states[captionIndex]}</p>
    </div>
  );
}
