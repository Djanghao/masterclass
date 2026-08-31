# Java | JavaScript | TypeScript | C++ | C# | Kotlin Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/connecting-cities-with-minimum-cost/solutions/5055370/](https://leetcode.com/problems/connecting-cities-with-minimum-cost/solutions/5055370/)

---

```Java []
import java.util.Arrays;

public class Solution {

    private static final int NOT_POSSIBLE_TO_CONNECT_ALL_CITIES = -1;

    public int minimumCost(int numberOfCities, int[][] connections) {
        return connectCitiesWithKruskalsAlgorithm(numberOfCities, connections);
    }

    private int connectCitiesWithKruskalsAlgorithm(int numberOfCities, int[][] connections) {
        UnionFind unionFind = new UnionFind(numberOfCities);

        Arrays.sort(connections, (x, y) -> x[2] - y[2]);
        int numberOfConnectedCities = 1;
        int totalCostToConnectAllCities = 0;

        for (int[] connection : connections) {
            int parentFirst = unionFind.findParent(connection[0]);
            int parentSecond = unionFind.findParent(connection[1]);
            int cost = connection[2];

            if (parentFirst != parentSecond) {
                ++numberOfConnectedCities;
                totalCostToConnectAllCities += cost;
                unionFind.joinByRank(parentFirst, parentSecond);
            }
            if (numberOfConnectedCities == numberOfCities) {
                break;
            }
        }
        return numberOfConnectedCities == numberOfCities
                ? totalCostToConnectAllCities
                : NOT_POSSIBLE_TO_CONNECT_ALL_CITIES;
    }
}

class UnionFind {

    int[] parent;
    int[] rank;

    UnionFind(int numberOfCities) {
        parent = new int[numberOfCities + 1];
        rank = new int[numberOfCities + 1];

        // 1 <= city ID <= numberOfCities
        for (int i = 1; i <= numberOfCities; ++i) {
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
 * @param {number} numberOfCities
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function (numberOfCities, connections) {
    this.NOT_POSSIBLE_TO_CONNECT_ALL_CITIES = -1;
    return connectCitiesWithKruskalsAlgorithm(numberOfCities, connections);
};

/**
 * @param {number} numberOfCities
 * @param {number[][]} connections
 * @return {number}
 */
function connectCitiesWithKruskalsAlgorithm(numberOfCities, connections) {
    const unionFind = new UnionFind(numberOfCities);

    connections.sort((x, y) => x[2] - y[2]);
    let numberOfConnectedCities = 1;
    let totalCostToConnectAllCities = 0;

    for (let connection of connections) {
        const parentFirst = unionFind.findParent(connection[0]);
        const parentSecond = unionFind.findParent(connection[1]);
        const cost = connection[2];

        if (parentFirst !== parentSecond) {
            ++numberOfConnectedCities;
            totalCostToConnectAllCities += cost;
            unionFind.joinByRank(parentFirst, parentSecond);
        }
        if (numberOfConnectedCities === numberOfCities) {
            break;
        }
    }
    return numberOfConnectedCities === numberOfCities
            ? totalCostToConnectAllCities
            : this.NOT_POSSIBLE_TO_CONNECT_ALL_CITIES;
}

class UnionFind {

    /**
     * @param {number} numberOfCities
     */
    constructor(numberOfCities) {
        this.parent = new Array(numberOfCities + 1);
        this.rank = new Array(numberOfCities + 1);

        // 1 <= city ID <= numberOfCities
        for (let i = 1; i <= numberOfCities; ++i) {
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
function minimumCost(numberOfCities: number, connections: number[][]): number {
    this.NOT_POSSIBLE_TO_CONNECT_ALL_CITIES = -1;
    return connectCitiesWithKruskalsAlgorithm(numberOfCities, connections);
};

function connectCitiesWithKruskalsAlgorithm(numberOfCities: number, connections: number[][]): number {
    const unionFind = new UnionFind(numberOfCities);

    connections.sort((x, y) => x[2] - y[2]);
    let numberOfConnectedCities = 1;
    let totalCostToConnectAllCities = 0;

    for (let connection of connections) {
        const parentFirst = unionFind.findParent(connection[0]);
        const parentSecond = unionFind.findParent(connection[1]);
        const cost = connection[2];

        if (parentFirst !== parentSecond) {
            ++numberOfConnectedCities;
            totalCostToConnectAllCities += cost;
            unionFind.joinByRank(parentFirst, parentSecond);
        }
        if (numberOfConnectedCities === numberOfCities) {
            break;
        }
    }
    return numberOfConnectedCities === numberOfCities
        ? totalCostToConnectAllCities
        : this.NOT_POSSIBLE_TO_CONNECT_ALL_CITIES;
}

class UnionFind {

    parent: number[];
    rank: number[];

    constructor(numberOfCities: number) {
        this.parent = new Array(numberOfCities + 1);
        this.rank = new Array(numberOfCities + 1);

        // 1 <= city ID <= numberOfCities
        for (let i = 1; i <= numberOfCities; ++i) {
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
#include <span>
#include <vector>
#include <ranges>
using namespace std;

class UnionFind {

    vector<int> parent;
    vector<int> rank;

public:
    explicit UnionFind(int numberOfCities) {
        parent.resize(numberOfCities + 1);
        rank.resize(numberOfCities + 1);

        // 1 <= city ID <= numberOfCities
        for (int i = 1; i <= numberOfCities; ++i) {
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
        }
        else {
            parent[first] = parent[second];
            rank[second] += rank[first];
        }
    }
};

class Solution {

    static const int NOT_POSSIBLE_TO_CONNECT_ALL_CITIES = -1;

public:
    int minimumCost(int numberOfCities, vector<vector<int>>& connections) const {
        return connectCitiesWithKruskalsAlgorithm(numberOfCities, connections);
    }

private:
    int connectCitiesWithKruskalsAlgorithm(int numberOfCities, span<vector<int>> connections) const {
        UnionFind unionFind(numberOfCities);

        ranges::sort(connections, [](const auto& x, const auto& y) {return x[2] < y[2];});
        int numberOfConnectedCities = 1;
        int totalCostToConnectAllCities = 0;

        for (const auto& connection : connections) {
            int parentFirst = unionFind.findParent(connection[0]);
            int parentSecond = unionFind.findParent(connection[1]);
            int cost = connection[2];

            if (parentFirst != parentSecond) {
                ++numberOfConnectedCities;
                totalCostToConnectAllCities += cost;
                unionFind.joinByRank(parentFirst, parentSecond);
            }
            if (numberOfConnectedCities == numberOfCities) {
                break;
            }
        }
        return numberOfConnectedCities == numberOfCities
                ? totalCostToConnectAllCities
                : NOT_POSSIBLE_TO_CONNECT_ALL_CITIES;
    }
};
```
```C# []
using System;

public class Solution
{
    private static readonly int NOT_POSSIBLE_TO_CONNECT_ALL_CITIES = -1;

    public int MinimumCost(int numberOfCities, int[][] connections)
    {
        return ConnectCitiesWithKruskalsAlgorithm(numberOfCities, connections);
    }

    private int ConnectCitiesWithKruskalsAlgorithm(int numberOfCities, int[][] connections)
    {
        UnionFind unionFind = new UnionFind(numberOfCities);

        Array.Sort(connections, (x, y) => x[2] - y[2]);
        int numberOfConnectedCities = 1;
        int totalCostToConnectAllCities = 0;

        foreach (int[] connection in connections)
        {
            int parentFirst = unionFind.FindParent(connection[0]);
            int parentSecond = unionFind.FindParent(connection[1]);
            int cost = connection[2];

            if (parentFirst != parentSecond)
            {
                ++numberOfConnectedCities;
                totalCostToConnectAllCities += cost;
                unionFind.JoinByRank(parentFirst, parentSecond);
            }
            if (numberOfConnectedCities == numberOfCities)
            {
                break;
            }
        }
        return numberOfConnectedCities == numberOfCities
                ? totalCostToConnectAllCities
                : NOT_POSSIBLE_TO_CONNECT_ALL_CITIES;
    }
}

class UnionFind
{

    readonly int[] parent;
    readonly int[] rank;

    public UnionFind(int numberOfCities)
    {
        parent = new int[numberOfCities + 1];
        rank = new int[numberOfCities + 1];

        // 1 <= city ID <= numberOfCities
        for (int i = 1; i <= numberOfCities; ++i)
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
        const val NOT_POSSIBLE_TO_CONNECT_ALL_CITIES = -1;
    }

    fun minimumCost(numberOfCities: Int, connections: Array<IntArray>): Int {
        return connectCitiesWithKruskalsAlgorithm(numberOfCities, connections);
    }

    private fun connectCitiesWithKruskalsAlgorithm(numberOfCities: Int, connections: Array<IntArray>): Int {
        val unionFind = UnionFind(numberOfCities)

        connections.sortWith { x, y -> x[2] - y[2] }
        var numberOfConnectedCities = 1;
        var totalCostToConnectAllCities = 0;

        for (connection in connections) {
            val parentFirst = unionFind.findParent(connection[0]);
            val parentSecond = unionFind.findParent(connection[1]);
            val cost = connection[2];

            if (parentFirst != parentSecond) {
                ++numberOfConnectedCities;
                totalCostToConnectAllCities += cost;
                unionFind.joinByRank(parentFirst, parentSecond);
            }
            if (numberOfConnectedCities == numberOfCities) {
                break;
            }
        }
        return when (numberOfConnectedCities == numberOfCities) {
            true -> totalCostToConnectAllCities
            else -> NOT_POSSIBLE_TO_CONNECT_ALL_CITIES
        }
    }
}

class UnionFind(private val numberOfCities: Int) {

    val parent = IntArray(numberOfCities + 1)
    var rank = IntArray(numberOfCities + 1)

    init {
        // 1 <= city ID <= numberOfCities
        for (i in 1..numberOfCities) {
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