# Iterative BFS

**Author:** winston_wolfe
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-for-contradictions-in-equations/solutions/4910918/](https://leetcode.com/problems/check-for-contradictions-in-equations/solutions/4910918/)

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
public class Solution 
{
    public bool CheckContradictions(IList<IList<string>> equations, double[] values) 
    {
        var neighbors = new Dictionary<string, List<(string Name, double Weight)>>();

        for (var i = 0; i < equations.Count; i++)
        {
            var equation = equations[i];

            if (neighbors.TryGetValue(equation[0], out var list))
                list.Add((equation[1], values[i]));
            else 
                neighbors.Add(equation[0], new List<(string, double)> { (equation[1], values[i]) });
        }

        var distances = new Dictionary<string, double>();
        var queue = new Queue<(string Name, double Weight)>();
        var visited = new HashSet<string>();
        foreach (var startingNode in neighbors.Keys)
        {
            queue.Enqueue((startingNode, 1));
            while (queue.TryDequeue(out var item))
            {
                if (distances.TryGetValue(item.Name, out var existing))
                {
                    if (Math.Abs(existing - item.Weight) > 0.00001) return true;
                }
                else
                    distances.Add(item.Name, item.Weight);

                if (visited.Contains(item.Name)) continue;
                visited.Add(item.Name);

                if (!neighbors.ContainsKey(item.Name)) continue;
                foreach (var neighbor in neighbors[item.Name])
                    queue.Enqueue((neighbor.Name, neighbor.Weight * item.Weight));
            }
            distances.Clear();
        }
        return false;
    }
}
```