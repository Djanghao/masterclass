# 100% beats runtime and memory (Minimum Number of Operations to Make Array XOR Equal to K)

**Author:** Motabbir
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/solutions/5088233/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/solutions/5088233/)

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
  int minOperations(List<int> nums, int k) =>
      nums.fold(k, (prev, curr) => prev ^= curr).bitCount;
}

extension on int {
  int get bitCount {
    var number = this;
    var count = 0;
    while (number != 0) {
      if (number.isOdd) count++;
      number = number >> 1;
    }
    return count;
  }
}
```