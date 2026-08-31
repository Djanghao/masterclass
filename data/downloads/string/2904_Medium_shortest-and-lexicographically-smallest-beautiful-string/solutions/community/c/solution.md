# Sliding Window

**Author:** votrubac
**Votes:** 9
**Link:** [https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/solutions/4169951/](https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/solutions/4169951/)

---

Nothing special, just optimize to not to create temporary strings.

**C++**
```cpp
string shortestBeautifulSubstring(const string &s, int k) {
    int ri = s.size() - 1, rj = 0;
    for (int i = 0, j = 0; i < s.size(); ++i) {
        k -= s[i] == '1';
        while (k < 0 || s[j] == '0')
            k += s[j++] == '1';
        if (k == 0 && ri - rj >= i - j)
            if (ri - rj > i - j || (ri - rj == i - j && 
                s.compare(j, i - j + 1, s, rj, ri - rj + 1) < 0)) {
                ri = i;
                rj = j;
            }
    }
    return k == 0 ? s.substr(rj, ri - rj + 1) : "";
}
```