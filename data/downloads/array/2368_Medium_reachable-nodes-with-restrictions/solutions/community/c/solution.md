# BFS vs DFS

**Author:** Rowque
**Votes:** 17
**Link:** [https://leetcode.com/problems/reachable-nodes-with-restrictions/solutions/2390558/](https://leetcode.com/problems/reachable-nodes-with-restrictions/solutions/2390558/)

---

# BFS  
We simple do **BFS** from `0` in iterative way and while doing bfs we simply discard the restricted nodes.
For check if node is restricted or not , we use `SET`
# C++
    int reachableNodes(int n, vector<vector<int>>&e , vector<int>& r) {
        unordered_set<int> s(begin(r),end(r));
        vector<vector<int>> graph(n);
        for(auto i:e) graph[i[0]].push_front(i[1]) , graph[i[1]].push_front(i[0]);
        queue<int> q;
        vector<bool> seen(n);
        int cnt=0;
        q.push(0);
        seen[0]=true;
        while(q.size()){
            auto node= q.front(); q.pop();
            if(s.count(node)) continue;
            cnt++;
            for(auto j:graph[node]) //Put Neighbours
                if(!seen[j]) seen[j]=true , q.push(j);
        }
        return cnt;
    }
	
# DFS
Same as BFS , But in # **Functional Programming** #  Way i.e **`Recursion`**
In which we just represent the subtree with a **function** instead of traversing on our own in an iterative manner, like we did in `BFS`.

# C++
    vector<vector<int>> graph;
    int dfs(int src,vector<bool> &seen,unordered_set<int> &s){
        int cnt=0;
        for(auto j: graph[src])
            if(!seen[j] && !s.count(j)) seen[j]=true , cnt+= dfs(j,seen,s); 
        return 1+cnt;
    }
    int reachableNodes(int n, vector<vector<int>>&e , vector<int>& r) {
        unordered_set<int> s(begin(r),end(r));
        graph.resize(n);
        for(auto i:e) graph[i[0]].push_back(i[1])  , graph[i[1]].push_back(i[0]);
        vector<bool> seen(n);
        seen[0]=true;
        return dfs(0,seen,s);
    }
	
**Time** - O(n+e)
**Space** - O(n)