# Bfs O(n + m)

**Author:** Synner
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-time-when-the-network-becomes-idle/solutions/3245794/](https://leetcode.com/problems/the-time-when-the-network-becomes-idle/solutions/3245794/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Bfs and result is maximum of time of last messages
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
- O(n + m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
- O(n + m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    private void Bfs(List<int>[] graph, int start, int[] dist)
    {
        int n = graph.Length;
        bool[] visited = new bool[n];
        Queue<int> q = new Queue<int>();
        q.Enqueue(start);
        visited[start] = true;
        int count = 0;
        
        while (q.Count > 0)
        {
            int size = q.Count;
            
            count ++;
            while (size -- > 0)
            {
                int v = q.Dequeue();
                foreach (var u in graph[v])
                {
                    if (visited[u]) continue;
                    
                    visited[u] = true;
                    q.Enqueue(u);
                    dist[u] = count;
                }
            }
        }
    }

    public int NetworkBecomesIdle(int[][] edges, int[] patience) {
        int n = patience.Length;
        List<int>[] graph = new List<int>[n];
        int[] dist = new int[n];
        
        for (int i = 0; i < n; i++)
        {
            graph[i] = new List<int>();
        }
        
        foreach (var edge in edges)
        {
            graph[edge[0]].Add(edge[1]);
            graph[edge[1]].Add(edge[0]);
        }
        
        Bfs(graph, 0, dist);
        
        int result = 0;
        
        for (int i = 1; i < n; i++)
        {
            int time = dist[i] * 2;
            int lastTime = time - (time - 1) % patience[i] + time;
            result = Math.Max(result, lastTime);
        }
        
        return result;
    }
}
```