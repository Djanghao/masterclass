# Top-down dynamic programming

**Author:** winston_wolfe
**Votes:** 0
**Link:** [https://leetcode.com/problems/equalize-strings-by-adding-or-removing-characters-at-ends/solutions/5102177/](https://leetcode.com/problems/equalize-strings-by-adding-or-removing-characters-at-ends/solutions/5102177/)

---

# Intuition
In order to figure out result, you need to first find length of the longest common substring.

# Code
```
public class Solution 
{
    public int MinOperations(string initial, string target) 
    {
        var cache = new int[initial.Length, target.Length];
        var max = 0;

        for (var r = 0; r < initial.Length; r++)
        for (var c = 0; c < target.Length; c++)
            cache[r, c] = -1;

        Impl(0, 0);

        return initial.Length + target.Length - max - max;

        int Impl(int i, int j)
        {
            if (i >= initial.Length || j >= target.Length) return 0;
            
            if (cache[i, j] >= 0) return cache[i, j];

            var result = 0;
            
            if (initial[i] == target[j]) 
            {
                result = Impl(i + 1, j + 1) + 1;
                max = Math.Max(result, max);
            }

            cache[i, j] = result;
            
            Impl(i + 1, j);
            Impl(i, j + 1);

            return result;
        }
    }
}
```