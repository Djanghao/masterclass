# ✅Solution using for loop in C++

**Author:** dhruba-datta
**Votes:** 45
**Link:** [https://leetcode.com/problems/truncate-sentence/solutions/1534123/](https://leetcode.com/problems/truncate-sentence/solutions/1534123/)

---

> **If you\u2019re interested in coding you can join my Discord Server, link in the comment section. Also if you find any mistakes please let me know. Thank you!\u2764\uFE0F**
> 

---
## Code:
```
class Solution {
public:
    string truncateSentence(string s, int k) {
        int count =0;
        string ans="";
        for(auto x:s)
        {
            if(x==' ')
                count++;
            if(count==k)
                break;
            ans+=x;
        }
        
        return ans;
    }
};
```
---
***Please upvote if it was helpful for you, thank you!***