# Javascript Solution

**Author:** joenix
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-boxes/solutions/2017432/](https://leetcode.com/problems/remove-boxes/solutions/2017432/)

---

```
var removeBoxes = function (boxes) {
  const merged = []
  const points = []
  let count = 1

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i] !== boxes[i + 1]) {
      merged.push(boxes[i])
      points.push(count)
      count = 1
      continue
    }
    count++
  }

  const size = merged.length;
  const dp = Array.from({ length: size }, () => Array.from({ length: size }, () => new Uint16Array(boxes.length)))

  const calculate = (l, r, p) => {
    if (l > r) {
        return 0
    }

    if (dp[l][r][p]) {
        return dp[l][r][p]
    }

    let point = points[l] + p
    let max = point * point + calculate(l + 1, r, 0)

    for (let i = l + 1; i <= r; i++) {
      if (merged[i] === merged[l]) {
        max = Math.max(max, calculate(l + 1, i - 1, 0) + calculate(i, r, point))
      }
    }

    dp[l][r][p] = max
    return max
  }

  return calculate(0, size - 1, 0)
}
```