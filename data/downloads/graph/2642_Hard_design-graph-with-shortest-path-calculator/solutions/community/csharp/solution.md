# Priority Queue Implementation Using C#

**Author:** keperkjr
**Votes:** 3
**Link:** [https://leetcode.com/problems/design-graph-with-shortest-path-calculator/solutions/4274530/](https://leetcode.com/problems/design-graph-with-shortest-path-calculator/solutions/4274530/)

---

```
public class Graph {
    List<List<KeyValuePair<int, int>>> adjList;

    public Graph(int n, int[][] edges) {
        adjList = new List<List<KeyValuePair<int, int>>>();
        for (int i = 0; i < n; i++) {
            adjList.Add(new List<KeyValuePair<int, int>>());
        }
        foreach (int[] e in edges) {
            AddEdge(e);        
        }
    }
    
    public void AddEdge(int[] edge) {
        adjList[edge[0]].Add(new KeyValuePair<int, int>(edge[1], edge[2]));
    }
    
    public int ShortestPath(int node1, int node2) {
        int n = adjList.Count;
        var pq = new PriorityQueue<List<int>, List<int>>(
            Comparer<List<int>>.Create((a, b) => a[0].CompareTo(b[0]))
        );

        int[] costForNode = new int[n];
        Array.Fill(costForNode, int.MaxValue);
        costForNode[node1] = 0;

        var root = new List<int>() { 0, node1 };
        pq.Enqueue(root, root);

        while (pq.Count > 0) {
            var curr = pq.Dequeue();
            int currCost = curr[0];
            int currNode = curr[1];

            if (currCost > costForNode[currNode]) {
                continue;
            }
            if (currNode == node2) {
                return currCost;
            }
            foreach (var neighbor in adjList[currNode]) {
                int neighborNode = neighbor.Key;
                int cost = neighbor.Value;
                int newCost = currCost + cost;

                if (newCost < costForNode[neighborNode]) {
                    costForNode[neighborNode] = newCost;
                    var newPath = new List<int>() { newCost, neighborNode };
                    pq.Enqueue(newPath, newPath);                    
                }
            }
        }

        return -1;        
    }
}

/**
 * Your Graph object will be instantiated and called as such:
 * Graph obj = new Graph(n, edges);
 * obj.AddEdge(edge);
 * int param_2 = obj.ShortestPath(node1,node2);
 */
```