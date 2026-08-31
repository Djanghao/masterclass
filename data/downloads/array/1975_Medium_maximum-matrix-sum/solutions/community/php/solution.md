# ✅✅Beats 100% |🔥🔥 Wild - Fire Solution🔥🔥 | Easy and Simple ✅

**Author:** mayana_fazil_khan
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-matrix-sum/solutions/6076990/](https://leetcode.com/problems/maximum-matrix-sum/solutions/6076990/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem involves maximizing the sum of the matrix elements by flipping signs of adjacent elements. The key observation is that we can freely flip signs of any element as long as the total number of negative elements remains consistent modulo 2 (even or odd). The optimal approach is to:

1. Convert all elements to their absolute values.
2. Leave one smallest absolute value negative if the number of negatives in the matrix is odd. This ensures the largest possible sum while respecting the constraints of the operation.
# Approach
<!-- Describe your approach to solving the problem. -->
1. **Iterate through the matrix:**
    - Compute the absolute sum of all elements to determine the theoretical maximum.
    - Count the number of negative elements.
    - Track the smallest absolute value in the matrix.

2. **Adjust for Odd Negatives:**
    - If the number of negative elements is odd, we cannot make all values positive. Subtract 2\xD7smallest_absolute_value from the absolute sum to leave this one value negative.

3. **Return the Result:**
    - The final adjusted sum represents the maximum achievable sum after applying the operations.
# Complexity
- Time complexity:O(n**2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
class Solution:
    def maxMatrixSum(self, matrix: List[List[int]]) -> int:
        # Initialize variables
        total_sum = 0
        num_negatives = 0
        smallest_abs_value = float('inf')
        
        # Iterate through the matrix
        for row in matrix:
            for value in row:
                # Accumulate the total absolute sum
                total_sum += abs(value)
                # Count negative elements
                if value < 0:
                    num_negatives += 1
                # Track the smallest absolute value
                smallest_abs_value = min(smallest_abs_value, abs(value))
        
        # Adjust the sum if the number of negatives is odd
        if num_negatives % 2 == 1:
            total_sum -= 2 * smallest_abs_value
        
        return total_sum

```
```java []
class Solution {
    public long maxMatrixSum(int[][] matrix) {
        long totalSum = 0; // Total absolute sum
        int numNegatives = 0; // Count of negative numbers
        int smallestAbsValue = Integer.MAX_VALUE; // Smallest absolute value
        
        // Traverse the matrix
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                int value = matrix[i][j];
                totalSum += Math.abs(value); // Add absolute value to total sum
                
                if (value < 0) {
                    numNegatives++; // Count negatives
                }
                
                // Track smallest absolute value
                smallestAbsValue = Math.min(smallestAbsValue, Math.abs(value));
            }
        }
        
        // If the number of negatives is odd, adjust the sum
        if (numNegatives % 2 == 1) {
            totalSum -= 2L * smallestAbsValue; // Subtract twice the smallest absolute value
        }
        
        return totalSum;
    }
}

```
```python []
class Solution:
    def maxMatrixSum(self, matrix: List[List[int]]) -> int:
        # Initialize variables
        total_sum = 0
        num_negatives = 0
        smallest_abs_value = float('inf')
        
        # Iterate through the matrix
        for row in matrix:
            for value in row:
                # Accumulate the total absolute sum
                total_sum += abs(value)
                # Count negative elements
                if value < 0:
                    num_negatives += 1
                # Track the smallest absolute value
                smallest_abs_value = min(smallest_abs_value, abs(value))
        
        # Adjust the sum if the number of negatives is odd
        if num_negatives % 2 == 1:
            total_sum -= 2 * smallest_abs_value
        
        return total_sum
```
```ruby []
class Solution
  def max_matrix_sum(matrix)
    total_sum = 0       # Total absolute sum
    num_negatives = 0   # Count of negative numbers
    smallest_abs_value = Float::INFINITY # Smallest absolute value
    
    # Traverse the matrix
    matrix.each do |row|
      row.each do |value|
        total_sum += value.abs # Add absolute value to total sum
        
        # Count negative numbers
        num_negatives += 1 if value < 0
        
        # Track the smallest absolute value
        smallest_abs_value = [smallest_abs_value, value.abs].min
      end
    end
    
    # If the number of negatives is odd, adjust the sum
    if num_negatives.odd?
      total_sum -= 2 * smallest_abs_value # Subtract twice the smallest absolute value
    end
    
    total_sum
  end
end

```
```javascript []
class Solution {
  maxMatrixSum(matrix) {
    let totalSum = 0; // Total absolute sum
    let numNegatives = 0; // Count of negative numbers
    let smallestAbsValue = Infinity; // Smallest absolute value

    // Traverse the matrix
    for (let row of matrix) {
      for (let value of row) {
        totalSum += Math.abs(value); // Add absolute value to total sum

        // Count negative numbers
        if (value < 0) {
          numNegatives++;
        }

        // Track the smallest absolute value
        smallestAbsValue = Math.min(smallestAbsValue, Math.abs(value));
      }
    }

    // If the number of negatives is odd, adjust the sum
    if (numNegatives % 2 === 1) {
      totalSum -= 2 * smallestAbsValue; // Subtract twice the smallest absolute value
    }

    return totalSum;
  }
}

```
```C++ []
#include <vector>
#include <cmath>
#include <algorithm>
#include <limits.h>
using namespace std;

