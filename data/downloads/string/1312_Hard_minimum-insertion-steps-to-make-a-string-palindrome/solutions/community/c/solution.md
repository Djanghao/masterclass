# 100% memory efficient and 98% faster solution.[EASY] | [C++] | [DP] | [LCS]

**Author:** SONUKUMARSAW
**Votes:** 17
**Link:** [https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/solutions/633595/](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/solutions/633595/)

---

**TOP-DOWN DYNAMIC PROGRAMING**
We need to find if there exist any subsequence of string **S1** which is palindrome. 
If there is such a subsequence **sub**, then we need minimum ***len(S1)-len(sub)***
Else, we need atleast ***len(S1)*** number of insertions to make it palindrome.

To find the len of subsequence of S1 which is palindrome, we can use [Longest Common Subsequence](https://en.wikipedia.org/wiki/Longest_common_subsequence_problem). 
```
int minInsertions(string s1) {
        int n = s1.size();
        int DP[n+1][n+1];
        string s2  =s1;
        reverse(s1.begin(),s1.end());
        
        for(int i=0;i<=n;i++){
            for(int j=0;j<=n;j++){
                if(i==0 || j==0){
                    DP[i][j] = 0;
                }
                else if(s1[i-1]==s2[j-1]){
                    DP[i][j] = DP[i-1][j-1]+1;
                }
                else{
                    DP[i][j] = max(DP[i-1][j],DP[i][j-1]);
                }
            }
        }
    
        return n-DP[n][n];
    }
```

Please upvote if you liked the post.
You can refer to the [this](https://www.youtube.com/watch?v=AEcRW4ylm_c&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go&index=33&t=0s) link if you want detail explanation.