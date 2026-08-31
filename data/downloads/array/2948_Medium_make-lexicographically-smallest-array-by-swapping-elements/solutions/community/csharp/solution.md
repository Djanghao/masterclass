# Faster than 75%, Math, Sorting, O(n*log(n))

**Author:** Igor0
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements/solutions/4330468/](https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements/solutions/4330468/)

---

# Intuition
Create separate groups conserning the `limit` value.

# Approach
At first create separate groups conserning the `limit` value:
```
var aux = GetAux(nums, limit);
```
The `aux` here has a type `List<List<int>[]>` - a list of groups such as in each group we can change the items. Each group consists of 2 lists:
- `List<int>[0]`: the values of items in array `nums`
- `List<int>[1]`: the indexes of items in array `nums`
Then form the result from the `aux`:
```
for (int i = 0; i < aux.Count; i++)
{
    for (int j = 0; j < aux[i][1].Count; j++)
    {
        rs[aux[i][1][j]] = aux[i][0][j];
    }
}
return rs;
```

# Complexity
- Time complexity:
$$O(n*log(n))$$, where n is the length of `nums`

- Space complexity:
$$O(n)$$, where n is the length of `nums`

# Code
```
public class Solution {
    public int[] LexicographicallySmallestArray(int[] nums, int limit) {
        var aux = GetAux(nums, limit);
        var rs = new int[nums.Length];
        for (int i = 0; i < aux.Count; i++)
        {
            for (int j = 0; j < aux[i][1].Count; j++)
            {
                rs[aux[i][1][j]] = aux[i][0][j];
            }
        }
        return rs;
    }
    private List<List<int>[]> GetAux(int[] nums, int limit)
    {
        var indexes = SortIndex(nums);
        var rs = new List<List<int>[]>();
        rs.Add(new List<int>[] { new List<int> { indexes[0].val }, new List<int> { indexes[0].index } });
        for (int i = 1; i < indexes.Count; i++)
        {
            var prevVal = rs[rs.Count - 1][0][rs[rs.Count - 1][0].Count - 1];
            if (indexes[i].val - prevVal <= limit)
            {
                rs[rs.Count - 1][0].Add(indexes[i].val);
                rs[rs.Count - 1][1].Add(indexes[i].index);
            }
            else
            {
                rs.Add(new List<int>[] { new List<int> { indexes[i].val }, new List<int> { indexes[i].index } });
            }
        }
        for (int i = 0; i < rs.Count; i++)
        {
            rs[i][1].Sort();
        }
        return rs;
    }
    private List<(int val, int index)> SortIndex(int[] nums)
    {
        var rs = new List<(int val, int index)>();
        for (int i = 0; i < nums.Length; i++)
        {
            rs.Add((nums[i], i));
        }
        rs = rs.OrderBy(p => p.val).ToList();
        return rs;
    }
}
```