# ✅ Easy-to-understand C# solution [O(1), O(1)]

**Author:** KamronSaliev
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-total-number-of-colored-cells/solutions/3257206/](https://leetcode.com/problems/count-total-number-of-colored-cells/solutions/3257206/)

---

# Complexity
- Time complexity: $$O(1)$$

- Space complexity: $$O(1)$$

# Code
```
public class Solution 
{
    public long ColoredCells(int n)
    {
        var horizontalLine = 2 * n - 1;
        
        // central cell is excluded
        var verticalLine = 2 * n - 2;
        
        // sum of cells on 4 sides with excluded central horizontal and vertical lines as borders
        var sides = 4 * Sum(n - 2);
        return horizontalLine + verticalLine + sides;
    }

    private long Sum(long n)
    {
        return n * (n + 1) / 2;
    }
}
```

![pleaseupvote.jpg](./images/0.jpeg)
