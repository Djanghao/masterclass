# javascript direct way 117ms

**Author:** henrychen222
**Votes:** 10
**Link:** [https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/1390332/](https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/1390332/)

---

```
const isPrefixString = (s, w) => {
    let tmp = '';
    for (const e of w) {
        tmp += e;
        if (tmp == s) return true; 
    }
    return false;
};
```