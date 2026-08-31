# TypeScript | One-Pass Summation

**Author:** Matt_HackerMan
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/solutions/4983526/](https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/solutions/4983526/)

---

```
const interchangeableRectangles = (rectangles: number[][]): number => {
    let sum = 0;
    let map: { [key: string]: number } = {};
    for (let r of rectangles) {
        let ratio = (r[0] / r[1]).toString();
        if (map[ratio] == null) {
            map[ratio] = 1;
        }
        else ++map[ratio];
        sum += map[ratio] - 1;
    }
    return sum;
};
```