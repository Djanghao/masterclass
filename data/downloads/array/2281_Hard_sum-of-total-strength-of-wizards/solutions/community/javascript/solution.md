# javascript union find 992ms

**Author:** henrychen222
**Votes:** 4
**Link:** [https://leetcode.com/problems/sum-of-total-strength-of-wizards/solutions/2062632/](https://leetcode.com/problems/sum-of-total-strength-of-wizards/solutions/2062632/)

---

```
function DJSet(n) {
    let parent = [], min = [], max = [];
    for (let i = 0; i <= n; i++) {
        parent.push(i);
        min.push(i);
        max.push(i);
    }
    return { find, union, L, R }
    function find(x) {
        return parent[x] == x ? x : parent[x] = find(parent[x]);
    }
    function union(x, y) {
        x = find(x);
        y = find(y);
        if (x == y) return false;
        if (parent[x] < parent[y]) [x, y] = [y, x];
        parent[x] += parent[y];
        parent[x] = y;
        min[y] = Math.min(min[x], min[y]);
        max[y] = Math.max(max[x], max[y]);
        return true;
    }
    function L() {
        return min;
    }
    function R() {
        return max;
    }
}

const ll = BigInt, mod = 1e9 + 7, bmod = ll(mod);
const totalStrength = (a) => {
    let n = a.length, ds = new DJSet(n), id = Array(n).fill(0), sum = Array(n + 2).fill(0), vis = Array(n + 2).fill(false), res = 0n;
    for (let i = 0; i < n; i++) id[i] = i;
    id.sort((x, y) => a[y] - a[x]);
    for (let i = 2; i <= n + 1; i++) sum[i] = (sum[i - 1] + a[i - 2]) % mod;
    for (let i = 2; i <= n + 1; i++) sum[i] = (sum[i - 1] + sum[i]) % mod;
    for (let p of id) {
        p++;
        if (vis[p - 1]) ds.union(p, p - 1);
        if (vis[p + 1]) ds.union(p, p + 1);
        vis[p] = true;
        let pa = ds.find(p), l = ds.L()[pa], r = ds.R()[pa];
        let lcnt = ll((p - l + 1)) * ll((sum[r + 1] - sum[p]));
        let rcnt = ll((r - p + 1)) * ll((sum[p] - sum[l - 1]));
        lcnt %= bmod;
        rcnt %= bmod;
        res = (res + ll(a[p - 1]) * (lcnt - rcnt)) % bmod;
        res %= bmod;
    }
    res = (res + bmod) % bmod;
    return res;
};
```