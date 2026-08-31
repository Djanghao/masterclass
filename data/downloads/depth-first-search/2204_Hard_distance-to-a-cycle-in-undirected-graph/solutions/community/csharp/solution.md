# Only BFS

**Author:** pjotrix
**Votes:** 0
**Link:** [https://leetcode.com/problems/distance-to-a-cycle-in-undirected-graph/solutions/6097476/](https://leetcode.com/problems/distance-to-a-cycle-in-undirected-graph/solutions/6097476/)

---

# Intuition
The data given can be represented with graph. The graph can be formed with a tree and an extra edge, so we have n edges (important for complexity analysis). If we can find the cycle (the "core") we can easily calculate the distances of the remaining nodes by using BFS.

# Approach
First we find the cycle in the graph by removing the leaves using BFS till no leaf left. The cycle nodes have 0 distance. By getting the neighbours of the cycle nodes we get the nodes with distance of 1, then we get the nodes that connect to the (unvisited) cycle neighbours to find the nodes with distance of 2 and so on untill we run out of nodes. We can (again) use BFS to do that. 
# Complexity
- Time complexity:
O(n), because we visit each nodes a couple of times.

- Space complexity:
O(n), because the extra space is two n-long array.

# Code
```csharp []
public class Solution {
    public int[] DistanceToCycle(int n, int[][] edges)
    {
        Node[] nodes = new Node[n];
        Node[] cycle = new Node[n];
        
        for (int i = 0; i < n; i++)
        {
            nodes[i] = new Node{ Index = i };
            cycle[i] = new Node{ Index = i };
        }

        foreach (var edge in edges)
        {
            nodes[edge[0]].Neighbours.Add(nodes[edge[1]]);
            nodes[edge[1]].Neighbours.Add(nodes[edge[0]]);

            cycle[edge[0]].Neighbours.Add(cycle[edge[1]]);
            cycle[edge[1]].Neighbours.Add(cycle[edge[0]]);
        }

        Queue<Node> leaves = new();

        foreach (var leaf in cycle.Where(x => x.Neighbours.Count == 1)) leaves.Enqueue(leaf);

        while (leaves.Count > 0)
        {
            Queue<Node> newLeaves = new();

            foreach(var leaf in leaves)
            {
                var leafNeighbour = leaf.Neighbours[0];
                leafNeighbour.Neighbours.Remove(leaf);
                if (leafNeighbour.Neighbours.Count == 1) newLeaves.Enqueue(leafNeighbour);
                leaf.Neighbours.Clear();
            }

            leaves = newLeaves;
        }

        Queue<Node> level = new();
        foreach(var node in cycle.Where(x => x.Neighbours.Count == 2)) level.Enqueue(nodes[node.Index]);

        foreach(var node in cycle)
        {
            var currNode = nodes[node.Index];
            foreach(var cycleNeighbour in node.Neighbours) currNode.Neighbours.Remove(nodes[cycleNeighbour.Index]);
        }

        int currDistance = 0;

        while(level.Count > 0)
        {
            Queue<Node> newLevel = new();

            while(level.TryDequeue(out var currNode) == true)
            {
                currNode.Distance = currDistance;
                
                for (int i = 0; i < currNode.Neighbours.Count; i++)
                {
                    var currNeighbourNode = currNode.Neighbours[i];

                    currNeighbourNode.Neighbours.Remove(currNode);
                    newLevel.Enqueue(currNeighbourNode);
                }                
            }
            
            currDistance++;
            level = newLevel;
        }

        return nodes.Select(x => x.Distance).ToArray();
    }

    public class Node
    {        
        public int Index;
        public int Distance;
        public List<Node> Neighbours = new();
    }
}
```