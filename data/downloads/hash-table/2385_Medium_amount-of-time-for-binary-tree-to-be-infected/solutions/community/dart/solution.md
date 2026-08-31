# Dart 2-pass approach optimized

**Author:** Dartist
**Votes:** 0
**Link:** [https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/solutions/4555040/](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/solutions/4555040/)

---

# Intuition
My first thought was to count the number of levels on each side of the root node and return the highest number, and substract the level where is the starting node. But I could not find a way to reliably do it without knowing the parent of each node... 

# Approach
so I took the hint and did a 2-pass approach:
1) convert the tree into an undirected graph where each node knows its parent and its siblings.
2) do a Breadth first search (BFS) on the resulting graph to count the number of level needed to infect each node.

# Complexity
- Time complexity: O(n*2) because of 2 passes.
- Space complexity: O(n*2) because of the copy to a graph.

# Code
```
/// This is the structure to store all the references
/// for our undirected graph
class GraphNode {
  int? parent;
  int? left;
  int? right;
  GraphNode([this.parent, this.left, this.right]);
}

typedef Graph = Map<int, GraphNode>;

class Solution {
  int amountOfTime(TreeNode? root, int start) {
    if (root == null) return 0;

    final graph = convertToUndirectedGraph(root);
    List<int> nodes = [start];
    int countLevel = 0;

    while (nodes.isNotEmpty) {
      final List<int> nextLevel = [];

      for (var node in nodes) {
        var gNode = graph[node];
        if (gNode == null) continue;
        graph.remove(node); // already infected so remove it

        for (int? sibling in [gNode.parent, gNode.left, gNode.right]) {
          if (sibling != null && graph.containsKey(sibling)) {
            nextLevel.add(sibling);
          }
        }
      }
      nodes = nextLevel;
      if (nodes.isNotEmpty) countLevel++;
    }
    return countLevel;
  }

  /// We will do a conversion by doing a breadth first search (BFS)
  /// and storing only the int values since they are uniques keys.
  /// Each node will contain a reference to its parent and its right and
  /// left siblings.
  Graph convertToUndirectedGraph(TreeNode? root) {
    Graph graphNodes = {};
    if (root == null) return graphNodes;

    graphNodes[root.val] = GraphNode();

    List<TreeNode?> nodes = [root];

    while (nodes.isNotEmpty) {
      List<TreeNode?> nextLevel = [];
      for (var node in nodes) {
        if (node == null) continue;

        var gNode = GraphNode();
        gNode.parent = graphNodes[node.val]!.parent;

        for (var left in [true, false]) {
          var sibling = left ? node.left : node.right;
          if (sibling == null) continue;
          if (left) {
            gNode.left = sibling.val;
          } else {
            gNode.right = sibling.val;
          }
          graphNodes[sibling.val] = GraphNode(node.val);
          nextLevel.add(sibling);
        }
        graphNodes[node.val] = gNode;
      }
      nodes = nextLevel;
    }
    return graphNodes;
  }
}
```