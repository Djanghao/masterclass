# Dart: 2-coloring vertices

**Author:** alexhutcheson
**Votes:** 0
**Link:** [https://leetcode.com/problems/possible-bipartition/solutions/2937271/](https://leetcode.com/problems/possible-bipartition/solutions/2937271/)

---

# Intuition
Important observations:

1. This is a graph problem. People = vertices, dislikes = edges.
2. Even though the problem is framed as "person 1 dislikes person 2", the graph is actually *undirected*. It doesn't matter which way the dislike flows - it has the same effect on group assignment.
3. This matches two important graph algorithm concepts you should be aware of:
  - [Bipartite graphs](https://en.wikipedia.org/wiki/Bipartite_graph)
  - [Vertex coloring](https://en.wikipedia.org/wiki/Graph_coloring#Vertex_coloring)

Vertex coloring is famously an NP-complete problem, so we need to look for ways to take advantage of the specific bounds of the problem. In this case, we're specifically asked to "color" the graph using 2 colors ("two groups"), which constrains the problem and makes it tractable. In fact, this is an instance of [testing bipartiteness](https://en.wikipedia.org/wiki/Bipartite_graph#Testing_bipartiteness), which is equivalent to vertex coloring with 2 colors.

# Approach
1. Build an adjacency list representation of the graph. An important observation is that the adjacency list representation may have fewer than `n` vertices, e.g. it's possible for `n = 2000`, but `dislikes.length == 1`, so the adjacency list would just have 2 vertices. 
2. Loop through the vertices in the graph, performing depth-first traversal from each one. An important wrinkle is that we track whether a vertex has been *ever* visited, not just whether it was visited on that traversal. Within each DFS traversal, "assign" vertices to groups in alternating order by depth.
  2a. If we ever hit a vertex that's already "assigned" to the "wrong" group, return false.
3. Return true if the loop completed.

# Complexity
- Time complexity: $O(m)$

- Space complexity: $O(m)$

# Code
```dart
class Solution {
  bool possibleBipartition(int n, List<List<int>> dislikes) {
    final graph = _buildGraph(dislikes);
    // Assume there are exactly 2 groups.
    // inGroup1[id] == true if id is assigned to group 1
    // inGroup1[id] == false if id is assigned to group 2
    // inGroup1[id] == null if id is not yet assigned to a group
    // A List<bool?> would be more efficient if we know that most vertices
    // will have at least one edge, but a map is likely more efficient 
    // in cases where |E| << |V|
    final inGroup1 = <int, bool>{};
    for (final srcId in graph.keys) {
      // Annoyingly verbose pattern to avoid two map lookups for contains() and []=.
      var assignedAlready = true;
      inGroup1.putIfAbsent(srcId, () {
        assignedAlready = false;
        return true;
      });
      if (assignedAlready) {
        continue;
      }
      // DFS to attempt to 2-color the vertices of the graph.
      final stack = [srcId];
      while (stack.isNotEmpty) {
        final cur = stack.removeLast();
        // Everything is assigned before putting it in the stack.
        final curInGroup1 = inGroup1[cur]!;
        final neighbors = graph[cur];
        if (neighbors == null) {
          continue;
        }
        for (final neighbor in neighbors) {
          var neighborPreviouslyAssigned = true;
          final neighborInGroup1 = inGroup1.putIfAbsent(neighbor, () {
            neighborPreviouslyAssigned = false;
            return !curInGroup1;
          });
          if (!neighborPreviouslyAssigned) {
            stack.add(neighbor);
          } else if (curInGroup1 == neighborInGroup1) {
            // Dislike between two people already assigned to the same group.
            return false;
          }
        }
      }
    }
    return true;
  }

  Map<int, List<int>> _buildGraph(List<List<int>> edges) {
    final g = <int, List<int>>{};
    for (final edge in edges) {
      g.update(
        edge[0],
        (neighbors) {
          neighbors.add(edge[1]);
          return neighbors;
        },
        ifAbsent: () => [edge[1]]
      );
      g.update(
        edge[1],
        (neighbors) {
          neighbors.add(edge[0]);
          return neighbors;
        },
        ifAbsent: () => [edge[0]]
      );
    }
    return g;
  }
}
```