import { ACHIEVE_COLOR } from "constant/color";

const degree = [
  { color: ACHIEVE_COLOR[0], min: 1 },
  { color: ACHIEVE_COLOR[1], min: 3 },
  { color: ACHIEVE_COLOR[2], min: 5 },
  { color: ACHIEVE_COLOR[3], min: 7 },
];

export default degree;

export const getAchieveColor = (count) => {
  const reverse = Array.from(degree).reverse();

  for (const d of reverse) {
    if (count >= d.min) {
      return d.color;
    }
  }

  return "#fff";
};
