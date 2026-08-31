# Java | JavaScript | C++ | C# Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/map-of-highest-peak/solutions/4828737/](https://leetcode.com/problems/map-of-highest-peak/solutions/4828737/)

---

```Java []
import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;

public class Solution {

    private record Point(int row, int column) {}

    private static final int NOT_VISITED = -1;
    private static final int LAND = 0;
    private static final int WATER = 1;
    private static final int[][] moves = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};

    private int rows;
    private int columns;
    private int heightOfTopography;

    public int[][] highestPeak(int[][] input) {
        rows = input.length;
        columns = input[0].length;
        return mutliSourceBreadthFirstSearchToCreateTopographyWithMaxHeight(input);
    }

    private int[][] mutliSourceBreadthFirstSearchToCreateTopographyWithMaxHeight(int[][] input) {
        int[][] topographyWithMaxHeight = new int[rows][columns];
        for (int r = 0; r < rows; ++r) {
            Arrays.fill(topographyWithMaxHeight[r], NOT_VISITED);
        }

        Queue<Point> queue = new LinkedList<>();
        initializeQueueWithWaterPoints(input, topographyWithMaxHeight, queue);

        while (!queue.isEmpty()) {
            int pointsInCurrentStep = queue.size();
            ++heightOfTopography;

            while (pointsInCurrentStep-- > 0) {
                Point current = queue.poll();

                for (int[] move : moves) {
                    int nextRow = current.row + move[0];
                    int nextColumn = current.column + move[1];

                    if (isInMatrix(nextRow, nextColumn) && topographyWithMaxHeight[nextRow][nextColumn] == NOT_VISITED) {
                        queue.add(new Point(nextRow, nextColumn));
                        topographyWithMaxHeight[nextRow][nextColumn] = heightOfTopography;
                    }
                }
            }
        }

        return topographyWithMaxHeight;
    }

    private void initializeQueueWithWaterPoints(int[][] input, int[][] topographyWithMaxHeight, Queue<Point> queue) {
        for (int r = 0; r < rows; ++r) {
            for (int c = 0; c < columns; ++c) {
                if (input[r][c] == WATER) {
                    queue.add(new Point(r, c));
                    topographyWithMaxHeight[r][c] = heightOfTopography;
                }
            }
        }
    }

    private boolean isInMatrix(int row, int column) {
        return row >= 0 && row < rows && column >= 0 && column < columns;
    }
}
```
```JavaScript []
/**
 * @param {number[][]} input
 * @return {number[][]}
 */
var highestPeak = function (input) {
    this.NOT_VISITED = -1;
    this.LAND = 0;
    this.WATER = 1;
    this.moves = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    this.rows = input.length;
    this.columns = input[0].length;
    this.heightOfTopography = 0;

    return mutliSourceBreadthFirstSearchToCreateTopographyWithMaxHeight(input);
};

/**
 * @param {number[][]} input
 * @return {number[][]}
 */
function mutliSourceBreadthFirstSearchToCreateTopographyWithMaxHeight(input) {
    const topographyWithMaxHeight = Array.from(new Array(this.rows), () => new Array(this.columns).fill(this.NOT_VISITED));

    // Queue<Point>
    // const {Queue} = require('@datastructures-js/queue');
    const queue = new Queue();
    initializeQueueWithWaterPoints(input, topographyWithMaxHeight, queue);

    while (!queue.isEmpty()) {
        let pointsInCurrentStep = queue.size();
        ++this.heightOfTopography;

        while (pointsInCurrentStep-- > 0) {
            const current = queue.dequeue();

            for (let move of this.moves) {
                let nextRow = current.row + move[0];
                let nextColumn = current.column + move[1];

                if (isInMatrix(nextRow, nextColumn) && topographyWithMaxHeight[nextRow][nextColumn] === this.NOT_VISITED) {
                    queue.enqueue(new Point(nextRow, nextColumn));
                    topographyWithMaxHeight[nextRow][nextColumn] = heightOfTopography;
                }
            }
        }
    }

    return topographyWithMaxHeight;
}

/**
 * @param {number} row
 * @param {number} column
 */
function Point(row, column) {
    this.row = row;
    this.column = column;
}

/**
 * @param {number[][]} input
 * @param {number[][]} topographyWithMaxHeight
 * @param {Queue<Poit>} queue 
 */
function initializeQueueWithWaterPoints(input, topographyWithMaxHeight, queue) {
    for (let r = 0; r < this.rows; ++r) {
        for (let c = 0; c < this.columns; ++c) {
            if (input[r][c] === this.WATER) {
                queue.enqueue(new Point(r, c));
                topographyWithMaxHeight[r][c] = this.heightOfTopography;
            }
        }
    }
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
```C++ []
#include <span>
#include <array>
#include <queue>
#include <vector>
#include <ranges>
using namespace std;

class Solution {

    struct Point {
        size_t row;
        size_t column;

        Point() = default;
        Point(size_t row, size_t column) : row {row}, column {column} {}
    };

