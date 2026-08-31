# C++ | Fastest 100% | 10 lines of actual code | O(n) | NO REGEX

**Author:** sauravgpt
**Votes:** 23
**Link:** [https://leetcode.com/problems/camelcase-matching/solutions/1323431/](https://leetcode.com/problems/camelcase-matching/solutions/1323431/)

---

Just need a simple modification in subsequence query
Need to check if current character is uppercase and not matching with current character in given pattern 
then return false, rest code are self explanatory.

**Please Upvote** \uD83D\uDE4F

```
class Solution {
public:
    
    bool isSubSeq(string &s, string &t) {
        int j = 0;
        for(char c:s) {
            if(c >= 'A' && c <= 'Z' && c != t[j]) return false;
            if(c == t[j]) j++;
        }
        return j == t.size();
    }
    
    vector<bool> camelMatch(vector<string>& queries, string pattern) {
        vector<bool> ans;
        
        for(auto &q: queries) {
            ans.push_back(isSubSeq(q, pattern));
        }
        
        return ans;
    }
};
```