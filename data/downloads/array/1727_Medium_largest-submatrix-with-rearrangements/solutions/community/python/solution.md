# ✅ Beats 100% - Explained with [ Video ] - Simple Sorting - Visualized Too

**Author:** lancertech6
**Votes:** 82
**Link:** [https://leetcode.com/problems/largest-submatrix-with-rearrangements/solutions/4330299/](https://leetcode.com/problems/largest-submatrix-with-rearrangements/solutions/4330299/)

---

![Screenshot 2023-11-26 085349.png](./images/0.png)

<!-- # YouTube Video Explanation:

[https://youtu.be/biPaIwFMISI](https://youtu.be/biPaIwFMISI)

**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 500 Subscribers*
*Current Subscribers: 429*

--- -->
# Example Explanation
Let's break down the process step by step using an example matrix:

**Example Matrix:**
```
[
 [0, 0, 1],
 [1, 1, 1],
 [1, 0, 1]
]
```

**Step 1: Preprocessing**
```
[
 [0, 0, 1],
 [1, 1, 2],
 [2, 0, 3]
]
```
- For each cell `matrix[i][j] = 1`, update it with the height of consecutive 1s ending at this cell (`matrix[i][j] += matrix[i-1][j]`).

**Step 2: Sorting Rows**
Sort each row in non-decreasing order.
```
[
 [0, 0, 1],
 [1, 1, 2],
 [0, 2, 3]
]
```

**Step 3: Calculate Area**
Iterate through each row and calculate the area for each cell.
```
[
 [0, 0, 1],   Area: row[j]*k = 1*1
 [1, 1, 2],   Area: Max(row[j]*k) = Max(2x1,1x2,1x3)
 [0, 2, 3]    Area: Max(row[j]*k) = Max(3x1,2x2)
]
```
- For each cell, the area is the height * width. 
- For example in the last row, we are moving from backwards to forward, so j starts with n-1 and k=1.
- In the first iteration row[j]= 3 but k = 1, so area becomes 3 but in the next iteration, row[j]=2 and k=2 so the area becomes 4, which is the maximum of all the areas of submatrix.

**Step 4: Maximum Area**
The maximum area among all cells is 4.

**Explanation:**
The maximum area of the submatrix containing only 1s after rearranging the columns optimally is 4, achieved at `matrix[2][2]`.

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem asks for the area of the largest submatrix containing only 1s after rearranging the columns optimally. The solution involves preprocessing the matrix to store the height of consecutive 1s ending at each cell. Then, for each row, we sort the heights in non-decreasing order and calculate the area for each possible submatrix.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Iterate through the matrix starting from the second row (`i = 1`).
2. For each cell `matrix[i][j]`:
   - If `matrix[i][j]` is 1, update it to store the height of consecutive 1s ending at this cell by adding the height of the previous row's corresponding cell (`matrix[i - 1][j]`).
3. After preprocessing, for each row, sort the row in non-decreasing order.
4. For each cell in the sorted row, calculate the area of the submatrix that ends at this cell, considering the consecutive 1s.
   - The area is given by `height * width`, where `height` is the height of consecutive 1s ending at this cell, and `width` is the position of the cell in the sorted row.
   - Update the maximum area accordingly.
5. Return the maximum area as the result.

# Complexity
- Time Complexity: O(m * n * log(n)) - Sorting is done for each row.
- Space Complexity: O(1) - No additional space is used except for variables.

# Code

```java []
class Solution {
    public int largestSubmatrix(int[][] matrix) {
        int m = matrix.length, n = matrix[0].length;
        for (int i = 1; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (matrix[i][j] == 1) {
                    matrix[i][j] = matrix[i - 1][j] + 1;
                }
            }
        }
        int ans = 0;
        for (var row : matrix) {
            Arrays.sort(row);
            for (int j = n - 1, k = 1; j >= 0 && row[j] > 0; --j, ++k) {
                int s = row[j] * k;
                ans = Math.max(ans, s);
            }
        }
        return ans;
    }
}
```
```cpp []
class Solution
{
public:
    int largestSubmatrix(vector<vector<int>>& matrix)
    {
        int m = matrix.size(), n = matrix[0].size();
        int ans = 0;
        for(int j = 0; j < n; j++)
            for(int i = 1; i < m; i++)
                if(matrix[i][j] == 1)
                    matrix[i][j] += matrix[i-1][j];
        for(int i = 0; i < m; i++)
        {
            sort(matrix[i].begin(), matrix[i].end());
            reverse(matrix[i].begin(), matrix[i].end());
            for(int j = 0; j < n; j++)
                ans = max(ans, matrix[i][j]*(j+1));
        }
        return ans;
    }
};
```
```python []
class Solution(object):
    def largestSubmatrix(self, matrix):
        m, n = len(matrix), len(matrix[0])
        
        for i in range(1, m):
            for j in range(n):
                if matrix[i][j] == 1:
                    matrix[i][j] += matrix[i - 1][j]
        
        ans = 0
        
        for row in matrix:
            row.sort(reverse=True)
            for j in range(n):
                ans = max(ans, row[j] * (j + 1))
        
        return ans
```
```javascript []
var largestSubmatrix = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    for (let i = 1; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (matrix[i][j] === 1) {
                matrix[i][j] += matrix[i - 1][j];
            }
        }
    }
    
    let ans = 0;
    
    matrix.forEach(row => {
        row.sort((a, b) => b - a);
        for (let j = 0, k = 1; j < n && row[j] > 0; ++j, ++k) {
            const s = row[j] * k;
            ans = Math.max(ans, s);
        }
    });
    
    return ans;
};
```
<!-- ![upvote1.jpeg](./images/1.jpeg) -->
