# C# || Easy & Short DFS solution

**Author:** amantix
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-eventual-safe-states/solutions/3754334/](https://leetcode.com/problems/find-eventual-safe-states/solutions/3754334/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use recursive DFS algorithm

# Approach
<!-- Describe your approach to solving the problem. -->
Run recursive DFS from all nodes to check for terminality. Memoize results by marking visited nodes and terminal nodes. For marked nodes immediately return previous result.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ where $$n$$ denotes the graph size

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ where $$n$$ denotes the graph size

# Code
```
public class Solution
{
    public IList<int> EventualSafeNodes(int[][] graph)
    {
        var terminalNodes = new HashSet<int>();
        var visited = new HashSet<int>();
        return Enumerable.Range(0, graph.Length).Where(IsTerminal).ToArray();

        bool IsTerminal(int node)
        {
            if(!visited.Contains(node))
            {
                visited.Add(node);
                if(graph[node].All(IsTerminal))
                {
                    terminalNodes.Add(node);
                }
            }
            
            return terminalNodes.Contains(node);
        }
    }
}
```