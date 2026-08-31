# Two Pointers

**Author:** votrubac
**Votes:** 25
**Link:** [https://leetcode.com/problems/clear-digits/solutions/5280576/](https://leetcode.com/problems/clear-digits/solutions/5280576/)

---

The resulting strings will not contain any digits.

So, when we see a digit, we simply remove the last character from the resulting string.

**C++**
```cpp
string clearDigits(string s) {
    string res;
    for (char ch : s)
        if (isdigit(ch))
            res.pop_back();
        else
            res += ch;
    return res;
}
```

### Two Pointers
We can reuse the input string using the two-pointers technique.
**C++**
```cpp
string clearDigits(string s) {
    int j = 0;
    for (int i = 0; i < s.size(); ++i)
        if (isdigit(s[i]))
            --j;
        else
            s[j++] = s[i];
    return s.substr(0, j);
}
```