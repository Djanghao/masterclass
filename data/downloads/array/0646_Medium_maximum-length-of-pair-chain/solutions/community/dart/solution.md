# 🔥 Bucket & Greedy & Topo 🔥 || Simple Fast and Easy || with Explanation 😈

**Author:** ayoubzulfiqar
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-length-of-pair-chain/solutions/3961499/](https://leetcode.com/problems/maximum-length-of-pair-chain/solutions/3961499/)

---

# \uD83D\uDD25 Bucket & Greedy & Topo \uD83D\uDD25 || Simple Fast and Easy || with Explanation \uD83D\uDE08

## Code - Greedy

### Explanation

This code is designed to find the length of the longest chain of pairs in the given list of pairs. A pair is represented as `[a, b]`, where `a` is the starting value and `b` is the ending value.

The code first sorts the input pairs based on their ending values in ascending order. Then, it iterates through the sorted pairs and keeps track of the last selected pair's ending value (`pairEnd`). It increments a counter (`count`) whenever it encounters a pair whose starting value is greater than `pairEnd`, indicating that a new chain can be formed.

Finally, the code returns the value of the `count`, which represents the length of the longest chain.

### Intuition and Approach

- **Intuition**: Sorting the pairs based on their ending values and then greedily selecting pairs that form a valid chain.

- **Approach**:
  1. Sort the input pairs based on their ending values in ascending order.
  2. Initialize a counter `count` to keep track of the chain length and a variable `pairEnd` to keep track of the ending value of the last selected pair.
  3. Iterate through the sorted pairs starting from the second pair:
     - If the current pair's starting value is greater than `pairEnd`, increment `count` and update `pairEnd` to the ending value of the current pair.
  4. Return the value of `count` as the length of the longest chain.

### Space Complexity

- The space complexity of this solution is O(1) since it only uses a constant amount of additional space for variables like `count` and `pairEnd`.

### Time Complexity

- The most time-consuming operation is the sorting of the pairs, which takes O(n * log n) time complexity, where n is the number of pairs.
- The subsequent loop through the sorted pairs has a linear time complexity of O(n).
- Therefore, the overall time complexity of the solution is O(n * log n), dominated by the sorting step.

```dart
class Solution {
  int findLongestChain(List<List<int>> pairs) {
    pairs.sort((a, b) => a[1].compareTo(b[1]));
    int count = 1;
    int pairEnd = pairs[0][1]; // Last selected pair end
    for (int i = 1; i < pairs.length; i++) {
      if (pairs[i][0] > pairEnd) {
        count++;
        pairEnd = pairs[i][1];
      }
    }
    return count;
  }
}
```

## Code - Topo + DP + Graph

The provided code implements a solution to find the length of the longest chain of pairs from a given list of pairs. Each pair is represented as `[a, b]`, where `a` is the starting value and `b` is the ending value. The goal is to find the longest chain of pairs where each pair's starting value is strictly greater than the ending value of the previous pair.


1. **Initializing Variables**: The code starts by initializing some necessary variables. It creates a list `inDegree` to store the in-degree (number of incoming edges) of each node (pair), and a 2D list `adj` to represent the adjacency list of pairs.

2. **Creating the Graph**: The nested loops iterate through each pair combination and check whether the ending value of the current pair is less than the starting value of the other pair. If this condition holds, it means that there's a directed edge from the current pair to the other pair in the graph. The adjacency list and in-degrees are updated accordingly.

3. **Initializing the Queue**: The code initializes a queue `q` and adds all the pairs with an in-degree of 0 to the queue. These are the pairs that can be the starting points of a chain.

4. **Calculating Longest Chains**: The code enters a loop where it processes the pairs in a topological order (starting from pairs with no incoming edges). It updates the `distance` array, which stores the length of the longest chain that can be formed starting from each pair. The maximum value of the `distance` array will be the length of the longest chain.

5. **Iterating through Adjacency List**: Within the loop, for each node `node` in the adjacency list, the code iterates through its neighbors and reduces their in-degrees. It calculates the length of the chain for each neighbor by comparing the current `distance` value with `1 + distance[node]`.

6. **Updating Maximum Value**: After processing all neighbors, the maximum value between the current `distance` value and the previous maximum is stored in the `distance` array.

7. **Returning Result**: Finally, the code returns the maximum chain length plus 1 (since the length of the chain is calculated using 0-based indexing).

This solution utilizes graph traversal and dynamic programming to find the longest chain of pairs.

The time complexity of this solution is O(n^2), where n is the number of pairs. The most time-consuming step is constructing the adjacency list, which takes O(n^2). The space complexity is O(n), as it uses additional space to store the adjacency list, in-degree array, distance array, and the queue.

```dart
import 'dart:collection';

class Solution {
  int findLongestChain(List<List<int>> pairs) {
    final int n = pairs.length;
    final List<int> inDegree = List<int>.filled(n, 0);
    final List<List<int>> adj = List.generate(n, (index) => <int>[]);

    for (int i = 0; i < n; i++) {
      for (int j = 0; j < n; j++) {
        if (pairs[i][1] < pairs[j][0]) {
          adj[i].add(j);
          inDegree[j]++;
        }
      }
    }

    final Queue<int> q = Queue<int>();
    for (int i = 0; i < n; i++) {
      if (inDegree[i] == 0) q.add(i);
    }

    final List<int> distance = List<int>.filled(n, 0);
    while (q.isNotEmpty) {
      final int node = q.removeFirst();

      for (int i in adj[node]) {
        inDegree[i]--;
        distance[i] =
            distance[i] > 1 + distance[node] ? distance[i] : 1 + distance[node];
        if (inDegree[i] == 0) q.add(i);
      }
    }

    int maxValue = 0;
    for (final int i in distance) {
      maxValue = maxValue > i ? maxValue : i;
    }

    return maxValue + 1;
  }
}
```

## Code - Bucket
The provided code aims to find the length of the longest chain of pairs from a given list of pairs. Each pair is represented as `[a, b]`, where `a` is the starting value and `b` is the ending value. The goal is to find the longest chain of pairs where each pair's starting value is strictly greater than the ending value of the previous pair.


1. **Initializing Variables**: The code starts by initializing some necessary variables. It creates an array `timeline` to keep track of the possible pairs in the chain. The array is of length 2001, with each index representing a time value.

2. **Processing Pairs**: The loop iterates through each pair in the given list of pairs. It converts the starting and ending values of the pairs by adding 1000 to them. This adjustment is made to accommodate negative values and shift them to non-negative indices in the `timeline` array. The code then updates the `max` value to keep track of the highest ending value among all pairs.

3. **Updating the Timeline**: The code updates the `timeline` array. For each ending value `f`, it stores the maximum starting value `s` that can be paired with it. This ensures that only valid pairs are considered in the chain.

4. **Calculating Longest Chain**: After processing all pairs, the code initializes two variables: `l` for counting the length of the chain and `k` for tracking the current time value. It then iterates through the `timeline` array from 0 to the maximum ending value `max`. If the current starting value in the `timeline` array is greater than `k`, it increments the chain length `l` and updates `k` to the current time value.

5. **Returning Result**: Finally, the code returns the value of `l`, which represents the length of the longest chain.

This solution sorts the pairs based on their ending values and greedily selects pairs for the chain.

The time complexity of this solution is O(n), where n is the number of pairs. The most time-consuming operations are iterating through the list of pairs and iterating through the `timeline` array. The space complexity is O(1), as it uses a constant amount of additional space for variables and the `timeline` array.
```dart
class Solution {
  int findLongestChain(List<List<int>> pairs) {
    int max = 0;
    final List<int> timeline = List<int>.filled(2001, 0);
    int s;
    int f;
    for (final List<int> pair in pairs) {
      s = pair[0] + 1000;
      f = pair[1] + 1000;
      max = max > f ? max : f;
      if (timeline[f] < s) timeline[f] = s;
    }
    int l = 0;
    int k = 0;
    for (int i = 0; i <= max; i++) {
      if (timeline[i] > k) {
        l++;
        k = i;
      }
    }
    return l;
  }
}
```

## [GitHub](https://github.com/ayoubzulfiqar/leetcode)