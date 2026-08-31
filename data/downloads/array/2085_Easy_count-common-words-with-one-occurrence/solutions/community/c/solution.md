# Single Hash Map

**Author:** votrubac
**Votes:** 100
**Link:** [https://leetcode.com/problems/count-common-words-with-one-occurrence/solutions/1599300/](https://leetcode.com/problems/count-common-words-with-one-occurrence/solutions/1599300/)

---

**C++**
```cpp
int countWords(vector<string>& words1, vector<string>& words2) {
    unordered_map<string, int> m;
    for (auto &w : words1)
        ++m[w];
    for (auto &w : words2)
        if (m[w] < 2)
            --m[w];
    return count_if(begin(m), end(m), [](const auto &p){ return p.second == 0; });

}
```