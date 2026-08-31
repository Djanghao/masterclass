# one loop

**Author:** Ajaymanikandan
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solutions/5062282/](https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solutions/5062282/)

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
  bool kLengthApart(List<int> nums, int k) {
    int count=k;
    for(var i=0;i<nums.length;i++){
        if(nums[i]==1){
         if(count<k) return  false;
         count =0;
        }else{ count ++;}
    }
    return true;
    
  }
}
```