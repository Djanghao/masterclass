# 3-line JavaScript O(mn) solution

**Author:** loctn
**Votes:** 22
**Link:** [https://leetcode.com/problems/repeated-string-match/solutions/108110/](https://leetcode.com/problems/repeated-string-match/solutions/108110/)

---

```
const repeatedStringMatch = (A, B) => {
    const count = Math.ceil(B.length / A.length)
    const str = A.repeat(count)
    return str.includes(B) ? count : (str + A).includes(B) ? count + 1 : -1 
};
```