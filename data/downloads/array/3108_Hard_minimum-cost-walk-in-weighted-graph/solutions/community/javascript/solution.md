# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-walk-in-weighted-graph/solutions/5847298/](https://leetcode.com/problems/minimum-cost-walk-in-weighted-graph/solutions/5847298/)

---

```Java []
import java.util.Arrays;

public class Solution {

    private static final int NO_PATH_FOUND = -1;

    public int[] minimumCost(int numberOfNodes, int[][] edges, int[][] queries) {
        UnionFind unionFind = new UnionFind(numberOfNodes);
        int[] minCostToReachParent = createMinCostToReachParent(unionFind, numberOfNodes, edges);
        return createMinCostPerQuery(unionFind, minCostToReachParent, queries);
    }

    private int[] createMinCostToReachParent(UnionFind unionFind, int numberOfNodes, int[][] edges) {
        int[] minCostToReachParent = new int[numberOfNodes];
        Arrays.fill(minCostToReachParent, Integer.MAX_VALUE);

        for (int[] edge : edges) {
            int parentFirst = unionFind.findParent(edge[0]);
            int parentSecond = unionFind.findParent(edge[1]);
            int cost = edge[2];

            minCostToReachParent[parentFirst] &= cost & minCostToReachParent[parentSecond];
            minCostToReachParent[parentSecond] &= cost & minCostToReachParent[parentFirst];

            if (parentFirst != parentSecond) {
                unionFind.joinByRank(parentFirst, parentSecond);
            }
        }
        return minCostToReachParent;
    }

    private int[] createMinCostPerQuery(UnionFind unionFind, int[] minCostToReachParent, int[][] queries) {
        int[] minCostPerQuery = new int[queries.length];

        for (int i = 0; i < queries.length; ++i) {
            int parentFirst = unionFind.findParent(queries[i][0]);
            int parentSecond = unionFind.findParent(queries[i][1]);

            if (parentFirst != parentSecond) {
                minCostPerQuery[i] = NO_PATH_FOUND;
            } else {
                minCostPerQuery[i] = minCostToReachParent[parentFirst];
            }
        }

        return minCostPerQuery;
    }
}

class UnionFind {

    private final int[] rank;
    private final int[] parent;

    UnionFind(int numberOfNodes) {
        rank = new int[numberOfNodes];
        parent = new int[numberOfNodes];

        // Alternatively: parent = IntStream.range(0, numberOfNodes).toArray();
        for (int node = 0; node < numberOfNodes; ++node) {
            parent[node] = node;
        }
    }

    int findParent(int node) {
        while (parent[node] != node) {
            node = parent[node];
        }
        return parent[node];
    }

    void joinByRank(int firstNode, int secondNode) {
        if (rank[firstNode] >= rank[secondNode]) {
            parent[secondNode] = firstNode;
            rank[firstNode] += rank[secondNode] + 1;
        } else {
            parent[firstNode] = secondNode;
            rank[secondNode] += rank[firstNode] + 1;
        }
    }
}
```
```JavaScript []
/**
 * @param {number} numberOfNodes
 * @param {number[][]} edges
 * @param {number[][]} queries
 * @return {number[]}
 */
var minimumCost = function (numberOfNodes, edges, queries) {
    this.NO_PATH_FOUND = -1;
    const unionFind = new UnionFind(numberOfNodes);
    const minCostToReachParent = createMinCostToReachParent(unionFind, numberOfNodes, edges);
    return createMinCostPerQuery(unionFind, minCostToReachParent, queries);
};

/**
 * @param {UnionFind} unionFind
 * @param {number} numberOfNodes
 * @param {number[][]} edges
 * @return {number[]}
 */
function createMinCostToReachParent(unionFind, numberOfNodes, edges) {
    const minCostToReachParent = new Array(numberOfNodes).fill(Number.MAX_SAFE_INTEGER);

    for (let edge of edges) {
        const parentFirst = unionFind.findParent(edge[0]);
        const parentSecond = unionFind.findParent(edge[1]);
        const cost = edge[2];

        minCostToReachParent[parentFirst] &= cost & minCostToReachParent[parentSecond];
        minCostToReachParent[parentSecond] &= cost & minCostToReachParent[parentFirst];

        if (parentFirst !== parentSecond) {
            unionFind.joinByRank(parentFirst, parentSecond);
        }
    }
    return minCostToReachParent;
}

/**
 * @param {UnionFind} unionFind
 * @param {number[]} minCostToReachParent
 * @param {number[][]} queries
 * @return {number[]}
 */
function  createMinCostPerQuery(unionFind, minCostToReachParent, queries) {
    const minCostPerQuery = new Array(queries.length);

    for (let i = 0; i < queries.length; ++i) {
        const parentFirst = unionFind.findParent(queries[i][0]);
        const parentSecond = unionFind.findParent(queries[i][1]);

        if (parentFirst !== parentSecond) {
            minCostPerQuery[i] = this.NO_PATH_FOUND;
        } else {
            minCostPerQuery[i] = minCostToReachParent[parentFirst];
        }
    }

    return minCostPerQuery;
}

class UnionFind {

    #rank
    #parent

    /**
     * @param {number} numberOfNodes
     */
    constructor(numberOfNodes) {
        this.#rank = new Array(numberOfNodes).fill(0);
        this.#parent = new Array(numberOfNodes).fill(0);
        // Alternatively: this.parent = Array.from(Array(numberOfNodes).keys());
        for (let node = 0; node < numberOfNodes; ++node) {
            this.#parent[node] = node;
        }
    }

    /**
     * @param {number} node
     * @return {number}
     */
    findParent(node) {
        while (this.#parent[node] !== node) {
            node = this.#parent[node];
        }
        return this.#parent[node];
    }

    /**
     * @param {number} firstNode
     * @param {number} secondNode
     * @return {void}
     */
    joinByRank(firstNode, secondNode) {
        if (this.#rank[firstNode] >= this.#rank[secondNode]) {
            this.#parent[secondNode] = firstNode;
            this.#rank[firstNode] += this.#rank[secondNode] + 1;
        } else {
            this.#parent[firstNode] = secondNode;
            this.#rank[secondNode] += this.#rank[firstNode] + 1;
        }
    }
}
```
```TypeScript []
function minimumCost(numberOfNodes: number, edges: number[][], queries: number[][]): number[] {
    this.NO_PATH_FOUND = -1;
    const unionFind = new UnionFind(numberOfNodes);
    const minCostToReachParent = createMinCostToReachParent(unionFind, numberOfNodes, edges);
    return createMinCostPerQuery(unionFind, minCostToReachParent, queries);
};

function createMinCostToReachParent(unionFind: UnionFind, numberOfNodes: number, edges: number[][]): number[] {
    const minCostToReachParent: number[] = new Array(numberOfNodes).fill(Number.MAX_SAFE_INTEGER);

    for (let edge of edges) {
        const parentFirst = unionFind.findParent(edge[0]);
        const parentSecond = unionFind.findParent(edge[1]);
        const cost = edge[2];

        minCostToReachParent[parentFirst] &= cost & minCostToReachParent[parentSecond];
        minCostToReachParent[parentSecond] &= cost & minCostToReachParent[parentFirst];

        if (parentFirst !== parentSecond) {
            unionFind.joinByRank(parentFirst, parentSecond);
        }
    }
    return minCostToReachParent;
}

function createMinCostPerQuery(unionFind: UnionFind, minCostToReachParent: number[], queries: number[][]): number[] {
    const minCostPerQuery: number[] = new Array(queries.length);

    for (let i = 0; i < queries.length; ++i) {
        const parentFirst = unionFind.findParent(queries[i][0]);
        const parentSecond = unionFind.findParent(queries[i][1]);

        if (parentFirst !== parentSecond) {
            minCostPerQuery[i] = this.NO_PATH_FOUND;
        } else {
            minCostPerQuery[i] = minCostToReachParent[parentFirst];
        }
    }

    return minCostPerQuery;
}

class UnionFind {

    private rank: number[];
    private parent: number[];

    constructor(numberOfNodes) {
        this.rank = new Array(numberOfNodes).fill(0);
        this.parent = new Array(numberOfNodes).fill(0);
        // Alternatively: this.parent = Array.from(Array(numberOfNodes).keys());
        for (let node = 0; node < numberOfNodes; ++node) {
            this.parent[node] = node;
        }
    }

    findParent(node: number): number {
        while (this.parent[node] !== node) {
            node = this.parent[node];
        }
        return this.parent[node];
    }

    joinByRank(firstNode: number, secondNode: number) {
        if (this.rank[firstNode] >= this.rank[secondNode]) {
            this.parent[secondNode] = firstNode;
            this.rank[firstNode] += this.rank[secondNode] + 1;
        } else {
            this.parent[firstNode] = secondNode;
            this.rank[secondNode] += this.rank[firstNode] + 1;
        }
    }
}
```
```C++ []
#include <span>
#include <limits>
#include <ranges>
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

class UnionFind {

    vector<int> rank;
    vector<int> parent;

public:
    UnionFind(int numberOfNodes) {
        rank.resize(numberOfNodes);
        parent.resize(numberOfNodes);

        // Alternatively: ranges::iota(parent,0);
        for (int node = 0; node < numberOfNodes; ++node) {
            parent[node] = node;
        }
    }

    int findParent(int node) {
        while (parent[node] != node) {
            node = parent[node];
        }
        return parent[node];
    }

    void joinByRank(int firstNode, int secondNode) {
        if (rank[firstNode] >= rank[secondNode]) {
            parent[secondNode] = firstNode;
            rank[firstNode] += rank[secondNode] + 1;
        }
        else {
            parent[firstNode] = secondNode;
            rank[secondNode] += rank[firstNode] + 1;
        }
    }
};

class Solution {

    static const int NO_PATH_FOUND = -1;

public:
    vector<int> minimumCost(int numberOfNodes, const vector<vector<int>>& edges, const vector<vector<int>>& queries) const {
        UnionFind unionFind(numberOfNodes);
        vector<int> minCostToReachParent = createMinCostToReachParent(unionFind, numberOfNodes, edges);
        return createMinCostPerQuery(unionFind, minCostToReachParent, queries);
    }

private:
    vector<int> createMinCostToReachParent(UnionFind& unionFind, int numberOfNodes, span<const vector<int>> edges) const {
        vector<int> minCostToReachParent(numberOfNodes, numeric_limits<int>::max());

        for (const auto& edge : edges) {
            int parentFirst = unionFind.findParent(edge[0]);
            int parentSecond = unionFind.findParent(edge[1]);
            int cost = edge[2];

            minCostToReachParent[parentFirst] &= cost & minCostToReachParent[parentSecond];
            minCostToReachParent[parentSecond] &= cost & minCostToReachParent[parentFirst];

            if (parentFirst != parentSecond) {
                unionFind.joinByRank(parentFirst, parentSecond);
            }
        }
        return minCostToReachParent;
    }

    vector<int> createMinCostPerQuery(UnionFind& unionFind, span<const int> minCostToReachParent, span<const vector<int>> queries) const {
        vector<int> minCostPerQuery(queries.size());

        for (size_t i = 0; i < queries.size(); ++i) {
            int parentFirst = unionFind.findParent(queries[i][0]);
            int parentSecond = unionFind.findParent(queries[i][1]);

            if (parentFirst != parentSecond) {
                minCostPerQuery[i] = NO_PATH_FOUND;
            }
            else {
                minCostPerQuery[i] = minCostToReachParent[parentFirst];
            }
        }

        return minCostPerQuery;
    }
};
```
```C# []
using System;
using System.Linq;

public class Solution
{
    private static readonly int NO_PATH_FOUND = -1;

    public int[] MinimumCost(int numberOfNodes, int[][] edges, int[][] queries)
    {
        UnionFind unionFind = new UnionFind(numberOfNodes);
        int[] minCostToReachParent = CreateMinCostToReachParent(unionFind, numberOfNodes, edges);
        return CreateMinCostPerQuery(unionFind, minCostToReachParent, queries);
    }

    private int[] CreateMinCostToReachParent(UnionFind unionFind, int numberOfNodes, int[][] edges)
    {
        int[] minCostToReachParent = new int[numberOfNodes];
        Array.Fill(minCostToReachParent, int.MaxValue);

        foreach (int[] edge in edges)
        {
            int parentFirst = unionFind.FindParent(edge[0]);
            int parentSecond = unionFind.FindParent(edge[1]);
            int cost = edge[2];

            minCostToReachParent[parentFirst] &= cost & minCostToReachParent[parentSecond];
            minCostToReachParent[parentSecond] &= cost & minCostToReachParent[parentFirst];

            if (parentFirst != parentSecond)
            {
                unionFind.JoinByRank(parentFirst, parentSecond);
            }
        }
        return minCostToReachParent;
    }

    private int[] CreateMinCostPerQuery(UnionFind unionFind, int[] minCostToReachParent, int[][] queries)
    {
        int[] minCostPerQuery = new int[queries.Length];

        for (int i = 0; i < queries.Length; ++i)
        {
            int parentFirst = unionFind.FindParent(queries[i][0]);
            int parentSecond = unionFind.FindParent(queries[i][1]);

            if (parentFirst != parentSecond)
            {
                minCostPerQuery[i] = NO_PATH_FOUND;
            }
            else
            {
                minCostPerQuery[i] = minCostToReachParent[parentFirst];
            }
        }

        return minCostPerQuery;
    }
}

class UnionFind
{
    private readonly int[] rank;
    private readonly int[] parent;

    public UnionFind(int numberOfNodes)
    {
        rank = new int[numberOfNodes];
        parent = new int[numberOfNodes];

        // Alternatively: parent = Enumerable.Range(0, numberOfNodes).ToArray();
        for (int node = 0; node < numberOfNodes; ++node)
        {
            parent[node] = node;
        }
    }

    public int FindParent(int node)
    {
        while (parent[node] != node)
        {
            node = parent[node];
        }
        return parent[node];
    }

    public void JoinByRank(int firstNode, int secondNode)
    {
        if (rank[firstNode] >= rank[secondNode])
        {
            parent[secondNode] = firstNode;
            rank[firstNode] += rank[secondNode] + 1;
        }
        else
        {
            parent[firstNode] = secondNode;
            rank[secondNode] += rank[firstNode] + 1;
        }
    }
}
```
```Kotlin []
import kotlin.collections.*

class Solution {

    private companion object {
        const val NO_PATH_FOUND = -1
    }

    fun minimumCost(numberOfNodes: Int, edges: Array<IntArray>, queries: Array<IntArray>): IntArray {
        val unionFind = UnionFind(numberOfNodes)
        val minCostToReachParent = createMinCostToReachParent(unionFind, numberOfNodes, edges)
        return createMinCostPerQuery(unionFind, minCostToReachParent, queries)
    }

    private fun createMinCostToReachParent(unionFind: UnionFind, numberOfNodes: Int, edges: Array<IntArray>): IntArray {
        val minCostToReachParent = IntArray(numberOfNodes).apply { fill(Int.MAX_VALUE) }
        
        for (edge in edges) {
            val parentFirst = unionFind.findParent(edge[0])
            val parentSecond = unionFind.findParent(edge[1])
            val cost = edge[2]

            minCostToReachParent[parentFirst] =
                minCostToReachParent[parentFirst] and cost and minCostToReachParent[parentSecond]
            minCostToReachParent[parentSecond] =
                minCostToReachParent[parentSecond] and cost and minCostToReachParent[parentFirst]

            if (parentFirst != parentSecond) {
                unionFind.joinByRank(parentFirst, parentSecond)
            }
        }
        return minCostToReachParent
    }

    private fun createMinCostPerQuery(unionFind: UnionFind, minCostToReachParent: IntArray, queries: Array<IntArray>): IntArray {
        val minCostPerQuery = IntArray(queries.size)

        for (i in queries.indices) {
            val parentFirst = unionFind.findParent(queries[i][0])
            val parentSecond = unionFind.findParent(queries[i][1])

            if (parentFirst != parentSecond) {
                minCostPerQuery[i] = NO_PATH_FOUND
            } else {
                minCostPerQuery[i] = minCostToReachParent[parentFirst]
            }
        }

        return minCostPerQuery
    }
}

class UnionFind(numberOfNodes: Int) {

    private var rank = IntArray(numberOfNodes)
    private var parent = IntArray(numberOfNodes) { i -> i }

    /*
    Alternatively for array parent:
     init {
        for (node in 0..<numberOfNodes) {
            parent[node] = node
        }
     }
    */

    fun findParent(node: Int): Int {
        var node = node
        while (parent[node] != node) {
            node = parent[node]
        }
        return parent[node]
    }

    fun joinByRank(firstNode: Int, secondNode: Int) {
        if (rank[firstNode] >= rank[secondNode]) {
            parent[secondNode] = firstNode;
            rank[firstNode] += rank[secondNode] + 1
        } else {
            parent[firstNode] = secondNode
            rank[secondNode] += rank[firstNode] + 1
        }
    }
}
```
```Go []
package main

import (
    "fmt"
    "math"
)

const NO_PATH_FOUND = -1

func minimumCost(numberOfNodes int, edges [][]int, queries [][]int) []int {
    unionFind := NewUnionFind(numberOfNodes)
    minCostToReachParent := createMinCostToReachParent(unionFind, numberOfNodes, edges)
    return createMinCostPerQuery(unionFind, minCostToReachParent, queries)
}

func createMinCostToReachParent(unionFind UnionFind, numberOfNodes int, edges [][]int) []int {
    minCostToReachParent := make([]int, numberOfNodes)
    for node := 0; node < numberOfNodes; node++ {
        minCostToReachParent[node] = math.MaxInt32
    }

    for _, edge := range edges {
        parentFirst := unionFind.findParent(edge[0])
        parentSecond := unionFind.findParent(edge[1])
        cost := edge[2]

        minCostToReachParent[parentFirst] &= cost & minCostToReachParent[parentSecond]
        minCostToReachParent[parentSecond] &= cost & minCostToReachParent[parentFirst]

        if parentFirst != parentSecond {
            unionFind.joinByRank(parentFirst, parentSecond)
        }
    }
    return minCostToReachParent
}

func createMinCostPerQuery(unionFind UnionFind, minCostToReachParent []int, queries [][]int) []int {
    minCostPerQuery := make([]int, len(queries))

    for i := range queries {
        parentFirst := unionFind.findParent(queries[i][0])
        parentSecond := unionFind.findParent(queries[i][1])

        if parentFirst != parentSecond {
            minCostPerQuery[i] = NO_PATH_FOUND
        } else {
            minCostPerQuery[i] = minCostToReachParent[parentFirst]
        }
    }

    return minCostPerQuery
}

type UnionFind struct {
    rank   []int
    parent []int
}

func NewUnionFind(numberOfNodes int) UnionFind {
    unionFind := UnionFind{
        rank:   make([]int, numberOfNodes),
        parent: make([]int, numberOfNodes),
    }

    for node := 0; node < numberOfNodes; node++ {
        unionFind.parent[node] = node
    }

    return unionFind
}

func (this *UnionFind) findParent(node int) int {
    for this.parent[node] != node {
        node = this.parent[node]
    }
    return this.parent[node]
}

func (this *UnionFind) joinByRank(firstNode int, secondNode int) {
    if this.rank[firstNode] >= this.rank[secondNode] {
        this.parent[secondNode] = firstNode
        this.rank[firstNode] += this.rank[secondNode] + 1
    } else {
        this.parent[firstNode] = secondNode
        this.rank[secondNode] += this.rank[firstNode] + 1
    }
}
```