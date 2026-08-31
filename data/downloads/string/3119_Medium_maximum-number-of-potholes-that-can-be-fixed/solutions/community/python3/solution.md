# Greedy

**Author:** votrubac
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-number-of-potholes-that-can-be-fixed/solutions/5038885/](https://leetcode.com/problems/maximum-number-of-potholes-that-can-be-fixed/solutions/5038885/)

---

The optimal strategy is to first fix the longest consecutive potholes.

So we collect `len` of consecutive potholes, go from longest to shortest, and apply the available budget.

**Python 3**
```python
class Solution:
    def maxPotholes(self, road: str, budget: int) -> int:
        res = 0
        for holes in sorted(map(len, road.split('.')), reverse=True):
            res += min(holes, max(0, budget - 1))
            budget -= min(holes + 1, budget)
        return res
```
**C++**
Using max heap as an optimization.
```cpp
int maxPotholes(const string &road, int budget) {
    int res = 0, cnt = 0;
    priority_queue<int> pq;
    for (int i = 0; i <= road.size(); ++i) {
        if (i == road.size() || road[i] == '.') {
            if (cnt)
                pq.push(cnt);
            cnt = 0;
        }
        else
            ++cnt;
    }
    while (budget && !pq.empty()) {
        int holes = pq.top(); pq.pop();
        res += min(holes, budget - 1);
        budget -= min(holes + 1, budget);
    }
    return res;
}
```