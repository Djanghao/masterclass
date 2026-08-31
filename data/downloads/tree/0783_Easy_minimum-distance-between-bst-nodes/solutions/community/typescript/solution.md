# C# and Typescript solution with approach. ❇️✅

**Author:** ArafatSabbir
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-distance-between-bst-nodes/solutions/3196220/](https://leetcode.com/problems/minimum-distance-between-bst-nodes/solutions/3196220/)

---

# Approach
1. Find the minimum difference between two nodes in a BST
2. The minimum difference can be found by traversing the BST in-order
3. The in-order traversal of a BST will give us the nodes in ascending order
4. The minimum difference will be the difference between the current node and the previous node
5. The previous node will be stored in a variable
6. The minimum difference will be the minimum of the current minimum difference and the difference between the current node and the previous node
7. The previous node will be updated to the current node
8. The minimum difference will be returned

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# C# Code
```
public class Solution {
    public int MinDiffInBST(TreeNode root)
    {
        int min = int.MaxValue;
        int prev = int.MinValue;
        MinDiffInBST(root, ref min, ref prev);
        return min;
    }

    private void MinDiffInBST(TreeNode root, ref int min, ref int prev)
    {
        if (root == null)
            return;

        MinDiffInBST(root.left, ref min, ref prev);
        if (prev != int.MinValue)
            min = Math.Min(min, root.val - prev);
        prev = root.val;
        MinDiffInBST(root.right, ref min, ref prev);
    }
}
```
# TypeScript Code
```
function minDiffInBST(root: TreeNode | null): number {
    let minDiff = Number.MAX_SAFE_INTEGER;
    let prev = Number.MIN_SAFE_INTEGER;
    const traverse = (node: TreeNode | null) => {
        if (node === null) {
            return;
        }
        traverse(node.left);
        minDiff = Math.min(minDiff, node.val - prev);
        prev = node.val;
        traverse(node.right);
    }
    traverse(root);
    return minDiff;
};
```
# Like \u2B06\uFE0F | Share \uD83C\uDFAF | Favourite \u2B50
