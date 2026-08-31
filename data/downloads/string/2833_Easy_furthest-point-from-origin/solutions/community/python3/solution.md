# count('_') + abs(count('R') - count(count('L'))

**Author:** votrubac
**Votes:** 17
**Link:** [https://leetcode.com/problems/furthest-point-from-origin/solutions/3965195/](https://leetcode.com/problems/furthest-point-from-origin/solutions/3965195/)

---

**Python 3**
```python
class Solution:
    def furthestDistanceFromOrigin(self, m: str) -> int:
        return m.count('_') + abs(m.count('R') - m.count('L'))
```
**C++**
Verbose one-pass version.
```cpp
int furthestDistanceFromOrigin(string moves) {
    int bal = 0, wild = 0;
    for (char ch : moves) {
        bal += ch == 'L' ? -1 : ch == 'R' ? 1 : 0;
        wild += ch == '_';
    }
    return wild + abs(bal);
}
```