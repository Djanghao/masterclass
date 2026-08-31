# DFS, detailed explanation, O(n)

**Author:** Igor0
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/solutions/4250851/](https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/solutions/4250851/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
At first find the total sum of `values`:
```
var totalSum = GetTotalSum(values);
```
Then create a dictionary of type `Dictionary<int, HashSet<int>>`:
```
var dic = CreateScoreDictionary(edges);
```
In this dictionary
- Key is a node
- Value is a HashSet of all child-subnodes of the node Key
Then call the method recursively:
```
private long MinimumScoreAfterOperations(int root, Dictionary<int, HashSet<int>> dic, int[] values)
```
In this method we move from the root node to all of its subnodes and calculate the sum of minimums for each subnode, then return the minimum of possible results:
```
var min = 0L;
foreach (var item in dic[root])
{
    min += MinimumScoreAfterOperations(item, dic, values);
}
min = Math.Min(min, values[root]);
return min;
```
Finaly in the `MaximumScoreAfterOperations` method return the result for the total tree:
```
var rs = totalSum - min;
return rs;
```

# Complexity
- Time complexity:
$$O(len(edges))$$

- Space complexity:
$$O(len(edges))$$

# Code
```
public class Solution {
    public long MaximumScoreAfterOperations(int[][] edges, int[] values) {
        var totalSum = GetTotalSum(values);
        var dic = CreateScoreDictionary(edges);
        var min = MinimumScoreAfterOperations(0, dic, values);
        var rs = totalSum - min;
        return rs;
    }
    private long MinimumScoreAfterOperations(int root, Dictionary<int, HashSet<int>> dic, int[] values)
    {
        if (!dic.ContainsKey(root)) return values[root];
        var min = 0L;
        foreach (var item in dic[root])
        {
            min += MinimumScoreAfterOperations(item, dic, values);
        }
        min = Math.Min(min, values[root]);
        return min;
    }
    private Dictionary<int, HashSet<int>> CreateScoreDictionary(int[][] edges)
    {
        var rs = new Dictionary<int, HashSet<int>>();
        for (int i = 0; i < edges.Length; i++)
        {
            if (!rs.ContainsKey(edges[i][0])) rs.Add(edges[i][0], new HashSet<int>());
            rs[edges[i][0]].Add(edges[i][1]);
            if (!rs.ContainsKey(edges[i][1])) rs.Add(edges[i][1], new HashSet<int>());
            rs[edges[i][1]].Add(edges[i][0]);
        }
        TransformDictionary(rs);
        return rs;
    }
    private void TransformDictionary(Dictionary<int, HashSet<int>> dic)
    {
        var list = new List<int> { 0 };
        while (list.Count > 0)
        {
            var list2 = new List<int>();
            for (int i = 0; i < list.Count; i++)
            {
                foreach (var item in dic[list[i]])
                {
                    dic[item].Remove(list[i]);
                    list2.Add(item);
                }
                if (dic[list[i]].Count == 0)
                {
                    dic.Remove(list[i]);
                }
            }
            list = list2;
        }
    }
    private long GetTotalSum(int[] values)
    {
        var rs = 0L;
        for (int i = 0; i < values.Length; i++)
        {
            rs += values[i];
        }
        return rs;
    }
}
```