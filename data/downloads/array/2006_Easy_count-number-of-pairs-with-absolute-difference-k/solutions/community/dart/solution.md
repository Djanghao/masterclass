# Simple Approach !

**Author:** jasijasu959
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/5211577/](https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/5211577/)

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
  int countKDifference(List<int> nums, int k) {
    int count = 0;
    for(int i = 0 ;  i < nums.length ; i++){
        for(int j = i+1; j< nums.length ; j++){
            if( i !=j && nums[i] - nums[j] == k || nums[j] - nums[i] == k){
                count ++;
            }
        }
    }
    return count;
  }
}
```