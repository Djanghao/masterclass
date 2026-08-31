# Javascript brute force + binary lift two solutions

**Author:** henrychen222
**Votes:** 1
**Link:** [https://leetcode.com/problems/kth-ancestor-of-a-tree-node/solutions/3041622/](https://leetcode.com/problems/kth-ancestor-of-a-tree-node/solutions/3041622/)

---

brute force: 8316ms
```
function TreeAncestor1(n, p) {
    return { getKthAncestor }
    function getKthAncestor(node, k) {
        while (k--) {
            if (node == undefined || node == -1) {
                return -1;
            } else {
                node = p[node];
            }
        }
        return node;
    }
}
```
binary lift: 497ms
```
const N = 16;
const BinaryLift = (n, p) => {
    let ancestor = [...Array(n)].map(() => Array(N).fill(0));
    for (let i = 0; i < n; i++) ancestor[i][0] = p[i];
    for (let i = 1; i < N; i++) {
        for (let j = 0; j < n; j++) {
            if (ancestor[j][i - 1] == -1) {
                ancestor[j][i] = -1;
            } else {
                ancestor[j][i] = ancestor[ancestor[j][i - 1]][i - 1];
            }
        }
    }
    return ancestor;
};

function TreeAncestor(n, p) {
    let anc = BinaryLift(n, p);
    return { getKthAncestor }
    function getKthAncestor(node, k) {
        for (let i = N; i >= 0; i--) {
            if (k & (1 << i)) {
                if (!anc[node]) return -1;
                node = anc[node][i];
            }
        }
        return node;
    }
}
```