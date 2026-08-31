# Easy to understand algorithm using binary search

**Author:** user3113m
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-in-mountain-array/solutions/5213710/](https://leetcode.com/problems/find-in-mountain-array/solutions/5213710/)

---

# Intuition
- This is a binary search problem since after finding the peak index, we will be able to run binary search on the left and right half separately.

# Approach
- First find the peak index of the mountain array.
- Then we can tell everything to the left of peak index are in strictly increasing order and everything to the right are in strictly decreasing order.
- Now run binary search on left half.
- If min index is not found there, run binary search on right half.
    - Note that for the right half, we need to reverse the binary search logic since, it will be in decreasing order.
- If min index is found on the right half, we have the answer otherwise `-1`.

# Complexity
- Time complexity:
    - Binary search time complexity is logarithmic since we half the array after every iteration. Therefore, time complexity is $$O(logn)$$ where n is the length of `mountainArr`.

- Space complexity:
    - Only store intermediate variables like `low`, `high`, `mid` and so on and **does not** depend of the length of `mountainArr`.

# Code
```
/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class MountainArray {
 *      get(index: number): number {}
 *
 *      length(): number {}
 * }
 */

function findInMountainArray(target: number, mountainArr: MountainArray) {
	const peakIdx = findPeakIndex(mountainArr);
    
    // Since we have a peakIdx, now we can do binary search on left and right half
    // Do binary search on left which is strictly increasing order
    let minIdx = runBinarySearch(mountainArr, 0, peakIdx, target, false);

    // If minIdx wasn't found, only then continue to right half
    if (minIdx === - 1) {
        // right half is descending so send true bool
        minIdx = runBinarySearch(mountainArr, peakIdx, mountainArr.length() - 1, target, true);
    }

    return minIdx;
};

function runBinarySearch(arr: MountainArray, low: number, high: number, target: number, isDescending: boolean) {
    while (high >= low) {
        const mid = Math.floor((high + low)/2);
        const midVal = arr.get(mid);
        if (midVal === target) return mid;
        else if (midVal > target) {
            if (isDescending) low = mid + 1;
            else high = mid - 1;
        }
        else {
            if (isDescending) high = mid - 1;
            else low = mid + 1;
        }
    }
    return -1;
}

function findPeakIndex(arr: MountainArray) {
    let low = 0;
    let high = arr.length() - 1;

    while (high > low) {
        const mid = Math.floor((high + low)/2);
        if (arr.get(mid) < arr.get(mid + 1)) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
}
```