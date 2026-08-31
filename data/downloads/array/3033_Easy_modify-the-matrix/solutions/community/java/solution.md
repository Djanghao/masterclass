# ✅THE BEST EXPLANATION||Beats 100% Users

**Author:** harshal2024
**Votes:** 13
**Link:** [https://leetcode.com/problems/modify-the-matrix/solutions/4708917/](https://leetcode.com/problems/modify-the-matrix/solutions/4708917/)

---

---
# PLEASE UPVOTE IF YOU LIKE IT \u2705
---
![Screenshot (3250).png](./images/0.png)

---
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

The goal of the code is to create a new matrix, initially identical to the input matrix, and then replace every occurrence of -1 in this new matrix with the maximum value in its respective column.

---
# Approach
<!-- Describe your approach to solving the problem. -->

Initialize a new matrix "ans" of size m x n, initially filled with zeros.
Create a vector "col" of size n, initialized with -1, to store the maximum element in each column.
Iterate through each column of the matrix.
Copy the elements from the original matrix to the "ans" matrix.
Update the "col" vector by finding the maximum element in the current column.
Iterate through each element in the "ans" matrix.
If the element is -1, replace it with the maximum value from its corresponding column stored in the "col" vector.
Return the modified "ans" matrix.
In simpler terms, the code first copies the input matrix to a new matrix. Then, it finds the maximum element in each column and replaces any -1 in the new matrix with the maximum value from its respective column.

---

# Complexity
- Time complexity: O(M*N) 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
 

- Space complexity: O(M*N) 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

---


![download.jpeg](./images/1.jpeg)

---

# Code
C++
```
class Solution {
public:
    vector<vector<int>> modifiedMatrix(vector<vector<int>>& matrix) {
        // Get the number of rows (m) and columns (n) in the matrix
        int m = matrix.size();
        int n = matrix[0].size();

        // Create a new matrix "ans" filled with zeros
        vector<vector<int>> ans(m, vector<int>(n, 0));

        // Create a vector "col" to store maximum elements in each column, initially filled with -1
        vector<int> col(n, -1);

        // Step 1: Iterate through each column of the matrix
        for (int i = 0; i < n; i++) {
            // Step 2: Iterate through each row of the matrix
            for (int j = 0; j < m; j++) {
                // Step 3: Copy elements from the original matrix to the "ans" matrix
                ans[j][i] = matrix[j][i];
                
                // Update the "col" vector with the maximum element in the current column
                col[i] = max(col[i], matrix[j][i]);
            }
        }

        // Step 4: Iterate through each element in the "ans" matrix
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                // Step 5: If the element is -1, replace it with the maximum value from its column
                if (ans[j][i] == -1) {
                    ans[j][i] = col[i];
                }
            }
        }

        // Return the modified "ans" matrix
        return ans;
    }
};

```

---
Python3
```
class Solution:
    def modifiedMatrix(self, matrix: List[List[int]]) -> List[List[int]]:
        # Get the number of rows (m) and columns (n) in the matrix
        m = len(matrix)
        n = len(matrix[0])

        # Create a new matrix "ans" filled with zeros
        ans = [[0] * n for _ in range(m)]

        # Create a list "col" to store maximum elements in each column, initially filled with -1
        col = [-1] * n

        # Step 1: Iterate through each column of the matrix
        for i in range(n):
            # Step 2: Iterate through each row of the matrix
            for j in range(m):
                # Step 3: Copy elements from the original matrix to the "ans" matrix
                ans[j][i] = matrix[j][i]
                
                # Update the "col" list with the maximum element in the current column
                col[i] = max(col[i], matrix[j][i])

        # Step 4: Iterate through each element in the "ans" matrix
        for i in range(n):
            for j in range(m):
                # Step 5: If the element is -1, replace it with the maximum value from its column
                if ans[j][i] == -1:
                    ans[j][i] = col[i]

        # Return the modified "ans" matrix
        return ans

```

---
Java
```
class Solution {
    public int[][] modifiedMatrix(int[][] matrix) {
        // Get the number of rows (m) and columns (n) in the matrix
        int m = matrix.length;
        int n = matrix[0].length;

        // Create a new matrix "ans" filled with zeros
        int[][] ans = new int[m][n];

        // Create an array "col" to store maximum elements in each column, initially filled with -1
        int[] col = new int[n];
        Arrays.fill(col, -1);

        // Step 1: Iterate through each column of the matrix
        for (int i = 0; i < n; i++) {
            // Step 2: Iterate through each row of the matrix
            for (int j = 0; j < m; j++) {
                // Step 3: Copy elements from the original matrix to the "ans" matrix
                ans[j][i] = matrix[j][i];
                
                // Update the "col" array with the maximum element in the current column
                col[i] = Math.max(col[i], matrix[j][i]);
            }
        }

        // Step 4: Iterate through each element in the "ans" matrix
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                // Step 5: If the element is -1, replace it with the maximum value from its column
                if (ans[j][i] == -1) {
                    ans[j][i] = col[i];
                }
            }
        }

        // Return the modified "ans" matrix
        return ans;
    }
} 
```
