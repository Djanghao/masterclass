# Dart 1ms

**Author:** Muhammed_Shebin
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/6067416/](https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/6067416/)

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
  List<int> getSneakyNumbers(List<int> nums) {
    List<int> result=[];
    for(int i =0;i<nums.length;i++){
        for(int j=0;j<i;j++){
            if(nums[i]==nums[j]){
                result.add(nums[j]);
            }
        }
    }
    return result;
  }
}
```