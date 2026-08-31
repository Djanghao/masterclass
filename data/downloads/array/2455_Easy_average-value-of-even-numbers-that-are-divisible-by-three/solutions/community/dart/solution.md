# Solution for dart

**Author:** abiinavvv
**Votes:** 0
**Link:** [https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/solutions/6061140/](https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/solutions/6061140/)

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
  int averageValue(List<int> nums) {
    int sum = 0;
    int count =0;
    for(int i = 0; i< nums.length;i++){
        if(nums[i] % 2 == 0 && nums[i] % 3 == 0){
            sum += nums[i];
            count++;
        }
    }
    return count > 0 ? sum ~/ count : 0;
  }
}
```