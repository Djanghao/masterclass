# a few solutions

**Author:** claytonjwong
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-walk-in-weighted-graph/solutions/5116900/](https://leetcode.com/problems/minimum-cost-walk-in-weighted-graph/solutions/5116900/)

---

# Game Plan

# Code

*Koltin*
```
class Solution {
    fun minimumCost(N: Int, E: Array<IntArray>, query: Array<IntArray>): IntArray {
        var adj = Array(N){ mutableListOf<Pair<Int, Int>>() }
        for ((u, v, w) in E) {
            adj[u].add(Pair(v, w))
            adj[v].add(Pair(u, w))
        }
        var (cost, seen, group) = Triple(mutableMapOf<Int, Int>(), mutableSetOf<Int>(), mutableMapOf<Int, Int>())
        fun go(u: Int, color: Int) {
            if (seen.contains(u))
                return
            seen.add(u); group[u] = color
            for ((v, w) in adj[u]) {
                go(v, color); cost[color] = (cost[color] ?: w) and w
            }
        }
        var color = 0
        for (i in 0..N-1)
            if (!seen.contains(i))
                go(i, color++)
        return query.map{ (u, v) -> if (group[u] ?: 123 == group[v] ?: 456) cost[group[u]!!]!! else -1 }.toIntArray()
    }
}
```

*Javascript*
```
let minimumCost = (N, E, query, adj = [...Array(N)].map(_ => []), cost = new Map(), color = 0, group = [...Array(N)].map(i => -(i + 1)), seen = new Set()) => {
    for (let [u, v, w] of E) {
        adj[u].push([v, w]);
        adj[v].push([u, w]);
    }
    let go = (u, color) => {
        if (seen.has(u))
            return;
        seen.add(u), group[u] = color;
        for (let [v, w] of adj[u])
            go(v, color), cost.set(color, cost.has(color) ? cost.get(color) & w : w);
    };
    for (let i = 0; i < N; ++i)
        if (!seen.has(i))
            go(i, ++color);
    return query.map(([u, v]) => group[u] == group[v] ? cost.get(group[u]) : -1);
};
```

*Python3*
```
class Solution:
    def minimumCost(self, N: int, E: List[List[int]], query: List[List[int]]) -> List[int]:
        adj = {i: [] for i in range(N)}
        for u, v, w in E:
            adj[u].append((v, w))
            adj[v].append((u, w))
        cost, color, seen, group = {}, 0, set(), {}
        def go(u, color):
            if u in seen:
                return
            seen.add(u); group[u] = color
            for v, w in adj[u]:
                go(v, color); cost[color] = (cost[color] & w) if color in cost else w
        for i in range(N):
            if i not in seen:
                go(i, color); color += 1
        return [cost[group[u]] if group[u] == group[v] else -1 for u, v in query]
```

*Rust*
```
// TODO: implement me!

// Line 30: Char 17: error: cannot borrow `seen` as immutable because it is also borrowed as mutable (solution.rs)
//    |
// 11 |         let mut bfs = (|u: i32, color: i32| {
//    |                        -------------------- mutable borrow occurs here
// 12 |             let mut q = VecDeque::from(vec![u]);
// 13 |             seen.insert(u.clone());
//    |             ---- first borrow occurs due to use of `seen` in closure
// ...
// 30 |             if !seen.contains(&i) {
//    |                 ^^^^ immutable borrow occurs here
// 31 |                 bfs(i, color); color += 1;
//    |                 --- mutable borrow later used here
// For more information about this error, try `rustc --explain E0502`.
// error: could not compile `prog` (bin "prog") due to previous error

use std::collections::{HashMap, HashSet, VecDeque};
impl Solution {
    pub fn minimum_cost(N: i32, E: Vec<Vec<i32>>, queries: Vec<Vec<i32>>) -> Vec<i32> {
        let mut adj = vec![vec![]; N as usize];
        for edge in E {
            let (u, v, w) = (edge[0], edge[1], edge[2]);
            adj[u as usize].push((v, w));
            adj[v as usize].push((u, w));
        }
        let (mut cost, mut color, mut seen, mut group) = (HashMap::new(), 0, HashSet::new(), HashMap::new());
        let mut bfs = (|u: i32, color: i32| {
            let mut q = VecDeque::from(vec![u]);
            seen.insert(u.clone());
            while 0 < q.len() {
                let u = q.pop_front().unwrap();
                group.insert(u.clone(), color);
                for (v, w) in adj[u as usize].clone() {
                    if !seen.contains(&v) {
                        q.push_front(v.clone()); seen.insert(v.clone());
                        if cost.contains_key(&color) {
                            cost.insert(color.clone(), cost.get(&color).unwrap() & w);
                        } else {
                            cost.insert(color.clone(), w);
                        }
                    }
                }
            }
        });
        for i in 0..N {
            if !seen.contains(&i) {
                bfs(i, color); color += 1;
            }
        }
        let mut ans = vec![];
        for query in queries {
            let (u, v) = (query[0], query[1]);
            let mut ok = false;
            if let Some(first) = group.get(&u) {
                if let Some(second) = group.get(&v) {
                    if first == second {
                        ans.push(*cost.get(first).unwrap()); ok = true;
                    }
                }
            }
            if !ok {
                ans.push(-1);
            }
        }
        ans
    }
}
```

*C++*
```
class Solution {
public:
    using VI = vector<int>;
    using VVI = vector<VI>;
    using fun = function<void(int, int)>;
    using Set = unordered_set<int>;
    using Adj = unordered_map<int, vector<pair<int, int>>>;
    using Map = unordered_map<int, int>;
    VI minimumCost(int N, VVI& E, VVI& query, Adj adj = {}, Map cost = {}, int color = 0, Set seen = {}, Map group = {}, VI ans = {}) {
        for (auto i{ 0 }; i < E.size(); ++i) {
            auto [u, v, w] = tie(E[i][0], E[i][1], E[i][2]);
            adj[u].push_back({v, w});
            adj[v].push_back({u, w});
        }
        fun go = [&](auto u, auto color) {
            if (!seen.insert(u).second)
                return;
            group[u] = color;
            for (auto [v, w]: adj[u])
                go(v, color), cost[color] = cost.find(color) != cost.end() ? cost[color] & w : w;
        };
        for (auto i{ 0 }; i < N; ++i)
            if (seen.find(i) == seen.end())
                go(i, color++);
        for (auto i{ 0 }; i < query.size(); ++i) {
            auto [u, v] = tie(query[i][0], query[i][1]);
            ans.push_back(group[u] == group[v] ? cost[group[u]] : -1);
        }
        return ans;
    }
};
```

# \uD83C\uDF5E "Breadcrumbs" for how we arrived "here"
```
# game plan:

# precalculate the bitwise AND of each connected component

# return -1 for queries in diff CCs
# return bitwise AND of the CC otherwise

# use DFS on each vertex to "color" each connected component
# along with its bitwise AND

# 7:17am -
# 7:32am => ~15 minutes for AC, yay! :)

# class Solution:
#     def minimumCost(self, N: int, E: List[List[int]], query: List[List[int]]) -> List[int]:
#         adj = {i: [] for i in range(N)}
#         for u, v, w in E:
#             adj[u].append((v, w))
#             adj[v].append((u, w))
#         cost, color, seen, group = {}, 0, set(), {}
#         def go(u, color):
#             if u in seen:
#                 return
#             seen.add(u); group[u] = color
#             for v, w in adj[u]:
#                 cost[color] = (cost[color] & w) if color in cost else w
#                 go(v, color)
#         for i in range(N):
#             if i not in seen:
#                 go(i, color); color += 1
#         ans = []
#         for u, v in query:
#             color1 = group[u]
#             color2 = group[v]
#             if color1 == color2:
#                 ans.append(cost[color1])
#             else:
#                 ans.append(-1)
#         return ans

class Solution:
    def minimumCost(self, N: int, E: List[List[int]], query: List[List[int]]) -> List[int]:
        adj = {i: [] for i in range(N)}
        for u, v, w in E:
            adj[u].append((v, w))
            adj[v].append((u, w))
        cost, color, seen, group = {}, 0, set(), {}
        def go(u, color):
            if u in seen:
                return
            seen.add(u); group[u] = color
            for v, w in adj[u]:
                go(v, color); cost[color] = (cost[color] & w) if color in cost else w
        for i in range(N):
            if i not in seen:
                go(i, color); color += 1
        return [cost[group[u]] if group[u] == group[v] else -1 for u, v in query]
```