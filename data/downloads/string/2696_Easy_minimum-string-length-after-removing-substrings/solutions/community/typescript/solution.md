# Easy TS/JS + Regex Solution

**Author:** pth_1641
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/4023019/](https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/4023019/)

---

```ts
function minLength(s: string): number {
    while(/AB|CD/.test(s)){
        s = s.replace(/AB|CD/, '');
    }
    return s.length;
};
```