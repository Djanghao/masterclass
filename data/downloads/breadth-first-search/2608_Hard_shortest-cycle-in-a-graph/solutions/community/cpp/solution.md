# Video Explanation (With intuitive proof)

**Author:** codingmohan
**Votes:** 22
**Link:** [https://leetcode.com/problems/shortest-cycle-in-a-graph/solutions/3366696/](https://leetcode.com/problems/shortest-cycle-in-a-graph/solutions/3366696/)

---

# Explanation

https://youtu.be/_OMkeb3oTks

[Click here if the preview above doesn't works](https://youtu.be/_OMkeb3oTks)

# Code
```
const int N = 1e3 + 1;
const int INF = 1e9;

vector<set<int>> g(N);
vector<int> level(N);

class Solution {
    void bfs (int root) {
        queue<int> q;
        
        q.push(root);
        level[root] = 0;
        
        while (!q.empty()) {
            int top = q.front();
            q.pop();
            
            for (auto i : g[top]) {
                if (level[i] != INF) continue;
                level[i] = level[top] + 1;
                q.push(i);
            }
        }
    }
    
public:
    int findShortestCycle(int n, vector<vector<int>>& edges) {
        for (int j = 0; j < n; j ++) {
            g[j].clear();
        }
        for (auto e : edges) {
            g[e[0]].insert(e[1]);
            g[e[1]].insert(e[0]);
        }
        
        int result = INF;
        for (auto e : edges) {
            g[e[0]].erase(e[1]);
            g[e[1]].erase(e[0]);
            
            for (int j = 0; j < n; j ++) level[j] = INF;
            bfs (e[0]);
            
            result = min (result, level[e[1]] + 1);
        }
        
        if (result == INF) result = -1;
        return result;
    }
};
```