# javascript direct way 3 lines 64ms

**Author:** henrychen222
**Votes:** 15
**Link:** [https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/1730243/](https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/1730243/)

---

```
const findFinalValue = (a, x) => {
   let se = new Set(a);
   while (se.has(x)) x *= 2;
   return x;
};
```