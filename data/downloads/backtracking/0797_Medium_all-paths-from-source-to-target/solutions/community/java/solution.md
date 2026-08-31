# Simple Java Solution using DFS and BFS(100% Faster)

**Author:** Sarthak_Singh_
**Votes:** 51
**Link:** [https://leetcode.com/problems/all-paths-from-source-to-target/solutions/2969408/](https://leetcode.com/problems/all-paths-from-source-to-target/solutions/2969408/)

---

# **Using DFS 100% Faster**

```
class Solution {
    public List<List<Integer>> allPathsSourceTarget(int[][] graph) {
        List<List<Integer>> ans = new LinkedList();
        List<Integer> current = new ArrayList();
        current.add(0);
        dfs(0,current,graph,graph.length-1,ans);
        return ans; 
    }
    private void dfs(int src, List<Integer> current, int graph[][], int dest, List<List<Integer>> ans){
        if(src == dest){
            ans.add(new ArrayList(current));
            return;
        }
        for(int n : graph[src]){
            current.add(n);
            dfs(n,current,graph,dest,ans);
            current.remove(current.size()-1);
        }
    }
}

```
# Using BFS
```
class Solution {
    public List<List<Integer>> allPathsSourceTarget(int[][] graph) {
     List<List<Integer>> ans = new LinkedList();
     Queue<List<Integer>> bfs  =new LinkedList();
     bfs.add(Arrays.asList(0));
     int dest = graph.length -1;

     while(!bfs.isEmpty()){
         List<Integer> path = bfs.poll();
         int current = path.get(path.size()-1);
           if(current == dest){
             ans.add(new ArrayList(path));
           }
              for(int node : graph[current]){
                   List<Integer> newPath = new ArrayList(path);
                   newPath.add(node);
                   bfs.add(newPath);
                }
        }
        return ans;

    }
}

```