    inline static const int NOT_VISITED = -1;
    inline static const int LAND = 0;
    inline static const int WATER = 1;
    inline static const array<array<int, 2>, 4> moves{ {{1, 0}, {-1, 0}, {0, 1}, {0, -1}} };

    size_t rows;
    size_t  columns;
    int heightOfTopography = 0;

public:
    vector<vector<int>> highestPeak(const vector<vector<int>>& input) {
        rows = input.size();
        columns = input[0].size();
        return mutliSourceBreadthFirstSearchToCreateTopographyWithMaxHeight(input);
    }

private:
    vector<vector<int>> mutliSourceBreadthFirstSearchToCreateTopographyWithMaxHeight(span<const vector<int>> input) {
        vector<vector<int>> topographyWithMaxHeight(rows, vector<int>(columns, NOT_VISITED));
        queue<Point> queue;
        initializeQueueWithWaterPoints(input, topographyWithMaxHeight, queue);

        while (!queue.empty()) {
            size_t pointsInCurrentStep = queue.size();
            ++heightOfTopography;

            while (pointsInCurrentStep-- > 0) {
                Point current = queue.front();
                queue.pop();

                for (const auto& move : moves) {
                    size_t nextRow = current.row + move[0];
                    size_t nextColumn = current.column + move[1];

                    if (isInMatrix(nextRow, nextColumn) && topographyWithMaxHeight[nextRow][nextColumn] == NOT_VISITED) {
                            queue.emplace(nextRow, nextColumn);
                            topographyWithMaxHeight[nextRow][nextColumn] = heightOfTopography;
                    }
                }
            }
        }

        return topographyWithMaxHeight;
    }

    void initializeQueueWithWaterPoints(span<const vector<int>> input, span<vector<int>> topographyWithMaxHeight, queue<Point>& queue) const {
        for (size_t r = 0; r < rows; ++r) {
            for (size_t c = 0; c < columns; ++c) {
                if (input[r][c] == WATER) {
                    queue.emplace(r, c);
                    topographyWithMaxHeight[r][c] = heightOfTopography;
                }
            }
        }
    }

    // in this particular case, checking
    // 'row != variant_npos' and 'column != variant_npos' is not necessary 
    bool isInMatrix(size_t row, size_t column) const {
        return row < rows && column < columns;
    }
};
```
```C# []
using System;
using System.Collections.Generic;

public class Solution
{
    private struct Point
    {
        public int row;
        public int column;

        public Point(int row, int column)
        {
            this.row = row;
            this.column = column;
        }
    }

    static readonly int NOT_VISITED = -1;
    static readonly int LAND = 0;
    static readonly int WATER = 1;
    static readonly int[][] moves = {
        new int[]{ 1, 0 },new int[] { -1, 0 }, new int[]{ 0, 1 }, new int[]{ 0, -1 } };

    private int rows;
    private int columns;
    private int heightOfTopography;
    public int[][] HighestPeak(int[][] input)
    {
        rows = input.Length;
        columns = input[0].Length;
        return mutliSourceBreadthFirstSearchToCreateTopographyWithMaxHeight(input);
    }

    private int[][] mutliSourceBreadthFirstSearchToCreateTopographyWithMaxHeight(int[][] input)
    {
        int[][] topographyWithMaxHeight = new int[rows][];
        for (int r = 0; r < rows; ++r)
        {
            topographyWithMaxHeight[r] = new int[columns];
            Array.Fill(topographyWithMaxHeight[r], NOT_VISITED);
        }

        Queue<Point> queue = new Queue<Point>();
        initializeQueueWithWaterPoints(input, topographyWithMaxHeight, queue);

        while (queue.Count > 0)
        {
            int pointsInCurrentStep = queue.Count;
            ++heightOfTopography;

            while (pointsInCurrentStep-- > 0)
            {
                Point current = queue.Dequeue();

                foreach (int[] move in moves)
                {
                    int nextRow = current.row + move[0];
                    int nextColumn = current.column + move[1];

                    if (isInMatrix(nextRow, nextColumn) && topographyWithMaxHeight[nextRow][nextColumn] == NOT_VISITED)
                    {
                        queue.Enqueue(new Point(nextRow, nextColumn));
                        topographyWithMaxHeight[nextRow][nextColumn] = heightOfTopography;
                    }
                }
            }
        }

        return topographyWithMaxHeight;
    }

    private void initializeQueueWithWaterPoints(int[][] input, int[][] topographyWithMaxHeight, Queue<Point> queue)
    {
        for (int r = 0; r < rows; ++r)
        {
            for (int c = 0; c < columns; ++c)
            {
                if (input[r][c] == WATER)
                {
                    queue.Enqueue(new Point(r, c));
                    topographyWithMaxHeight[r][c] = heightOfTopography;
                }
            }
        }
    }

    private bool isInMatrix(int row, int column)
    {
        return row >= 0 && row < rows && column >= 0 && column < columns;
    }
}
```