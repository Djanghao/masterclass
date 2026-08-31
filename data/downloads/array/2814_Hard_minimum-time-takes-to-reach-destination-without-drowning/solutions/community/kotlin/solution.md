# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-takes-to-reach-destination-without-drowning/solutions/5248015/](https://leetcode.com/problems/minimum-time-takes-to-reach-destination-without-drowning/solutions/5248015/)

---

```Java []
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class Solution {

    private record Point(int row, int column) {}

    private static final int[][] moves = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
    private static final String START = "S";
    private static final String DESTINATION = "D";
    private static final String EMPTY = ".";
    private static final String STONE = "X";
    private static final String FLOODED = "*";
    private static final int IMPOSSIBLE_TO_REACH_DESTINATION = -1;
    private static final int NOT_FLOODED = Integer.MAX_VALUE;
    private static final int VISITED = 0;

    private int rows;
    private int columns;
    private List<List<String>> land;
    private int[][] minTimeToFlood;

    public int minimumSeconds(List<List<String>> land) {
        rows = land.size();
        columns = land.get(0).size();
        this.land = land;
        initializeMatrixMinTimeToFlood();
        return findMinTimeToReachDestination();
    }

    private int findMinTimeToReachDestination() {
        Queue<Point> queueForDestinationTime = new LinkedList<>();
        initializeQueueForDestinationTime(queueForDestinationTime);
        int minTimeToDestination = 0;

        while (!queueForDestinationTime.isEmpty()) {

            for (int i = queueForDestinationTime.size() - 1; i >= 0; --i) {
                Point current = queueForDestinationTime.poll();
                if (land.get(current.row).get(current.column).equals(DESTINATION)) {
                    return minTimeToDestination;
                }

                for (int[] move : moves) {
                    int nextRow = current.row + move[0];
                    int nextColumn = current.column + move[1];
                    if (isValidPointToStep(nextRow, nextColumn, minTimeToDestination + 1)) {
                        queueForDestinationTime.add(new Point(nextRow, nextColumn));
                        minTimeToFlood[nextRow][nextColumn] = VISITED;
                    }
                }
            }

            ++minTimeToDestination;
        }

        return IMPOSSIBLE_TO_REACH_DESTINATION;
    }

    private void initializeMatrixMinTimeToFlood() {
        minTimeToFlood = new int[rows][columns];
        for (int r = 0; r < rows; ++r) {
            Arrays.fill(minTimeToFlood[r], NOT_FLOODED);
        }

        int floodTime = 0;
        Queue<Point> queueForFloodTime = new LinkedList<>();
        initializeQueueForFloodTime(queueForFloodTime, floodTime);

        while (!queueForFloodTime.isEmpty()) {
            ++floodTime;
            for (int i = queueForFloodTime.size() - 1; i >= 0; --i) {
                Point current = queueForFloodTime.poll();

                for (int[] move : moves) {
                    int nextRow = current.row + move[0];
                    int nextColumn = current.column + move[1];
                    if (isValidPointToFlood(nextRow, nextColumn)) {
                        minTimeToFlood[nextRow][nextColumn] = floodTime;
                        queueForFloodTime.add(new Point(nextRow, nextColumn));
                    }
                }
            }
        }
    }

    private void initializeQueueForFloodTime(Queue<Point> queueForFloodTime, int floodTime) {
        for (int r = 0; r < rows; ++r) {
            for (int c = 0; c < columns; ++c) {
                if (land.get(r).get(c).equals(FLOODED)) {
                    queueForFloodTime.add(new Point(r, c));
                    minTimeToFlood[r][c] = floodTime;
                }
            }
        }
    }

    private void initializeQueueForDestinationTime(Queue<Point> queueForDestinationTime) {
        for (int r = 0; r < rows; ++r) {
            for (int c = 0; c < columns; ++c) {
                if (land.get(r).get(c).equals(START)) {
                    queueForDestinationTime.add(new Point(r, c));
                    return;
                }
            }
        }
    }

    private boolean isValidPointToFlood(int row, int column) {
        return isInBoundary(row, column)
                && minTimeToFlood[row][column] == NOT_FLOODED
                && (land.get(row).get(column).equals(EMPTY)
                || land.get(row).get(column).equals(START));
    }

    private boolean isValidPointToStep(int row, int column, int currentTime) {
        return isInBoundary(row, column)
                && ((minTimeToFlood[row][column] > currentTime
                && land.get(row).get(column).equals(EMPTY))
                || land.get(row).get(column).equals(DESTINATION));
    }

    private boolean isInBoundary(int row, int column) {
        return row >= 0 && row < rows && column >= 0 && column < columns;
    }
}
```
```JavaScript []
/**
 * @param {string[][]} land
 * @return {number}
 */
var minimumSeconds = function (land) {
    this.moves = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    this.START = "S";
    this.DESTINATION = "D";
    this.EMPTY = ".";
    this.STONE = "X";
    this.FLOODED = "*";
    this.IMPOSSIBLE_TO_REACH_DESTINATION = -1;
    this.NOT_FLOODED = Number.MAX_SAFE_INTEGER;
    this.VISITED = 0;

    this.rows = land.length;
    this.columns = land[0].length;
    this.land = land;
    this.minTimeToFlood = [];

    initializeMatrixMinTimeToFlood();
    return findMinTimeToReachDestination();

};

/**
 * @param {number} row
 * @param {number}column
 */
function Point(row, column) {
    this.row = row;
    this.column = column;
}

/**
 * @return {void} 
 */
function findMinTimeToReachDestination() {
    // Queue<Point>    
    // const {Queue} = require('@datastructures-js/queue');
    const queueForDestinationTime = new Queue();
    initializeQueueForDestinationTime(queueForDestinationTime);
    let minTimeToDestination = 0;

    while (!queueForDestinationTime.isEmpty()) {

        for (let i = queueForDestinationTime.size() - 1; i >= 0; --i) {
            const current = queueForDestinationTime.dequeue();
            if (this.land[current.row][current.column] === this.DESTINATION) {
                return minTimeToDestination;
            }

            for (let move of this.moves) {
                let nextRow = current.row + move[0];
                let nextColumn = current.column + move[1];
                if (isValidPointToStep(nextRow, nextColumn, minTimeToDestination + 1)) {
                    queueForDestinationTime.enqueue(new Point(nextRow, nextColumn));
                    this.minTimeToFlood[nextRow][nextColumn] = this.VISITED;
                }
            }
        }

        ++minTimeToDestination;
    }

    return this.IMPOSSIBLE_TO_REACH_DESTINATION;
}

/**
 * @return {void} 
 */
function initializeMatrixMinTimeToFlood() {
    this.minTimeToFlood = Array.from(new Array(this.rows), () => new Array(this.columns).fill(this.NOT_FLOODED));

    let floodTime = 0;
    // Queue<Point>
    // const {Queue} = require('@datastructures-js/queue');
    const queueForFloodTime = new Queue();
    initializeQueueForFloodTime(queueForFloodTime, floodTime);

    while (!queueForFloodTime.isEmpty()) {
        ++floodTime;
        for (let i = queueForFloodTime.size() - 1; i >= 0; --i) {
            const current = queueForFloodTime.dequeue();

            for (let move of this.moves) {
                let nextRow = current.row + move[0];
                let nextColumn = current.column + move[1];
                if (isValidPointToFlood(nextRow, nextColumn)) {
                    this.minTimeToFlood[nextRow][nextColumn] = floodTime;
                    queueForFloodTime.enqueue(new Point(nextRow, nextColumn));
                }
            }
        }
    }
}

/**
 * @param {Queue<Point>} queueForFloodTime
 * @param {number} floodTime 
 * @return {void} 
 */
function initializeQueueForFloodTime(queueForFloodTime, floodTime) {
    for (let r = 0; r < this.rows; ++r) {
        for (let c = 0; c < this.columns; ++c) {
            if (this.land[r][c] === this.FLOODED) {
                queueForFloodTime.enqueue(new Point(r, c));
                this.minTimeToFlood[r][c] = floodTime;
            }
        }
    }
}

/**
 * @param {Queue<Point>} queueForDestinationTime
 * @return {void} 
 */
function initializeQueueForDestinationTime(queueForDestinationTime) {
    for (let r = 0; r < this.rows; ++r) {
        for (let c = 0; c < this.columns; ++c) {
            if (this.land[r][c] === this.START) {
                queueForDestinationTime.enqueue(new Point(r, c));
                return;
            }
        }
    }
}

/**
 * @param {number} row
 * @param {number}column
 * @return {boolean} 
 */
function isValidPointToFlood(row, column) {
    return isInBoundary(row, column)
            && this.minTimeToFlood[row][column] === this.NOT_FLOODED
            && (this.land[row][column] === this.EMPTY
            || this.land[row][column] === this.START);
}

/**
 * @param {number} row
 * @param {number}column
 * @param {number} currentTime 
 * @return {boolean} 
 */
function isValidPointToStep(row, column, currentTime) {
    return isInBoundary(row, column)
            && ((this.minTimeToFlood[row][column] > currentTime
            && this.land[row][column] === this.EMPTY)
            || this.land[row][column] === this.DESTINATION);
}

/**
 * @param {number} row
 * @param {number}column
 * @return {boolean} 
 */
function isInBoundary(row, column) {
    return row >= 0 && row < this.rows && column >= 0 && column < this.columns;
}
```
```TypeScript []
function minimumSeconds(land: string[][]): number {
    this.moves = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    this.START = "S";
    this.DESTINATION = "D";
    this.EMPTY = ".";
    this.STONE = "X";
    this.FLOODED = "*";
    this.IMPOSSIBLE_TO_REACH_DESTINATION = -1;
    this.NOT_FLOODED = Number.MAX_SAFE_INTEGER;
    this.VISITED = 0;

    this.rows = land.length;
    this.columns = land[0].length;
    this.land = land;
    this.minTimeToFlood = [];

    initializeMatrixMinTimeToFlood();
    return findMinTimeToReachDestination();

};


function Point(row: number, column: number) {
    this.row = row;
    this.column = column;
}

function findMinTimeToReachDestination(): number {
    // Queue<Point>    
    const { Queue } = require('@datastructures-js/queue');
    const queueForDestinationTime = new Queue();
    initializeQueueForDestinationTime(queueForDestinationTime);
    let minTimeToDestination = 0;

    while (!queueForDestinationTime.isEmpty()) {

        for (let i = queueForDestinationTime.size() - 1; i >= 0; --i) {
            const current = queueForDestinationTime.dequeue();
            if (this.land[current.row][current.column] === this.DESTINATION) {
                return minTimeToDestination;
            }

            for (let move of this.moves) {
                let nextRow = current.row + move[0];
                let nextColumn = current.column + move[1];
                if (isValidPointToStep(nextRow, nextColumn, minTimeToDestination + 1)) {
                    queueForDestinationTime.enqueue(new Point(nextRow, nextColumn));
                    this.minTimeToFlood[nextRow][nextColumn] = this.VISITED;
                }
            }
        }

        ++minTimeToDestination;
    }

    return this.IMPOSSIBLE_TO_REACH_DESTINATION;
}

function initializeMatrixMinTimeToFlood(): void {
    this.minTimeToFlood = Array.from(new Array(this.rows), () => new Array(this.columns).fill(this.NOT_FLOODED));

    let floodTime = 0;
    // Queue<Point>
    const { Queue } = require('@datastructures-js/queue');
    const queueForFloodTime = new Queue();
    initializeQueueForFloodTime(queueForFloodTime, floodTime);

    while (!queueForFloodTime.isEmpty()) {
        ++floodTime;
        for (let i = queueForFloodTime.size() - 1; i >= 0; --i) {
            const current = queueForFloodTime.dequeue();

            for (let move of this.moves) {
                let nextRow = current.row + move[0];
                let nextColumn = current.column + move[1];
                if (isValidPointToFlood(nextRow, nextColumn)) {
                    this.minTimeToFlood[nextRow][nextColumn] = floodTime;
                    queueForFloodTime.enqueue(new Point(nextRow, nextColumn));
                }
            }
        }
    }
}

function initializeQueueForFloodTime(queueForFloodTime: typeof Queue, floodTime: number): void {
    for (let r = 0; r < this.rows; ++r) {
        for (let c = 0; c < this.columns; ++c) {
            if (this.land[r][c] === this.FLOODED) {
                queueForFloodTime.enqueue(new Point(r, c));
                this.minTimeToFlood[r][c] = floodTime;
            }
        }
    }
}

function initializeQueueForDestinationTime(queueForDestinationTime: typeof Queue): void {
    for (let r = 0; r < this.rows; ++r) {
        for (let c = 0; c < this.columns; ++c) {
            if (this.land[r][c] === this.START) {
                queueForDestinationTime.enqueue(new Point(r, c));
                return;
            }
        }
    }
}

function isValidPointToFlood(row: number, column: number): boolean {
    return isInBoundary(row, column)
           && this.minTimeToFlood[row][column] === this.NOT_FLOODED
           && (this.land[row][column] === this.EMPTY
           || this.land[row][column] === this.START);
}

function isValidPointToStep(row: number, column: number, currentTime: number): boolean {
    return isInBoundary(row, column)
           && ((this.minTimeToFlood[row][column] > currentTime
           && this.land[row][column] === this.EMPTY)
           || this.land[row][column] === this.DESTINATION);
}

function isInBoundary(row: number, column: number): boolean {
    return row >= 0 && row < this.rows && column >= 0 && column < this.columns;
}
```
```C++ []
#include <array>
#include <queue>
#include <string>
#include <vector>
#include <memory>
#include <limits>
using namespace std;

class Solution {

    struct Point {
        size_t row;
        size_t column;
        Point() = default;
        Point(size_t row, size_t column) :row{ row }, column{ column } {};
    };

    static constexpr array<array<int, 2>, 4> moves{ { {-1, 0}, {1, 0}, {0, -1}, {0, 1} } };
    inline static const string START = "S";
    inline static const string DESTINATION = "D";
    inline static const string EMPTY = ".";
    inline static const string STONE = "X";
    inline static const string FLOODED = "*";
    inline static const int IMPOSSIBLE_TO_REACH_DESTINATION = -1;
    inline static const int NOT_FLOODED = numeric_limits<int>::max();
    inline static const int VISITED = 0;

    size_t rows;
    size_t columns;
    unique_ptr<vector<vector<string>>> land;
    vector<vector<int>> minTimeToFlood;

public:
    int minimumSeconds(const vector<vector<string>>& land) {
        this->rows = land.size();
        this->columns = land[0].size();
        this->land = make_unique< vector<vector<string>>>(land);
        initializeMatrixMinTimeToFlood();
        return findMinTimeToReachDestination();
    }

private:
    int findMinTimeToReachDestination() {
        queue<Point> queueForDestinationTime;
        initializeQueueForDestinationTime(queueForDestinationTime);
        int minTimeToDestination = 0;

        while (!queueForDestinationTime.empty()) {

            for (size_t i = queueForDestinationTime.size() - 1; i != variant_npos; --i) {
                Point current = queueForDestinationTime.front();
                queueForDestinationTime.pop();

                if ((*land)[current.row][current.column] == DESTINATION) {
                    return minTimeToDestination;
                }

                for (const auto& move : moves) {
                    size_t nextRow = current.row + move[0];
                    size_t nextColumn = current.column + move[1];
                    if (isValidPointToStep(nextRow, nextColumn, minTimeToDestination + 1)) {
                        queueForDestinationTime.emplace(nextRow, nextColumn);
                        minTimeToFlood[nextRow][nextColumn] = VISITED;
                    }
                }
            }

            ++minTimeToDestination;
        }

        return IMPOSSIBLE_TO_REACH_DESTINATION;
    }

    void initializeMatrixMinTimeToFlood() {
        minTimeToFlood.resize(rows, vector<int>(columns, NOT_FLOODED));

        int floodTime = 0;
        queue<Point> queueForFloodTime;
        initializeQueueForFloodTime(queueForFloodTime, floodTime);

        while (!queueForFloodTime.empty()) {
            ++floodTime;
            for (size_t i = queueForFloodTime.size() - 1; i != variant_npos; --i) {
                Point current = queueForFloodTime.front();
                queueForFloodTime.pop();

                for (const auto& move : moves) {
                    size_t nextRow = current.row + move[0];
                    size_t nextColumn = current.column + move[1];
                    if (isValidPointToFlood(nextRow, nextColumn)) {
                        minTimeToFlood[nextRow][nextColumn] = floodTime;
                        queueForFloodTime.emplace(nextRow, nextColumn);
                    }
                }
            }
        }
    }

    void initializeQueueForFloodTime(queue<Point>& queueForFloodTime, int floodTime) {
        for (size_t r = 0; r < rows; ++r) {
            for (size_t c = 0; c < columns; ++c) {
                if ((*land)[r][c] == FLOODED) {
                    queueForFloodTime.emplace(r, c);
                    minTimeToFlood[r][c] = floodTime;
                }
            }
        }
    }

    void initializeQueueForDestinationTime(queue<Point>& queueForDestinationTime) const {
        for (size_t r = 0; r < rows; ++r) {
            for (size_t c = 0; c < columns; ++c) {
                if ((*land)[r][c] == START) {
                    queueForDestinationTime.emplace(r, c);
                    return;
                }
            }
        }
    }

    bool isValidPointToFlood(size_t row, size_t column) const {
        return isInBoundary(row, column)
                && minTimeToFlood[row][column] == NOT_FLOODED
                && ((*land)[row][column] == EMPTY
                || (*land)[row][column] == START);
    }

    bool isValidPointToStep(size_t row, size_t column, int currentTime) const {
        return isInBoundary(row, column)
                && ((minTimeToFlood[row][column] > currentTime
                && (*land)[row][column] == EMPTY)
                || (*land)[row][column] == DESTINATION);
    }

    bool isInBoundary(size_t row, size_t column) const {
        return row < rows && column < columns;
    }
};
```
```C# []
using System;
using System.Collections.Generic;

public class Solution
{
    private sealed record Point(int row, int column) { }

    private static readonly int[][] moves = new int[4][]{
        new int[]{ -1, 0 }, new int[]{ 1, 0 }, new int[]{ 0, -1 }, new int[]{ 0, 1 } };

    private static readonly string START = "S";
    private static readonly string DESTINATION = "D";
    private static readonly string EMPTY = ".";
    private static readonly string STONE = "X";
    private static readonly string FLOODED = "*";
    private static readonly int IMPOSSIBLE_TO_REACH_DESTINATION = -1;
    private static readonly int NOT_FLOODED = int.MaxValue;
    private static readonly int VISITED = 0;

    private int rows;
    private int columns;
    private IList<IList<String>>? land;
    private int[][]? minTimeToFlood;

    public int MinimumSeconds(IList<IList<string>> land)
    {
        rows = land.Count;
        columns = land[0].Count;
        this.land = land;
        InitializeMatrixMinTimeToFlood();
        return FindMinTimeToReachDestination();
    }

    private int FindMinTimeToReachDestination()
    {
        Queue<Point> queueForDestinationTime = new Queue<Point>();
        InitializeQueueForDestinationTime(queueForDestinationTime);
        int minTimeToDestination = 0;

        while (queueForDestinationTime.Count > 0)
        {
            for (int i = queueForDestinationTime.Count - 1; i >= 0; --i)
            {
                Point current = queueForDestinationTime.Dequeue();
                if (land[current.row][current.column].Equals(DESTINATION))
                {
                    return minTimeToDestination;
                }

                foreach (int[] move in moves)
                {
                    int nextRow = current.row + move[0];
                    int nextColumn = current.column + move[1];
                    if (IsValidPointToStep(nextRow, nextColumn, minTimeToDestination + 1))
                    {
                        queueForDestinationTime.Enqueue(new Point(nextRow, nextColumn));
                        minTimeToFlood[nextRow][nextColumn] = VISITED;
                    }
                }
            }

            ++minTimeToDestination;
        }

        return IMPOSSIBLE_TO_REACH_DESTINATION;
    }

    private void InitializeMatrixMinTimeToFlood()
    {
        minTimeToFlood = new int[rows][];
        for (int r = 0; r < rows; ++r)
        {
            minTimeToFlood[r] = new int[columns];
            Array.Fill(minTimeToFlood[r], NOT_FLOODED);
        }

        int floodTime = 0;
        Queue<Point> queueForFloodTime = new Queue<Point>();
        InitializeQueueForFloodTime(queueForFloodTime, floodTime);

        while (queueForFloodTime.Count > 0)
        {
            ++floodTime;
            for (int i = queueForFloodTime.Count - 1; i >= 0; --i)
            {
                Point current = queueForFloodTime.Dequeue();

                foreach (int[] move in moves)
                {
                    int nextRow = current.row + move[0];
                    int nextColumn = current.column + move[1];
                    if (IsValidPointToFlood(nextRow, nextColumn))
                    {
                        minTimeToFlood[nextRow][nextColumn] = floodTime;
                        queueForFloodTime.Enqueue(new Point(nextRow, nextColumn));
                    }
                }
            }
        }
    }

    private void InitializeQueueForFloodTime(Queue<Point> queueForFloodTime, int floodTime)
    {
        for (int r = 0; r < rows; ++r)
        {
            for (int c = 0; c < columns; ++c)
            {
                if (land[r][c].Equals(FLOODED))
                {
                    queueForFloodTime.Enqueue(new Point(r, c));
                    minTimeToFlood[r][c] = floodTime;
                }
            }
        }
    }

    private void InitializeQueueForDestinationTime(Queue<Point> queueForDestinationTime)
    {
        for (int r = 0; r < rows; ++r)
        {
            for (int c = 0; c < columns; ++c)
            {
                if (land[r][c].Equals(START))
                {
                    queueForDestinationTime.Enqueue(new Point(r, c));
                    return;
                }
            }
        }
    }

    private bool IsValidPointToFlood(int row, int column)
    {
        return IsInBoundary(row, column)
                && minTimeToFlood[row][column] == NOT_FLOODED
                && (land[row][column].Equals(EMPTY)
                || land[row][column].Equals(START));
    }

    private bool IsValidPointToStep(int row, int column, int currentTime)
    {
        return IsInBoundary(row, column)
                && ((minTimeToFlood[row][column] > currentTime
                && land[row][column].Equals(EMPTY))
                || land[row][column].Equals(DESTINATION));
    }

    private bool IsInBoundary(int row, int column)
    {
        return row >= 0 && row < rows && column >= 0 && column < columns;
    }
}
```
```Kotlin []
import java.util.Queue
import java.util.Arrays
import java.util.LinkedList


class Solution {

    private data class Point(val row: Int, val column: Int) {}

    private companion object {
        val moves = arrayOf<IntArray>(intArrayOf(-1, 0), intArrayOf(1, 0), intArrayOf(0, -1), intArrayOf(0, 1))
        const val START = "S"
        const val DESTINATION = "D"
        const val EMPTY = "."
        const val STONE = "X"
        const val FLOODED = "*"
        const val IMPOSSIBLE_TO_REACH_DESTINATION = -1
        const val NOT_FLOODED = Integer.MAX_VALUE
        const val VISITED = 0
    }

    private var rows = 0
    private var columns = 0
    private var land: List<List<String>> = ArrayList<List<String>>()
    private var minTimeToFlood: ArrayList<IntArray> = ArrayList<IntArray>()

    fun minimumSeconds(land: List<List<String>>): Int {
        rows = land.size
        columns = land[0].size
        this.land = land
        initializeMatrixMinTimeToFlood()
        return findMinTimeToReachDestination()
    }

    private fun findMinTimeToReachDestination(): Int {
        val queueForDestinationTime = LinkedList<Point>()
        initializeQueueForDestinationTime(queueForDestinationTime)
        var minTimeToDestination = 0

        while (!queueForDestinationTime.isEmpty()) {

            for (i in queueForDestinationTime.size - 1 downTo 0) {
                val current = queueForDestinationTime.poll()
                if (land[current.row][current.column] == DESTINATION) {
                    return minTimeToDestination
                }

                for (move in moves) {
                    val nextRow = current.row + move[0]
                    val nextColumn = current.column + move[1]
                    if (isValidPointToStep(nextRow, nextColumn, minTimeToDestination + 1)) {
                        queueForDestinationTime.add(Point(nextRow, nextColumn))
                        minTimeToFlood[nextRow][nextColumn] = VISITED
                    }
                }
            }

            ++minTimeToDestination
        }

        return IMPOSSIBLE_TO_REACH_DESTINATION
    }

    private fun initializeMatrixMinTimeToFlood() {
        minTimeToFlood = ArrayList<IntArray>(rows)

        for (r in 0..<rows) {
            minTimeToFlood.add(IntArray(columns))
            Arrays.fill(minTimeToFlood[r], NOT_FLOODED)
        }

        var floodTime = 0
        val queueForFloodTime = LinkedList<Point>()
        initializeQueueForFloodTime(queueForFloodTime, floodTime)

        while (!queueForFloodTime.isEmpty()) {
            ++floodTime
            for (i in queueForFloodTime.size - 1 downTo 0) {
                val current = queueForFloodTime.poll()

                for (move in moves) {
                    val nextRow = current.row + move[0]
                    val nextColumn = current.column + move[1]
                    if (isValidPointToFlood(nextRow, nextColumn)) {
                        minTimeToFlood[nextRow][nextColumn] = floodTime
                        queueForFloodTime.add(Point(nextRow, nextColumn))
                    }
                }
            }
        }
    }

    private fun initializeQueueForFloodTime(queueForFloodTime: Queue<Point>, floodTime: Int) {
        for (r in 0..<rows) {
            for (c in 0..<columns) {
                if (land[r][c] == FLOODED) {
                    queueForFloodTime.add(Point(r, c))
                    minTimeToFlood[r][c] = floodTime
                }
            }
        }
    }

    private fun initializeQueueForDestinationTime(queueForDestinationTime: Queue<Point>) {
        for (r in 0..<rows) {
            for (c in 0..<columns) {
                if (land[r][c] == START) {
                    queueForDestinationTime.add(Point(r, c))
                    return
                }
            }
        }
    }

    private fun isValidPointToFlood(row: Int, column: Int): Boolean {
        return isInBoundary(row, column)
                && minTimeToFlood[row][column] == NOT_FLOODED
                && (land[row][column] == EMPTY
                || land[row][column] == START)
    }

    private fun isValidPointToStep(row: Int, column: Int, currentTime: Int): Boolean {
        return isInBoundary(row, column)
                && ((minTimeToFlood[row][column] > currentTime
                && land[row][column] == EMPTY)
                || land[row][column] == DESTINATION)
    }

    private fun isInBoundary(row: Int, column: Int): Boolean {
        return row in 0..<rows && column in 0..<columns
    }
}
```
```Go []
package main

import (
	"container/list"
	"fmt"
	"math"
)

var moves [4][2]int = [4][2]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}
var START string = "S"
var DESTINATION string = "D"
var EMPTY string = "."
var STONE string = "X"
var FLOODED string = "*"
var IMPOSSIBLE_TO_REACH_DESTINATION int = -1
var NOT_FLOODED int = math.MaxInt
var VISITED int = 0

var rows int
var columns int
var landPointer (*[][]string)
var minTimeToFlood [][]int

type Point struct {
	row    int
	column int
}

func minimumSeconds(land [][]string) int {
	rows = len(land)
	columns = len(land[0])
	landPointer = &land
	initializeMatrixMinTimeToFlood()
	return findMinTimeToReachDestination()
}

func findMinTimeToReachDestination() int {
	var queueForDestinationTime = list.New()
	initializeQueueForDestinationTime(queueForDestinationTime)
	var minTimeToDestination = 0

	for queueForDestinationTime.Len() > 0 {

		for i := queueForDestinationTime.Len() - 1; i >= 0; i-- {
			var current = queueForDestinationTime.Front().Value
			queueForDestinationTime.Remove(queueForDestinationTime.Front())

			if (*landPointer)[current.(Point).row][current.(Point).column] == DESTINATION {
				return minTimeToDestination
			}

			for _, move := range moves {
				var nextRow = current.(Point).row + move[0]
				var nextColumn = current.(Point).column + move[1]
				if isValidPointToStep(nextRow, nextColumn, minTimeToDestination+1) {
					queueForDestinationTime.PushBack(Point{nextRow, nextColumn})
					minTimeToFlood[nextRow][nextColumn] = VISITED
				}
			}
		}

		minTimeToDestination++
	}

	return IMPOSSIBLE_TO_REACH_DESTINATION
}

func initializeMatrixMinTimeToFlood() {
	minTimeToFlood = make([][]int, rows)

	for r := 0; r < rows; r++ {
		minTimeToFlood[r] = make([]int, columns)
		for c := 0; c < columns; c++ {
			minTimeToFlood[r][c] = NOT_FLOODED
		}
	}

	var floodTime = 0
	var queueForFloodTime = list.New()
	initializeQueueForFloodTime(queueForFloodTime, floodTime)

	for queueForFloodTime.Len() > 0 {
		floodTime++
		for i := queueForFloodTime.Len() - 1; i >= 0; i-- {
			var current = queueForFloodTime.Front().Value
			queueForFloodTime.Remove(queueForFloodTime.Front())

			for _, move := range moves {
				var nextRow = current.(Point).row + move[0]
				var nextColumn = current.(Point).column + move[1]
				if isValidPointToFlood(nextRow, nextColumn) {
					minTimeToFlood[nextRow][nextColumn] = floodTime
					queueForFloodTime.PushBack(Point{nextRow, nextColumn})
				}
			}
		}
	}
}

func initializeQueueForFloodTime(queueForFloodTime *list.List, floodTime int) {
	for r := 0; r < rows; r++ {
		for c := 0; c < columns; c++ {
			if (*landPointer)[r][c] == FLOODED {
				queueForFloodTime.PushBack(Point{r, c})
				minTimeToFlood[r][c] = floodTime
			}
		}
	}
}

func initializeQueueForDestinationTime(queueForDestinationTime *list.List) {
	for r := 0; r < rows; r++ {
		for c := 0; c < columns; c++ {
			if (*landPointer)[r][c] == START {
				queueForDestinationTime.PushBack(Point{r, c})
				return
			}
		}
	}
}

func isValidPointToFlood(row int, column int) bool {
	return isInBoundary(row, column) &&
		minTimeToFlood[row][column] == NOT_FLOODED &&
		((*landPointer)[row][column] == EMPTY ||
			(*landPointer)[row][column] == START)
}

func isValidPointToStep(row int, column int, currentTime int) bool {
	return isInBoundary(row, column) &&
		((minTimeToFlood[row][column] > currentTime &&
			(*landPointer)[row][column] == EMPTY) ||
			(*landPointer)[row][column] == DESTINATION)
}

func isInBoundary(row int, column int) bool {
	return row >= 0 && row < rows && column >= 0 && column < columns
}
```