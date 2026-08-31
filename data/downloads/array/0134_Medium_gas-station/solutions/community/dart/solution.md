# Dart Simple O(n)

**Author:** sayandh
**Votes:** 0
**Link:** [https://leetcode.com/problems/gas-station/solutions/4398770/](https://leetcode.com/problems/gas-station/solutions/4398770/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Iterate the list
Calculate remainingCost,tank and start



# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
class Solution {
  int canCompleteCircuit(List<int> gas, List<int> cost) {
    int tank = 0;
    int start = 0;
    int remainingCost = 0;

    for (int i = 0; i < gas.length; i++) {
      if (tank + gas[i] < cost[i]) {
        start = i + 1;
        remainingCost += cost[i] - gas[i] - tank;
        tank = 0;
      } else {
        tank = (tank + gas[i]) - cost[i];
      }
    }

    return tank >= remainingCost ? start : -1;
  }
}
```