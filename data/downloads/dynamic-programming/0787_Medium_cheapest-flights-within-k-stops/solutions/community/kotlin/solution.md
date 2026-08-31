# 🎨  The ART of Dynamic Programming

**Author:** claytonjwong
**Votes:** 6
**Link:** [https://leetcode.com/problems/cheapest-flights-within-k-stops/solutions/690997/](https://leetcode.com/problems/cheapest-flights-within-k-stops/solutions/690997/)

---

[\uD83C\uDFA8  The ART of Dynamic Programming:](https://leetcode.com/discuss/general-discussion/712010/The-ART-of-Dynamic-Programming-An-Intuitive-Approach%3A-from-Apprentice-to-Master) Perform Bellman-Ford to build current `cur` minimum distances from previous `pre` minimum distances via `K + 1` edge relaxations for the single-source-shortest-paths for `K` hops to find the minimum distance from source `S` to target `T` (if it exists), ie. we use the past to formulate the future.

---

*Kotlin*
```
class Solution {
    fun findCheapestPrice(N: Int, E: Array<IntArray>, S: Int, T: Int, K: Int, INF: Int = (1e9 + 7).toInt()): Int {
        var pre = IntArray(N) { INF }; pre[S] = 0
        for (i in 0..K) {
            var cur = pre.copyOf()
            for ((u, v, w) in E)
                cur[v] = Math.min(cur[v], pre[u] + w)
            pre = cur
        }
        return if (pre[T] != INF) pre[T] else -1
    }
}
```

*Javascript*
```
let findCheapestPrice = (N, E, S, T, K) => {
    let pre = Array(N).fill(Infinity); pre[S] = 0;
    while (0 <= K--) {
        let cur = [...pre];
        for (let [u, v, w] of E)
            cur[v] = Math.min(cur[v], pre[u] + w);
        pre = cur;
    }
    return pre[T] != Infinity ? pre[T] : -1;
};
```

*Python3*
```
class Solution:
    def findCheapestPrice(self, N: int, E: List[List[int]], S: int, T: int, K: int, INF = int(1e9 + 7)) -> int:
        pre = [INF] * N; pre[S] = 0
        for _ in range(K + 1):
            cur = pre[:]
            for u, v, w in E:
                cur[v] = min(cur[v], pre[u] + w)
            pre = cur
        return pre[T] if pre[T] != INF else -1
```

*Rust*
```
type VI = Vec<i32>;
type VVI = Vec<VI>;
use std::cmp::min;
impl Solution {
    pub fn find_cheapest_price(N: i32, E: VVI, S: i32, T: i32, K: i32) -> i32 {
        let (N, S, T) = (N as usize, S as usize, T as usize);
        let INF = 1e9 as i32 + 7;
        let mut pre = vec![INF; N]; pre[S] = 0;
        for _ in 0..=K {
            let mut cur = pre.clone();
            for edge in &E {
                let (u, v, w) = (edge[0] as usize, edge[1] as usize, edge[2]);
                cur[v] = min(cur[v], pre[u] + w);
            }
            pre = cur;
        }
        if pre[T] != INF { pre[T] } else { -1 }
    }
}
```

*C++*
```
class Solution {
public:
    using VI = vector<int>;
    using VVI = vector<VI>;
    int findCheapestPrice(int N, VVI& E, int S, int T, int K, int INF = 1e9 + 7) {
        VI pre(N, INF); pre[S] = 0;
        while (0 <= K--) {
            VI cur{ pre };
            for (auto& edge: E) {
                auto [u, v, w] = tie(edge[0], edge[1], edge[2]);
                cur[v] = min(cur[v], pre[u] + w);
            }
            swap(pre, cur);
        }
        return pre[T] != INF ? pre[T] : -1;
    }
};
```

---

**Past solutions from October 2, 2020**

**Solution #1:**

Perform DFS + BT to find the minimum `cost` from `start` to target `T`.  The `cost` of each DFS path explored is accumulated as the recursive stack approaches the base cases.

* **Base Cases:**
	* *Case 1:* we reached the target `T`, thus the minimum `cost` is recorded as the `best`
	* *Case 2:* all `k` hops are exhausted, simply `return` to allow the recursive stack to unwind and backtrack to the next DFS path to recursively explore.

*Javascript*
```
let findCheapestPrice = (_, E, start, T, hops, adj = new Map(), best = Infinity) => {
    E.forEach(([u, v, w]) => adj.set(u, (adj.get(u) || new Set()).add([v, w])));
    let go = (u = start, k = hops + 1, cost = 0, seen = new Set()) => {
        if (u == T)
            best = Math.min(best, cost); // best is the minimum cost \uD83C\uDFAF
        if (u == T || !k)
            return; // destination reached or k-hops exhausted: stop \uD83D\uDED1
        seen.add(u); // \uD83D\uDC40 \u2705 forward-tracking
        for (let [v, w] of [...adj.get(u) || []])
            if (!seen.has(v) && cost + w < best) // pruning condition: cost + w < best \uD83E\uDD14
                go(v, k - 1, cost + w, seen);
        seen.delete(u); // \uD83D\uDC40 \u274C back-tracking
    };
    go();
    return best < Infinity ? best : -1;
};
```

*C++*
```
class Solution {
    using VI = vector<int>;
    using VVI = vector<VI>;
    using Set = unordered_set<int>;
    using Adj = unordered_map<int, vector<tuple<int, int>>>;
    Adj adj;
    int T, best;
    void go(int u, int k, int cost = 0, Set&& seen = {}) {
        if (u == T)
            best = min(best, cost); // best is the minimum cost \uD83C\uDFAF
        if (u == T || !k)
            return; // target T destination reached or k-hops exhausted: stop \uD83D\uDED1
        seen.insert(u); // \uD83D\uDC40 \u2705 forward-tracking
        for (auto [v, w]: adj[u])
            if (seen.find(v) == seen.end() && cost + w < best) // pruning condition: cost + w < best \uD83E\uDD14
                go(v, k - 1, cost + w, move(seen));
        seen.erase(u); // \uD83D\uDC40 \u274C back-tracking
    }
public:
    int findCheapestPrice(int _, VVI& E, int start, int T_, int hops, int INF = int(1e9 + 7)) {
        T = T_;
        best = INF;
        for (auto& edge: E) {
            auto [u, v, w] = tie(edge[0], edge[1], edge[2]);
            adj[u].push_back({v, w});
        }
        go(start, hops + 1);
        return best < INF ? best : -1;
    }
};
```

---

**Solution #2:**

An astute observer will notice its obviously silly to perform DFS + BT.  Solution #1 is so very inefficient that a pruning condition is necessary to avoid TLE.  An improved DFS solution simply uses memoization to store previously solved sub-problems (ie. use dynamic programming).  The cost `w` of each edge (`u`,`v`) is accumulated as the recursive stack unwinds, and each sub-problem's optimal solution is stored in the memo `m`.

**Summary:**

[\uD83C\uDFA8 The **ART** of dynamic programming](https://leetcode.com/discuss/general-discussion/712010/the-art-of-dynamic-programming-an-intuitive-approach-from-apprentice-to-master/)

1. **A**ll possibilities are considered via brute-force top-down depth-first-search
2. **R**emember each subproblems' optimal solution via a DP memo
3. **T**urn the top-down solution upside-down to create the bottom-up solution

*Javascript*
```
let findCheapestPrice = (N, E, start, T, hops, adj = new Map()) => {
    let m = [...Array(N)].map(_ => Array(hops + 2).fill(-1)); // +2 because for V vertices there are V+1 edges and +1 for the memo itself to be 0..hops+1 inclusive
    E.forEach(([u, v, w]) => adj.set(u, (adj.get(u) || new Set()).add([v, w])));
    let go = (u = start, k = hops + 1, min = Infinity) => {
        if (m[u][k] > -1)
            return m[u][k]; // memo \uD83E\uDD14
        if (u == T)
            return m[u][k] = 0; // target T \uD83C\uDFAF
        if (!k)
            return m[u][k] = Infinity; // all k hops exhausted \u274C
        for (let [v, w] of [...adj.get(u) || []])
            min = Math.min(min, w + go(v, k - 1)); // dfs edge u -> v with cost w
        return m[u][k] = min;
    };
    return go() < Infinity ? go() : -1;
};
```

*C++*
```
class Solution {
    using VI = vector<int>;
    using VVI = vector<VI>;
    using Adj = unordered_map<int, vector<tuple<int, int>>>; // u -> [v, w] == edge u -> v with cost w
    Adj adj;
    int T;
    VVI m;
    static constexpr auto INF = int(1e9 + 7);
    int go(int u, int k, int min = INF) {
        if (m[u][k] > -1)
            return m[u][k]; // memo \uD83E\uDD14
        if (u == T)
            return m[u][k] = 0; // target T \uD83C\uDFAF
        if (!k)
            return m[u][k] = INF; // all k hops exhausted \u274C
        for (auto [v, w]: adj[u])
            min = std::min(min, w + go(v, k - 1)); // dfs edge u -> v with cost w
        return m[u][k] = min;
    }
public:
    int findCheapestPrice(int N, VVI& E, int start, int T_, int hops) {
        T = T_;
        m = VVI(N, VI(hops + 2, -1)); // +2 because for V vertices there are V+1 edges and +1 for the memo itself to be 0..hops+1 inclusive
        for (auto& edge: E) {
            auto [u, v, w] = tie(edge[0], edge[1], edge[2]);
            adj[u].push_back({v, w});
        }
        auto ans = go(start, hops + 1);
        return ans < INF ? ans : -1;
    }
};
```

---

**Solution #2 - Supplemental:** it may be easier to understand this DFS algorithm without the memo.  The memo might make this solution look scary at first glance, however, this solution is fundamentally simple and concise.

*Javascript*
```
let findCheapestPrice = (N, E, start, T, hops, adj = new Map()) => {
    E.forEach(([u, v, w]) => adj.set(u, (adj.get(u) || new Set()).add([v, w])));
    let go = (u = start, k = hops + 1, min = Infinity) => {
        if (u == T)
            return 0; // target T \uD83C\uDFAF
        if (!k)
            return Infinity; // all k hops exhausted \u274C
        for (let [v, w] of [...adj.get(u) || []])
            min = Math.min(min, w + go(v, k - 1)); // dfs edge u -> v with cost w
        return min;
    };
    return go() < Infinity ? go() : -1;
};
```

*C++*
```
class Solution {
    using VI = vector<int>;
    using VVI = vector<VI>;
    using Adj = unordered_map<int, vector<tuple<int, int>>>; // u -> [v, w] == edge u -> v with cost w
    Adj adj;
    int T;
    static constexpr auto INF = int(1e9 + 7);
    int go(int u, int k, int min = INF) {
        if (u == T)
            return 0; // target T \uD83C\uDFAF
        if (!k)
            return INF; // all k hops exhaused \u274C
        for (auto [v, w]: adj[u])
            min = std::min(min, w + go(v, k - 1)); // dfs edge u -> v with cost w
        return min;
    }
public:
    int findCheapestPrice(int _, VVI& E, int start, int T_, int hops) {
        T = T_;
        for (auto& edge: E) {
            auto [u, v, w] = tie(edge[0], edge[1], edge[2]);
            adj[u].push_back({v, w});
        }
        auto ans = go(start, hops + 1);
        return ans < INF ? ans : -1;
    }
};
```

---

**Solution #3:** Use [Bellman-Ford](https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm) to relax edges `u`,`v` of cost `w`

*Javascript*
```
let findCheapestPrice = (N, E, start, T, hops) => {
    let k = hops + 1;
    let pre = Array(N).fill(Infinity);
    pre[start] = 0;
    while (k--) { // relax all edges k times
        // bellman-ford: dist[v] = min(dist[v], dist[u] + w) ie. relax edge u,v of cost w
        // however, use previous and current to avoid overwritting our previous optimal edge relaxations
        // which we still need to read from in order to derive our current optimal edge relaxations for each k-th hop
        let cur = [...pre]; // derive current from previous \uD83E\uDD14 ie. update current optimal edge relaxations based upon previous optimal edge relaxations
        E.forEach(([u, v, w]) => cur[v] = Math.min(cur[v], pre[u] + w)); // relax all edges u,v of cost w for optimal distance to v \uD83C\uDFAF
        [pre, cur] = [cur, pre]; // persist current as previous via swap \uD83E\uDD14
    }
    return pre[T] < Infinity ? pre[T] : -1;
}
```

*C++*
```
class Solution {
public:
    using VI = vector<int>;
    using VVI = vector<VI>;
    int findCheapestPrice(int N, VVI& E, int start, int T, int hops, int INF = int(1e9 + 7)) {
        auto k = hops + 1;
        VI pre(N, INF);
        pre[start] = 0;
        while (k--) { // relax all edges k times
            // bellman-ford: dist[v] = min(dist[v], dist[u] + w) ie. relax edge u,v of cost w
            // however, use previous and current to avoid overwritting our previous optimal edge relaxations
            // which we still need to read from in order to derive our current optimal edge relaxations for each k-th hop
            auto cur{ pre }; // derive current from previous \uD83E\uDD14 ie. update current optimal edge relaxations based upon previous optimal edge relaxations
            for (auto& edge: E) {
                auto [u, v, w] = tie(edge[0], edge[1], edge[2]);
                cur[v] = min(cur[v], pre[u] + w); // relax all edges u,v of cost w for optimal distance to v \uD83C\uDFAF
            }
            swap(pre, cur); // persist current as previous via swap \uD83E\uDD14
        }
        return pre[T] < INF ? pre[T] : -1;
    }
};
```

---

**Solution #4:** [SPFA](https://en.wikipedia.org/wiki/Shortest_Path_Faster_Algorithm) is a natural progression from [Bellman-Ford](https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm).  Simply enqueue each current relaxed edge for each next k-th hop of edge relaxations.  And process each k-th hop per queue length.  Thus, we only relax *relevant* edges with SPFA rather than relaxing *all* edges with BF.  Since the code changes from BF to SPFA is straightforward, I've omitted comments in these solutions.

*Javascript*
```
let findCheapestPrice = (N, E, start, T, hops, adj = new Map()) => {
    E.forEach(([u, v, w]) => adj.set(u, (adj.get(u) || new Set()).add([v, w])));
    let k = hops + 1;
    let pre = Array(N).fill(Infinity);
    pre[start] = 0;
    let q = [ start ];
    while (k--) {
        let cur = [...pre];
        let len = q.length;
        while (len--) {
            let u = q.shift();
            for (let [v, w] of [...adj.get(u) || []])
                if (cur[v] > pre[u] + w)
                    cur[v] = pre[u] + w, q.push(v);
        }
        [pre, cur] = [cur, pre];
    }
    return pre[T] < Infinity ? pre[T] : -1;
}
```

*C++*
```
class Solution {
public:
    using VI = vector<int>;
    using VVI = vector<VI>;
    using Adj = unordered_map<int, vector<tuple<int, int>>>;
    int findCheapestPrice(int N, VVI& E, int start, int T, int hops, Adj adj = {}, int INF = int(1e9 + 7)) {
        for (auto& edge: E) {
            auto [u, v, w] = tie(edge[0], edge[1], edge[2]);
            adj[u].push_back({v, w});
        }
        auto k = hops + 1;
        VI pre(N, INF);
        pre[start] = 0;
        queue<int> q{{ start }};
        while (k--) {
            auto cur{ pre };
            int len = q.size();
            while (len--) {
                auto u = q.front(); q.pop();
                for (auto [v, w]: adj[u])
                    if (cur[v] > pre[u] + w)
                        cur[v] = pre[u] + w, q.push(v);                
            }
            swap(pre, cur);
        }
        return pre[T] < INF ? pre[T] : -1;
    }
};
```

---

# Supplemental: \uD83C\uDF5E "Breadcrumbs" for how we arrived "here" \uD83C\uDFAF for Feb 23<sup>rd</sup>, 2024 daily LC challenge

*Python3*
```
# 7:14am - 

# bellman-ford to relax edges K times

# 7:14am - implementation begins
# 7:16am - implementation ends - wrong answer for case 1 and case 3

# n =
# 4
# flights =
# [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]]
# src =
# 0
# dst =
# 3
# k =
# 1
# Output
# 400
# Expected
# 700

# class Solution:
#     def findCheapestPrice(self, N: int, E: List[List[int]], S: int, T: int, K: int, INF = int(1e9 + 7)) -> int:
#         dist = [INF] * N
#         dist[S] = 0
#         for _ in range(K):
#             print(f'before: {_}: {dist}')
#             for u, v, w in E:
#                 if dist[v] > dist[u] + w:
#                     dist[v] = dist[u] + w
#             print(f'after: {_}: {dist}')
#         return dist[T] if dist[T] < INF else -1

# oops, off by 1 error? and we need prevoius and current, right?

# 7:22am - AC, yay! ~8 minutes

class Solution:
    def findCheapestPrice(self, N: int, E: List[List[int]], S: int, T: int, K: int, INF = int(1e9 + 7)) -> int:
        pre = [INF] * N
        pre[S] = 0
        for _ in range(K + 1):
            cur = pre[:]
            for u, v, w in E:
                if cur[v] > pre[u] + w:
                    cur[v] = pre[u] + w
            pre = cur
        return pre[T] if pre[T] < INF else -1
```