# ✅C++ | ✅Prefix Sum | ✅Easy O(N) solution

**Author:** Yash2arma
**Votes:** 10
**Link:** [https://leetcode.com/problems/number-of-ways-to-split-array/solutions/2038290/](https://leetcode.com/problems/number-of-ways-to-split-array/solutions/2038290/)

---

**Please upvote if you find this solution helpful :)**

**TC- O(N), SC- O(1)**
```
class Solution {
public:
    
    //store total sum of nums in right_sum and iterate over nums
    //add nums[i] in left sum and subtract nums[i] from right sum
    //when condition match increase valid_split by 1.
    int waysToSplitArray(vector<int>& nums) 
    {
        int valid_split=0;
        long long right_sum=0, left_sum=0;
        
        //store total sum of nums in right_sum
        for(int i=0; i<nums.size(); i++) right_sum += nums[i];
        
        for(int i=0; i<nums.size()-1; i++)
        {
            left_sum += nums[i]; //add nums[i] in left sum 
            right_sum -= nums[i]; // and subtract nums[i] from right sum
            
            //check whether left_sum is greater than or equal to right_sum
            //and increase the valid_split by 1
            if(left_sum >= right_sum) 
                valid_split++; 
        }
        return valid_split;
        
    }
};
```