# javascript greedy 176ms

**Author:** henrychen222
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/solutions/1119019/](https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/solutions/1119019/)

---

```
const getMaximumConsecutive = (c) => {
    c.sort((x, y) => x - y);
    let res = 0;
    for (const e of c) {
        if (e <= res + 1) res += e;
    }
    return res + 1;
};
```