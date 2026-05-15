const stage = document.querySelector(".signal-stage");
const caption = document.querySelector(".stage-caption");

const states = [
  "Create / Amplify / Imagine / Repeat",
  "Systems / Signals / Software / Scale",
  "Human / Machine / Direction / Momentum",
];

let stateIndex = 0;

if (stage && caption) {
  stage.addEventListener("pointermove", (event) => {
    const bounds = stage.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 18;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 18;

    stage.style.setProperty("--tilt-x", `${y.toFixed(2)}deg`);
    stage.style.setProperty("--tilt-y", `${-x.toFixed(2)}deg`);
  });

  stage.addEventListener("pointerleave", () => {
    stage.style.removeProperty("--tilt-x");
    stage.style.removeProperty("--tilt-y");
  });

  window.setInterval(() => {
    stateIndex = (stateIndex + 1) % states.length;
    caption.textContent = states[stateIndex];
  }, 2800);
}
