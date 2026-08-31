# DSU

**Author:** rojas
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/solutions/5523327/](https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/solutions/5523327/)

---

# Complexity

- Time complexity: $O(N + L\\log(L) + L\u03B1(N))$

- Space complexity: $O(L + N)$

# Code

```typescript
function earliestAcq(logs: number[][], n: number): number {
    if (logs.length < n - 1) {
        return -1;
    }

    logs.sort((logA, logB) => logA[0] - logB[0]);

    const dsu = new DSU(n);
    for (const [ts, x, y] of logs) {
        if (dsu.union(x, y) == n) {
            return ts;
        }
    }

    return -1;
};

// Disjoint Set Union
class DSU {
    protected roots: number[];
    protected sizes: number[];

    constructor(length: number) {
        const roots = new Array(length);
        for (let i = 0; i < length; ++i) {
            roots[i] = i;
        }
        this.roots = roots;
        this.sizes = new Array(length).fill(1);
    }

    find(a: number): number {
        let b = a;

        while (a != this.roots[a]) {
            a = this.roots[a];
        }

        while (b != a) {
            const c = this.roots[b];
            this.roots[b] = a;
            b = c;
        }

        return b;
    }

    union(a: number, b: number): number {
        a = this.find(a);
        b = this.find(b);
        if (a == b) {
            return this.sizes[a];
        }
        if (this.sizes[a] < this.sizes[b]) {
            const c = a;
            a = b;
            b = c;
        }
        this.roots[b] = a;
        return this.sizes[a] += this.sizes[b];
    }
}
```