# Runtime 172 ms Beats 100.00% [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-valid-subarrays/solutions/5778620/](https://leetcode.com/problems/number-of-valid-subarrays/solutions/5778620/)

---

# Intuition
For each subarray, I need to make sure the first element is the smallest. Instead of checking every subarray, which would be slow, I thought of using a monotonic stack. This stack helps me efficiently keep track of elements that can form valid subarrays. The idea is to maintain a decreasing order in the stack and use that to count subarrays without having to examine every possibility.


# Approach
I traverse the array and use a stack to store indices of elements in non-decreasing order.


For each element, if it\u2019s smaller than the one on top of the stack, I pop elements because those subarrays would no longer be valid.


I count the valid subarrays that end at each position by adding the current size of the stack.


# Complexity
- Time complexity:
O(n): I go through the array once, and each element is pushed and popped from the stack at most once.


- Space complexity:
O(n): The stack can hold up to n elements in the worst case.


# Code
```csharp []
public class Solution {
    public int ValidSubarrays(int[] nums) {
        Stack<int> stack = new Stack<int>();
        int validCount = 0;

        for (int i = 0; i < nums.Length; i++) {
            // Ensure elements in stack are in non-decreasing order
            while (stack.Count > 0 && nums[stack.Peek()] > nums[i]) {
                stack.Pop();
            }
            // Add the current index to the stack
            stack.Push(i);
            // Number of valid subarrays ending at i is (i - stack.Peek() + 1)
            validCount += stack.Count;
        }

        return validCount;
    }
}

```