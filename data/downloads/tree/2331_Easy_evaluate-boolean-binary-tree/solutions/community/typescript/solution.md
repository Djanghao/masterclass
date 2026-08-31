# TypeScript: Super Easy Switch statement

**Author:** ianrose2k
**Votes:** 1
**Link:** [https://leetcode.com/problems/evaluate-boolean-binary-tree/solutions/5162802/](https://leetcode.com/problems/evaluate-boolean-binary-tree/solutions/5162802/)

---

# Please Upvote if this helps \uD83D\uDE01

# Approach
Just recurseively call this function on each node
- If the current node is 0 or 1, return !!node.val
- If the current node is 2, return evaluateTree(left) OR evaluateTree(right)
- If the current node is 3, return evaluateTree(left) AND evaluateTree(right)

# Complexity
Time complexity: O(N)

Space complexity: O(1)

# TypeScript
``` TypeScript
function evaluateTree(root: TreeNode | null): boolean {
    if (root) {
        switch (root.val) {
            case 0:
            case 1:
                return !!root.val;
            case 2:
                return evaluateTree(root.left) || evaluateTree(root.right);
            case 3:
                return evaluateTree(root.left) && evaluateTree(root.right);
            default:
        }
    }
    return false;
};
```