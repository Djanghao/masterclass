# Kotlin step by step - Stack | Simulation

**Author:** MohiFayden
**Votes:** 0
**Link:** [https://leetcode.com/problems/validate-stack-sequences/solutions/5385853/](https://leetcode.com/problems/validate-stack-sequences/solutions/5385853/)

---

# Intuition
Check the function

# Approach
Check the function

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
    fun validateStackSequences(pushed: IntArray, popped: IntArray): Boolean {

        // Intuition:
        // We simulate the stack to see if the pushed and popped sequences are valid.
        // The idea is to use a stack to mimic the push/pop operations.
        // We iterate through the 'pushed' array and simulate the pushing of elements onto the stack.
        // After each push, we check if the top of the stack matches the next element in the 'popped' array.
        // If it matches, we pop from the stack. This continues until we have processed all elements.
        // If the stack is empty at the end, it means the sequences are valid.

        val stack = ArrayDeque<Int>() // Using ArrayDeque as a stack to hold the pushed elements
        var popIndex = 0 // This keeps track of the current position in the popped array

        // Iterate through each element in the pushed array
        for (push in pushed) {
            stack.addLast(push) // Simulate pushing the element onto the stack

            // Check if the top of the stack matches the current element in the popped array
            while (stack.isNotEmpty() && stack.last() == popped[popIndex]) {
                stack.removeLast() // Simulate popping the element from the stack
                popIndex++ // Move to the next element in the popped array
            }
        }

        // If the stack is empty, all pushed elements were matched correctly with the popped elements
        return stack.isEmpty()
    }
}
```