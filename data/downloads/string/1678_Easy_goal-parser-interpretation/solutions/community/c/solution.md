# [Python \ C++ ] Simple solution using dictionary

**Author:** AnupBS
**Votes:** 87
**Link:** [https://leetcode.com/problems/goal-parser-interpretation/solutions/961466/](https://leetcode.com/problems/goal-parser-interpretation/solutions/961466/)

---

Python
```
 def interpret(self, s: str) -> str:
        d = {"(al)":"al", "()":"o","G":"G"}
        tmp= ""
        res=""
        for i in range(len(s)):
            tmp+=s[i]
            if(tmp in d):
                res+=d[tmp]
                tmp=""
        return res
```

C++

```
string interpret(string s) {
        unordered_map<string, string> d = 
        {
            { "(al)" , "al"},
            { "()" , "o" }, 
            { "G" , "G" },
        };
        string tmp = "", res = "";
        for(char c: s){
            tmp+=c;
            if(d.find(tmp)!=d.end()){
                res += d[tmp] ;
                tmp = "" ;
            }
        }
        return res;
    }
```