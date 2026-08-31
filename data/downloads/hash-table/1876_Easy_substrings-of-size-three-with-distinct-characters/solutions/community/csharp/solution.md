# ✅C++ ✅C# ✅JavaScript.Very easy solution.🔥

**Author:** aloneguy
**Votes:** 11
**Link:** [https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/3496933/](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/3496933/)

---

# We have to obtain every three character and check whether one of them is the same with other one.If it is not,then we increase total number to 1;

```javascript []
/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let res=0;
         for(let i=1;i<s.length-1;i++)
            if(s[i]!=s[i-1] && s[i]!=s[i+1] && s[i-1]!=s[i+1])
            res++;   
        return res;
};
```
```C++ []
class Solution {
public:
    int countGoodSubstrings(string s) {
        int res=0;
         for(int i=1;i<s.size()-1;i++)
            if(s[i]!=s[i-1] && s[i]!=s[i+1] && s[i-1]!=s[i+1])
            res++;   
        return res;
    }
};
```
```C# []
public class Solution {
    public int CountGoodSubstrings(string s) {
      int res=0;
         for(int i=1;i<s.Length-1;i++)
            if(s[i]!=s[i-1] && s[i]!=s[i+1] && s[i-1]!=s[i+1])
            res++;   
        return res;  
    }
}
```

![Vote.png](./images/0.png)

