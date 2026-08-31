# Javascript | Simple

**Author:** user6912c
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/solutions/654931/](https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/solutions/654931/)

---

```
/**
 * @param {string} S
 * @param {number} K
 * @return {number}
 */
var numKLenSubstrNoRepeats = function(s, k) {
    
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
        let win = new Set([...s.slice(i,i+k)]);        
        if(win.size==k){
           counter++;  
        }                
    }
    return counter;
    
};
```