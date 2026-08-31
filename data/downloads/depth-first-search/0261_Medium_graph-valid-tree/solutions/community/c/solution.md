# A review of all solutions

**Author:** yu6
**Votes:** 16
**Link:** [https://leetcode.com/problems/graph-valid-tree/solutions/69044/](https://leetcode.com/problems/graph-valid-tree/solutions/69044/)

---

By [definition](https://en.wikipedia.org/wiki/Tree_(data_structure)#Definition), a tree is a graph without cycle. So it is a cycle detection problem. The other thing is we need to make sure it is only one tree. Both BFS and DFS can be used for cycle detection. Which is better? If the back edge is likely to be close to the start node, BFS is most efficient. If the back edge is likely to be far from the start node, DFS has the advantage that it doesn\u2019t examine any single level last. (BFS always examines the lowest level last.)
1. O(n+e) DFS.
```
    bool validTree(int n, vector<vector<int>>& edges) {
        if(edges.size()!=n-1) return 0;
        vector<vector<int>> adjLst(n);
        for(auto &v:edges) {
            adjLst[v[0]].push_back(v[1]);
            adjLst[v[1]].push_back(v[0]);
        }
        vector<bool> vstd(n);
        if(dfs(-1,0,vstd,adjLst)) return 0;
        return accumulate(vstd.begin(),vstd.end(),0)==n;
    }
    bool dfs(int from, int to, vector<bool>&vstd, vector<vector<int>>& adjLst) {
        if(vstd[to]) return 1;
        vstd[to]=1;
        for(int n:adjLst[to]) if(n!=from && dfs(to,n,vstd,adjLst)) return 1;
        return 0;
    }
```
2. O(n+e) BFS. The adjacency list is a hashtable instead of vector because we need to remove a visited node from the adjacency list of its neighbor to avoid searching backwards along the same edge. If we still use vector, then we need to keep track of the parent of current node which doubles the bfs memory. Another interesting thing is queue can be literally replace by stack and it becomes iterative DFS. Same thing happens in [symmetric tree](https://discuss.leetcode.com/topic/76888/evolve-from-straightforward-solution-a-review-of-top-solutions).
```
    bool validTree(int n, vector<vector<int>>& edges) {
        if(edges.size()!=n-1) return 0;
        vector<unordered_set<int>> adjLst(n);
        for(auto &v:edges) {
            adjLst[v[0]].insert(v[1]);
            adjLst[v[1]].insert(v[0]);
        }
        vector<bool> vstd(n);
        queue<int> q({0});
        while(!q.empty()) {
            int t = q.front();
            q.pop();
            if(vstd[t]) return 0;
            vstd[t] = 1;
            n--;
            for(int nb:adjLst[t]) {
                q.push(nb);
                adjLst[nb].erase(t);
            }
        }
        return !n;
    }
```
3. O(n+elg*n) union find. Maybe the best in practice as it does not need to build the adjacency list. This is a great tutorial from [princeton](https://www.cs.princeton.edu/~rs/AlgsDS07/01UnionFind.pdf).
```
    bool validTree(int n, vector<vector<int>>& edges) {
        if(edges.size()!=n-1) return 0;
        vector<int> parent(n), sz(n,1);
        iota(parent.begin(),parent.end(),0);
        for(auto &v:edges) {
            int i = root(v[0],parent), j = root(v[1],parent);
            if(i==j) return 0;
            if(sz[i]<sz[j]) { //weight
                parent[i]=j;
                sz[j]+=sz[i];
            } else {
                parent[j]=i;
                sz[i]+=sz[j];
            }
            n--;
        }
        return n==1;
    }
    int root(int i, vector<int>& parent) {
        while(parent[i]!=i) i=parent[i]=parent[parent[i]]; //path compression
        return i;
    }
```