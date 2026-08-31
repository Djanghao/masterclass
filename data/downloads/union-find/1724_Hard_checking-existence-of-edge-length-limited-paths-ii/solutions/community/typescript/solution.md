# [Typescript] Union Find Snapshots | Time: O(N + Elog(E)) | Space: O(N + E)

**Author:** rojas
**Votes:** 0
**Link:** [https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths-ii/solutions/4100874/](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths-ii/solutions/4100874/)

---

# Intuition\r
<!-- Describe your first thoughts on how to solve this problem. -->\r
\r
# Approach\r
<!-- Describe your approach to solving the problem. -->\r
\r
# Complexity\r
**N** is # of nodes and **E** is # of edges.\r
- Time complexity:\r
    constructor: O(N + Elog(E))\r
    query: O(1)\r
\r
- Space complexity: O(N + E)\r
\r
# Code\r
```Typescript\r
class DistanceLimitedPathsExist {\r
    private dsu: SnapshotDSU;\r
\r
    constructor(n: number, edgeList: number[][]) {\r
\r
        // Sort edges by distance ASC\r
        const E = edgeList.length;\r
        edgeList.sort((a, b) => a[2] - b[2]);\r
\r
        // Populate DSU\r
        const dsu = new SnapshotDSU(n);\r
        for (let i = 0; i < E; ++i) {\r
            dsu.snapshot(edgeList[i][2]);\r
            dsu.merge(edgeList[i][0], edgeList[i][1]);\r
        }\r
        this.dsu = dsu;\r
    }\r
\r
    query(p: number, q: number, limit: number): boolean {\r
        return this.dsu.findById(p, limit-1) === this.dsu.findById(q, limit-1);\r
    }\r
}\r
\r
class SnapshotDSU {\r
    private roots: SnapshotArray<number>;\r
    private ranks: number[];\r
\r
    constructor(N: number) {\r
        const roots = new SnapshotArray(N, 0);\r
        for (let i = 0; i < N; ++i){\r
            roots.set(i, i)\r
        }\r
        this.roots = roots;\r
        this.ranks = new Array(N).fill(1);\r
    }\r
\r
    find(a: number): number {\r
        const roots = this.roots;\r
        let b = a;\r
        let c = a;\r
        do {\r
            a = c;\r
            c = roots.get(a);\r
        } while (a !== c);\r
        while (b !== a) {\r
            c = roots.get(b);\r
            roots.set(b, a);\r
            b = c;\r
        }\r
        return a;\r
    }\r
\r
    findById(a: number, id: number): number {\r
        const roots = this.roots;\r
        let c = a;\r
        do {\r
            a = c;\r
            c = roots.getById(a, id);\r
        } while (a !== c);\r
        return a;\r
    }\r
\r
    merge(a: number, b: number): boolean {\r
        a = this.find(a);\r
        b = this.find(b);\r
        if (a === b) {\r
            return false;\r
        }\r
        const ranks = this.ranks;\r
        if (ranks[a] < ranks[b]) {\r
            const c = a;\r
            a = b;\r
            b = c;\r
        }\r
        this.roots.set(b, a);\r
        ranks[a] += ranks[b];\r
        return true;\r
    }\r
\r
    snapshot(id: number): void {\r
        this.roots.snapshot(id);\r
    }\r
}\r
\r
class SnapshotArray<T> {\r
    private id: number;\r
    private ids: number[][];\r
    private vals: (T | null)[][];\r
\r
    constructor(N = 0, def: T = null) {\r
        this.id = 0;\r
        let ids: number[][] = [];\r
        for (let i = 0; i < N; i = ids.push([0])){}\r
        this.ids = ids;\r
        let vals: (T | null)[][] = [];\r
        for (let i = 0; i < N; i = vals.push([def])){}\r
        this.vals = vals;\r
    }\r
\r
    get(i: number): T {\r
        return this.vals[i][this.ids[i].length-1];\r
    }\r
\r
    getById(i: number, id = this.id): T {\r
        const N = this.ids[i].length;\r
        const j = this.binarySearch(this.ids[i], id+1, 0, N) - 1;\r
        return this.vals[i][j];\r
    }\r
\r
    set(i: number, val: T): void {\r
        const N = this.ids[i].length;\r
        if (this.ids[i][N-1] === this.id) {\r
            this.vals[i][N-1] = val;\r
        } else {\r
            this.ids[i].push(this.id);\r
            this.vals[i].push(val);\r
        }\r
    }\r
\r
    setById(i: number, val: T, id = this.id): void {\r
        const N = this.ids[i].length;\r
        const j = this.binarySearch(this.ids[i], id, 0, N);\r
        this.vals[i][j] = val;\r
    }\r
\r
    snapshot(id: number): void {\r
        if (id < this.id) {\r
            throw new Error("Snapshot IDs must be non-decreasing");\r
        }\r
        this.id = id;\r
    }\r
\r
    private binarySearch(arr: number[], target: number, min: number, max: number): number {\r
        while (min < max) {\r
            const mid = min + Math.floor((max - min) / 2);\r
            if (target > arr[mid]) {\r
                min = mid + 1;\r
            } else {\r
                max = mid;\r
            }\r
        }\r
        return min;\r
    }\r
}\r
```