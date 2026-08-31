# Solution with Comments that discribe the answer.🟠⚪🟢

**Author:** somyanaiwal023
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-city-scheduling/solutions/4815867/](https://leetcode.com/problems/two-city-scheduling/solutions/4815867/)

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
class Solution {
  int twoCitySchedCost(List<List<int>> costs) {
  // Step 1: Calculate cost differences
  List<int> diffs = [];
  for (var cost in costs) {
    diffs.add(cost[1] - cost[0]); // Cost of B - Cost of A
  }

  // Step 2: Sort costs based on difference
  List<int> sortedIndices = List.generate(costs.length, (index) => index);
  sortedIndices.sort((a, b) => diffs[a].compareTo(diffs[b]));

  // Step 3: Allocate costs
  int totalCost = 0;
  int n = costs.length ~/ 2;
  for (int i = 0; i < n; i++) {
    totalCost += costs[sortedIndices[i]][1]; // Send to city B
    totalCost += costs[sortedIndices[i + n]][0]; // Send to city A
  }

  // Step 4: Return total cost
  return totalCost;
}
}
```