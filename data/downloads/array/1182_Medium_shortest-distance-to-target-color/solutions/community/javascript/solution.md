# Super simple javascript, beats 100%, O(n + m) runtime, O(n) space

**Author:** beaum
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-distance-to-target-color/solutions/1274537/](https://leetcode.com/problems/shortest-distance-to-target-color/solutions/1274537/)

---

O(n + m), where n is size of `colors` and m is size of `queries`
```
const shortestDistanceColor = (colors, queries) => {
  const memo = [1, 2, 3].map(target => {
    const currentMemo = Array(colors.length).fill(-1);
    let previous = -1;
    for (let i = 0; i < colors.length; i += 1) {
      if (colors[i] === target) {
        if (previous === -1) {
          for (let k = 0; k <= i; k += 1) {
            currentMemo[i - k] = k;
          }
        } else {
          for (let k = 0; 2 * k < i - previous; k += 1) {
            currentMemo[i - k] = k;
          }
        }
        previous = i;
      } else if (previous !== -1) {
        currentMemo[i] = i - previous;
      }
    }
    return currentMemo;
  });
  return queries.map(([index, color]) => memo[color - 1][index]);
};
```