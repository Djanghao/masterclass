# Simple spiral traversing | C# | +98% efficient

**Author:** Baymax_
**Votes:** 6
**Link:** [https://leetcode.com/problems/spiral-matrix-ii/solutions/3506521/](https://leetcode.com/problems/spiral-matrix-ii/solutions/3506521/)

---

# Intuition & Approach
<!-- Describe your first thoughts on how to solve this problem. -->
After initializing a new 2-d Array, simply traverse the array from the outer spiral towards inner spiral and place the incrementing numbers

![Screenshot 2023-05-10 062834.png](./images/0.png)


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n^2) - as we need to place (n^2) items in the array of size (n*n), given n

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1) - as we do not use any extra memory other than the resulting 2-d array

## Please upvote if you like the simplicity of the approach

# Code
```
public class Solution {
    public int[][] GenerateMatrix(int n) {
        int[][] result = Initialize(n);
        int num = 1;
        for (int i = 0, j = n - 1; i <= j; i++, j--)
        {
            for (int x = i; x <= j; x++)
            {
                result[i][x] = num++;
            }
            
            for (int x = i + 1; x <= j; x++)
            {
                result[x][j] = num++;
            }
            
            for (int x = j - 1; x >= i; x--)
            {
                result[j][x] = num++;
            }
            
            for (int x = j - 1; x > i; x--)
            {
                result[x][i] = num++;
            }
        }
        
        return result;
    }
    
    private int[][] Initialize(int n)
    {
        int[][] result = new int[n][];
        for (int i = 0; i < n; i++)
        {
            result[i] = new int[n];
        }
        
        return result;
    }
}
```

## Please upvote if you like the simplicity of the approach