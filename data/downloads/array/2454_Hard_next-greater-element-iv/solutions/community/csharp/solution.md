# C# |  Beats 100.00% | Simple Solution

**Author:** akshaygothwal
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-element-iv/solutions/5535961/](https://leetcode.com/problems/next-greater-element-iv/solutions/5535961/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to find the second greater element for each element in the array nums. For each element, the second greater element is defined as:

The next element that is greater than the current element, and
There is exactly one element in between that is also greater than the current element.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Use Two Stacks:

   - indexStack: Keeps track of indices where the first greater element has not been found yet.
   - secondGreaterStack: Keeps track of indices where the second greater element might be found.

2. Iterate Through the Array:

   - For each element, update result for indices in secondGreaterStack if the current element is greater than the element at the index on top of secondGreaterStack.
   - Transfer indices from indexStack to tempStack where the current element is greater, then move them back to secondGreaterStack.

3. Update the Stacks:

   - Push the current index onto indexStack.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
   - O(n): Each element is pushed and popped from each stack at most once. Since there are three stacks (indexStack, secondGreaterStack, and tempStack), each operation (push or pop) takes constant time, leading to an overall linear time complexity.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
   - O(n): The space complexity is dominated by the size of the stacks used. Since the maximum number of indices that can be stored in any stack is proportional to the length of the array, the space complexity is linear.

# Code
```
public class Solution {
    public int[] SecondGreaterElement(int[] nums) {
        int n = nums.Length;
        int[] result = new int[n];
        Array.Fill(result, -1);

        Stack<int> indexStack = new Stack<int>();
        Stack<int> secondGreaterStack = new Stack<int>();
        Stack<int> tempStack = new Stack<int>();

        for (int i = 0; i < n; i++) {
            // While secondGreaterStack is not empty and nums[i] is greater than the element at the top of secondGreaterStack
            while (secondGreaterStack.Count > 0 && 
                    nums[secondGreaterStack.Peek()] < nums[i]) {
                result[secondGreaterStack.Pop()] = nums[i];
            }

            // Move elements from indexStack to tempStack where nums[i] is greater
            while (indexStack.Count > 0 && nums[indexStack.Peek()] < nums[i]) {
                tempStack.Push(indexStack.Pop());
            }

            // Move elements from tempStack back to secondGreaterStack
            while (tempStack.Count > 0) {
                secondGreaterStack.Push(tempStack.Pop());
            }

            // Push the current index onto indexStack
            indexStack.Push(i);
        }

        return result;       
    }
}
```