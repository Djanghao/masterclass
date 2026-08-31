# Search for rightmost odd digit

**Author:** votrubac
**Votes:** 93
**Link:** [https://leetcode.com/problems/largest-odd-number-in-string/solutions/1284313/](https://leetcode.com/problems/largest-odd-number-in-string/solutions/1284313/)

---

**C++**
```cpp
string largestOddNumber(string num) {
    for (int i = num.size() - 1; i >= 0; --i)
        if ((num[i] - '0') % 2)
            return num.substr(0, i + 1);
    return string();
}
```
and a one-liner...
**C++**
```cpp
string largestOddNumber(string n) {
    return n.substr(0, n.find_last_of("13579") + 1);
}
```