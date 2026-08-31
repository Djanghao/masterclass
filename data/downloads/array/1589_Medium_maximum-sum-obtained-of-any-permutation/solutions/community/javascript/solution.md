# [JavaScript] 1589. Maximum Sum Obtained of Any Permutation

**Author:** pgmreddy
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/solutions/4190943/](https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/solutions/4190943/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Multiple concepts involved
Change the variable names to understand better, or work on paper
I like the getRangeCoeffs in the solution, which runs in O(N)

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

---

```
function getRangeCoeffs(n, queries) {
  let coeffs = new Array(n + 1).fill(0);
  for (let [s, e] of queries) {
    coeffs[s] += 1;
    coeffs[e + 1] -= 1;
  }
  for (let i = 1; i < n; i++) {
    coeffs[i] += coeffs[i - 1];
  }
  return coeffs;
}

var maxSumRangeQuery = function (nums, requests) {
  const MOD = 10 ** 9 + 7;
  let n = nums.length;

  let coeffs = getRangeCoeffs(n, requests);

  coeffs.sort((a, b) => b - a);
  nums.sort((a, b) => b - a);

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += (coeffs[i] * nums[i]) % MOD;
    sum %= MOD;
  }
  return sum;
};
```

---
