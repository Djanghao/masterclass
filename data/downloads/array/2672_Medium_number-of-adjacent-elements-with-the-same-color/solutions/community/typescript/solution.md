# TypeScript Solution

**Author:** weixinnnn
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/solutions/3505297/](https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/solutions/3505297/)

---

```
const colorTheArray = (n: number, queries: number[][]): number[] => {
  const colorArr = Array(n);
  const adjacentElements = Array(queries.length).fill(0);
  let count = 0;

  queries.forEach(([index, color], i) => {
    const prevColor = colorArr[index];
    colorArr[index] = color;

    if (prevColor === color) {
      adjacentElements[i] = count;
      return;
    }

    if (count && prevColor && colorArr[index - 1] === prevColor) count--;
    if (count && prevColor && colorArr[index + 1] === prevColor) count--;

    if (colorArr[index - 1] === color) count++;
    if (colorArr[index + 1] === color) count++;

    adjacentElements[i] = count;
  });

  return adjacentElements;
};

```