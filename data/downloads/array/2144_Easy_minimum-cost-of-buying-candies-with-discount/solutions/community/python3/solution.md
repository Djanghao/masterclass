# One-liner

**Author:** votrubac
**Votes:** 17
**Link:** [https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/1711079/](https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/1711079/)

---

Sort cost descending, and then sum, skipping every third cost.

**Python 3**
```python
class Solution:
    minimumCost = lambda self, cost: sum(c for i, c in enumerate(sorted(cost, reverse=True)) if i % 3 != 2)
```

**C++**
Same logic in C++.
```cpp
int minimumCost(vector<int>& cost) {
    int res = 0;
    sort(rbegin(cost), rend(cost));
    for (int i = 0; i < cost.size(); ++i)
        res += i % 3 == 2 ? 0 : cost[i];
    return res;
}
```