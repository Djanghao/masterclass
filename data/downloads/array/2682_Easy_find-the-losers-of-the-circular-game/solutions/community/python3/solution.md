# Simulation

**Author:** votrubac
**Votes:** 26
**Link:** [https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/3522190/](https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/3522190/)

---

We pre-populate the result array with all numbers, and set a number to zero once visited.

After the simulation, we return remaining non-zero numbers.

**Python 3**
```python
class Solution:
    def circularGameLosers(self, n: int, k: int) -> List[int]:
        s = set([i for i in range(1, n + 1)])
        for mul in accumulate([i for i in range(n)]):
            if k * mul % n + 1 not in s:
                break
            s.remove(k * mul % n + 1)
        return s
```

**C++**
``` cpp
vector<int> circularGameLosers(int n, int k) {
    vector<int> res(n);
    iota(begin(res), end(res), 1);
    for (int cur = 0, mul = 1; res[cur]; ++mul) {
        res[cur] = 0;
        cur = (cur + mul * k) % n;
    }
    res.erase(remove(begin(res), end(res), 0), end(res));
    return res;
}
```