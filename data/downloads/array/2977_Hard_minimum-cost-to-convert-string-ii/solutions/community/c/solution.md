# Floyd-Warshall + DP

**Author:** votrubac
**Votes:** 12
**Link:** [https://leetcode.com/problems/minimum-cost-to-convert-string-ii/solutions/4449518/](https://leetcode.com/problems/minimum-cost-to-convert-string-ii/solutions/4449518/)

---

~~This is super slow and verbose solution, will clean it up.~~

Optimized map lookups, which improved the runtime from 1000 to 360 ms.

We use Floyd-Warshall to find the cheapest transtion from a substring to another substring.

This time, however, we need to do it independently for each substring size.

Then we run DFS with memoisation. For each `i`, we enumerate all possible substring sizes, and check if we can change a source substring to a target substring.

**C++**
```cpp
long long dp[1001], max_cost = 1000LL * 100LL * 1000000LL;
class Solution {
public:
unordered_map<int, unordered_set<string>> sz_tokens;
unordered_map<string, unordered_map<string, long long>> m;
long long dfs(int i, string &s, string &t) {
    if (i >= s.size())
        return 0;
    if (dp[i] == -1) {
        dp[i] = max_cost + 1;    
        if (s[i] == t[i])
            dp[i] = dfs(i + 1, s, t);
        for (auto &[sz, _] : sz_tokens)
            if (i + sz <= s.size())
                if (auto its = m.find(s.substr(i, sz)); its != end(m))
                    if (auto itt = its->second.find(t.substr(i, sz)); itt != end(its->second))
                        dp[i] = min(dp[i], itt->second + dfs(i + sz, s, t));                
    }
    return dp[i];
}    
long long minimumCost(string source, string target, vector<string>& original, vector<string>& changed, vector<int>& cost) {
    fill(begin(dp), begin(dp) + source.size() + 1, -1);
    for (int i = 0; i < original.size(); ++i) {
        sz_tokens[original[i].size()].insert(original[i]);
        auto &mo = m[original[i]];
        if (auto it = mo.find(changed[i]); it != end(mo))
            it->second = min(it->second, (long long)cost[i]);
        else
            mo[changed[i]] = cost[i];
    }
    for (auto &[sz, tokens] : sz_tokens)
        for (auto &k : tokens)
            for (auto &i : tokens)
                if (auto &mi = m[i]; mi.count(k))
                    for (auto &[j, mk_j] : m[k]) {
                        if (mi.count(j) == 0)
                            mi[j] = max_cost + 1;
                        mi[j] = min(mi[j], mi[k] + mk_j);
                    }
    long long res = dfs(0, source, target);
    return res > max_cost ? -1 : res;
}
```