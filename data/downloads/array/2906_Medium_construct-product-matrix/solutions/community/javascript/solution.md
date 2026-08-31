# ✅☑[C++/C/Java/Python/JavaScript] || Beats 100% || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 20
**Link:** [https://leetcode.com/problems/construct-product-matrix/solutions/4170573/](https://leetcode.com/problems/construct-product-matrix/solutions/4170573/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**

1. The function takes a grid represented as a 2D vector of integers as input and aims to compute the product of elements in a new matrix.

1. A modulo constant (`mod`) is defined to ensure that the values in the matrix do not exceed this constant.

1. The dimensions of the grid, `n` (number of rows) and `m` (number of columns), are determined.

1. An answer matrix (`Ans`) is created, initially initialized with the same values as the grid.

1. The elements of the `Ans` matrix are set to 1, as the cumulative product calculations start from this value.

1. Two cumulative product variables (`Mul`) are used. The first loop calculates the product of elements in the forward direction, and the second loop calculates it in the reverse direction.

1. In both directions, for each element in the grid, it is multiplied by the current cumulative product, and the result is stored in the `Ans` matrix after applying the modulo operation.

1. The cumulative product (`Mul`) is updated for each element, ensuring that it accumulates the product of previous elements.

1. The final `Ans` matrix contains the product of elements in both directions, and it is returned as the result.


# Complexity
- *Time complexity:*
   $$O(n*m)$$
    

- *Space complexity:*
   $$O(n*m)$$
    


# Code
```C++ []

class Solution {
public:
    vector<vector<int>> constructProductMatrix(vector<vector<int>>& grid) {
        const int mod = 12345; // Define the modulo constant.
        int n = grid.size(); // Get the number of rows in the grid.
        int m = grid[0].size(); // Get the number of columns in the grid.
        vector<vector<int>> Ans = grid; // Create a result matrix and initialize it with the grid values.

        // Initialize the result matrix elements to 1.
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                Ans[i][j] = 1;
            }
        }

        long long Mul = 1; // Initialize a variable to keep track of the cumulative product.

        // Calculate the product of elements in the forward direction (left to right, top to bottom).
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                (Ans[i][j] *= Mul) %= mod; // Multiply the element with the cumulative product and apply modulo.
                (Mul *= grid[i][j]) %= mod; // Update the cumulative product.
            }
        }

        Mul = 1; // Reset the cumulative product to 1.

        // Calculate the product of elements in the reverse direction (right to left, bottom to top).
        for (int i = n - 1; i >= 0; i--) {
            for (int j = m - 1; j >= 0; j--) {
                (Ans[i][j] *= Mul) %= mod; // Multiply the element with the cumulative product and apply modulo.
                (Mul *= grid[i][j]) %= mod; // Update the cumulative product.
            }
        }

        return Ans; // Return the product matrix.
    }
};


```


```C []

#include <stdio.h>
#include <stdlib.h>

#define MOD 12345

int** constructProductMatrix(int** grid, int n, int m) {
    int** ans = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        ans[i] = (int*)malloc(m * sizeof(int));
    }

    // Initialize the result matrix elements to 1.
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            ans[i][j] = 1;
        }
    }

    long long mul = 1; // Initialize a variable to keep track of the cumulative product.

    // Calculate the product of elements in the forward direction (left to right, top to bottom).
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            ans[i][j] = (ans[i][j] * mul) % MOD; // Multiply the element with the cumulative product and apply modulo.
            mul = (mul * grid[i][j]) % MOD; // Update the cumulative product.
        }
    }

    mul = 1; // Reset the cumulative product to 1.

    // Calculate the product of elements in the reverse direction (right to left, bottom to top).
    for (int i = n - 1; i >= 0; i--) {
        for (int j = m - 1; j >= 0; j--) {
            ans[i][j] = (ans[i][j] * mul) % MOD; // Multiply the element with the cumulative product and apply modulo.
            mul = (mul * grid[i][j]) % MOD; // Update the cumulative product.
        }
    }

    return ans; // Return the product matrix.
}

int main() {
    // Example usage
    int n = 3;
    int m = 3;
    int** grid = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        grid[i] = (int*)malloc(m * sizeof(int));
    }

    // Initialize the grid with values (example values)
    grid[0][0] = 1;
    grid[0][1] = 2;
    grid[0][2] = 3;
    grid[1][0] = 4;
    grid[1][1] = 5;
    grid[1][2] = 6;
    grid[2][0] = 7;
    grid[2][1] = 8;
    grid[2][2] = 9;

    int** result = constructProductMatrix(grid, n, m);

    // Print the result matrix
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            printf("%d ", result[i][j]);
        }
        printf("\
");
    }

    // Free dynamically allocated memory
    for (int i = 0; i < n; i++) {
        free(grid[i]);
        free(result[i]);
    }
    free(grid);
    free(result);

    return 0;
}


```



```Java []
import java.util.Arrays;

public class Solution {
    public int[][] constructProductMatrix(int[][] grid) {
        final int mod = 12345;
        int n = grid.length;
        int m = grid[0].length;
        int[][] Ans = new int[n][m];

        // Initialize the result matrix elements to 1.
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                Ans[i][j] = 1;
            }
        }

        long Mul = 1; // Initialize a variable to keep track of the cumulative product.

        // Calculate the product of elements in the forward direction (left to right, top to bottom).
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                Ans[i][j] = (int) (Ans[i][j] * Mul % mod); // Multiply the element with the cumulative product and apply modulo.
                Mul = Mul * grid[i][j] % mod; // Update the cumulative product.
            }
        }

        Mul = 1; // Reset the cumulative product to 1.

        // Calculate the product of elements in the reverse direction (right to left, bottom to top).
        for (int i = n - 1; i >= 0; i--) {
            for (int j = m - 1; j >= 0; j--) {
                Ans[i][j] = (int) (Ans[i][j] * Mul % mod); // Multiply the element with the cumulative product and apply modulo.
                Mul = Mul * grid[i][j] % mod; // Update the cumulative product.
            }
        }

        return Ans; // Return the product matrix.
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int[][] grid = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        int[][] result = solution.constructProductMatrix(grid);
        for (int[] row : result) {
            System.out.println(Arrays.toString(row));
        }
    }
}


```

```python3 []

class Solution:
    def constructProductMatrix(self, grid):
        mod = 12345
        n = len(grid)
        m = len(grid[0])
        Ans = [row[:] for row in grid]

        # Initialize the result matrix elements to 1.
        for i in range(n):
            for j in range(m):
                Ans[i][j] = 1

        Mul = 1  # Initialize a variable to keep track of the cumulative product.

        # Calculate the product of elements in the forward direction (left to right, top to bottom).
        for i in range(n):
            for j in range(m):
                Ans[i][j] = Ans[i][j] * Mul % mod  # Multiply the element with the cumulative product and apply modulo.
                Mul = Mul * grid[i][j] % mod  # Update the cumulative product.

        Mul = 1  # Reset the cumulative product to 1.

        # Calculate the product of elements in the reverse direction (right to left, bottom to top).
        for i in range(n - 1, -1, -1):
            for j in range(m - 1, -1, -1):
                Ans[i][j] = Ans[i][j] * Mul % mod  # Multiply the element with the cumulative product and apply modulo.
                Mul = Mul * grid[i][j] % mod  # Update the cumulative product.

        return Ans  # Return the product matrix.

# Example usage
solution = Solution()
grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
result = solution.constructProductMatrix(grid)
for row in result:
    print(row)


```


```javascript []

class Solution {
    constructProductMatrix(grid) {
        const mod = 12345;
        const n = grid.length;
        const m = grid[0].length;
        const Ans = [...grid];

        // Initialize the result matrix elements to 1.
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                Ans[i][j] = 1;
            }
        }

        let Mul = 1; // Initialize a variable to keep track of the cumulative product.

        // Calculate the product of elements in the forward direction (left to right, top to bottom).
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                Ans[i][j] = (Ans[i][j] * Mul) % mod; // Multiply the element with the cumulative product and apply modulo.
                Mul = (Mul * grid[i][j]) % mod; // Update the cumulative product.
            }
        }

        Mul = 1; // Reset the cumulative product to 1.

        // Calculate the product of elements in the reverse direction (right to left, bottom to top).
        for (let i = n - 1; i >= 0; i--) {
            for (let j = m - 1; j >= 0; j--) {
                Ans[i][j] = (Ans[i][j] * Mul) % mod; // Multiply the element with the cumulative product and apply modulo.
                Mul = (Mul * grid[i][j]) % mod; // Update the cumulative product.
            }
        }

        return Ans; // Return the product matrix.
    }
}

// Example usage
const solution = new Solution();
const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const result = solution.constructProductMatrix(grid);
for (const row of result) {
    console.log(row);
}


```


---



# PLEASE UPVOTE IF IT HELPED

---
---


---