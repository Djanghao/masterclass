# Simple DFS solution | C# | +95% efficient

**Author:** Baymax_
**Votes:** 7
**Link:** [https://leetcode.com/problems/number-of-provinces/solutions/3389234/](https://leetcode.com/problems/number-of-provinces/solutions/3389234/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Apply DFS algorithm and keep track of the visited nodes. If all nodes are not covered in a single trace of DFS, it implies multiple components are present.
The number of such independent/dis-connected components is equals to the number of times we call the DFS from the top level (not including the recursive call, but the one we make at top level)

# Approach
<!-- Describe your approach to solving the problem. -->
As mentioned in the intuition, to find the number of disconnected components in graph check the number of times we need to make a DFS call explicity on the non-visited nodes.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) - as we need visit all nodes once

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n) as we are using a hashset to keep track of visited nodes.

# Code
```
public class Solution {
    public int FindCircleNum(int[][] isConnected) {
        int count = 0;
        HashSet<int> h = new HashSet<int>();
        for (int i = 0; i < isConnected.Length; i++)
        {
            if (!h.Contains(i))
            {
                h.Add(i);
                DFS(isConnected, i, h);
                count++;
            }
        }
        
        return count;
    }
    
    private void DFS(int[][] graph, int i, HashSet<int> h)
    {
        for (int j = 0; j < graph[i].Length; j++)
        {
            if (i != j && graph[i][j] == 1 && !h.Contains(j))
            {
                h.Add(j);
                DFS(graph, j, h);
            }
        }
    }
}
```