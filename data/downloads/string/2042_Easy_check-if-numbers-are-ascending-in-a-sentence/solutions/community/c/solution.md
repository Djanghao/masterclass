# Track Previous and Current

**Author:** votrubac
**Votes:** 59
**Link:** [https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/1525381/](https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/1525381/)

---

**C++**
```cpp
bool areNumbersAscending(string s) {
    int prev = 0, cur = 0;
    for (auto ch : s) {
        if (isdigit(ch))
            cur = cur * 10 + (ch - '0');
        else if (cur != 0) {
            if (prev >= cur)
                return false;
            prev = cur;
            cur = 0;
        }
    }
    return cur == 0 || prev < cur;
}
```