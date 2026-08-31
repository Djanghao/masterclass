# Neat and concise Dart solution beats 100%

**Author:** user3245tw
**Votes:** 2
**Link:** [https://leetcode.com/problems/course-schedule/solutions/3130664/](https://leetcode.com/problems/course-schedule/solutions/3130664/)

---

# Intuition
Each course has pre req as another couse and the another course can have pre req as well. This sounds like a problem of graph where each edge shows relation between a course and its pre-req. Once we start seeing this as a graph problem, we can perform traversal on each node and check if the next course is complete or being currently completed

# Approach
Simple apporach based on topological sort. We want to go about traversing each node neighbour in a dfs manner and keep a track of onging path. If the current node is a part of ongoing path already, this means we have hit a cycle where the course is a dependency of an ongoing path. 

Else we can simply mark the course visited while our way back from the stack.

In the end we simply check if any course is marked incomplete or not.

# Complexity
- Time complexity:In worst case our time complexity is O(n) where n is the total number of courses since we have to pass through each node once.

- Space complexity: O(n)

# Code
```
class Solution {

  bool canFinish(int n, List<List<int>> pre) {
    List<bool> completed = List<bool>.filled(n, false, growable: false);
    Set<int> ongoing = {};
    List<List<int>> adj = List.generate(n, (i) => []);

    for (List<int> e in pre) 
      adj[e[0]].add(e[1]);
    
    for (int i = 0; i < n; i++) {
      if (dfs(adj, n, i, completed, ongoing) == false) 
        return false;
    }

    completed.forEach((bool c) => {if (!c) c});
    return true;
  }

  bool dfs(List<List<int>> adj, int n, int source, List<bool> completed, Set<int> ongoing) {
    if (completed[source]) return true;
    if (ongoing.contains(source)) return false;

    ongoing.add(source);

    for (int x in adj[source]) {
      if (dfs(adj, n, x, completed, ongoing) == false) 
        return false;
    }
    
    completed[source] = true;
    ongoing.remove(source);

    return true;
  }
}

```