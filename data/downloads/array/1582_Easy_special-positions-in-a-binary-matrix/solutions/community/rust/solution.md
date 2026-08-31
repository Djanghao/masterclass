# 🚀✅🚀 100% beats Users by TC || Java, C#, Python, Rust, C++, C, Ruby, Go|| 🔥🔥

**Author:** ilxamovic
**Votes:** 10
**Link:** [https://leetcode.com/problems/special-positions-in-a-binary-matrix/solutions/4398011/](https://leetcode.com/problems/special-positions-in-a-binary-matrix/solutions/4398011/)

---

# Intuition
The problem seems to be asking for the number of special positions in a binary matrix. A position is considered special if it contains a 1 and the sum of elements in its row and column is 1.

# Approach
The provided code iterates through each element of the matrix and checks if it is 1. If it is, it calculates the sum of elements in its row and column and checks if both sums are equal to 1. If they are, the position is considered special, and the result is incremented.

# Complexity
- Time complexity: O(m * n^2), where m is the number of rows and n is the number of columns in the matrix.
- Space complexity: O(1) as no additional space is used.

# Code
```csharp []
public class Solution {
    public int NumSpecial(int[][] mat)
    {
        int result = 0;
        for (int i = 0; i < mat.Length; i++)
        {
            for (int j = 0; j < mat[i].Length; j++)
            {
                if (mat[i][j] == 1)
                {
                    int sumx = 0;
                    int sumy = 0;
                    for (int m = 0; m < mat[i].Length; m++)
                    {
                        sumx += mat[i][m];
                    }
                    for (int k = 0; k < mat.Length; k++)
                    {
                        sumy += mat[k][j];
                    }
                    if (sumx == 1 && sumy == 1)
                    {
                        result++;
                    }
                }
            }
        }
        return result;
    }
}
```
``` Java []
public class Solution {
    public int numSpecial(int[][] mat) {
        int result = 0;

        // Arrays to store the sums of elements in each row and column
        int[] rowSums = new int[mat.length];
        int[] colSums = new int[mat[0].length];

        // Calculate the sums of elements in each row and column
        for (int i = 0; i < mat.length; i++) {
            for (int j = 0; j < mat[i].length; j++) {
                rowSums[i] += mat[i][j];
                colSums[j] += mat[i][j];
            }
        }

        // Check if each 1 is special using the precalculated sums
        for (int i = 0; i < mat.length; i++) {
            for (int j = 0; j < mat[i].length; j++) {
                if (mat[i][j] == 1 && rowSums[i] == 1 && colSums[j] == 1) {
                    result++;
                }
            }
        }

        return result;
    }
}
```
```Python []
class Solution:
    def numSpecial(self, mat: List[List[int]]) -> int:
        result = 0

        # Lists to store the sums of elements in each row and column
        row_sums = [0] * len(mat)
        col_sums = [0] * len(mat[0])

        # Calculate the sums of elements in each row and column
        for i in range(len(mat)):
            for j in range(len(mat[i])):
                row_sums[i] += mat[i][j]
                col_sums[j] += mat[i][j]

        # Check if each 1 is special using the precalculated sums
        for i in range(len(mat)):
            for j in range(len(mat[i])):
                if mat[i][j] == 1 and row_sums[i] == 1 and col_sums[j] == 1:
                    result += 1

        return result
```
``` Go []
func numSpecial(mat [][]int) int {
	result := 0

	// Slices to store the sums of elements in each row and column
	rowSums := make([]int, len(mat))
	colSums := make([]int, len(mat[0]))

	// Calculate the sums of elements in each row and column
	for i := 0; i < len(mat); i++ {
		for j := 0; j < len(mat[i]); j++ {
			rowSums[i] += mat[i][j]
			colSums[j] += mat[i][j]
		}
	}

	// Check if each 1 is special using the precalculated sums
	for i := 0; i < len(mat); i++ {
		for j := 0; j < len(mat[i]); j++ {
			if mat[i][j] == 1 && rowSums[i] == 1 && colSums[j] == 1 {
				result++
			}
		}
	}

	return result
}
```
``` Rust []
impl Solution {
    pub fn num_special(mat: Vec<Vec<i32>>) -> i32 {
        let mut result = 0;

        // Vectors to store the sums of elements in each row and column
        let mut row_sums = vec![0; mat.len()];
        let mut col_sums = vec![0; mat[0].len()];

        // Calculate the sums of elements in each row and column
        for i in 0..mat.len() {
            for j in 0..mat[i].len() {
                row_sums[i] += mat[i][j];
                col_sums[j] += mat[i][j];
            }
        }

        // Check if each 1 is special using the precalculated sums
        for i in 0..mat.len() {
            for j in 0..mat[i].len() {
                if mat[i][j] == 1 && row_sums[i] == 1 && col_sums[j] == 1 {
                    result += 1;
                }
            }
        }

        result
    }
}
```
``` Ruby []
def num_special(mat)
  result = 0

  # Arrays to store the sums of elements in each row and column
  row_sums = Array.new(mat.length, 0)
  col_sums = Array.new(mat[0].length, 0)

  # Calculate the sums of elements in each row and column
  mat.each_with_index do |row, i|
    row.each_with_index do |value, j|
      row_sums[i] += value
      col_sums[j] += value
    end
  end

  # Check if each 1 is special using the precalculated sums
  mat.each_with_index do |row, i|
    row.each_with_index do |value, j|
      if value == 1 && row_sums[i] == 1 && col_sums[j] == 1
        result += 1
      end
    end
  end

  result
end
```
```Cpp []
#include <vector>

class Solution {
public:
    int numSpecial(std::vector<std::vector<int>>& mat) {
        int result = 0;

        // Vectors to store the sums of elements in each row and column
        std::vector<int> row_sums(mat.size(), 0);
        std::vector<int> col_sums(mat[0].size(), 0);

        // Calculate the sums of elements in each row and column
        for (int i = 0; i < mat.size(); i++) {
            for (int j = 0; j < mat[i].size(); j++) {
                row_sums[i] += mat[i][j];
                col_sums[j] += mat[i][j];
            }
        }

        // Check if each 1 is special using the precalculated sums
        for (int i = 0; i < mat.size(); i++) {
            for (int j = 0; j < mat[i].size(); j++) {
                if (mat[i][j] == 1 && row_sums[i] == 1 && col_sums[j] == 1) {
                    result++;
                }
            }
        }

        return result;
    }
};
```
```c []
#include <stdlib.h>

int numSpecial(int** mat, int matSize, int* matColSize) {
    int result = 0;

    // Arrays to store the sums of elements in each row and column
    int* rowSums = (int*)malloc(matSize * sizeof(int));
    int* colSums = (int*)malloc(matColSize[0] * sizeof(int));

    // Initialize rowSums and colSums to zeros
    for (int i = 0; i < matSize; i++) {
        rowSums[i] = 0;
    }
    for (int j = 0; j < matColSize[0]; j++) {
        colSums[j] = 0;
    }

    // Calculate the sums of elements in each row and column
    for (int i = 0; i < matSize; i++) {
        for (int j = 0; j < matColSize[0]; j++) {
            rowSums[i] += mat[i][j];
            colSums[j] += mat[i][j];
        }
    }

    // Check if each 1 is special using the precalculated sums
    for (int i = 0; i < matSize; i++) {
        for (int j = 0; j < matColSize[0]; j++) {
            if (mat[i][j] == 1 && rowSums[i] == 1 && colSums[j] == 1) {
                result++;
            }
        }
    }

    // Free allocated memory
    free(rowSums);
    free(colSums);

    return result;
}
```
![image name](https://i.imgur.com/JdL5kBI.gif)

- Please upvote me !!!