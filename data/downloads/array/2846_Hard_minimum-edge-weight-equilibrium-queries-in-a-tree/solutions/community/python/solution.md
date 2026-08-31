# LCA in C++, java and python

**Author:** cpcs
**Votes:** 19
**Link:** [https://leetcode.com/problems/minimum-edge-weight-equilibrium-queries-in-a-tree/solutions/3994859/](https://leetcode.com/problems/minimum-edge-weight-equilibrium-queries-in-a-tree/solutions/3994859/)

---

# Intuition
Use LCA.

# Approach
There are at most 26 different edge weights. For each node, we can count the number of edges of each weight from root to the current node.
And then for each query (x, y),
The number of edges of a particular weight = num[x] + num[y] - 2 * num[LCA(x, y)].
Then we just calculate the median of the weights. So we need a fast algorithm to claculate LCA. We can just save the 2 ^ n parent of each node...

# Complexity
- Time complexity:
O(log(n) * q * 26) where q is the number of queries and n is the number of nodes.

- Space complexity:
O(n * log(n))

# Code
C++
```
class Solution {
    void dfs(const vector<vector<pair<int, int>>> &con, int x, int p, vector<int> &b, vector<int> &e, vector<vector<int>> &f, int &t, vector<vector<int>> &all, vector<int> &w) {
        all[x] = w;
        f[x][0] = p;
        b[x] = ++t;
        for (const auto& v : con[x]) {
            if (v.first != p) {
                ++w[v.second];
                dfs(con, v.first, x, b, e, f, t, all, w);
                --w[v.second];
            }
        }
        e[x] = t;
}
    
// Is x an ancestor of y?
bool isAncestor(const vector<int> &b, const vector<int> &e, int x, int y) {
	return b[x] <= b[y] && e[x] >= e[y];
}
 
int lca(const vector<vector<int>> &f, const vector<int> &b, const vector<int> &e, int x, int y) {
	if (isAncestor(b, e, x, y)) {
		return x;
	}
	if (isAncestor(b, e, y, x)) {
		return y;
	}
 
	int r = 0;
	for (int i = 19; i >= 0; --i) {
		const int temp = f[x][i];
		if (isAncestor(b, e, temp, y)) {
			r = temp;
		} else {
			x = temp;
		}
	}
	return r;
}

public:
    vector<int> minOperationsQueries(int n, vector<vector<int>>& edges, vector<vector<int>>& queries) {
        vector<vector<pair<int, int>>> con(n);
        for (const auto& e : edges) {
            con[e[0]].push_back({e[1], e[2] - 1});
            con[e[1]].push_back({e[0], e[2] - 1});
        }
        vector<vector<int>> all(n), f(n, vector<int>(20));
	    vector<int> b(n), e(n), w(26);
	    int t = 0;
	    dfs(con, 0, -1, b, e, f, t, all, w);
	    f[0][0] = 0;
	    for (int i = 1; i < 20; ++i) {
		    for (int j = 0; j < n; ++j) {
			    f[j][i] = f[f[j][i - 1]][i - 1];
		    }
	    }
        vector<int> r;
        for (const auto& q : queries) {
            if (q[0] == q[1]) {
                r.push_back(0);
                continue;
            }
            const int t = lca(f, b, e, q[0], q[1]);
            int sum = 0, m = 0;
            for (int i = 0; i < 26; ++i) {
                const int temp = all[q[0]][i] + all[q[1]][i] - (all[t][i] << 1);
                sum += temp;
                m = max(m, temp);
            }
            r.push_back(sum - m);
        }
        return r;
    }
};

```

Java
```
class Solution {
    public int[] minOperationsQueries(int n, int[][] edges, int[][] queries) {
        List<Pair>[] con = new ArrayList[n];
        for (int i = 0; i < n; i++) {
            con[i] = new ArrayList<>();
        }

        for (int[] e : edges) {
            con[e[0]].add(new Pair(e[1], e[2] - 1));
            con[e[1]].add(new Pair(e[0], e[2] - 1));
        }

        int[][] all = new int[n][26];
        int[][] f = new int[n][20];
        int[] b = new int[n];
        int[] e = new int[n];
        int[] w = new int[26];

        int[] t = {0};
        dfs(con, 0, -1, b, e, f, t, all, w);
        f[0][0] = 0;

        for (int i = 1; i < 20; ++i) {
            for (int j = 0; j < n; ++j) {
                f[j][i] = f[f[j][i - 1]][i - 1];
            }
        }

        int[] result = new int[queries.length];
        int index = 0;
        for (int[] q : queries) {
            if (q[0] == q[1]) {
                result[index++] = 0;
                continue;
            }
            int tLca = lca(f, b, e, q[0], q[1]);
            int sum = 0, m = 0;
            for (int i = 0; i < 26; ++i) {
                int temp = all[q[0]][i] + all[q[1]][i] - (all[tLca][i] << 1);
                sum += temp;
                m = Math.max(m, temp);
            }
            result[index++] = sum - m;
        }
        return result;
    }

    private static class Pair {
        int first;
        int second;

        Pair(int first, int second) {
            this.first = first;
            this.second = second;
        }
    }

    void dfs(List<Pair>[] con, int x, int p, int[] b, int[] e, int[][] f, int[] t, int[][] all, int[] w) {
        all[x] = w.clone();
        f[x][0] = p;
        b[x] = ++t[0];
        for (Pair v : con[x]) {
            if (v.first != p) {
                w[v.second]++;
                dfs(con, v.first, x, b, e, f, t, all, w);
                w[v.second]--;
            }
        }
        e[x] = t[0];
    }

    boolean isAncestor(int[] b, int[] e, int x, int y) {
        return b[x] <= b[y] && e[x] >= e[y];
    }

    int lca(int[][] f, int[] b, int[] e, int x, int y) {
        if (isAncestor(b, e, x, y)) {
            return x;
        }
        if (isAncestor(b, e, y, x)) {
            return y;
        }

        int r = 0;
        for (int i = 19; i >= 0; --i) {
            int temp = f[x][i];
            if (isAncestor(b, e, temp, y)) {
                r = temp;
            } else {
                x = temp;
            }
        }
        return r;
    }
}
```
Python
```
from typing import List

class Solution:
    def minOperationsQueries(self, n: int, edges: List[List[int]], queries: List[List[int]]) -> List[int]:
        def dfs(x, p, b, e, f, t, all, w):
            all[x] = w[:]
            f[x][0] = p
            b[x] = t[0] = t[0] + 1
            for v in con[x]:
                if v[0] != p:
                    w[v[1]] += 1
                    dfs(v[0], x, b, e, f, t, all, w)
                    w[v[1]] -= 1
            e[x] = t[0]

        def isAncestor(b, e, x, y):
            return b[x] <= b[y] and e[x] >= e[y]

        def lca(f, b, e, x, y):
            if isAncestor(b, e, x, y):
                return x
            if isAncestor(b, e, y, x):
                return y
            r = 0
            for i in range(19, -1, -1):
                temp = f[x][i]
                if isAncestor(b, e, temp, y):
                    r = temp
                else:
                    x = temp
            return r

        con = [[] for _ in range(n)]
        for e in edges:
            con[e[0]].append((e[1], e[2] - 1))
            con[e[1]].append((e[0], e[2] - 1))

        all = [[0] * 26 for _ in range(n)]
        f = [[0] * 20 for _ in range(n)]
        b = [0] * n
        e = [0] * n
        w = [0] * 26

        t = [0]
        dfs(0, -1, b, e, f, t, all, w)
        f[0][0] = 0

        for i in range(1, 20):
            for j in range(n):
                f[j][i] = f[f[j][i - 1]][i - 1]

        result = []
        for q in queries:
            if q[0] == q[1]:
                result.append(0)
                continue
            tLca = lca(f, b, e, q[0], q[1])
            _sum, m = 0, 0
            for i in range(26):
                temp = all[q[0]][i] + all[q[1]][i] - (all[tLca][i] << 1)
                _sum += temp
                m = max(m, temp)
            result.append(_sum - m)
        return result

```