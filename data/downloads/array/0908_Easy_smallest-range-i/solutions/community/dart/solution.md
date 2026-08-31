# Easy Approach

**Author:** jincykp
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-range-i/solutions/5973067/](https://leetcode.com/problems/smallest-range-i/solutions/5973067/)

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
  int smallestRangeI(List<int> nums, int k) {
    int minValue=nums.reduce(min);
    int maxValue=nums.reduce(max);
    int minResult=minValue+k;
    int maxResult=maxValue-k;
    if(minResult>maxResult){
        return 0;
    }else{
        return maxResult-minResult;
    }
  }
}
```