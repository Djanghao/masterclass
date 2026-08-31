# javascript 101 010 selection 581ms

**Author:** henrychen222
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-ways-to-select-buildings/solutions/1909645/](https://leetcode.com/problems/number-of-ways-to-select-buildings/solutions/1909645/)

---

```
const numberOfWays = (s) => op(s, '101') + op(s, '010')

const op = (s, t) => {
    let one = 0, two = 0, three = 0;
    for (const c of s) {
        if (c == t[2]) three += two;
        if (c == t[1]) two += one;
        if (c == t[0]) one++;
    }
    return three;
};
```