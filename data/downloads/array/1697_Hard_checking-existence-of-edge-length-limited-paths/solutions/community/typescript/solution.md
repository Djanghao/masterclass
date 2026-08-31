# [Typescript Union Find | Time: O(Elog(E) + Qlog(Q)) | Space: O(N + Q)

**Author:** rojas
**Votes:** 0
**Link:** [https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/solutions/4098035/](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/solutions/4098035/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(Elog(E) + Qlog(Q))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Where **E** is the # of edges and **Q** is the # of queries

- Space complexity*: O(N + Q)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Where **Q** is the # of queries.

\\* Please note the space used for sorting by [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) is not included, as it "depends on the implementation". From what I've gathered, it's likely between O(log(N)) and O(N).

# Code
```Typescript
function distanceLimitedPathsExist(n: number, edgeList: number[][], queries: number[][]): boolean[] {
    const E = edgeList.length;
    const Q = queries.length;

    // Sort edges by distance ASC
    edgeList.sort((a, b) => a[2] - b[2]);

    // Sort queries by limit ASC
    const sortedQueries: number[] = [];
    for (let i = 0; i < Q; sortedQueries.push(i++)){}
    sortedQueries.sort((a, b) => queries[a][2] - queries[b][2]);

    // Initialize output
    const exists = new Array(Q).fill(false);

    // For each query:
    let e = 0;
    const dsu = new DSU(n);
    for (let q = 0; q < Q; ++q) {
        const i = sortedQueries[q];
        const [a, b, limit] = queries[i];
        // Process edges below query limit
        for (; e < E && edgeList[e][2] < limit; ++e) {
            dsu.merge(edgeList[e][0], edgeList[e][1]);
        }
        // Check if path exists with only edges below limit
        exists[i] = dsu.find(a) === dsu.find(b);
    }

    return exists;
}

class DSU {
    roots: number[];
    ranks: number[];

    constructor(N: number) {
        const roots: number[] = [];
        for (let i = 0; i < N; roots.push(i++)){}
        this.roots = roots;
        this.ranks = new Array(N).fill(1);
    }

    find(a: number): number {
        const roots = this.roots;
        let b = a;
        while (a !== roots[a]) {
            a = roots[a];
        }
        while (b !== a) {
            const c = roots[b];
            roots[b] = a;
            b = c;
        }
        return a;
    }

    merge(a: number, b: number): void {
        a = this.find(a);
        b = this.find(b);
        if (a === b) {
            return;
        }
        if (this.ranks[a] < this.ranks[b]) {
            const c = a;
            a = b;
            b = c;
        }
        this.roots[b] = a;
        this.ranks[a] += this.ranks[b];
    }
}

/**
 * Your DistanceLimitedPathsExist object will be instantiated and called as such:
 * var obj = new DistanceLimitedPathsExist(n, edgeList)
 * var param_1 = obj.query(p,q,limit)
 */
```