# Easiest Solution out there in O(n).

**Author:** No_one_can_stop_me
**Votes:** 12
**Link:** [https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/3467980/](https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/3467980/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n + k)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public int maximizeSum(int[] nums, int k) {
        int max = 0;
        for(int i = 0; i<nums.length; i++){ 
            max = Math.max(max, nums[i]);
        }
        
        int ans = 0;
        while(k>0){
            ans+=max;
            max = max+1;
            k--;
        }
        return ans;
    }   
}
```