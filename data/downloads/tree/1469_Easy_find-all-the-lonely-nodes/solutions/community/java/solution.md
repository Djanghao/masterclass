# [JAVA] Simple recursive solution

**Author:** yurokusa
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-all-the-lonely-nodes/solutions/1056780/](https://leetcode.com/problems/find-all-the-lonely-nodes/solutions/1056780/)

---

```
class Solution {
    public List<Integer> getLonelyNodes(TreeNode root) {
        var nodes = new ArrayList<Integer>();
        addLonelyNodes(nodes, root, false);
        return nodes;
    }
    
    private static void addLonelyNodes(List<Integer> nodes, TreeNode root, boolean lonely) {
        if (root == null) return;
        if (lonely) nodes.add(root.val);

        addLonelyNodes(nodes, root.left, root.right == null);
        addLonelyNodes(nodes, root.right, root.left == null);
    }
}
```