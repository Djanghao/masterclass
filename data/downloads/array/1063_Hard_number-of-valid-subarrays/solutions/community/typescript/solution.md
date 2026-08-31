# Monotonic Stack Solution for JavaScript/TypeScript

**Author:** pratim_sadhu
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-valid-subarrays/solutions/4605612/](https://leetcode.com/problems/number-of-valid-subarrays/solutions/4605612/)

---

# Intuition
The key idea is to find, for each element in the array, how many subarrays it can be the minimum element of. By maintaining a stack that keeps track of elements in a monotonically increasing order, we can efficiently calculate this for each element.

# Approach
- We use a stack to keep track of elements in a monotonically increasing order. For each element in the array, we pop from the stack until the top element of the stack is less than or equal to the current element. This ensures that the stack always remains monotonically increasing.
- Each time we push an element onto the stack, the number of valid subarrays ending with this element is equal to the length of the stack. This is because the stack contains all elements that are greater than or equal to the current element, and any subarray formed by these elements with the current element as the minimum is valid.
- We accumulate this count for each element to get the total number of valid subarrays.

# Complexity
- **Time complexity:** O(N), where N is the length of the array. Each element is pushed and popped from the stack exactly once.

- **Space complexity:** O(N) in the worst case, when the array is monotonically increasing. The stack may store all elements of the array at some point.

# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var validSubarrays = function(nums) {
    // Monotonic Increasing stack
    const stack =[]
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        while (stack.length && stack.at(-1) > nums[i]) {
            stack.pop()
        }
        stack.push(nums[i])
        count += stack.length
    }

    return count
};
```