# [JavaScript] Easy to understand - 3 solutions

**Author:** poppinlp
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/solutions/450470/](https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/solutions/450470/)

---

### SOLUTION 1

It's a brute force solution. We traversal all possible `x` and `y` and then get the result.
But pay attention, the custom function is constantly increasing. So we can break the inner loop when we find an answer.

```js
const findSolution = (f, z) => {
  const ret = [];
  for (let x = 1; x <= 1000; ++x) {
    for (let y = 1; y <= 1000; ++y) {
      if (f.f(x, y) === z) { ret.push([x, y]); break; }
    }
  }
  return ret;
};
```

### SOLUTION 2

Since it's constantly increasing, so actually it's the same as finding a number in an ordered array.
So we can use binary search to make it faster. And there are some little optimizations in the code.

```js
const findSolution = (f, z) => {
  const ret = [];
  let max = 1000;
  for (let x = 1; x <= 1000; ++x) {
    if (max === 1) break;
    for (let left = 1, right = max; left < right;) {
      const mid = Math.floor((right + left) / 2);
      const val = f.f(x, mid);
      if (val === z) {
        ret.push([x, mid]);
        max = mid;
        break;
      }
      val < z ? (left = mid + 1) : (right = mid, max = mid);
    }
  }
  return ret;
};
```

### SOLUTION 3

For both `x` and `y`, the custom function is constantly increasing. So we can use the strategy similar to two pointer loop to traversal the possible number.
It's a more linear way.

```js
const findSolution = (f, z) => {
  const ret = [];
  for (let x = 1, y = 1000; x <= 1000 && y >= 1;) {
    const val = f.f(x, y);
    val === z && ret.push([x, y]);
    val < z ? ++x : --y;
  }
  return ret;
};
```