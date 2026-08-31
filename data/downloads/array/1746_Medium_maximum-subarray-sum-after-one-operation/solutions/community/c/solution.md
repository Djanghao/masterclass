# Top Down -> Bottom Up -> Bottom Up with O(1) Space

**Author:** yadavgaurav251
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximum-subarray-sum-after-one-operation/solutions/1440772/](https://leetcode.com/problems/maximum-subarray-sum-after-one-operation/solutions/1440772/)

---

## Top Down Solution-
```
class Solution {
    public:
    int dp[100001][2];
    int final_ans=0;
    /*
    At each index we have these choices-
        1)Add element to Subarray
            i) Square and add 
            ii) Normally Add
        2)Don't add element
    */ 
    int helper(int index,bool canSquare,vector<int>&nums)
    {
        if(index>=nums.size())   
            return 0;
        else if(dp[index][canSquare]!=-1)
            return dp[index][canSquare];
        else
        {
            int ans=0;
            if(canSquare)
            {
                // canSquare determines if we can Square the element or not
                ans=max(nums[index]*nums[index],(nums[index]*nums[index])+helper(index+1,false,nums));
            }
            // Caculating answer for other choices (Dont Add , Normally Add )
            ans=max(ans,max(nums[index]+helper(index+1,canSquare,nums),nums[index]));
            // note normally adding and dont add doesn't effect CanSquare Value
            
            final_ans=max(final_ans,ans);   // Store the Max Value 

            return dp[index][canSquare]=ans;
        }
    }

    int maxSumAfterOperation(vector<int>& nums) {

        memset(dp,-1,sizeof(dp));
        final_ans=nums[0];
        helper(0,true,nums);

        return final_ans;
    }
};
```

## Bottom Up Solution

```
class Solution {
public:
    int maxSumAfterOperation(vector<int>& nums) {
        int n=nums.size();
        vector<int> squared(n),not_squared(n);
        
        not_squared[0]=nums[0];
        squared[0]=nums[0]*nums[0];
        
        int ans=squared[0];
        for(int i=1;i<n;i++)
        {
        
            not_squared[i]=max(not_squared[i-1]+nums[i],0);     
            /*
                For Square we have two choices
                    1) Add nums[i] to previous Squared Value
                    2) Add nums[i]*nums[i] to the last Non_Squared Value (i.e not_squared[i-1])
            */
            squared[i]=max(squared[i-1]+nums[i],not_squared[i-1]+nums[i]*nums[i]);  
            ans=max(ans,squared[i]);
        }
        
        return ans;
    }
};
```

## Bottom Up - With O(1) Space

We can observe in the above code that we don't really need all the previous states,just the last value is more than enough.

```
class Solution {
public:
    int maxSumAfterOperation(vector<int>& nums) {
        int n=nums.size();
        int squared,not_squared;
        
        not_squared=nums[0];
        squared=nums[0]*nums[0];
        
        int ans=squared;
        for(int i=1;i<n;i++)
        {
            squared=max(squared+nums[i],not_squared+nums[i]*nums[i]);  
            not_squared=max(not_squared+nums[i],0);     
			// Note squared need to be updated first or else it will endup using the current elements not_squared value
            ans=max(ans,squared);
        }
        
        return ans;
    }
};
```
