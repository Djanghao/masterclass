# O(n)

**Author:** votrubac
**Votes:** 64
**Link:** [https://leetcode.com/problems/time-needed-to-buy-tickets/solutions/1577093/](https://leetcode.com/problems/time-needed-to-buy-tickets/solutions/1577093/)

---

We know the value of `k`-th element. Elements before `k` (and the element itself) will appear in the line `min(t[k], t[i])` times.

All elements after `k` will appear in the line  `min(t[k] - 1, t[i])` times.

**Python 3**
```python
class Solution:
    def timeRequiredToBuy(self, t: List[int], k: int) -> int:
        return sum(min(v, t[k] - (i > k)) for i, v in enumerate(t))
```

Alternative solution, matching the explanation above.
```python
class Solution:
    def timeRequiredToBuy(self, t: List[int], k: int) -> int:
        return sum([min(t[i], t[k]) for i in range(k + 1)] + [min(t[i], t[k] - 1) for i in range(k + 1, len(t))])
```
**Java**
```java
public int timeRequiredToBuy(int[] t, int k) {
    return IntStream.range(0, t.length).map(i -> Math.min(t[i], t[k] - (i > k ? 1 : 0))).sum();
}
```
**C++**
```cpp
int timeRequiredToBuy(vector<int>& t, int k) {
    int res = 0;
    for (int i = 0; i < t.size(); ++i)
        res += min(t[k] - (i > k), t[i]);
    return res;
}
```
Also a (slightly mouthful) functional version.
```cpp
int timeRequiredToBuy(vector<int>& t, int k) {
    return accumulate(begin(t), begin(t) + k + 1, 0, [&](int s, int v){ return s + min(v, t[k]); })
        + accumulate(begin(t) + k + 1, end(t), 0, [&](int s, int v){ return s + min(v, t[k] - 1); });
}
```