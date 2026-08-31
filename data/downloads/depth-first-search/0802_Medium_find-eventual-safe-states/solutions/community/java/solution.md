# Cycle Detection Same Code |Begineers Friendly| C++ | Java | Python

**Author:** shivam-727
**Votes:** 59
**Link:** [https://leetcode.com/problems/find-eventual-safe-states/solutions/3752567/](https://leetcode.com/problems/find-eventual-safe-states/solutions/3752567/)

---

# Intuition



Graph so it can be solved by bfs and dfs

# Approach
Here,if you figure out you can see clearly that every node which form cycle or path of cycle are not safe nodes except all are safe.so we will find how many node are forming cycle.

For detailed explanation you can refer to my youtube channel (Hindi Language)
https://youtu.be/AIJGHuYtnZM
 or link in my profile.Here,you can find any solution in playlists monthwise from June 2023 with detailed explanation.i upload daily leetcode solution video with short and precise explanation (5-10) minutes.
or
search \uD83D\uDC49` Find Eventual Safe States
 by Let's Code Together` on youtube

Thanks

# Complexity
- Time complexity:$$O(V+E)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(V+E)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    bool dfs(vector<vector<int>>&adj,int src,vector<bool>&vis,vector<bool>&recst){
        vis[src]=true;
        recst[src]=true;
        for(auto x:adj[src]){
            if(vis[x]==false && dfs(adj,x,vis,recst)){
                return true;
            }
            else if(recst[x]==true){
            return true;
            }
        }
        recst[src]=false;
        return false;
    }
    vector<int> eventualSafeNodes(vector<vector<int>>& graph) {
        int n=graph.size();
         vector<vector<int>>adj(n);
        for(int i=0;i<graph.size();i++){
            for(int j=0;j<graph[i].size();j++){
                adj[i].push_back(graph[i][j]);
            }
        }
            vector<bool>vis(n,false);
        vector<bool>recst(n,false);
        for(int i=0;i<n;i++){
            if(vis[i]==false){
                dfs(adj,i,vis,recst);
            }
        }
        vector<int>ans;
        for(int i=0;i<recst.size();i++){
          if(!recst[i])
          ans.push_back(i);
        }
        return ans;
    }
};
```
```Java []
class Solution {
    public boolean dfs(List<List<Integer>> adj, int src, boolean[] vis, boolean[] recst) {
        vis[src] = true;
        recst[src] = true;
        for (int x : adj.get(src)) {
            if (!vis[x] && dfs(adj, x, vis, recst)) {
                return true;
            } else if (recst[x]) {
                return true;
            }
        }
        recst[src] = false;
        return false;
    }

    public List<Integer> eventualSafeNodes(int[][] graph) {
        int n = graph.length;
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            List<Integer> list = new ArrayList<>();
            for (int j = 0; j < graph[i].length; j++) {
                list.add(graph[i][j]);
            }
            adj.add(list);
        }
        boolean[] vis = new boolean[n];
        boolean[] recst = new boolean[n];
        for (int i = 0; i < n; i++) {
            if (!vis[i]) {
                dfs(adj, i, vis, recst);
            }
        }
        List<Integer> ans = new ArrayList<>();
        for (int i = 0; i < recst.length; i++) {
            if (!recst[i]) {
                ans.add(i);
            }
        }
        return ans;
    }
}

```
```Python []
class Solution:
    def dfs(self, adj, src, vis, recst):
        vis[src] = True
        recst[src] = True
        for x in adj[src]:
            if not vis[x] and self.dfs(adj, x, vis, recst):
                return True
            elif recst[x]:
                return True
        recst[src] = False
        return False

    def eventualSafeNodes(self, graph):
        n = len(graph)
        adj = [[] for _ in range(n)]
        for i in range(n):
            for j in range(len(graph[i])):
                adj[i].append(graph[i][j])

        vis = [False] * n
        recst = [False] * n
        for i in range(n):
            if not vis[i]:
                self.dfs(adj, i, vis, recst)

        ans = []
        for i in range(len(recst)):
            if not recst[i]:
                ans.append(i)
        return ans

```

![upvote-this-you.jpg](./images/0.jpeg)
