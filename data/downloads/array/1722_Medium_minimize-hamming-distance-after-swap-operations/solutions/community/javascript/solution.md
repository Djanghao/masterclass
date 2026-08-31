# JS || Solution by Bharadwaj

**Author:** Manu-Bharadwaj-BN
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/solutions/4793307/](https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/solutions/4793307/)

---

# Code
```
class UnionFind {
    constructor({ n }) {
        this.parent = Array.from({ length: n }, (_, index) => index);
        this.rank = Array(n).fill(0);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);

        if (rootX !== rootY) {
            if (this.rank[rootX] < this.rank[rootY]) {
                [rootX, rootY] = [rootY, rootX];
            }
            this.parent[rootY] = rootX;
            if (this.rank[rootX] === this.rank[rootY]) {
                this.rank[rootX]++;
            }
        }
    }
}

const minimumHammingDistance = function (source, target, allowedSwaps) {
    let n = source.length;

    let unionFind = new UnionFind({ n });
    for (let [index1, index2] of allowedSwaps) {
        unionFind.union(index1, index2);
    }

    let obj = {};
    source.forEach((x, x1) => {
        let roots = unionFind.find(x1);
        obj[roots] = obj[roots] || {};
        obj[roots][x] = (obj[roots][x] || 0) + 1;
    });

    let different = n;
    target.forEach((y, y1) => {
        let root = unionFind.find(y1);
        if (obj[root]?.[y]) {
            obj[root][y] = obj[root][y] - 1;
            different--;
        }
    });
    return different;
};

```