# Fast solution DP

**Author:** aospiridonov
**Votes:** 0
**Link:** [https://leetcode.com/problems/cheapest-flights-within-k-stops/solutions/4770652/](https://leetcode.com/problems/cheapest-flights-within-k-stops/solutions/4770652/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(\	ext{flights.length}\\space \\cdot k)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int findCheapestPrice(
      int n, List<List<int>> flights, int src, int dst, int k) {
    const maxValue = 2147483647;
    var dist = List<int>.filled(n, maxValue);
    dist[src] = 0;
    for (int i = 0; i <= k; i++) {
      final temp = [...dist];
      for (final flight in flights) {
        if (dist[flight[0]] != maxValue) {
          temp[flight[1]] = min(temp[flight[1]], dist[flight[0]] + flight[2]);
        }
      }
      dist = temp;
    }
    return dist[dst] == maxValue ? -1 : dist[dst];
  }
}
```