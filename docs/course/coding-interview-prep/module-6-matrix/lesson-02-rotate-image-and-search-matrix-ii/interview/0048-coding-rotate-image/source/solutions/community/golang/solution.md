# Golang || Easy to Understand || Faster than 100%

**Author:** pixalquarks
**Votes:** 16
**Link:** [https://leetcode.com/problems/rotate-image/solutions/2506228/](https://leetcode.com/problems/rotate-image/solutions/2506228/)

---

**Approach** :-

- Find the transpose of the matrix
- Flip the transpose to get the final result

finding the transpose of a square matrix is pretty easy, just swap the value of the i, j with value at j, i and vice verse for every i,j.
Example for i = 1 and j = 2
matrix[1][2] and matrix[2][1] will swap their values.
It's like flipping the matrix across it's diagonal.
So something like 
||||
| --- | --- | --- |
| 1 | 2 | 3|
| 4 | 5 | 6 |
| 7 | 8 | 9 |

becomes 
||||
| --- | --- | --- |
| 1 | 4 | 7|
| 2 | 5 | 8 |
| 3 | 6 | 9 |

For flipping the matrix, we can use two pointer technique to was values across each end for every row.
|  |  | |
| --- | --- | --- |
| 7 | 4 | 1|
| 8 | 5 | 2 |
| 9 | 6 | 3 |

We can combine both the process i.e. for each row, we will first find it's transpose and then flip it instantly.
```
func rotate(matrix [][]int)  {
    n, m := len(matrix), len(matrix[0])
    for i:= 0; i < n; i++ {
        // Transpose of row
        for j := i; j < m; j++ {
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
        }
        // flipping the row
        for j, k := 0, m-1; j < k; j, k = j+1, k-1{
            matrix[i][j], matrix[i][k] = matrix[i][k], matrix[i][j]
        }
    }
}
```

**Time Complexity** - (n^2)
**Space Complexity** - (1)