# Next Greater Element

**Author:** mailtoavinash2907
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-element-ii/solutions/5832362/](https://leetcode.com/problems/next-greater-element-ii/solutions/5832362/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Use stack approach for solving this problem

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```kotlin []
class Solution {
    fun nextGreaterElements(nums: IntArray): IntArray {
        val answer = IntArray(nums.size)
        val stack = Stack<Int>()
        
        stack.push(0)
        for (i in 1 until nums.size) {
            val current = nums[i]
            while (stack.isNotEmpty() && nums[stack.peek()] < current) {
                answer[stack.peek()] = current
                stack.pop()
            }
            stack.push(i)
        }
        
        for (i in nums.indices) {
            val current = nums[i]
            while (stack.isNotEmpty() && nums[stack.peek()] < current) {
                answer[stack.peek()] = current
                stack.pop()
            }
        }
        
        while (stack.isNotEmpty()) {
            answer[stack.peek()] = -1
            stack.pop()
        }
        
        return answer
    }
}
```