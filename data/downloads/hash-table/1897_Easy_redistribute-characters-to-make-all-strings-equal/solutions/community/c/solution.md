# Count

**Author:** votrubac
**Votes:** 41
**Link:** [https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/solutions/1268558/](https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/solutions/1268558/)

---

**C++**
```cpp
bool makeEqual(vector<string>& words) {
    int cnt[26] = {};
    for (auto &w : words)
        for (auto ch : w)
            ++cnt[ch - 'a'];
    return all_of(begin(cnt), end(cnt), [&](int c) { return c % words.size() == 0; });
}
```