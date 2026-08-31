# [TypeScript] Spiral walkthrough. Brief and fast (45ms)

**Author:** badnewz
**Votes:** 1
**Link:** [https://leetcode.com/problems/spiral-matrix-ii/solutions/4037367/](https://leetcode.com/problems/spiral-matrix-ii/solutions/4037367/)

---

# Complexity
- Time complexity: $\\mathcal{O}(n^2)$
- Space complexity: $\\mathcal{O}(n^2)$

# Code
```
function generateMatrix(n: number): number[][] {
    const r = Array.from({ length: n }, () => Array(n));
    let len = n, dir = 1, vh = false, j = n, x = -1, y = 0;
    for (let i = 1; i <= n * n; i++) {
        if (j === 0) {
            if (vh) dir = -dir
            else len--;
            vh = !vh, j = len;
        }
        if (vh) y += dir
        else x += dir;
        r[y][x] = i, j--;
    }
    return r;
};
```

