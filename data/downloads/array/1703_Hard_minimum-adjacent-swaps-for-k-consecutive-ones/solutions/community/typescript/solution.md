# Memory beats 100% [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/solutions/5866536/](https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/solutions/5866536/)

---

# Intuition
The goal is to group k consecutive 1s in the array using the minimum number of adjacent swaps. Since swapping affects the position of 1s, the key is to find an optimal way to align them closer together, minimizing movement.

# Approach
Identify the positions of all 1s, then use a sliding window technique to calculate the cost of moving k 1s together, adjusting the cost as you slide the window across the array.

# Complexity
- Time complexity:
O(n), where n is the length of the array, because we iterate through the array a couple of times.

- Space complexity:
O(k), as we store the positions of 1s, which can be at most k if there are k 1s in the array.

# Code
```typescript []
/**
 * Calculate the minimum number of adjacent swaps needed to get k consecutive 1's.
 * 
 * @param {number[]} nums - An array consisting of 0's and 1's.
 * @param {number} k - The number of consecutive 1's desired.
 * @return {number} - The minimum number of adjacent swaps needed.
 */
function minMoves(nums: number[], k: number): number {
    // If k is 1, no swaps are needed as we already have single 1's.
    if (k === 1) return 0;

    // h is the half-point for k (used for centering the 1's)
    let h = (k + 1) >> 1;
    let n = nums.length; // Length of the input array

    let l = 0; // Left pointer for the current window of k 1's
    let r = 0; // Right pointer for the current window of k 1's
    let m = 0; // Midpoint of the current window of k 1's

    let cnt = 0; // Counter for the number of 1's encountered
    // Find the first `k` 1's in the array
    for (; r < n; ++r) {
        if (nums[r]) {
            ++cnt;
            // Set the left pointer when the first 1 is found
            if (cnt === 1) l = r;
            // Set the midpoint when we reach h 1's
            if (cnt === h) m = r;
            // Break when we have counted k 1's
            if (cnt === k) break;
        }
    }

    // Calculate the initial cost to align the first k 1's
    let cur = h * (1 - h); // Initial move cost
    // If k is even, adjust the cost
    if (!(k & 1)) cur -= h;

    // Calculate the initial cost for the current window
    for (let i = l; i <= r; ++i) {
        if (nums[i]) cur += Math.abs(i - m);
    }

    let res = cur; // Store the result

    // Move to the next position and start sliding the window
    ++r;
    for (; r < n; ++r) {
        if (nums[r]) {
            // Adjust the current cost as we slide the window
            if (k & 1) cur -= m - l; // If k is odd, adjust based on the midpoint
            do ++m; while (!nums[m]); // Move midpoint to the next 1
            if (!(k & 1)) cur -= m - l; // If k is even, adjust again
            do ++l; while (!nums[l]); // Move left pointer to the next 1
            cur += r - m; // Update current cost based on the new right pointer

            // Update the result if the current cost is less
            res = Math.min(cur, res);
            // If no moves are needed, return 0 early
            if (!res) return 0;
        }
    }

    return res; // Return the minimum moves required
}

```