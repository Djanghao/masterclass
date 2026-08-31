# C++ solution

**Author:** pejmantheory
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-derangement-of-an-array/solutions/3922381/](https://leetcode.com/problems/find-the-derangement-of-an-array/solutions/3922381/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
 public:
  int findDerangement(int n) {
    dp.resize(n + 1);
    return find(n);
  }

 private:
  static constexpr int kMod = 1'000'000'007;
  vector<int> dp;

  int find(int i) {
    if (i == 0)
      return 1;
    if (i == 1)
      return 0;
    if (dp[i])
      return dp[i];
    return dp[i] = (i - 1L) * (find(i - 1) + find(i - 2)) % kMod;
  }
};

```