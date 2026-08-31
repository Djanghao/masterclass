# Dart solution

**Author:** Dartist
**Votes:** 2
**Link:** [https://leetcode.com/problems/evaluate-division/solutions/5045079/](https://leetcode.com/problems/evaluate-division/solutions/5045079/)

---

# Notes
UPDATE 2024-09-29. Leetcode fixed the issue. Dart code can now be submitted. The below message can be ignored.

This code should be working. I'm writing "should be" because there is at this current time (April 19, 2024) a bug in Leetcode preventing any Dart solution to pass. Testcase# 18 will always produce an error, not coming from your code but from Leetcode:
https://leetcode.com/discuss/feedback/5038101/bug-for-dart-on-leetcode-0399
I submitted the case here:
https://github.com/LeetCode-Feedback/LeetCode-Feedback/issues/21936

# Code
```
import 'dart:collection';

class Solution {
  List<double> calcEquation(List<List<String>> equations, List<double> values,
      List<List<String>> queries) {
    Map<String, Map<String, double>> graph = buildGraph(equations, values);
    List<double> results = [];

    for (var query in queries) {
      var [dividend, divisor] = query;

      if (graph.containsKey(dividend) && graph.containsKey(divisor)) {
        var result = bfs(dividend, divisor, graph);
        results.add(result);
      } else {
        results.add(-1.0);
      }
    }
    return results;
  }

  Map<String, Map<String, double>> buildGraph(
      List<List<String>> equations, List<double> values) {
    Map<String, Map<String, double>> graph = {};

    for (var (i, equation) in equations.indexed) {
      var [dividend, divisor] = equation;
      var value = values[i];

      if (!graph.containsKey(dividend)) {
        graph[dividend] = {};
      }
      graph[dividend]![divisor] = value;

      if (!graph.containsKey(divisor)) {
        graph[divisor] = {};
      }
      graph[divisor]![dividend] = 1.0 / value;
    }

    return graph;
  }

  double bfs(String start, String end, Map<String, Map<String, double>> graph) {
    Queue<(String, double)> queue = Queue();
    Set<String> visited = {};

    queue.add((start, 1.0));
    visited.add(start);

    while (queue.isNotEmpty) {
      var (currentNode, currentValue) = queue.removeFirst();

      if (currentNode == end) {
        return currentValue;
      }

      for (var neighbor in graph[currentNode]!.entries) {
        var neighborNode = neighbor.key;
        var neighborWeight = neighbor.value;

        if (!visited.contains(neighborNode)) {
          visited.add(neighborNode);
          queue.add((neighborNode, currentValue * neighborWeight));
        }
      }
    }
    return -1.0;
  }
}
```