# Dart: Iterative DFS

**Author:** alexhutcheson
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/solutions/3042326/](https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/solutions/3042326/)

---

# Approach
Depth-first search through the tree, maintaining a hash map mapping label -> node ID for all parent nodes in the tree.

Because the tree isn't guaranteed to be balanced, stack depth for a recursive implementation could grow to $O(n)$, which will cause stack overflow in many environments, including the Leetcode Dart environment. 

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code

## Initial recursive approach (stack overflow on large unbalanced trees)

```dart
class Solution {
  List<int> countSubTrees(int n, List<List<int>> edges, String labels) {
    final result = List<int>.filled(n, 0);
    final graph = _buildGraph(edges);
    final labelToId = <int, List<int>>{};
    void dfs(int id, int parentId) {     
      final label = labels.codeUnits[id];
      final nodesWithMatchingLabels = labelToId.update(
        label, 
        (nodes) {
          nodes.add(cur.id);
          return nodes;
        },
        ifAbsent: () => [cur.id]);
      for (final match in nodesWithMatchingLabels) {
        result[match]++;
      }
      for (final childId in graph[id]!) {
        if (childId == parentId) {
          continue;
        }
        dfs(childId, id);
      }
      if (parentsWithMatchingLabels.length > 1) {
        parentsWithMatchingLabels.removeLast();
      } else {
        labelToId.remove(label);
      }
    }
    dfs(0, -1);
    return result;
  }

  Map<int, List<int>> _buildGraph(List<List<int>> edges) {
    final g = <int, List<int>>{};
    for (final edge in edges) {
      g.update(edge[0],
        (neighbors) {
          neighbors.add(edge[1]);
          return neighbors;
        },
        ifAbsent: () => [edge[1]]);
      g.update(edge[1],
        (neighbors) {
          neighbors.add(edge[0]);
          return neighbors;
        },
        ifAbsent: () => [edge[0]]);
    }
    return g;
  }
}
```

## Iterative DFS (solves stack overflows)

```dart
class DFSState {
  int id;
  int parentId;
  bool visited = false;
  DFSState(this.id, this.parentId);
}

class Solution {
  List<int> countSubTrees(int n, List<List<int>> edges, String labels) {
    final result = List<int>.filled(n, 0);
    final graph = _buildGraph(edges);
    final labelToId = <int, List<int>>{};
    final stack = [DFSState(0, -1)];
    while (stack.isNotEmpty) {
      final cur = stack.last;
      final label = labels.codeUnits[cur.id];
      if (!cur.visited) {
        final nodesWithMatchingLabels = labelToId.update(
          label, 
          (nodes) {
            nodes.add(cur.id);
            return nodes;
          },
          ifAbsent: () => [cur.id]);
        for (final match in nodesWithMatchingLabels) {
          result[match]++;
        }
        for (final childId in graph[cur.id]!) {
          if (childId == cur.parentId) {
            continue;
          }
          stack.add(DFSState(childId, cur.id));
        }
        cur.visited = true;
      } else {  // cur.visited
        // Already visited this node and all children, just need to clean up.
        final nodesWithMatchingLabels = labelToId[label]!;
        if (nodesWithMatchingLabels.length > 1) {
          nodesWithMatchingLabels.removeLast();
        } else {
          labelToId.remove(label);
        }
        stack.removeLast();
      }
    }
    return result;
  }

  Map<int, List<int>> _buildGraph(List<List<int>> edges) {
    final g = <int, List<int>>{};
    for (final edge in edges) {
      g.update(edge[0],
        (neighbors) {
          neighbors.add(edge[1]);
          return neighbors;
        },
        ifAbsent: () => [edge[1]]);
      g.update(edge[1],
        (neighbors) {
          neighbors.add(edge[0]);
          return neighbors;
        },
        ifAbsent: () => [edge[0]]);
    }
    return g;
  }
}
```