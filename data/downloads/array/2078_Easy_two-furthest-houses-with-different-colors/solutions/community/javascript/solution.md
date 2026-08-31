# 2078. Two Furthest Houses With Different Colors

**Author:** pgmreddy
**Votes:** 6
**Link:** [https://leetcode.com/problems/two-furthest-houses-with-different-colors/solutions/1589851/](https://leetcode.com/problems/two-furthest-houses-with-different-colors/solutions/1589851/)

---

---

- Contest - https://leetcode.com/contest/weekly-contest-268/
  - Q1 Answer
    - below
		- O(N ^ 2) solution
		- O(N) solution
          - https://leetcode.com/problems/two-furthest-houses-with-different-colors/discuss/1589851/2078.-Two-Furthest-Houses-With-Different-Colors
  - Q2 Answer
    - https://leetcode.com/problems/watering-plants/discuss/1589904/2079.-Watering-Plants
  - Q3 Answer
    - https://leetcode.com/problems/range-frequency-queries/discuss/1589775/2080.-Range-Frequency-Queries
  - Q4 Answer
    - https://leetcode.com/problems/sum-of-k-mirror-numbers/discuss/1590172/2081.-Sum-of-k-Mirror-Numbers

---

Hope it is simple to understand.

---

**O(N ^ 2) solution**

```
var maxDistance = function (colors) {
    let n = colors.length;

    let max = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (colors[i] !== colors[j]) {
                max = Math.max(max, j - i);
            }
        }
    }
    return max;
};
```

---

**O(N) solution**

- Credit:
  - https://leetcode-cn.com/for-you-9
  - See (`for-you-9` row, `Q1` column) at https://leetcode.com/contest/weekly-contest-268/ranking

```
var maxDistance = function (colors) {
    let n = colors.length;

    let max = 0;
    for (let i = 0; i < n; i++) {
        if (colors[i] !== colors[0]) {
            max = Math.max(max, i);
        }
        if (colors[i] !== colors[n - 1]) {
            max = Math.max(max, n - 1 - i);
        }
    }
    return max;
};
```

---
