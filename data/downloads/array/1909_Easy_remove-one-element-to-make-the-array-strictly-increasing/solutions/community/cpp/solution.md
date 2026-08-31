# O(n) C++ Solution (100% beats) without any Stack or Lengthy code

**Author:** cafecoder22
**Votes:** 24
**Link:** [https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/solutions/3152791/](https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/solutions/3152791/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
check for singular or zero discountinuity from both sides of given array

# Complexity
- Time complexity:
o(n)

- Space complexity:
- o(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    bool canBeIncreasing(vector<int>& nums) {

        // check for singular or zero discountinuity from both sides of given array 
        int ct1=0,ct2=0;
        int maxi = nums[0];
        int mini = nums[nums.size()-1];
        //check from front
        for(int i=1;i<nums.size();i++){
            if(maxi>=nums[i]) ct1++;
            maxi = max(maxi,nums[i]); 
        }
        //check from back
        for(int i=nums.size()-2;i>=0;i--){
            if(mini<=nums[i]) ct2++;
            mini = min(mini,nums[i]); 
        }
        //if any side traversal have only one or zero discontinuity then return true 
        //because after removing singular discontinuity array can be made strictly      increasing
        if(ct1==1||ct1==0||ct2==1||ct2==0) return true;

        return false;
    }
};
```
Please do upvote if you understand....