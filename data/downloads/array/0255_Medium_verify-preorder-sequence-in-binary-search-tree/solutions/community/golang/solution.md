# Golang monotonic stack

**Author:** kejeon
**Votes:** 1
**Link:** [https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/solutions/3819082/](https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/solutions/3819082/)

---

# Intuition
Iterating the given array should be same as visit a BST in preorder sequence.

That's root, left, right

When we see current number is larger than it's previous number, it has to be the starting a right subtree. Once we start the right subtree, nothing after that should be less than the root. If it does, that violates the preorder rule, we should return false

# Approach
We keep a decreasing stack, to store all root and left subtrees.

If we have a increasing number, we know we are dealing with a right subtree.

We will pop all elements in stack that less than current number, to keep its decreasing property, the last popped should be the root of the right subtree.

And any number after that should not be less than the popped root value(minLimit)

# Complexity
- Time complexity:
$$O(n)$$ because we push & pop each element once
- Space complexity:
$$O(n)$$ because we keep a stack that might save entire array at worst case.

# Code
```
func verifyPreorder(preorder []int) bool {
    stack := []int{}
    minLimit := math.MinInt

    for i := 0; i < len(preorder); i++ {
        // minLimit is the value of most recent popped root
        if preorder[i] < minLimit{
            return false
        }
        // pop all elements less than current number, and update minLimit. we are starting a right subtree
        for len(stack) > 0 && preorder[i] > stack[len(stack) - 1] {   
            minLimit = stack[len(stack) - 1]
            stack = stack[:len(stack) - 1]
        }
        // push current element to the stack
        stack = append(stack, preorder[i])
    }
    return true
}
```