# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/projection-area-of-3d-shapes/solutions/5628530/](https://leetcode.com/problems/projection-area-of-3d-shapes/solutions/5628530/)

---

```Java []
public class Solution {

    public int projectionArea(int[][] squareMatrix) {
        int sideLength = squareMatrix.length;
        int totalProjectedArea = 0;

        for (int row = 0; row < sideLength; ++row) {
            int maxColumnHeight = 0;
            int maxRowHeight = 0;

            for (int column = 0; column < sideLength; ++column) {
                if (squareMatrix[row][column] > 0) {
                    ++totalProjectedArea;
                }
                if (maxRowHeight < squareMatrix[row][column]) {
                    maxRowHeight = squareMatrix[row][column];
                }
                if (maxColumnHeight < squareMatrix[column][row]) {
                    maxColumnHeight = squareMatrix[column][row];
                }
            }
            totalProjectedArea += maxRowHeight + maxColumnHeight;
        }

        return totalProjectedArea;
    }
}
```
```JavaScript []
/**
 * @param {number[][]} squareMatrix
 * @return {number}
 */
var projectionArea = function (squareMatrix) {
    const sideLength = squareMatrix.length;
    let totalProjectedArea = 0;

    for (let row = 0; row < sideLength; ++row) {
        let maxColumnHeight = 0;
        let maxRowHeight = 0;

        for (let column = 0; column < sideLength; ++column) {
            if (squareMatrix[row][column] > 0) {
                ++totalProjectedArea;
            }
            if (maxRowHeight < squareMatrix[row][column]) {
                maxRowHeight = squareMatrix[row][column];
            }
            if (maxColumnHeight < squareMatrix[column][row]) {
                maxColumnHeight = squareMatrix[column][row];
            }
        }
        totalProjectedArea += maxRowHeight + maxColumnHeight;
    }

    return totalProjectedArea;
};
```
```TypeScript []
function projectionArea(squareMatrix: number[][]): number {
    const sideLength = squareMatrix.length;
    let totalProjectedArea = 0;

    for (let row = 0; row < sideLength; ++row) {
        let maxColumnHeight = 0;
        let maxRowHeight = 0;

        for (let column = 0; column < sideLength; ++column) {
            if (squareMatrix[row][column] > 0) {
                ++totalProjectedArea;
            }
            if (maxRowHeight < squareMatrix[row][column]) {
                maxRowHeight = squareMatrix[row][column];
            }
            if (maxColumnHeight < squareMatrix[column][row]) {
                maxColumnHeight = squareMatrix[column][row];
            }
        }
        totalProjectedArea += maxRowHeight + maxColumnHeight;
    }

    return totalProjectedArea;
};
```
```C++ []
#include <vector>
using namespace std;

class Solution {

public:
    int projectionArea(const vector<vector<int>>& squareMatrix) const {
        int sideLength = squareMatrix.size();
        int totalProjectedArea = 0;

        for (int row = 0; row < sideLength; ++row) {
            int maxColumnHeight = 0;
            int maxRowHeight = 0;

            for (int column = 0; column < sideLength; ++column) {
                if (squareMatrix[row][column] > 0) {
                    ++totalProjectedArea;
                }
                if (maxRowHeight < squareMatrix[row][column]) {
                    maxRowHeight = squareMatrix[row][column];
                }
                if (maxColumnHeight < squareMatrix[column][row]) {
                    maxColumnHeight = squareMatrix[column][row];
                }
            }
            totalProjectedArea += maxRowHeight + maxColumnHeight;
        }

        return totalProjectedArea;
    }
};
```
```C# []
using System;

public class Solution
{
    public int ProjectionArea(int[][] squareMatrix)
    {
        int sideLength = squareMatrix.Length;
        int totalProjectedArea = 0;

        for (int row = 0; row < sideLength; ++row)
        {
            int maxColumnHeight = 0;
            int maxRowHeight = 0;

            for (int column = 0; column < sideLength; ++column)
            {
                if (squareMatrix[row][column] > 0)
                {
                    ++totalProjectedArea;
                }
                if (maxRowHeight < squareMatrix[row][column])
                {
                    maxRowHeight = squareMatrix[row][column];
                }
                if (maxColumnHeight < squareMatrix[column][row])
                {
                    maxColumnHeight = squareMatrix[column][row];
                }
            }
            totalProjectedArea += maxRowHeight + maxColumnHeight;
        }

        return totalProjectedArea;
    }
}
```
```Kotlin []
class Solution {

    fun projectionArea(squareMatrix: Array<IntArray>): Int {
        val sideLength = squareMatrix.size
        var totalProjectedArea = 0

        for (row in 0..<sideLength) {
            var maxColumnHeight = 0
            var maxRowHeight = 0

            for (column in 0..<sideLength) {
                if (squareMatrix[row][column] > 0) {
                    ++totalProjectedArea
                }
                if (maxRowHeight < squareMatrix[row][column]) {
                    maxRowHeight = squareMatrix[row][column]
                }
                if (maxColumnHeight < squareMatrix[column][row]) {
                    maxColumnHeight = squareMatrix[column][row]
                }
            }
            totalProjectedArea += maxRowHeight + maxColumnHeight
        }

        return totalProjectedArea
    }
}
```
```Go []
package main

import "fmt"

func projectionArea(squareMatrix [][]int) int {
    sideLength := len(squareMatrix)
    totalProjectedArea := 0

    for row := 0; row < sideLength; row++ {
        var maxColumnHeight = 0
        var maxRowHeight = 0

        for column := 0; column < sideLength; column++ {
            if squareMatrix[row][column] > 0 {
                totalProjectedArea++
            }
            if maxRowHeight < squareMatrix[row][column] {
                maxRowHeight = squareMatrix[row][column]
            }
            if maxColumnHeight < squareMatrix[column][row] {
                maxColumnHeight = squareMatrix[column][row]
            }
        }
        totalProjectedArea += maxRowHeight + maxColumnHeight
    }

    return totalProjectedArea
}
```