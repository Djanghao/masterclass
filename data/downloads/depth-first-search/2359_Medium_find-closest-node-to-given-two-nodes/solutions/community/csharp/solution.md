# C# || Walk through graph from both nodes, count distances, minimize

**Author:** amantix
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-closest-node-to-given-two-nodes/solutions/3098660/](https://leetcode.com/problems/find-closest-node-to-given-two-nodes/solutions/3098660/)

---

# Intuition
Walk through graph from each node and count steps and generate two sequences of pairs (node, step).
For each node that was visited in both walks (contains in both sequences) find Max(step).
Return the node that has minimal Max(step) value.
If there is no such node that was met in both walks, return -1;
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
We can use helper function that generates walk sequence of pairs. For convinience (we need to check for loops while walking through graph using hash table) we can generate the resulting sequence in a form of Dictionary (hash map) with Key = node and Value = step.
Though it is not necessary. We could also use HashSet to keep track of visited nodes and generate IEnumerable<int> sequence using `yield return`. Then add step counters by using indexed selector before concatenating two sequences.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```c#
public class Solution
{
    public int ClosestMeetingNode(int[] edges, int node1, int node2)
    {
        return Walk(node1).Concat(Walk(node2))
            .ToLookup(x => x.Key, x => x.Value)
            .Where(x => x.Count() > 1)
            .Select(x => (x.Key, x.Max(y => y)))
            .DefaultIfEmpty((-1, -1))
            .Min(x => (maxDistance: x.Item2, node: x.Item1))
            .node;

        Dictionary<int,int> Walk(int node, int step = 0)
        {
            var visited = new Dictionary<int, int>();
            visited[node] = step++;
            while(edges[node] >= 0)
            {
                node = edges[node];
                if(visited.ContainsKey(node))
                {
                    break;
                }
                visited[node] = step++;
            }
            return visited;
        }
    }
}
```