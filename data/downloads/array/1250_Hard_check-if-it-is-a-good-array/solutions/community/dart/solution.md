# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-it-is-a-good-array/solutions/4326958/](https://leetcode.com/problems/check-if-it-is-a-good-array/solutions/4326958/)

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
  bool isGoodArray(List<int> nums) {
    var res = nums.first;

    for (int i = 1; i < nums.length; i++) {
        res = gcd(res, nums[i]);
    }

    return res == 1;
  }

  int gcd(int a, int b) {
      if (b == 0) {
          return a; 
      }

      return gcd(b, a % b);
  }
}
```