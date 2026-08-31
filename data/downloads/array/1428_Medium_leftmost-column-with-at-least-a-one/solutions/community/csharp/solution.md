# Binary Search solution complexity Row_Count * Log(Column_Countb)

**Author:** SamairaB
**Votes:** 0
**Link:** [https://leetcode.com/problems/leftmost-column-with-at-least-a-one/solutions/4916132/](https://leetcode.com/problems/leftmost-column-with-at-least-a-one/solutions/4916132/)

---

# Intuition
1. Run binary search for each row. 
2. Take min value return from each row.

# Approach
Binary Search

# Complexity
- Time complexity:
Row * Log(column)

- Space complexity:
O(1)

# Code
```
/**
 * // This is BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * class BinaryMatrix {
 *     public int Get(int row, int col) {}
 *     public IList<int> Dimensions() {}
 * }
 */

class Solution {
    public int LeftMostColumnWithOne(BinaryMatrix binaryMatrix) {
         IList<int> dimensions = binaryMatrix.Dimensions();
         int m = dimensions[0];
         int n = dimensions[1];
         
         int ans = -1;
         for(int i = 0; i < m; i ++)
         {
            int index = GetIndex(binaryMatrix, i, n);
            if(index != -1)
            {
                ans = ans == -1 ? index : Math.Min(ans, index);
            }
         }
         
        return ans;
    }

    int GetIndex(BinaryMatrix binaryMatrix, int start, int end)
    {
        int low = 0;
        int high = end -1;
        int ans = -1;

        while(low <= high)
        {
           int mid = (low+high)/2;

           if(binaryMatrix.Get(start, mid) == 1)
           {
               high = mid - 1;
               ans = mid;
           }
           else
           {
               low = mid + 1;
           }
        }

        Console.WriteLine("ans: " + ans);
        return ans;
    }
}
```