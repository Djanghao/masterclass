# 1-liner

**Author:** votrubac
**Votes:** 47
**Link:** [https://leetcode.com/problems/percentage-of-letter-in-string/solutions/2061845/](https://leetcode.com/problems/percentage-of-letter-in-string/solutions/2061845/)

---

**C++**
```cpp
int percentageLetter(string s, char letter) {
    return 100 * count(begin(s), end(s), letter) / s.size();
}
```