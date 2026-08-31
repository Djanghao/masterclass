# Javascript union find with comments

**Author:** user9601U
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-latest-group-of-size-m/solutions/808128/](https://leetcode.com/problems/find-latest-group-of-size-m/solutions/808128/)

---

Runtime: 560 ms, faster than 100.00% of JavaScript online submissions for Find Latest Group of Size M.
Memory Usage: 76.4 MB, less than 100.00% of JavaScript online submissions for Find Latest Group of Size M.

100 % might be because there are very less JS submissions. There are better approaches, But I think union find is more intuituve.
```
class UnionFind {
    constructor(arr) {
        [this.parents, this.ranks] = this.initialise(arr);
    }
    
    initialise(arr) {
        const parents = new Map();
        const ranks = new Map();
        arr.forEach(val => {
            parents.set(val, val);
            ranks.set(val, 1);
        })
        
        return [parents, ranks];
    }
    
    find(val) {
        if (this.parents.get(val) === val) return val;
        this.parents.set(val, this.find(this.parents.get(val)));
        return this.parents.get(val);
    }
    
    union(m, n) {
        const rootM = this.find(m);
        const rootN = this.find(n);
        
        if (rootM === rootN) return;
        if (rootM > rootN) {
            this.updateParent(rootN, rootM);
        } else {
            this.updateParent(rootM, rootN);
        }
    }
    
    updateParent(child, parent) {
        this.ranks.set(parent, this.ranks.get(parent) + this.ranks.get(child));
        this.parents.set(child, parent);
    }
}

/**
 * @param {number[]} arr
 * @param {number} m
 * @return {number}
 */
var findLatestStep = function(arr, m) {
    const uF = new UnionFind(arr);
    const mRecords = new Set(); // This contains parents whose rank is m 
    const visited = new Set();  // this contains the visited values
    let res = -1;

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        visited.add(val);
        
        if (visited.has(val - 1)) {
            let parent1 = uF.find(val);
            let parent2 = uF.find(val - 1);
			// Since we are merging, the rank for val - 1 & val has changed, they are no longer m. Hence removed them from set.
            mRecords.delete(parent1);  
            mRecords.delete(parent2);
            uF.union(val, val - 1);
        }
        
        if (visited.has(val + 1)) {
            let parent1 = uF.find(val);
            let parent2 = uF.find(val + 1);
            mRecords.delete(parent1);
            mRecords.delete(parent2);
            uF.union(val, val + 1);
        }
        
        let parent = uF.find(val);
        if (uF.ranks.get(parent) === m) mRecords.add(parent);
		// updating the result.
        if (mRecords.size > 0) res = i + 1;  
    }
    
    return res;
};