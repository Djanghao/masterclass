# Java | JavaScript | TypeScript | C++ | C# | Kotlin Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-islands-ii/solutions/5076276/](https://leetcode.com/problems/number-of-islands-ii/solutions/5076276/)

---

```Java []
import java.util.ArrayList;
import java.util.List;

public class Solution {

    private static final int[][] moves = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
    private static final int WATER = 0;
    private static final int LAND = 1;

    private int[][] matrix;
    private int rows;
    private int columns;
    private int countIslands = 0;

    public List<Integer> numIslands2(int rows, int columns, int[][] positions) {
        matrix = new int[rows][columns];
        this.rows = rows;
        this.columns = columns;

        UnionFind unionFind = new UnionFind(rows * columns);
        List<Integer> numberOfIslandsAtTimeSnapshot = new ArrayList<>();

        for (int[] position : positions) {
            int row = position[0];
            int column = position[1];

            if (matrix[row][column] == LAND) {
                numberOfIslandsAtTimeSnapshot.add(countIslands);
                continue;
            }

            ++countIslands;
            matrix[row][column] = LAND;

            for (int[] move : moves) {
                int nextRow = row + move[0];
                int nextColumn = column + move[1];

                if (isInMatrix(nextRow, nextColumn) && matrix[nextRow][nextColumn] == LAND) {
                    updateIslands(getIndex(row, column), getIndex(nextRow, nextColumn), unionFind);
                }
            }
            numberOfIslandsAtTimeSnapshot.add(countIslands);
        }
        return numberOfIslandsAtTimeSnapshot;
    }

    private void updateIslands(int currentIndex, int adjacentIndex, UnionFind unionFind) {
        int currentParent = unionFind.findParent(currentIndex);
        int adjacentParent = unionFind.findParent(adjacentIndex);

        if (adjacentParent != currentParent) {
            unionFind.joinByRank(currentParent, adjacentParent);
            --countIslands;
        }
    }

    private int getIndex(int row, int column) {
        return row * columns + column;
    }

    private boolean isInMatrix(int row, int column) {
        return row >= 0 && row < rows && column >= 0 && column < columns;
    }
}

class UnionFind {

    int[] parent;
    int[] rank;

    UnionFind(int numberOfPositions) {
        parent = new int[numberOfPositions + 1];
        rank = new int[numberOfPositions + 1];

        for (int i = 0; i < numberOfPositions + 1; ++i) {
            parent[i] = i;
            rank[i] = 1;
        }
    }

    int findParent(int index) {
        if (parent[index] != index) {
            parent[index] = findParent(parent[index]);
        }
        return parent[index];
    }

    void joinByRank(int first, int second) {
        if (rank[first] >= rank[second]) {
            parent[second] = parent[first];
            rank[first] += rank[second];
        } else {
            parent[first] = parent[second];
            rank[second] += rank[first];
        }
    }
}
```
```JavaScript []
/**
 * @param {number} rows
 * @param {number} columns
 * @param {number[][]} positions
 * @return {number[]}
 */
var numIslands2 = function (rows, columns, positions) {
    this.moves = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    this.WATER = 0;
    this.LAND = 1;

    this.matrix = Array.from(new Array(rows), () => new Array(columns).fill(this.WATER));
    this.rows = rows;
    this.columns = columns;
    this.countIslands = 0;

    const unionFind = new UnionFind(rows * columns);
    const numberOfIslandsAtTimeSnapshot = new Array();

    for (let [row, column] of positions) {
        if (this.matrix[row][column] === this.LAND) {
            numberOfIslandsAtTimeSnapshot.push(this.countIslands);
            continue;
        }

        ++this.countIslands;
        this.matrix[row][column] = this.LAND;

        for (let move of this.moves) {
            let nextRow = row + move[0];
            let nextColumn = column + move[1];

            if (isInMatrix(nextRow, nextColumn) && this.matrix[nextRow][nextColumn] === this.LAND) {
                updateIslands(getIndex(row, column), getIndex(nextRow, nextColumn), unionFind);
            }
        }
        numberOfIslandsAtTimeSnapshot.push(this.countIslands);
    }
    return numberOfIslandsAtTimeSnapshot;
};

/**
 * @param {number} currentIndex
 * @param {number} adjacentIndex
 * @param {UnionFind} unionFind 
 * @return {void}
 */
function updateIslands(currentIndex, adjacentIndex, unionFind) {
    let currentParent = unionFind.findParent(currentIndex);
    let adjacentParent = unionFind.findParent(adjacentIndex);

    if (adjacentParent !== currentParent) {
        unionFind.joinByRank(currentParent, adjacentParent);
        --this.countIslands;
    }
}

/**
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
function getIndex(row, column) {
    return row * this.columns + column;
}

/**
 * @param {number} row
 * @param {number} column
 * @return {boolean}
 */
function isInMatrix(row, column) {
    return row >= 0 && row < this.rows && column >= 0 && column < this.columns;
}

class UnionFind {

    /**
     * @param {number} numberOfPositions
     */
    constructor(numberOfPositions) {
        this.parent = new Array(numberOfPositions + 1);
        this.rank = new Array(numberOfPositions + 1);
        for (let i = 0; i < numberOfPositions + 1; ++i) {
            this.parent[i] = i;
            this.rank[i] = 1;
        }
    }

    /**
     * @param {number} index
     * @return {number}
     */
    findParent(index) {
        if (this.parent[index] !== index) {
            this.parent[index] = this.findParent(this.parent[index]);
        }
        return this.parent[index];
    }

    /**
     * @param {number} first
     * @param {number} second
     * @return {void}
     */
    joinByRank(first, second) {
        if (this.rank[first] >= this.rank[second]) {
            this.parent[second] = this.parent[first];
            this.rank[first] += this.rank[second];
        } else {
            this.parent[first] = this.parent[second];
            this.rank[second] += this.rank[first];
        }
    }
}
```
```TypeScript []
function numIslands2(rows: number, columns: number, positions: number[][]): number[] {
    this.moves = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    this.WATER = 0;
    this.LAND = 1;

    this.matrix = Array.from(new Array(rows), () => new Array(columns).fill(this.WATER));
    this.rows = rows;
    this.columns = columns;
    this.countIslands = 0;

    const unionFind = new UnionFind(rows * columns);
    const numberOfIslandsAtTimeSnapshot: number[] = new Array();

    for (let [row, column] of positions) {
        if (this.matrix[row][column] === this.LAND) {
            numberOfIslandsAtTimeSnapshot.push(this.countIslands);
            continue;
        }

        ++this.countIslands;
        this.matrix[row][column] = this.LAND;

        for (let move of this.moves) {
            let nextRow = row + move[0];
            let nextColumn = column + move[1];

            if (isInMatrix(nextRow, nextColumn) && this.matrix[nextRow][nextColumn] === this.LAND) {
                updateIslands(getIndex(row, column), getIndex(nextRow, nextColumn), unionFind);
            }
        }
        numberOfIslandsAtTimeSnapshot.push(this.countIslands);
    }
    return numberOfIslandsAtTimeSnapshot;
};

function updateIslands(currentIndex: number, adjacentIndex: number, unionFind: UnionFind): void {
    let currentParent = unionFind.findParent(currentIndex);
    let adjacentParent = unionFind.findParent(adjacentIndex);

    if (adjacentParent !== currentParent) {
        unionFind.joinByRank(currentParent, adjacentParent);
        --this.countIslands;
    }
}

function getIndex(row: number, column: number): number {
    return row * this.columns + column;
}

function isInMatrix(row: number, column: number): boolean {
    return row >= 0 && row < this.rows && column >= 0 && column < this.columns;
}

class UnionFind {

    parent: number[];
    rank: number[];
    /**
     * @param {number} numberOfPositions
     */
    constructor(numberOfPositions: number) {
        this.parent = new Array(numberOfPositions + 1);
        this.rank = new Array(numberOfPositions + 1);
        for (let i = 0; i < numberOfPositions + 1; ++i) {
            this.parent[i] = i;
            this.rank[i] = 1;
        }
    }

    findParent(index: number): number {
        if (this.parent[index] !== index) {
            this.parent[index] = this.findParent(this.parent[index]);
        }
        return this.parent[index];
    }

    joinByRank(first: number, second: number): void {
        if (this.rank[first] >= this.rank[second]) {
            this.parent[second] = this.parent[first];
            this.rank[first] += this.rank[second];
        } else {
            this.parent[first] = this.parent[second];
            this.rank[second] += this.rank[first];
        }
    }
}
```
```C++ []
#include <array>
#include <vector>
using namespace std;

class UnionFind {

public:
    vector<size_t> parent;
    vector<size_t> rank;

    explicit UnionFind(size_t numberOfPositions) {
        parent.resize(numberOfPositions + 1);
        rank.resize(numberOfPositions + 1);

        for (size_t i = 0; i < numberOfPositions + 1; ++i) {
            parent[i] = i;
            rank[i] = 1;
        }
    }

    size_t findParent(size_t index) {
        if (parent[index] != index) {
            parent[index] = findParent(parent[index]);
        }
        return parent[index];
    }

    void joinByRank(size_t first, size_t second) {
        if (rank[first] >= rank[second]) {
            parent[second] = parent[first];
            rank[first] += rank[second];
        }
        else {
            parent[first] = parent[second];
            rank[second] += rank[first];
        }
    }
};

class Solution {

    inline static const array<array<int, 2>, 4> moves{ { {-1, 0}, {1, 0}, {0, -1}, {0, 1} } };
    static const int WATER = 0;
    static const int LAND = 1;

    vector<vector<int>> matrix;
    size_t rows = 0;
    size_t columns = 0;
    int countIslands = 0;

public:
    vector<int> numIslands2(int rows, int columns, const vector<vector<int>>& positions) {
        matrix.resize(rows, vector<int>(columns));
        this->rows = rows;
        this->columns = columns;

        UnionFind unionFind(rows * columns);
        vector<int> numberOfIslandsAtTimeSnapshot;

        for (const auto& position : positions) {
            size_t row = position[0];
            size_t column = position[1];

            if (matrix[row][column] == LAND) {
                numberOfIslandsAtTimeSnapshot.push_back(countIslands);
                continue;
            }

            ++countIslands;
            matrix[row][column] = LAND;

            for (const auto& move : moves) {
                size_t nextRow = row + move[0];
                size_t nextColumn = column + move[1];

                if (isInMatrix(nextRow, nextColumn) && matrix[nextRow][nextColumn] == LAND) {
                    updateIslands(getIndex(row, column), getIndex(nextRow, nextColumn), unionFind);
                }
            }
            numberOfIslandsAtTimeSnapshot.push_back(countIslands);
        }
        return numberOfIslandsAtTimeSnapshot;
    }

    void updateIslands(size_t currentIndex, size_t adjacentIndex, UnionFind& unionFind) {
        size_t currentParent = unionFind.findParent(currentIndex);
        size_t adjacentParent = unionFind.findParent(adjacentIndex);

        if (adjacentParent != currentParent) {
            unionFind.joinByRank(currentParent, adjacentParent);
            --countIslands;
        }
    }

    size_t getIndex(size_t row, size_t column) const {
        return row * columns + column;
    }

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
    private static readonly int[][] moves =
        { new int[]{ -1, 0 }, new int[]{ 1, 0 }, new int[] { 0, -1 }, new int[]{ 0, 1 } };

    private static readonly int WATER = 0;
    private static readonly int LAND = 1;

    private int[,] matrix;
    private int rows;
    private int columns;
    int countIslands = 0;

    public IList<int> NumIslands2(int rows, int columns, int[][] positions)
    {
        matrix = new int[rows, columns];
        this.rows = rows;
        this.columns = columns;

        UnionFind unionFind = new UnionFind(rows * columns);
        IList<int> numberOfIslandsAtTimeSnapshot = new List<int>();

        foreach (int[] position in positions)
        {
            int row = position[0];
            int column = position[1];

            if (matrix[row, column] == LAND)
            {
                numberOfIslandsAtTimeSnapshot.Add(countIslands);
                continue;
            }

            ++countIslands;
            matrix[row, column] = LAND;

            foreach (int[] move in moves)
            {
                int nextRow = row + move[0];
                int nextColumn = column + move[1];

                if (IsInMatrix(nextRow, nextColumn) && matrix[nextRow, nextColumn] == LAND)
                {
                    UpdateIslands(GetIndex(row, column), GetIndex(nextRow, nextColumn), unionFind);
                }
            }
            numberOfIslandsAtTimeSnapshot.Add(countIslands);
        }
        return numberOfIslandsAtTimeSnapshot;
    }

    private void UpdateIslands(int currentIndex, int adjacentIndex, UnionFind unionFind)
    {
        int currentParent = unionFind.FindParent(currentIndex);
        int adjacentParent = unionFind.FindParent(adjacentIndex);

        if (adjacentParent != currentParent)
        {
            unionFind.JoinByRank(currentParent, adjacentParent);
            --countIslands;
        }
    }

    private int GetIndex(int row, int column)
    {
        return row * columns + column;
    }

    private bool IsInMatrix(int row, int column)
    {
        return row >= 0 && row < rows && column >= 0 && column < columns;
    }
}

class UnionFind
{
    public int[] parent;
    public int[] rank;

    public UnionFind(int numberOfPositions)
    {
        parent = new int[numberOfPositions + 1];
        rank = new int[numberOfPositions + 1];

        for (int i = 0; i < numberOfPositions + 1; ++i)
        {
            parent[i] = i;
            rank[i] = 1;
        }
    }

    public int FindParent(int index)
    {
        if (parent[index] != index)
        {
            parent[index] = FindParent(parent[index]);
        }
        return parent[index];
    }

    public void JoinByRank(int first, int second)
    {
        if (rank[first] >= rank[second])
        {
            parent[second] = parent[first];
            rank[first] += rank[second];
        }
        else
        {
            parent[first] = parent[second];
            rank[second] += rank[first];
        }
    }
}
```
```Kotlin []
class Solution {

    companion object {
        val moves = listOf(intArrayOf(-1, 0), intArrayOf(1, 0), intArrayOf(0, -1), intArrayOf(0, 1))
        const val WATER = 0;
        const val LAND = 1;
    }

    private var matrix = ArrayList<IntArray>()
    private var rows = 0;
    private var columns = 0
    private var countIslands = 0;

    fun numIslands2(rows: Int, columns: Int, positions: Array<IntArray>): List<Int> {
        matrix = ArrayList<IntArray>(rows)
        for (i in 0..rows) {
            matrix.add(IntArray(columns))
        }
        this.rows = rows;
        this.columns = columns;

        val unionFind = UnionFind(rows * columns);
        val numberOfIslandsAtTimeSnapshot = ArrayList<Int>();

        for ((row, column) in positions) {
            if (matrix[row][column] == LAND) {
                numberOfIslandsAtTimeSnapshot.add(countIslands);
                continue;
            }

            ++countIslands;
            matrix[row][column] = LAND;

            for (move in moves) {
                val nextRow = row + move[0];
                val nextColumn = column + move[1];

                if (isInMatrix(nextRow, nextColumn) && matrix[nextRow][nextColumn] == LAND) {
                    updateIslands(getIndex(row, column), getIndex(nextRow, nextColumn), unionFind);
                }
            }
            numberOfIslandsAtTimeSnapshot.add(countIslands);
        }
        return numberOfIslandsAtTimeSnapshot;
    }

    private fun updateIslands(currentIndex: Int, adjacentIndex: Int, unionFind: UnionFind) {
        val currentParent = unionFind.findParent(currentIndex);
        val adjacentParent = unionFind.findParent(adjacentIndex);

        if (adjacentParent != currentParent) {
            unionFind.joinByRank(currentParent, adjacentParent);
            --countIslands;
        }
    }

    private fun getIndex(row: Int, column: Int): Int {
        return row * columns + column;
    }

    private fun isInMatrix(row: Int, column: Int): Boolean {
        return row in 0..<rows && column in 0..<columns
    }
}

class UnionFind(private val numberOfPositions: Int) {

    private val parent = IntArray(numberOfPositions + 1)
    private val rank = IntArray(numberOfPositions + 1)

    init {
        for (i in 0..<numberOfPositions + 1) {
            parent[i] = i;
            rank[i] = 1;
        }
    }

    fun findParent(index: Int): Int {
        if (parent[index] != index) {
            parent[index] = findParent(parent[index]);
        }
        return parent[index];
    }

    fun joinByRank(first: Int, second: Int) {
        if (rank[first] >= rank[second]) {
            parent[second] = parent[first];
            rank[first] += rank[second];
        } else {
            parent[first] = parent[second];
            rank[second] += rank[first];
        }
    }
}
```