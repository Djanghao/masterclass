# Typescript greedy approach, beats 100%

**Author:** user8363Lt
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/solutions/4889687/](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/solutions/4889687/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Greedy approach, use a stack to construct the tree

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function mctFromLeafValues(arr: number[]): number {
    // Initialize a stack with Infinity as the base value.
    const stack: number[] = [Infinity];
    // Initialize the result variable to store the minimum cost.
    let result = 0;

    // Iterate through each leaf value in the array.
    for (const leaf of arr) {
        // While the top of the stack is less than or equal to the current leaf value,
        // calculate the cost of merging the top element with the minimum of the current leaf value and the previous top element.
        while (stack[stack.length - 1] <= leaf) {
            const mid = stack.pop()!;
            result += mid * Math.min(stack[stack.length - 1], leaf);
        }
        // Push the current leaf value to the stack.
        stack.push(leaf);
    }

    // After processing all the leaf values, merge the remaining elements in the stack.
    while (stack.length > 2) {
        result += stack.pop()! * stack[stack.length - 1];
    }

    // Return the minimum cost of the binary tree.
    return result;
};
```