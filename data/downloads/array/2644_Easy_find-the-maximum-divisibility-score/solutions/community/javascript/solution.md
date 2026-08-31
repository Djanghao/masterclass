# Javascript direct way 516ms

**Author:** henrychen222
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-maximum-divisibility-score/solutions/3421937/](https://leetcode.com/problems/find-the-maximum-divisibility-score/solutions/3421937/)

---

```
const maxDivScore = (a, b) => {
    let f = [];
    b.map((d, i) => {
        let cnt = 0;
        for (const x of a) {
            if (x % d == 0) cnt++;
        }
        f.push([cnt, d]);
    });
    f.sort((x, y) => y[0] - x[0] || x[1] - y[1]);
    return f[0][1];
};
```