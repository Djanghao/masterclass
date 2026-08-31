# DFS, Hash Table, Recursion, O(n)

**Author:** Igor0
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-good-nodes/solutions/5642583/](https://leetcode.com/problems/count-the-number-of-good-nodes/solutions/5642583/)

---

# Intuition
Use DFS algorithm.

# Approach
A first create a dictionary of children:
```
var children = CreateChildrenDic(edges);
```
Then create a dictionaty with childrens count:
```
var dic = new Dictionary<int, int>();
CountChildrenDic(0, dic, children);
```
After that calculate the result:
```
for (int i = 0; i < edges.Length + 1; i++)
{
    var isGood = true;
    for (int j = 1; j < children[i].Count; j++)
    {
        if (dic[children[i][0]] != dic[children[i][j]])
        {
            isGood = false;
            break;
        }
    }
    if (isGood) rs++;
}
```

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
public class Solution {
    public int CountGoodNodes(int[][] edges)
    {
        var rs = 0;
        var children = CreateChildrenDic(edges);
        var dic = new Dictionary<int, int>();
        CountChildrenDic(0, dic, children);
        for (int i = 0; i < edges.Length + 1; i++)
        {
            var isGood = true;
            for (int j = 1; j < children[i].Count; j++)
            {
                if (dic[children[i][0]] != dic[children[i][j]])
                {
                    isGood = false;
                    break;
                }
            }
            if (isGood) rs++;
        }
        return rs;
    }
    private int CountChildrenDic(int value, Dictionary<int, int> dic, Dictionary<int, List<int>> children)
    {
        var list = children[value];
        var rs = list.Count;
        for (int i = 0; i < list.Count; i++)
        {
            rs += CountChildrenDic(list[i], dic, children);
        }
        dic.Add(value, rs);
        return rs;
    }
    private Dictionary<int, List<int>> CreateChildrenDic(int[][] edges)
    {
        var aux = CreateAuxChildrenDic(edges);
        var level = new List<int> { 0 };
        var rs = new Dictionary<int, List<int>>();
        rs.Add(0, aux[0].ToList());
        while (level.Count > 0)
        {
            var level2 = new List<int>();
            for (int i = 0; i < level.Count; i++)
            {
                foreach (var child in aux[level[i]])
                {
                    aux[child].Remove(level[i]);
                    rs.Add(child, aux[child].ToList());
                    level2.Add(child);
                }
            }
            level = level2;
        }
        return rs;
    }
    private Dictionary<int, HashSet<int>> CreateAuxChildrenDic(int[][] edges)
    {
        var rs = new Dictionary<int, HashSet<int>>();
        for (int i = 0; i < edges.Length; i++)
        {
            if (!rs.ContainsKey(edges[i][0]))
            {
                rs.Add(edges[i][0], new HashSet<int> { edges[i][1] });
            }
            else
            {
                rs[edges[i][0]].Add(edges[i][1]);
            }
            if (!rs.ContainsKey(edges[i][1]))
            {
                rs.Add(edges[i][1], new HashSet<int> { edges[i][0] });
            }
            else
            {
                rs[edges[i][1]].Add(edges[i][0]);
            }
        }
        return rs;
    }
}
```