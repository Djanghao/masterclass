# C++|| Brute Force Recursion with memoization

**Author:** harsh_0412
**Votes:** 54
**Link:** [https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays/solutions/3739283/](https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays/solutions/3739283/)

---

# Intuition
###### We have to find longest non decreasing subarray , so it can be start from index i == 0 to n -1 and we have to find maximum one from them , we can choose from arr1 or arr2 

# Approach
###### At starting we have nums1 and nums2 and prevArr which tell about the array from which we have choosen our prevElement of our cur subarray , so we can compare b/w the previous guy and cur guy which we have to choose now, so either we can choose a number from nums1 or nums2 which is greater or equal to our previous val otherwise we can not go further , at last we store in our vector dp[i][preArr] to store the ans of subproblem 

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N)

# Code
```
class Solution {
public:
    int dp[100005][3];
    int solve(int i,int prevArr,vector<int> &nums1,vector<int> &nums2)
    {
        if(i>=nums1.size()) return 0;             // if no more element so return 0
        
        if(dp[i][prevArr]!=-1) return dp[i][prevArr];
        int ans=0;
        if(prevArr==0)
        {
             int nontake = solve( i +1, 0,nums1,nums2);         // if we have not choose any val from both array so we have choice that we can start our subarray from pos i + 1 
            int take1=1+solve(i+1,1,nums1,nums2);    // take val from nums1
            int take2=1+solve(i+1,2,nums1,nums2);    // take val from nums2
            ans=max({nontake,take1,take2});            
           
        }
        else 
        {
            if(prevArr==1)                         // prev array is nums1
            {
                if(nums1[i]>=nums1[i-1]) ans=max(ans,1+solve(i+1,1,nums1,nums2)); // we will update our ans if cur val is greater or equal previous value 
                if(nums2[i]>=nums1[i-1]) ans=max(ans,1+solve(i+1,2,nums1,nums2));
                
            }
            else if(prevArr==2)                    // prev array is num2 
            {
                if(nums1[i] >=nums2[i-1]) ans=max(ans,1+solve(i+1,1,nums1,nums2));               
                if(nums2[i]>=nums2[i-1]) ans=max(ans,1+solve(i+1,2,nums1,nums2));               
            }          
        }

        return dp[i][prevArr]= ans;
    }
    int maxNonDecreasingLength(vector<int>& nums1, vector<int>& nums2) {
        
        memset(dp,-1,sizeof(dp));
        return solve(0,0,nums1,nums2);
    }
};
```

#### if u understand then  upvote