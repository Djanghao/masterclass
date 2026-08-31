# ✅☑[C++/Java/Python/JavaScript] || 2 Approaches || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 42
**Link:** [https://leetcode.com/problems/special-positions-in-a-binary-matrix/solutions/4397475/](https://leetcode.com/problems/special-positions-in-a-binary-matrix/solutions/4397475/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**

#### ***Approach 1(Brute Force)***
1. It iterates through each element of the matrix, checking if it equals 1.
1. For each element that equals 1, it checks the entire row and column to see if there are any other '1's apart from the current row or column.
1. If the element has no other '1's in its row and column except for itself, it is considered "special," and the counter 'ans' is incremented.
1. Finally, the function returns the count of "special" elements found in the matrix.

# Complexity
- *Time complexity:*
   $$O(m.n.(m+n)))$$
    

- *Space complexity:*
   $$O(1)$$
    


# Code
```C++ []
class Solution {
public:
    // Function to count the number of "special" elements in the given matrix 'mat'
    int numSpecial(vector<vector<int>>& mat) {
        int ans = 0; // Variable to store the count of "special" elements
        int m = mat.size(); // Number of rows in the matrix
        int n = mat[0].size(); // Number of columns in the matrix
        
        for (int row = 0; row < m; row++) {
            for (int col = 0; col < n; col++) {
                if (mat[row][col] == 0) {
                    continue; // If the element is 0, continue to the next iteration
                }
                
                bool good = true; // Flag to determine if the element is "special"
                
                // Checking the entire column for other '1's except for the current row
                for (int r = 0; r < m; r++) {
                    if (r != row && mat[r][col] == 1) {
                        good = false; // If a '1' is found in the same column in another row, mark as not "special"
                        break;
                    }
                }
                
                // Checking the entire row for other '1's except for the current column
                for (int c = 0; c < n; c++) {
                    if (c != col && mat[row][c] == 1) {
                        good = false; // If a '1' is found in the same row in another column, mark as not "special"
                        break;
                    }
                }
                
                if (good) {
                    ans++; // If the element is "special," increment the count
                }
            }
        }
        
        return ans; // Return the count of "special" elements
    }
};



```
```C []
#include <stdio.h>

int numSpecial(int** mat, int matSize, int* matColSize) {
    int ans = 0;
    int m = matSize; // Number of rows in the matrix
    int n = *matColSize; // Number of columns in the matrix

    for (int row = 0; row < m; row++) {
        for (int col = 0; col < n; col++) {
            if (mat[row][col] == 0) {
                continue; // If the element is 0, continue to the next iteration
            }

            int good = 1; // Flag to determine if the element is "special"

            // Checking the entire column for other '1's except for the current row
            for (int r = 0; r < m; r++) {
                if (r != row && mat[r][col] == 1) {
                    good = 0; // If a '1' is found in the same column in another row, mark as not "special"
                    break;
                }
            }

            // Checking the entire row for other '1's except for the current column
            for (int c = 0; c < n; c++) {
                if (c != col && mat[row][c] == 1) {
                    good = 0; // If a '1' is found in the same row in another column, mark as not "special"
                    break;
                }
            }

            if (good) {
                ans++; // If the element is "special," increment the count
            }
        }
    }

    return ans; // Return the count of "special" elements
}




```
```Java []
class Solution {
    public int numSpecial(int[][] mat) {
        int ans = 0;
        int m = mat.length;
        int n = mat[0].length;
        
        for (int row = 0; row < m; row++) {
            for (int col = 0; col < n; col++) {
                if (mat[row][col] == 0) {
                    continue;
                }
                
                boolean good = true;
                for (int r = 0; r < m; r++) {
                    if (r != row && mat[r][col] == 1) {
                        good = false;
                        break;
                    }
                }
                
                for (int c = 0; c < n; c++) {
                    if (c != col && mat[row][c] == 1) {
                        good = false;
                        break;
                    }
                }
                
                if (good) {
                    ans++;
                }
            }
        }
        
        return ans;
    }
}


```
```python3 []
class Solution:
    def numSpecial(self, mat: List[List[int]]) -> int:
        ans = 0
        m = len(mat)
        n = len(mat[0])
        
        for row in range(m):
            for col in range(n):
                if mat[row][col] == 0:
                    continue
                    
                good = True
                for r in range(m):
                    if r != row and mat[r][col] == 1:
                        good = False
                        break
                
                for c in range(n):
                    if c != col and mat[row][c] == 1:
                        good = False
                        break
                
                if good:
                    ans += 1
        
        return ans


```
```javascript []
function numSpecial(mat) {
    let ans = 0;
    const m = mat.length; // Number of rows in the matrix
    const n = mat[0].length; // Number of columns in the matrix

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (mat[row][col] === 0) {
                continue; // If the element is 0, continue to the next iteration
            }

            let good = true; // Flag to determine if the element is "special"

            // Checking the entire column for other '1's except for the current row
            for (let r = 0; r < m; r++) {
                if (r !== row && mat[r][col] === 1) {
                    good = false; // If a '1' is found in the same column in another row, mark as not "special"
                    break;
                }
            }

            // Checking the entire row for other '1's except for the current column
            for (let c = 0; c < n; c++) {
                if (c !== col && mat[row][c] === 1) {
                    good = false; // If a '1' is found in the same row in another column, mark as not "special"
                    break;
                }
            }

            if (good) {
                ans++; // If the element is "special," increment the count
            }
        }
    }

    return ans; // Return the count of "special" elements
}


```

---

