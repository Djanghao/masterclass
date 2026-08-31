# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/surface-area-of-3d-shapes/solutions/5622828/](https://leetcode.com/problems/surface-area-of-3d-shapes/solutions/5622828/)

---

```Java []
public class Solution {

    private static final int[][] moves = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
    private int rows;
    private int columns;

    public int surfaceArea(int[][] matrix) {
        rows = matrix.length;
        columns = matrix[0].length;

        int surfaceArea = 0;
        for (int row = 0; row < rows; ++row) {
            for (int column = 0; column < columns; ++column) {
                surfaceArea += calculateCellSurfaceArea(row, column, matrix);
            }
        }
        return surfaceArea;
    }

    private int calculateCellSurfaceArea(int row, int column, int[][] matrix) {
        int cellSurfaceArea = 0;

        if (matrix[row][column] == 0) {
            return cellSurfaceArea;
        }

        cellSurfaceArea += 2;
        for (int[] move : moves) {
            int nextRow = row + move[0];
            int nextColumn = column + move[1];

            if (!isInMatrix(nextRow, nextColumn)) {
                cellSurfaceArea += matrix[row][column];
                continue;
            }
            if (matrix[row][column] > matrix[nextRow][nextColumn]) {
                cellSurfaceArea += matrix[row][column] - matrix[nextRow][nextColumn];
            }
        }
        return cellSurfaceArea;
    }

    private boolean isInMatrix(int row, int column) {
        return row >= 0 && row < rows && column >= 0 && column < columns;
    }
}
```
```JavaScript []
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var surfaceArea = function (matrix) {
    this.moves = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    this.rows = matrix.length;
    this.columns = matrix[0].length;

    let surfaceArea = 0;
    for (let row = 0; row < this.rows; ++row) {
        for (let column = 0; column < this.columns; ++column) {
            surfaceArea += calculateCellSurfaceArea(row, column, matrix);
        }
    }
    return surfaceArea;
};

/**
 * @param {number} row
 * @param {number} column
 * @param {number[][]} matrix
 * @return {number}
 */
function calculateCellSurfaceArea(row, column, matrix) {
    let cellSurfaceArea = 0;

    if (matrix[row][column] === 0) {
        return cellSurfaceArea;
    }

    cellSurfaceArea += 2;
    for (let move of this.moves) {
        const nextRow = row + move[0];
        const nextColumn = column + move[1];

        if (!isInMatrix(nextRow, nextColumn)) {
            cellSurfaceArea += matrix[row][column];
            continue;
        }
        if (matrix[row][column] > matrix[nextRow][nextColumn]) {
            cellSurfaceArea += matrix[row][column] - matrix[nextRow][nextColumn];
        }
    }
    return cellSurfaceArea;
}

/**
 * @param {number} row
 * @param {number} column
 * @return {boolean}
 */
function isInMatrix(row, column) {
    return row >= 0 && row < this.rows && column >= 0 && column < this.columns;
}
```
```TypeScript []
function surfaceArea(matrix: number[][]): number {
    this.moves = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    this.rows = matrix.length;
    this.columns = matrix[0].length;

    let surfaceArea = 0;
    for (let row = 0; row < this.rows; ++row) {
        for (let column = 0; column < this.columns; ++column) {
            surfaceArea += calculateCellSurfaceArea(row, column, matrix);
        }
    }
    return surfaceArea;
};

function calculateCellSurfaceArea(row: number, column: number, matrix: number[][]): number {
    let cellSurfaceArea = 0;

    if (matrix[row][column] === 0) {
        return cellSurfaceArea;
    }

    cellSurfaceArea += 2;
    for (let move of this.moves) {
        const nextRow = row + move[0];
        const nextColumn = column + move[1];

        if (!isInMatrix(nextRow, nextColumn)) {
            cellSurfaceArea += matrix[row][column];
            continue;
        }
        if (matrix[row][column] > matrix[nextRow][nextColumn]) {
            cellSurfaceArea += matrix[row][column] - matrix[nextRow][nextColumn];
        }
    }
    return cellSurfaceArea;
}

function isInMatrix(row: number, column: number): boolean {
    return row >= 0 && row < this.rows && column >= 0 && column < this.columns;
}
```
```C++ []
#include <span>
#include <array>
#include <vector>
using namespace std;

class Solution {

    static constexpr array<array<int, 2>, 4> moves{ { {-1, 0}, {1, 0}, {0, -1}, {0, 1} } };
    size_t rows{};
    size_t columns{};

public:
    int surfaceArea(const vector<vector<int>>& matrix) {
        rows = matrix.size();
        columns = matrix[0].size();

        int surfaceArea = 0;
        for (int row = 0; row < rows; ++row) {
            for (int column = 0; column < columns; ++column) {
                surfaceArea += calculateCellSurfaceArea(row, column, matrix);
            }
        }
        return surfaceArea;
    }

private:
    int calculateCellSurfaceArea(size_t row, size_t column, span<const vector<int>> matrix) const {
        int cellSurfaceArea = 0;

        if (matrix[row][column] == 0) {
            return cellSurfaceArea;
        }

        cellSurfaceArea += 2;
        for (const auto& move : moves) {
            size_t nextRow = row + move[0];
            size_t nextColumn = column + move[1];

            if (!isInMatrix(nextRow, nextColumn)) {
                cellSurfaceArea += matrix[row][column];
                continue;
            }
            if (matrix[row][column] > matrix[nextRow][nextColumn]) {
                cellSurfaceArea += matrix[row][column] - matrix[nextRow][nextColumn];
            }
        }
        return cellSurfaceArea;
    }

    bool isInMatrix(size_t row, size_t column) const {
        return row < rows && column < columns;
    }
};
```
```C# []
using System;

public class Solution
{
    private static readonly int[][] moves = {
        new int[]{ -1, 0 }, new int[]{ 1, 0 }, new int[]{ 0, -1 }, new int[]{ 0, 1 } };

    private int rows;
    private int columns;

    public int SurfaceArea(int[][] matrix)
    {
        rows = matrix.Length;
        columns = matrix[0].Length;

        int surfaceArea = 0;
        for (int row = 0; row < rows; ++row)
        {
            for (int column = 0; column < columns; ++column)
            {
                surfaceArea += CalculateCellSurfaceArea(row, column, matrix);
            }
        }
        return surfaceArea;
    }

    private int CalculateCellSurfaceArea(int row, int column, int[][] matrix)
    {
        int cellSurfaceArea = 0;

        if (matrix[row][column] == 0)
        {
            return cellSurfaceArea;
        }

        cellSurfaceArea += 2;
        foreach (int[] move in moves)
        {
            int nextRow = row + move[0];
            int nextColumn = column + move[1];

            if (!IsInMatrix(nextRow, nextColumn))
            {
                cellSurfaceArea += matrix[row][column];
                continue;
            }
            if (matrix[row][column] > matrix[nextRow][nextColumn])
            {
                cellSurfaceArea += matrix[row][column] - matrix[nextRow][nextColumn];
            }
        }
        return cellSurfaceArea;
    }

    bool IsInMatrix(int row, int column)
    {
        return row >= 0 && row < rows && column >= 0 && column < columns;
    }
}
```
```Kotlin []
class Solution {

    private companion object {
        val moves = arrayOf<IntArray>(intArrayOf(-1, 0), intArrayOf(1, 0), intArrayOf(0, -1), intArrayOf(0, 1))
    }

    private var rows: Int = 0
    private var columns: Int = 0

    fun surfaceArea(matrix: Array<IntArray>): Int {
        rows = matrix.size
        columns = matrix[0].size

        var surfaceArea = 0
        for (row in 0..<rows) {
            for (column in 0..<columns) {
                surfaceArea += calculateCellSurfaceArea(row, column, matrix)
            }
        }
        return surfaceArea
    }

    private fun calculateCellSurfaceArea(row: Int, column: Int, matrix: Array<IntArray>): Int {
        var cellSurfaceArea = 0

        if (matrix[row][column] == 0) {
            return cellSurfaceArea
        }

        cellSurfaceArea += 2
        for (move in moves) {
            val nextRow = row + move[0]
            val nextColumn = column + move[1]

            if (!isInMatrix(nextRow, nextColumn)) {
                cellSurfaceArea += matrix[row][column]
                continue
            }
            if (matrix[row][column] > matrix[nextRow][nextColumn]) {
                cellSurfaceArea += matrix[row][column] - matrix[nextRow][nextColumn]
            }
        }
        return cellSurfaceArea
    }

    private fun isInMatrix(row: Int, column: Int): Boolean {
        return row in 0..<rows && column in 0..<columns
    }
}
```
```Go []
package main

import "fmt"

var moves = [4][2]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}
var rows int
var columns int

func surfaceArea(matrix [][]int) int {
    rows = len(matrix)
    columns = len(matrix[0])

    var surfaceArea = 0
    for row := 0; row < rows; row++ {
        for column := 0; column < columns; column++ {
            surfaceArea += calculateCellSurfaceArea(row, column, matrix)
        }
    }
    return surfaceArea
}

func calculateCellSurfaceArea(row int, column int, matrix [][]int) int {
    cellSurfaceArea := 0

    if matrix[row][column] == 0 {
        return cellSurfaceArea
    }

    cellSurfaceArea += 2
    for _, move := range moves {
        nextRow := row + move[0]
        nextColumn := column + move[1]

        if !isInMatrix(nextRow, nextColumn) {
            cellSurfaceArea += matrix[row][column]
            continue
        }
        if matrix[row][column] > matrix[nextRow][nextColumn] {
            cellSurfaceArea += matrix[row][column] - matrix[nextRow][nextColumn]
        }
    }
    return cellSurfaceArea
}

func isInMatrix(row int, column int) bool {
    return row >= 0 && row < rows && column >= 0 && column < columns
}
```