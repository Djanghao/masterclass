# C# | Beats 100%, Hash Table, O(n)

**Author:** achnologia
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/solutions/5941980/](https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/solutions/5941980/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int[] QueryResults(int limit, int[][] queries) {
        var colorMap = new Dictionary<int, int>();
        var ballMap = new Dictionary<int, int>();
        var result = new int[queries.Length];

        for(var i = 0; i < queries.Length; i++)
        {
            var ball = queries[i][0];
            var color = queries[i][1];

            if(ballMap.TryGetValue(ball, out var previousColor))
            {
                if(previousColor != color)
                {
                    colorMap[previousColor] -= 1;

                    if(colorMap[previousColor] == 0)
                    {
                        colorMap.Remove(previousColor);
                    }
                }
                else
                {
                    result[i] = colorMap.Count;
                    continue;
                }
            }

            ballMap[ball] = color;

            if(!colorMap.TryAdd(color, 1))
            {
                colorMap[color] += 1;
            }

            result[i] = colorMap.Count;
        }

        return result;
    }
}
```