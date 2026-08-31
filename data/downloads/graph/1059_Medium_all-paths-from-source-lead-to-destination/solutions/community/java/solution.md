# [Java] DFS Solution simple more than article problem solution

**Author:** muhammad-bahaa
**Votes:** 6
**Link:** [https://leetcode.com/problems/all-paths-from-source-lead-to-destination/solutions/1290045/](https://leetcode.com/problems/all-paths-from-source-lead-to-destination/solutions/1290045/)

---

```
class Solution {
    public boolean leadsToDestination(int n, int[][] edges, int source, int destination) {

        Map<Integer, List<Integer>> graph = new HashMap();
        
        for(int[] edge : edges){
            graph.putIfAbsent(edge[0], new ArrayList());
            graph.get(edge[0]).add(edge[1]);
        }
        
        return dfs(source, destination, graph, new HashSet());
    }
    
    private boolean dfs(int node, int destination,Map<Integer, List<Integer>> graph, Set<Integer> seen){
        if(!graph.containsKey(node) && node == destination) return true;  
        if(!graph.containsKey(node) || seen.contains(node)) return false;
        
        for(int child : graph.get(node)){   
            seen.add(node);
            if(!dfs(child, destination, graph, seen))
                return false;
            seen.remove(node);
        }
        return true;
    }
}
```