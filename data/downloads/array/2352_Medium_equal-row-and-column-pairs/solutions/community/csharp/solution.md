# c# Polynomial Hash of a Row/Column

**Author:** zloytvoy
**Votes:** 3
**Link:** [https://leetcode.com/problems/equal-row-and-column-pairs/solutions/3323292/](https://leetcode.com/problems/equal-row-and-column-pairs/solutions/3323292/)

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
    public int EqualPairs(int[][] grid) 
    {
        var n = grid.Length;
        if(n == 1)
        {
            return 1;
        }

        var columnHash = new Dictionary<long, int>();
        var rowHash = new Dictionary<long, int>();
        
        for(int i = 0; i < n; ++i)
        {
            var hash = GetHash(grid[i]);
            columnHash.TryAdd(hash, 0);
            columnHash[hash] += 1;    
        }

        for(int i = 0; i < n; ++i)
        {
            var data = new int[n];
            for(int j = 0; j < n; ++j)
            {
                data[j] = grid[j][i];
            }

            var hash = GetHash(data);
            rowHash.TryAdd(hash, 0);
            rowHash[hash] += 1;    
        }

        var result = 0;
        foreach(var (key,value) in columnHash)
        {
            if(rowHash.ContainsKey(key))
            {
                result += (rowHash[key] * value);
            }
        }

        return result;    
    }

    public long GetHash(int[] data)
    {
        long result = 0;

        var power = 179;
        var modulo = 179424673;

        foreach(var num in data)
        {
            result = (result + (long) power * num)%modulo;
            power = (power * 179) % modulo; 
        }

        return result;
    }
}
```