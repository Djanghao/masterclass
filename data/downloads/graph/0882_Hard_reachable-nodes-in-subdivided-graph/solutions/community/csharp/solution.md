# c# BFS with PriorityQueue

**Author:** dmytro4322
**Votes:** 0
**Link:** [https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/solutions/5790328/](https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/solutions/5790328/)

---

# Code
```csharp []
public class Solution {
    public int ReachableNodes(int[][] edges, int maxMoves, int n) {
        // Element of queue is node, Priority of queue is distance between 0 and Element nodes
        // Nodes which can be reached faster will be processed faster. 
        // It's to find shortest path to node X and then build further routes from this node
        PriorityQueue<int, int> pq = new PriorityQueue<int, int>();
        
        // To track visitted nodes
        HashSet<int> hs = new HashSet<int> { 0 };
        
        // matrix[i,j,0] is distance between i and j nodes
        // matrix[i,j,1] is actually travelled distance between i and j nodes
        // default values are 0
        // matrix[i,j,0]=0 means there is edge from i to j nodes 
        int[,,] matrix = new int[n,n,2];

        // Initialize matrix distances between nodes
        foreach(var edge in edges)
        {
            matrix[edge[0],edge[1], 0] = matrix[edge[1],edge[0], 0] = edge[2] + 1;
        }

        // Initialize priority queue with first-step routes from node 0
        for(int i = 1; i<n; i++)
        {
            if (matrix[0,i,0] > 0)
            {
                // Check if we can reach node i using maxMoves
                if (matrix[0,i,0] <= maxMoves)
                {
                    matrix[0,i,1] = matrix[0,i,0];
                    pq.Enqueue(i, matrix[0,i,0]);
                }
                else
                {
                    // It's still needed to track actual travelled distance
                    matrix[0,i,1] = maxMoves;
                }
            }
        }

        // k - current node
        // p - priority, already travelled distance
        int k, p, newPriority;

        while (pq.TryDequeue(out k, out p))
        {
            // There is no need to process node k if it was processed before 
            // Shorter path was processed before
            if (!hs.Contains(k))
            {
                hs.Add(k);

                for(int i = 0; i<n; i++)
                {
                    if (matrix[k,i, 0] > 0)
                    {
                        newPriority = p + matrix[k,i, 0];

                        if (newPriority <= maxMoves)
                        {
                            // Mark distance as travelled even if node I was visitted before
                            matrix[k,i,1] = matrix[k,i, 0];

                            if (!hs.Contains(i))
                            {
                                pq.Enqueue(i, newPriority);
                            }
                        }
                        else
                        {
                            // Calculate how long we can travel from k to i nodes
                            matrix[k,i, 1] =  matrix[k,i, 0] - newPriority + maxMoves;
                        }
                    }
                }
            }
        }

        int edgeSum;
        int sum = 0;

        // actual calculations
        //.......................................................................
        // case matrix[i, j, 0]=matrix[j,i,0]=10, matrix[i,j,1]=2, matrix[j,i,1]=3
        // then edge wasn't completely passed edgeSum = 5
        // case matrix[i, j, 0]=matrix[j,i,0]=10, matrix[i,j,1]=5, matrix[j,i,1]=6
        // then edge was completely passed. 5+6=11>10. edgeSum=10-1=9. 
        // -1 because 2 nodes were visitted and we can get them from hash set
        for(int i = 0; i<n; i++)
        {
            for(int j = i+1; j<n; j++)
            {
                edgeSum = matrix[i,j,1]+matrix[j,i,1];
                
                if (edgeSum > 0 && edgeSum >= matrix[i,j,0])
                {
                    edgeSum = matrix[i,j,0] - 1;
                }

                sum += edgeSum;
            }
        }

        return hs.Count + sum;
    }
}
```