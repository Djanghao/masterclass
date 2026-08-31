# Beats 100% on runtime [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/solutions/6004979/](https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/solutions/6004979/)

---

# Intuition
Determine how many employees can be invited to a meeting based on their favorite colleagues, ensuring that each employee sits next to their favorite. This can be visualized as finding cycles and branches in a directed graph where each employee points to their favorite.

# Approach
Use depth-first search (DFS) to find cycles in the graph represented by the favorite array, while also tracking the maximum height of branches that can be formed from cycles, combining the longest cycle length and the sum of arm lengths to maximize the number of invited employees.

# Complexity
- Time complexity:
O(n) because each employee is processed once during DFS.

- Space complexity:
O(n) for the storage of visited nodes and the adjacency list.

# Code
```csharp []
public class Solution
{
    // To determine length of cycle in graph
    private (bool, (int, int)) Dfs(int node, int[] favorite, int[] cyc, bool[] cycVis)
    {
        if (cyc[node] != -1)
            return (false, (node, cyc[node]));
        if (cycVis[node])
            return (true, (node, 1));

        cycVis[node] = true;
        var p = Dfs(favorite[node], favorite, cyc, cycVis);
        
        if (!p.Item1)
        {
            cyc[node] = p.Item2.Item2;
            return p;
        }

        cyc[node] = p.Item2.Item2;

        if (p.Item2.Item1 == node)
            return (false, p.Item2);
        return (true, (p.Item2.Item1, p.Item2.Item2 + 1));
    }

    // To find the length of largest cycle in the graph
    private int FindLargestCycleLength(int[] favorite)
    {
        int[] cyc = new int[favorite.Length];
        Array.Fill(cyc, -1);
        bool[] cycVis = new bool[favorite.Length];
        int ans = 0;

        for (int i = 0; i < favorite.Length; i++)
        {
            if (cyc[i] != -1)
                continue;

            var p = Dfs(i, favorite, cyc, cycVis);
            ans = Math.Max(ans, p.Item2.Item2);
        }

        return ans;
    }

    // To find the height of a node in the modified adjacency list
    private int FindHeight(List<List<int>> adjList, int node)
    {
        int height = 0;
        foreach (var neighbor in adjList[node])
            height = Math.Max(height, FindHeight(adjList, neighbor));
        return height + 1;
    }

    // Function to return sum of all arms
    private int FindSumOfArms(List<List<int>> adjList, int[] favorite)
    {
        bool[] vis = new bool[favorite.Length];
        int ans = 0;

        for (int i = 0; i < favorite.Length; i++)
        {
            if (vis[i])
                continue;

            if (favorite[favorite[i]] == i)
            {
                vis[i] = true;
                vis[favorite[i]] = true;

                // Remove the bidirectional connection
                adjList[i].Remove(favorite[i]);
                adjList[favorite[i]].Remove(i);

                ans += FindHeight(adjList, i) + FindHeight(adjList, favorite[i]);
            }
        }

        return ans;
    }

    // Main Function
    public int MaximumInvitations(int[] favorite)
    {
        List<List<int>> adjList = new List<List<int>>(favorite.Length);
        for (int i = 0; i < favorite.Length; i++)
        {
            adjList.Add(new List<int>()); // Initialize each list
        }

        for (int i = 0; i < favorite.Length; i++)
            adjList[favorite[i]].Add(i);

        int ans1 = FindLargestCycleLength(favorite);
        int ans2 = FindSumOfArms(adjList, favorite);
        return Math.Max(ans1, ans2);
    }
}

```