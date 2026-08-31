# Java, easy to understand

**Author:** leetcode07051
**Votes:** 12
**Link:** [https://leetcode.com/problems/clone-binary-tree-with-random-pointer/solutions/699562/](https://leetcode.com/problems/clone-binary-tree-with-random-pointer/solutions/699562/)

---

```
class Solution {
    public NodeCopy copyRandomBinaryTree(Node root) {
        Map<Node, NodeCopy> map = new HashMap<>();
        return doClone(root, map);
    }
    
    private NodeCopy doClone(Node root, Map<Node, NodeCopy> map) {
        if (root == null) {
            return null;
        }
        if (map.containsKey(root)) {
            return map.get(root);
        } else {
            NodeCopy cur = new NodeCopy(root.val);
            map.put(root, cur);
            cur.left = doClone(root.left, map);
            cur.right = doClone(root.right, map);
            cur.random = doClone(root.random, map);
            return cur;
        }
    }
}
```