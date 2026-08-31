# easy solution

**Author:** iftixorrustamovv
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/solutions/5603855/](https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/solutions/5603855/)

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
  bool canBeIncreasing(List<int> nums) {
    int count = 0;
    for (int i = 1; i < nums.length && count < 2; i++) {
        if(nums[i - 1] >= nums[i]){
            ++count;
            if(i>1 &&nums[i - 2] >= nums[i]){
                nums[i] = nums[i-1];
            }
        }
    }
    return count < 2;
  
    }
}

```