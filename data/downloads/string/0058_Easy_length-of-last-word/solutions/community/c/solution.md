# [C++] Very Simple Solution

**Author:** vector_long_long
**Votes:** 64
**Link:** [https://leetcode.com/problems/length-of-last-word/solutions/848550/](https://leetcode.com/problems/length-of-last-word/solutions/848550/)

---

```
class Solution {
public:
    int lengthOfLastWord(string s) {
        int ans = 0;
        for(int i=s.size()-1;i>=0;--i){
            if(s[i] == ' ' && ans > 0) return ans;
            if(s[i] != ' ') ans++;
        }
        return ans;
    }
};
```
