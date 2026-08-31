# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/fixed-point/solutions/5532119/](https://leetcode.com/problems/fixed-point/solutions/5532119/)

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
public int fixedPoint(int[] arr) {
    // Initialize the left and right pointers for binary search
    int left = 0;
    int right = arr.length - 1;

    // Perform binary search
    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == mid) {
            // If arr[mid] == mid, we found a fixed point, but we need the smallest index
            // So we continue searching in the left half
            right = mid - 1;
        } else if (arr[mid] < mid) {
            // If arr[mid] < mid, the fixed point must be in the right half
            left = mid + 1;
        } else {
            // If arr[mid] > mid, the fixed point must be in the left half
            right = mid - 1;
        }
    }

    // After binary search, check if left points to a valid fixed point
    if (left < arr.length && arr[left] == left) {
        return left;
    }

    // If no fixed point is found, return -1
    return -1;
}
```
```Javascript []
var fixedPoint = function(arr) {
    // Initialize the left and right pointers for binary search
    let left = 0;
    let right = arr.length - 1;

    // Perform binary search
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] === mid) {
            // If arr[mid] == mid, we found a fixed point, but we need the smallest index
            // So we continue searching in the left half
            right = mid - 1;
        } else if (arr[mid] < mid) {
            // If arr[mid] < mid, the fixed point must be in the right half
            left = mid + 1;
        } else {
            // If arr[mid] > mid, the fixed point must be in the left half
            right = mid - 1;
        }
    }

    // After binary search, check if left points to a valid fixed point
    if (left < arr.length && arr[left] === left) {
        return left;
    }

    // If no fixed point is found, return -1
    return -1;
};
```
```Typescript []
function fixedPoint(arr: number[]): number {
    // Initialize the left and right pointers for binary search
    let left = 0;
    let right = arr.length - 1;

    // Perform binary search
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] === mid) {
            // If arr[mid] == mid, we found a fixed point, but we need the smallest index
            // So we continue searching in the left half
            right = mid - 1;
        } else if (arr[mid] < mid) {
            // If arr[mid] < mid, the fixed point must be in the right half
            left = mid + 1;
        } else {
            // If arr[mid] > mid, the fixed point must be in the left half
            right = mid - 1;
        }
    }

    // After binary search, check if left points to a valid fixed point
    if (left < arr.length && arr[left] === left) {
        return left;
    }

    // If no fixed point is found, return -1
    return -1;
};
```