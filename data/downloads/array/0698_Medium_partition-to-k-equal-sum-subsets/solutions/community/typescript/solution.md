# TypeScript - Backtracking, beats 100%

**Author:** alythobani
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-to-k-equal-sum-subsets/solutions/5348789/](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/solutions/5348789/)

---

# Intuition / Approach
1. Initialize `k` subsets (`subsetSums`)
   - In particular, we only need to track the total sum for each subset; there's no extra benefit to actually tracking the numbers in each subset
2. Sort `nums` in reverse order (get the biggest ones out of the way first, so we can fail fast)
3. Go through each number `nums[i]`, and attempt to place it into some `subsetSums[subsetIdx]` into which it can currently fit
3. Check if there's a solution after this placement (`generate(i+1)` returns `true` if there's a solution)
4. If there's no solution after this placement, undo it (subtract `nums[i]` from `subsetSums[subsetIdx]`)
5. **What turned this solution from "Time Limit Exceeded" into "Beats 100%":** After undoing the placement, if `subsetSums[subsetIdx] === 0`, we know there was no solution even after placing `nums[i]` into its own empty subset, so there's definitely no solution after placing it into some non-empty subset either; and we can return `false` at this point (which will bring us back up the callstack as needed).
6. Otherwise try placing `nums[i]` into another subset, or if none of the subsets work, return `false`


# Complexity
- Time complexity:  $$O(nlog(n) + k^n)$$
  - $$O(nlogn)$$ for the initial reverse-sorting of $$nums$$
  - $$O(k^n)$$ for the `generate(0)` call
    - Each `subsetIdx`$$^{th}$$ ($$subsetIdx \\in [0,k)$$) iteration of the for-loop within `generate(i)` ($$i \\in [0,n]$$) potentially calls `generate(i+1)`. So `generate(0)` potentially creates up to `n` nested for-loops of length `k`, with constant-time expressions outside of the recursive `generate` call.
    - Picturing this as a tree: level 0 (`generate(0)`) is length $$1 = k^0$$; `generate(0)` branches out into `k` calls of `generate(1)`, so level 1 is length $$k = k^1$$; each of those `generate(1)` calls branches out into another `k` calls  of `generate(2)`, so level 2 is length $$k*k = k^2$$; and so on. The tree extends up to level `n` (containing $$k^n$$ calls of `generate(n)`), so the total time complexity of `generate(0)` is $$1 + k + k^2 + ... + k^n \\in O(k^n)$$.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(k)$$ for the `k` subset sums
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function canPartitionKSubsets(nums: number[], k: number): boolean {
    if (k === 1) return true;
    const total = sumArr(nums);
    if (total % k !== 0) return false;
    const eachSum = total / k;
    const subsetSums = Array(k).fill(0);
    nums.sort((a, b) => b - a);

    function generate(i: number): boolean {
        if (i >= nums.length) return true;
        const num = nums[i];
        for (let subsetIdx = 0; subsetIdx < k; subsetIdx++) {
            const subsetSum = subsetSums[subsetIdx];
            if (num + subsetSum > eachSum) continue;
            subsetSums[subsetIdx] += num;
            if (generate(i + 1)) return true;
            subsetSums[subsetIdx] -= num;
            if (subsetSums[subsetIdx] === 0) return false;
        }
        return false;
    }

    return generate(0);
};

function sumArr(nums: number[]): number {
    return nums.reduce((acc, n) => acc + n, 0);
}


```