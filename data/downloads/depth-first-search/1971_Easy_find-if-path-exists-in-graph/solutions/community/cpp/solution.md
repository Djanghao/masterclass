# 3  Solutions - BFS, DFS, Disjoint set

**Author:** aparna_g
**Votes:** 178
**Link:** [https://leetcode.com/problems/find-if-path-exists-in-graph/solutions/1407715/](https://leetcode.com/problems/find-if-path-exists-in-graph/solutions/1407715/)

---

Solution 1: BFS
Form a graph and check if path exists -  basic bfs 
```
class Solution {
public:
    bool validPath(int n, vector<vector<int>>& edges, int start, int end) {
        unordered_map<int,vector<int>> graph; 
        for(auto e : edges) {
            graph[e[0]].push_back(e[1]);
            graph[e[1]].push_back(e[0]);
        }
        vector<bool> visited(n,0);        
        queue<int> q;
        q.push(start);
        visited[start] = 1; 
        while(!q.empty()) {
            int curr = q.front();
            q.pop();
            if(curr == end)
                return 1; 
            for(auto &node : graph[curr]){
                if(!visited[node]){
                    visited[node] = 1; 
                    q.push(node);
                }
            }
        }
        
        return false;
    }
};
```
Solution 2:  Iterative DFS using stack. 
```
class Solution {
public:
    bool validPath(int n, vector<vector<int>>& edges, int start, int end) {
        unordered_map<int,vector<int>> graph; 
        for(auto e : edges) {
            graph[e[0]].push_back(e[1]);
            graph[e[1]].push_back(e[0]);
        }
        vector<bool> visited(n,0);        
        stack<int> st;
        st.push(start);
        visited[start] = 1; 
        
        while(!st.empty()){ 
            auto top = st.top();
            if(top == end)
                return 1;
            st.pop();
            for(auto node : graph[top]){
                if(!visited[node]){
                    visited[node] = 1;
                    st.push(node); 
                }
            }
        }
        return false;
    }
};
```

Solution 3: We don't really to need to find the length of the path. Since this is an undirected graph,  we just need to check if start and end are in the same connected component. So we use union find 
```
class Solution {
public:
    vector<int> parent;     
    int findParent(int node) {
        return parent[node] == node ? node : (parent[node] = findParent(parent[node]));
    }    
    void makeSameGroup(int u , int v) {
        int pu = findParent(u) ; 
        int pv = findParent(v);
        parent[pu] = pv; 
    }
    
    bool validPath(int n, vector<vector<int>>& edges, int start, int end) {
        parent.resize(n);
        for(int i=0;i<n;i++)
            parent[i] = i; 
        
        for(auto e : edges) {
            makeSameGroup(e[0] , e[1]); 
        }                         
        return findParent(start) == findParent(end); 
    }
};
```