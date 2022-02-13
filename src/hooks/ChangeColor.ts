export function randomRGB(): number[] {
  const R = Math.floor(Math.random() * 255);
  const G = Math.floor(Math.random() * 255);
  const B = Math.floor(Math.random() * 255);

  return [R, G, B];
}

export function changeColorByDifference(
  color: number[],
  difference: number
): number[] {
  const changedColor = color.map(
    (element) => element - Math.ceil(difference / 3)
  );
  return changedColor;
}
