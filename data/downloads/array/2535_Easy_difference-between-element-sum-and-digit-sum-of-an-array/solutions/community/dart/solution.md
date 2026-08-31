# Dart Solution

**Author:** abiinavvv
**Votes:** 0
**Link:** [https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/6084177/](https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/6084177/)

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
```dart []
class Solution {
  int differenceOfSum(List<int> nums) {
    int sum = 0;
    int digitSum = 0;
    List<int> splitDigits =[];
    for(int i = 0;i<nums.length;i++){
        sum+=nums[i];
    }
    String digits = nums.join();
    for(int i = 0;i<digits.length;i++){
        digitSum += int.parse(digits[i]);
    }
      return sum - digitSum;
  }

}
```