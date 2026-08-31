# Check one-by-one

**Author:** votrubac
**Votes:** 21
**Link:** [https://leetcode.com/problems/odd-string-difference/solutions/2756419/](https://leetcode.com/problems/odd-string-difference/solutions/2756419/)

---

No need to build difference arrays for each string.

We can an odd string by looking at one difference at a time.

**C++**
```cpp
string oddString(vector<string>& ws) {
    for (int j = 0; j + 1 < ws[0].size(); ++j) {
        unordered_map<int, vector<int>> m;
        for (int i = 0; i < ws.size(); ++i)
            m[ws[i][j + 1] - ws[i][j]].push_back(i);
        if (m.size() == 2)
            return ws[begin(m)->second.size() == 1 ? begin(m)->second.back() : next(begin(m))->second.back()];
    }
    return ws[0];
}
```
#### O(1) Memory
**C++**
```cpp
string oddString(vector<string>& ws) {
    for (int j = 0; j + 1 < ws[0].size(); ++j) {
        unordered_map<int, vector<int>> m;
        for (int i = 0; i < ws.size(); ++i)
            if (m[ws[i][j + 1] - ws[i][j]].size() < 2)
                m[ws[i][j + 1] - ws[i][j]].push_back(i);
        if (m.size() == 2)
            return ws[begin(m)->second.size() == 1 ? begin(m)->second.back() : next(begin(m))->second.back()];
    }
    return ws[0];
}
```