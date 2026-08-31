# JavaScript 2 Different Solutions

**Author:** stevenkinouye
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/solutions/609957/](https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/solutions/609957/)

---

```javascript
// SOLUTION 1
// SLOW SOLUTION BUT PASSES
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(mat, k) {
    let heap = new MaxHeap();
    heap.push(0);
    for (let row = 0; row < mat.length; row++) {
        const values = heap.store;
        heap.reset();
        
        for (let value of values) {
            for (let colValue of mat[row]) {
                heap.push(value + colValue);
                if (heap.size() > k) heap.pop();
            }
        }
    }
    return heap.pop();
};

class MaxHeap {
    constructor() {
        this.store = [];
    }
    
    reset() {
        this.store = [];
    }
    
    size() {
        return this.store.length;
    }
    
    push(value) {
        this.store.push(value);
        this.heapifyUp(this.store.length - 1);
    }
    
    pop() {
        if (this.store.length < 2) return this.store.pop();
        const value = this.store[0];
        this.store[0] = this.store.pop();
        this.heapifyDown(0);
        return value;
    }
    
    heapifyUp(child) {
        while (child) {
            const parent = Math.floor((child - 1) / 2);
            if (this.shouldSwap(child, parent)) {
                [this.store[child], this.store[parent]] = [this.store[parent], this.store[child]];
                child = parent;
            } else {
                break;
            }
        }
    }
    
    heapifyDown(parent) {
        while (true) {
            let [child, child2] = [1, 2].map((n) => parent * 2 + n).filter((n) => n < this.store.length);
            
            if (this.shouldSwap(child2, child)) {
                child = child2;
            }
            if (this.shouldSwap(child, parent)) {
                [this.store[child], this.store[parent]] = [this.store[parent], this.store[child]];
                parent = child;
            } else {
                break;
            }
        }
    }
    
    shouldSwap(child, parent) {
        return child && this.store[child] > this.store[parent];
    }
}
```

```javascript
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

```javascript
// SOLUTION 2
const MAX_VALUE = 5000;
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(mat, k) {
    const height = mat.length;
    const width = mat[0].length;
    
    const numCombinations = (row, sum, limit) => {
        if (sum > limit) return 0;
        if (row === height) return 1;
        let totalCombinations = 0;
        for (let value of mat[row]) {
            let count = numCombinations(row + 1, value + sum, limit);
            totalCombinations += count;
            if (count === 0 || totalCombinations > k) break;
        }
        return totalCombinations;
    }
    
    let lo = height;
    let hi = lo * MAX_VALUE;
    while (lo < hi) {
        // value (mid) we are checking to see if the number of combinations
        // is less than or equal to this value (mid)
        const mid = Math.floor((lo + hi) / 2);

        const count = numCombinations(0, 0, mid);
        if (count < k) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return lo;
};
```