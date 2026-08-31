# ✅Easy Solution | Go | C#✅

**Author:** shukhratutaboev
**Votes:** 4
**Link:** [https://leetcode.com/problems/row-with-maximum-ones/solutions/3421932/](https://leetcode.com/problems/row-with-maximum-ones/solutions/3421932/)

---

Initialize variables c and m to 0. c represents the index of the row with the maximum count of ones, and m represents the number of ones in that row.

Iterate over each row i in the matrix using a for loop. For each row i, initialize a temporary variable temp to 0, which will count the number of ones in the row.

Iterate over each column j in the current row i using another for loop. For each cell in the row, if the value is 1, increment the value of temp by 1.

Compare the value of temp with the current maximum count of ones m. If temp is greater than m, update the values of c and m to the current row i and the number of ones in the row temp, respectively.

Once all rows have been iterated, return an array containing the index of the row with the maximum count of ones c and the number of ones in that row m.
# Complexity
- Time complexity: $$O(m*n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
 
- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
Go
```
func rowAndMaximumOnes(mat [][]int) []int {
    var c, m int

    for i := 0; i < len(mat); i++ {
        temp := 0
        for j := 0; j < len(mat[i]); j++ {
            if mat[i][j] == 1 {
                temp++
            }
        }

        if temp > m {
            m = temp
            c = i
        }
    }

    return []int{c, m}
}

```
C#
```
public class Solution {
    public int[] RowAndMaximumOnes(int[][] mat) {
        var c = 0;
        var m = 0;

        for (var i = 0; i < mat.Length; i++)
        {
            var temp = 0;
            for (var j = 0; j < mat[i].Length; j++)
            {
                if (mat[i][j] == 1)
                {
                    temp++;
                }
            }

            if (temp > m)
            {
                m = temp;
                c = i;
            }
        }

        return new[] {c, m};
    }
}
```
![a6c83c54-1d1a-4f26-8273-b687d119dd5b_1679889261.1494205.png](./images/0.png)