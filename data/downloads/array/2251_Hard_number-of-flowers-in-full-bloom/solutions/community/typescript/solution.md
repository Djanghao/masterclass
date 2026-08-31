# TypeScript Simple Approach (Sort + Binary Search) [100%]

**Author:** Plasticc
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-flowers-in-full-bloom/solutions/4155383/](https://leetcode.com/problems/number-of-flowers-in-full-bloom/solutions/4155383/)

---

# Intuition
The number of blooming flowers at any given time is determined by how many flowers have started blooming but have not yet finished. For a given time t, the number that have started blooming is every entry of `flowers` where `flowers[0] <= t`. Similarly, the number that have finished is `flowers[1] < t`. The difference between these two is the number of flowers blooming at `t`.

# Approach
By sorting the starting times and ending times in `flowers` separately, we can use a binary search to determine how many flowers have started blooming and how many have finished blooming.

Note: because the inequality for starting is `<=` while ending is `<`, we can either implement extra logic in the binary search to handle this, or we can just increment every end value by 1 and use `<=` for both.

Additionally, we need a binary search that for an array of length `n` will return `n` if the target is bigger than every element in the array. To do this, we'll set the bounds to `[0, n]` instead of `[0, n - 1]` and compare our pointers via `<` rather than `<=` so we are guaranteed to break the loop when `low = high = n`.
# Complexity
- Time complexity: $$O((m + n) \\log n)$$
- Space complexity: $$O(n)$$
# Code
```
function search(arr: Uint32Array, target: number): number {
    let low = 0;
    let high = arr.length;
    while (low < high) {
        const mid = ~~((low + high) / 2);
        if (arr[mid] > target) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
}

function fullBloomFlowers(flowers: number[][], people: number[]): number[] {
    const starts = new Uint32Array(flowers.length);
    const ends = new Uint32Array(flowers.length);
    for (let i = 0; i < flowers.length; i++) {
        starts[i] = flowers[i][0];
        ends[i] = flowers[i][1] + 1;
    }
    starts.sort();
    ends.sort();
    return people.map(t => search(starts, t) - search(ends, t));
};
```