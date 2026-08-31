# Beats 100.00% | Easy Typescript Solution using Sliding Window with Full Explanation

**Author:** chetannada
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-nice-subarray/solutions/5646319/](https://leetcode.com/problems/longest-nice-subarray/solutions/5646319/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$ where n is the number of elements in the input array nums. This is because we are iterating through the array once with two pointers, i and j, and performing constant time operations within the loop.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$ because we are using a constant amount of extra space, regardless of the size of the input array.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function longestNiceSubarray(nums: number[]): number {

    // initialize mask, j and maxWindow as 0
    // mask is used to keep track of the presence of numbers in the current subarray
    // j represents the left boundary of the sliding window
    // maxWindow stores the maximum length of a nice subarray
    let mask: number = 0, j: number = 0, maxWindow: number = 0;

    // run for loop from index 0 to length of nums
    for (let i = 0; i < nums.length; i++) {

        // run while loop until bitwise AND of mask and nums[i] not equal to 0
        // If it is not zero, it means that the current nums[i] is already present in the subarray, and we need to reduce the window by moving the left boundary (j)
        while ((mask & nums[i]) !== 0) {

            // do bitwise AND of mask and (Bitwise NOT of nums[i])
            mask = mask & ~nums[j];
            // move j pointer towords right
            j++;
        }

        // do bitwise OR of mask and nums[i]
        // because we know that the current nums[i] is not present in the subarray
        mask = mask | nums[i];

        // update maxWindow with maximum value between maxWindow and i-j+1
        maxWindow = Math.max(maxWindow, i - j + 1);
    }

    // return maxWindow
    return maxWindow;
};
```