# Accumulate

**Author:** votrubac
**Votes:** 18
**Link:** [https://leetcode.com/problems/armstrong-number/solutions/344859/](https://leetcode.com/problems/armstrong-number/solutions/344859/)

---

**Python**
```python
class Solution:
    def isArmstrong(self, n: int) -> bool:
        return sum((ord(ch) - ord('0')) ** int(log10(n) + 1) for ch in str(n)) == n
```

**C++**
```cpp
bool isArmstrong(int n) {
    auto s = to_string(n);
    return accumulate(begin(s), end(s), 0, [sz = s.size()](int sum, char ch)
                      { return sum + pow(ch - '0', sz);}) == n;
}
```