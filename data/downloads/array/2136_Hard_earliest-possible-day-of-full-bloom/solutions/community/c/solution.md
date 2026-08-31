# Grow then plant

**Author:** votrubac
**Votes:** 227
**Link:** [https://leetcode.com/problems/earliest-possible-day-of-full-bloom/solutions/1676837/](https://leetcode.com/problems/earliest-possible-day-of-full-bloom/solutions/1676837/)

---

Imagine all flowers grow first (by themself), and then you need to start planting.

You start by planting the flower that "grew" first, then you plant the next flower that "grew", and so on.

![image](./images/0.png)

**Python 3**
```python
class Solution:
    def earliestFullBloom(self, plantTime: List[int], growTime: List[int]) -> int:
        res = 0
        for grow, plant in sorted(zip(growTime, plantTime)):
            res = max(res, grow) + plant
        return res
```
**C++**
```cpp
int earliestFullBloom(vector<int>& plant, vector<int>& grow) {
    vector<pair<int, int>> v;
    for (auto i = 0; i < plant.size(); ++i)
        v.push_back({grow[i], plant[i]});
    sort(begin(v), end(v));
    int res = 0;
    for (auto [g, p] : v)
        res = max(res, g) + p;
    return res;
}
```