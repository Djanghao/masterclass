# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/subrectangle-queries/solutions/5909718/](https://leetcode.com/problems/subrectangle-queries/solutions/5909718/)

---

```Java []
public class SubrectangleQueries {

    private final int[][] rectangle;

    public SubrectangleQueries(int[][] rectangle) {
        this.rectangle = rectangle;
    }

    public void updateSubrectangle(int fromRow, int fromColumn, int toRow, int toColumn, int newValue) {
        for (int r = fromRow; r <= toRow; ++r) {
            for (int c = fromColumn; c <= toColumn; ++c) {
                rectangle[r][c] = newValue;
            }
        }
    }

    public int getValue(int row, int column) {
        return rectangle[row][column];
    }
}
```
```JavaScript []
class SubrectangleQueries {

    /**
     * @param {number[][]} rectangle
     */
    constructor(rectangle) {
        this.rectangle = rectangle;
    }

    /** 
     * @param {number} fromRow 
     * @param {number} fromColumn 
     * @param {number} toRow 
     * @param {number} toColumn 
     * @param {number} newValue
     * @return {void}
     */
    updateSubrectangle(fromRow, fromColumn, toRow, toColumn, newValue) {
        for (let r = fromRow; r <= toRow; ++r) {
            for (let c = fromColumn; c <= toColumn; ++c) {
                this.rectangle[r][c] = newValue;
            }
        }
    }

    /** 
     * @param {number} row 
     * @param {number} column
     * @return {number}
     */
    getValue(row, column) {
        return this.rectangle[row][column];
    }
}
```
```TypeScript []
class SubrectangleQueries {

    rectangle: number[][]

    constructor(rectangle: number[][]) {
        this.rectangle = rectangle;
    }

    updateSubrectangle(fromRow: number, fromColumn: number, toRow: number, toColumn: number, newValue: number): void {
        for (let r = fromRow; r <= toRow; ++r) {
            for (let c = fromColumn; c <= toColumn; ++c) {
                this.rectangle[r][c] = newValue;
            }
        }
    }

    getValue(row: number, column: number): number {
        return this.rectangle[row][column];
    }
}
```
```C++ []
#include <vector>
using namespace std;

/*
The code will run faster with ios::sync_with_stdio(0).
However, this should not be used in production code and interactive problems.
In this particular problem, it is ok to apply ios::sync_with_stdio(0).

Many of the top-ranked C++ solutions for time on leetcode apply this trick,
so, for a fairer assessment of the time percentile of my code
you could outcomment the lambda expression below for a faster run.
*/

/*
const static auto speedup = [] {
    ios::sync_with_stdio(0);
    return nullptr;
}();
*/

class SubrectangleQueries {

    vector<vector<int>>& rectangle;

public:
    SubrectangleQueries(vector<vector<int>>& rectangle) : rectangle{ rectangle } { }

    void updateSubrectangle(int fromRow, int fromColumn, int toRow, int toColumn, int newValue) {
        for (size_t r = fromRow; r <= toRow; ++r) {
            for (size_t c = fromColumn; c <= toColumn; ++c) {
                rectangle[r][c] = newValue;
            }
        }
    }

    int getValue(int row, int column) const {
        return rectangle[row][column];
    }
};
```
```C# []
using System;

public class SubrectangleQueries
{
    private readonly int[][] rectangle;

    public SubrectangleQueries(int[][] rectangle)
    {
        this.rectangle = rectangle;
    }

    public void UpdateSubrectangle(int fromRow, int fromColumn, int toRow, int toColumn, int newValue)
    {
        for (int r = fromRow; r <= toRow; ++r)
        {
            for (int c = fromColumn; c <= toColumn; ++c)
            {
                rectangle[r][c] = newValue;
            }
        }
    }

    public int GetValue(int row, int column)
    {
        return rectangle[row][column];
    }
}
```
```Kotlin []
class SubrectangleQueries(private var rectangle: Array<IntArray>) {

    fun updateSubrectangle(fromRow: Int, fromColumn: Int, toRow: Int, toColumn: Int, newValue: Int) {
        for (r in fromRow..toRow) {
            for (c in fromColumn..toColumn) {
                rectangle[r][c] = newValue;
            }
        }
    }

    fun getValue(row: Int, column: Int): Int {
        return rectangle[row][column];
    }
}
```
```Go []
package main

import "fmt"

type SubrectangleQueries struct {
    rectangle [][]int
}

func Constructor(rectangle [][]int) SubrectangleQueries {
    subrectangleQueries := SubrectangleQueries{
        rectangle: rectangle,
    }
    return subrectangleQueries
}

func (this *SubrectangleQueries) UpdateSubrectangle(fromRow int, fromColumn int, toRow int, toColumn int, newValue int) {
    for r := fromRow; r <= toRow; r++ {
        for c := fromColumn; c <= toColumn; c++ {
            this.rectangle[r][c] = newValue
        }
    }
}

func (this *SubrectangleQueries) GetValue(row int, column int) int {
    return this.rectangle[row][column]
}
```