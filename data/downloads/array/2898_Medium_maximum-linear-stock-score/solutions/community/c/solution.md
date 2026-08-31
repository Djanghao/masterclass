# prices[i] - i

**Author:** votrubac
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-linear-stock-score/solutions/4158556/](https://leetcode.com/problems/maximum-linear-stock-score/solutions/4158556/)

---

All elements in a subsequence must have the same `prices[i] - i` value.

**C++**
```cpp
long long maxScore(vector<int>& prices) {
    unordered_map<int, long long> m;
    for (int i = 0; i < prices.size(); ++i)
        m[prices[i] - i] += prices[i];
    return max_element(begin(m), end(m), [](const auto &p1, const auto &p2){
        return p1.second < p2.second; })->second;
}
```