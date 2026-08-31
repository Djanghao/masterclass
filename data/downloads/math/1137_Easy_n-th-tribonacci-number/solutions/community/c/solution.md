# [C++] Simple 4-line DP solution, O(1) space

**Author:** mhelvens
**Votes:** 60
**Link:** [https://leetcode.com/problems/n-th-tribonacci-number/solutions/348040/](https://leetcode.com/problems/n-th-tribonacci-number/solutions/348040/)

---

We only need to store three values at a time. Let's use a static array and modulo-3 indexing.

```C++
int tribonacci(int n) {
  int dp[3] = {0, 1, 1};
  for (int i = 3; i <= n; ++i)
    dp[i%3] += dp[(i+1)%3] + dp[(i+2)%3];
  return dp[n%3];
}
```