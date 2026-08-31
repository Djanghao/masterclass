# Beat 100% space and 100% time

**Author:** agafonovslava
**Votes:** 0
**Link:** [https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/solutions/5763081/](https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/solutions/5763081/)

---

# Intuition
Explanation of Optimizations:
Memory Optimization: We reuse the input array preorder to simulate the stack. Instead of using a separate stack, we use an integer pointer i that represents the top of the simulated stack.
Faster Execution: By avoiding the creation of a new stack and dynamically updating minValue and the pointer in place, we reduce the overhead of memory allocation and improve performance.
Time and Space Complexity:

# Approach
This version should provide improved performance, especially in scenarios where the input size is large.

# Complexity
- Time complexity: O(n), as we still iterate through the array once.
- Space complexity: O(1), since no additional data structures are used beyond the input array.

# Code
```csharp []
public class Solution {
    public bool VerifyPreorder(int[] preorder) {
        int minValue = int.MinValue; // Initialize minValue to the smallest possible value.
        int i = -1; // This will act as a pointer to simulate the stack behavior.

        foreach (int value in preorder) {
            // If the current value is less than minValue, it violates the BST property.
            if (value < minValue) {
                return false;
            }

            // Update minValue when we are moving to the right subtree.
            while (i >= 0 && value > preorder[i]) {
                minValue = preorder[i--];
            }

            // Simulate pushing the value to the stack by incrementing the pointer.
            preorder[++i] = value;
        }

        return true;
    }
}

```