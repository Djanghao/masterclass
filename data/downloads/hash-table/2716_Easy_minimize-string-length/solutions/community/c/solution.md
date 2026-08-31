# Hashset

**Author:** votrubac
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimize-string-length/solutions/3594946/](https://leetcode.com/problems/minimize-string-length/solutions/3594946/)

---

We can remove all occurances of `c` except the last one.

**Python 3**
```python
class Solution:
    def minimizedStringLength(self, s: str) -> int:
        return len({*s})
```

**C++**
```cpp
int minimizedStringLength(string s) {
    return unordered_set(begin(s), end(s)).size();
}
```