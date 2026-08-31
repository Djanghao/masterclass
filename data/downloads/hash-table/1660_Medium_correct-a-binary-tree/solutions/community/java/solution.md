# [Java] HashSet. One Pass. Short.

**Author:** o_inari
**Votes:** 67
**Link:** [https://leetcode.com/problems/correct-a-binary-tree/solutions/940769/](https://leetcode.com/problems/correct-a-binary-tree/solutions/940769/)

---

Use a hashset to record visited node values. If we find a node's right pointer pointing to a node we have visited, delete it and all of its children by setting it to null. Do so recursively on the right branch before the left branch.

```
class Solution {
    Set<Integer> visited = new HashSet<>();
    
    public TreeNode correctBinaryTree(TreeNode root) {
        if (root == null) return null;
        if (root.right != null && visited.contains(root.right.val)) return null;
        visited.add(root.val);
        root.right = correctBinaryTree(root.right);
        root.left = correctBinaryTree(root.left);
        return root;
    }
}
```

Time Complexity: O(N)
Space Complexity: O(N)