# simple in dart

**Author:** ahmed___
**Votes:** 0
**Link:** [https://leetcode.com/problems/reconstruct-itinerary/solutions/4042184/](https://leetcode.com/problems/reconstruct-itinerary/solutions/4042184/)

---


# Complexity
- Time complexity:
O(n log n)
- Space complexity:
O(n)

# Code
```
class Solution {
  Map<String, List<String>> flightGraph = {};
  List<String> itinerary = [];

  void dfs(String airport) {
    List<String> destinations = flightGraph[airport] ?? [];
    
    while (destinations.isNotEmpty) {
      String nextDestination = destinations.removeLast();
      dfs(nextDestination);
    }
    
    itinerary.add(airport);
  }

  List<String> findItinerary(List<List<String>> tickets) {
    for (var ticket in tickets) {
      String from = ticket[0];
      String to = ticket[1];
      flightGraph.putIfAbsent(from, () => []).add(to);
    }
    
    for (var entry in flightGraph.entries) {
      entry.value.sort((a, b) => b.compareTo(a));
    }
    
    dfs("JFK");
    
    itinerary = List.from(itinerary.reversed);
    
    return itinerary;
  }
}

```