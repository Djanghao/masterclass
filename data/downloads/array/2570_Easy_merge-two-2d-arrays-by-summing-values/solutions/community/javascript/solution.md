# [JavaScript] 2570. Merge Two 2D Arrays by Summing Values

**Author:** pgmreddy
**Votes:** 14
**Link:** [https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/3205601/](https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/3205601/)

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
var mergeArrays = function (a, b) {
    let o = {};

    for (let [i, v] of a) {
        o[i] = v;
    }
    for (let [i, v] of b) {
        o[i] = (o[i] || 0) + v;
    }

    return Object.entries(o) //
        .sort((a, b) => a[0] - b[0]);
};
```

2
```
var mergeArrays = function (a, b) {
    let o = {};
    for (let [i, v] of [...a, ...b]) {
        o[i] = (o[i] || 0) + v;
    }

    return Object.entries(o) //
        .sort((a, b) => a[0] - b[0]);
};
```

3
```
var mergeArrays = function (a, b) {
    let o = {};
    for (let [i, v] of a) o[i] = 0;
    for (let [i, v] of b) o[i] = 0;

    for (let [i, v] of a) o[i] += v;
    for (let [i, v] of b) o[i] += v;

    return Object.entries(o) //
        .sort((a, b) => a[0] - b[0]);
};
```

4
```
var mergeArrays = function (a, b) {
    let o = {};

    for (let [i, v] of a) o[i] = (o[i] || 0) + v;
    for (let [i, v] of b) o[i] = (o[i] || 0) + v;

    return Object.entries(o) //
        .sort((a, b) => a[0] - b[0]);
};
```

5
```
var mergeArrays = function (a, b) {
    let o = new Map(a);
    for (let [i, v] of b) {
        o.set(i, (o.get(i) || 0) + v);
    }
    return [...o].sort((a, b) => a[0] - b[0]);
};
```

6
```
var mergeArrays = function (a, b) {
    let i = 0,
        j = 0,
        m = a.length,
        n = b.length,
        o = [];
    while (i < m && j < n) {
        let [id1, v1] = a[i];
        let [id2, v2] = b[j];

        if (id1 === id2) {
            o.push([id1, v1 + v2]);
            i++;
            j++;
        } else if (id1 < id2) {
            o.push([id1, v1]);
            i++;
        } else {
            o.push([id2, v2]);
            j++;
        }
    }
    for (; i < m; i++) o.push(a[i]); // remain a
    for (; j < n; j++) o.push(b[j]); // remain b
    return o;
};
```
