# [Java/C++/Python] BFS

**Author:** lee215
**Votes:** 43
**Link:** [https://leetcode.com/problems/shortest-cycle-in-a-graph/solutions/3366500/](https://leetcode.com/problems/shortest-cycle-in-a-graph/solutions/3366500/)

---

# **Explanation**
Assume a node is root and apply bfs search,
where we recode the:
- `dis[i]` is the distance from root to `i`
- `fa[i]` is the father of `i`

If two points met up and they are not father-son relation,
they met in a cycle.
The distance of circly is smaller or equal than `dis[i] + dis[j] + 1`.

To check the father-son relation, there some different ways:
- we can use an array `fa[i]` to save the father of each node.
- we can add `(i, father)` to the queue
- we can also check `dis[i] <= dis[j]`

We iterate all nodes as root, and we can return the minimum circle.
<br>

# **Complexity**
Time `O(n^2)`
Space `O(edges + n)`
<br>

**Java**
```java
    public int findShortestCycle(int n, int[][] edges) {
        List<List<Integer>> G = new ArrayList<>();
        for (int i = 0; i < n; ++i) {
            G.add(new ArrayList<>());
        }
        for (int[] e : edges) {
            G.get(e[0]).add(e[1]);
            G.get(e[1]).add(e[0]);
        }
        int inf = 10000, res = inf;
        Function<Integer, Integer> root = i -> {
            List<Integer> dis = new ArrayList<>(Collections.nCopies(n, inf));
            dis.set(i, 0);
            Queue<Integer> bfs = new LinkedList<>(Arrays.asList(i));
            while (!bfs.isEmpty()) {
                i = bfs.poll();
                for (int j : G.get(i)) {
                    if (dis.get(j) == inf) {
                        dis.set(j, 1 + dis.get(i));
                        bfs.offer(j);
                    } else if (dis.get(i) <= dis.get(j)) {
                        return dis.get(i) + dis.get(j) + 1;
                    }
                }
            }
            return inf;
        };
        for (int i = 0; i < n; ++i)
            res = Math.min(res, root.apply(i));
        return res < inf ? res : -1;
    }
```

**C++**
```cpp
    int findShortestCycle(int n, vector<vector<int>>& edges) {
        vector<vector<int>> G(n);
        for (auto& e : edges) {
            G[e[0]].push_back(e[1]);
            G[e[1]].push_back(e[0]);
        }
        int inf = 10000, res = inf;
        auto root = [&](int i) {
            vector<int> dis(n, inf);
            dis[i] = 0;
            queue<int> bfs{{i}};
            while (!bfs.empty()) {
                auto i = bfs.front(); bfs.pop();
                for (auto j : G[i]) {
                    if (dis[j] == inf) {
                        dis[j] = 1 + dis[i];
                        bfs.push(j);
                    } else if (dis[i] <= dis[j]) {
                        return dis[i] + dis[j] + 1;
                    }
                }
            }
            return inf;
        };
        for (int i = 0; i < n; ++i)
            res = min(res, root(i));
        return res < inf ? res : -1;
    }
```

**Python**
```py
    def findShortestCycle(self, n: int, edges: List[List[int]]) -> int:
        G = [[] for _ in range(n)]
        for i, j in edges:
            G[i].append(j)
            G[j].append(i)
        def root(i):
            dis = [inf] * n
            dis[i] = 0
            bfs = [i]
            for i in bfs:
                for j in G[i]:
                    if dis[j] == inf:
                        dis[j] = 1 + dis[i]
                        bfs.append(j)
                    elif dis[i] <= dis[j]:
                        return dis[i] + dis[j] + 1
            return inf
        res = min(map(root, range(n)))
        return res if res < inf else -1
```
