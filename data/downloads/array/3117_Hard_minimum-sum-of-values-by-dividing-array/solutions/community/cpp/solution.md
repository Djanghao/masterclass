# ✔Super intuitive and detailed explanation || Standard DP || C++

**Author:** scanout
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-sum-of-values-by-dividing-array/solutions/5024119/](https://leetcode.com/problems/minimum-sum-of-values-by-dividing-array/solutions/5024119/)

---

# Intuition
At the first glance the problem looks like it can be solved with DP to get the optimal answer, as we got to check for every possible state to get to the optimal answer. The only problem is that it will take O(n x n x m) time complexity, which is making us feel noobie\uD83D\uDE01. And noobie's solution gives TLE for such problems. Let's get pro! 

# Approach
**Inefficient solution O(n x n x m):-**

We will use dp[i][j] such that it will tell us the optimal sum if we have elements from index i to n in nums and j to m in andValues. dp[0][0] will produce the final answer.

for each state solve(i, j), we will run a loop from i to n to find the indexes k which staisfies AND( nums[i] to nums[k] ) == andValues[j], and get minimum of solve(k+1,j+1)+ nums[k] for all such k.



**Efficient solution O(n x m x log(n) ) :-**

We need to eliminate the additional looping in our solve function. An important observation here is that for a given array of integers, the AND prefix of the array will always be non-increasing. 
Example:-  2 3 2 4
AND prefix:- 2 2 2 0 

We will use binary search to find the first index k which satisfies that contition AND( nums[i] to nums[k] ) == andValues[j].

We will transit accordingly, from solve(i, j) to solve(k+1,j+1).

Now for each state, solve(i,j), we have two choices. Either we include current element nums[i] to the previous segment or start a new one. Inorder to include the current nums[i] to previous segment andValues[j-1] & nums[i] == andValues[j-1] should hold. Think why?

If we are starting a new one than simplay find the first index k which statisfies the condition. dp[i][j] will be assigned the minimum sum from these two choices.

Go through the code for clear understanding and implementation assistance.


# Complexity
- Time complexity:
O(n x m x log(n))

 
# Code
```
class Solution {
public:
    //foxed
    
    int dp[10][10000];
    int prefix[10001][20];

    int solve(int index, int ind, vector<int>& nums, vector<int>& andV)
    {
       if(index==nums.size())
       {
        if(ind == andV.size() )return 0;
        return 1e9;
       }
       if(ind == andV.size())
       {
         if( (nums[index]& andV[ind-1])  == andV[ind-1])
         return solve(index+1, ind, nums, andV) - nums[index-1]+nums[index];

         else return 1e9;
       }

       if(dp[ind][index]!=-1)
       return dp[ind][index];
       
       int mini= 1e9;

       
       if( ind>0 && (andV[ind-1] == (andV[ind-1] & nums[index])) )
       mini= min(mini, solve(index+1, ind, nums, andV)+ nums[index]- nums[index-1]);


       int low=index+1, high=nums.size();
       int l=high+1;

       while(low<=high){
          int mid= (low+high)>>1;
          int val=0;

          for(int bit=0; bit<20; bit++)
          {
             if(prefix[mid][bit]-prefix[index][bit] == mid-index)
             val |=(1<<bit);
          }

          if(val < andV[ind])
           high=mid-1;
          else if(val > andV[ind])
          low=mid+1;
          else{
            l= min(l,mid);
            high=mid-1;
          }
       }
       
       if(l<nums.size()+1)
       {
         mini= min(mini, solve(l, ind+1, nums, andV) + nums[l-1]);
       }

       return dp[ind][index]= mini;
    }

    int minimumValueSum(vector<int>& nums, vector<int>& andValues) {
        
        int n= nums.size();

        memset(prefix, 0, sizeof(prefix));

        for(int i=1; i<=n; i++)
        {
            for(int bit=0; bit<20; bit++)
            {
                if(nums[i-1]&(1<<bit))
                prefix[i][bit]++;
            }
            for(int bit=0; bit<20; bit++)
            prefix[i][bit]+= prefix[i-1][bit];
        }

        memset(dp, -1, sizeof(dp));

        int fox= solve(0,0,nums,andValues);

        if(fox==1e9)
        return -1;
        return fox;
    }
};
```