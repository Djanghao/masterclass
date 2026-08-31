# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/solutions/5171627/](https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/solutions/5171627/)

---

```Java []
import java.util.LinkedList;
import java.util.Map;
import java.util.Queue;

public class Solution {

    private record Point(int row, int column, int direction) {}

    private static final int EMPTY_SPACE = 0;
    private static final int OBSTACLE = 1;
    private static final int[] directions = {0, 1, 2, 3};
    private static final Map<Integer, int[]> currentDirectionToNextCoordinates
            = Map.of(0, new int[]{0, 1}, 1, new int[]{1, 0}, 2, new int[]{0, -1}, 3, new int[]{-1, 0});

    private int rows;
    private int columns;
    private int[][] visited;

    public int numberOfCleanRooms(int[][] room) {
        rows = room.length;
        columns = room[0].length;
        return breadthFirstSearchToFindMaxCleanedPoints(room);
    }

    private int breadthFirstSearchToFindMaxCleanedPoints(int[][] room) {
        Queue<Point> queue = new LinkedList<>();
        queue.add(new Point(0, 0, 0));

        visited = new int[rows][columns];
        markAsVisitedWithGivenDirection(0, 0, 0);

        int maxCleanedPoints = 1;

        while (!queue.isEmpty()) {

            Point current = queue.poll();
            int nextRow = current.row + currentDirectionToNextCoordinates.get(current.direction)[0];
            int nextColumn = current.column + currentDirectionToNextCoordinates.get(current.direction)[1];

            if (!isInRoom(nextRow, nextColumn) || room[nextRow][nextColumn] == OBSTACLE) {
                int newDirection = rotate90DegreesClockwise(current.direction);
                if (isVisitedWithGivenDirection(current.row, current.column, newDirection)) {
                    break;
                }

                markAsVisitedWithGivenDirection(current.row, current.column, newDirection);
                queue.add(new Point(current.row, current.column, newDirection));
                continue;
            }

            if (!isVisitedWithGivenDirection(nextRow, nextColumn, current.direction)) {
                maxCleanedPoints += (visited[nextRow][nextColumn] == 0) ? 1 : 0;
                markAsVisitedWithGivenDirection(nextRow, nextColumn, current.direction);
                queue.add(new Point(nextRow, nextColumn, current.direction));
            }
        }
        return maxCleanedPoints;
    }

    private boolean isVisitedWithGivenDirection(int row, int column, int direction) {
        return (visited[row][column] & (1 << direction)) != 0;
    }

    private void markAsVisitedWithGivenDirection(int row, int column, int direction) {
        visited[row][column] |= (1 << direction);
    }

    private int rotate90DegreesClockwise(int currentDirection) {
        return (currentDirection + 1) % directions.length;
    }

    private boolean isInRoom(int row, int column) {
        return row >= 0 && row < rows && column >= 0 && column < columns;
    }
}
```
```JavaScript []
/**
 * @param {number[][]} room
 * @return {number}
 */
var numberOfCleanRooms = function (room) {
    this.EMPTY_SPACE = 0;
    this.OBSTACLE = 1;
    this.directions = [0, 1, 2, 3];
    this.currentDirectionToNextCoordinates = new Map
            ([
                [0, [0, 1]], [1, [1, 0]], [2, [0, -1]], [3, [-1, 0]]
            ]);

    this.rows = room.length;
    this.columns = room[0].length;
    this.visited = Array.from(new Array(this.rows), () => new Array(this.columns).fill(0));
    return breadthFirstSearchToFindMaxCleanedPoints(room);
};

/**
 * @param {number} row
 * @param {number} column
 * @param {number} direction
 */
function Point(row, column, direction) {
    this.row = row;
    this.column = column;
    this.direction = direction;
}

/**
 * @param {number[][]} room
 * @return {number}
 */
function breadthFirstSearchToFindMaxCleanedPoints(room) {
    //  Queue<Point>
    // const {Queue} = require('@datastructures-js/queue');
    const queue = new Queue();
    queue.enqueue(new Point(0, 0, 0));

    markAsVisitedWithGivenDirection(0, 0, 0);

    let maxCleanedPoints = 1;

    while (!queue.isEmpty()) {

        const current = queue.dequeue();
        const nextRow = current.row + this.currentDirectionToNextCoordinates.get(current.direction)[0];
        const nextColumn = current.column + this.currentDirectionToNextCoordinates.get(current.direction)[1];

        if (!isInRoom(nextRow, nextColumn) || room[nextRow][nextColumn] === this.OBSTACLE) {
            const newDirection = rotate90DegreesClockwise(current.direction);
            if (isVisitedWithGivenDirection(current.row, current.column, newDirection)) {
                break;
            }

            markAsVisitedWithGivenDirection(current.row, current.column, newDirection);
            queue.enqueue(new Point(current.row, current.column, newDirection));
            continue;
        }

        if (!isVisitedWithGivenDirection(nextRow, nextColumn, current.direction)) {
            maxCleanedPoints += (this.visited[nextRow][nextColumn] === 0) ? 1 : 0;
            markAsVisitedWithGivenDirection(nextRow, nextColumn, current.direction);
            queue.enqueue(new Point(nextRow, nextColumn, current.direction));
        }
    }
    return maxCleanedPoints;
}

/**
 * @param {number} row
 * @param {number} column
 * @param {number} direction
 * @return {boolean}
 */
function isVisitedWithGivenDirection(row, column, direction) {
    return (this.visited[row][column] & (1 << direction)) !== 0;
}

/**
 * @param {number} row
 * @param {number} column
 * @param {number} direction
 * @return {void}
 */
function markAsVisitedWithGivenDirection(row, column, direction) {
    this.visited[row][column] |= (1 << direction);
}

/**
 * @param {number} currentDirection
 * @return {number}
 */
function rotate90DegreesClockwise(currentDirection) {
    return (currentDirection + 1) % this.directions.length;
}

/**
 * @param {number} row
 * @param {number} column
 * @return {boolean}
 */
function isInRoom(row, column) {
    return row >= 0 && row < this.rows && column >= 0 && column < this.columns;
}
```
```TypeScript []
function numberOfCleanRooms(room: number[][]): number {
    this.EMPTY_SPACE = 0;
    this.OBSTACLE = 1;
    this.directions = [0, 1, 2, 3];
    this.currentDirectionToNextCoordinates = new Map
        ([
            [0, [0, 1]], [1, [1, 0]], [2, [0, -1]], [3, [-1, 0]]
        ]);

    this.rows = room.length;
    this.columns = room[0].length;
    this.visited = Array.from(new Array(this.rows), () => new Array(this.columns).fill(0));
    return breadthFirstSearchToFindMaxCleanedPoints(room);
};

function Point(row: number, column: number, direction: number) {
    this.row = row;
    this.column = column;
    this.direction = direction;
}

function breadthFirstSearchToFindMaxCleanedPoints(room: number[][]): number {

    const { Queue } = require('@datastructures-js/queue');
    const queue = new Queue();
    queue.enqueue(new Point(0, 0, 0));

    markAsVisitedWithGivenDirection(0, 0, 0);

    let maxCleanedPoints = 1;

    while (!queue.isEmpty()) {

        const current = queue.dequeue();
        const nextRow = current.row + this.currentDirectionToNextCoordinates.get(current.direction)[0];
        const nextColumn = current.column + this.currentDirectionToNextCoordinates.get(current.direction)[1];

        if (!isInRoom(nextRow, nextColumn) || room[nextRow][nextColumn] === this.OBSTACLE) {
            const newDirection = rotate90DegreesClockwise(current.direction);
            if (isVisitedWithGivenDirection(current.row, current.column, newDirection)) {
                break;
            }

            markAsVisitedWithGivenDirection(current.row, current.column, newDirection);
            queue.enqueue(new Point(current.row, current.column, newDirection));
            continue;
        }

        if (!isVisitedWithGivenDirection(nextRow, nextColumn, current.direction)) {
            maxCleanedPoints += (this.visited[nextRow][nextColumn] === 0) ? 1 : 0;
            markAsVisitedWithGivenDirection(nextRow, nextColumn, current.direction);
            queue.enqueue(new Point(nextRow, nextColumn, current.direction));
        }
    }
    return maxCleanedPoints;
}

function isVisitedWithGivenDirection(row: number, column: number, direction: number): boolean {
    return (this.visited[row][column] & (1 << direction)) !== 0;
}

function markAsVisitedWithGivenDirection(row: number, column: number, direction: number): void {
    this.visited[row][column] |= (1 << direction);
}

function rotate90DegreesClockwise(currentDirection: number): number {
    return (currentDirection + 1) % this.directions.length;
}

function isInRoom(row: number, column: number): boolean {
    return row >= 0 && row < this.rows && column >= 0 && column < this.columns;
}
```
```C++ []
#include <span>
#include <array>
#include <queue>
#include <vector>
using namespace std;

class Solution {

    struct Point {
        size_t row;
        size_t column;
        int direction;

        Point(size_t row, size_t column, int direction) :
            row{ row }, column{ column }, direction{ direction } {}
    };

    static const int EMPTY_SPACE = 0;
    static const int OBSTACLE = 1;
    static constexpr array<int, 4> directions = { 0, 1, 2, 3 };
    inline static const unordered_map<int, array<int, 2>> currentDirectionToNextCoordinates
    { {0, {0, 1}}, {1,{1, 0}}, {2,{0, -1}}, {3, {-1, 0}} };

    size_t rows{};
    size_t columns{};
    vector<vector<int>> visited;

public:
    int numberOfCleanRooms(const vector<vector<int>>& room) {
        rows = room.size();
        columns = room[0].size();
        return breadthFirstSearchToFindMaxCleanedPoints(room);
    }

private:
    int breadthFirstSearchToFindMaxCleanedPoints(span<const vector<int>> room) {
        queue<Point> queue;
        queue.emplace(0, 0, 0);

        visited.resize(rows, vector<int>(columns));
        markAsVisitedWithGivenDirection(0, 0, 0);

        int maxCleanedPoints = 1;

        while (!queue.empty()) {

            Point current = queue.front();
            queue.pop();

            size_t nextRow = current.row + currentDirectionToNextCoordinates.at(current.direction)[0];
            size_t nextColumn = current.column + currentDirectionToNextCoordinates.at(current.direction)[1];

            if (!isInRoom(nextRow, nextColumn) || room[nextRow][nextColumn] == OBSTACLE) {
                int newDirection = rotate90DegreesClockwise(current.direction);
                if (isVisitedWithGivenDirection(current.row, current.column, newDirection)) {
                    break;
                }

                markAsVisitedWithGivenDirection(current.row, current.column, newDirection);
                queue.emplace(current.row, current.column, newDirection);
                continue;
            }

            if (!isVisitedWithGivenDirection(nextRow, nextColumn, current.direction)) {
                maxCleanedPoints += (visited[nextRow][nextColumn] == 0) ? 1 : 0;
                markAsVisitedWithGivenDirection(nextRow, nextColumn, current.direction);
                queue.emplace(nextRow, nextColumn, current.direction);
            }
        }
        return maxCleanedPoints;
    }

    bool isVisitedWithGivenDirection(size_t row, size_t column, int direction) const {
        return (visited[row][column] & (1 << direction)) != 0;
    }

    void markAsVisitedWithGivenDirection(size_t row, size_t column, int direction) {
        visited[row][column] |= (1 << direction);
    }

    int rotate90DegreesClockwise(int currentDirection) const {
        return (currentDirection + 1) % directions.size();
    }

    bool isInRoom(size_t row, size_t column) const {
        return  row < rows && column < columns;
    }
};
```
```C# []
using System;
using System.Collections.Generic;

public class Solution
{
    private record Point(int row, int column, int direction) { }

    private static readonly int EMPTY_SPACE = 0;
    private static readonly int OBSTACLE = 1;
    private static readonly int[] directions = { 0, 1, 2, 3 };
    private static readonly Dictionary<int, int[]> currentDirectionToNextCoordinates
        = new Dictionary<int, int[]>(){
            {0, new int[] { 0, 1 }}, {1,new int[] { 1, 0 }},
            {2, new int[] { 0, -1 }}, {3, new int[] { -1, 0 }}
        };

    private int rows;
    private int columns;
    private int[][]? visited;

    public int NumberOfCleanRooms(int[][] room)
    {
        rows = room.Length;
        columns = room[0].Length;
        return breadthFirstSearchToFindMaxCleanedPoints(room);
    }

    private int breadthFirstSearchToFindMaxCleanedPoints(int[][] room)
    {
        Queue<Point> queue = new Queue<Point>();
        queue.Enqueue(new Point(0, 0, 0));

        visited = new int[rows][];
        for (int r = 0; r < rows; ++r)
        {
            visited[r] = new int[columns];
        }
        MarkAsVisitedWithGivenDirection(0, 0, 0);

        int maxCleanedPoints = 1;

        while (queue.Count > 0)
        {
            Point current = queue.Dequeue();
            int nextRow = current.row + currentDirectionToNextCoordinates[current.direction][0];
            int nextColumn = current.column + currentDirectionToNextCoordinates[current.direction][1];

            if (!IsInRoom(nextRow, nextColumn) || room[nextRow][nextColumn] == OBSTACLE)
            {
                int newDirection = Rotate90DegreesClockwise(current.direction);
                if (IsVisitedWithGivenDirection(current.row, current.column, newDirection))
                {
                    break;
                }

                MarkAsVisitedWithGivenDirection(current.row, current.column, newDirection);
                queue.Enqueue(new Point(current.row, current.column, newDirection));
                continue;
            }

            if (!IsVisitedWithGivenDirection(nextRow, nextColumn, current.direction))
            {
                maxCleanedPoints += (visited[nextRow][nextColumn] == 0) ? 1 : 0;
                MarkAsVisitedWithGivenDirection(nextRow, nextColumn, current.direction);
                queue.Enqueue(new Point(nextRow, nextColumn, current.direction));
            }
        }
        return maxCleanedPoints;
    }

    private bool IsVisitedWithGivenDirection(int row, int column, int direction)
    {
        return (visited[row][column] & (1 << direction)) != 0;
    }

    private void MarkAsVisitedWithGivenDirection(int row, int column, int direction)
    {
        visited[row][column] |= (1 << direction);
    }

    private int Rotate90DegreesClockwise(int currentDirection)
    {
        return (currentDirection + 1) % directions.Length;
    }

    private bool IsInRoom(int row, int column)
    {
        return row >= 0 && row < rows && column >= 0 && column < columns;
    }
}
```
```Kotlin []
import java.util.*

class Solution {

    private data class Point(val row: Int, val column: Int, val direction: Int) {}

    private companion object {
        const val EMPTY_SPACE = 0
        const val OBSTACLE = 1
        val directions = intArrayOf(0, 1, 2, 3)
        val currentDirectionToNextCoordinates =
            mapOf(0 to intArrayOf(0, 1), 1 to intArrayOf(1, 0), 2 to intArrayOf(0, -1), 3 to intArrayOf(-1, 0))
    }

    private var rows = 0
    private var columns = 0
    private lateinit var visited: Array<IntArray>

    fun numberOfCleanRooms(room: Array<IntArray>): Int {
        rows = room.size
        columns = room[0].size
        return breadthFirstSearchToFindMaxCleanedPoints(room)
    }

    private fun breadthFirstSearchToFindMaxCleanedPoints(room: Array<IntArray>): Int {
        val queue: Queue<Point> = LinkedList<Point>()
        queue.add(Point(0, 0, 0))

        visited = Array(rows) { IntArray(columns) }
        markAsVisitedWithGivenDirection(0, 0, 0)

        var maxCleanedPoints = 1

        while (!queue.isEmpty()) {

            val current = queue.poll()
            val nextRow = current.row + currentDirectionToNextCoordinates.get(current.direction)!![0]
            val nextColumn = current.column + currentDirectionToNextCoordinates.get(current.direction)!![1]

            if (!isInRoom(nextRow, nextColumn) || room[nextRow][nextColumn] == OBSTACLE) {
                val newDirection = rotate90DegreesClockwise(current.direction)
                if (isVisitedWithGivenDirection(current.row, current.column, newDirection)) {
                    break
                }

                markAsVisitedWithGivenDirection(current.row, current.column, newDirection)
                queue.add(Point(current.row, current.column, newDirection))
                continue
            }

            if (!isVisitedWithGivenDirection(nextRow, nextColumn, current.direction)) {
                maxCleanedPoints += if (visited[nextRow][nextColumn] == 0) 1 else 0
                markAsVisitedWithGivenDirection(nextRow, nextColumn, current.direction)
                queue.add(Point(nextRow, nextColumn, current.direction))
            }
        }
        return maxCleanedPoints
    }

    private fun isVisitedWithGivenDirection(row: Int, column: Int, direction: Int): Boolean {
        return (visited[row][column] and (1 shl direction)) != 0
    }

    private fun markAsVisitedWithGivenDirection(row: Int, column: Int, direction: Int) {
        visited[row][column] = (visited[row][column] or (1 shl direction))
    }

    private fun rotate90DegreesClockwise(currentDirection: Int): Int {
        return (currentDirection + 1) % directions.size
    }

    private fun isInRoom(row: Int, column: Int): Boolean {
        return row in 0..<rows && column in 0..<columns
    }
}
```
```Go []

package main

import (
    "container/list"
    "fmt"
)

type Point struct {
    Row       int
    Column    int
    Direction int
}

func NewPoint(row, column, direction int) *Point {
    point := Point{}
    point.Row = row
    point.Column = column
    point.Direction = direction
    return &point
}

const EMPTY_SPACE = 0
const OBSTACLE = 1

var directions = [4]int{0, 1, 2, 3}
var currentDirectionToNextCoordinates = map[int][2]int{0: {0, 1}, 1: {1, 0}, 2: {0, -1}, 3: {-1, 0}}
var visited [][]int

var rows = 0
var columns = 0

func numberOfCleanRooms(room [][]int) int {
    rows = len(room)
    columns = len(room[0])
    return breadthFirstSearchToFindMaxCleanedPoints(room)
}

func breadthFirstSearchToFindMaxCleanedPoints(room [][]int) int {
    queue := list.New()
    queue.PushBack(NewPoint(0, 0, 0))

    visited = make([][]int, rows)
    for i := range visited {
        visited[i] = make([]int, columns)
    }

    markAsVisitedWithGivenDirection(0, 0, 0)

    var maxCleanedPoints = 1

    for queue.Len() > 0 {

        var current = queue.Front().Value.(*Point)
        queue.Remove(queue.Front())

        var nextRow = current.Row + currentDirectionToNextCoordinates[current.Direction][0]
        var nextColumn = current.Column + currentDirectionToNextCoordinates[current.Direction][1]

        if !isInRoom(nextRow, nextColumn) || room[nextRow][nextColumn] == OBSTACLE {
            var newDirection = rotate90DegreesClockwise(current.Direction)
            if isVisitedWithGivenDirection(current.Row, current.Column, newDirection) {
                break
            }

            markAsVisitedWithGivenDirection(current.Row, current.Column, newDirection)
            queue.PushBack(NewPoint(current.Row, current.Column, newDirection))
            continue
        }

        if !isVisitedWithGivenDirection(nextRow, nextColumn, current.Direction) {
            if visited[nextRow][nextColumn] == 0 {
                maxCleanedPoints++
            }
            markAsVisitedWithGivenDirection(nextRow, nextColumn, current.Direction)
            queue.PushBack(NewPoint(nextRow, nextColumn, current.Direction))
        }
}
    return maxCleanedPoints
}

func isVisitedWithGivenDirection(row, column, direction int) bool {
    return (visited[row][column] & (1 << direction)) != 0
}

func markAsVisitedWithGivenDirection(row, column, direction int) {
    visited[row][column] = (visited[row][column] | (1 << direction))
}

func rotate90DegreesClockwise(currentDirection int) int {
    return (currentDirection + 1) % len(directions)
}

func isInRoom(row, column int) bool {
    return row >= 0 && row < rows && column >= 0 && column < columns
}
```