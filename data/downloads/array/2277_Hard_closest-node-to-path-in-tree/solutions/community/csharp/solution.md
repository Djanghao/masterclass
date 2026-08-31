# Easy to understand C# DFS solution

**Author:** dabdullaev01
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-node-to-path-in-tree/solutions/5485688/](https://leetcode.com/problems/closest-node-to-path-in-tree/solutions/5485688/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int[] ClosestNode(int n, int[][] edges, int[][] queries)
    {
        var result = new int[queries.Length];
        var neighbors = new Dictionary<int, IList<int>>();
        // Store all adajacent nodes.
        foreach (var edge in edges)
        {
            if (neighbors.ContainsKey(edge[0]))
            {
                neighbors[edge[0]].Add(edge[1]);
            }
            else
            {
                neighbors.Add(edge[0], new List<int> { edge[1] });
            }
            if (neighbors.ContainsKey(edge[1]))
            {
                neighbors[edge[1]].Add(edge[0]);
            }
            else
            {
                neighbors.Add(edge[1], new List<int> { edge[0] });
            }
        }

        var seen = new HashSet<int>();
        for (var i = 0; i < queries.Length; i++)
        {
            // Find all middle nodes between query[0] and query[1]
            var query = queries[i];
            ClosestNodeFindMiddleNodes(query[0], query[1], neighbors, seen);
            
            // Find closest node to query[2]
            var closestNode = -1;
            ClosestNodeFindNode(-1, query[2], neighbors, seen, ref closestNode);
            result[i] = closestNode;
            seen.Clear();
        }
        return result;
    }

    private bool ClosestNodeFindMiddleNodes(int start, int end, Dictionary<int, IList<int>> adjacents, HashSet<int> seen)
    {
        seen.Add(start);
        if (start == end)
        {
            return true;
        }
        var result = false;

        foreach (var neighbor in adjacents[start])
        {
            if (seen.Contains(neighbor))
            {
                continue;
            }

            result = result || ClosestNodeFindMiddleNodes(neighbor, end, adjacents, seen);
        }

        if (!result)
        {
            seen.Remove(start);
        }
        return result;
    }

    private void ClosestNodeFindNode(int previous, int current, Dictionary<int, IList<int>> adjacents, HashSet<int> seen, ref int closestNode)
    {
        if (closestNode != -1)
        {
            return;
        }
        if (seen.Contains(current))
        {
            closestNode = current;
            return;
        }
        foreach (var neighbor in adjacents[current])
        {
            if (previous == neighbor)
            {
                continue;
            }

            ClosestNodeFindNode(current, neighbor, adjacents, seen, ref closestNode);
        }
    }
}
```