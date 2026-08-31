# Simple BFS approach

**Author:** codemandeals
**Votes:** 2
**Link:** [https://leetcode.com/problems/all-paths-from-source-to-target/solutions/3693929/](https://leetcode.com/problems/all-paths-from-source-to-target/solutions/3693929/)

---

# Intuition
Use BFS to traverse the graph, maintain a list of the node visited, each time we visited the destination node, we add the path to our results



# Approach
<!-- Describe your approach to solving the problem. -->
Add the source node to a list and put the list in a queue;
*while the queue is not empty
*Dequeue to get the path
*pick the last node in the path(current).
*if this node is the destination (len -1) add it to our result(allPaths)

For each of the neighbors of the last node in the path (current)
*create a new path from the path that was dequeued. We need to create a new path, to keep the two paths seperate.
*add the neighbor to the new path
*Enqueue the new path

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(E)$$ where E is the number of vertices, we visited all the vertices once

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(E)$$

# Code
```
public class Solution {
    public IList<IList<int>> AllPathsSourceTarget(int[][] graph) {
        int len = graph.Length;
        var path = new List<int>();
        path.Add(0);
        Queue<List<int>> bfs = new ();
        bfs.Enqueue(path);
        IList<IList<int>> allPaths = new List<IList<int>>();
        
        while(bfs.Count > 0){
            var tempPath = bfs.Dequeue();
            int current = tempPath[tempPath.Count -1];
            if(current == (len -1)) allPaths.Add(new List<int>(tempPath) );
            foreach(int node in graph[current]){
                var newPath = new List<int>(tempPath);
                newPath.Add(node);
                bfs.Enqueue(newPath);
            }
        }

        return allPaths;
    }

}
```