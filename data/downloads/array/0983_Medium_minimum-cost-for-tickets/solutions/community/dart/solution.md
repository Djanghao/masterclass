# Dart, fast recursion with DP, top-down approach

**Author:** Dartist
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-for-tickets/solutions/4723504/](https://leetcode.com/problems/minimum-cost-for-tickets/solutions/4723504/)

---

# Code
```
class Solution {
  int mincostTickets(List<int> days, List<int> costs) {
    Map<int, int> cache = {};
    int answer = recur(days, costs, 0, cache);
    return answer;
  }

  int recur(List<int> days, List<int> costs, int nDay, Map<int, int> cache) {
    if (nDay > days.last) return 0;
    nDay = days.firstWhere((day) => day >= nDay, orElse: () => days.last);
    if (cache.containsKey(nDay)) return cache[nDay]!;
    int maxVal = 10000;
    maxVal = min(maxVal, costs[0] + recur(days, costs, nDay + 1, cache));
    maxVal = min(maxVal, costs[1] + recur(days, costs, nDay + 7, cache));
    maxVal = min(maxVal, costs[2] + recur(days, costs, nDay + 30, cache));
    cache[nDay] = maxVal;
    return maxVal;
  }
}
```