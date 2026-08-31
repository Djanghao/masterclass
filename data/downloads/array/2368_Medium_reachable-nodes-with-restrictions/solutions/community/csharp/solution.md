# Beats 90% | DFS traversal

**Author:** cPej6S40ao
**Votes:** 0
**Link:** [https://leetcode.com/problems/reachable-nodes-with-restrictions/solutions/5965723/](https://leetcode.com/problems/reachable-nodes-with-restrictions/solutions/5965723/)

---

# Code
```csharp []
public class Solution {
    public int ReachableNodes(int n, int[][] edges, int[] restricted) {
        List<int> restrictedList = new List<int>(restricted);
        // contructing adjacency list
        List<List<int>> adjacenceyList = new List<List<int>>();

        for(int i=0;i<n;i++)
        {
            var temp = new List<int>();
            adjacenceyList.Add(temp);
        }

        for(int i=0;i<edges.Length;i++)
        {
            // as undirected add on both sides
            var edge1 = edges[i][0];
            var edge2 = edges[i][1];

            adjacenceyList[edge1].Add(edge2);
            adjacenceyList[edge2].Add(edge1);
        }

        // DFS traversal
        Stack<int> dfsTraversal = new Stack<int>();
        bool[] visited = new bool[n];
        dfsTraversal.Push(0);

        int count = 0;

        while(dfsTraversal.Count>0)
        {
            int curr = dfsTraversal.Peek();
            dfsTraversal.Pop();
            if(!restrictedList.Contains(curr) && visited[curr]==false)
            {
                count++;
                for(int i=0;i<adjacenceyList[curr].Count;i++)
                {
                    dfsTraversal.Push(adjacenceyList[curr][i]);
                }
            }
            visited[curr]=true;
        }

        return count;
    }
}
```