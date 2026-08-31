# EASY SOLUTION WITH EXPLAINATION AND DIAGRAMS [C++ / JAVA /  PYTHON / KOTLIN ]

**Author:** ganeshdarshan18
**Votes:** 14
**Link:** [https://leetcode.com/problems/magic-squares-in-grid/solutions/5610010/](https://leetcode.com/problems/magic-squares-in-grid/solutions/5610010/)

---

# Approach 
- In question it is given that the numbers in the magic square are from 1 - 9.
- Therefore we can form a maximum of 8 different magic squares with these numbers 
- See the pattern of these magic squares below 

### Magic Square 1
| 4 | 9 | 2 |
|---|---|---|
| 3 | 5 | 7 |
| 8 | 1 | 6 |

**Explanation**: This is one of the possible magic squares. All rows, columns, and diagonals sum to 15. The remaining magic squares can be derived by rotating or reflecting this square.

### Magic Square 2
| 2 | 7 | 6 |
|---|---|---|
| 9 | 5 | 1 |
| 4 | 3 | 8 |

**Explanation**: This square is derived by rotating Magic Square 1 by 90 degrees clockwise.

### Magic Square 3
| 6 | 1 | 8 |
|---|---|---|
| 7 | 5 | 3 |
| 2 | 9 | 4 |

**Explanation**: This square is derived by rotating Magic Square 1 by 180 degrees.

### Magic Square 4
| 8 | 3 | 4 |
|---|---|---|
| 1 | 5 | 9 |
| 6 | 7 | 2 |

**Explanation**: This square is derived by rotating Magic Square 1 by 270 degrees clockwise.

### Magic Square 5
| 4 | 3 | 8 |
|---|---|---|
| 9 | 5 | 1 |
| 2 | 7 | 6 |

**Explanation**: This square is derived by reflecting Magic Square 1 horizontally.

### Magic Square 6
| 2 | 9 | 4 |
|---|---|---|
| 7 | 5 | 3 |
| 6 | 1 | 8 |

**Explanation**: This square is derived by reflecting Magic Square 1 vertically.

### Magic Square 7
| 6 | 7 | 2 |
|---|---|---|
| 1 | 5 | 9 |
| 8 | 3 | 4 |

**Explanation**: This square is derived by rotating Magic Square 5 by 90 degrees clockwise.

### Magic Square 8
| 8 | 1 | 6 |
|---|---|---|
| 3 | 5 | 7 |
| 4 | 9 | 2 |

**Explanation**: This square is derived by rotating Magic Square 5 by 180 degrees.

- Hence these are the all possible magic squares of size 3x3 having numbers from 1 to 9 
- Now we need to just loop through the given grid and store every subgrid 

### Assume the given grid is : 
|  8 |  1 |  6 | 12 | 14 |
|----|----|----|----|----|
|  3 |  5 |  7 | 11 | 10 |
|  4 |  9 |  2 |  7 |  8 |
| 15 | 14 |  1 |  5 |  6 |
|  7 |  6 | 13 |  3 |  4 |

- Starting from the top-left corner, the first 3x3 subgrid would be:


<table>
  <tr>
    <td style="background-color: green; font-weight: bold;">8</td>
    <td style="background-color: green; font-weight: bold;">1</td>
    <td style="background-color: green; font-weight: bold;">6</td>
    <td>12</td>
    <td>14</td>
  </tr>
  <tr>
    <td style="background-color: green; font-weight: bold;">3</td>
    <td style="background-color: green; font-weight: bold;">5</td>
    <td style="background-color: green; font-weight: bold;">7</td>
    <td>11</td>
    <td>10</td>
  </tr>
  <tr>
    <td style="background-color: green; font-weight: bold;">4</td>
    <td style="background-color: green; font-weight: bold;">9</td>
    <td style="background-color: green; font-weight: bold;">2</td>
    <td>7</td>
    <td>8</td>
  </tr>
  <tr>
    <td>15</td>
    <td>14</td>
    <td>1</td>
    <td>5</td>
    <td>6</td>
  </tr>
  <tr>
    <td>7</td>
    <td>6</td>
    <td>13</td>
    <td>3</td>
    <td>4</td>
  </tr>
</table>

- This subgrid is equal to the Magic square no. 8 
- Hence increment the count , similarly traverse through the entire grid and store the every subgrid of size 3*3 
- if subgrid and any of the 8 magic squares that are possible are equal we can increment the count 


# C++
```
class Solution {
public:
    int numMagicSquaresInside(vector<vector<int>>& grid) {
        int n = grid.size();
        int m = grid[0].size();
        if(n<3 || m < 3) return 0 ;
        int cnt = 0 ;
        vector<vector<vector<int>>> magicSq = {
            {{4, 9, 2}, {3, 5, 7}, {8, 1, 6}},
            {{2, 7, 6}, {9, 5, 1}, {4, 3, 8}},
            {{6, 1, 8}, {7, 5, 3}, {2, 9, 4}},
            {{8, 3, 4}, {1, 5, 9}, {6, 7, 2}},
            {{4, 3, 8}, {9, 5, 1}, {2, 7, 6}},
            {{2, 9, 4}, {7, 5, 3}, {6, 1, 8}},
            {{6, 7, 2}, {1, 5, 9}, {8, 3, 4}},
            {{8, 1, 6}, {3, 5, 7}, {4, 9, 2}}
        };
        int rStart = 0 , cStart = 0 ;
        for(rStart = 0 ; rStart <= n-3 ; rStart++){
            for(cStart = 0 ; cStart <= m-3 ; cStart++){
                vector<vector<int>> subgrid(3,vector<int>(3));
                for(int i= 0 ; i < 3 ; i++){
                    for(int j = 0 ; j < 3 ; j++){
                        subgrid[i][j] = grid[i+rStart][j+cStart] ;
                    }
                }
                for(int i = 0 ; i <= 7 ; ++i){
                    if(magicSq[i] == subgrid) cnt++;
                }

            }
        }
        return cnt ;
    }
};
```
# Python 

```
class Solution:
    def numMagicSquaresInside(self, grid: List[List[int]]) -> int:
        n = len(grid)
        m = len(grid[0])
        if n < 3 or m < 3:
            return 0
        cnt = 0
        magic_sq = [
            [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
            [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
            [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
            [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
            [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
            [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
            [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
            [[8, 1, 6], [3, 5, 7], [4, 9, 2]]
        ]
        for r_start in range(n - 2):
            for c_start in range(m - 2):
                subgrid = [grid[r_start + i][c_start:c_start + 3] for i in range(3)]
                if subgrid in magic_sq:
                    cnt += 1
        return cnt

```

# Java 

```
class Solution {
    public int numMagicSquaresInside(int[][] grid) {
        int n = grid.length;
        int m = grid[0].length;
        if (n < 3 || m < 3) return 0;
        int cnt = 0;
        int[][][] magicSq = {
            {{4, 9, 2}, {3, 5, 7}, {8, 1, 6}},
            {{2, 7, 6}, {9, 5, 1}, {4, 3, 8}},
            {{6, 1, 8}, {7, 5, 3}, {2, 9, 4}},
            {{8, 3, 4}, {1, 5, 9}, {6, 7, 2}},
            {{4, 3, 8}, {9, 5, 1}, {2, 7, 6}},
            {{2, 9, 4}, {7, 5, 3}, {6, 1, 8}},
            {{6, 7, 2}, {1, 5, 9}, {8, 3, 4}},
            {{8, 1, 6}, {3, 5, 7}, {4, 9, 2}}
        };
        for (int rStart = 0; rStart <= n - 3; rStart++) {
            for (int cStart = 0; cStart <= m - 3; cStart++) {
                int[][] subgrid = new int[3][3];
                for (int i = 0; i < 3; i++) {
                    for (int j = 0; j < 3; j++) {
                        subgrid[i][j] = grid[rStart + i][cStart + j];
                    }
                }
                for (int i = 0; i <= 7; i++) {
                    if (java.util.Arrays.deepEquals(magicSq[i], subgrid)) {
                        cnt++;
                    }
                }
            }
        }
        return cnt;
    }
}

```

# Kotlin 

```
class Solution {
    fun numMagicSquaresInside(grid: Array<IntArray>): Int {
        val n = grid.size
        val m = grid[0].size
        if (n < 3 || m < 3) return 0
        var cnt = 0
        val magicSq = arrayOf(
            arrayOf(intArrayOf(4, 9, 2), intArrayOf(3, 5, 7), intArrayOf(8, 1, 6)),
            arrayOf(intArrayOf(2, 7, 6), intArrayOf(9, 5, 1), intArrayOf(4, 3, 8)),
            arrayOf(intArrayOf(6, 1, 8), intArrayOf(7, 5, 3), intArrayOf(2, 9, 4)),
            arrayOf(intArrayOf(8, 3, 4), intArrayOf(1, 5, 9), intArrayOf(6, 7, 2)),
            arrayOf(intArrayOf(4, 3, 8), intArrayOf(9, 5, 1), intArrayOf(2, 7, 6)),
            arrayOf(intArrayOf(2, 9, 4), intArrayOf(7, 5, 3), intArrayOf(6, 1, 8)),
            arrayOf(intArrayOf(6, 7, 2), intArrayOf(1, 5, 9), intArrayOf(8, 3, 4)),
            arrayOf(intArrayOf(8, 1, 6), intArrayOf(3, 5, 7), intArrayOf(4, 9, 2))
        )
        for (rStart in 0 until n - 2) {
            for (cStart in 0 until m - 2) {
                val subgrid = Array(3) { IntArray(3) }
                for (i in 0 until 3) {
                    for (j in 0 until 3) {
                        subgrid[i][j] = grid[rStart + i][cStart + j]
                    }
                }
                for (i in 0..7) {
                    if (magicSq[i].contentDeepEquals(subgrid)) {
                        cnt++
                    }
                }
            }
        }
        return cnt
    }
}
```
