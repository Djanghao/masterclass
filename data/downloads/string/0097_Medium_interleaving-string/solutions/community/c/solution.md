# C++ || Recursive->Memoization || Code with Explanation

**Author:** sharmakavya1002
**Votes:** 119
**Link:** [https://leetcode.com/problems/interleaving-string/solutions/2248553/](https://leetcode.com/problems/interleaving-string/solutions/2248553/)

---

### Recursive Solution:  (Gives TLE)
Traverse all the three strings from end.
**Base case**: When the lengths of all the strings become less than 0 (**Note**: Not less than or equal to 0, that will give a wrong answer in the case when s1="a", s2=" ", s3="c" ) 
There are three cases:
- **Case 1**:  If both the last characters of s1 and s2 are equal to the last character of s3, then we have 2 choices, we can either pick last character of s1 or the last character of s2. 
- **Case2**: If the last characters of s1 and s3 are equal, then We'll simply reduce the length of s1 and s3 by 1(meaning, we'll exclude both of the last characters and make the call for rest of the string)
- **Case3**:  If the last characters of s2 and s3 are equal, then We'll simply reduce the length of s2 and s3 by 1(meaning, we'll exclude both of the last characters and make the call for rest of the string).

If any of these cases does't hold true, then return false (as none of the characters match).

```
class Solution {
public:
    bool helper(string& s1, string& s2, string &s3, int l1, int l2, int l3) {
        if(l1<0 && l2<0 && l3<0) {
            return true;
        }
        if(l1>=0 && s1[l1]==s3[l3] && l2>=0 && s2[l2]==s3[l3] ) {
            return (helper(s1, s2, s3, l1-1, l2, l3-1) || helper(s1, s2, s3, l1, l2-1, l3-1));
        }
        else if(l1>=0 && s1[l1]==s3[l3])
            return helper(s1, s2, s3, l1-1, l2, l3-1);
        
        else if(l2>=0 &&s2[l2]==s3[l3])
            return helper(s1, s2, s3, l1, l2-1, l3-1);
        
        else return false;
    }
    
    bool isInterleave(string s1, string s2, string s3) {
        if(s3.size() != s1.size() + s2.size())
			return false;
        return helper(s1, s2, s3,s1.size()-1, s2.size()-1, s3.size()-1);
    }
};
```
### Recusive solution to MEMOIZATION: (Accepted)
```
class Solution {
public:
    // int dp[102][102];
    bool helper(string& s1, string& s2, string &s3, int l1, int l2, int l3, vector<vector<int>>&dp) {
        if(l1<0 && l2<0 && l3<0) {
            return true;
        }
        if(l1>=0 && l2>=0 && dp[l1][l2]!=-1) {
            return dp[l1][l2];
        }
        if(l1>=0 && s1[l1]==s3[l3] && l2>=0 && s2[l2]==s3[l3] ) {
            return dp[l1][l2] = (helper(s1, s2, s3, l1-1, l2, l3-1, dp) || helper(s1, s2, s3, l1, l2-1, l3-1, dp));
        }
        else if(l1>=0 && s1[l1]==s3[l3])
            return helper(s1, s2, s3, l1-1, l2, l3-1, dp);
        
        else if(l2>=0 &&s2[l2]==s3[l3])
            return helper(s1, s2, s3, l1, l2-1, l3-1, dp);
        
        else return false;
    }
    
    bool isInterleave(string s1, string s2, string s3) {
        if(s3.size() != s1.size() + s2.size())
			return false;
        vector<vector<int>>dp(s1.size()+1, (vector<int>(s2.size()+1, -1)));
        // memset(dp, -1, sizeof(dp));
        return helper(s1, s2, s3,s1.size()-1, s2.size()-1, s3.size()-1, dp);
    }
};
```
