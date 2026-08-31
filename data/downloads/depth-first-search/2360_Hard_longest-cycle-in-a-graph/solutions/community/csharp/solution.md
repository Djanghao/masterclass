# C# DFS with memoization

**Author:** Dmitriy-Maksimov
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-cycle-in-a-graph/solutions/3341712/](https://leetcode.com/problems/longest-cycle-in-a-graph/solutions/3341712/)

---

# Approach
From each node use DFS to calculate distance to each node we reach.
If we found a node with distance `!= -1` - we find a cycle. The length of that cycle is the current distance minus the distance to that node.
To check if we reached the node during the current DFS cycle, we strore the starting node (`startIndex`) and compare current node (`i`) with it.
Use memoization to avoid calculting distances multiple times.

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```
public class Solution
{
    public int LongestCycle(int[] edges)
    {
        var result = -1;
        var memo = new List<(int, int)>(Enumerable.Repeat((-1, -1), edges.Length));

        for (var i = 0; i < edges.Length; ++i)
        {
            var currentDistance = 0;
            
            for (var j = i; j != -1; j = edges[j])
            {
                var (distance, startIndex) = memo[j];
                if (distance == -1)
                {
                    memo[j] = (currentDistance++, i);
                }
                else
                {
                    if (startIndex == i)
                    {
                        // Found cycle => record the result
                        result = Math.Max(result, currentDistance - distance);
                    }

                    break;
                }
            }
        }

        return result;
    }
}
```