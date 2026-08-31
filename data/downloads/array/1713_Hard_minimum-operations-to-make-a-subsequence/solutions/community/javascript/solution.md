# [Javascript] O(nlgn) LIS (Longest Increasing Subsequence)

**Author:** zachzwy
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/solutions/1000514/](https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/solutions/1000514/)

---

```
var minOperations = function(T, A) {
  const idxMap = {};
  for (let i = 0; i < T.length; i++) idxMap[T[i]] = i;
  const arr = [];
  for (let n of A) if (idxMap[n] !== undefined) arr.push(idxMap[n]);
  return T.length - lengthOfLIS(arr);
}

var lengthOfLIS = function (A) {
  const dp = Array(A.length).fill(0); // The smallest number in that pile
  let size = 0;
  for (let n of A) {
    let [i, j] = [0, size];
    while (i < j) {
      const m = (i + j) >> 1;
      if (n > dp[m]) i = m + 1;
      else j = m;
    }
    dp[i] = n;
    size = Math.max(i + 1, size);
  }
  return size;
};
```