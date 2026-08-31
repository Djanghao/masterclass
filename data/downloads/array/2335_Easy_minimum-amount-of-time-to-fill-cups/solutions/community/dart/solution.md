# Minimum amount of time to fill cups

**Author:** Rino_George
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/solutions/5590107/](https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/solutions/5590107/)

---

Minimum amount of time to fill cups

Easy approach using reduce and floor in dart

The time complexity of the program is \\(O(1)\\) because it involves a constant number of operations regardless of input size. The space complexity is also \\(O(1)\\) since the list size increases by only one element. Both complexities are constant due to the fixed operations and limited space usage.

Time complexity - O(1)
Time complexity - O(1)

# Code
```
class Solution {
  int fillCups(List<int> amount) {
  int sum = amount[0] + amount[1] + amount[2];
  double x = (sum + 1) / 2;
  amount.add(x.floor());
  return amount.reduce((curr, next) => curr > next ? curr : next);
  }
}
```