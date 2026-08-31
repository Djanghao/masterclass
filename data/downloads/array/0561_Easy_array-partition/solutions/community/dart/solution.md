# easy to understand || simple || small code

**Author:** sana_123
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-partition/solutions/6044293/](https://leetcode.com/problems/array-partition/solutions/6044293/)

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
  int arrayPairSum(List<int> nums) {
    nums.sort();
    int sum=0;
    for(int i=0;i<nums.length;i+=2){
        sum+=nums[i];
    }
    return sum;
  }
}
```