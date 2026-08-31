# [JavaScript] 100 % Speed | 100% Space | 1 Liner

**Author:** edmondhui
**Votes:** 1
**Link:** [https://leetcode.com/problems/encode-number/solutions/1002163/](https://leetcode.com/problems/encode-number/solutions/1002163/)

---

```
var encode = function(num) {
    return (num+1).toString(2).substring(1)
};
```