# The only TypeScript solution in existence (so far)

**Author:** chelsea6502
**Votes:** 0
**Link:** [https://leetcode.com/problems/finding-mk-average/solutions/5413552/](https://leetcode.com/problems/finding-mk-average/solutions/5413552/)

---

# Intuition
This was a collaboration between me and ChatGPT. I'm still not 100% sure how it works, but it's the only way that I can get it to work. I'd appreciate any comments on anything I've gotten wrong or left out.

# Complexity
let 'M' be the maximum possible value, which is 10^5 for this problem.

**Space complexity:**
O((logM)^2). The binary search takes O(logM), and we are calling sum each iteration, which takes O(logM). This means O((logM)^2).

**Space complexity:**
O(m + M). Data array holds at most 'm' elements, and the Fenwick trees store up to the maximum possible value (10^5 in this case).

# Code
```
// I'll assume you already know how a Fenwick tree works.
class Fenwick {
    private nums: number[];

    constructor(n: number) {
        this.nums = new Array(n + 1).fill(0);
    }

    sum(k: number): number {
        k += 1;
        let ans = 0;
        while (k > 0) {
            ans += this.nums[k];
            k &= k - 1;
        }
        return ans;
    }

    add(k: number, x: number): void {
        k += 1;
        while (k < this.nums.length) {
            this.nums[k] += x;
            k += k & -k;
        }
    }
}

// Number of elements is less than m? -1
// Otherwise, copy to new array, remove smallest k elements and largest k elements, then calc the average.
// Constraints say that 2 * k is always less than m.
class MKAverage {
    private m: number;
    private k: number;
    private data: number[];
    private valueTree: Fenwick;
    private countTree: Fenwick;
    private maxVal: number;

    constructor(m: number, k: number) {
        this.m = m;
        this.k = k;
        this.data = [];
        this.maxVal = 100000; // As per constraints: max value for the range [0, 10^5]

        // Two fenwick trees: one for the sums, one for the number of values. Because sum / number of values is the average.
        this.valueTree = new Fenwick(this.maxVal); // Init to maximum possible value.
        this.countTree = new Fenwick(this.maxVal);
    }

    addElement(num: number): void {
        // Add to data array
        this.data.push(num);

        // Add the two fenwick trees.
        this.valueTree.add(num, num);
        this.countTree.add(num, 1);

        // If we are over 'm', don't consider the oldest nubmer.
        // Remove this same number from the data array and the two fenwick trees.
        if (this.data.length > this.m) {
            const removed = this.data.shift();
            this.valueTree.add(removed, -removed);
            this.countTree.add(removed, -1);
        }
    }

    // Private function to binary search for the kth smallest value.
    // We do this by searching through the frequency fenwick tree. We want the node with the smallest cumulative sum of frequencies that is at least k.
    // NOTE: This doesn't get us kth smallest yet, because we might get the same value for different k's.
    private getIndex(k: number): number {
        let lo = 0, hi = this.maxVal;

        while (lo < hi) {
            const mid = Math.floor((lo + hi) / 2);
            if (this.countTree.sum(mid) < k) lo = mid + 1; // Too small? Rule out higher values
            else hi = mid; // Too large? Rule out higher values.
        }
        return lo;
    }

    calculateMKAverage(): number {
        if (this.data.length < this.m) return -1;

        const lo = this.getIndex(this.k); // Find the kth smallest value
        const hi = this.getIndex(this.m - this.k);  // Find the kth largest value.

        // Get the sum of values up to the kth smallest value, as well as how many numbers are in that sum.
        const sumLow = this.valueTree.sum(lo); 
        const countLow = this.countTree.sum(lo); 

        // Get the sum of values up to the (m-k)th smallest value, as well as how many numbers are in that sum.
        const sumHigh = this.valueTree.sum(hi);  // sum up to the kth largest
        const countHigh = this.countTree.sum(hi); // count of elements up to kth largest

        // Middle sum is the values up the kth largest, minus values up to kth smallest.
        let sum = sumHigh - sumLow;

        // Count and sum might not be exact. 
        // Sum and count queries could be the same for different numbers, which means we might have included or excluded extra numbers.
        // Adjust the sum based on if this has happened.
        sum += (countLow - this.k) * lo; // Times the kth smallest value by how much we may have undercounted.
        sum -= (countHigh - (this.m - this.k)) * hi; // Times kth largest value index by how much we may have overcounted.

        // Return the average: sum / (total elements - minus smallest and largest k elements)
        return Math.floor(sum / (this.m - 2 * this.k));
    }
}

```