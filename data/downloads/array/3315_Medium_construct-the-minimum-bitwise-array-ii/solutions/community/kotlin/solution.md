# 2 lines

**Author:** ivangnilomedov
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-the-minimum-bitwise-array-ii/solutions/5904663/](https://leetcode.com/problems/construct-the-minimum-bitwise-array-ii/solutions/5904663/)

---

# Approach
The solution constructs an array `ans` where for each index `i`, `ans[i] OR (ans[i] + 1) == nums[i]`, while minimizing `ans[i]`. The approach is based on the following observations:

1. For any number x, `x OR (x + 1)` will set all the trailing zeros in x to 1.
2. To minimize `ans[i]`, we need to find the largest number smaller than `nums[i]` that, when increased by 1, equals `nums[i]`.
3. This can be achieved by clearing the least significant set bit of `nums[i]`.

The formula `nums[i] - (((nums[i] + 1) xor nums[i]) + 1 shr 2)` does this efficiently:
- `(nums[i] + 1) xor nums[i]` isolates the least significant set bit and the trailing zeros.
- Adding 1 and right-shifting by 2 adjusts this value.
- Subtracting from `nums[i]` clears the least significant set bit.

Special case: When `nums[i] = 2`, no smaller positive integer satisfies the condition, so we return -1.

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```kotlin []
class Solution { fun minBitwiseArray(nums: List<Int>): IntArray =
    IntArray(nums.size) { i -> if (nums[i] == 2) -1 else nums[i] - (((nums[i] + 1) xor nums[i]) + 1 shr 2) } }
```