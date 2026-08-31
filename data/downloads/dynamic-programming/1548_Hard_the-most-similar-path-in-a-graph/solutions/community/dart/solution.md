# Dart solution -  O(target * n * roads)

**Author:** yakiv_galkin
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-most-similar-path-in-a-graph/solutions/2907181/](https://leetcode.com/problems/the-most-similar-path-in-a-graph/solutions/2907181/)

---

# Intuition
After reading the DP hint on the problem description page - solution becomes obvious.


# Approach
Rather standard bottom up DP with an obvious dependency of sub-tasks. 
In case if we would need to return only the min edit distance - it would be possible to use 1D DP array instead of 2D;  But as a complete path needed - we need to keep it somewere through the steps.

More elegant solution would be to use djikstra on the DP array; but it did not come to me as an option :-(

# Complexity
- Time complexity:
 O(target * n * roads)

- Space complexity:
 O(target * n ) for DP + O(roads) for the graph

# Code
```

const int BIG_INT = 1000000000;

class DpData {
  int minDist;
  int prev;
  DpData([this.minDist = BIG_INT, this.prev = -1]);
}

class Solution {
  List<int> mostSimilar(int n, List<List<int>> roads, List<String> names,
      List<String> targetPath) {
    int N = names.length;
    int T = targetPath.length;
    final graph = List<List<int>>.generate(N, (_) => <int>[]);
    roads.forEach((r) { // O(roads)
      graph[r[0]].add(r[1]);
      graph[r[1]].add(r[0]);
    });


    final dp = List<List<DpData>>.generate(
        T, (index) => List.generate(N + 1, (index) => DpData()));

    for (int i = 0; i < N; i++)
      dp[0][i].minDist = (names[i] == targetPath[0] ? 0 : 1);

    for (int t = 1; t < T; t++) {
      for (int i = 0; i < N; i++) { // O(target * n * roads)
        int nodeDist = (targetPath[t] == names[i] ? 0 : 1);
        for (var n in graph[i]) {
          if (dp[t][i].minDist > dp[t - 1][n].minDist + nodeDist) {
            dp[t][i].minDist = dp[t - 1][n].minDist + nodeDist;
            dp[t][i].prev = n;
          }
        }
      }
    }

    int minN = 0;
    for (int n = 1; n < N; n++) {
      if (dp[T - 1][n].minDist < dp[T - 1][minN].minDist) minN = n;
    }

    int t = T - 1;
    final ret = <int>[];
    for (int p = minN; p != -1; p = dp[t--][p].prev) ret.add(p);
    return ret.reversed.toList();
  }
}

```