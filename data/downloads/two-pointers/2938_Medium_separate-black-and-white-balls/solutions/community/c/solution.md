# Two Pointers vs. Counter

**Author:** votrubac
**Votes:** 49
**Link:** [https://leetcode.com/problems/separate-black-and-white-balls/solutions/4304301/](https://leetcode.com/problems/separate-black-and-white-balls/solutions/4304301/)

---

Two solutions are identical, but **Counter** could be easier to undertand.

## Counter
As we go left-to-right, we count ones using `cnt`.

When we see a zero, we need `cnt` swaps to move it in front `cnt` ones.

**C++**
```cpp
long long minimumSteps(const string &s) {
    long long res = 0;
    for (int i = 0, cnt = 0; i < s.size(); ++i) {
        if (s[i] == '1')
            ++cnt;
        else
            res += cnt;
    }
    return res;
}
```
## Two Pointers
**C++**
```cpp
long long minimumSteps(const string &s) {
    long long res = 0;
    for (int i = 0, j = 0; i < s.size(); ++i)
        if (s[i] == '0')
            res += i - (j++);
    return res;
}
```