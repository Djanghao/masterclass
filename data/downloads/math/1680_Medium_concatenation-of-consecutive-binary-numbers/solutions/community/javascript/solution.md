# JavaScript Short 4-Liner Simple Solution

**Author:** control_the_narrative
**Votes:** 10
**Link:** [https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/solutions/1037372/](https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/solutions/1037372/)

---

```javascript
var concatenatedBinary = function(n) {
    let num = 0;
    
    for(let i = 1; i <= n; i++) {
        //OR num *= (1 << i.toString(2).length)
        num *= (2 ** i.toString(2).length) 
        num += i;
        num %= (10 ** 9 + 7)
    }
    return num;
};
```