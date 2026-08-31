# Minus 49

**Author:** votrubac
**Votes:** 27
**Link:** [https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/solutions/1241968/](https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/solutions/1241968/)

---

Replace letters with corresponding numbers, and then use a standard string-to-number conversion.

> `'a' - '0' == 49`.

**C++**
```cpp
bool isSumEqual(string first, string second, string target) {
    auto op = [](string &s) { for(auto &ch : s) ch -= 49; return s; };
    return stoi(op(first)) + stoi(op(second)) == stoi(op(target));
}
```

**Python 3**
```python
class Solution:
    def isSumEqual(self, first: str, second: str, target: str) -> bool:
        def op(s: str): return "".join(chr(ord(ch) - 49) for ch in s)
        return int(op(first)) + int(op(second)) == int(op(target))
```