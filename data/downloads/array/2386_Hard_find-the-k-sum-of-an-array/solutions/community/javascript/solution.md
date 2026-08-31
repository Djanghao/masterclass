# Simple solution with a detailed proof | Heap | NlogN + klogK

**Author:** harttle
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-the-k-sum-of-an-array/solutions/2457741/](https://leetcode.com/problems/find-the-k-sum-of-an-array/solutions/2457741/)

---

I got very frustrated when I failed to tackle this problem and people are sharing their code w/o any proof like "I just know it". Inspired by [ye15](https://leetcode.com/problems/find-the-k-sum-of-an-array/discuss/2456675/Python3-priority-queue), finally I come up with a proof for this problem.

## The idea

Obviously, the largest sum (`posSum`) is the sum of all positive numbers. Using `posSum` as a baseline, we now substract numbers from it. Note that "adding a negative number" and "removing a positive number" are the same in effect, all we care about is a subset of absolute values of `nums`.  For k-th largest sum, we need get the k-th smallest (in terms of sum of items) of such subsets.

For k-th largest, we'll need to consider all combinations. The problem is *how to do this while controlling the size of candidates*.

- Use heap to track all candidates, so we can extract the minimum in `log` time.
- Enumerate the combinations in a treeish way, so we only need to check the root before go into deeper leafs.

Once we get the k-th smallest subset, we know the k-th largest sum is `posSum - sum(<k-th smallest subset>)`.

## The proof
The most important problem is **how to define this tree**. It's defined as:

- Let `nums` be the absolute values of `nums`, and sorted increasingly.
- The value of root node is the smallest `num`
- On level `i+1`, each node has two children.
	- The value of left child is its `parent + nums[i+1]`
	- The value of right child is its `parent + nums[i+1] - nums[i]`

Note that all subsets on level `i` contain the element `nums[i]`, that meas nodes on level `i` are the subsets which ends with `nums[i]`.

And this tree has two important features:

1. **Each path starting from root defines a subset**: when we go left, we keep `nums[i]`; when we go right, we remove `nums[i]`.
2. **Both left/right child >= parent**:
	- Left: `parent + nums[i+1] >= parent`
	- Right: `parent + nums[i+1] - nums[i] >= parent`, that's because we already sorted nums, so `nums[i+1] >= nums[i]`.

From (1) we know this tree covers all possible `2**n` subsets, the tree is a variant of [decision tree](https://en.wikipedia.org/wiki/Decision_tree), in which path from node to internal node is also a valid decision path.
From (2) we know children is always larger than parent, so we need use parent first. This indicates that only after parent is used and removed, then we need add children as candidates.

## The code

```javascript
var kSum = function(nums, k) {
    let posSum = nums.reduce((prev, curr) => curr > 0 ? prev + curr : prev, 0)
    nums = nums.map(x => Math.abs(x)).sort((l, r) => l - r)
    let heap = new Heap([{sum: nums[0], i: 0}], (l, r) => l.sum - r.sum)
    let ans = posSum
    for (let i = 1; i < k; i++) {
        let {sum, i} = heap.pop()
        ans = posSum - sum
        if (i + 1 >= nums.length) continue
        heap.push({sum: sum + nums[i + 1], i: i + 1})
        heap.push({sum: sum - nums[i] + nums[i + 1], i: i + 1})
    }
    return ans
};
```

Note that the `Heap` class is from [harttle/contest.js](https://github.com/harttle/contest.js/blob/master/src/heap.mjs), here's my submission: https://leetcode.com/submissions/detail/779204351/
