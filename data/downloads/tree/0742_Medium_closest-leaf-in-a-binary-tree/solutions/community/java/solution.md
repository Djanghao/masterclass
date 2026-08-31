# JAVA Graph with bfs solution

**Author:** jianhuilin1124
**Votes:** 2
**Link:** [https://leetcode.com/problems/closest-leaf-in-a-binary-tree/solutions/704268/](https://leetcode.com/problems/closest-leaf-in-a-binary-tree/solutions/704268/)

---

```
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int findClosestLeaf(TreeNode root, int k) {
        Map<TreeNode, List<TreeNode>> graph = new HashMap<>();
        Queue<TreeNode> queue = new LinkedList<>();
        buildGraph(graph, queue, root, null, k);
        Set<TreeNode> visited = new HashSet<>();
        while (!queue.isEmpty()){
            TreeNode node = queue.poll();
            if (node != null && node.left == node.right)
                return node.val;
            visited.add(node);
            List<TreeNode> nodes = graph.get(node);
            for (TreeNode tn : nodes){
                if (!visited.contains(tn)){
                    queue.offer(tn);
                }
            }
        }
        return 0;
    }
    
    private void buildGraph(Map<TreeNode, List<TreeNode>> graph, Queue<TreeNode> queue, TreeNode node, TreeNode parent, int k){
        if (node == null)
            return;
        if (node.val == k){
            queue.offer(node);
        }
        graph.putIfAbsent(node, new LinkedList<>());
        graph.putIfAbsent(parent, new LinkedList<>());
        graph.get(node).add(parent);
        graph.get(parent).add(node);
        buildGraph(graph, queue, node.left, node, k);
        buildGraph(graph, queue, node.right, node, k);
    }
}
```