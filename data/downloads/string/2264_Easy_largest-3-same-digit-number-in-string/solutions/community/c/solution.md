# Compare with 2 previous

**Author:** votrubac
**Votes:** 77
**Link:** [https://leetcode.com/problems/largest-3-same-digit-number-in-string/solutions/2017786/](https://leetcode.com/problems/largest-3-same-digit-number-in-string/solutions/2017786/)

---

**Python 3**
```python
class Solution:
    def largestGoodInteger(self, n: str) -> str:
        return max(n[i-2:i+1] if n[i] == n[i - 1] == n[i - 2] else "" for i in range(2, len(n)))
```
**C++**
```cpp
string largestGoodInteger(string num) {
    char res = 0;
    for(int i = 2; i < num.size(); ++i)
        if (num[i] == num[i - 1] && num[i] == num[i - 2])
            res = max(res, num[i]);
    return res == 0 ? "" : string(3, res);
}
```