# 🔥 Greedy🔥 || Simple Fast and Easy || with Explanation 😈

**Author:** ayoubzulfiqar
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximal-network-rank/solutions/3925790/](https://leetcode.com/problems/maximal-network-rank/solutions/3925790/)

---

# \uD83D\uDD25 Greedy \uD83D\uDD25 || Simple Fast and Easy || with Explanation \uD83D\uDE08
## Intuition and Approach

The problem aims to find the maximal network rank in a given set of cities (nodes) and roads (edges). The network rank of a city is the sum of its degree (the number of roads connected to it) and the degree of the highest degree city it's directly connected to.

The approach followed in this code involves calculating the degrees of each city, identifying the cities with the highest and second-highest degrees, and then analyzing the possible cases to determine the maximal network rank.

1. Calculate the degrees of each city:
   - Initialize a list `degrees` of size `n` to store the degrees of each city.
   - Iterate through the `roads` list and increment the degrees of the cities that are connected by each road.

2. Identify the cities with the highest and second-highest degrees:
   - Iterate through the `degrees` list and update `maxDegree` and `secondMaxDegree` accordingly.

3. Analyze the cases and calculate the maximal network rank:
   - If `maxDegree` is equal to `secondMaxDegree`, it means there are multiple cities with the same highest degree. Check whether the number of such cities is greater than `maxDegree + 1`.
     - If so, return `maxDegree * 2` since each city can have connections to at most `maxDegree` other cities.
     - Otherwise, count the number of connections between these cities. If it's less than the possible number of connections, return `maxDegree * 2`.
   - If `maxDegree` is not equal to `secondMaxDegree`, there's a single city (`king`) with the highest degree and multiple cities with the second-highest degree. Count the connections between the `king` and the second-highest degree cities, and compare it to the count of second-highest degree cities. Return the sum of the degrees accordingly.

## Time Complexity
- Calculating the degrees takes O(roads) time, which is proportional to the number of roads.
- Finding the highest and second-highest degrees takes O(n) time since it involves iterating through the `degrees` list.
- Analyzing the cases and calculating the maximal network rank takes O(roads) time again since we iterate through the `roads` list.

Overall, the time complexity is O(roads + n).

## Space Complexity
- The `degrees` list requires O(n) space to store the degrees of each city.
- The `isCandidate` list requires O(n) space to store whether each city is a candidate or not.

Overall, the space complexity is O(n).

The time complexity is primarily influenced by the number of roads, and the space complexity is determined by the number of cities (nodes).
# Code
```

class Solution {
  int maximalNetworkRank(int n, List<List<int>> roads) {
    final List<int> degrees = List<int>.filled(n, 0);
    for (List<int> road in roads) {
      final int a = road[0];
      final int b = road[1];
      degrees[a]++;
      degrees[b]++;
    }

    int maxDegree = 0;
    int secondMaxDegree = 0;
    for (int degree in degrees) {
      if (degree < secondMaxDegree) {
        continue;
      }
      secondMaxDegree = degree;
      if (secondMaxDegree > maxDegree) {
        int temp = secondMaxDegree;
        secondMaxDegree = maxDegree;
        maxDegree = temp;
      }
    }

    final List<bool> isCandidate = List<bool>.filled(n, false);
    int candidateCount = 0;
    int king = -1;
    for (int i = 0; i < n; i++) {
      if (degrees[i] == secondMaxDegree) {
        isCandidate[i] = true;
        candidateCount++;
      }
      if (maxDegree > secondMaxDegree && degrees[i] == maxDegree) {
        king = i;
      }
    }

    if (maxDegree == secondMaxDegree) {
      // Case 1: We have multiple candidates with the same max degrees.
      if (candidateCount > maxDegree + 1) {
        return maxDegree * 2;
      }
      int connectionCount = 0;
      for (List<int> road in roads) {
        final int a = road[0];
        final int b = road[1];
        if (isCandidate[a] && isCandidate[b]) {
          connectionCount++;
        }
      }
      if (connectionCount < candidateCount * (candidateCount - 1) ~/ 2) {
        return maxDegree * 2;
      }
      return maxDegree * 2 - 1;
    }

    // Case 2: We have a single max degree (king) and multiple second max degree candidates.
    int connectionCount = 0;
    for (List<int> road in roads) {
      final int a = road[0];
      final int b = road[1];
      if (a != king && b != king) {
        continue;
      }
      if (isCandidate[a] || isCandidate[b]) {
        connectionCount++;
      }
    }
    if (connectionCount < candidateCount) {
      return maxDegree + secondMaxDegree;
    }
    return maxDegree + secondMaxDegree - 1;
  }
}
```
## [GitHub](https://github.com/ayoubzulfiqar/leetcode)