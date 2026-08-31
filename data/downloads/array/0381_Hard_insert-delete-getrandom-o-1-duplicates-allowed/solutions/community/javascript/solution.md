# [JS] Using HashMap and ArrayList - O(1) average time

**Author:** wintryleo
**Votes:** 5
**Link:** [https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/solutions/1485292/](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/solutions/1485292/)

---

```
class RandomizedCollection {
    constructor() {
        this.nums = [];
        this.valIdxs = new Map();
    }
    insert(val) {
        this.nums.push(val);
        const isNewVal = !this.valIdxs.has(val) || this.valIdxs.get(val).size === 0;
        const idxSet = isNewVal ? new Set() : this.valIdxs.get(val);
        idxSet.add(this.nums.length - 1);
        this.valIdxs.set(val, idxSet);
        return isNewVal;
    }
    remove(val) {
        if(!this.valIdxs.has(val) || this.valIdxs.get(val).size === 0) {
            return false;
        }
        const valIdxSet = this.valIdxs.get(val);
        let removeIdx = this.nums.length - 1;
        if(!valIdxSet.has(removeIdx)) {
            const replaceVal = this.nums[this.nums.length - 1];
            removeIdx = valIdxSet.values().next().value;
            
            [this.nums[removeIdx], this.nums[this.nums.length - 1]] = [this.nums[this.nums.length - 1], this.nums[removeIdx]]
            
            this.valIdxs.get(replaceVal).delete(this.nums.length - 1);
            this.valIdxs.get(replaceVal).add(removeIdx);
        }
        this.valIdxs.get(val).delete(removeIdx);
        this.nums.pop();
        return true;
    }
    getRandom() {
        const randomIdx = Math.floor(Math.random() * this.nums.length);
        return this.nums[randomIdx];
    }
}
```
Time Complexity = O(1) average time for each operation
Space Complexity = O(n) [arrayList and hashMap]