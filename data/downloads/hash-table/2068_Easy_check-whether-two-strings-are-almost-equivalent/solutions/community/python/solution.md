# Counter Arithmetic

**Author:** votrubac
**Votes:** 26
**Link:** [https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/1576575/](https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/1576575/)

---

**Python 3**
Using counter arithmetic in Python. The subtraction does not go negative, so we need to do it both ways.

```python
class Solution:
    def checkAlmostEquivalent(self, w1: str, w2: str) -> bool:
		return all(v < 4 for v in ((Counter(w1) - Counter(w2)) + (Counter(w2) - Counter(w1))).values())
```

**C++**
```cpp
bool checkAlmostEquivalent(string w1, string w2) {
    int cnt[26] = {};
    for (int i = 0; i < w1.size(); ++i) {
        ++cnt[w1[i] - 'a'];
        --cnt[w2[i] - 'a'];
    }
    return all_of(begin(cnt), end(cnt), [](int cnt){ return abs(cnt) < 4; });
}
```