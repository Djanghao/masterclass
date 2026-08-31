# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/right-triangles/solutions/5116705/](https://leetcode.com/problems/right-triangles/solutions/5116705/)

---

```Java []
public class Solution {

    private int rows;
    private int columns;

    public long numberOfRightTriangles(int[][] matrix) {
        rows = matrix.length;
        columns = matrix[0].length;

        int[] horizontalFrequency = new int[columns];
        int[] verticalFrequency = new int[rows];
        recordFrequencyOfOnes(horizontalFrequency, verticalFrequency, matrix);

        return countNumberOfRightTriangles(horizontalFrequency, verticalFrequency, matrix);
    }

    private void recordFrequencyOfOnes(int[] horizontalFrequency, int[] verticalFrequency, int[][] matrix) {
        for (int r = 0; r < rows; ++r) {
            for (int c = 0; c < columns; ++c) {
                if (matrix[r][c] == 1) {
                    ++horizontalFrequency[c];
                    ++verticalFrequency[r];
                }
            }
        }
    }

    private long countNumberOfRightTriangles(int[] horizontalFrequency, int[] verticalFrequency, int[][] matrix) {
        long numberOfRightTriangles = 0;
        for (int r = 0; r < rows; ++r) {
            for (int c = 0; c < columns; ++c) {
                if (matrix[r][c] == 1) {
                    numberOfRightTriangles += (horizontalFrequency[c] - 1) * (verticalFrequency[r] - 1);
                }
            }
        }
        return numberOfRightTriangles;
    }
}
```
```JavaScript []
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var numberOfRightTriangles = function (matrix) {
    this.rows = matrix.length;
    this.columns = matrix[0].length;

    const horizontalFrequency = new Array(this.columns).fill(0);
    const verticalFrequency = new Array(this.rows).fill(0);
    recordFrequencyOfOnes(horizontalFrequency, verticalFrequency, matrix);

    return countNumberOfRightTriangles(horizontalFrequency, verticalFrequency, matrix);
};

/**
 * @param {number[]} horizontalFrequency
 * @param {number[]} verticalFrequency
 * @param {number[][]} matrix
 * @return {void}
 */
function recordFrequencyOfOnes(horizontalFrequency, verticalFrequency, matrix) {
    for (let r = 0; r < this.rows; ++r) {
        for (let c = 0; c < this.columns; ++c) {
            if (matrix[r][c] === 1) {
                ++horizontalFrequency[c];
                ++verticalFrequency[r];
            }
        }
    }
}

/**
 * @param {number[]} horizontalFrequency
 * @param {number[]} verticalFrequency
 * @param {number[][]} matrix
 * @return {number}
 */
function countNumberOfRightTriangles(horizontalFrequency, verticalFrequency, matrix) {
    let numberOfRightTriangles = 0;
    for (let r = 0; r < this.rows; ++r) {
        for (let c = 0; c < this.columns; ++c) {
            if (matrix[r][c] === 1) {
                numberOfRightTriangles += (horizontalFrequency[c] - 1) * (verticalFrequency[r] - 1);
            }
        }
    }
    return numberOfRightTriangles;
}
```
```TypeScript []
function numberOfRightTriangles(matrix: number[][]): number {
    this.rows = matrix.length;
    this.columns = matrix[0].length;

    const horizontalFrequency = new Array(this.columns).fill(0);
    const verticalFrequency = new Array(this.rows).fill(0);
    recordFrequencyOfOnes(horizontalFrequency, verticalFrequency, matrix);

    return countNumberOfRightTriangles(horizontalFrequency, verticalFrequency, matrix);
};

function recordFrequencyOfOnes(horizontalFrequency: number[], verticalFrequency: number[], matrix: number[][]) {
    for (let r = 0; r < this.rows; ++r) {
        for (let c = 0; c < this.columns; ++c) {
            if (matrix[r][c] === 1) {
                ++horizontalFrequency[c];
                ++verticalFrequency[r];
            }
        }
    }
}

function countNumberOfRightTriangles(horizontalFrequency: number[], verticalFrequency: number[], matrix: number[][]) {
    let numberOfRightTriangles = 0;
    for (let r = 0; r < this.rows; ++r) {
        for (let c = 0; c < this.columns; ++c) {
            if (matrix[r][c] === 1) {
                numberOfRightTriangles += (horizontalFrequency[c] - 1) * (verticalFrequency[r] - 1);
            }
        }
    }
    return numberOfRightTriangles;
}
```
```C++ []
#include <span>
#include <vector>
using namespace std;

class Solution {

    size_t rows{};
    size_t columns{};

public:
    long long numberOfRightTriangles(const vector<vector<int>>& matrix) {
        rows = matrix.size();
        columns = matrix[0].size();

        vector<int> horizontalFrequency(columns);
        vector<int> verticalFrequency(rows);
        recordFrequencyOfOnes(horizontalFrequency, verticalFrequency, matrix);

        return countNumberOfRightTriangles(horizontalFrequency, verticalFrequency, matrix);
    }

    void recordFrequencyOfOnes
    (span<int> horizontalFrequency, span<int> verticalFrequency, span<const vector<int>> matrix) const {

        for (size_t r = 0; r < rows; ++r) {
            for (size_t c = 0; c < columns; ++c) {
                if (matrix[r][c] == 1) {
                    ++horizontalFrequency[c];
                    ++verticalFrequency[r];
                }
            }
        }
    }

    long long countNumberOfRightTriangles
    (span<const int> horizontalFrequency, span<const int> verticalFrequency, span<const vector<int>> matrix) const {

        long long numberOfRightTriangles = 0;
        for (size_t r = 0; r < rows; ++r) {
            for (size_t c = 0; c < columns; ++c) {
                if (matrix[r][c] == 1) {
                    numberOfRightTriangles += (horizontalFrequency[c] - 1) * (verticalFrequency[r] - 1);
                }
            }
        }
        return numberOfRightTriangles;
    }
};
```
```C# []
using System;

public class Solution
{
    private int rows;
    private int columns;
    public long NumberOfRightTriangles(int[][] matrix)
    {
        rows = matrix.Length;
        columns = matrix[0].Length;

        int[] horizontalFrequency = new int[columns];
        int[] verticalFrequency = new int[rows];
        RecordFrequencyOfOnes(horizontalFrequency, verticalFrequency, matrix);

        return CountNumberOfRightTriangles(horizontalFrequency, verticalFrequency, matrix);
    }

    private void RecordFrequencyOfOnes(int[] horizontalFrequency, int[] verticalFrequency, int[][] matrix)
    {
        for (int r = 0; r < rows; ++r)
        {
            for (int c = 0; c < columns; ++c)
            {
                if (matrix[r][c] == 1)
                {
                    ++horizontalFrequency[c];
                    ++verticalFrequency[r];
                }
            }
        }
    }

    private long CountNumberOfRightTriangles(int[] horizontalFrequency, int[] verticalFrequency, int[][] matrix)
    {
        long numberOfRightTriangles = 0;
        for (int r = 0; r < rows; ++r)
        {
            for (int c = 0; c < columns; ++c)
            {
                if (matrix[r][c] == 1)
                {
                    numberOfRightTriangles += (horizontalFrequency[c] - 1) * (verticalFrequency[r] - 1);
                }
            }
        }
        return numberOfRightTriangles;
    }
}
```
```Kotlin []
class Solution {

    private var rows = 0
    private var columns = 0

    fun numberOfRightTriangles(matrix: Array<IntArray>): Long {
        rows = matrix.size
        columns = matrix[0].size

        val horizontalFrequency = IntArray(columns)
        val verticalFrequency = IntArray(rows)
        recordFrequencyOfOnes(horizontalFrequency, verticalFrequency, matrix)

        return countNumberOfRightTriangles(horizontalFrequency, verticalFrequency, matrix)
    }

    private fun recordFrequencyOfOnes(
        horizontalFrequency: IntArray, verticalFrequency: IntArray, matrix: Array<IntArray>
    ) {
        for (r in 0..<rows) {
            for (c in 0..<columns) {
                if (matrix[r][c] == 1) {
                    ++horizontalFrequency[c]
                    ++verticalFrequency[r]
                }
            }
        }
    }

    private fun countNumberOfRightTriangles(
        horizontalFrequency: IntArray, verticalFrequency: IntArray, matrix: Array<IntArray>
    ): Long {

        var numberOfRightTriangles: Long = 0;
        for (r in 0..<rows) {
            for (c in 0..<columns) {
                if (matrix[r][c] == 1) {
                    numberOfRightTriangles += (horizontalFrequency[c] - 1) * (verticalFrequency[r] - 1)
                }
            }
        }
        return numberOfRightTriangles
    }
}
```
```Go []
package main

var rows int
var columns int

func numberOfRightTriangles(matrix [][]int) int64 {
	rows = len(matrix)
	columns = len(matrix[0])

	horizontalFrequency := make([]int, columns)
	verticalFrequency := make([]int, rows)
	recordFrequencyOfOnes(horizontalFrequency, verticalFrequency, matrix)

	return countNumberOfRightTriangles(horizontalFrequency, verticalFrequency, matrix)
}

func recordFrequencyOfOnes(horizontalFrequency []int, verticalFrequency []int, matrix [][]int) {
	for r := 0; r < rows; r++ {
		for c := 0; c < columns; c++ {
			if matrix[r][c] == 1 {
				horizontalFrequency[c]++
				verticalFrequency[r]++
			}
		}
	}
}

func countNumberOfRightTriangles(horizontalFrequency []int, verticalFrequency []int, matrix [][]int) int64 {
	var numberOfRightTriangles int64 = 0
	for r := 0; r < rows; r++ {
		for c := 0; c < columns; c++ {
			if matrix[r][c] == 1 {
				numberOfRightTriangles += (int64)((horizontalFrequency[c] - 1) * (verticalFrequency[r] - 1))
			}
		}
	}
	return numberOfRightTriangles
}
```