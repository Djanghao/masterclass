# Largest Values From Labels || JAVASCRIPT || Solution by Bharadwaj

**Author:** Manu-Bharadwaj-BN
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-values-from-labels/solutions/4434787/](https://leetcode.com/problems/largest-values-from-labels/solutions/4434787/)

---

# Approach
Sorting and Greedy

# Complexity
- Time complexity:
O(n log n)

- Space complexity:
O(n)

# Code
```
var largestValsFromLabels = function(values, labels, numWanted, useLimit) {
    // Initialize variables for storing values, labels, and result sum
    let store = [];
    let set = {};
    let sum = 0;

    // Combine values and labels into a 2D array and sort it by values in descending order
    for (let i = 0; i < labels.length; i++) {
        store[i] = [values[i], labels[i]];
    }
    store.sort((a, b) => b[0] - a[0]);

    // Iterate through the sorted array and accumulate the sum
    for (let num of store) {
        // Check if the limit for the label is reached
        if (!numWanted) return sum;

        // Update label count in the set
        set[num[1]] = (set[num[1]] || 0) + 1;

        // Skip if the label limit is exceeded
        if (set[num[1]] > useLimit) continue;

        // Accumulate the value and decrement numWanted
        sum += num[0];
        numWanted -= 1;
    }

    // Return the final sum
    return sum;
};
```