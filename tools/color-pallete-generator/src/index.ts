// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept();
}

const hueInput = document.querySelector("#hue-input") as HTMLInputElement;
const saturationInput = document.querySelector(
  "#saturation-input"
) as HTMLInputElement;
const baseInput = document.querySelector("#base-input") as HTMLInputElement;
const stepInput = document.querySelector("#step-input") as HTMLInputElement;
const runButton = document.querySelector("#run") as HTMLButtonElement;
const target = document.querySelector("#target") as HTMLElement;

runButton?.addEventListener("click", () => {
  target.innerHTML = "";

  const hue = Number(hueInput.value);
  const saturation = Number(saturationInput.value);
  const step = Number(stepInput.value);
  const base = Number(baseInput.value);

  for (let i = 0; 9 >= i; i++) {
    // $lightness: $lightness-base + ($lightness-step * (9 - $i)) + "%";
    // prettier-ignore
    const lightness = base + step * (9 - i);
    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

    const item = document.createElement("li");
    item.style.width = "100px";
    item.style.height = "70px";
    item.style.background = color;
    target.appendChild(item);

    document.body.style.setProperty(`--color-gray-${i * 100}`, color);
  }
});
