# Beats 100%

**Author:** Adarsh_Kuch
**Votes:** 1
**Link:** [https://leetcode.com/problems/magnetic-force-between-two-balls/solutions/5341955/](https://leetcode.com/problems/magnetic-force-between-two-balls/solutions/5341955/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to maximize the minimum magnetic force between any two balls. 

1. Sort the Positions: Ensure the positions array is sorted.
2. Binary Search: Use binary search to find the maximum minimum distance.
3. Helper Function: Implement a helper function to check if it's possible to place m balls with at least a given minimum distance.

# Approach
<!-- Describe your approach to solving the problem. -->
1. <b>Sort the Positions</b>: We first sort the positions to make sure the baskets are in increasing order.

2. <b>Binary Search </b>: We initialize left to 1 (the smallest possible distance) and right to the distance between the farthest baskets. We perform binary search to find the maximum minimum distance where we can place all m balls.

3. <b>canPlaceBalls Function</b>: This helper function checks if we can place all m balls such that the distance between any two consecutive balls is at least minDist. If it\u2019s possible, we try a larger distance; if not, we try a smaller distance.

4. <b>Updating the Result</b>: During the binary search, if we find that we can place the balls with the current mid distance, we update the result and try for a larger distance by moving left to mid + 1. If we cannot place the balls, we move right to mid - 1.



# Complexity
- Time complexity:$$O(nlogn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function maxDistance(position: number[], m: number): number {
      // Sort the positions array
    position.sort((a, b) => a - b);

    // Helper function to check if we can place m balls with at least minDist apart
    const canPlaceBalls = (minDist: number): boolean => {
        let count = 1; // Place the first ball
        let lastPosition = position[0];

        for (let i = 1; i < position.length; i++) {
            if (position[i] - lastPosition >= minDist) {
                count++;
                lastPosition = position[i];
                if (count === m) {
                    return true;
                }
            }
        }

        return false;
    };

    // Binary search for the maximum minimum distance
    let left = 1; // Minimum possible distance
    let right = position[position.length - 1] - position[0]; // Maximum possible distance
    let result = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (canPlaceBalls(mid)) {
            result = mid; // Update result to the current mid
            left = mid + 1; // Try for a larger minimum distance
        } else {
            right = mid - 1; // Try for a smaller minimum distance
        }
    }

    return result;
};
```