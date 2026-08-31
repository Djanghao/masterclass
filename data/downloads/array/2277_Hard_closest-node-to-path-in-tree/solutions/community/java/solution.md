# Java DFS+BFS with comments

**Author:** cutkey
**Votes:** 10
**Link:** [https://leetcode.com/problems/closest-node-to-path-in-tree/solutions/2204368/](https://leetcode.com/problems/closest-node-to-path-in-tree/solutions/2204368/)

---

```
/**
The brute force solution is not really hard and easy to understand. More importantly it passes all test cases.
1. Convert list into Graph
2. Generate path from start to end using DFS
3. Find the closest point in the path to the destination by doing a BFS starting from dest.
**/
class Solution {
    private Map<Integer, List<Integer>> graph = new HashMap();
    
    public int[] closestNode(int n, int[][] edges, int[][] query) {
        int[] out = new int[query.length];
        for (int[] edge : edges){
            if(!graph.containsKey(edge[0])){
                graph.put(edge[0], new ArrayList<Integer>());
            }
            if(!graph.containsKey(edge[1])){
                graph.put(edge[1], new ArrayList<Integer>());
            }
            graph.get(edge[0]).add(edge[1]);
            graph.get(edge[1]).add(edge[0]);
        }
        
        for(int i = 0; i < query.length; i++){
            int start = query[i][0], end = query[i][1], dest = query[i][2];
            Set<Integer> path = new HashSet();
            buildPath(start, end, path);
            int minNode = getMinNode(dest, path);
            out[i] = minNode;
           
        }
        return out;
    }
    /**
    Uses DFS to build path
    **/
    private boolean buildPath(int start, int end, Set<Integer> visited) {
        visited.add(start);
        
        if (start == end){
            return true;
        }
        for (int neighbor: graph.get(start)){
            if (!visited.contains(neighbor)){
                if(buildPath(neighbor, end, visited)){
                    return true;
                }
            }
        }
        visited.remove(start); // We remove the node as we can't reach end via this node
        return false;
    }
    /**
    Uses BFS to find nearest neighbor in a set of nodes
    **/
    private int getMinNode(int dest, Set<Integer> s){
        Set<Integer> visited = new HashSet();
        Queue<Integer> q = new ArrayDeque();
        q.add(dest);
        visited.add(dest);
        while(q.size() > 0){
            int node = q.poll();
            if (s.contains(node)) {
                  return node;
            }
            else {
                for (int neighbor: graph.get(node)){
                    if (!visited.contains(neighbor)){
                        visited.add(neighbor);
                        q.add(neighbor);
                    }
                }
            }
        }
        return -1;
    }
}