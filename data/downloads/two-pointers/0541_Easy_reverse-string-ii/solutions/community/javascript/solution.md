# Intuitive Javascript Solution

**Author:** DawChihLiou
**Votes:** 20
**Link:** [https://leetcode.com/problems/reverse-string-ii/solutions/100984/](https://leetcode.com/problems/reverse-string-ii/solutions/100984/)

---

```
var reverseStr = function(s, k) {
    if (k > s.length) return s.split('').reverse().join('');
    
    const split = s.split('');
    
    // reverse the segment and put it back
    for (let i = 0; i < s.length; i += 2*k) {
        const reverse = split.splice(i, k).reverse();
        split.splice(i, 0, ...reverse);
    }
    
    return split.join('');
};
```