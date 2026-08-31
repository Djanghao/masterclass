# Easy Video Solution 🔥 || DFS from Node (Maths) ✅|| C++ || JAVA || PYTHON

**Author:** ayushnemmaniwar12
**Votes:** 15
**Link:** [https://leetcode.com/problems/count-pairs-of-connectable-servers-in-a-weighted-tree-network/solutions/4811490/](https://leetcode.com/problems/count-pairs-of-connectable-servers-in-a-weighted-tree-network/solutions/4811490/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Understand Question clearly and draw few test cases for better understanding 


# ***Easy Video Explanation***

Try for atleast 20 mins then you can watch the video Solution 


https://youtu.be/N45E-FxZLbQ



# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N*N)
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N)
    

# Code


```C++ []
class Solution {
public:
    vector<pair<int,int>>adj[1001];
    int mod;
    int dfs(vector<pair<int,int>>adj[],int par,int n,int s) {
        int ans=0;
        if(s%mod==0)
            ans++;
        for(auto i:adj[n]) {
            if(i.first==par)
                continue;
            ans=ans+dfs(adj,n,i.first,s+i.second);
        }
        return ans;
    }
    int cal(vector<pair<int,int>>adj[],int n) {
        int prev=0;
        int ans=0;
        for(auto i:adj[n]) {
            int k=dfs(adj,n,i.first,i.second);
            ans=ans+prev*k;
            prev=prev+k;
        }
        return ans;
    }
    vector<int> countPairsOfConnectableServers(vector<vector<int>>& v, int k) {
        int n=v.size();
        for(int i=0;i<n;i++) {
            adj[v[i][0]].push_back({v[i][1],v[i][2]});
            adj[v[i][1]].push_back({v[i][0],v[i][2]});
        }
        vector<int>ans;
        mod=k;
        for(int i=0;i<=n;i++) {
            int m=adj[i].size();
            int s=cal(adj,i);
            ans.push_back(s);
        }
        return ans;
    }
};
```
```python []
from typing import List

class Solution:
    def __init__(self):
        self.adj = None
        self.mod = 0

    def dfs(self, par, n, s):
        ans = 0
        if s % self.mod == 0:
            ans += 1
        for i in self.adj[n]:
            if i[0] == par:
                continue
            ans += self.dfs(n, i[0], s + i[1])
        return ans

    def cal(self, n):
        prev = 0
        ans = 0
        for i in self.adj[n]:
            k = self.dfs(n, i[0], i[1])
            ans += prev * k
            prev += k
        return ans

    def countPairsOfConnectableServers(self, v: List[List[int]], k: int) -> List[int]:
        n = len(v)
        self.adj = [[] for _ in range(n + 1)]

        for edge in v:
            self.adj[edge[0]].append([edge[1], edge[2]])
            self.adj[edge[1]].append([edge[0], edge[2]])

        self.mod = k
        ans = []
        for i in range(n + 1):
            m = len(self.adj[i])
            s = self.cal(i)
            ans.append(s)

        return ans

```
```Java []
import java.util.ArrayList;
import java.util.List;

class Solution {
    List<int[]>[] adj;
    int mod;

    int dfs(List<int[]>[] adj, int par, int n, int s) {
        int ans = 0;
        if (s % mod == 0)
            ans++;
        for (int[] i : adj[n]) {
            if (i[0] == par)
                continue;
            ans = ans + dfs(adj, n, i[0], s + i[1]);
        }
        return ans;
    }

    int cal(List<int[]>[] adj, int n) {
        int prev = 0;
        int ans = 0;
        for (int[] i : adj[n]) {
            int k = dfs(adj, n, i[0], i[1]);
            ans = ans + prev * k;
            prev = prev + k;
        }
        return ans;
    }

    public List<Integer> countPairsOfConnectableServers(List<List<Integer>> v, int k) {
        int n = v.size();
        adj = new List[n + 1];
        for (int i = 0; i <= n; i++) {
            adj[i] = new ArrayList<>();
        }

        for (List<Integer> edge : v) {
            adj[edge.get(0)].add(new int[]{edge.get(1), edge.get(2)});
            adj[edge.get(1)].add(new int[]{edge.get(0), edge.get(2)});
        }

        List<Integer> ans = new ArrayList<>();
        mod = k;
        for (int i = 0; i <= n; i++) {
            int m = adj[i].size();
            int s = cal(adj, i);
            ans.add(s);
        }
        return ans;
    }
}


```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00