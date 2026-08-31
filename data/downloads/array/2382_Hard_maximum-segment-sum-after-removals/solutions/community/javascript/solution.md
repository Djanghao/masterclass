# Javascript Union Find

**Author:** SmittyWerbenjagermanjensen
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-segment-sum-after-removals/solutions/2464491/](https://leetcode.com/problems/maximum-segment-sum-after-removals/solutions/2464491/)

---

Inspired by [hiepit's Python solution](https://leetcode.com/problems/maximum-segment-sum-after-removals/discuss/2461035/Python-Reverse-Union-Find-Clean-and-Concise)
```
class UnionFind {
    constructor() {
        this.par = new Map()
        this.segmentSums = new Map()
        this.max = 0
    }
    
    addNumAndMergeSegments(i, num) {
        this.par[i] = i
        this.segmentSums[i] = num
        this.max = Math.max(this.max, num)
        if (i-1 in this.par)
            this.union(i, i-1)
        if (i+1 in this.par)
            this.union(i, i+1)
    }
    
    find(x) {
        return x == this.par[x] ? x : this.find(this.par[x])
    }
    
    union(x, y) {
        const xPar = this.find(x)
        const yPar = this.find(y)
        if (xPar == yPar) return
        this.segmentSums[xPar] += this.segmentSums[yPar]
        this.par[yPar] = this.par[xPar]
        this.max = Math.max(this.max, this.segmentSums[xPar])
    }
    
}

const maximumSegmentSum = (nums, removeQueries) => {
    const N = nums.length
    const uf = new UnionFind()
    const ans = new Array(N)
    
    for (let i = N-1; i >= 0; i--) {
        ans[i] = uf.max
        const numsIdx = removeQueries[i]
        uf.addNumAndMergeSegments(numsIdx, nums[numsIdx])
    }
    
    return ans
}