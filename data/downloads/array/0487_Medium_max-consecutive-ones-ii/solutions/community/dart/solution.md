# Beats 100% of both runtime and memory in Dart

**Author:** bartholomew-kang
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-consecutive-ones-ii/solutions/3854586/](https://leetcode.com/problems/max-consecutive-ones-ii/solutions/3854586/)

---

# Intuition
- Set two sliding windows and save the maximum window size when meet the zero.


# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```
class Solution {
  int findMaxConsecutiveOnes(List<int> nums) {
      var left = 0, right = 0, max = 0;

    for(var idx = 0; idx < nums.length; idx++){
        final curr = nums[idx];
        if(curr == 0){
            if(left > max) max = left;
            left = right + 1;
            right = 0;
        } else {
            left++;
            right++;    
        }
    }

    return left > max ? left : max;
  }
}
```