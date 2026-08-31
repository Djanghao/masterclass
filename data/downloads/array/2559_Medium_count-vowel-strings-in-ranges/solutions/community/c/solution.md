# Prefix Sum

**Author:** votrubac
**Votes:** 16
**Link:** [https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/3143721/](https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/3143721/)

---

**C++**
```cpp
vector<int> vowelStrings(vector<string>& ws, vector<vector<int>>& queries) {
    unordered_set<char> vw({'a', 'e', 'i', 'o', 'u'});
    vector<int> ps(1), res;
    for (const auto &w : ws)
        ps.push_back(ps.back() + (vw.count(w.front()) && vw.count(w.back())));
    for (const auto &q : queries)
        res.push_back(ps[q[1] + 1] - ps[q[0]]);
    return res;  
}
```