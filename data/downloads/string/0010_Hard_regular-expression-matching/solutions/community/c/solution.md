# Brute force to top down DP and bottom up DP with explanation

**Author:** ashish8950
**Votes:** 47
**Link:** [https://leetcode.com/problems/regular-expression-matching/solutions/751381/](https://leetcode.com/problems/regular-expression-matching/solutions/751381/)

---

We can solve the problem using recursion. We need the helper function to keep track of the current indices of the pattern and the string. The basic condition would be when pattern index reaches the end, then we will check if the string index has also reached the end or not. 

Now we will check if the pattern current index matches the string current index character, this would be true either when the characters are equal i.e. s[i]==p[j] or if the p[j]=='.' since '.' can be replaced by any character. 

If the next pattern character is '' that means the current pattern character p[j] could occur 0 or infinite times. So, then there would be two possibility either we can take match the current pattern character with the string and move i by 1 or we can just take zero occurence of the current pattern character and move the pattern character by 2. We will apply the OR condition between these two conditions since if either of them matches then it solves our problem and if next pattern character is not '' , then we need to check if the current character matches or not and also move both string and pattern character by 1.
 
The time complexity of this brute force approach is O(3^(max(m,n)) and space complexity is O(max(m,n)) where m and n are the length of pattern and string respectively.

```
class Solution {
public:
    bool isMatch(string s, string p) {
        return helper(s,p,0,0);
    }
    
    bool helper(string s, string p, int i, int j)
    {
        if(j==p.length())
            return i==s.length();
        bool first_match=(i<s.length() && (s[i]==p[j] || p[j]=='.' ));
        
        if(j+1<p.length() && p[j+1]=='*')
        {
            return (helper(s,p,i,j+2)|| (first_match && helper(s,p,i+1,j) ));
        }
        else
        {
            return (first_match && helper(s,p,i+1,j+1));
        }
    }
};

```



We are actually recomputing the solution for the same subproblems many times. So to avoid that we can initialize dp matrix with all values with being -1. Now if dp[i][j]>=0 then that means this has been already computed so we can return the results here only, thus, it saves time and we don't need to recompute that again. Notice that we are saving the results in dp[i][j] in the second last line and this result would always be positive either 0 or 1.  

The time complexity is now O(mn) and space complexity is O(mn) where m and n are the length of pattern and string respectively.

```
class Solution {
public:
    bool isMatch(string s, string p) {
        vector<vector<int>> dp(s.length()+1,vector<int>(p.length(),-1));
        return helper(s,p,0,0,dp);
    }
    
    bool helper(string s, string p, int i, int j,vector<vector<int>> &dp)
    {
        if(j==p.length())
            return i==s.length();
        if(dp[i][j]>=0)
            return dp[i][j];
        bool first_match=(i<s.length() && (s[i]==p[j] || p[j]=='.' ));
        bool ans=0;
        if(j+1<p.length() && p[j+1]=='*')
        {
            ans= (helper(s,p,i,j+2,dp)|| (first_match && helper(s,p,i+1,j,dp) ));
        }
        else
        {
            ans= (first_match && helper(s,p,i+1,j+1,dp));
        }
        dp[i][j]=ans;
        return ans;
    }
};
```

Bottom up solution 

We can derive the bottom up solution from top down approach only. We will make the matrix of length (s.length()+1)* (p.length()+1)  . dp[s.length()][p.length()]=1 since both have ended at that point. 

```
class Solution {
public:
    bool isMatch(string s, string p) {
    vector<vector<int>> dp(s.length()+1,vector<int>(p.length()+1,0));
        dp[s.length()][p.length()]=1;
        
        for(int i=s.length();i>=0;i--)
        {
            for(int j=p.length()-1;j>=0;j--)
            {
                bool first_match=(i<s.length() && (p[j]==s[i]|| p[j]=='.'));
                    if(j+1<p.length() && p[j+1]=='*')
                    {
                        dp[i][j]=dp[i][j+2] || (first_match && dp[i+1][j]);
                    }
                else
                {
                    dp[i][j]=first_match && dp[i+1][j+1];
                }
            }
        }
        
    return dp[0][0];
    }
};
```