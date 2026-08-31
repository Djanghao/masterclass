# Dart Solution

**Author:** Jithin_Vadakkekalam
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-maximum-divisibility-score/solutions/4427842/](https://leetcode.com/problems/find-the-maximum-divisibility-score/solutions/4427842/)

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
  int maxDivScore(List<int> nums, List<int> divisors) {
    var ans = -1;
    var most = -1;

    for (var d in divisors) {
      var cnt = nums.where((n) => n % d == 0).length;

      if (cnt > most || (cnt == most && d < ans)) {
        ans = d;
        most = cnt;
      }
    }

    return ans;
  }
}
```