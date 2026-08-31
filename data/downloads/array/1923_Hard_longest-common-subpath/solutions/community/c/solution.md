# Rolling Hash vs. Suffix Automation

**Author:** votrubac
**Votes:** 63
**Link:** [https://leetcode.com/problems/longest-common-subpath/solutions/1314826/](https://leetcode.com/problems/longest-common-subpath/solutions/1314826/)

---

I saw the rolling hash solution right away, but I got confused by the problem constraints. It somehow felt that rolling hash would be still too slow.

> I tried to eliminate numbers that do not appear in every path. It got quite complicated and did not make it faster in the end...

Anyways, the rolling hash solution below works quite fast.

> Update: added two solutions based on the suffix automation, and the runtime for the last one is 272 ms!!

The idea is that, if we can find a subpath with length `k`, we can find a subpath with any length less than `k`. So, we can use a binary search to search for the maximum subpath length. To do that in O(n) for each string, we use a rolling hash approach. Collisions are possible, therefore we need to check the actual paths. In the solution below, we just pick hashing parameters to avoid collisions. Note that it may not work if new test cases are added afterwards.

> Update: see the solution with collision check below.

#### Rolling Hash
**C++**
```cpp
int longestCommonSubpath(int n, vector<vector<int>>& ps) {
    int l = 0, r = min_element(begin(ps), end(ps), [](const auto& a, const auto &b){ return a.size() < b.size(); })->size();
    long long base = 100001, mod = 100000000019;
    while (l < r) {
        int m = (l + r + 1) / 2;
        unordered_set<long long> hs;
        for (int i = 0; i < ps.size() && (i == 0 || !hs.empty()); ++i) {
            long long hash = 0, d = 1;
            unordered_set<long long> hs1;
            for (int j = 0; j < ps[i].size(); ++j) {
                hash = (hash * base + ps[i][j]) % mod;
                if (j >= m)
                    hash = (mod + hash - d * ps[i][j - m] % mod) % mod;
                else
                    d = d * base % mod;    
                if (j >= m - 1 && (i == 0 || hs.count(hash)))
                    hs1.insert(hash);
            }
            swap(hs, hs1);
        }
        if (hs.empty())
            r = m - 1;
        else
            l = m;            
    }
    return l;
}
```

##### Rolling Hash + Collision Check
For each hash, we store position of the subpath for the *first* friend. When there is a hash match, we compare two subpaths from the respectful positions. Note that we need to avoid copying subpaths as it will result in TLE.
**C++**
```cpp
int longestCommonSubpath(int n, vector<vector<int>>& ps) {
    int l = 0, r = min_element(begin(ps), end(ps), [](const auto& a, const auto &b){ return a.size() < b.size(); })->size();
    int base = 100001, mod = 1000000007;
    while (l < r) {
        int m = (l + r + 1) / 2;
        unordered_map<int, vector<int>> hs;
        for (int i = 0; i < ps.size() && (i == 0 || !hs.empty()); ++i) {
            long long hash = 0, d = 1;
            unordered_map<int, vector<int>> hs1;
            for (int j = 0; j < ps[i].size(); ++j) {
                hash = (hash * base + ps[i][j]) % mod;
                if (j >= m)
                    hash = (mod + hash - d * ps[i][j - m] % mod) % mod;
                else
                    d = d * base % mod;    
                if (j >= m - 1) {
                    if (i == 0)
                        hs1[hash].push_back(j + 1 - m);
                    else
                        if (hs.count(hash))
                            for (auto pos : hs[hash])
                                if (equal(begin(ps[0]) + pos, begin(ps[0]) + pos + m, begin(ps[i]) + j + 1 - m)) {
                                    hs1[hash].push_back(pos);
                                    break;
                                }
                }
            }
            swap(hs, hs1);
        }
        if (hs.empty())
            r = m - 1;
        else
            l = m;            
    }
    return l;
}
```
#### Suffix Automation
This approach  is described in the [Suffix Automaton](https://cp-algorithms.com/string/suffix-automaton.html) article. The `sa_extend` function is also copied from that article.

We build the suffix automation based on the first path. This allows us to identify common subpaths between the first and the second paths. We copy each subpath into the `next` array, separated by a special character. 

Then, we re-build the suffix automation using the `next` array. That way, our automation will contain only common subpaths. 

Finally, we repeat this for the remaining paths. In the end, our `next` array will contain subpaths common among all paths.

**C++**
```cpp
struct state {
    int len = 0, link = -1;
    unordered_map<int, int> next;
};
void sa_extend(vector<state> &st, int c, int &sz, int &last) const {
    int cur = sz++;
    st[cur].len = st[last].len + 1;
    int p = last;
    while (p != -1 && !st[p].next.count(c)) {
        st[p].next[c] = cur;
        p = st[p].link;
    }
    if (p == -1) {
        st[cur].link = 0;
    } else {
        int q = st[p].next[c];
        if (st[p].len + 1 == st[q].len) {
            st[cur].link = q;
        } else {
            int clone = sz++;
            st[clone].len = st[p].len + 1;
            st[clone].next = st[q].next;
            st[clone].link = st[q].link;
            while (p != -1 && st[p].next[c] == q) {
                st[p].next[c] = clone;
                p = st[p].link;
            }
            st[q].link = st[cur].link = clone;
        }
    }
    last = cur;
}
vector<state> sa_build(vector<int> &v) const {
    vector<state> st(v.size() * 2);
    int sz = 1, last = 0;
    for (auto n :  v)
        sa_extend(st, n, sz, last);
    return st;
}    
int longestCommonSubpath(int n, vector<vector<int>>& paths) {
    auto st = sa_build(paths[0]);
    int res = 0;
    for (int i = 1; i < paths.size(); ++i) {
        vector<int> next;
        int v = 0, l = 0;    
        for (int j = 0; j <= paths[i].size(); ++j) {
            if (j == paths[i].size() || !st[v].next.count(paths[i][j])) {
                if (i == paths.size() - 1)
                    res = max(res, l);
                else {
                    next.insert(end(next), begin(paths[i]) + j - l, begin(paths[i]) + j);
                    next.push_back(100001);
                }
            }
            while (j < paths[i].size() && v && !st[v].next.count(paths[i][j])) {
                v = st[v].link;
                l = st[v].len;
            }
            if (j < paths[i].size() && st[v].next.count(paths[i][j])) {
                v = st[v].next[paths[i][j]];
                l++;
            }
        }
        st = sa_build(next);
    }
    return res;
}
```
#### Suffix Automation + Counting
The solution above was easier for me to understand, but it's slower than the counting solution proposed by [zhanhb](https://leetcode.com/problems/longest-common-subpath/discuss/1314843/Suffix-automaton-solution-(multiple-languages)).

The idea is to process each path using the same automata. For each node, we track the maximum length of the substring (`cnt`). After processing all paths, we pick the minimum substring length for each node. The result is the largest minimum length among all nodes.

One caveat here is that we need to back-fill `cnt` for all nodes in the suffix link path. You need to understand how the automaton works to realize why we need this back-fill. It was helpful for me to look at automata example graphs. If I am to offer an explanation; if we reach a node `a -> b-> c`, we can also reach nodes in path `b -> c`. This shorter path is accessible through suffix links. So, we need to mark that shorter path as traversed by assigning the corresponding lengths to `cnt`.

**C++**
```cpp
struct state {
    int len = 0, link = -1;
    unordered_map<int, int> next;
};
void sa_extend(vector<state> &st, int c, int &sz, int &last) const {
    int cur = sz++;
    st[cur].len = st[last].len + 1;
    int p = last;
    while (p != -1 && !st[p].next.count(c)) {
        st[p].next[c] = cur;
        p = st[p].link;
    }
    if (p == -1) {
        st[cur].link = 0;
    } else {
        int q = st[p].next[c];
        if (st[p].len + 1 == st[q].len) {
            st[cur].link = q;
        } else {
            int clone = sz++;
            st[clone].len = st[p].len + 1;
            st[clone].next = st[q].next;
            st[clone].link = st[q].link;
            while (p != -1 && st[p].next[c] == q) {
                st[p].next[c] = clone;
                p = st[p].link;
            }
            st[q].link = st[cur].link = clone;
        }
    }
    last = cur;
}
int longestCommonSubpath(int n, vector<vector<int>>& paths) {
    nth_element(begin(paths), begin(paths), end(paths), [](const auto& a, const auto &b){ return a.size() < b.size(); });
    vector<state> st(paths[0].size() * 2);
    int sz = 1, last = 0;
    for (auto n :  paths[0])
        sa_extend(st, n, sz, last);
    vector<int> m_cnt(st.size(), INT_MAX), cnt(st.size());
    for (int i = 1; i < paths.size(); ++i) {
        for (int j = 0, v = 0, l = 0; j < paths[i].size(); ++j) {
            while (v && !st[v].next.count(paths[i][j])) {
                v = st[v].link;
                l = st[v].len;
            }
            if (st[v].next.count(paths[i][j])) {
                v = st[v].next[paths[i][j]];
                cnt[v] = max(cnt[v], ++l);
                for (int sv = st[v].link; sv && cnt[sv] < st[sv].len; sv = st[sv].link)
                    cnt[sv] = st[sv].len;
            }
        }
        transform(begin(m_cnt), end(m_cnt), begin(cnt), begin(m_cnt), [](int a, int b) { return min(a, b); });
        if (i != paths.size() - 1)
            fill(begin(cnt), end(cnt), 0);
    }
    return max(0, *max_element(begin(m_cnt), end(m_cnt)));
}
```