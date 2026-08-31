# C# | Prefix Sum | Clean Code |

**Author:** DanyloKarachentsev
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-product-matrix/solutions/5924328/](https://leetcode.com/problems/construct-product-matrix/solutions/5924328/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use two prefix sum arrays to be able to get product from left and right parts
# Approach
<!-- Describe your approach to solving the problem. -->
1. Build prefix product array
2. Build inverted prefix product array
3. Multiply left part and right part except self
4. To get row and column from one dimentional array divide index / columnSize to get row and divide index % columnSize to get column
# Complexity
- Time complexity: O(N * M)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N * M)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    private const int Modulo = 12345;

    public int[][] ConstructProductMatrix(int[][] grid)
    {
        var prefixProduct = new long[grid.Length * grid[0].Length];
        var invertedPrefixProduct = new long[grid.Length * grid[0].Length];
        var element = 0;

        for (int row = 0; row < grid.Length; row++)
        {
            for (int column = 0; column < grid[0].Length; column++)
            {
                var previousElement = element - 1 >= 0 ? prefixProduct[element - 1] : 1;
                prefixProduct[element] = (previousElement * grid[row][column]) % Modulo;
                element++;
            }
        }

        element = invertedPrefixProduct.Length - 1;
        for (int row = grid.Length - 1; row >= 0; row--)
        {
            for (int column = grid[0].Length - 1; column >= 0; column--)
            {
                var previousElement = element + 1 > invertedPrefixProduct.Length - 1
                    ? 1
                    : invertedPrefixProduct[element + 1];
                invertedPrefixProduct[element] = (previousElement * grid[row][column]) % Modulo;
                element--;
            }
        }

        for (int i = 0; i < prefixProduct.Length; i++)
        {
            var leftProduct = i - 1 < 0 ? 1 : prefixProduct[i - 1];
            var rightProduct = i + 1 > prefixProduct.Length - 1 ? 1 : invertedPrefixProduct[i + 1];

            var row = i / grid[0].Length;
            var column = i % grid[0].Length;
            var result = (leftProduct * rightProduct) % Modulo;

            grid[row][column] = (int)result;
        }

        return grid;
    }
}
```