# dart solution

**Author:** NiyasBasheer
**Votes:** 0
**Link:** [https://leetcode.com/problems/validate-binary-tree-nodes/solutions/4177251/](https://leetcode.com/problems/validate-binary-tree-nodes/solutions/4177251/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import 'dart:collection';

class Solution {
  bool validateBinaryTreeNodes(int n, List<int> leftChild, List<int> rightChild) {
    // CREATE A GRAPH
    List<List<int>> graph = List.generate(n, (_) => []);

    // NUMBER OF EDGES IN GRAPH
    int edge = 0;

    for (int i = 0; i < n; i++) {
      if (leftChild[i] != -1) {
        graph[i].add(leftChild[i]);
        edge++;
      }
      if (rightChild[i] != -1) {
        graph[i].add(rightChild[i]);
        edge++;
      }
    }

    // CHECK FOR SELF LOOPS AND CYCLES
    Queue<int> q = Queue();
    List<bool> visited = List.filled(n, false);
    List<int> indegree = List.filled(n, 0);
    int ctr = 0;

    for (int i = 0; i < graph.length; i++) {
      for (int j = 0; j < graph[i].length; j++) {
        indegree[graph[i][j]]++;
      }
    }

    for (int i = 0; i < indegree.length; i++) {
      // NODE SHOULD HAVE EITHER ZERO OR ONE AS INDEGREE
      if (indegree[i] > 1) {
        return false;
      }
      if (indegree[i] == 0) {
        q.add(i);
        ctr++;
      }
    }

    while (q.isNotEmpty) {
      int front = q.removeFirst();
      visited[front] = true;

      for (int i in graph[front]) {
        indegree[i]--;

        if (!visited[i] && indegree[i] == 0) {
          q.add(i);
          ctr++;
        }
      }
    }

    // IF CYCLES ARE PRESENT OR EDGES ARE NOT EQUAL TO N-1 RETURN FALSE
    if (ctr != n || edge != n - 1) {
      return false;
    }

    // ELSE RETURN TRUE
    return true;
  }
}



```