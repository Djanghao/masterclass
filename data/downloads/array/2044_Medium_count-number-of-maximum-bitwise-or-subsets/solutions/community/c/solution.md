# Simple recursive solution

**Author:** ayashi
**Votes:** 12
**Link:** [https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/solutions/1525206/](https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/solutions/1525206/)

---

**Maximum Bitwise-OR** is possible when we take **bitwise-or of all the numbers.**

Step 1: Calculate the bitwise of all the numbers.
Step 2: Find all bitwise of all the possible subsets recursively.
Step 3: Simply compare the values of step 2 with step 1

'''
class Solution {
public:
    
    int subset(vector<int> &nums, int i, int a,int b)
    {
        int ans =0;
        if(i<0)
            return 0;
        if(a == (b|nums[i]))
            ans =1;
        return ans + subset(nums,i-1,a,b) + subset(nums,i-1,a,b|nums[i]);
    }
    
    int countMaxOrSubsets(vector<int>& nums) {
        
        int a=0;
        
        for(auto i:nums)
        {
            a = a|i;
        }
        
        int ans = subset(nums,nums.size()-1,a,0);
            
        return ans ;
        
    }
};
'''