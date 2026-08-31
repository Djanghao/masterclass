# [C++] The Most Complicated Solution

**Author:** CelonyMire
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/solutions/2581576/](https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/solutions/2581576/)

---

```cpp
#define all(x) begin(x), end(x)
#define has(c, x) (c.find(x) != c.end())
#define vec vector
#define umap unordered_map
#define uset unordered_set
#define valid(i, j, m, n) (i >= 0 && i < m && j >= 0 && j < n)

template <typename T> T &amin(T &a, const T &b) { return a = min(a, b); }
template <typename T> T &amax(T &a, const T &b) { return a = max(a, b); }

using ll = long long;
using pii = pair<int, int>;
using pll = pair<ll, ll>;
using vi = vec<int>;
using vvi = vec<vec<int>>;
using vvvi = vec<vec<vec<int>>>;
using vl = vec<ll>;
using vvl = vec<vec<ll>>;
using vs = vec<string>;
using vvs = vec<vec<string>>;
using vpii = vec<pii>;
using vvpii = vec<vec<pii>>;
using tiii = tuple<int, int, int>;

constexpr int dx[] = {-1, 0, 0, 1, -1, -1, 1, 1};
constexpr int dy[] = {0, -1, 1, 0, -1, 1, -1, 1};
constexpr int MXN = (int)1e6;
constexpr int INF = (int)1e9 + 15;
constexpr ll INFL = ll(1e18) + 15;
constexpr double EPS = 1e-9;
constexpr int P = 31;
constexpr int P2 = 33;
constexpr int M = (int)1e9 + 7;
constexpr int M2 = (int)1e9 + 9;

struct dsu {
  vec<int> parent, rank;
  dsu(int n) : parent(n), rank(n, 1) {
    for (int i = 0; i < n; i++)
      parent[i] = i;
  }
  int find(int i) {
    if (parent[i] == i)
      return i;
    return parent[i] = find(parent[i]);
  }
  void unite(int i, int j) {
    if (find(i) != find(j)) {
      int repi = find(i);
      int repj = find(j);
      if (rank[repi] < rank[repj])
        swap(repi, repj);
      parent[repj] = repi;
      rank[repi] += int(rank[repi] == rank[repj]);
    }
  }
};

class Solution {
public:
  vector<string> maxNumOfSubstrings(string s) {
    int n = s.size();

    vpii intervals(26, {INF, -INF});
    vvi places(26);
    for (int i = 0; i < n; i++) {
      amin(intervals[s[i] - 'a'].first, i);
      amax(intervals[s[i] - 'a'].second, i);
      places[s[i] - 'a'].push_back(i);
    }

    set<pii> events;
    for (int i = 0; i < 26; i++) {
      if (intervals[i] != pii{INF, -INF}) {
        events.insert({intervals[i].first, 0});
        events.insert({intervals[i].second, 1});
      }
    }

    dsu ds(26);
    vi ongoing(26);
    for (auto [i, type] : events) {
      if (type == 1) {
        for (int j = 0; j < 26; j++) {
          if (!ongoing[j] || s[i] - 'a' == j) {
            continue;
          }

          auto lo = lower_bound(all(places[j]), intervals[s[i] - 'a'].first);
          auto hi = lower_bound(all(places[j]), intervals[s[i] - 'a'].second);
          if (lo != hi) {
            ds.unite(s[i] - 'a', j);
          }
        }
        ongoing[s[i] - 'a'] = false;
      } else {
        ongoing[s[i] - 'a'] = true;
      }
    }

    vi mi(26, INF), ma(26, -INF);
    for (int i = 0; i < 26; i++) {
      if (intervals[i] != pii{INF, -INF}) {
        amin(mi[ds.find(i)], intervals[i].first);
        amax(ma[ds.find(i)], intervals[i].second);
      }
    }

    set<pii> merged_intervals;
    for (int i = 0; i < 26; i++) {
      if (intervals[i] != pii{INF, -INF}) {
        merged_intervals.insert({mi[ds.find(i)], ma[ds.find(i)]});
      }
    }
    merged_intervals.insert({INF, INF});

    vvpii res(28, vpii(n + 10));
    auto cmp = [](auto &a, auto &b) {
      if (a.first != b.first) {
        return a.first < b.first;
      }
      return a.second > b.second;
    };
    auto cmp2 = [](auto &a, auto &b) {
      if (get<0>(a) != get<0>(b)) {
        return get<0>(a) > get<0>(b);
      }
      if (get<1>(a) != get<1>(b)) {
        return get<1>(a) < get<1>(b);
      }
      return get<2>(a) > get<2>(b);
    };
    priority_queue join{cmp, vpii{}};
    priority_queue upto{cmp2, vec<tiii>{}};
    join.push({0, 0});
    for (auto [l, r] : merged_intervals) {
      while (!upto.empty() && get<0>(upto.top()) < l) {
        auto [end, amount, len] = upto.top();
        upto.pop();
        join.push({amount, len});
      }

      auto [amount, len] = join.top();
      res[amount + 1][len + (r - l + 1)] = {l, r};
      upto.push({r, amount + 1, len + (r - l + 1)});
    }

    vs ans;
    auto [amount, len] = join.top();
    while (true) {
      auto [l, r] = res[amount][len];
      ans.push_back(s.substr(l, r - l + 1));

      amount -= 1;
      len -= r - l + 1;
      if (amount == 0) {
        break;
      }
    }
    return ans;
  }
};
```