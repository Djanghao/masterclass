# Segment Tree Typescript

**Author:** gehaktmolen
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-of-range-sum/solutions/3777003/](https://leetcode.com/problems/count-of-range-sum/solutions/3777003/)

---

# Intuition
The idea for this solution came from kind of combining the approach of the two problems

https://leetcode.com/problems/subarray-sum-equals-k/
https://leetcode.com/problems/count-of-smaller-numbers-after-self/

# Approach
We use a segment tree to quickly query whether a range of prefix sums exists before current index i. The idea is that instead of using a map to get the count of subarrays that equal runningSum - k we use a segment tree: segmentTree.query(runningSum - upper, runningSum - lower). Instead of using the prefixSums as values to count in the segment tree we instead use the indexes of the values of the sorted prefixSums.

Binary search is then used to get a left and right bound of the indexes of the runningSum - upper to runningSum - lower inside the sorted prefix sums array for the tree query.

At the end of the loop we increment the index of runningSum in the sorted prefixSumArray in the segment tree.

# Complexity
- Time complexity: O(n log n), sorting prefix sums is n log n and querying / updating the tree is log n which we do n times, same for the binary searches, also log n. So O(n log n)

- Space complexity: O(n) both prefix sums array and the segment tree use O(n) space

# Code
```
class SegmentTree {
    private n: number;
    private tree: number[];

    public constructor(n: number) {
        this.tree = new Array(2 * n).fill(0);
        this.n = n;        
    }

    public query(l: number, r: number): number {
        l += this.n;
        r += this.n;
        let ans = 0;

        while (l < r) {
            if (l & 1) {
                ans += this.tree[l++];
            }

            if (r & 1) {
                ans += this.tree[--r];
            }

            l >>= 1;
            r >>= 1;
        }

        return ans;
    }

    public increment(idx: number) {
        idx += this.n;
        this.tree[idx]++;
        while (idx > 0) {
            idx >>= 1;
            this.tree[idx] = this.tree[idx * 2] + this.tree[idx * 2 + 1];
        }        
    }
}

function countRangeSum(nums: number[], lower: number, upper: number): number {
    // this solution is inspired by the count subarrays that equal sum K https://leetcode.com/problems/subarray-sum-equals-k/
    // as we loop over i we will keep track of the running sum
    // lets assume that lower / upper was just a fixed value k instead
    // to get all the subarrays that add up to k we keep a map sumCounts { runningSum: count }
    // the counts at index i is then sumCounts[runningSum - k] ( + 1 if runningSum = k)
    // but now since lower <= k <= upper we need to get a range of sumCounts
    // what we want is sumCounts[runningSum - upper] + sumCounts[runningSum - upper + 1] + ... + sumCounts[runningSums - lower]
    // lower and upper can be large... So we need an efficient way to query a range
    // here comes the segment tree 
    // by using an array of sorted prefixSums we can keep track of the counts of all prefixSums appearing before current index i
    // with bisect_left and bisect_right binary searches we can quickly get the left and right indexes of the range inside the sorted prefixSum array
    // we then query the segment tree for the total count of that index range
    // at the end of each loop we then increment the index of the current running sum by 1 in the tree
    const prefixSums = sortedPrefixSums(nums);
    const segmentTree = new SegmentTree(nums.length);

    let runningSum = 0;
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        runningSum += nums[i];

        if (runningSum >= lower && runningSum <= upper) {
            ans++;
        }

        let l = bisectLeft(prefixSums, runningSum - upper);
        let r = bisectRight(prefixSums, runningSum - lower);

        ans += segmentTree.query(l, r);
        let idx = bisectLeft(prefixSums, runningSum);
        segmentTree.increment(idx);        
    }

    return ans;
};

function sortedPrefixSums(nums: number[]) {
    const prefixSums = new Array<number>(nums.length).fill(0);

    prefixSums[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        prefixSums[i] = nums[i] + prefixSums[i - 1];
    }

    prefixSums.sort((a, b) => a - b);
    return prefixSums;
}

function bisectLeft(nums: number[], target) {
    let l = 0;
    let r = nums.length;
    let m = 0;
    
    while (l < r) {
        m = l + ((r - l) >> 1);

        if (nums[m] < target) {
            l = m + 1;
        } else {
            r = m;
        }
    }

    return l;
}

function bisectRight(nums: number[], target) {
    let l = 0;
    let r = nums.length;
    let m = 0;
    
    while (l < r) {
        m = l + ((r - l) >> 1);

        if (target < nums[m]) {
            r = m;
        } else {
            l = m + 1;
        }
    }

    return l;
}
```