# DP + DFS

**Author:** fluffyunicorn1125
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximize-sum-of-weights-after-edge-removals/solutions/6077162/](https://leetcode.com/problems/maximize-sum-of-weights-after-edge-removals/solutions/6077162/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Intuitive solution is to remove edges with min weight from nodes with >k degree
But for a graphs like 
edges = [[0,1,2],[1,2,3],[2,3,2]], k = 1
the solution fails because we want to remove the middle edge with weight 3


So greedy decisions might have an impact later on
This motivates dp


# Approach
<!-- Describe your approach to solving the problem. -->
Arbitrarily root the tree at node 0


dp[i][0] = maximum edge sum of subtree at node i if disconnected from parent
dp[i][1] = maximum edge sum of subtree at node i if connected to parent


DFS through the tree


For each children, find the delta between the max of it connected + edge weight vs disconnected
Sort the deltas in decreasing order


Consider all children disconnected first
For dp[i][0], consider the top k deltas to reconnect
For dp[i][1], consider only the top k-1 deltas to reconnect


# Code
```
class Solution {
    static class Edge {
        int to;
        int weight;
        
        Edge(int to, int weight){
            this.to = to;
            this.weight = weight;
        }
    }
    
    public long maximizeSumOfWeights(int[][] edges, int k) {
        int n = edges.length + 1;
        ArrayList<Edge>[] tree = new ArrayList[n];
        
        for(int i = 0; i < n; i++){
            tree[i] = new ArrayList<>();
        }
        
        for(int[] edge : edges){
            int u = edge[0];
            int v = edge[1];
            int w = edge[2];
            tree[u].add(new Edge(v, w));
            tree[v].add(new Edge(u, w));
        }
        
        long[][] dp = new long[n][2];
        dfs(0, -1, tree, dp, k);
        
        return dp[0][0];
    }
    
    public void dfs(int u, int parent, List<Edge>[] tree, long[][] dp, int k) {
        List<Long> ds = new ArrayList<>();
        long sum0 = 0;
        long sum1 = 0;
        
        for(Edge edge : tree[u]){
            int v = edge.to;
            int w = edge.weight;
            if(v == parent) continue;
            
            dfs(v, u, tree, dp, k);
            
            long delta = (long)w + dp[v][1] - dp[v][0];
            ds.add(delta);
            sum0 += dp[v][0];
        }
        
        Collections.sort(ds, Collections.reverseOrder());
        
        dp[u][0] = sum0;
        for(int i = 0; i < Math.min(k, ds.size()); i++){
            if(ds.get(i) > 0){
                dp[u][0] += ds.get(i);
            }
        }
        
        dp[u][1] = sum0;
        for(int i = 0; i < Math.min(k - 1, ds.size()); i++){
            if(ds.get(i) > 0){
                dp[u][1] += ds.get(i);
            }
        }
    }
}
```
