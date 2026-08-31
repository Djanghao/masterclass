# Double Reversal Check

**Author:** akhilsnediyathu
**Votes:** 0
**Link:** [https://leetcode.com/problems/a-number-after-a-double-reversal/solutions/5701784/](https://leetcode.com/problems/a-number-after-a-double-reversal/solutions/5701784/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is about checking whether a number remains the same after two reversals. My intuition is that the number will remain the same unless it ends with a zero (but is not zero itself), as reversing the number will drop the trailing zero.

# Approach
<!-- Describe your approach to solving the problem. -->
1. If the number is zero, it will remain zero after any number of reversals.
2. If the number does not end with a zero, it will remain the same after two reversals.
3. If the number ends with a zero (and is not zero itself), reversing it will remove the trailing zero, and thus after two reversals, it won't be the same as the original number.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity is $$O(1)$$ since the operations are constant time checks.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is $$O(1)$$ since no additional space is used apart from a few variables.

# Code
```dart []
class Solution {
  bool isSameAfterReversals(int num) {
   if(num == 0 || num%10 != 0){
    return true;
   }else{
    return false;
   }
  }
}
```