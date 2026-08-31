# Java | Topological Sort

**Author:** mansibhardwaj50499
**Votes:** 8
**Link:** [https://leetcode.com/problems/loud-and-rich/solutions/2021757/](https://leetcode.com/problems/loud-and-rich/solutions/2021757/)

---

```
class Solution {
    public int[] loudAndRich(int[][] richer, int[] quiet) {
        int n = quiet.length;
        int[]res = new int[n];
        List<Integer>[] graph = new ArrayList[n];
        for(int i=0;i<n;i++)
            graph[i] = new ArrayList<>();
        Arrays.fill(res,-1);
        int[]indegree = new int[n];
        for(int[]edge : richer){
            graph[edge[0]].add(edge[1]);
            indegree[edge[1]]++;
        }
        Queue<Integer> q = new LinkedList<>();
        for(int i=0;i<n;i++){
            if(indegree[i]==0) q.add(i);
            res[i] = i;
        }
        while(!q.isEmpty()){
            int u = q.poll();
            for(int v : graph[u]){
                if(quiet[v]>quiet[u]){
                    quiet[v] = quiet[u];
                    res[v]=res[u];
                }
                indegree[v]--;
                if(indegree[v]==0) q.offer(v);
            }
        }
        return res;
    }
}
```