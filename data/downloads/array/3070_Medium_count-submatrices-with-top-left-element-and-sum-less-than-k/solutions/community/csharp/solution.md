# c# speed 94%

**Author:** Edwu5
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/solutions/5238399/](https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/solutions/5238399/)

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
public class Solution {
    public int CountSubmatrices(int[][] grid, int k) {
        int c = grid[0].Length;
        int r = grid.Length; 
        int[] c_sum = new int[c];
        int res = 0;
        for(int j = 0; j < c; j++) c_sum[j] = 0; 
        for(int i = 0; i < r; i++)
        {
           int r_sum = 0;
           for(int j = 0; j < c; j++) 
           {
                r_sum += grid[i][j];
                c_sum[j] += r_sum;
             //   s0 =  c_sum[j];
                if(c_sum[j] <= k) 
                {res++;
               // Console.WriteLine($"A{i}:{j}:{c_sum[j]}");
                }
                else 
                {
                 //   Console.WriteLine($"{i}:{j}:{c_sum[j]}");
                    break;
                }
           } 
        } 
        return res;
    }
}
```