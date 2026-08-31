# Beats 93.02% in Python3 (DP + binary search)

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/solutions/5985798/](https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/solutions/5985798/)

---

# Approach
The approach of this solution is to use dynamic programming and binary search.

1. Initialize 2 arrays, increasing_count and decreasing_count, to keep track of the length of the longest increasing and decreasing subsequences ending at each index.

2. Use a dynamic programming approach to find the longest increasing subsequence ending at each index. 
- It uses a binary search to find the correct position to insert the current element in the dp_increasing array, which stores the longest increasing subsequence seen so far. 
- The length of the longest increasing subsequence ending at each index is stored in the increasing_count array.

3. Use a similar approach to find the longest decreasing subsequence ending at each index. 
- It uses a binary search to find the correct position to insert the current element in the dp_decreasing array, which stores the longest decreasing subsequence seen so far. 
- The length of the longest decreasing subsequence ending at each index is stored in the decreasing_count array.

4. Iterate through the increasing_count and decreasing_count arrays to find the minimum number of elements that need to be removed to make the array a mountain array. 
- It checks if the current index has both an increasing and decreasing subsequence of length greater than 1. 
- If so, it calculates the minimum number of removals required to make the array a mountain array by taking the maximum of the two lengths minus one.

5. Return the minimum number of removals required to make the array a mountain array.

# Complexity
- Time complexity:
$$O(n log n)$$, where n is the length of the input array, due to the use of binary search.

- Space complexity:
$$O(n)$$, as we need to store the increasing_count and decreasing_count arrays.

# Code
```python3 []
class Solution:
    def minimumMountainRemovals(self, nums: List[int]) -> int:
        nums_len = len(nums)
        increasing_count = [0] * nums_len
        decreasing_count = [0] * nums_len

        # Find the longest increasing subsequence for each index
        dp_increasing = []
        for i in range(nums_len):
            idx = bisect_left(dp_increasing, nums[i])
            if idx == len(dp_increasing):
                dp_increasing.append(nums[i])
            else:
                dp_increasing[idx] = nums[i]
            increasing_count[i] = len(dp_increasing)

        # Find the longest decreasing subsequence for each index
        dp_decreasing = []
        for i in range(nums_len - 1, -1, -1):
            idx = bisect_left(dp_decreasing, nums[i])
            if idx == len(dp_decreasing):
                dp_decreasing.append(nums[i])
            else:
                dp_decreasing[idx] = nums[i]
            decreasing_count[i] = len(dp_decreasing)

        min_removal = float('inf')
        # Find the minimum removals by taking the maximum of the two length minus one
        for i in range(nums_len):
            if increasing_count[i] > 1 and decreasing_count[i] > 1:
                min_removal = min(min_removal, nums_len - increasing_count[i] - decreasing_count[i] + 1)

        return min_removal
```
``` javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function(nums) {
    const numsLen = nums.length;
    const increasingCount = new Array(numsLen).fill(0);
    const decreasingCount = new Array(numsLen).fill(0);

    // Find the longest increasing subsequence for each index
    const dpIncreasing = [];
    for (let i = 0; i < numsLen; i++) {
        const idx = binarySearch(dpIncreasing, nums[i]);
        if (idx === dpIncreasing.length) {
            dpIncreasing.push(nums[i]);
        } else {
            dpIncreasing[idx] = nums[i];
        }
        increasingCount[i] = dpIncreasing.length;
    }

    // Find the longest decreasing subsequence for each index
    const dpDecreasing = [];
    for (let i = numsLen - 1; i >= 0; i--) {
        const idx = binarySearch(dpDecreasing, nums[i]);
        if (idx === dpDecreasing.length) {
            dpDecreasing.push(nums[i]);
        } else {
            dpDecreasing[idx] = nums[i];
        }
        decreasingCount[i] = dpDecreasing.length;
    }

    let minRemoval = Infinity;
    // Find the minimum removals by taking the maximum of the two length minus one
    for (let i = 0; i < numsLen; i++) {
        if (increasingCount[i] > 1 && decreasingCount[i] > 1) {
            minRemoval = Math.min(minRemoval, numsLen - increasingCount[i] - decreasingCount[i] + 1);
        }
    }

    return minRemoval;
};

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}
```
``` php []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function minimumMountainRemovals($nums) {
        $numsLen = count($nums);
        $increasingCount = array_fill(0, $numsLen, 0);
        $decreasingCount = array_fill(0, $numsLen, 0);

        // Find the longest increasing subsequence for each index
        $dpIncreasing = [];
        for ($i = 0; $i < $numsLen; $i++) {
            $idx = $this->binarySearch($dpIncreasing, $nums[$i]);
            if ($idx === count($dpIncreasing)) {
                $dpIncreasing[] = $nums[$i];
            } else {
                $dpIncreasing[$idx] = $nums[$i];
            }
            $increasingCount[$i] = count($dpIncreasing);
        }

        // Find the longest decreasing subsequence for each index
        $dpDecreasing = [];
        for ($i = $numsLen - 1; $i >= 0; $i--) {
            $idx = $this->binarySearch($dpDecreasing, $nums[$i]);
            if ($idx === count($dpDecreasing)) {
                $dpDecreasing[] = $nums[$i];
            } else {
                $dpDecreasing[$idx] = $nums[$i];
            }
            $decreasingCount[$i] = count($dpDecreasing);
        }

        $minRemoval = INF;
        // Find the minimum removals by taking the maximum of the two length minus one
        for ($i = 0; $i < $numsLen; $i++) {
            if ($increasingCount[$i] > 1 && $decreasingCount[$i] > 1) {
                $minRemoval = min($minRemoval, $numsLen - $increasingCount[$i] - $decreasingCount[$i] + 1);
            }
        }

        return $minRemoval;
    }

    function binarySearch($arr, $target) {
        $left = 0;
        $right = count($arr);
        while ($left < $right) {
            $mid = floor(($left + $right) / 2);
            if ($arr[$mid] < $target) {
                $left = $mid + 1;
            } else {
                $right = $mid;
            }
        }
        return $left;
    }
}
```