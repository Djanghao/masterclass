# C# simple and easy solution

**Author:** shaahir08
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/solutions/6111558/](https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/solutions/6111558/)

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
    public bool CheckValid(int[][] matrix) {
        int length=matrix.Length;

        for(int i=0;i<length; i++){
            HashSet<int> rowSet = new HashSet<int>();
            HashSet<int> colSet = new HashSet<int>();

            for(int j=0;j<length ;j++){
                rowSet.Add(matrix[i][j]);
                colSet.Add(matrix[j][i]);
            }

            if(rowSet.Count != length||colSet.Count !=length){
                return false;
            }
        }
        return true;
    }
}
```