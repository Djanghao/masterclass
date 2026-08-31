# Strong connected components

**Author:** cpcs
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-runes-to-add-to-cast-spell/solutions/6125479/](https://leetcode.com/problems/minimum-runes-to-add-to-cast-spell/solutions/6125479/)

---

# Intuition
(1) Calculate all strong connected components.
(2) Take each strong connected component as a node to make a new directed acyclic graph (DAG).
(3) In the new graph if a node's indegree is 0, then it must have a crystal in it or we must add a direct rune to connect it with a cristal node.


# Complexity
- Time complexity:
O(n + m) where m = flowFrom.size().

- Space complexity:
O(n + m) where m = flowFrom.size().

# Code
```cpp []
class Solution {
    void dfs(const vector<vector<int>> &con, int x, vector<bool> &mark, vector<int> &all) {
        if (mark[x]) return;
        mark[x] = true;
        for (int y : con[x]) {
            dfs(con, y, mark, all);
        } 
        all.push_back(x);
    }
    
    void dfs(const vector<vector<int>> &con, int x, vector<int> &id, int m) {
        if (id[x] >= 0) return;
        id[x] = m;
        for (int y : con[x]) {
            dfs(con, y, id, m);
        }
    }
public:
    int minRunesToAdd(int n, vector<int>& crystals, vector<int>& flowFrom, vector<int>& flowTo) {
        vector<vector<int>> con(n), rcon(n);
        for (int i = 0; i < flowFrom.size(); ++i) {
            con[flowFrom[i]].push_back(flowTo[i]);
            rcon[flowTo[i]].push_back(flowFrom[i]);
        }
        vector<bool> mark(n);
        vector<int> all;
        for (int i = 0; i < n; ++i) {
            dfs(con, i, mark, all);
        }
        vector<int> id(n, -1);
        int m = 0;
        for (int i = n - 1; i >= 0; --i) {
            const int x = all[i];
            if (id[x] < 0) {
                dfs(rcon, x, id, m++);
            }
        }
        vector<bool> to(m);
        for (int i = 0; i < flowFrom.size(); ++i) {
            if (id[flowFrom[i]] != id[flowTo[i]]) {
                to[id[flowTo[i]]] = true;
            }
        }
        vector<bool> special(m);
        for (int x : crystals) {
            special[id[x]] = true;
        }
        int r = 0;
        for (int i = 0; i < m; ++i) {
            r += (!to[i] && !special[i]);
        }
        return r;
    }
};
```