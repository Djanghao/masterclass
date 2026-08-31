# C++ || Recursion+Memoization || explained

**Author:** Aayush_Lit2020053
**Votes:** 31
**Link:** [https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/solutions/3739319/](https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/solutions/3739319/)

---

# Intuition
If we are at any index i then we can have multiple indexes to which we can jump.So we need to explore all possible choices.
So how we explore all choices ?? RECURSION 

# Approach
Let's suppose we are at index i.We will loop from i+1 till nums.size()
and check whether we can jump to current index.
To check whether you can jump just ensure that condition is fulfilled:
abs(nums[ind]-nums[i])<=target
If we can jump we will move to index ind ,increase jumps by 1 and calculate ans for ind;



# Reecursive Code [TLE]
```
class Solution {
public:
    
    int find(int ind,vector<int>&nums,int tar)
    {
        if(ind==nums.size()-1)
        {
            return 0;
        }
        
        
        int ans=INT_MIN;
        
        for(int i=ind+1;i<nums.size();i++)
        {
            if(abs(nums[i]-nums[ind])<=tar) //checking  if we can jump to i
            {
                ans=max(ans,1+find(i,nums,tar)); // jump to i 
            }
        }
        return ans;
    }
    int maximumJumps(vector<int>& nums, int tar)
    {
       
        int ans=find(0,nums,tar);
       if(ans>0)
           return ans;
        else
            return -1;
    }
};
```
# Complexity of recursive code
- Time complexity:
no of states=n 
 and in each state we are doing a loop from i+1 to n
so TC=n^n
  

- Space complexity:
- Auxiliary stack space :O(n)



# Memoized Code[ACCEPTED]
```
class Solution {
public:
    
    int find(int ind,vector<int>&nums,int tar,vector<int>&dp)
    {
        if(ind==nums.size()-1)
        {
            return 0;
        }
        
        if(dp[ind]!=-1)
            return dp[ind];
        
        int ans=INT_MIN;
        
        for(int i=ind+1;i<nums.size();i++)
        {
            if(abs(nums[i]-nums[ind])<=tar)
            {
                ans=max(ans,1+find(i,nums,tar,dp));
            }
        }
        return dp[ind]=ans;
    }
    int maximumJumps(vector<int>& nums, int tar)
    {
        vector<int>dp(nums.size(),-1);
        int ans=find(0,nums,tar,dp);
       if(ans>0)
           return ans;
        else
            return -1;
    }
};
```



