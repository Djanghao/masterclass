# DP + Binary Search

**Author:** rojas
**Votes:** 0
**Link:** [https://leetcode.com/problems/odd-even-jump/solutions/5448370/](https://leetcode.com/problems/odd-even-jump/solutions/5448370/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript
function oddEvenJumps(arr: number[]): number {
    
    // Base check
    const N = arr.length;
    if (N < 2) {
        return N;
    }
    
    // Init DP
    const dp: [boolean, boolean][] = new Array(N);
    for (let i = 0; i < N; ++i) {
        dp[i] = [false, false];
    }
    dp[N - 1] = [true, true];
    
    // sorted contains traversed indices sorted by value.
    // If a duplicate value exists, only the smaller index
    // is stored.
    const sorted: number[] = [N - 1];

    // Traverse the array in reverse
    for (let i = N - 2; i >= 0; --i) {

        // Find the insertion point for i in sorted
        const s = binarySearch(sorted, arr, arr[i]);

        // Check if even(0) or odd (1) jumps reach the goal
        if (s < sorted.length && arr[i] == arr[sorted[s]]) {
            dp[i][0] = dp[sorted[s]][1];
            dp[i][1] = dp[sorted[s]][0];
            sorted[s] = i;
        } else {
            dp[i][0] = s > 0 && dp[sorted[s - 1]][1];
            dp[i][1] = s < sorted.length 
                && arr[i] < arr[sorted[s]]
                && dp[sorted[s]][0];
            sorted.splice(s, 0, i);
        }
    }
    
    // Cound the number of good starting indices
    let out = 0;
    for (let i = 0; i < N; ++i) {
        out += +dp[i][1];
    }

    // Return the result
    return out;
};

function binarySearch(arr: number[], vals: number[], tgt: number, min = 0, max = arr.length): number {
    while (min < max) {
        const mid = min + Math.floor((max - min) / 2);
        if (vals[arr[mid]] < tgt) {
            min = mid + 1;
        } else {
            max = mid;
        }
    }
    return min;
}
```