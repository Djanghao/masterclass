# Fenwick tree | Binary Indexed Tree | Typescript | Javascript

**Author:** panevskii
**Votes:** 1
**Link:** [https://leetcode.com/problems/range-sum-query-mutable/solutions/2960462/](https://leetcode.com/problems/range-sum-query-mutable/solutions/2960462/)

---

# Approach
We can use Fenwick Tree or Segment tree to reduce time complexity

# Complexity
- Time complexity:
Create\\Init tree $$O(N * log(N))$$
Update tree $$O(log(N))$$
Sum $$O(log(N))$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class FenwickTree {
    private bits: number[];
    constructor (items: number[], ) {
        this.bits = new Array(items.length).fill(0);
        for (let i = 0; i < items.length; i++) {
            this.update(i, items[i]);
        }
    }

    sum (r: number) {
        let ret = 0;
        while (r >= 0) {
            ret += this.bits[r];
            r = (r & (r + 1)) - 1
        }

        return ret;
    }

    update(i: number, delta: number) {
        while (i < this.bits.length) {
            this.bits[i] += delta;
            i = i | (i + 1);
        }
    }
}

class NumArray {
    private fenwickTree: FenwickTree;
    constructor(private nums: number[]) {
        this.fenwickTree = new FenwickTree(nums);
    }

    update(index: number, val: number): void {
        const delta =  val - this.nums[index];
        this.nums[index] = val;
        this.fenwickTree.update(index, delta);
    }

    sumRange(left: number, right: number): number {
        return this.fenwickTree.sum(right) - this.fenwickTree.sum(left - 1);
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
```