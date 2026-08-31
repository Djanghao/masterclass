# ✅Fastest C++ solution with 0ms runtime!

**Author:** dhruba-datta
**Votes:** 26
**Link:** [https://leetcode.com/problems/shuffle-string/solutions/1532732/](https://leetcode.com/problems/shuffle-string/solutions/1532732/)

---

> **If you\u2019re interested in coding you can join my Discord Server, link in the comment section. Also if you find any mistakes please let me know. Thank you!\u2764\uFE0F**
> 

---
```
class Solution {
public:
    string restoreString(string s, vector<int>& indices) {
        string ans=s;
        int n= indices.size();
        for (int i=n-1; i>=0; i--)
        {
            int x= indices.back();
            ans[x]=s[i];
            indices.pop_back();
        }
        return ans;
    }
};
```
---
***Please upvote if it was helpful for you, thank you!***