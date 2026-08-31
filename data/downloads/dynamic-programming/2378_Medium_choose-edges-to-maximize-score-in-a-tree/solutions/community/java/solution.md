# Java | 2 Solutions (DP or No DP) | Take or Not Take | Explained.

**Author:** Student2091
**Votes:** 7
**Link:** [https://leetcode.com/problems/choose-edges-to-maximize-score-in-a-tree/solutions/2441609/](https://leetcode.com/problems/choose-edges-to-maximize-score-in-a-tree/solutions/2441609/)

---

It's a bit weird how https://leetcode.com/problems/binary-tree-cameras/ is a hard level question while this is a medium. 

#### Take or Not Take (Pre-Order)
Let's look at pre-order DFS solution first. **It is not optimal. For optimal solution, skip to the bottom.** but it may help you understand where I am coming from.

For each edge, we can either take or not take. For each node looking **down**, we consider these two options.
1. If we take any edge, let's say, the one connecting to `Child A`, the problem reduces to `sum(children of child A) + sum(children of current node except child A)`
2. If we skip all edges, the problem reduces to `sum(children of current node)`.

So, we will need memo array. It will have 2 states. 
`memo[i][j] = the max sum rooted at node i, j = 0, if we can take an edge from this node to its children, j = 1 if we can't`.

In order to efficiently compute the value for all the edges to children that we take one by one, we will compute the sum for `skip` first, then we can subtract the skip value for `child X`, then add the value for take and its edge weight. 

We start at the root node with `j = 0`.

`Time O(N)`
`Space O(N)`
```Java
class Solution {
    public long maxScore(int[][] edges) {
        int root = 0, n = edges.length;
        List<int[]>[] map = new ArrayList[n];
        Arrays.setAll(map, o -> new ArrayList<>());
        for (int i = 0; i < n; i++){ // bulid the map and find the root
            if (edges[i][0] >= 0){
                map[edges[i][0]].add(new int[]{i, edges[i][1]});
            }else{
                root = i;
            }
        }
        return dfs(0, root, map, new Long[n][2]);
    }

    private long dfs(int mode, int cur, List<int[]>[] map, Long[][] memo){
        if (memo[cur][mode] != null){
            return memo[cur][mode];
        }
        long skip = 0, take = 0;
        for (int[] m : map[cur]){ // first we calcuate the sum of we skip it all.
            skip += dfs(0, m[0], map, memo);
        }
        if (mode == 0) for (int[] m : map[cur]){ // then we calculate for each edge, the max sum if we take it.
            take = Math.max(take, skip - dfs(0, m[0], map, memo) + dfs(1, m[0], map, memo) + m[1]);
        }
        return memo[cur][mode] = Math.max(take, skip);
    }
}
```
#### Take or Not Take (Post-Order)
But actually, I mentioned that this problem is similar to Binary Tree Camera at the start for a reason.
We don't have to look **down**. We can instead look **up** like we would in Binary Tree Cameras LeetCode Problem.

The concept is very much still the same, except this time we will pass back to its parent an array of 2 element `[max of can take,  max of cannot take]`, indicating whether the parent node can take this edge. To calculate the max of taking 1 edge, we only care about the `max(can take + weight - cannot take)`, similar to the pre-order section above.

With Post-Order DFS, there is no need for a memo array, and is therefore 2 times faster than the pre-order solution.

`Time O(N)`
`Space O(N)`
```Java
class Solution {
    public long maxScore(int[][] edges) {
        int root = 0, n = edges.length;
        List<int[]>[] map = new ArrayList[n];
        Arrays.setAll(map, o -> new ArrayList<>());
        for (int i = 0; i < n; i++){
            if (edges[i][0] >= 0){
                map[edges[i][0]].add(new int[]{i, edges[i][1]});
            }else{
                root = i;
            }
        }
        long[] ans = dfs(root, map); // [can take, cannot take]
        return Math.max(ans[0], ans[1]);
    }

    private long[] dfs(int cur, List<int[]>[] map){
        long skip = 0, take = 0;
        for (int[] m : map[cur]){
            long[] res = dfs(m[0], map);
            skip += res[1];
            take = Math.max(take, res[0] - res[1] + m[1]);
        }
        return new long[]{skip, take+skip};
    }
}
```
