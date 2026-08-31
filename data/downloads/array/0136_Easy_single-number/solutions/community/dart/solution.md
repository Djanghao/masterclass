# Easy Dart solution

**Author:** Durgaprasad404
**Votes:** 5
**Link:** [https://leetcode.com/problems/single-number/solutions/3055548/](https://leetcode.com/problems/single-number/solutions/3055548/)

---

# Intuition
Any number XORed with 0 will return that number and any number XORed with itself will be 0

# Approach
Iterate through the array and XOR each element with the result

# Complexity
- Time complexity:
$$O(n)$$


# Code
```
class Solution {
  int singleNumber(List<int> nums) {
      int result = 0;
      for (int num in nums) {
          result = result ^ num;
      }
      return result;
  }
}
```