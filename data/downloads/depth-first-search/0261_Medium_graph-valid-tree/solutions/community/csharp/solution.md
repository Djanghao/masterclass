# Simple C# solution DFS/BFS with approach detail

**Author:** mission_2023
**Votes:** 1
**Link:** [https://leetcode.com/problems/graph-valid-tree/solutions/2993061/](https://leetcode.com/problems/graph-valid-tree/solutions/2993061/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. do dfs or bfs just to confirm if the graph is connected
2. if graph is connected then cycle can be detected using
    edged.Length == n-1 
# Complexity
- Time complexity:
- O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
- O(n) 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public bool ValidTree(int n, int[][] edges) {
        Dictionary<int, List<int>> adjList = new Dictionary<int, List<int>>();
        for(int i =0;i<n;i++)
        {
            adjList.Add(i, new List<int>());
        }
        for(int i =0;i<edges.Length;i++)
        {
            adjList[edges[i][0]].Add(edges[i][1]);
            adjList[edges[i][1]].Add(edges[i][0]);
        }

        HashSet<int> visited = new HashSet<int>();
        dfs(0, visited, adjList);
        return visited.Count == n && edges.Length == n-1;
    }

    private void dfs(int i, HashSet<int> visited, Dictionary<int, List<int>> adjList)
    {
        visited.Add(i);
        foreach(int d in adjList[i])
        {
            if(!visited.Contains(d))
                dfs(d, visited, adjList);
        }
    }

private void bfs(HashSet<int> visited, Dictionary<int, List<int>> adjList)
    {
        Queue<int> q = new Queue<int>();
        q.Enqueue(0);
        while(q.Count > 0)
        {
            int i = q.Dequeue();
            if(!visited.Contains(i))
            {
                visited.Add(i);
                foreach(int d in adjList[i])
                {
                    q.Enqueue(d);
                }
            }
        }
    }
}
```