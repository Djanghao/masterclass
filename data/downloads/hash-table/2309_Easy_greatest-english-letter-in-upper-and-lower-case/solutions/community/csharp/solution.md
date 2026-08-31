# simple and easy understand solution

**Author:** shishirRsiam
**Votes:** 3
**Link:** [https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/4923821/](https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/4923821/)

---

# if it's help, please up \u2B06 vote! \u2764\uFE0F


# Code
```
class Solution {
public:
    string greatestLetter(string s) 
    {
        set<char>st(s.begin(), s.end());
        unordered_map<char,int>mp;
        string ans;
        for(char c:st)
        {
            c = toupper(c);
            mp[c]++;
            if(mp[c] > 1) 
            {
                if(ans.empty()) ans += c;
                else if(c > ans[0])
                {
                    ans.clear();
                    ans += c;
                }
            }
        }
        return ans.empty() ? "" : ans;
    }
};
```