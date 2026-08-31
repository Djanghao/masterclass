# Two Loops

**Author:** votrubac
**Votes:** 68
**Link:** [https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/1823744/](https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/1823744/)

---

**Python**
```python
class Solution:
    def cellsInRange(self, s: str) -> List[str]:
        return [chr(c) + chr(r) for c in range(ord(s[0]), ord(s[3]) + 1) for r in range(ord(s[1]), ord(s[4]) + 1)]
```
**C++**
```cpp
vector<string> cellsInRange(string s) {
    vector<string> res;
    for (char c = s[0]; c <= s[3]; ++c)
        for (char r = s[1]; r <= s[4]; ++r)
            res.push_back({c, r});
    return res;
}
```