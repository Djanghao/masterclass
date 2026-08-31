# Two Approaches

**Author:** votrubac
**Votes:** 20
**Link:** [https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/2977336/](https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/2977336/)

---

We can extract each digit using the modulo/division technique, or just convert `num` to a string.

## Modulo
**C++**
```cpp
int countDigits(int num) {
    int res = 0;
    for (int n = num; n > 0; n /= 10)
        res += num % (n % 10) == 0;
    return res;
}
```
## Convert to String
**Python 3**
```python
class Solution:
    def countDigits(self, num: int) -> int:
        return sum(1 if num % int(d) == 0 else 0 for d in str(num))
```
**C++**
```cpp
int countDigits(int num) {
    auto s = to_string(num);
    return accumulate(begin(s), end(s), 0, [&](int res, char ch){ 
        return res + (num % (ch - '0') == 0);
    });
}
```