# [recursive][memoization][dp][c++][easy understanding]

**Author:** rajat_gupta_
**Votes:** 92
**Link:** [https://leetcode.com/problems/longest-common-subsequence/solutions/981992/](https://leetcode.com/problems/longest-common-subsequence/solutions/981992/)

---

**recursion[TLE 16/43]**
```
class Solution {
public:
    int longestCommonSubsequence(string text1, string text2,int m,int n) {
        if(m==0 || n==0){
            return 0;
        }
        if(text1[m-1]==text2[n-1]){
            return 1+longestCommonSubsequence(text1,text2,m-1,n-1);
        }else{
            return max(longestCommonSubsequence(text1,text2,m-1,n),longestCommonSubsequence(text1,text2,m,n-1));
        }
    }
    
    int longestCommonSubsequence(string text1, string text2) {
        int m=text1.size(),n=text2.size();
        return longestCommonSubsequence(text1,text2,m,n);
    }
};
```
**MEMOIZATION**
```
class Solution {
public:
    int longestCommonSubsequence(string &text1, string &text2,int m,int n,int memo[][1001]) {
        if(m==0 || n==0){
            return 0;
        }
        if(memo[m][n]!=-1){
            return memo[m][n];
        }
        if(text1[m-1]==text2[n-1]){
            return memo[m][n]= 1+longestCommonSubsequence(text1,text2,m-1,n-1,memo);
        }else{
            return memo[m][n]= max(longestCommonSubsequence(text1,text2,m-1,n,memo),longestCommonSubsequence(text1,text2,m,n-1,memo));
        }
    }
    
    int longestCommonSubsequence(string text1, string text2) {
        int m=text1.size(),n=text2.size();
        int memo[1001][1001];
        for(int i=0;i<1001;i++){
            for(int j=0;j<1001;j++){
                memo[i][j]=-1;
            }
        }
        return longestCommonSubsequence(text1,text2,m,n,memo);
    }
};
```
**dp**
```
class Solution {
public:
   
    int longestCommonSubsequence(string text1, string text2) {
        int m=text1.size(),n=text2.size();
        int dp[m+1][n+1];
        for(int i=0;i<m+1;i++){
            dp[i][0]=0;
        }
        for(int i=0;i<n+1;i++){
            dp[0][i]=0;
        }
        for(int i=1;i<m+1;i++){
            for(int j=1;j<n+1;j++){
               if(text1[i-1]==text2[j-1]){
                  dp[i][j]= 1+dp[i-1][j-1];
               }else{
                   dp[i][j]=max(dp[i-1][j],dp[i][j-1]);
               } 
            }
        }
        return dp[m][n];
    }
};
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
