# Easy Approach !

**Author:** jasijasu959
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/5187113/](https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/5187113/)

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
  int countElements(List<int> nums) {
    int count = 0;
    int n = nums.length-1;
    
    nums.sort();
    print(nums);
    for(int i = 0 ; i < n ; i++){
        if(nums[i] != nums[0] && nums[i] != nums.last){
            count++;
        }
    }
    return count;
  }
}
```