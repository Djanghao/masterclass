# Structural pattern matching

**Author:** votrubac
**Votes:** 28
**Link:** [https://leetcode.com/problems/number-of-valid-clock-times/solutions/2706741/](https://leetcode.com/problems/number-of-valid-clock-times/solutions/2706741/)

---

Minutes are easy. For hours, we there could be be 1, 2, 3, 4, 10 or 24 combinations.

**Python 3**
Just for fun - using structural pattern matching.
```python
class Solution:
    def countTime(self, t: str) -> int:
        mm = (6 if t[3] == '?' else 1) * (10 if t[4] == '?' else 1)
        match [t[0], t[1]]:
            case ('?', '?'):
                return mm * 24
            case ('?', ('0' | '1' | '2' | '3')):
                return mm * 3
            case ('?', _):
                return mm * 2
            case (('0' | '1'), '?'):
                return mm * 10
            case (_, '?'):
                return mm * 4
        return mm
```

**C++**
```cpp
int countTime(string t) {
    int res = 1;
    if (t[0] == '?')
        res = t[1] == '?' ? 24 : t[1] < '4' ? 3 : 2;
    else if (t[1] == '?')
        res = t[0] < '2' ? 10 : 4; 
    return res * (t[3] == '?' ? 6 : 1) * (t[4] == '?' ? 10 : 1);
}
```