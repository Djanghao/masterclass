# Recursion, simple and easy-to-understand approach.

**Author:** heiseshandian
**Votes:** 0
**Link:** [https://leetcode.com/problems/visit-array-positions-to-maximize-score/solutions/4814705/](https://leetcode.com/problems/visit-array-positions-to-maximize-score/solutions/4814705/)

---

# Problem 2786: Visit Array Positions to Maximize Score

## Intuition

This problem requires maximizing the score by choosing to visit positions in an array based on a unique set of rules. The key insight is understanding that at any given position, the decision to either take the current value and potentially incur a penalty or skip it affects the total score. This choice depends on whether the current value and the value chosen previously are both even or odd, which influences whether a penalty is applied.

## Approach

The solution employs a depth-first search (DFS) strategy with memoization to explore all possible paths and make the optimal choice at each step. The `dfs` function is defined with a helper `cache` function to memoize results and avoid recalculating the same state, improving efficiency. The core logic within `dfs` involves choosing between:

1. Skipping the current number, thereby not altering the score or penalty condition.
2. Taking the current number and moving to the next, adding its value to the total score and applying a penalty if the parity (even or odd) of the current number differs from the previous one chosen.

The `isEven` function assists in determining the parity of numbers, essential for penalty calculation. The solution initiates by taking the first number and recursively applying `dfs` to subsequent numbers, considering the parity of the first number.

## Complexity

- **Time Complexity:** The memoization effectively reduces the time complexity to O(N), where N is the length of the input array. Without memoization, the complexity would be exponential due to the exploration of all possible paths. However, by caching results of function calls, each state is computed once.
- **Space Complexity:** O(N) for the recursion stack and cache storage. The depth of the recursion can go up to N in the worst case, and the cache stores a result for each unique state identified by the index and the parity of the previous element chosen.

# Code
```
function maxScore(nums: number[], x: number): number {
    const dfs = cache((i: number, even: boolean) => {
        if (i === nums.length) {
            return 0;
        }

        const currentEven = isEven(nums[i]);
        return Math.max(
            dfs(i + 1, even),
            nums[i] + dfs(i + 1, currentEven) - (currentEven === even ? 0 : x)
        );
    });

    return nums[0] + dfs(1, isEven(nums[0]));
}

function isEven(n: number) {
    return (n & 1) === 0;
}

function cache<T extends (...args: any[]) => any>(fn: T) {
    const runCache: Record<string, any> = {};

    return ((...args: any[]) => {
        const id = args.join(',');
        if (runCache.hasOwnProperty(id)) {
            return runCache[id];
        }

        runCache[id] = fn.apply(this, args);
        return runCache[id];
    }) as T;
}
```