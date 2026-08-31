# C# Iterative solution O(n)

**Author:** sgasilov
**Votes:** 0
**Link:** [https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/solutions/5503529/](https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/solutions/5503529/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
public class Solution {
    public IList<IList<int>> ReconstructMatrix(int upper, int lower, int[] colsum)
    {
        var result = new List<IList<int>>()
        {
            Enumerable.Repeat(0, colsum.Length).ToList(),
            Enumerable.Repeat(0, colsum.Length).ToList()
        };

        for (int col = 0; col < colsum.Length; col++)
        {
            if (colsum[col] == 0)
            {
                continue;
            }

            if (colsum[col] == 2)
            {
                upper--;
                lower--;
                result[0][col] = 1;
                result[1][col] = 1;
                continue;
            }

            if (lower == 0 || upper > lower)
            {
                upper--;
                result[0][col] = 1;
            }
            else
            {
                lower--;
                result[1][col] = 1;
            }
        }

        if (upper != 0 || lower != 0)
        {
            return new List<IList<int>>();
        }

        return result;
    }
}
```