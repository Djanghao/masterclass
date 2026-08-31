# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-in-a-matrix/solutions/5571006/](https://leetcode.com/problems/sum-in-a-matrix/solutions/5571006/)

---

```Java []
import java.util.Arrays;

public class Solution {

    public int matrixSum(int[][] input) {
        for (int row = 0; row < input.length; ++row) {
            Arrays.sort(input[row]);
        }

        int matrixSum = 0;
        for (int column = input[0].length - 1; column >= 0; --column) {
            int maxInColumn = 0;
            for (int row = 0; row < input.length; ++row) {
                maxInColumn = Math.max(input[row][column], maxInColumn);
            }
            matrixSum += maxInColumn;
        }
        return matrixSum;
    }
}
```
```JavaScript []
/**
 * @param {number[][]} input
 * @return {number}
 */
var matrixSum = function (input) {
    for (let row = 0; row < input.length; ++row) {
        input[row].sort((x, y) => x - y);
    }

    let matrixSum = 0;
    for (let column = input[0].length - 1; column >= 0; --column) {
        let maxInColumn = 0;
        for (let row = 0; row < input.length; ++row) {
            maxInColumn = Math.max(input[row][column], maxInColumn);
        }
        matrixSum += maxInColumn;
    }
    return matrixSum;
};
```
```TypeScript []
function matrixSum(input: number[][]): number {
    for (let row = 0; row < input.length; ++row) {
        input[row].sort((x, y) => x - y);
    }

    let matrixSum = 0;
    for (let column = input[0].length - 1; column >= 0; --column) {
        let maxInColumn = 0;
        for (let row = 0; row < input.length; ++row) {
            maxInColumn = Math.max(input[row][column], maxInColumn);
        }
        matrixSum += maxInColumn;
    }
    return matrixSum;
};
```
```C++ []
#include <ranges>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {

public:
    int matrixSum(vector<vector<int>>& input) const {
        for (size_t row = 0; row < input.size(); ++row) {
            ranges::sort(input[row]);
        }

        int matrixSum = 0;
        for (size_t column = input[0].size() - 1; column != variant_npos; --column) {
            int maxInColumn = 0;
            for (int row = 0; row < input.size(); ++row) {
                maxInColumn = max(input[row][column], maxInColumn);
            }
            matrixSum += maxInColumn;
        }
        return matrixSum;
    }
};
```
```C# []
using System;

public class Solution
{
    public int MatrixSum(int[][] input)
    {
        for (int row = 0; row < input.Length; ++row)
        {
            Array.Sort(input[row]);
        }

        int matrixSum = 0;
        for (int column = input[0].Length - 1; column >= 0; --column)
        {
            int maxInColumn = 0;
            for (int row = 0; row < input.Length; ++row)
            {
                maxInColumn = Math.Max(input[row][column], maxInColumn);
            }
            matrixSum += maxInColumn;
        }
        return matrixSum;
    }
}
```
```Kotlin []
import kotlin.math.max

class Solution {
    fun matrixSum(input: Array<IntArray>): Int {
        for (row in input.indices) {
            input[row].sort()
        }

        var matrixSum = 0
        for (column in input[0].size - 1 downTo 0) {
            var maxInColumn = 0
            for (row in input.indices) {
                maxInColumn = max(input[row][column], maxInColumn)
            }
            matrixSum += maxInColumn
        }
        return matrixSum
    }
}
```
```Go []
package main

import (
    "fmt"
    "slices"
)

func matrixSum(input [][]int) int {
    for row := range input {
        slices.Sort(input[row])
    }

    matrixSum := 0
    for column := len(input[0]) - 1; column >= 0; column-- {
        maxInColumn := 0
        for row := range input {
            maxInColumn = max(input[row][column], maxInColumn)
        }
        matrixSum += maxInColumn
    }
    return matrixSum
}
```