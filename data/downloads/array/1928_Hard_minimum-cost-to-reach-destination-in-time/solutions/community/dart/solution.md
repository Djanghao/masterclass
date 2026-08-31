# Simple Dart solution.  A hard question is the Complexity.

**Author:** yakiv_galkin
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/solutions/2899499/](https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/solutions/2899499/)

---

# Intuition
A simple solution can be built on the top of the standard Dijkstra algorithm. 

# Approach

Ignore items from the Dijkstra queue when we run out of time, and instead of the "Set of visited" items - use two values, the min cost and min time required to get to the node. Any new candidate from the BFS should improve either cost or time. If not - ignore it since in no way this can improve our results.

In the implementation I used SplayTreeMap sice LeetCode does not allow import of the priority queue from the collection package.

# Complexity
Hard question. 
Literally we use Djikstra algorithm multimple times whenever we run out of the given maxTime - algorithm reverts to less optimal by the cost factor but more optimal by the time factor. so the result can be something like X * E * Log(Y).
Queue can hold same node with different time spent - so I used Y instead of N.

my guess for the time complexity:  N * E * log(N)



# Code
```

import 'dart:collection';

class QueueData {
  int node;
  int cost;
  int time;
  QueueData(this.node, this.cost, this.time);
}

class Solution {
  int minCost(int maxTime, List<List<int>> edges, List<int> passingFees) {
    int N = passingFees.length;
    final graph = List<List<List<int>>>.generate( // build graph - O(E)
        N, (index) => List<List<int>>.empty(growable: true));
    edges.forEach((e) {
      graph[e[0]].add([e[1], e[2]]);
      graph[e[1]].add([e[0], e[2]]);
    });

    final minTime = List<int>.filled(N, -1);
    final minCost = List<int>.filled(N, -1);
    final queue = SplayTreeSet<QueueData>((a, b) =>
        a.cost == b.cost ? a.time.compareTo(b.time) : a.cost.compareTo(b.cost));
    queue.add(QueueData(0, passingFees[0], 0));
    while (queue.isNotEmpty) {
      final firstNode = queue.first;
      queue.remove(firstNode);
      // if we are out of time - ignore this BFS item
      if (firstNode.time > maxTime) continue;
      if (firstNode.node == N - 1) return firstNode.cost;
      graph[firstNode.node].forEach((n) {
        // either time of cost should be less then from the previous node visit
        // this prevents cycles and works pretty much like the 
        // set of visited nodes from the standard Dijkstra algorithm 
        if (minTime[n[0]] == -1 || 
            (firstNode.cost + passingFees[n[0]] < minCost[n[0]] ||
                firstNode.time + n[1] < minTime[n[0]])) {
          int t = firstNode.time + n[1];
          int c = firstNode.cost + passingFees[n[0]];
          minTime[n[0]] = minTime[n[0]] == -1 ? t : min(t, minTime[n[0]]);

          minCost[n[0]] = minCost[n[0]] == -1 ? c : min(c, minCost[n[0]]);
          queue.add(QueueData(n[0], c, t));
        }
      });
    }
    return -1;
  }
}

```