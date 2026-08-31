# Super simple (no heap) approach

**Author:** smada
**Votes:** 3
**Link:** [https://leetcode.com/problems/kth-largest-element-in-a-stream/solutions/4862185/](https://leetcode.com/problems/kth-largest-element-in-a-stream/solutions/4862185/)

---

Inspired by monotonic stack

# Code
```
class KthLargest {
    private k: number;
    private nums: number[];

    constructor(k: number, nums: number[]) {
        this.k = k;
        // Sort the initial array and keep only the k largest elements
        this.nums = nums.sort((a, b) => b - a).slice(0, k);
    }

    add(val: number): number {
        // Find the appropriate position for the new value to keep the largest k elements sorted
        let i = 0;
        while (i < this.nums.length && this.nums[i] > val) {
            i++;
        }
        this.nums.splice(i, 0, val); // Insert val maintaining the order

        // If the array grows beyond k elements, remove the smallest (last) element
        if (this.nums.length > this.k) {
            this.nums.pop();
        }

        // The kth largest is the last element in the array
        return this.nums[this.k - 1];
    }
}


/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
```