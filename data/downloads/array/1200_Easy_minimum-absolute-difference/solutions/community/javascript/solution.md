# JavaScript Simple Solution

**Author:** shengdade
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-absolute-difference/solutions/520666/](https://leetcode.com/problems/minimum-absolute-difference/solutions/520666/)

---

```javascript
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
  const ans = [];
  arr.sort((a, b) => a - b);
  let minDiff = Infinity;
  for (let i = 1; i < arr.length; i++) {
    minDiff = Math.min(minDiff, arr[i] - arr[i - 1]);
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === minDiff) ans.push([arr[i - 1], arr[i]]);
  }
  return ans;
};
```

* 36/36 cases passed (164 ms)
* Your runtime beats 94.32 % of javascript submissions
* Your memory usage beats 100 % of javascript submissions (43.8 MB)