# [JavaScript] 1054. Distant Barcodes

**Author:** pgmreddy
**Votes:** 2
**Link:** [https://leetcode.com/problems/distant-barcodes/solutions/3338488/](https://leetcode.com/problems/distant-barcodes/solutions/3338488/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

1
```
var rearrangeBarcodes = function (a) {
    let n = a.length;
    a.sort((a, b) => a - b);

    let an = [];

    let i, j;
    for (i = 0, j = n - 1; i <= j; ) {
        if (a[i] === an.at(-1)) break;
        an.push(a[i]);
        i++;

        if (i - 1 === j) break;

        if (a[j] === an.at(-1)) break;
        an.push(a[j]);
        j--;
    }
    for (let k = 0; i <= j; k += 2, i++) {
        an.splice(k, 0, a[i]);
    }

    return an;
};
```

2
```
var rearrangeBarcodes = function (a) {
    let n = a.length;

    let o = {};
    for (let e of a) o[e] = 0
    for (let e of a) o[e] += 1;

    let keys = Object.keys(o);
    let descendingFreqKeys = keys.sort((a, b) => o[b] - o[a]);

    let an = new Array(n);
    let i = 0;
    for (let e of descendingFreqKeys) {
        while (o[e] > 0) {
            an[i] = e;
            o[e]--;
            i += 2;
            if (i >= n) i = 1;
        }
    }
    return an;
};
```
