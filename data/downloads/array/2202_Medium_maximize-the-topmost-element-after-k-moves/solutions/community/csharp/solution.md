# C# solution explained

**Author:** Obose
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/solutions/5157972/](https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/solutions/5157972/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
When I first thought about solving this problem, I realized that the key was to understand how the operations of removing elements and pushing one element back could affect the maximum value at the top of the array. My initial thought was to consider the maximum value among the first k-1 elements, as these are the elements that could be removed. Additionally, if k is less than the length of the array, I considered the possibility of pushing one element back after removing k elements, which would affect the maximum value at the top.

# Approach
<!-- Describe your approach to solving the problem. -->
I started by checking if k is 0 or if the array has only one element, as these are special cases that can be handled directly. For k equal to 0, there are no moves, so the topmost element is returned. For an array with only one element, if k is odd, the element is removed and cannot be retrieved, so -1 is returned; otherwise, the element itself is returned.

For the general case, I initialized a variable maxInFirstKMinus1 to keep track of the maximum value among the first k-1 elements. I then iterated through the first k-1 elements (or fewer if k-1 is greater than the array length) to find the maximum value. If k is less than the array length, I also considered the possibility of pushing one element back after removing k elements, which would affect the maximum value at the top.

Finally, I returned the maximum value possible at the top, which is either the maximum value among the first k-1 elements or the maximum value among the first k-1 elements and the element at index k.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this solution is O(n), where n is the length of the array. This is because the algorithm iterates through the array once to find the maximum value among the first k-1 elements.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(1), as the algorithm uses a constant amount of space to store the maximum value and the length of the array.

# Code
```
using System;

public class Solution {
    public int MaximumTop(int[] nums, int k) {
        int n = nums.Length;

        if (k == 0) {
            // No moves, so return the topmost element
            return nums[0];
        }

        if (n == 1) {
            // Only one element and if k is odd, we remove it and can't get it back
            return (k % 2 == 1) ? -1 : nums[0];
        }

        // Initialize the maximum value for the maximum of first k-1 elements
        int maxInFirstKMinus1 = int.MinValue;

        // Handle the case if k is within the range of array length
        // Remove up to the first k-1 elements
        for (int i = 0; i < Math.Min(k-1, n); i++) {
            maxInFirstKMinus1 = Math.Max(maxInFirstKMinus1, nums[i]);
        }

        // Consider the case when k elements can be removed and one element is pushed back
        if (k < n) {
            maxInFirstKMinus1 = Math.Max(maxInFirstKMinus1, nums[k]);
        }

        // Return the maximum value possible at the top
        return maxInFirstKMinus1;
    }
}

```