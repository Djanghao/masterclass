# simple and easy explained Javascript solution 😍❤️‍🔥

**Author:** shishirRsiam
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-median-of-array-equal-to-k/solutions/5709707/](https://leetcode.com/problems/minimum-operations-to-make-median-of-array-equal-to-k/solutions/5709707/)

---

# if it's help, please up \u2B06 vote! \u2764\uFE0F

###### Let's Connect on LinkedIn: www.linkedin.com/in/shishirrsiam
###### Let's Connect on Facebook: www.fb.com/shishirrsiam

# Complexity
- Time complexity: O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
var minOperationsToMakeMedianK = function(nums, k) {
    // Initialize a variable to count the total operations needed
    let ans = 0;

    // Sort the nums array in ascending order
    nums.sort((a, b) => a - b);

    // Get the length of the nums array
    let n = nums.length;

    // Calculate the index of the median
    let mid = Math.floor(n / 2);

    // Check if the current median is greater than k
    if (nums[mid] > k) {
        // If the median is greater than k, reduce values in the left half
        while (mid >= 0) {
            // Break the loop if the current value is less than or equal to k
            if (nums[mid] <= k) break;
            // Add the absolute difference between k and the current value to ans
            ans += Math.abs(k - nums[mid]);
            // Decrement mid to check the previous element
            mid--;
        }
    } else {
        // If the median is less than or equal to k, increase values in the right half
        while (mid < n) {
            // Break the loop if the current value is greater than or equal to k
            if (nums[mid] >= k) break;
            // Add the absolute difference between k and the current value to ans
            ans += Math.abs(k - nums[mid]);
            // Increment mid to check the next element
            mid++;
        }
    }

    // Return the total number of operations needed to make the median equal to k
    return ans;
};
```