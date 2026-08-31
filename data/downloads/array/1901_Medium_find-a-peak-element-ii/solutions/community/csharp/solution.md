# Similar to Find Peak Element 1

**Author:** lucky_mishra
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-a-peak-element-ii/solutions/3085474/](https://leetcode.com/problems/find-a-peak-element-ii/solutions/3085474/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Think of the rows as an array where we are finding the peak, same conditions as Finding Peak Element 1, 
Then in the cols, find the col index of the max element in that row.

# Complexity
- Time complexity:
mlog(n)
- Space complexity:
O(1)

# Code
```
public class Solution {
    public int[] FindPeakGrid(int[][] mat) {
        
     int begin =0, end = mat.Length-1;  
     int col = 0;      
     while(begin < end)
        {
                int row = begin + (end-begin) /2;       
                col = Array.IndexOf(mat[row], mat[row].Max());
                             
                if(mat[row][col] >  mat[row+1][col])
                    end = row;
                else 
                    begin = row+1;
        }
        return new int[] {end, col};
    }
   
}
```