# Hashmap O(n * 30)

**Author:** votrubac
**Votes:** 36
**Link:** [https://leetcode.com/problems/substring-xor-queries/solutions/3174035/](https://leetcode.com/problems/substring-xor-queries/solutions/3174035/)

---

This looks like O(n * n), but since queries are integers, it is O(n * 30). We process each substring, and add it's value to a hashmap with {i, j} as a value.

When we process queries, we look for the `q[0] ^ q[1]` value in the hashmap (since `q[0] ^ q[0] ^ q[1] == q[1]`).

> Check out the alternative solution below where we reverse these steps.

Caveats:
- We skip substrings starting with `0` so that we store shortest substrings for each value.
- We map the very first substring to a value (so that we store minimum `left_i`).
- We need a special handing for `0` value - we map it to `{i, i}`, where `i` is the smallest index when `s[i] == '0'`.

**Python 3**
```python
class Solution:
    def substringXorQueries(self, s: str, queries: List[List[int]]) -> List[List[int]]:
        m = defaultdict(lambda: [-1, -1])
        for i, ch in enumerate(s):
            val = 0
            for j in range(i, min(i + 30, len(s))):
                val = val * 2 + ord(s[j]) - ord("0")
                if val not in m:
                    m[val] = [i, j]
                if ch == "0":
                    break
        return [m[f ^ s] for f, s in queries] 
```

**C++**
```cpp
vector<vector<int>> substringXorQueries(string s, vector<vector<int>>& queries) {
    unordered_map<int, vector<int>> m;
    vector<vector<int>> res;
    for (int i = 0; i < s.size(); ++i) {
        long long val = 0;
        for (int j = i; j < min(i + 30, (int)s.size()); ++j) {
            val = (val << 1) + (s[j] == '1');
            if (m.count(val) == 0)
                m[val] = {i, j};
            if (s[i] == '0')
                break;
        }
    }
    for (const auto &q : queries)
        if (auto it = m.find(q[0] ^ q[1]); it != end(m))
            res.push_back(it->second);
        else
            res.push_back({-1, -1});
    return res;
}
```
## Alternative Solution
Instead of adding all values we can get from the string, we add values from queries.

Then, we build values from the string, and check if a value is the one we need for a query.

> This approach would be beneficial if the string is large, and the number of queried values is not that big. 

Note that we remove the matching value from a hashmap, so that it won\u2019t be processed again, and the result is populated with the string with smallest `left_i`.

**C++**
```cpp
vector<vector<int>> substringXorQueries(string s, vector<vector<int>>& qs) {
    vector<vector<int>> res(qs.size(), {-1, -1});
    unordered_map<int, vector<int>> m;
    for (int i = 0; i < qs.size(); ++i)
        m[qs[i][0] ^ qs[i][1]].push_back(i);
    for (int i = 0; i < s.size(); ++i) {
        long long val = 0;
        for (int sz = 0; sz < 30 && i + sz < s.size(); ++sz) {
            val = (val << 1) + (s[i + sz] == '1');
            if (auto it = m.find(val); it != end(m)) {
                for (auto idx : it->second)
                    res[idx] = {i, i + sz};
                m.erase(it);
            }
            if (s[i] == '0')
                break;
        }
    }
    return res;
}
```