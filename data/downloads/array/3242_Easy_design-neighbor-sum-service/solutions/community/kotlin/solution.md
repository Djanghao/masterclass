# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-neighbor-sum-service/solutions/5617680/](https://leetcode.com/problems/design-neighbor-sum-service/solutions/5617680/)

---

```Java []
public class NeighborSum {

    private static final int[][] adjacentMove = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
    private static final int[][] diagonalMove = {{-1, -1}, {-1, 1}, {1, -1}, {1, 1}};

    private record Point(int row, int column){}

    private final int rows;
    private final int columns;
    private final int[][] matrix;
    private final Point[] valueToCoordinates;

    public NeighborSum(int[][] matrix) {
        this.matrix = matrix;
        rows = matrix.length;
        columns = matrix[0].length;
        valueToCoordinates = new Point[rows * columns];

        for (int row = 0; row < rows; ++row) {
            for (int column = 0; column < columns; ++column) {
                valueToCoordinates[matrix[row][column]] = new Point(row, column);
            }
        }
    }

    public int adjacentSum(int value) {
        int row = valueToCoordinates[value].row;
        int column = valueToCoordinates[value].column;
        int adjacentSum = 0;

        for (int[] move : adjacentMove) {
            int nextRow = row + move[0];
            int nextColumn = column + move[1];
            if (isInMatrix(nextRow, nextColumn)) {
                adjacentSum += matrix[nextRow][nextColumn];
            }
        }

        return adjacentSum;
    }

    public int diagonalSum(int value) {
        int row = valueToCoordinates[value].row;
        int column = valueToCoordinates[value].column;
        int diagonalSum = 0;

        for (int[] move : diagonalMove) {
            int nextRow = row + move[0];
            int nextColumn = column + move[1];
            if (isInMatrix(nextRow, nextColumn)) {
                diagonalSum += matrix[nextRow][nextColumn];
            }
        }

        return diagonalSum;
    }

    private boolean isInMatrix(int row, int column) {
        return row >= 0 && row < rows && column >= 0 && column < columns;
    }
}
```
```JavaScript []
class NeighborSum {

    static #adjacentMove = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    static #diagonalMove = [[-1, -1], [-1, 1], [1, -1], [1, 1]];

    #matrix;
    #rows;
    #columns;
    #valueToCoordinates;

    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.#matrix = matrix;
        this.#rows = matrix.length;
        this.#columns = matrix[0].length;
        this.#valueToCoordinates = new Array(this.#rows * this.#columns);

        for (let row = 0; row < this.#rows; ++row) {
            for (let column = 0; column < this.#columns; ++column) {
                this.#valueToCoordinates[matrix[row][column]] = new Point(row, column);
            }
        }
    }

    /**
     * @param {number} value
     * @returns {number} 
     */
    adjacentSum(value) {
        const row = this.#valueToCoordinates[value].row;
        const column = this.#valueToCoordinates[value].column;
        let adjacentSum = 0;

        for (let move of NeighborSum.#adjacentMove) {
            const nextRow = row + move[0];
            const nextColumn = column + move[1];
            if (this.#isInMatrix(nextRow, nextColumn)) {
                adjacentSum += this.#matrix[nextRow][nextColumn];
            }
        }

        return adjacentSum;
    }

    /**
     * @param {number} value
     * @returns {number} 
     */
    diagonalSum(value) {
        const row = this.#valueToCoordinates[value].row;
        const column = this.#valueToCoordinates[value].column;
        let diagonalSum = 0;

        for (let move of NeighborSum.#diagonalMove) {
            const nextRow = row + move[0];
            const nextColumn = column + move[1];
            if (this.#isInMatrix(nextRow, nextColumn)) {
                diagonalSum += this.#matrix[nextRow][nextColumn];
            }
        }

        return diagonalSum;
    }

    /**
     * @param {number} row
     * @param {number} column 
     * @returns {boolean} 
     */
    #isInMatrix(row, column) {
        return row >= 0 && row < this.#rows && column >= 0 && column < this.#columns;
    }
}

/**
 * @param {number} row
 * @param {number} column 
 */
function Point(row, column) {
    this.row = row;
    this.column = column;
}
```
```TypeScript []
class NeighborSum {

    private static adjacentMove = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    private static diagonalMove = [[-1, -1], [-1, 1], [1, -1], [1, 1]];

    private matrix: number;
    private rows: number;
    private columns: number;
    private valueToCoordinates: Point[];

    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.matrix = matrix;
        this.rows = matrix.length;
        this.columns = matrix[0].length;
        this.valueToCoordinates = new Array(this.rows * this.columns);

        for (let row = 0; row < this.rows; ++row) {
            for (let column = 0; column < this.columns; ++column) {
                this.valueToCoordinates[this.matrix[row][column]] = new Point(row, column);
            }
        }
    }

    adjacentSum(value: number): number {
        const row = this.valueToCoordinates[value].row;
        const column = this.valueToCoordinates[value].column;
        let adjacentSum = 0;

        for (let move of NeighborSum.adjacentMove) {
            const nextRow = row + move[0];
            const nextColumn = column + move[1];
            if (this.isInMatrix(nextRow, nextColumn)) {
                adjacentSum += this.matrix[nextRow][nextColumn];
            }
        }

        return adjacentSum;
    }

    diagonalSum(value: number): number {
        const row = this.valueToCoordinates[value].row;
        const column = this.valueToCoordinates[value].column;
        let diagonalSum = 0;

        for (let move of NeighborSum.diagonalMove) {
            const nextRow = row + move[0];
            const nextColumn = column + move[1];
            if (this.isInMatrix(nextRow, nextColumn)) {
                diagonalSum += this.matrix[nextRow][nextColumn];
            }
        }

        return diagonalSum;
    }

    private isInMatrix(row: number, column: number): boolean {
        return row >= 0 && row < this.rows && column >= 0 && column < this.columns;
    }
}

class Point {
    row: number;
    column: number;

    constructor(row, column) {
        this.row = row;
        this.column = column;
    }
}
```
```C++ []
#include <array>
#include <vector>
using namespace std;

class NeighborSum {

    struct Point {
        size_t row{};
        size_t column{};

        Point() = default;
        ~Point() = default;
        Point(size_t row, size_t column) : row{ row }, column{ column } {}
    };

    static constexpr array<array<int, 2>, 4> adjacentMove{
            {{-1, 0}, {1, 0}, {0, -1}, {0, 1}} };

    static constexpr array<array<int, 2>, 4> diagonalMove{
            {{-1, -1}, {-1, 1}, {1, -1}, {1, 1}} };

    size_t rows;
    size_t columns;
    vector<vector<int>>& matrix;
    vector<Point> valueToCoordinates;

public:
    explicit NeighborSum(vector<vector<int>>& matrix) : matrix{ matrix } {
        this->rows = matrix.size();
        this->columns = matrix[0].size();
        valueToCoordinates.resize(rows * columns);

        for (size_t row = 0; row < rows; ++row) {
            for (size_t column = 0; column < columns; ++column) {
                valueToCoordinates[matrix[row][column]] = Point(row, column);
            }
        }
    }

    int adjacentSum(int value) const {
        size_t row = valueToCoordinates[value].row;
        size_t column = valueToCoordinates[value].column;
        int adjacentSum = 0;

        for (const auto& move : adjacentMove) {
            size_t nextRow = row + move[0];
            size_t nextColumn = column + move[1];

            if (isInMatrix(nextRow, nextColumn)) {
                adjacentSum += matrix[nextRow][nextColumn];
            }
        }

        return adjacentSum;
    }

    int diagonalSum(int value) const {
        size_t row = valueToCoordinates[value].row;
        size_t column = valueToCoordinates[value].column;
        int diagonalSum = 0;

        for (const auto& move : diagonalMove) {
            size_t nextRow = row + move[0];
            size_t nextColumn = column + move[1];
            if (isInMatrix(nextRow, nextColumn)) {
                diagonalSum += matrix[nextRow][nextColumn];
            }
        }

        return diagonalSum;
    }

    bool isInMatrix(size_t row, size_t column) const {
        return row < rows && column < columns;
    }
};
```
```C# []
using System;

public class NeighborSum
{
    private static readonly int[][] adjacentMove = {
        new int[]{ -1, 0 }, new int[]{ 1, 0 }, new int[]{ 0, -1 }, new int[]{ 0, 1 } };

    private static readonly int[][] diagonalMove = {
        new int[]{ -1, -1 }, new int[]{ -1, 1 }, new int[]{ 1, -1 }, new int[]{ 1, 1 } };

    private record Point(int row, int column){}

    private readonly int rows;
    private readonly int columns;
    private readonly int[][] matrix;
    private readonly Point[] valueToCoordinates;

    public NeighborSum(int[][] matrix)
    {
        this.matrix = matrix;
        rows = matrix.Length;
        columns = matrix[0].Length;
        valueToCoordinates = new Point[rows * columns];

        for (int row = 0; row < rows; ++row)
        {
            for (int column = 0; column < columns; ++column)
            {
                valueToCoordinates[matrix[row][column]] = new Point(row, column);
            }
        }
    }

    public int AdjacentSum(int value)
    {
        int row = valueToCoordinates[value].row;
        int column = valueToCoordinates[value].column;
        int adjacentSum = 0;

        foreach (int[] move in adjacentMove)
        {
            int nextRow = row + move[0];
            int nextColumn = column + move[1];
            if (IsInMatrix(nextRow, nextColumn))
            {
                adjacentSum += matrix[nextRow][nextColumn];
            }
        }

        return adjacentSum;
    }

    public int DiagonalSum(int value)
    {
        int row = valueToCoordinates[value].row;
        int column = valueToCoordinates[value].column;
        int diagonalSum = 0;

        foreach (int[] move in diagonalMove)
        {
            int nextRow = row + move[0];
            int nextColumn = column + move[1];
            if (IsInMatrix(nextRow, nextColumn))
            {
                diagonalSum += matrix[nextRow][nextColumn];
            }
        }

        return diagonalSum;
    }

    private bool IsInMatrix(int row, int column)
    {
        return row >= 0 && row < rows && column >= 0 && column < columns;
    }
}
```
```Kotlin []
class NeighborSum(matrix: Array<IntArray>) {

    private companion object {
        val adjacentMove = arrayOf(intArrayOf(-1, 0), intArrayOf(1, 0), intArrayOf(0, -1), intArrayOf(0, 1))
        val diagonalMove = arrayOf(intArrayOf(-1, -1), intArrayOf(-1, 1), intArrayOf(1, -1), intArrayOf(1, 1))
    }

    private data class Point(val row: Int, val column: Int) {}

    private var rows: Int = 0
    private var columns: Int = 0
    private lateinit var matrix: Array<IntArray>
    private var valueToCoordinates = arrayOfNulls<Point>(0)

    init {
        rows = matrix.size
        columns = matrix[0].size
        this.matrix = matrix
        valueToCoordinates = arrayOfNulls<Point>(rows * columns)

        for (row in 0..<rows) {
            for (column in 0..<columns) {
                valueToCoordinates[matrix[row][column]] = Point(row, column)
            }
        }
    }

    fun adjacentSum(value: Int): Int {
        val row = valueToCoordinates[value]!!.row
        val column = valueToCoordinates[value]!!.column
        var adjacentSum = 0

        for (move in adjacentMove) {
            val nextRow = row + move[0]
            val nextColumn = column + move[1]
            if (isInMatrix(nextRow, nextColumn)) {
                adjacentSum += matrix[nextRow][nextColumn]
            }
        }

        return adjacentSum
    }

    fun diagonalSum(value: Int): Int {
        val row = valueToCoordinates[value]!!.row
        val column = valueToCoordinates[value]!!.column
        var diagonalSum = 0

        for (move in diagonalMove) {
            val nextRow = row + move[0]
            val nextColumn = column + move[1]
            if (isInMatrix(nextRow, nextColumn)) {
                diagonalSum += matrix[nextRow][nextColumn]
            }
        }

        return diagonalSum
    }

    private fun isInMatrix(row: Int, column: Int): Boolean {
        return row in 0..<rows && column in 0..<columns
    }
}
```
```Go []
package main

import "fmt"

var adjacentMove [4][2]int = [4][2]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}
var diagonalMove [4][2]int = [4][2]int{{-1, -1}, {-1, 1}, {1, -1}, {1, 1}}

type Point struct {
    row    int
    column int
}

type NeighborSum struct {
    rows               int
    columns            int
    matrix             [][]int
    valueToCoordinates []Point
}

func Constructor(matrix [][]int) NeighborSum {
    neighborSum := NeighborSum{
        rows:               len(matrix),
        columns:            len(matrix[0]),
        matrix:             matrix,
        valueToCoordinates: make([]Point, len(matrix)*len(matrix[0])),
    }

    for row := 0; row < neighborSum.rows; row++ {
        for column := 0; column < neighborSum.columns; column++ {
            neighborSum.valueToCoordinates[matrix[row][column]] = Point{row: row, column: column}
        }
    }
    return neighborSum
}

func (this *NeighborSum) AdjacentSum(value int) int {
    row := this.valueToCoordinates[value].row
    column := this.valueToCoordinates[value].column
    var adjacentSum = 0

    for _, move := range adjacentMove {
        nextRow := row + move[0]
        nextColumn := column + move[1]
        if this.isInMatrix(nextRow, nextColumn) {
            adjacentSum += this.matrix[nextRow][nextColumn]
        }
    }

    return adjacentSum
}

func (this *NeighborSum) DiagonalSum(value int) int {
    row := this.valueToCoordinates[value].row
    column := this.valueToCoordinates[value].column
    var diagonalSum = 0

    for _, move := range diagonalMove {
        nextRow := row + move[0]
        nextColumn := column + move[1]
        if this.isInMatrix(nextRow, nextColumn) {
            diagonalSum += this.matrix[nextRow][nextColumn]
        }
    }

    return diagonalSum
}

func (this *NeighborSum) isInMatrix(row int, column int) bool {
    return row >= 0 && row < this.rows && column >= 0 && column < this.columns
}
```