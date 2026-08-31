# ✅Short || C++ || Java || PYTHON || Explained Solution✔️ || Beginner Friendly ||🔥 🔥 BY MR CODER

**Author:** mrcoderrm
**Votes:** 30
**Link:** [https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/solutions/2582351/](https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/solutions/2582351/)

---

**Please do UPVOTE to motivate me to solve more daily challenges like this !!**
**Watch this video \uD83E\uDC83 for the better explanation of the code.

https://www.youtube.com/watch?v=9WoHnlDit3A


**Also you can SUBSCRIBE  \uD83E\uDC81 \uD83E\uDC81 \uD83E\uDC81 this channel for the daily leetcode challange solution.**
https://t.me/dsacoder  \u2B05\u2B05 **Telegram link** to discuss leetcode daily questions and other dsa problems


```
// Here I have index which check the number of multiplier visited, then I have start and end which iterate from the start and end side.
// we are using dp for optimizing it, you will get TLE without DP, you need to use the cases which are already checked.
// I am calculating end in 2nd part byend=  (nums.size -1)-  (index(total num num visited)-start):
```
**C++(1st without DP, TLE)**
```
class Solution {
public:
   int helper(int index,vector<int>& nums, vector<int>& multi, int start, int end ) 
   {
      if(index== multi.size())  return 0;
       return max(multi[index]*nums[start]+ helper(index+1, nums,multi, start+1, end),multi[index]*nums[end]+ helper(index+1, nums, multi, start, end-1) );
      }
int maximumScore(vector<int>& nums, vector<int>& multipliers) {
        int n= nums.size();
        return helper(0, nums, multipliers, 0,n-1 );
    }
};
```
  **C++(2nd with DP, NO TLE) optimized**
  
  
```

  class Solution {
public:
     vector<vector<int>> dp;
   int helper(int index,vector<int>& nums, vector<int>& multi, int start) 
   {    if (dp[index][start] != INT_MIN) return dp[index][start];
    int end= nums.size()-1-(index-start);
      if(index== multi.size())  return 0;
       return dp[index][start]= max(multi[index]*nums[start]+ helper(index+1, nums,multi, start+1),multi[index]*nums[end]+ helper(index+1, nums, multi, start) );
       
   }
    int maximumScore(vector<int>& nums, vector<int>& multipliers) {
        int n= nums.size();
        int m= multipliers.size();
         dp.resize(m + 1, vector<int>(m + 1, INT_MIN));
        return helper(0, nums, multipliers, 0);
    }
};
```
**JAVA**
```
class Solution {
    int n, m;
    Integer[][] dp;
    public int maximumScore(int[] nums, int[] multipliers) {
        n = nums.length;
        m = multipliers.length;        
        
        dp = new Integer[1001][1001];
        return helper(0, 0, nums, multipliers);
    }
    
    private int helper(int i, int j, int[] nums, int[] mul) {
        if( i== m )return 0;
        if( dp[i][j] != null ) return dp[i][j]; 
        var left= mul[i]*nums[j] + helper(i+1, j+1, nums, mul);        
        var right = mul[i]*nums[n-1 -(i-j)] + helper(i+1, j, nums, mul);
        return dp[i][j] = Math.max(left, right);
    }
}
```
**PYTHON**
https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/discuss/2582174/Python-Solution-or-Memoization-or-Tabulation 
```

Credit- @Siddharth_singh
```
**Please do UPVOTE to motivate me to solve more daily challenges like this !!**