# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/missing-number-in-arithmetic-progression/solutions/5636978/](https://leetcode.com/problems/missing-number-in-arithmetic-progression/solutions/5636978/)

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
```Java []
public int missingNumber(int[] arr) {
    int n = arr.length;
    if (n == 1) return arr[0];
    int totalDiff = arr[n - 1] - arr[0];
    int expectedDiff = totalDiff / n;

    for (int i = 0; i < n - 1; i++) {
        int currentDiff = arr[i + 1] - arr[i];
        if (currentDiff != expectedDiff) {
            return arr[i] + expectedDiff;
        }
    }

    if (expectedDiff == 0) {
        return arr[0];
    }

    // If no discrepancy was found, return -1 or some other error code
    return -1;
}
```
```Javascript []
var missingNumber = function(arr) {
    let n = arr.length;
    
    if (n === 1) return arr[0]; // If there's only one element, return it

    // Calculate the common difference as the difference between the first two distinct elements
    let diff = (arr[n - 1] - arr[0]) / n;

    for (let i = 0; i < n - 1; i++) {
        let currentDiff = arr[i + 1] - arr[i];
        if (currentDiff !== diff) {
            return arr[i] + diff;
        }
    }

    // Handle cases where all elements are the same, e.g., [0, 0, 0, 0, 0]
    if (diff === 0) {
        return arr[0];
    }

    // In case the input is malformed, return -1
    return -1;
};
```
```Typescript []
function missingNumber(arr: number[]): number {
    let n = arr.length;
    
    if (n === 1) return arr[0]; // If there's only one element, return it

    // Calculate the common difference as the difference between the first and last elements divided by the length of the array
    let diff = (arr[n - 1] - arr[0]) / n;

    for (let i = 0; i < n - 1; i++) {
        let currentDiff = arr[i + 1] - arr[i];
        if (currentDiff !== diff) {
            return arr[i] + diff;
        }
    }

    // Handle cases where all elements are the same, e.g., [0, 0, 0, 0, 0]
    if (diff === 0) {
        return arr[0];
    }

    // In case the input is malformed, return -1
    return -1;
};
```