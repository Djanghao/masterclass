# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-maximum-value-in-a-grid/solutions/5554775/](https://leetcode.com/problems/minimize-maximum-value-in-a-grid/solutions/5554775/)

---

```Java []
import java.util.Arrays;

public class Solution {

    private record Point(int value, int row, int column){}

    private int rows;
    private int columns;

    public int[][] minScore(int[][] matrix) {
        this.rows = matrix.length;
        this.columns = matrix[0].length;
        Point[] pointsSortedInAscendingValue = createPointsSortedInAscendingValue(matrix);
        return createMatrixWithMinimizedMaxValue(pointsSortedInAscendingValue);
    }

    private int[][] createMatrixWithMinimizedMaxValue(Point[] pointsSortedInAscendingValue) {
        int[][] matrixWithMinimizedMaxValue = new int[rows][columns];
        int[] currentValueRows = new int[rows];
        int[] currentValueColumns = new int[columns];

        for (Point current : pointsSortedInAscendingValue) {
            int nextValue = 1 + Math.max(currentValueRows[current.row], currentValueColumns[current.column]);
            currentValueRows[current.row] = nextValue;
            currentValueColumns[current.column] = nextValue;
            matrixWithMinimizedMaxValue[current.row][current.column] = nextValue;
        }
        return matrixWithMinimizedMaxValue;
    }

    private Point[] createPointsSortedInAscendingValue(int[][] matrix) {
        Point[] pointsSortedInAscendingValue = new Point[rows * columns];
        int index = 0;
        for (int row = 0; row < rows; ++row) {
            for (int column = 0; column < columns; ++column) {
                pointsSortedInAscendingValue[index] = new Point(matrix[row][column], row, column);
                ++index;
            }
        }
        Arrays.sort(pointsSortedInAscendingValue, (x, y) -> x.value - y.value);
        return pointsSortedInAscendingValue;
    }
}
```
```JavaScript []
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var minScore = function (matrix) {
    this.rows = matrix.length;
    this.columns = matrix[0].length;
    const pointsSortedInAscendingValue = createPointsSortedInAscendingValue(matrix);
    return createMatrixWithMinimizedMaxValue(pointsSortedInAscendingValue);
};

/**
 * @param {number} value
 * @param {number} row
 * @param {number} column
 */
function Point(value, row, column) {
    this.value = value;
    this.row = row;
    this.column = column;
}

/**
 * @param {Point[]} pointsSortedInAscendingValue
 * @return {number[][]}
 */
function createMatrixWithMinimizedMaxValue(pointsSortedInAscendingValue) {
    const matrixWithMinimizedMaxValue = Array.from(new Array(this.rows), () => new Array(this.columns));
    const currentValueRows = new Array(this.rows).fill(0);
    const currentValueColumns = new Array(this.columns).fill(0);

    for (let current of pointsSortedInAscendingValue) {
        const nextValue = 1 + Math.max(currentValueRows[current.row], currentValueColumns[current.column]);
        currentValueRows[current.row] = nextValue;
        currentValueColumns[current.column] = nextValue;
        matrixWithMinimizedMaxValue[current.row][current.column] = nextValue;
    }
    return matrixWithMinimizedMaxValue;
}

/**
 * @param {number[][]} matrix
 * @return {Point[]} 
 */
function createPointsSortedInAscendingValue(matrix) {
    const pointsSortedInAscendingValue = new Array(this.rows * this.columns);
    let index = 0;
    for (let row = 0; row < this.rows; ++row) {
        for (let column = 0; column < this.columns; ++column) {
            pointsSortedInAscendingValue[index] = new Point(matrix[row][column], row, column);
            ++index;
        }
    }
    pointsSortedInAscendingValue.sort((x, y) => x.value - y.value);
    return pointsSortedInAscendingValue;
}
```
```TypeScript []
function minScore(matrix: number[][]): number[][] {
    this.rows = matrix.length;
    this.columns = matrix[0].length;
    const pointsSortedInAscendingValue = createPointsSortedInAscendingValue(matrix);
    return createMatrixWithMinimizedMaxValue(pointsSortedInAscendingValue);
};

class Point {
    value: number;
    row: number;
    column: number;

    constructor(value: number, row: number, column: number) {
        this.value = value;
        this.row = row;
        this.column = column;
    }
}

function createMatrixWithMinimizedMaxValue(pointsSortedInAscendingValue: Point[]): number[][] {
    const matrixWithMinimizedMaxValue: number[][] = Array.from(new Array(this.rows), () => new Array(this.columns));
    const currentValueRows: number[] = new Array(this.rows).fill(0);
    const currentValueColumns: number[] = new Array(this.columns).fill(0);

    for (let current of pointsSortedInAscendingValue) {
        const nextValue = 1 + Math.max(currentValueRows[current.row], currentValueColumns[current.column]);
        currentValueRows[current.row] = nextValue;
        currentValueColumns[current.column] = nextValue;
        matrixWithMinimizedMaxValue[current.row][current.column] = nextValue;
    }
    return matrixWithMinimizedMaxValue;
}

function createPointsSortedInAscendingValue(matrix: number[][]): Point[] {
    const pointsSortedInAscendingValue: Point[] = new Array(this.rows * this.columns);
    let index = 0;
    for (let row = 0; row < this.rows; ++row) {
        for (let column = 0; column < this.columns; ++column) {
            pointsSortedInAscendingValue[index] = new Point(matrix[row][column], row, column);
            ++index;
        }
    }
    pointsSortedInAscendingValue.sort((x, y) => x.value - y.value);
    return pointsSortedInAscendingValue;
}
```
```C++ []
#include <span>
#include <ranges>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {

    struct Point {
        int value = 0;
        size_t row = 0;
        size_t column = 0;

        Point() = default;
        ~Point() = default;

        Point(int value, size_t row, size_t column) : value{ value }, row{ row }, column{ column } {}
    };

    size_t rows = 0;
    size_t columns = 0;

public:
    vector<vector<int>> minScore(const vector<vector<int>>& matrix) {
        this->rows = matrix.size();
        this->columns = matrix[0].size();
        vector<Point> pointsSortedInAscendingValue = createPointsSortedInAscendingValue(matrix);
        return createMatrixWithMinimizedMaxValue(pointsSortedInAscendingValue);
    }


private:
    vector<vector<int>> createMatrixWithMinimizedMaxValue(const span<Point> pointsSortedInAscendingValue) const {
        vector<vector<int>> matrixWithMinimizedMaxValue(rows, vector<int>(columns));
        vector<int> currentValueRows(rows);
        vector<int> currentValueColumns(columns);

        for (const auto& current : pointsSortedInAscendingValue) {
            int nextValue = 1 + max(currentValueRows[current.row], currentValueColumns[current.column]);
            currentValueRows[current.row] = nextValue;
            currentValueColumns[current.column] = nextValue;
            matrixWithMinimizedMaxValue[current.row][current.column] = nextValue;
        }
        return matrixWithMinimizedMaxValue;
    }

    vector<Point> createPointsSortedInAscendingValue(span<const vector<int>> matrix) const {
        vector<Point> pointsSortedInAscendingValue;
        pointsSortedInAscendingValue.reserve(rows * columns);

        for (size_t row = 0; row < rows; ++row) {
            for (size_t column = 0; column < columns; ++column) {
                pointsSortedInAscendingValue.emplace_back(matrix[row][column], row, column);
            }
        }
        ranges::sort(pointsSortedInAscendingValue, [](const Point& x, const Point& y){return x.value < y.value;});
        return pointsSortedInAscendingValue;
    }
};
```
```C# []
using System;

public class Solution
{
    private record Point(int value, int row, int column) { }

    private int rows;
    private int columns;
    public int[][] MinScore(int[][] matrix)
    {
        this.rows = matrix.Length;
        this.columns = matrix[0].Length;
        Point[] pointsSortedInAscendingValue = CreatePointsSortedInAscendingValue(matrix);
        return CreateMatrixWithMinimizedMaxValue(pointsSortedInAscendingValue);
    }

    private int[][] CreateMatrixWithMinimizedMaxValue(Point[] pointsSortedInAscendingValue)
    {
        int[][] matrixWithMinimizedMaxValue = new int[rows][];
        for (int row = 0; row < rows; ++row)
        {
            matrixWithMinimizedMaxValue[row] = new int[columns];
        }
        int[] currentValueRows = new int[rows];
        int[] currentValueColumns = new int[columns];

        foreach (Point current in pointsSortedInAscendingValue)
        {
            int nextValue = 1 + Math.Max(currentValueRows[current.row], currentValueColumns[current.column]);
            currentValueRows[current.row] = nextValue;
            currentValueColumns[current.column] = nextValue;
            matrixWithMinimizedMaxValue[current.row][current.column] = nextValue;
        }
        return matrixWithMinimizedMaxValue;
    }

    private Point[] CreatePointsSortedInAscendingValue(int[][] matrix)
    {
        Point[] pointsSortedInAscendingValue = new Point[rows * columns];
        int index = 0;
        for (int row = 0; row < rows; ++row)
        {
            for (int column = 0; column < columns; ++column)
            {
                pointsSortedInAscendingValue[index] = new Point(matrix[row][column], row, column);
                ++index;
            }
        }
        Array.Sort(pointsSortedInAscendingValue, (x, y) => x.value - y.value);
        return pointsSortedInAscendingValue;
    }
}
```
```Kotlin []
import kotlin.math.max

class Solution {

    private data class Point(val value: Int, val row: Int, val column: Int){}

    private var rows: Int = 0
    private var columns: Int = 0

    fun minScore(matrix: Array<IntArray>): Array<IntArray> {
        this.rows = matrix.size
        this.columns = matrix[0].size
        val pointsSortedInAscendingValue: ArrayList<Point> = createPointsSortedInAscendingValue(matrix)
        return createMatrixWithMinimizedMaxValue(pointsSortedInAscendingValue)
    }

    private fun createMatrixWithMinimizedMaxValue(pointsSortedInAscendingValue: ArrayList<Point>): Array<IntArray> {
        val matrixWithMinimizedMaxValue = Array<IntArray>(rows) { IntArray(columns) }
        val currentValueRows = IntArray(rows)
        val currentValueColumns = IntArray(columns)

        for (current in pointsSortedInAscendingValue) {
            val nextValue = 1 + max(currentValueRows[current.row], currentValueColumns[current.column])
            currentValueRows[current.row] = nextValue
            currentValueColumns[current.column] = nextValue
            matrixWithMinimizedMaxValue[current.row][current.column] = nextValue
        }
        return matrixWithMinimizedMaxValue
    }

    private fun createPointsSortedInAscendingValue(matrix: Array<IntArray>): ArrayList<Point> {
        val pointsSortedInAscendingValue = ArrayList<Point>(rows * columns)
        for (row in 0..<rows) {
            for (column in 0..<columns) {
                pointsSortedInAscendingValue.add(Point(matrix[row][column], row, column))
            }
        }
        pointsSortedInAscendingValue.sortWith() { x, y -> x.value - y.value }
        return pointsSortedInAscendingValue
    }
}
```
```Go []
package main

import (
    "fmt"
    "sort"
)

type Point struct {
    value  int
    row    int
    column int
}

var rows int = 0
var columns int = 0

func minScore(matrix [][]int) [][]int {
    rows = len(matrix)
    columns = len(matrix[0])
    var pointsSortedInAscendingValue []Point = createPointsSortedInAscendingValue(matrix)
    return createMatrixWithMinimizedMaxValue(pointsSortedInAscendingValue)
}

func createMatrixWithMinimizedMaxValue(pointsSortedInAscendingValue []Point) [][]int {
    matrixWithMinimizedMaxValue := make([][]int, rows)
    for row := 0; row < rows; row++ {
        matrixWithMinimizedMaxValue[row] = make([]int, columns)
    }
    currentValueRows := make([]int, rows)
    currentValueColumns := make([]int, columns)

    for _, current := range pointsSortedInAscendingValue {
        nextValue := 1 + max(currentValueRows[current.row], currentValueColumns[current.column])
        currentValueRows[current.row] = nextValue
        currentValueColumns[current.column] = nextValue
        matrixWithMinimizedMaxValue[current.row][current.column] = nextValue
    }
    return matrixWithMinimizedMaxValue
}

func createPointsSortedInAscendingValue(matrix [][]int) []Point {
    pointsSortedInAscendingValue := make([]Point, rows*columns)
    index := 0

    for row := 0; row < rows; row++ {
        for column := 0; column < columns; column++ {
            pointsSortedInAscendingValue[index] = Point{value: matrix[row][column], row: row, column: column}
            index++
        }
    }
    sort.Slice(pointsSortedInAscendingValue,
        func(i, j int) bool {
            return pointsSortedInAscendingValue[i].value < pointsSortedInAscendingValue[j].value
        })
    return pointsSortedInAscendingValue
}
```