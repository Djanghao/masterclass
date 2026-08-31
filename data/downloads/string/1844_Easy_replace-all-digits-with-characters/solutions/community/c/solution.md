# c++ || self explanatory

**Author:** rajat_gupta_
**Votes:** 27
**Link:** [https://leetcode.com/problems/replace-all-digits-with-characters/solutions/1186700/](https://leetcode.com/problems/replace-all-digits-with-characters/solutions/1186700/)

---

```
class Solution {
public:
    string replaceDigits(string s) {
        for(int i=1;i<s.size();i+=2){
            s[i]=s[i-1]+(s[i]-'0'); //or s[i] += s[i-1] - '0';
        }
        return s;
    }
};
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
