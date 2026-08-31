# Simple solution. Easy to understand (beats 95%)

**Author:** YaJohny
**Votes:** 5
**Link:** [https://leetcode.com/problems/matrix-diagonal-sum/solutions/3123051/](https://leetcode.com/problems/matrix-diagonal-sum/solutions/3123051/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

![image.png](./images/0.png)


# Code
```
public class Solution {
    public int DiagonalSum(int[][] mat)
        {
            int sum = 0;
            for (int i = 0; i < mat.Length; i++)
            {
                for (int j = 0; j < mat.Length; j++)
                {
                    if (i == j)
                    {
                        sum += mat[i][j];
                        continue;
                    }
                    if (i + j == mat.Length - 1)
                    {
                        sum += mat[i][j];
                    }
                }
            }
            return sum;
        }
}
```