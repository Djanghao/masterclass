# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/solutions/4327021/](https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/solutions/4327021/)

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
  int minOperations(List<int> nums, List<int> numsDivide) {
    final gcdVal = numsDivide.fold<int>(0, (a, b) => gcd(a, b));
    nums.sort();
    for (int i = 0; i < nums.length; i++) {
        if (gcdVal % nums[i] == 0) {
            return i;
        }
    }
    return -1;
  }

  int gcd(int a, int b) {
    if (b == 0) {
        return a;
    }

    return gcd(b, a % b);
  }
}
```