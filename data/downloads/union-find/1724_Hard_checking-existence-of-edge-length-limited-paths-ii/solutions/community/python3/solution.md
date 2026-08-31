# [C++|Java|Python3] MST + binary lifting

**Author:** ye15
**Votes:** 0
**Link:** [https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths-ii/solutions/3216401/](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths-ii/solutions/3216401/)

---

**C++**
```
class DistanceLimitedPathsExist {
    vector<int> parent, depth; 
    vector<vector<int>> lift, weight; 
    
    int find(int p) {
        if (p != parent[p]) 
            parent[p] = find(parent[p]); 
        return parent[p]; 
    }
public:
    DistanceLimitedPathsExist(int n, vector<vector<int>>& edgeList) {
        vector<vector<pair<int, int>>> tree(n); 
        parent.resize(n); 
        iota(parent.begin(), parent.end(), 0); 
        sort(edgeList.begin(), edgeList.end(), [](auto& lhs, auto& rhs) { return lhs[2] < rhs[2]; }); 
        for (auto& e : edgeList) {
            int uu = find(e[0]), vv = find(e[1]); 
            if (uu != vv) {
                tree[e[0]].emplace_back(e[1], e[2]); 
                tree[e[1]].emplace_back(e[0], e[2]); 
                parent[uu] = vv; 
            }
        }
        depth = vector<int>(n, -1); 
        lift = vector<vector<int>>(n, vector<int>(32, -1)); 
        weight = vector<vector<int>>(n, vector<int>(32, 0)); 
        for (int i = 0; i < n; ++i) 
            if (depth[i] == -1) {
                stack<tuple<int, int, int>> stk; 
                stk.emplace(i, -1, 0); 
                while (stk.size()) {
                    auto [u, p, d] = stk.top(); stk.pop(); 
                    depth[u] = d; 
                    for (auto& [v, w] : tree[u]) 
                        if (v != p) {
                            lift[v][0] = u; 
                            weight[v][0] = w; 
                            for (int j = 1; j < 32 && lift[v][j-1] != -1; ++j) {
                                weight[v][j] = max(weight[v][j-1], weight[lift[v][j-1]][j-1]); 
                                lift[v][j] = lift[lift[v][j-1]][j-1];                                 
                            }
                            stk.emplace(v, u, d+1); 
                        }
                }
            }
    }
    
    bool query(int p, int q, int limit) {
        if (find(p) != find(q)) return false; 
        if (depth[p] > depth[q]) swap(p, q); 
        int wt = 0; 
        for (int i = 0; i < 32; ++i) 
            if ((depth[q] - depth[p]) & (1<<i)) {
                wt = max(wt, weight[q][i]);
                q = lift[q][i]; 
            }
        if (p == q) return wt < limit; 
        for (int i = 31; i >= 0; --i) 
            if (lift[p][i] != lift[q][i]) {
                wt = max({wt, weight[p][i], weight[q][i]}); 
                p = lift[p][i]; 
                q = lift[q][i]; 
            }
        return max({wt, weight[p][0], weight[q][0]}) < limit; 
    }
};
```
**Java**
```
class DistanceLimitedPathsExist {
    private int[] depth, parent; 
    private int[][] lift, weight; 
    
    private int find(int p) {
        if (p != parent[p]) 
            parent[p] = find(parent[p]); 
        return parent[p]; 
    }
    
    public DistanceLimitedPathsExist(int n, int[][] edgeList) {
        List<int[]>[] tree = new ArrayList[n]; 
        for (int i = 0; i < n; ++i) tree[i] = new ArrayList(); 
        parent = new int[n]; 
        for (int i = 0; i < n; ++i) parent[i] = i; 
        Arrays.sort(edgeList, (a, b) -> Integer.compare(a[2], b[2])); 
        for (var e : edgeList) {
            int uu = find(e[0]), vv = find(e[1]); 
            if (uu != vv) {
                tree[e[0]].add(new int[] {e[1], e[2]}); 
                tree[e[1]].add(new int[] {e[0], e[2]}); 
                parent[uu] = vv; 
            }
        }
        depth = new int[n]; 
        Arrays.fill(depth, -1); 
        lift = new int[n][32]; 
        for (int i = 0; i < n; ++i) Arrays.fill(lift[i], -1); 
        weight = new int[n][32]; 
        for (int i = 0; i < n; ++i) 
            if (depth[i] == -1) {
                Stack<int[]> stk = new Stack(); 
                stk.add(new int[] {i, -1, 0}); 
                while (!stk.isEmpty()) {
                    var elem = stk.pop(); 
                    int u = elem[0], p = elem[1], d = elem[2]; 
                    depth[u] = d; 
                    for (var uu : tree[u]) {
                        int v = uu[0], w = uu[1]; 
                        if (v != p) {
                            lift[v][0] = u; 
                            weight[v][0] = w; 
                            for (int j = 1; j < 32 && lift[v][j-1] != -1; ++j) {
                                weight[v][j] = Math.max(weight[v][j-1], weight[lift[v][j-1]][j-1]); 
                                lift[v][j] = lift[lift[v][j-1]][j-1]; 
                            }
                            stk.add(new int[] {v, u, d+1}); 
                        }
                    }
                }
            }
    }
    
    public boolean query(int p, int q, int limit) {
        if (find(p) != find(q)) return false; 
        if (depth[p] > depth[q]) {
            int tmp = p; 
            p = q; 
            q = tmp; 
        }
        int wt = 0; 
        for (int i = 0; i < 32; ++i) 
            if ((depth[q]-depth[p] & 1<<i) > 0) {
                wt = Math.max(wt, weight[q][i]); 
                q = lift[q][i]; 
            }
        if (p == q) return wt < limit; 
        for (int i = 31; i >= 0; --i) 
            if (lift[p][i] != lift[q][i] && 0 <= q) {
                wt = Math.max(wt, Math.max(weight[p][i], weight[q][i])); 
                p = lift[p][i]; 
                q = lift[q][i]; 
            }
        return Math.max(wt, Math.max(weight[p][0], weight[q][0])) < limit; 
    }
}
```
**Python3**
```
class DistanceLimitedPathsExist:

    def find(self, p): 
        if p != self.parent[p]: 
            self.parent[p] = self.find(self.parent[p])
        return self.parent[p]

    def __init__(self, n: int, edgeList: List[List[int]]):
        tree = [[] for _ in range(n)] # minimum spanning tree
        self.parent = list(range(n))
        for u, v, w in sorted(edgeList, key=lambda x : x[2]): 
            uu, vv = self.find(u), self.find(v)
            if uu != vv: 
                tree[u].append((v, w))
                tree[v].append((u, w))
                self.parent[uu] = vv 
        self.depth = [-1]*n
        self.lift = [[-1]*32 for _ in range(n)] # binary lifting
        self.weight = [[0]*32 for _ in range(n)]
        for u in range(n):
            if self.depth[u] == -1: 
                stack = [(u, -1, 0)]
                while stack: 
                    u, p, d = stack.pop()
                    self.depth[u] = d 
                    for v, w in tree[u]: 
                        if v != p: 
                            self.lift[v][0] = u 
                            self.weight[v][0] = w
                            for j in range(1, 32): 
                                if self.lift[v][j-1] == -1: break 
                                self.weight[v][j] = max(self.weight[v][j-1], self.weight[self.lift[v][j-1]][j-1])
                                self.lift[v][j] = self.lift[self.lift[v][j-1]][j-1]
                            stack.append((v, u, d+1))
            
    def query(self, p: int, q: int, limit: int) -> bool:
        if self.find(p) != self.find(q): return False 
        if self.depth[p] > self.depth[q]: p, q = q, p
        wt = 0 
        for i in range(32): 
            if self.depth[q]-self.depth[p] & 1<<i: 
                wt = max(wt, self.weight[q][i])
                q = self.lift[q][i]
        if p == q: return wt < limit
        for i in range(31, -1, -1): 
            if self.lift[p][i] != self.lift[q][i]: 
                wt = max(wt, self.weight[p][i], self.weight[q][i])
                p, q = self.lift[p][i], self.lift[q][i]
        return max(wt, self.weight[p][0], self.weight[q][0]) < limit
```