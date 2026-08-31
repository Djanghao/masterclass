# Java bfs iterative with queue

**Author:** lastdoctor
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/solutions/1714960/](https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/solutions/1714960/)

---

```
class Solution {
    public TreeNode findNearestRightNode(TreeNode root, TreeNode u) {
        var q = new LinkedList<TreeNode>();
        q.addLast(root);
        
        while(!q.isEmpty()) {
            var levelNum = q.size();
            var finded = false;
            for (int i = 0; i < levelNum; i++) {
                var node = q.removeFirst();
                if (node == null) continue;
                if (finded) return node;
                if (node == u) finded = true;
                q.add(node.left);
                q.add(node.right);
            }
            if (finded) return null;
            
        }
        return null;
    }
}
```