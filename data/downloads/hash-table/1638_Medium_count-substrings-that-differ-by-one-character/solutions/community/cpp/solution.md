# C++ Code | Brute Force and DP both approaches

**Author:** 103_simran
**Votes:** 8
**Link:** [https://leetcode.com/problems/count-substrings-that-differ-by-one-character/solutions/1961745/](https://leetcode.com/problems/count-substrings-that-differ-by-one-character/solutions/1961745/)

---

```
//BRUTE FORCE

class Solution {
public:
    int countSubstrings(string s, string t) {
        int ans = 0;  // for holding answer
        int len1 = s.length(), len2 = t.length(); // compute length of both strings "s" and "t"
        for(int i = 1; i <= len1; i++)  // length of both substrings of s and t
        {
            for(int j = 0; j+i <= len1; j++)  // find subtring of s of length i
            {
                string s1 = s.substr(j, i);  // s1 -> subtring of s of length i
                for(int k = 0; k+i <= len2; k++)  // subtring of t of length i
                {
                    string t1 = t.substr(k, i); // t1 -> subtring of t of length i
                    int f = 1;
                    for(int p = 0; p < i; p++)  // compare the characters of both s1 and t1 substrings 
                    {
                        if(s1[p] != t1[p])
                            f--;
                    }
                    if(f == 0) ans++;  // if they differ by only one character, then add the count
                }
            }
        }
        return ans;  // return final answer
    }
};


// DP Approach

class Solution {
public:
    int countSubstrings(string s, string t) {
        int ans = 0;
        int len1 = s.length(), len2 = t.length();
        vector<vector<int>> same(len1+1, vector<int>(len2+1, 0));  // if s[i-1] == t[j-1]
        auto differ = same;  // if s[i-1] != t[j-1]
        for(int i = 1; i <= len1; i++)
        {
            for(int j = 1; j <= len2; j++)
            {
                if(s[i-1] == t[j-1])  
                {
                    same[i][j] = 1 + same[i-1][j-1];  // if it is same then just add 1 more to the count of substrings having equal characters
                    differ[i][j] = differ[i-1][j-1]; // number of differing substrings by one character will remain same
                }
                else  
                    differ[i][j] = same[i-1][j-1] + 1;  // add 1 to the substrings having same character upto i-1 of string s and j-1 of string t
                ans += differ[i][j];  // add the differing substrings count to final answer
            }
        }
        return ans;  // return final answer
    }
};
```