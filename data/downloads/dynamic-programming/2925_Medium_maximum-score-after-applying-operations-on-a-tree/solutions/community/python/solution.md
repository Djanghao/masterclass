# Easy Video Solution(Question Explained Clearly) || Simple DFS (C++,JAVA,Python)

**Author:** ayushnemmaniwar12
**Votes:** 30
**Link:** [https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/solutions/4251353/](https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/solutions/4251353/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Spend time on the question and understand it clearly then you can dry run for inputs and think in terms of dfs and how to modify dfs according to the requirement

# ***Detailed and easy Video Solution***

https://youtu.be/-4XuKPCBvsA

# Approach
<!-- Describe your approach to solving the problem. -->
The code calculates the maximum score after performing operations on a tree structure. It uses a depth-first search (DFS) algorithm to traverse the tree, keeping track of the minimum values in the tree nodes. The final result is obtained by subtracting the minimum value from the total sum of values.



# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(E+V)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(E+V)

```C++ []
class Solution {
public:
    long long dfs(int i,vector<int>adj[],vector<int>& v,vector<int>&vis)
    {  
        if(adj[i].size()==1 && i!=0)
            return (long long)v[i];
       long long s=0;
       vis[i]=1;
       for(auto j:adj[i])
       {    
           if(vis[j]==1)
            continue;
           s=s+dfs(j,adj,v,vis);
       } 
       return min((long long)v[i],s);
    }
    long long maximumScoreAfterOperations(vector<vector<int>>& edges, vector<int>& values) {
        int n=values.size();
        vector<int>adj[n];
        for(int i=0;i<n-1;i++)
        {
            adj[edges[i][0]].push_back(edges[i][1]);
            adj[edges[i][1]].push_back(edges[i][0]);
        }
        long long s=0;
        for(auto i:values)
            s=s+i;
        vector<int>vis(n,0);
        long long k=dfs(0,adj,values,vis);
        return s-k;
    }
};
```
```python []
class Solution:
    def dfs(self, i, adj, v, vis):
        if len(adj[i]) == 1 and i != 0:
            return v[i]
        s = 0
        vis[i] = 1
        for j in adj[i]:
            if vis[j] == 1:
                continue
            s += self.dfs(j, adj, v, vis)
        return min(v[i], s)

    def maximumScoreAfterOperations(self, edges, values):
        n = len(values)
        adj = [[] for _ in range(n)]
        for i in range(n - 1):
            adj[edges[i][0]].append(edges[i][1])
            adj[edges[i][1]].append(edges[i][0])
        s = 0
        for i in values:
            s += i
        vis = [0] * n
        k = self.dfs(0, adj, values, vis)
        return s - k

```
```Java []
import java.util.ArrayList;
import java.util.List;

class Solution {
    public long dfs(int i, List<Integer>[] adj, int[] v, int[] vis) {
        if (adj[i].size() == 1 && i != 0)
            return (long) v[i];
        long s = 0;
        vis[i] = 1;
        for (int j : adj[i]) {
            if (vis[j] == 1)
                continue;
            s += dfs(j, adj, v, vis);
        }
        return Math.min((long) v[i], s);
    }

    public long maximumScoreAfterOperations(int[][] edges, int[] values) {
        int n = values.length;
        List<Integer>[] adj = new ArrayList[n];
        for (int i = 0; i < n; i++) {
            adj[i] = new ArrayList<>();
        }
        for (int i = 0; i < n - 1; i++) {
            adj[edges[i][0]].add(edges[i][1]);
            adj[edges[i][1]].add(edges[i][0]);
        }
        long s = 0;
        for (int i : values)
            s += i;
        int[] vis = new int[n];
        long k = dfs(0, adj, values, vis);
        return s - k;
    }
}

```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00