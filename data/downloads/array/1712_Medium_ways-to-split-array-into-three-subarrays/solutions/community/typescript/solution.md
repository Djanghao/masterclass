# Binary search

**Author:** heiseshandian
**Votes:** 0
**Link:** [https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/solutions/4978796/](https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/solutions/4978796/)

---

# 1712. Ways to Split Array Into Three Subarrays

## Intuition

The goal of this problem is to find the number of ways we can split a given array into three non-empty contiguous subarrays such that the sum of elements in the first subarray is less than or equal to the sum in the second, and the sum in the second is less than or equal to the sum in the third. The key intuition behind solving this problem is using prefix sums to efficiently calculate the sum of any subarray and binary search to find the valid split points for the second and third subarrays.

## Approach

1. **Prefix Sum Array:** First, we compute a prefix sum array of the input array. This allows us to quickly calculate the sum of any subarray using a simple subtraction operation.
2. **Iterate Over First Subarray's End Point:** We iterate through the array to find all possible endpoints of the first subarray. We stop when adding more elements to the first subarray would make its sum greater than one-third of the total sum, ensuring the possibility of dividing the rest into two subarrays meeting the problem's conditions.
3. **Binary Search for Second Subarray's Bounds:** For each endpoint of the first subarray, we use binary search twice to find the lower and upper bounds for the endpoint of the second subarray. These bounds ensure that the sum of the second subarray is greater than or equal to the first and that the third subarray's sum is greater than or equal to the second.
4. **Counting Valid Splits:** The difference between the upper and lower bounds found gives the number of valid ways to split the array for a particular first subarray endpoint. We add this difference to a running total of valid splits, taking care to modulo the result by \\(10^9 + 7\\) to handle large numbers.

## Complexity

- **Time Complexity:** \\(O(n \\log n)\\). The main time complexity comes from iterating over all possible endpoints of the first subarray, which is \\(O(n)\\), and performing two binary searches for each endpoint, each \\(O(\\log n)\\), making the overall time complexity \\(O(n \\log n)\\).
- **Space Complexity:** \\(O(n)\\). The additional space is mainly used by the prefix sum array, which has the same length as the input array.

# Code
```ts
function waysToSplit(nums: number[]): number {
    const modulo = Math.pow(10, 9) + 7;

    const prefix = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefix[i] = prefix[i - 1] + nums[i];
    }

    const sum = prefix[prefix.length - 1];
    const firstEnd = Math.ceil(sum / 3);

    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (prefix[i] > firstEnd) {
            break;
        }

        let left = i + 1;
        let right = nums.length - 2;
        let downBound: number | null = null;
        while (left <= right) {
            const mid = left + ((right - left) >> 1);
            if (prefix[mid] - prefix[i] < prefix[i]) {
                left = mid + 1;
            } else if (sum - prefix[mid] < prefix[mid] - prefix[i]) {
                right = mid - 1;
            } else {
                downBound = mid;
                right = mid - 1;
            }
        }
        if (downBound === null) {
            continue;
        }

        let upperBound: number | null = null;
        left = i + 1;
        right = nums.length - 2;
        while (left <= right) {
            const mid = left + ((right - left) >> 1);
            if (prefix[mid] - prefix[i] < prefix[i]) {
                left = mid + 1;
            } else if (sum - prefix[mid] < prefix[mid] - prefix[i]) {
                right = mid - 1;
            } else {
                upperBound = mid;
                left = mid + 1;
            }
        }

        count = (count + upperBound! - downBound + 1) % modulo;
    }

    return count;
}

```