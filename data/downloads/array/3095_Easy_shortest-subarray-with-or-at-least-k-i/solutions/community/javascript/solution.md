# Simple brute force solution with explanation

**Author:** alexey_leetcode
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/4960016/](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/4960016/)

---

# Approach
We need to iterate through all available subarrays in a given array. This involves using two nested loops. For each subarray, we calculate the bitwise OR result. If the result is greater than or equal to a given value, k, we can determine the minimum value. If the length of the current subarray is less than the current minimum, we update the minimum value accordingly.

# Complexity
- Time complexity: $$O(n^2)$$
We iterate through all available subarrays in the array, resulting in a time complexity of O(n^2), where n represents the length of the initial array.

- Space complexity: $$O(1)$$
We utilize a constant amount of space to store the result for each current subarray.

# Code
```javascript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function(nums, k) {
    // set min to maximum number
    let min = Infinity;

    for (let i = 0; i < nums.length; i++) {
        // initialize res variable for current subarray
        let res = nums[i];
        for (let j = i; j < nums.length; j++) {
            // calculate bitwise result
            res |= nums[j];

            // if res is more or equall to k, calculate the size of the subarray
            if (res >= k && min > j - i + 1) {
                min = j - i + 1;
            }
        }
    }

    // if we didn't find the answer, return -1
    return min === Infinity ? -1 : min;
};
```
```Go []
func minimumSubarrayLength(nums []int, k int) int {
    // set min to maximum number
    min := math.MaxInt;

    for i := 0; i < len(nums); i++ {
        // initialize res variable for current subarray
        res := 0;
        for j := i; j < len(nums); j++ {
            // calculate bitwise result
            res |= nums[j];

            // if res is more or equall to k, calculate the size of the subarray
            if (res >= k && min > j - i + 1) {
                min = j - i + 1;
            }
        }
    }

    // if we didn't find the answer, return -1
    if min == math.MaxInt {
        return -1
    }

    return min;
}
```


