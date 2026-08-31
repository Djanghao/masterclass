# 1742 | JavaScript One-Line Solution

**Author:** Sporkyy
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/1045627/](https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/1045627/)

---

> Runtime: **344 ms**, faster than *100.00%* of JavaScript online submissions
> Memory Usage: **55.8 MB**, less than *100.00%* of JavaScript online submissions

```javascript
/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
const countBalls = (lowLimit, highLimit) =>
  Math.max(
    ...new Array(highLimit - lowLimit + 1)
      .fill()
      .reduce(
        (acc, _, idx) =>
          (sum => acc.set(sum, (acc.get(sum) || 0) + 1))(
            [...`${lowLimit + idx}`].map(Number).reduce((a, c) => a + c),
          ),
        new Map(),
      )
      .values(),
  );
```

And here are the boring solutions.

> Runtime: **156 ms**, faster than *59.09%* of JavaScript online submissions
> Memory Usage: **39 MB**, less than *80.91%* of JavaScript online submissions

```javascript
/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
 const countBalls = (lowLimit, highLimit) => {
  const cnts = new Map();
  for (let i = lowLimit, sum = 0; i <= highLimit; i++, sum = 0) {
    for (let j = i; j; j = Math.trunc(j / 10)) sum += j % 10;
    cnts.set(sum, (cnts.get(sum) || 0) + 1);
  }
  return Math.max(...cnts.values());
};
```

Here is an obvious variant that keeps track of the maximum count during
the loop. The Constraint results in so few possibilities there is little
practical difference with the code above.

> Runtime: **164 ms**, faster than *54.55%* of JavaScript online submissions
> Memory Usage: **38.9 MB**, less than *90.00%* of JavaScript online submissions

```javascript
/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
const countBalls = (lowLimit, highLimit) => {
  const cnts = new Map();
  let max = -Infinity;
  for (let i = lowLimit, sum = 0; i <= highLimit; i++, sum = 0) {
    for (let j = i; j; j = Math.trunc(j / 10)) sum += j % 10;
    const cnt = (cnts.get(sum) || 0) + 1;
    cnts.set(sum, cnt);
    max = Math.max(max, cnt);
  }
  return max;
};
```