#### ***Approach 2(Pre Count)***
1. It first calculates the count of '1's in each row and column and stores them in the rowCount and colCount vectors, respectively.
1. Then, it iterates through each element of the matrix and checks if the element is '1' and if its corresponding row and column contain exactly one '1'. If so, it counts it as a "special" element.
1. Finally, it returns the count of "special" elements found in the matrix.

# Complexity
- *Time complexity:*
   $$O(m.n)$$
    

- *Space complexity:*
   $$O(m+n)$$
    


# Code
```C++ []

class Solution {
public:
    // Function to count the number of "special" elements in the given matrix 'mat'
    int numSpecial(vector<vector<int>>& mat) {
        int m = mat.size(); // Number of rows in the matrix
        int n = mat[0].size(); // Number of columns in the matrix

        // Vector to store counts of '1's in each row and column
        vector<int> rowCount(m, 0); // Initialize row count vector with 0s
        vector<int> colCount(n, 0); // Initialize column count vector with 0s

        // Counting '1's in each row and column
        for (int row = 0; row < m; row++) {
            for (int col = 0; col < n; col++) {
                if (mat[row][col] == 1) {
                    rowCount[row]++; // Increment row count when '1' is encountered in the row
                    colCount[col]++; // Increment column count when '1' is encountered in the column
                }
            }
        }

        int ans = 0; // Variable to store the count of "special" elements

        // Checking for "special" elements
        for (int row = 0; row < m; row++) {
            for (int col = 0; col < n; col++) {
                if (mat[row][col] == 1) { // If the element is '1'
                    if (rowCount[row] == 1 && colCount[col] == 1) {
                        // If the row and column containing this '1' have exactly one '1' (i.e., the element is "special")
                        ans++; // Increment the count of "special" elements
                    }
                }
            }
        }

        return ans; // Return the count of "special" elements
    }
};


```
```C []
#include <stdio.h>
#include <stdlib.h>

int numSpecial(int** mat, int matSize, int* matColSize) {
    int m = matSize; // Number of rows in the matrix
    int n = *matColSize; // Number of columns in the matrix

    // Array to store counts of '1's in each row and column
    int* rowCount = (int*)calloc(m, sizeof(int)); // Initialize row count array with 0s
    int* colCount = (int*)calloc(n, sizeof(int)); // Initialize column count array with 0s

    // Counting '1's in each row and column
    for (int row = 0; row < m; row++) {
        for (int col = 0; col < n; col++) {
            if (mat[row][col] == 1) {
                rowCount[row]++; // Increment row count when '1' is encountered in the row
                colCount[col]++; // Increment column count when '1' is encountered in the column
            }
        }
    }

    int ans = 0; // Variable to store the count of "special" elements

    // Checking for "special" elements
    for (int row = 0; row < m; row++) {
        for (int col = 0; col < n; col++) {
            if (mat[row][col] == 1) { // If the element is '1'
                if (rowCount[row] == 1 && colCount[col] == 1) {
                    // If the row and column containing this '1' have exactly one '1' (i.e., the element is "special")
                    ans++; // Increment the count of "special" elements
                }
            }
        }
    }

    free(rowCount);
    free(colCount);
    return ans; // Return the count of "special" elements
}




```
```Java []
class Solution {
    public int numSpecial(int[][] mat) {
        int m = mat.length;
        int n = mat[0].length;
        int[] rowCount = new int[m];
        int[] colCount = new int[n];
        
        for (int row = 0; row < m; row++) {
            for (int col = 0; col < n; col++) {
                if (mat[row][col] == 1) {
                    rowCount[row]++;
                    colCount[col]++;
                }
            }
        }
        
        int ans = 0;
        for (int row = 0; row < m; row++) {
            for (int col = 0; col < n; col++) {
                if (mat[row][col] == 1) {
                    if (rowCount[row] == 1 && colCount[col] == 1) {
                        ans++;
                    }
                }
            }
        }
        
        return ans;
    }
}


```
```python3 []

class Solution:
    def numSpecial(self, mat: List[List[int]]) -> int:
        m = len(mat)
        n = len(mat[0])
        row_count = [0] * m
        col_count = [0] * n
        
        for row in range(m):
            for col in range(n):
                if mat[row][col] == 1:
                    row_count[row] += 1
                    col_count[col] += 1
        
        ans = 0
        for row in range(m):
            for col in range(n):
                if mat[row][col] == 1:
                    if row_count[row] == 1 and col_count[col] == 1:
                        ans += 1

        return ans

```
```javascript []
function numSpecial(mat) {
    const m = mat.length; // Number of rows in the matrix
    const n = mat[0].length; // Number of columns in the matrix

    // Arrays to store counts of '1's in each row and column
    const rowCount = new Array(m).fill(0); // Initialize row count array with 0s
    const colCount = new Array(n).fill(0); // Initialize column count array with 0s

    // Counting '1's in each row and column
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (mat[row][col] === 1) {
                rowCount[row]++; // Increment row count when '1' is encountered in the row
                colCount[col]++; // Increment column count when '1' is encountered in the column
            }
        }
    }

    let ans = 0; // Variable to store the count of "special" elements

    // Checking for "special" elements
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (mat[row][col] === 1) { // If the element is '1'
                if (rowCount[row] === 1 && colCount[col] === 1) {
                    // If the row and column containing this '1' have exactly one '1' (i.e., the element is "special")
                    ans++; // Increment the count of "special" elements
                }
            }
        }
    }

    return ans; // Return the count of "special" elements
}


```

---


# PLEASE UPVOTE IF IT HELPED

---
---


---