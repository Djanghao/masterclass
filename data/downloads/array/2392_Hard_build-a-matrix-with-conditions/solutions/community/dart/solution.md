# the fastest in dart

**Author:** ahmed___
**Votes:** 1
**Link:** [https://leetcode.com/problems/build-a-matrix-with-conditions/solutions/5508614/](https://leetcode.com/problems/build-a-matrix-with-conditions/solutions/5508614/)

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

List<List<int>> buildMatrix(int k, List<List<int>> rowConditions, List<List<int>> colConditions) {
  List<List<int>> ans = List.generate(k, (_) => List.filled(k, 0));

  List<int> topological(List<List<int>> conditions) {
    Map<int, List<int>> graph = {};
    List<int> indegree = List.filled(k, 0);
    
    for (var condition in conditions) {
      int a = condition[0];
      int b = condition[1];
      
      if (!graph.containsKey(a)) {
        graph[a] = [];
      }
      
      graph[a]!.add(b);
      indegree[b - 1] += 1;
    }
    
    Queue<int> que = Queue();
    for (int i = 0; i < k; i++) {
      if (indegree[i] == 0) {
        que.add(i + 1);
      }
    }
    
    List<int> order = [];
    
    while (que.isNotEmpty) {
      int temp = que.removeFirst();
      order.add(temp);
      
      if (graph.containsKey(temp)) {
        for (int child in graph[temp]!) {
          indegree[child - 1] -= 1;
          if (indegree[child - 1] == 0) {
            que.add(child);
          }
        }
      }
    }
    
    return order;
  }
  
  List<int> rowOrder = topological(rowConditions);
  List<int> colOrder = topological(colConditions);
  
  // Cycle detection
  if (rowOrder.length < k || colOrder.length < k) {
    return [];
  }
  
  for (int row = 0; row < k; row++) {
    int val = rowOrder[row];
    int col = colOrder.indexOf(val);
    ans[row][col] = val;
  }
  
  return ans;
}


}
```