# Javascript, sliding window, really simple.

**Author:** k3000001
**Votes:** 1
**Link:** [https://leetcode.com/problems/continuous-subarrays/solutions/4194456/](https://leetcode.com/problems/continuous-subarrays/solutions/4194456/)

---

# Intuition
This is a simplier version of [this](https://leetcode.com/problems/continuous-subarrays/solutions/3718113/java-javascript-python3-sliding-window-use-hashmap-o-n-time-and-o-1-space/) javascript solution.

We need to know that the difference in any elements of the subarray cannot be greater than 2.

# Approach
<!-- Describe your approach to solving the problem. -->
With sliding window, I usually ask myself: when is the window invalid and how to make it valid again?

Window is invalid when the difference between any element in the sub array is greater than 2. We know this by extracting the max value and min value of the map.

While this window is invalid, shrink the window.




# Code
```typescript

function continuousSubarrays(nums: number[]): number {
    let sum = 0
    let start = 0
    let map = new Map()

    for(let end = 0; end < nums.length; end++) {
        map.set(nums[end], (map.get(nums[end]) || 0) + 1) // optimistically grow array

        // window is invalid, shrink the array from left to make valid
        while(Math.max(...map.keys()) - Math.min(...map.keys()) > 2) {
            let count = map.get(nums[start]) - 1
            if (count === 0) {
                map.delete(nums[start])
            } else {
                map.set(nums[start], count)
            }
            start++
        }

        // count the valid subarrays
        sum += (end - start + 1)
    }

    return sum
};
```