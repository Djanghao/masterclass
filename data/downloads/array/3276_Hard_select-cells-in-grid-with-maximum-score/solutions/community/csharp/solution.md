# C# Custom Sort & DFS Solution

**Author:** unagiHuman
**Votes:** 0
**Link:** [https://leetcode.com/problems/select-cells-in-grid-with-maximum-score/solutions/5719203/](https://leetcode.com/problems/select-cells-in-grid-with-maximum-score/solutions/5719203/)

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
```csharp []
public class Solution {
    public int MaxScore(IList<IList<int>> grid) {
        var hashValSet = new HashSet<int>();
        var map = new Dictionary<(int,int),int>();

        var list = new List<(int row, int val)>();
        for(var row = 0; row < grid.Count; row++)
        {
            foreach(var one in  grid[row])
            {
                list.Add((row, one));
            }
        }
        list.Sort((a,b) => b.val - a.val);
      
        return DFS(0,0);

        int DFS(int index, int rows)
        {
            var key = (index,rows);
            if(index >= list.Count)
            {
                return 0;
            }

            if(map.ContainsKey(key))
            {
                return map[key];
            }

            var pair = list[index];
            var row = pair.row;
            var shiftrow = 1 << row;
            var result = 0;
            if( (rows & shiftrow) != shiftrow && !hashValSet.Contains(pair.val))
            {
                var prerows = rows;
                rows |= shiftrow;
                hashValSet.Add(pair.val);
                var nextIndex = GetInsertIndex(pair.val -1);
                
                result = Math.Max(result, DFS(nextIndex, rows) + pair.val);
                
                rows  = prerows;
                hashValSet.Remove(pair.val);
            }
            result = Math.Max(result, DFS(index+1, rows));
            map[key] = result;
            return result;
        }

        int GetInsertIndex(int target)
        {
            var left = 0;
            var right = list.Count;
            while(left < right)
            {
                var mid = left + (right - left)/2;
                var pair = list[mid];
                if(pair.val <= target)
                {
                    right = mid;
                }
                else
                {
                    left = mid+1;
                }
            }
            return left;
        }
    }
}
```