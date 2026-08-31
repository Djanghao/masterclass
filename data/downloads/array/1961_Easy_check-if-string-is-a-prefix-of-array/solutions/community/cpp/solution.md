# C++ Easy Solution O(n)

**Author:** anubhvshrma18
**Votes:** 4
**Link:** [https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/1390248/](https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/1390248/)

---

```
class Solution {
public:
    bool isPrefixString(string s, vector<string>& words) {
        string n="";
        for(string str:words){
            for(char ch:str){
                n+=ch;
            }
            if(n==s){
                return true;
            }
        }
        
        return false;
    }
};
```