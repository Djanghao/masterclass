# js/ts

**Author:** brudnovskyi
**Votes:** 0
**Link:** [https://leetcode.com/problems/factorial-generator/solutions/5911678/](https://leetcode.com/problems/factorial-generator/solutions/5911678/)

---

```typescript []
function* factorial(n: number): Generator<number> {
    let res = 1;

    for (let i = res; i <= (n || 1); i++) {
        yield res *= i;
    }
};
```