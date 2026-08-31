# Easy to grok stateless C# solution (with comments)

**Author:** showmewhatyougot
**Votes:** 4
**Link:** [https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solutions/3043600/](https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solutions/3043600/)

---

# Intuition

This is a similar pattern to other tree questions such as the house robber one inside a tree.

# Approach

- First, turn the parent array representation into something a tree which allows for efficient traversals (like an adjacency matrix)
- Do a DFS and for each node, compute and return two values: max length for the whole subtree of that node and max length for a path starting from that node.
- Then, for that node, check child nodes which don't match character-wise take the 2 highest values, sum them and add one - that is the max path which contains that node as an intermediary node.
- Read the comments

# Complexity
- Time complexity:
$$O(N)$$ - it's basically traversing an n-ary tree

# Code
```
public class Solution {
    public int LongestPath(int[] parent, string s) {
        var n = parent.Length;
        // Build an adjacency 'matrix'
        var adj = Enumerable.Range(0, n)
            .ToDictionary(x => x, x => new HashSet<int>());
        for (var i = 0; i < n; i++) {
            if (parent[i] != -1) {
                adj[parent[i]].Add(i);
            }
        }

        return LongestPath(0, adj, s).Item1;
    }

    // Returning a tuple, to make this stateless
    private (int maxTreePath, int maxBranchPath, char mapping) LongestPath(
        int i, 
        Dictionary<int, HashSet<int>> adj,
        string s
    ) {
        int i, 
        Dictionary<int, HashSet<int>> adj,
        string s
    ) {
        // This is a leaf node. All paths are length 1
        if (!adj[i].Any()) {
            return (1, 1, s[i]);
        }

        var next = adj[i]
            .Select(x => LongestPath(x, adj, s))
            .ToArray();
        var different = next
            .Where(x => x.mapping != s[i])
            .OrderByDescending(x => x.maxBranchPath)
            .Select(x => x.maxBranchPath)
            .Take(2)
            .ToArray();
        
        return (
            // The longest path for this subtree is the max of (all 
            // longest paths from child subtrees) and (the two longest
            // paths starting at the children whith different 
            // mappings + 1 to account for the current node
            Math.Max(
                next.Max(x => x.maxTreePath),
                1 + different.Sum()),
            // 1 + max path starting at children with different 
            // mappings
            (different.Any() ? different.Max() : 0) + 1,
            s[i]
        );
    }
}
```