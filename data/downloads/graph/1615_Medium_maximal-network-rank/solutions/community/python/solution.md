# Efficient code + Video Explanation || Easy to understand || C++ || Java || Python

**Author:** shivam-727
**Votes:** 30
**Link:** [https://leetcode.com/problems/maximal-network-rank/solutions/3924982/](https://leetcode.com/problems/maximal-network-rank/solutions/3924982/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
find maximum and second maximum by checking the edge if there is edge between them ans will reduce by 1 and it will give answer.

For detailed explanation you can refer to my youtube channel (Hindi Language)
https://youtube.com/@LetsCodeTogether72/videos
or link in my profile.Here,you can find any solution in playlists monthwise from june 2023 with detailed explanation.i upload daily leetcode solution video with short and precise explanation (5-10) minutes.

Note : **i disccussed 2 approaches in the video in depth.**

# Approach
<!-- Describe your approach to solving the problem. -->

1. Create an adjacency list (`adj`) and an indegree array (`indegree`) for each node.
2. Iterate through the `roads` list, incrementing the indegree for both endpoints and updating the adjacency list.
3. Find the maximum indegree among all nodes and identify nodes with this maximum indegree.
4. If there are multiple nodes with the maximum indegree:
   - Check pairs of these nodes for direct connections.
   - If no direct connection exists, return `2 * maxdegree` as maximal network rank.
5. If there's only one node (`mxid`) with the maximum indegree:
   - Iterate through all nodes except `mxid`.
   - Calculate rank for each node based on its indegree and connections to `mxid`.
   - Keep track of the maximum rank.
6. Return the maximum rank obtained.


# Complexity
- Time complexity:$$O(V+E)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(V+E)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` C++ []
class Solution {
public:
    int maximalNetworkRank(int n, vector<vector<int>>& roads) {
        vector<unordered_set<int>> adj(n);
        vector<int> indegree(n, 0);
        for (auto& edge: roads){
            int v=edge[0], w=edge[1];
            indegree[v]++;
           indegree[w]++;
            adj[v].insert(w);
            adj[w].insert(v);
        }
        int maxdegree=0;
        for(int i=0;i<indegree.size();i++){
          maxdegree=max(maxdegree,indegree[i]);
        }
        vector<int> maxindex; 
        for(int i=0; i<n; i++){
            if(indegree[i]==maxdegree) maxindex.push_back(i);
        }
        int samemaxdegree=maxindex.size();
        if (samemaxdegree>1){
            for (int i=1; i<samemaxdegree; i++){
                for (int j=0; j<i; j++)
                    if (adj[maxindex[i]].count(maxindex[j])==0) {
                       cout<<maxindex[i]<<maxindex[j];
                         return 2*maxdegree;
                    }
                        
            }
            return 2*maxdegree-1;
        }
        int mxid=maxindex[0];
        int max_rank=0;
        for(int j=0; j<n; j++){
            if (j==mxid) continue;
            int rank=maxdegree+indegree[j]-adj[mxid].count(j);
            max_rank=max(max_rank, rank);
            cout<<mxid;
        }
        return max_rank;
    }
};
```
```java []
import java.util.*;

class Solution {
    public int maximalNetworkRank(int n, int[][] roads) {
        List<Set<Integer>> adj = new ArrayList<>();
        int[] indegree = new int[n];
        
        for (int i = 0; i < n; i++) {
            adj.add(new HashSet<>());
        }
        
        for (int[] edge : roads) {
            int v = edge[0], w = edge[1];
            indegree[v]++;
            indegree[w]++;
            adj.get(v).add(w);
            adj.get(w).add(v);
        }
        
        int maxdegree = 0;
        for (int i = 0; i < n; i++) {
            maxdegree = Math.max(maxdegree, indegree[i]);
        }
        
        List<Integer> maxindex = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            if (indegree[i] == maxdegree) {
                maxindex.add(i);
            }
        }
        
        int samemaxdegree = maxindex.size();
        if (samemaxdegree > 1) {
            for (int i = 1; i < samemaxdegree; i++) {
                for (int j = 0; j < i; j++) {
                    if (!adj.get(maxindex.get(i)).contains(maxindex.get(j))) {
                        System.out.println(maxindex.get(i) + " " + maxindex.get(j));
                        return 2 * maxdegree;
                    }
                }
            }
            return 2 * maxdegree - 1;
        }
        
        int mxid = maxindex.get(0);
        int max_rank = 0;
        for (int j = 0; j < n; j++) {
            if (j == mxid) {
                continue;
            }
            int rank = maxdegree + indegree[j] - (adj.get(mxid).contains(j) ? 1 : 0);
            max_rank = Math.max(max_rank, rank);
            System.out.println(mxid);
        }
        
        return max_rank;
    }
}

```
```python []
class Solution:
    def maximalNetworkRank(self, n: int, roads: List[List[int]]) -> int:
        adj = [set() for _ in range(n)]
        indegree = [0] * n
        
        for edge in roads:
            v, w = edge
            indegree[v] += 1
            indegree[w] += 1
            adj[v].add(w)
            adj[w].add(v)
        
        maxdegree = max(indegree)
        
        maxindex = [i for i in range(n) if indegree[i] == maxdegree]
        
        samemaxdegree = len(maxindex)
        
        if samemaxdegree > 1:
            for i in range(1, samemaxdegree):
                for j in range(i):
                    if maxindex[i] not in adj[maxindex[j]]:
                        print(maxindex[i], maxindex[j])
                        return 2 * maxdegree
                    
            return 2 * maxdegree - 1
        
        mxid = maxindex[0]
        max_rank = 0
        
        for j in range(n):
            if j == mxid:
                continue
            rank = maxdegree + indegree[j] - (1 if j in adj[mxid] else 0)
            max_rank = max(max_rank, rank)
            print(mxid)
        
        return max_rank

```

