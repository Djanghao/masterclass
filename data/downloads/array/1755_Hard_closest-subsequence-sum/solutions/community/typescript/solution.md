# TypeScript divide-halves & two-pointer solution

**Author:** rdmusin2020
**Votes:** 3
**Link:** [https://leetcode.com/problems/closest-subsequence-sum/solutions/1964600/](https://leetcode.com/problems/closest-subsequence-sum/solutions/1964600/)

---

```ts
function* sums(nums: number[], depth: number = 0): Generator<number> {
    if (depth === nums.length) {
        yield 0;
        return;
    }

    for (const sum of sums(nums, depth + 1)) {
        yield sum;
        yield sum + nums[depth];
    }
}

function uniqueSums(nums: number[]): Set<number> {
    return new Set(sums(nums));
}

function minAbsDifference(nums: number[], goal: number): number {
    // Split nums into two halves, and get their unique sums
    const [left, right] = [nums.slice(0, nums.length / 2), nums.slice(nums.length / 2)]
        .map(half => Array.from(uniqueSums(half)));

    // Sort left sums smallest-to-largest, right sums largest-to-smallest
    left.sort((a, b) => a - b);
    right.sort((a, b) => b - a);

    // Function to get the sum at pointers l2, r2
    const getSum = (l2: number, r2: number) => l2 < left.length && r2 < right.length ? Math.abs(left[l2] + right[r2] - goal) : Infinity;

    // Maintain a pointer `l` into the left subarray and `r` into the right subarray
    let l = 0;
    let r = 0;

    // Grab the sums at (l, r) as the initial best option
    let best = getSum(l, r);

    // Until we reach the end of both arrays,
    while (l < left.length - 1 || r < right.length - 1) {
        // Calculate both possible sums
        const sumL = getSum(l + 1, r);
        const sumR = getSum(l, r + 1);

        // Choose whichever is better
        if (sumL < sumR) {
            l++;
        } else {
            r++;
        }

        // Store it as best
        best = Math.min(best, sumL, sumR);
    }

    return best;
}
```