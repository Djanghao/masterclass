# C# Greedy Algorithm Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/solutions/5501608/](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/solutions/5501608/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->To solve the problem of finding the smallest possible sum of the values of each non-leaf node among all possible binary trees, we can use a greedy algorithm approach. The idea is to pair the smallest elements first to minimize the overall sum of products.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Stack Initialization: We initialize a stack with 'int.MaxValue' to handle edge cases.
//  Traversing the Array: We traverse through each element in the array.
//  Pairing the Smallest Elements: While the top of the stack is less than or equal to the current 
//  element, we pop the stack and add the product of the popped element and the minimum of the new top of 
//  the stack and the current element to the sum.
//  Push Current Element: We push the current element onto the stack.
//  Final Pairing: After the loop, we pair the remaining elements in the stack and add their product to 
//  the sum.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n).
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(n).
___

# Code
```
public class Solution {
    public int MctFromLeafValues(int[] arr) {
        int sum = 0;
        Stack<int> stack = new Stack<int>();
        stack.Push(int.MaxValue);

        foreach (int value in arr) {
            while (stack.Peek() <= value) {
                int mid = stack.Pop();
                sum += mid * Math.Min(stack.Peek(), value);
            }
            stack.Push(value);
        }

        while (stack.Count > 2) {
            sum += stack.Pop() * stack.Peek();
        }

        return sum;
    }
}
```