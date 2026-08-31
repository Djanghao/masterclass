# TypeScript - dynamic programming solution w/ explanation

**Author:** alythobani
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-total-space-wasted-with-k-resizing-operations/solutions/5379258/](https://leetcode.com/problems/minimum-total-space-wasted-with-k-resizing-operations/solutions/5379258/)

---

# Intuition / Approach
We'll perform resizes until we don't need to anymore (i.e. until we've covered the whole array without failure).

At each index `i`, if we have any resizes left (treating `k=0` as having one resize left, since we can choose any initial size), we can try resizing to optimize the space wasted over some subarray `nums[i:j]` before moving to index `j+1`.

To optimize space wasted over `nums[i:j]` with a single resize, we pick the max number `maxNum = max(nums[i:j])` in that subarray as the new size. (If we pick a number below the max, the array will be too small when we reach that max number, failing the requirement. If we pick a number above the max, we'll waste more space than we need to.)

The space wasted over this subarray `nums[i:j]` will be `(maxNum - nums[i]) + (maxNum - nums[i+1]) + ... + (maxNum - nums[j])` = `maxNum * (j - i + 1) - sum(nums[i:j])`.

## Note on the initial resize edge-case

This is a little unintuitive, so for some extra clarification: as mentioned above, we treat `k=0` as having one resize left, since we can choose any initial size. Thus the failure case where we return `Infinity` is specifically when `k < 0` *and* `i < n` (meaning we still have resizes left to do). If `k == -1` and `i >= n`, that's alright since it just means we used a resize we had available at `k==0` in the previous recursive call. But if `i < n`, we still need to do a resize, so we need to return `Infinity` if `k < 0` aka we have no resizes available.

# Complexity
- Time complexity: $$O(n^2k)$$
  - We return `calcMinSpaceMemoized(0, k)`, which triggers `calcMinSpaceMemoized(1, k-1)` to `calcMinSpaceMemoized(n, k-1)` (`n` recursive calls).
  - The first of those triggered calls, `calcMinSpaceMemoized(1, k-1)`, triggers `calcMinSpaceMemoized(2, k-2)` to `calcMinSpaceMemoized(n, k-2)` (`n-1 <= n` calls). Each further triggered call (e.g. `calcMinSpaceMemoized(2, k-2)`) triggers one fewer call, so 
  - Outside of the memoization, then, extrapolating this pattern, we'd have $$O(n^n)$$ time (`calcMinSpaceMemoized(0,k)` triggers `n` calls, each of which triggers at most `n-1` calls, each of which triggers at most `n-2` calls, etc down to `1`; so in total, $$n * (n-1) * (n-2) * ... * 1 <= n^n$$ calls). But thanks to the memoization (where the `memo` is of size $$nk$$), we at most trigger $$nk$$ for loops of length at most `n`. So in total, the time complexity is bounded by $$nk * n = n^2k$$.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(nk)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function minSpaceWastedKResizing(nums: number[], k: number): number {
    const n = nums.length, memo = {};
    function calcMinSpaceMemoized(i: number, k: number): number {
        const memoCoords = `${i},${k}`;
        if (memo[memoCoords] === undefined) {
            memo[memoCoords] = calcMinSpace(i, k);
        }
        return memo[memoCoords];
    }
    function calcMinSpace(i: number, k: number): number {
        if (i >= n) return 0;
        if (k < 0) return Infinity;
        let maxNum = nums[i];
        let subarraySum = 0;
        let ans = Infinity;
        for (let j = i; j < n; j++) {
            // try resizing to the max num in nums[i:j]
            if (nums[j] > maxNum) maxNum = nums[j];
            subarraySum += nums[j];
            const spaceWasted = maxNum * (j-i+1) - subarraySum;
            const newAns = calcMinSpaceMemoized(j+1, k-1) + spaceWasted;
            if (newAns < ans) ans = newAns;
        }
        return ans;
    }
    return calcMinSpaceMemoized(0, k);
};


```