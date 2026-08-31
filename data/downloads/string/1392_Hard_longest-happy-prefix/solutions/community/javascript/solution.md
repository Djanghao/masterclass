# longest-happy-prefix

**Author:** _suraj__007
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-happy-prefix/solutions/4269670/](https://leetcode.com/problems/longest-happy-prefix/solutions/4269670/)

---

# Code
```
/**
 * @param {string} s
 * @return {string}
 */
var longestPrefix = function(s) {
    let b = s.length;
    let t = 0;
    let p = "";
    for(let i = 0;i<s.length-1;i++){
        if(s.slice(0,i+1)==s.slice(b-1-i)){
            if(i+1>t){
                p = s.slice(0,i+1);
                t = i+1;    
            }
        }
    }
    return p
};

```