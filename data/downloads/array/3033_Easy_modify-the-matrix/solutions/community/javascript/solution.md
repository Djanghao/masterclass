# 【Video】Loop twice in a column direction

**Author:** niits
**Votes:** 7
**Link:** [https://leetcode.com/problems/modify-the-matrix/solutions/5665389/](https://leetcode.com/problems/modify-the-matrix/solutions/5665389/)

---

# Intuition
Loop twice in a column direction

# Solution Video

https://youtu.be/6lFX5qwcBn8

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 7,683
Thank you for your support!

---

# Approach

My strategy is that simply we try to find max value in each column at frist and find `-1` and replace it with the max value.

---

\u2B50\uFE0F Points

We need loop twice in the comlumn direction.

---

```
matrix = 

[1,2,-1]
[4,-1,6]
[7,8,9]
```

First of all, we will loop in a column at index 0 to find max value.

```
 \u2193
[1,2,-1]
[4,-1,6]
[7,8,9]

max value is 7
```
Then we will loop the same column again and replace it with the max value. But in column at index 0, there is no `-1`, so move next.


We will loop column at index 1. First of all, try to find max value.
```
   \u2193
[1,2,-1]
[4,-1,6]
[7,8,9]

max value is 8
```
Then try to replace `-1` with max value. In the end,
```
   \u2193
[1,2,-1]
[4,8,6]
[7,8,9]

```
We will repeat the same process for a column at index 2. In the end,
```
return [[1,2,9],[4,8,6],[7,8,9]]
```


---

\u2B50\uFE0F Points

Loop twice in a column direction.

- We will find the max value in the first loop.
- We will replace `-1` with the max value in the second loop.

---

Easy\uD83D\uDE06\uFF01
Let's see solution code and step by step algorithm!


---

# Complexity
- Time complexity: $$O(m * n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(m * n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Solution Code
```python []
class Solution:
    def modifiedMatrix(self, matrix: List[List[int]]) -> List[List[int]]:
        m = len(matrix) # row
        n = len(matrix[0]) # column
        answer = matrix.copy()

        for c in range(n):
            max_val = max(matrix[r][c] for r in range(m))
            for r in range(m):
                if matrix[r][c] == -1:
                    answer[r][c] = max_val
        
        return answer
```
```javascript []
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function(matrix) {
    const m = matrix.length; // row
    const n = matrix[0].length; // column
    const answer = matrix.map(row => [...row]); // Make a deep copy of the matrix

    for (let c = 0; c < n; c++) {
        let maxVal = -Infinity;
        for (let r = 0; r < m; r++) {
            maxVal = Math.max(maxVal, matrix[r][c]);
        }
        for (let r = 0; r < m; r++) {
            if (matrix[r][c] === -1) {
                answer[r][c] = maxVal;
            }
        }
    }

    return answer;    
};
```
```java []
class Solution {
    public int[][] modifiedMatrix(int[][] matrix) {
        int m = matrix.length; // row
        int n = matrix[0].length; // column
        int[][] answer = new int[m][n];

        for (int r = 0; r < m; r++) {
            answer[r] = Arrays.copyOf(matrix[r], n);
        }

        for (int c = 0; c < n; c++) {
            int maxVal = Integer.MIN_VALUE;
            for (int r = 0; r < m; r++) {
                maxVal = Math.max(maxVal, matrix[r][c]);
            }
            for (int r = 0; r < m; r++) {
                if (matrix[r][c] == -1) {
                    answer[r][c] = maxVal;
                }
            }
        }

        return answer;        
    }
}
```
```C++ []
class Solution {
public:
    vector<vector<int>> modifiedMatrix(vector<vector<int>>& matrix) {
        int m = matrix.size(); // row
        int n = matrix[0].size(); // column
        vector<vector<int>> answer(matrix);

        for (int c = 0; c < n; c++) {
            int maxVal = numeric_limits<int>::min();
            for (int r = 0; r < m; r++) {
                maxVal = max(maxVal, matrix[r][c]);
            }
            for (int r = 0; r < m; r++) {
                if (matrix[r][c] == -1) {
                    answer[r][c] = maxVal;
                }
            }
        }

        return answer;        
    }
};
```

## Step by step algorithm

### Initialization:
```python
m = len(matrix) # Get the number of rows in the matrix
n = len(matrix[0]) # Get the number of columns in the matrix
answer = matrix.copy() # Make a shallow copy of the matrix
```
Explanation:
- `m` is assigned the length of the matrix (number of rows).
- `n` is assigned the length of the first row of the matrix (number of columns).
- `answer` is created as a shallow copy of the input matrix.

### Iterating Through Columns:
```python
for c in range(n):
    max_val = max(matrix[r][c] for r in range(m))
```
Explanation:
- The code iterates through each column of the matrix using `for c in range(n)`.
- Within each iteration, it finds the maximum value of the elements in the current column using the `max()` function and a generator expression.
- `max_val` stores the maximum value found in the current column.

### Iterating Through Rows:
```python
for r in range(m):
    if matrix[r][c] == -1:
        answer[r][c] = max_val
```
Explanation:
- After finding the maximum value for the current column, the code iterates through each row in the matrix.
- Within each row, it checks if the element at the corresponding column is equal to `-1`.
- If the element is `-1`, it means it needs to be modified, so the corresponding element in the `answer` matrix is updated to the maximum value of that column.

### Return Modified Matrix:
```python
return answer
```
Explanation:
- Once all the elements have been checked and modified as necessary, the modified `answer` matrix is returned.

---

Thank you for reading my post.
\u2B50\uFE0F Please upvote it and don't forget to subscribe to my channel!

\u25A0 Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

\u25A0 Twitter
https://twitter.com/CodingNinjaAZ

\u2B50\uFE0F I recently created a video on how I've been using LeetCode to learn.

https://youtu.be/bU_dXCOWHls
