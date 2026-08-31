# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/solutions/5652168/](https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/solutions/5652168/)

---

```Java []
public class Solution {

    private int[][] matrix;
    private int rows;
    private int columns;

    public int minFlips(int[][] matrix) {
        this.matrix = matrix;
        rows = matrix.length;
        columns = matrix[0].length;
        if (rows == 0 || columns == 0) {
            return 0;
        }

        boolean horizontal = true;
        return Math.min(countFlips(horizontal), countFlips(!horizontal));
    }

    private int countFlips(boolean horizontal) {
        int numberOfFlips = 0;
        int endAxisOne = horizontal ? rows : columns;
        int endAxisTwo = horizontal ? columns : rows;

        for (int pivot = 0; pivot < endAxisOne; ++pivot) {
            int indexOne = 0;
            int indexTwo = endAxisTwo - 1;
            while (indexOne < indexTwo) {
                numberOfFlips += getData(pivot, indexOne, horizontal) ^ getData(pivot, indexTwo, horizontal);
                ++indexOne;
                --indexTwo;
            }
        }
        return numberOfFlips;
    }

    private int getData(int indexOne, int indexTwo, boolean horizontal) {
        return horizontal ? matrix[indexOne][indexTwo] : matrix[indexTwo][indexOne];
    }
}
```
```JavaScript []
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFlips = function (matrix) {
    this.matrix = matrix;
    this.rows = matrix.length;
    this.columns = matrix[0].length;
    if (this.rows === 0 || this.columns === 0) {
        return 0;
    }

    let horizontal = true;
    return Math.min(countFlips(horizontal), countFlips(!horizontal));
};

/**
 * @param {boolean} horizontal
 * @return {number}
 */
function countFlips(horizontal) {
    let numberOfFlips = 0;
    let endAxisOne = horizontal ? this.rows : this.columns;
    let endAxisTwo = horizontal ? this.columns : this.rows;

    for (let pivot = 0; pivot < endAxisOne; ++pivot) {
        let indexOne = 0;
        let indexTwo = endAxisTwo - 1;
        while (indexOne < indexTwo) {
            numberOfFlips += getData(pivot, indexOne, horizontal) ^ getData(pivot, indexTwo, horizontal);
            ++indexOne;
            --indexTwo;
        }
    }
    return numberOfFlips;
}

/**
 * @param {number} indexOne
 * @param {number} indexTwo
 * @param {boolean} horizontal
 * @return {number}
 */
function getData(indexOne, indexTwo, horizontal) {
    return horizontal ? this.matrix[indexOne][indexTwo] : this.matrix[indexTwo][indexOne];
}
```
```TypeScript []
function minFlips(matrix: number[][]): number {
    this.matrix = matrix;
    this.rows = matrix.length;
    this.columns = matrix[0].length;
    if (this.rows === 0 || this.columns === 0) {
        return 0;
    }

    let horizontal = true;
    return Math.min(countFlips(horizontal), countFlips(!horizontal));
};

function countFlips(horizontal: boolean): number {
    let numberOfFlips = 0;
    let endAxisOne = horizontal ? this.rows : this.columns;
    let endAxisTwo = horizontal ? this.columns : this.rows;

    for (let pivot = 0; pivot < endAxisOne; ++pivot) {
        let indexOne = 0;
        let indexTwo = endAxisTwo - 1;
        while (indexOne < indexTwo) {
            numberOfFlips += getData(pivot, indexOne, horizontal) ^ getData(pivot, indexTwo, horizontal);
            ++indexOne;
            --indexTwo;
        }
    }
    return numberOfFlips;
}

function getData(indexOne: number, indexTwo: number, horizontal: boolean): number {
    return horizontal ? this.matrix[indexOne][indexTwo] : this.matrix[indexTwo][indexOne];
}
```
```C++ []
#include <vector>
#include <memory>
#include <algorithm>
using namespace std;

class Solution {

    unique_ptr< vector<vector<int>>> matrix;
    size_t rows{};
    size_t columns{};

public:
    int minFlips(const vector<vector<int>>& matrix) {
        this->matrix = make_unique< vector<vector<int>>>(matrix);
        rows = matrix.size();
        columns = matrix[0].size();
        if (rows == 0 || columns == 0) {
            return 0;
        }

        bool horizontal = true;
        return min(countFlips(horizontal), countFlips(!horizontal));
    }

private:
    int countFlips(bool horizontal) const {
        int numberOfFlips = 0;
        size_t endAxisOne = horizontal ? rows : columns;
        size_t endAxisTwo = horizontal ? columns : rows;

        for (size_t pivot = 0; pivot < endAxisOne; ++pivot) {
            size_t indexOne = 0;
            size_t indexTwo = endAxisTwo - 1;
            while (indexOne < indexTwo) {
                numberOfFlips += getData(pivot, indexOne, horizontal) ^ getData(pivot, indexTwo, horizontal);
                ++indexOne;
                --indexTwo;
            }
        }
        return numberOfFlips;
    }

    int getData(int indexOne, int indexTwo, bool horizontal) const {
        return horizontal ? (*matrix)[indexOne][indexTwo] : (*matrix)[indexTwo][indexOne];
    }
};
```
```C# []
using System;

public class Solution
{
    private int[][]? matrix;
    private int rows;
    private int columns;

    public int MinFlips(int[][] matrix)
    {
        this.matrix = matrix;
        rows = matrix.Length;
        columns = matrix[0].Length;
        if (rows == 0 || columns == 0)
        {
            return 0;
        }

        bool horizontal = true;
        return Math.Min(CountFlips(horizontal), CountFlips(!horizontal));
    }

    private int CountFlips(bool horizontal)
    {
        int numberOfFlips = 0;
        int endAxisOne = horizontal ? rows : columns;
        int endAxisTwo = horizontal ? columns : rows;

        for (int pivot = 0; pivot < endAxisOne; ++pivot)
        {
            int indexOne = 0;
            int indexTwo = endAxisTwo - 1;
            while (indexOne < indexTwo)
            {
                numberOfFlips += GetData(pivot, indexOne, horizontal) ^ GetData(pivot, indexTwo, horizontal);
                ++indexOne;
                --indexTwo;
            }
        }
        return numberOfFlips;
    }

    private int GetData(int indexOne, int indexTwo, bool horizontal)
    {
        return horizontal ? matrix[indexOne][indexTwo] : matrix[indexTwo][indexOne];
    }
}
```
```Kotlin []
import kotlin.math.min

class Solution {

    private lateinit var matrix: Array<IntArray>
    private var rows = 0
    private var columns = 0

    fun minFlips(matrix: Array<IntArray>): Int {
        this.matrix = matrix
        rows = matrix.size
        columns = matrix[0].size
        if (rows == 0 || columns == 0) {
            return 0
        }

        val horizontal = true
        return min(countFlips(horizontal), countFlips(!horizontal))
    }

    private fun countFlips(horizontal: Boolean): Int {
        var numberOfFlips = 0
        val endAxisOne = if (horizontal) rows else columns
        val endAxisTwo = if (horizontal) columns else rows

        for (pivot in 0..<endAxisOne) {
            var indexOne = 0
            var indexTwo = endAxisTwo - 1
            while (indexOne < indexTwo) {
                numberOfFlips += getData(pivot, indexOne, horizontal) xor getData(pivot, indexTwo, horizontal)
                ++indexOne
                --indexTwo
            }
        }
        return numberOfFlips
    }

    private fun getData(indexOne: Int, indexTwo: Int, horizontal: Boolean): Int {
        return if (horizontal) matrix[indexOne][indexTwo] else matrix[indexTwo][indexOne]
    }
}
```
```Go []
package main

import "fmt"

var matrix [][]int
var rows int
var columns int

func minFlips(grid [][]int) int {
    matrix = grid
    rows = len(matrix)
    columns = len(matrix[0])
    if rows == 0 || columns == 0 {
        return 0
    }

    horizontal := true
    return min(countFlips(horizontal), countFlips(!horizontal))
}

func countFlips(horizontal bool) int {
    numberOfFlips := 0
    endAxisOne := Ternary(horizontal, rows, columns)
    endAxisTwo := Ternary(horizontal, columns, rows)

    for pivot := 0; pivot < endAxisOne; pivot++ {
        indexOne := 0
        indexTwo := endAxisTwo - 1
        for indexOne < indexTwo {
            numberOfFlips += getData(pivot, indexOne, horizontal) ^ getData(pivot, indexTwo, horizontal)
            indexOne++
            indexTwo--
        }
    }
    return numberOfFlips
}

func getData(indexOne int, indexTwo int, horizontal bool) int {
    if horizontal {
        return matrix[indexOne][indexTwo]
    }
    return matrix[indexTwo][indexOne]
}

func Ternary[T any](condition bool, first T, second T) T {
    if condition {
        return first
    }
    return second
}
```