class Solution {
public:
    long long maxMatrixSum(vector<vector<int>>& matrix) {
        long long totalSum = 0; // Total absolute sum
        int numNegatives = 0;  // Count of negative numbers
        int smallestAbsValue = INT_MAX; // Smallest absolute value

        // Traverse the matrix
        for (const auto& row : matrix) {
            for (int value : row) {
                totalSum += abs(value); // Add absolute value to total sum

                // Count negative numbers
                if (value < 0) {
                    numNegatives++;
                }

                // Track the smallest absolute value
                smallestAbsValue = min(smallestAbsValue, abs(value));
            }
        }

        // If the number of negatives is odd, adjust the sum
        if (numNegatives % 2 == 1) {
            totalSum -= 2 * smallestAbsValue; // Subtract twice the smallest absolute value
        }

        return totalSum;
    }
};

```
```C# []
using System;
using System.Collections.Generic;

public class Solution {
    public long MaxMatrixSum(int[][] matrix) {
        long totalSum = 0; // Total absolute sum
        int numNegatives = 0; // Count of negative numbers
        int smallestAbsValue = int.MaxValue; // Smallest absolute value

        // Traverse the matrix
        foreach (var row in matrix) {
            foreach (var value in row) {
                totalSum += Math.Abs(value); // Add absolute value to total sum

                // Count negative numbers
                if (value < 0) {
                    numNegatives++;
                }

                // Track the smallest absolute value
                smallestAbsValue = Math.Min(smallestAbsValue, Math.Abs(value));
            }
        }

        // If the number of negatives is odd, adjust the sum
        if (numNegatives % 2 == 1) {
            totalSum -= 2 * smallestAbsValue; // Subtract twice the smallest absolute value
        }

        return totalSum;
    }
}

```
```C []
#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

// Function to calculate the maximum matrix sum
long long maxMatrixSum(int** matrix, int n) {
    long long totalSum = 0; // Total absolute sum
    int numNegatives = 0;   // Count of negative numbers
    int smallestAbsValue = INT_MAX; // Smallest absolute value

    // Traverse the matrix
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            int value = matrix[i][j];
            totalSum += abs(value); // Add absolute value to total sum

            // Count negative numbers
            if (value < 0) {
                numNegatives++;
            }

            // Track the smallest absolute value
            if (abs(value) < smallestAbsValue) {
                smallestAbsValue = abs(value);
            }
        }
    }

    // If the number of negatives is odd, adjust the sum
    if (numNegatives % 2 == 1) {
        totalSum -= 2 * smallestAbsValue; // Subtract twice the smallest absolute value
    }

    return totalSum;
}

// Helper function to create a 2D array
int** createMatrix(int n) {
    int** matrix = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        matrix[i] = (int*)malloc(n * sizeof(int));
    }
    return matrix;
}

// Helper function to free a 2D array
void freeMatrix(int** matrix, int n) {
    for (int i = 0; i < n; i++) {
        free(matrix[i]);
    }
    free(matrix);
}

// Example usage
int main() {
    int n = 2;
    int** matrix = createMatrix(n);

    matrix[0][0] = 1; matrix[0][1] = -1;
    matrix[1][0] = -1; matrix[1][1] = 1;

    printf("Maximum Matrix Sum: %lld\
", maxMatrixSum(matrix, n));

    freeMatrix(matrix, n);

    n = 3;
    matrix = createMatrix(n);

    matrix[0][0] = 1; matrix[0][1] = 2; matrix[0][2] = 3;
    matrix[1][0] = -1; matrix[1][1] = -2; matrix[1][2] = -3;
    matrix[2][0] = 1; matrix[2][1] = 2; matrix[2][2] = 3;

    printf("Maximum Matrix Sum: %lld\
", maxMatrixSum(matrix, n));

    freeMatrix(matrix, n);

    return 0;
}

```
```Go []
package main

import (
	"math"
)

func maxMatrixSum(matrix [][]int) int64 {
	var totalSum int64 = 0      // Total absolute sum
	numNegatives := 0           // Count of negative numbers
	smallestAbsValue := math.MaxInt64 // Smallest absolute value

	// Traverse the matrix
	for _, row := range matrix {
		for _, value := range row {
			totalSum += int64(abs(value)) // Add absolute value to total sum

			// Count negative numbers
			if value < 0 {
				numNegatives++
			}

			// Track the smallest absolute value
			if abs(value) < smallestAbsValue {
				smallestAbsValue = abs(value)
			}
		}
	}

	// If the number of negatives is odd, adjust the sum
	if numNegatives%2 == 1 {
		totalSum -= 2 * int64(smallestAbsValue) // Subtract twice the smallest absolute value
	}

	return totalSum
}

// Helper function to calculate the absolute value
func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

```
```PHP []
<?php

function maxMatrixSum($matrix) {
    $totalSum = 0;  // Total absolute sum
    $numNegatives = 0;  // Count of negative numbers
    $smallestAbsValue = PHP_INT_MAX; // Smallest absolute value

    // Traverse the matrix
    foreach ($matrix as $row) {
        foreach ($row as $value) {
            $totalSum += abs($value); // Add absolute value to total sum

            // Count negative numbers
            if ($value < 0) {
                $numNegatives++;
            }

            // Track the smallest absolute value
            if (abs($value) < $smallestAbsValue) {
                $smallestAbsValue = abs($value);
            }
        }
    }

    // If the number of negatives is odd, adjust the sum
    if ($numNegatives % 2 == 1) {
        $totalSum -= 2 * $smallestAbsValue; // Subtract twice the smallest absolute value
    }

    return $totalSum;
}

?>

```
![upvote.png](./images/0.png)

