# Divide gaps by dist

**Author:** votrubac
**Votes:** 39
**Link:** [https://leetcode.com/problems/add-minimum-number-of-rungs/solutions/1344878/](https://leetcode.com/problems/add-minimum-number-of-rungs/solutions/1344878/)

---

The only trick here is to use division, as the gap between two rungs could be large. We will get TLE if we add rungs one-by-one.

**Java**
```java
public int addRungs(int[] rungs, int dist) {
    int res = (rungs[0] - 1) / dist;
    for (int i = 1; i < rungs.length; ++i)
        res += (rungs[i] - rungs[i - 1] - 1) / dist;
    return res;
}
```
**C++**
```cpp
int addRungs(vector<int>& rungs, int dist) {
    int res = (rungs[0] - 1) / dist;
    for (int i = 1; i < rungs.size(); ++i)
        res += (rungs[i] - rungs[i - 1] - 1) / dist;
    return res;
}
```
**Python 3**
```python
class Solution:
    def addRungs(self, rungs: List[int], dist: int) -> int:
        return sum((a - b - 1) // dist for a, b in zip(rungs, [0] + rungs))
```