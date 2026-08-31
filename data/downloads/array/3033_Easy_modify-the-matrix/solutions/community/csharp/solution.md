# Easy Solution

**Author:** vemohan15
**Votes:** 0
**Link:** [https://leetcode.com/problems/modify-the-matrix/solutions/6094099/](https://leetcode.com/problems/modify-the-matrix/solutions/6094099/)

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
```csharp []
public class Solution {
    public int[][] ModifiedMatrix(int[][] matrix) {
        int[] a=new int[matrix[0].Length];
        int max=-3939;int k=0;
        for(int i=0;i<matrix[0].Length;i++)
        {
            max=-3939;
            for(int j=0;j<matrix.Length;j++)
            {
                //Console.WriteLine(matrix[j][i]+"**");
                if(max<matrix[j][i])
                {
                    max=matrix[j][i];
                    //Console.WriteLine(matrix[j][i]+"***");
                }
            }
            //Console.WriteLine(max+"*");
            a[k++]=max;
            //Console.WriteLine(a[k-1]);
        }
        for(int i=0;i<matrix[0].Length;i++)
        {
            for(int j=0;j<matrix.Length;j++)
            {
                if(matrix[j][i]==-1)
                {
                    matrix[j][i]=a[i];
                    //Console.WriteLine(matrix[j][i]+"*"+a[i]);
                }
            }
        }
        return matrix;
    }
}
```