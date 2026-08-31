# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-minimum-time-to-reach-last-room-ii/solutions/6080835/](https://leetcode.com/problems/find-minimum-time-to-reach-last-room-ii/solutions/6080835/)

---

```Java []
import java.util.Arrays;
import java.util.PriorityQueue;

public class Solution {

    private record Step(int row, int column, int timeToMoveBetweenTwoPoints, int timeFromStart) {}

    private static final int[] UP = {-1, 0};
    private static final int[] DOWN = {1, 0};
    private static final int[] LEFT = {0, -1};
    private static final int[] RIGHT = {0, 1};
    private static final int[][] MOVES = {UP, DOWN, LEFT, RIGHT};

    private int rows;
    private int columns;

    private int startRow;
    private int startColumn;

    private int targetRow;
    private int targetColumn;

    public int minTimeToReach(int[][] moveTime) {
        rows = moveTime.length;
        columns = moveTime[0].length;

        startRow = 0;
        startColumn = 0;

        targetRow = rows - 1;
        targetColumn = columns - 1;

        return dijkstraSearchForPathWithMinTime(moveTime);
    }

    private int dijkstraSearchForPathWithMinTime(int[][] moveTime) {
        PriorityQueue<Step> minHeapForTime = new PriorityQueue<>((x, y) -> x.timeFromStart - y.timeFromStart);
        minHeapForTime.add(new Step(startRow, startColumn, 0, 0));

        int[][] minTimeMatrix = new int[rows][columns];
        for (int row = 0; row < rows; ++row) {
            Arrays.fill(minTimeMatrix[row], Integer.MAX_VALUE);
        }
        minTimeMatrix[startRow][startColumn] = 0;

        while (!minHeapForTime.isEmpty()) {
            Step current = minHeapForTime.poll();
            if (current.row == targetRow && current.column == targetColumn) {
                break;
            }

            for (int[] move : MOVES) {
                int nextRow = current.row + move[0];
                int nextColumn = current.column + move[1];
                if (!isInMatrix(nextRow, nextColumn)) {
                    continue;
                }

                int timeToMoveToNextPoint = getNewTimeToMoveBetweenTwoPoints(current.timeToMoveBetweenTwoPoints);
                int nextValueForTime = Math.max(timeToMoveToNextPoint + current.timeFromStart,
                                                timeToMoveToNextPoint + moveTime[nextRow][nextColumn]);

                if (minTimeMatrix[nextRow][nextColumn] > nextValueForTime) {
                    minTimeMatrix[nextRow][nextColumn] = nextValueForTime;
                    minHeapForTime.add(new Step(nextRow, nextColumn, timeToMoveToNextPoint, nextValueForTime));
                }
            }
        }

        return minTimeMatrix[targetRow][targetColumn];
    }

    private boolean isInMatrix(int row, int column) {
        return row >= 0 && row < rows && column >= 0 && column < columns;
    }

    private int getNewTimeToMoveBetweenTwoPoints(int prviousTimeToMoveBetweenTwoPoints) {
        return 1 + (prviousTimeToMoveBetweenTwoPoints % 2);
    }
}
```
```JavaScript []
/**
 * @param {number[][]} moveTime
 * @return {number}
 */
var minTimeToReach = function (moveTime) {
    const UP = [-1, 0];
    const DOWN = [1, 0];
    const LEFT = [0, -1];
    const RIGHT = [0, 1];

    this.MOVES = [UP, DOWN, LEFT, RIGHT];

    this.rows = moveTime.length;
    this.columns = moveTime[0].length;

    this.startRow = 0;
    this.startColumn = 0;

    this.targetRow = this.rows - 1;
    this.targetColumn = this.columns - 1;

    return dijkstraSearchForPathWithMinTime(moveTime);
};

/**
 * @param {number} row
 * @param {number} column
 * @param {number} timeToMoveBetweenTwoPoints 
 * @param {number} timeFromStart
 */
function Step(row, column, timeToMoveBetweenTwoPoints, timeFromStart) {
    this.row = row;
    this.column = column;
    this.timeToMoveBetweenTwoPoints = timeToMoveBetweenTwoPoints;
    this.timeFromStart = timeFromStart;
}

/**
 * @param {number[][]} moveTime
 * @return {number}
 */
function dijkstraSearchForPathWithMinTime(moveTime) {
    const minHeapForTime = new MinPriorityQueue({compare: (x, y) => x.timeFromStart - y.timeFromStart});
    minHeapForTime.enqueue(new Step(this.startRow, this.startColumn, 0, 0));

    const minTimeMatrix = Array.from(new Array(this.rows), () => new Array(this.columns).fill(Number.MAX_SAFE_INTEGER));
    minTimeMatrix[this.startRow][this.startColumn] = 0;

    while (!minHeapForTime.isEmpty()) {
        const current = minHeapForTime.dequeue();
        if (current.row === this.targetRow && current.column === this.targetColumn) {
            break;
        }

        for (let move of this.MOVES) {
            const nextRow = current.row + move[0];
            const nextColumn = current.column + move[1];
            if (!isInMatrix(nextRow, nextColumn)) {
                continue;
            }

            const timeToMoveToNextPoint = getNewTimeToMoveBetweenTwoPoints(current.timeToMoveBetweenTwoPoints);
            const nextValueForTime = Math.max(timeToMoveToNextPoint + current.timeFromStart,
                                              timeToMoveToNextPoint + moveTime[nextRow][nextColumn]);

            if (minTimeMatrix[nextRow][nextColumn] > nextValueForTime) {
                minTimeMatrix[nextRow][nextColumn] = nextValueForTime;
                minHeapForTime.enqueue(new Step(nextRow, nextColumn, timeToMoveToNextPoint, nextValueForTime));
            }
        }
    }

    return minTimeMatrix[this.targetRow][this.targetColumn];
}

/**
 * @param {number} row
 * @param {number} column
 * @return {boolean}
 */
function isInMatrix(row, column) {
    return row >= 0 && row < this.rows && column >= 0 && column < this.columns;
}

/**
 * @param {number} prviousTimeToMoveBetweenTwoPoints
 * @return {number}
 */
function getNewTimeToMoveBetweenTwoPoints(prviousTimeToMoveBetweenTwoPoints) {
    return 1 + (prviousTimeToMoveBetweenTwoPoints % 2);
}
```
```TypeScript []
function minTimeToReach(moveTime: number[][]): number {
    const UP = [-1, 0];
    const DOWN = [1, 0];
    const LEFT = [0, -1];
    const RIGHT = [0, 1];

    this.MOVES = [UP, DOWN, LEFT, RIGHT];

    this.rows = moveTime.length;
    this.columns = moveTime[0].length;

    this.startRow = 0;
    this.startColumn = 0;

    this.targetRow = this.rows - 1;
    this.targetColumn = this.columns - 1;

    return dijkstraSearchForPathWithMinTime(moveTime);
};

class Step {

    row: number;
    column: number;
    timeToMoveBetweenTwoPoints: number;
    timeFromStart: number;

    constructor(row, column, timeToMoveBetweenTwoPoints, timeFromStart) {
        this.row = row;
        this.column = column;
        this.timeToMoveBetweenTwoPoints = timeToMoveBetweenTwoPoints;
        this.timeFromStart = timeFromStart;
    }
}

function dijkstraSearchForPathWithMinTime(moveTime: number[][]): number {
    const minHeapForTime = new MinPriorityQueue({ compare: (x, y) => x.timeFromStart - y.timeFromStart });
    minHeapForTime.enqueue(new Step(this.startRow, this.startColumn, 0, 0));

    const minTimeMatrix: number[][] = Array.from(new Array(this.rows), () => new Array(this.columns).fill(Number.MAX_SAFE_INTEGER));
    minTimeMatrix[this.startRow][this.startColumn] = 0;

    while (!minHeapForTime.isEmpty()) {
        const current = minHeapForTime.dequeue();
        if (current.row === this.targetRow && current.column === this.targetColumn) {
            break;
        }

        for (let move of this.MOVES) {
            const nextRow = current.row + move[0];
            const nextColumn = current.column + move[1];
            if (!isInMatrix(nextRow, nextColumn)) {
                continue;
            }

            const timeToMoveToNextPoint = getNewTimeToMoveBetweenTwoPoints(current.timeToMoveBetweenTwoPoints);
            const nextValueForTime = Math.max(timeToMoveToNextPoint + current.timeFromStart,
                                              timeToMoveToNextPoint + moveTime[nextRow][nextColumn]);

            if (minTimeMatrix[nextRow][nextColumn] > nextValueForTime) {
                minTimeMatrix[nextRow][nextColumn] = nextValueForTime;
                minHeapForTime.enqueue(new Step(nextRow, nextColumn, timeToMoveToNextPoint, nextValueForTime));
            }
        }
    }

    return minTimeMatrix[this.targetRow][this.targetColumn];
}

function isInMatrix(row: number, column: number): boolean {
    return row >= 0 && row < this.rows && column >= 0 && column < this.columns;
}

function getNewTimeToMoveBetweenTwoPoints(prviousTimeToMoveBetweenTwoPoints: number): number {
    return 1 + (prviousTimeToMoveBetweenTwoPoints % 2);
}
```
```C++ []
#include <span>
#include <limits>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {

    struct Step {
            size_t row{};
            size_t column{};
            int timeToMoveBetweenTwoPoints{};
            int timeFromStart{};

            Step(size_t row, size_t column, int timeToMoveBetweenTwoPoints, int timeFromStart) :
                    row{ row }, column{ column }, timeToMoveBetweenTwoPoints{ timeToMoveBetweenTwoPoints }, timeFromStart{ timeFromStart } {
            };
    };

    struct ComparatorStep {
            bool operator()(const Step& first, const Step& second) const {
                    return first.timeFromStart > second.timeFromStart;
            }
    };

    static constexpr array<int, 2> UP = { -1, 0 };
    static constexpr array<int, 2> DOWN = { 1, 0 };
    static constexpr array<int, 2> LEFT = { 0, -1 };
    static constexpr array<int, 2> RIGHT = { 0, 1 };
    static constexpr array< array<int, 2>, 4> MOVES = { UP, DOWN, LEFT, RIGHT };

    size_t rows{};
    size_t columns{};

    size_t startRow{};
    size_t startColumn{};

    size_t targetRow{};
    size_t targetColumn{};

public:
    int minTimeToReach(const vector<vector<int>>& moveTime) {
            rows = moveTime.size();
            columns = moveTime[0].size();

            startRow = 0;
            startColumn = 0;

            targetRow = rows - 1;
            targetColumn = columns - 1;

            return dijkstraSearchForPathWithMinTime(moveTime);
    }

private:
    int dijkstraSearchForPathWithMinTime(span<const vector<int>> moveTime) const {
        priority_queue<Step, vector<Step>, ComparatorStep> minHeapForTime;
        minHeapForTime.emplace(startRow, startColumn, 0, 0);

        vector<vector<int>> minTimeMatrix(rows, vector<int>(columns, numeric_limits<int>::max()));
        minTimeMatrix[startRow][startColumn] = 0;

        while (!minHeapForTime.empty()) {
            Step current = minHeapForTime.top();
            minHeapForTime.pop();
            if (current.row == targetRow && current.column == targetColumn) {
                    break;
            }

            for (const auto& move : MOVES) {
                size_t nextRow = current.row + move[0];
                size_t nextColumn = current.column + move[1];
                if (!isInMatrix(nextRow, nextColumn)) {
                    continue;
                }

                int timeToMoveToNextPoint = getNewTimeToMoveBetweenTwoPoints(current.timeToMoveBetweenTwoPoints);
                int nextValueForTime = max(timeToMoveToNextPoint + current.timeFromStart,
                                           timeToMoveToNextPoint + moveTime[nextRow][nextColumn]);

                if (minTimeMatrix[nextRow][nextColumn] > nextValueForTime) {
                    minTimeMatrix[nextRow][nextColumn] = nextValueForTime;
                    minHeapForTime.emplace(nextRow, nextColumn, timeToMoveToNextPoint, nextValueForTime);
                }
            }
        }

        return minTimeMatrix[targetRow][targetColumn];
    }

    bool isInMatrix(size_t row, size_t column) const {
        return  row < rows && column < columns;
    }

    int getNewTimeToMoveBetweenTwoPoints(int prviousTimeToMoveBetweenTwoPoints) const {
        return 1 + (prviousTimeToMoveBetweenTwoPoints % 2);
    }
};
```
```C# []
using System;
using System.Collections.Generic;

public class Solution
{
    private record Step(int row, int column, int timeToMoveBetweenTwoPoints, int timeFromStart) { }

    private static readonly int[] UP = { -1, 0 };
    private static readonly int[] DOWN = { 1, 0 };
    private static readonly int[] LEFT = { 0, -1 };
    private static readonly int[] RIGHT = { 0, 1 };
    private static readonly int[][] MOVES = { UP, DOWN, LEFT, RIGHT };

    private int rows;
    private int columns;

    private int startRow;
    private int startColumn;

    private int targetRow;
    private int targetColumn;

    public int MinTimeToReach(int[][] moveTime)
    {
        rows = moveTime.Length;
        columns = moveTime[0].Length;

        startRow = 0;
        startColumn = 0;

        targetRow = rows - 1;
        targetColumn = columns - 1;

        return DijkstraSearchForPathWithMinTime(moveTime);
    }

    private int DijkstraSearchForPathWithMinTime(int[][] moveTime)
    {
        PriorityQueue<Step, int> minHeapForTime = new PriorityQueue<Step, int>(
            Comparer<int>.Create((x, y) => x - y));

        minHeapForTime.Enqueue(new Step(startRow, startColumn, 0, 0), 0);

        int[][] minTimeMatrix = new int[rows][];
        for (int row = 0; row < rows; ++row)
        {
            minTimeMatrix[row] = new int[columns];
            Array.Fill(minTimeMatrix[row], int.MaxValue);
        }
        minTimeMatrix[startRow][startColumn] = 0;

        while (minHeapForTime.Count > 0)
        {
            Step current = minHeapForTime.Dequeue();
            if (current.row == targetRow && current.column == targetColumn)
            {
                break;
            }

            foreach (int[] move in MOVES)
            {
                int nextRow = current.row + move[0];
                int nextColumn = current.column + move[1];
                if (!IsInMatrix(nextRow, nextColumn))
                {
                    continue;
                }

                int timeToMoveToNextPoint = GetNewTimeToMoveBetweenTwoPoints(current.timeToMoveBetweenTwoPoints);
                int nextValueForTime = Math.Max(timeToMoveToNextPoint + current.timeFromStart,
                                                timeToMoveToNextPoint + moveTime[nextRow][nextColumn]);

                if (minTimeMatrix[nextRow][nextColumn] > nextValueForTime)
                {
                    minTimeMatrix[nextRow][nextColumn] = nextValueForTime;
                    minHeapForTime.Enqueue(new Step(nextRow, nextColumn, timeToMoveToNextPoint, nextValueForTime), nextValueForTime);
                }
            }
        }

        return minTimeMatrix[targetRow][targetColumn];
    }

    private bool IsInMatrix(int row, int column)
    {
        return row >= 0 && row < rows && column >= 0 && column < columns;
    }

    private int GetNewTimeToMoveBetweenTwoPoints(int prviousTimeToMoveBetweenTwoPoints)
    {
        return 1 + (prviousTimeToMoveBetweenTwoPoints % 2);
    }
}
```
```Kotlin []
import java.util.PriorityQueue
import kotlin.math.max

class Solution {

    private data class Step(
        val row: Int,
        val column: Int,
        val timeToMoveBetweenTwoPoints: Int,
        val timeFromStart: Int
    ) {}

    private companion object {
        val UP = intArrayOf(-1, 0)
        val DOWN = intArrayOf(1, 0)
        val LEFT = intArrayOf(0, -1)
        val RIGHT = intArrayOf(0, 1)
        val MOVES = arrayOf(UP, DOWN, LEFT, RIGHT)
    }

    private var rows = 0
    private var columns = 0

    private var startRow = 0
    private var startColumn = 0

    private var targetRow = 0
    private var targetColumn = 0

    fun minTimeToReach(moveTime: Array<IntArray>): Int {
        rows = moveTime.size
        columns = moveTime[0].size

        startRow = 0
        startColumn = 0

        targetRow = rows - 1
        targetColumn = columns - 1

        return dijkstraSearchForPathWithMinTime(moveTime)
    }

    private fun dijkstraSearchForPathWithMinTime(moveTime: Array<IntArray>): Int {
        val minHeapForTime = PriorityQueue<Step>() { x, y -> x.timeFromStart - y.timeFromStart }
        minHeapForTime.add(Step(startRow, startColumn, 0, 0))

        val minTimeMatrix = Array<IntArray>(rows) { IntArray(columns) }
        for (row in 0..<rows) {
            minTimeMatrix[row].fill(Int.MAX_VALUE, 0, columns)
        }
        minTimeMatrix[startRow][startColumn] = 0

        while (!minHeapForTime.isEmpty()) {
            val current = minHeapForTime.poll()
            if (current.row == targetRow && current.column == targetColumn) {
                break
            }

            for (move in MOVES) {
                val nextRow = current.row + move[0]
                val nextColumn = current.column + move[1]
                if (!isInMatrix(nextRow, nextColumn)) {
                    continue
                }

                val timeToMoveToNextPoint = getNewTimeToMoveBetweenTwoPoints(current.timeToMoveBetweenTwoPoints)
                val nextValueForTime = max(timeToMoveToNextPoint + current.timeFromStart,
                                           timeToMoveToNextPoint + moveTime[nextRow][nextColumn])

                if (minTimeMatrix[nextRow][nextColumn] > nextValueForTime) {
                    minTimeMatrix[nextRow][nextColumn] = nextValueForTime
                    minHeapForTime.add(Step(nextRow, nextColumn, timeToMoveToNextPoint, nextValueForTime))
                }
            }
        }

        return minTimeMatrix[targetRow][targetColumn]
    }

    private fun isInMatrix(row: Int, column: Int): Boolean {
        return row in 0..<rows && column in 0..<columns
    }

    private fun getNewTimeToMoveBetweenTwoPoints(prviousTimeToMoveBetweenTwoPoints: Int): Int {
        return 1 + (prviousTimeToMoveBetweenTwoPoints % 2)
    }
}
```
```Go []
package main

import (
    "container/heap"
    "fmt"
    "math"
)

var UP = [2]int{-1, 0}
var DOWN = [2]int{1, 0}
var LEFT = [2]int{0, -1}
var RIGHT = [2]int{0, 1}
var MOVES = [4][2]int{UP, DOWN, LEFT, RIGHT}

var rows int
var columns int

var startRow int
var startColumn int

var targetRow int
var targetColumn int

func minTimeToReach(moveTime [][]int) int {
    rows = len(moveTime)
    columns = len(moveTime[0])

    startRow = 0
    startColumn = 0

    targetRow = rows - 1
    targetColumn = columns - 1

    return dijkstraSearchForPathWithMinTime(moveTime)
}

func dijkstraSearchForPathWithMinTime(moveTime [][]int) int {
    minHeapForTime := make(PriorityQueue, 0)
    step := NewStep(startRow, startColumn, 0, 0)
    heap.Push(&minHeapForTime, step)

    minTimeMatrix := make([][]int, rows)
    for row := 0; row < rows; row++ {
        minTimeMatrix[row] = make([]int, columns)
        for column := 0; column < columns; column++ {
            minTimeMatrix[row][column] = math.MaxInt
        }
    }
    minTimeMatrix[startRow][startColumn] = 0

    for len(minHeapForTime) > 0 {
        current := heap.Pop(&minHeapForTime).(*Step)
        if current.row == targetRow && current.column == targetColumn {
            break
        }

        for _, move := range MOVES {
            nextRow := current.row + move[0]
            nextColumn := current.column + move[1]
            if !isInMatrix(nextRow, nextColumn) {
                continue
            }

            timeToMoveToNextPoint := getNewTimeToMoveBetweenTwoPoints(current.timeToMoveBetweenTwoPoints)
            nextValueForTime := max(timeToMoveToNextPoint+current.timeFromStart,
                                    timeToMoveToNextPoint+moveTime[nextRow][nextColumn])

            if minTimeMatrix[nextRow][nextColumn] > nextValueForTime {
                minTimeMatrix[nextRow][nextColumn] = nextValueForTime
                step := NewStep(nextRow, nextColumn, timeToMoveToNextPoint, nextValueForTime)
                heap.Push(&minHeapForTime, step)
            }
        }
    }

    return minTimeMatrix[targetRow][targetColumn]
}

func isInMatrix(row int, column int) bool {
    return row >= 0 && row < rows && column >= 0 && column < columns
}

func getNewTimeToMoveBetweenTwoPoints(prviousTimeToMoveBetweenTwoPoints int) int {
    return 1 + (prviousTimeToMoveBetweenTwoPoints % 2)
}

type Step struct {
    row                        int
    column                     int
    timeToMoveBetweenTwoPoints int
    timeFromStart              int
}

func NewStep(row int, column int, timeToMoveBetweenTwoPoints int, timeFromStart int) *Step {
    step := &Step{
        row:                        row,
        column:                     column,
        timeToMoveBetweenTwoPoints: timeToMoveBetweenTwoPoints,
        timeFromStart:              timeFromStart,
    }
    return step
}

type PriorityQueue []*Step

func (pq PriorityQueue) Len() int {
    return len(pq)
}

func (pq PriorityQueue) Less(first int, second int) bool {
    return pq[first].timeFromStart < pq[second].timeFromStart
}

func (pq PriorityQueue) Swap(first int, second int) {
    pq[first], pq[second] = pq[second], pq[first]
}

func (pq *PriorityQueue) Push(object any) {
    step := object.(*Step)
    *pq = append(*pq, step)
}

func (pq *PriorityQueue) Pop() any {
    step := (*pq)[len(*pq)-1]
    (*pq)[len(*pq)-1] = nil
    *pq = (*pq)[0 : len(*pq)-1]
    return step
}
```