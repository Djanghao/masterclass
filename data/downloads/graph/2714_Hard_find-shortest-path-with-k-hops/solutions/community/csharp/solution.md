# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-shortest-path-with-k-hops/solutions/5326907/](https://leetcode.com/problems/find-shortest-path-with-k-hops/solutions/5326907/)

---

```Java []
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.PriorityQueue;

public class Solution {

    private record Point(int ID, int distanceFromStart, int availableHops) {}
    private record Edge(int ID, int distance) {}
    
    private static final int INFINITY_POINT = Integer.MAX_VALUE;
    private static final int NO_PATH_FOUND = -1;

    private List<Edge>[] undirectedGraph;
    private int numberOfNodes;

    public int shortestPathWithHops(int numberOfNodes, int[][] edges, int start, int goal, int availableHops) {
        this.numberOfNodes = numberOfNodes;
        undirectedGraph = createUndirectedGraph(edges);
        return findShortestPathWithHops(start, goal, availableHops);
    }

    private int findShortestPathWithHops(int start, int goal, int availableHops) {
        PriorityQueue<Point> minHeap = new PriorityQueue<>((x, y) -> x.distanceFromStart - y.distanceFromStart);
        minHeap.add(new Point(start, 0, availableHops));

        int[][] minDistance = new int[numberOfNodes][availableHops + 1];
        for (int nodeID = 0; nodeID < numberOfNodes; ++nodeID) {
            Arrays.fill(minDistance[nodeID], INFINITY_POINT);
        }
        minDistance[start][availableHops] = 0;

        while (!minHeap.isEmpty()) {
            Point current = minHeap.poll();
            if (current.ID == goal) {
                return current.distanceFromStart;
            }

            for (Edge edge : undirectedGraph[current.ID]) {
                if (minDistance[edge.ID][current.availableHops] > current.distanceFromStart + edge.distance) {
                    minDistance[edge.ID][current.availableHops] = current.distanceFromStart + edge.distance;
                    minHeap.add(new Point(edge.ID, minDistance[edge.ID][current.availableHops], current.availableHops));
                }
                if (current.availableHops > 0 && minDistance[edge.ID][current.availableHops - 1] > current.distanceFromStart) {
                    minDistance[edge.ID][current.availableHops - 1] = current.distanceFromStart;
                    minHeap.add(new Point(edge.ID, minDistance[edge.ID][current.availableHops - 1], current.availableHops - 1));
                }
            }
        }

        return NO_PATH_FOUND;
    }

    private List<Edge>[] createUndirectedGraph(int[][] edges) {
        undirectedGraph = new List[numberOfNodes];
        for (int nodeID = 0; nodeID < numberOfNodes; ++nodeID) {
            undirectedGraph[nodeID] = new ArrayList<>();
        }

        for (int[] edge : edges) {
            int from = edge[0];
            int to = edge[1];
            int distance = edge[2];

            undirectedGraph[from].add(new Edge(to, distance));
            undirectedGraph[to].add(new Edge(from, distance));
        }

        return undirectedGraph;
    }
}
```
```JavaScript []
/**
 * @param {number} numberOfNodes
 * @param {number[][]} edges
 * @param {number} start
 * @param {number} goal
 * @param {number} availableHops
 * @return {number}
 */
var shortestPathWithHops = function (numberOfNodes, edges, start, goal, availableHops) {
    this.INFINITY_POINT = Number.MAX_SAFE_INTEGER;
    this.NO_PATH_FOUND = -1;

    this.numberOfNodes = numberOfNodes;
    this.undirectedGraph = createUndirectedGraph(edges);

    return findShortestPathWithHops(start, goal, availableHops);
};

/**
 * @param {number} start
 * @param {number} goal
 * @param {number} availableHops
 * @return {number}
 */
function findShortestPathWithHops(start, goal, availableHops) {
    // const {MinPriorityQueue} = require('@datastructures-js/priority-queue');
    const minHeap = new MinPriorityQueue({compare: (x, y) => x.distanceFromStart - y.distanceFromStart});
    minHeap.enqueue(new Point(start, 0, availableHops));

    const minDistance = Array.from(new Array(this.numberOfNodes),
            () => new Array(availableHops + 1).fill(this.INFINITY_POINT));
    minDistance[start][availableHops] = 0;

    while (!minHeap.isEmpty()) {
        const current = minHeap.dequeue();
        if (current.ID === goal) {
            return current.distanceFromStart;
        }

        for (let edge of this.undirectedGraph[current.ID]) {
            if (minDistance[edge.ID][current.availableHops] > current.distanceFromStart + edge.distance) {
                minDistance[edge.ID][current.availableHops] = current.distanceFromStart + edge.distance;
                minHeap.enqueue(new Point(edge.ID, minDistance[edge.ID][current.availableHops], current.availableHops));
            }
            if (current.availableHops > 0 && minDistance[edge.ID][current.availableHops - 1] > current.distanceFromStart) {
                minDistance[edge.ID][current.availableHops - 1] = current.distanceFromStart;
                minHeap.enqueue(new Point(edge.ID, minDistance[edge.ID][current.availableHops - 1], current.availableHops - 1));
            }
        }
    }

    return this.NO_PATH_FOUND;
}

/**
 * @param {number} ID
 * @param {number} distanceFromStart
 * @param {number} availableHops
 */
function Point(ID, distanceFromStart, availableHops) {
    this.ID = ID;
    this.distanceFromStart = distanceFromStart;
    this.availableHops = availableHops;
}

/**
 * @param {number} ID
 * @param {number} distance
 */
function Edge(ID, distance) {
    this.ID = ID;
    this.distance = distance;
}

/**
 * @param {number[][]} edges
 * @return {number[][]}
 */
function createUndirectedGraph(edges) {
    const undirectedGraph = Array.from(new Array(this.numberOfNodes), () => new Array());
    for (let [to, from, distance] of edges) {
        undirectedGraph[from].push(new Edge(to, distance));
        undirectedGraph[to].push(new Edge(from, distance));
    }
    return undirectedGraph;
}
```
```TypeScript []
function shortestPathWithHops(numberOfNodes: number, edges: number[][], start: number, goal: number, availableHops: number): number {
    this.INFINITY_POINT = Number.MAX_SAFE_INTEGER;
    this.NO_PATH_FOUND = -1;

    this.numberOfNodes = numberOfNodes;
    this.undirectedGraph = createUndirectedGraph(edges);

    return findShortestPathWithHops(start, goal, availableHops);
};

function findShortestPathWithHops(start: number, goal: number, availableHops: number): number {
    const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
    const minHeap = new MinPriorityQueue({ compare: (x, y) => x.distanceFromStart - y.distanceFromStart });
    minHeap.enqueue(new Point(start, 0, availableHops));

    const minDistance: number[][] = Array.from(new Array(this.numberOfNodes),
        () => new Array(availableHops + 1).fill(this.INFINITY_POINT));
    minDistance[start][availableHops] = 0;

    while (!minHeap.isEmpty()) {
        const current = minHeap.dequeue();
        if (current.ID === goal) {
            return current.distanceFromStart;
        }

        for (let edge of this.undirectedGraph[current.ID]) {
            if (minDistance[edge.ID][current.availableHops] > current.distanceFromStart + edge.distance) {
                minDistance[edge.ID][current.availableHops] = current.distanceFromStart + edge.distance;
                minHeap.enqueue(new Point(edge.ID, minDistance[edge.ID][current.availableHops], current.availableHops));
            }
            if (current.availableHops > 0 && minDistance[edge.ID][current.availableHops - 1] > current.distanceFromStart) {
                minDistance[edge.ID][current.availableHops - 1] = current.distanceFromStart;
                minHeap.enqueue(new Point(edge.ID, minDistance[edge.ID][current.availableHops - 1], current.availableHops - 1));
            }
        }
    }

    return this.NO_PATH_FOUND;
}

function Point(ID: number, distanceFromStart: number, availableHops: number) {
    this.ID = ID;
    this.distanceFromStart = distanceFromStart;
    this.availableHops = availableHops;
}

function Edge(ID: number, distance: number) {
    this.ID = ID;
    this.distance = distance;
}

function createUndirectedGraph(edges: number[][]): number[][] {
    const undirectedGraph: number[][] = Array.from(new Array(this.numberOfNodes), () => new Array());
    for (let [to, from, distance] of edges) {
        undirectedGraph[from].push(new Edge(to, distance));
        undirectedGraph[to].push(new Edge(from, distance));
    }
    return undirectedGraph;
}
```
```C++ []
#include <span>
#include <queue>
#include <limits>
#include <vector>
using namespace std;

class Solution {

    struct Point {
        int ID{};
        int distanceFromStart{};
        int availableHops{};

        Point() = default;
        Point(int ID, int distanceFromStart, int availableHops) :
              ID{ ID }, distanceFromStart{ distanceFromStart }, availableHops{ availableHops } {}
    };

    struct Edge {
        int ID{};
        int distance{};

        Edge() = default;
        Edge(int ID, int distance) : ID{ ID }, distance{ distance } {}
    };

    struct ComparatorPoint {
        auto operator()(const Point& x, const Point& y) const {
            return x.distanceFromStart > y.distanceFromStart;
        }
    };

    inline static const int INFINITY_POINT = numeric_limits<int>::max();
    inline static const int NO_PATH_FOUND = -1;

    vector <vector<Edge>> undirectedGraph;
    int numberOfNodes;

public:
    int shortestPathWithHops
    (int numberOfNodes, vector<vector<int>>& edges, int start, int goal, int availableHops) {
        this->numberOfNodes = numberOfNodes;
        undirectedGraph = createUndirectedGraph(edges);
        return findShortestPathWithHops(start, goal, availableHops);
    }

private:
    int findShortestPathWithHops(int start, int goal, int availableHops) const {
        priority_queue<Point, vector<Point>, ComparatorPoint> minHeap;
        minHeap.emplace(start, 0, availableHops);

        vector<vector<int>> minDistance(numberOfNodes, vector<int>(availableHops + 1, INFINITY_POINT));
        minDistance[start][availableHops] = 0;

        while (!minHeap.empty()) {
            Point current = minHeap.top();
            minHeap.pop();
            if (current.ID == goal) {
                return current.distanceFromStart;
            }

            for (const auto& edge : undirectedGraph[current.ID]) {
                if (minDistance[edge.ID][current.availableHops] > current.distanceFromStart + edge.distance) {
                    minDistance[edge.ID][current.availableHops] = current.distanceFromStart + edge.distance;
                    minHeap.emplace(edge.ID, minDistance[edge.ID][current.availableHops], current.availableHops);
                }
                if (current.availableHops > 0 && minDistance[edge.ID][current.availableHops - 1] > current.distanceFromStart) {
                    minDistance[edge.ID][current.availableHops - 1] = current.distanceFromStart;
                    minHeap.emplace(edge.ID, minDistance[edge.ID][current.availableHops - 1], current.availableHops - 1);
                }
            }
        }

        return NO_PATH_FOUND;
    }

    vector < vector<Edge>> createUndirectedGraph(span<const vector<int>> edges) {
        undirectedGraph.resize(numberOfNodes);

        for (const auto& edge : edges) {
            int from = edge[0];
            int to = edge[1];
            int distance = edge[2];

            undirectedGraph[from].emplace_back(to, distance);
            undirectedGraph[to].emplace_back(from, distance);
        }

        return undirectedGraph;
    }
};
```
```C# []
using System;
using System.Collections.Generic;

public class Solution
{
    private sealed record Point(int ID, int distanceFromStart, int availableHops) { }
    private sealed record Edge(int ID, int distance) { }

    private static readonly int INFINITY_POINT = int.MaxValue;
    private static readonly int NO_PATH_FOUND = -1;

    private IList<Edge>[]? undirectedGraph;
    private int numberOfNodes;

    public int ShortestPathWithHops(int numberOfNodes, int[][] edges, int start, int goal, int availableHops)
    {
        this.numberOfNodes = numberOfNodes;
        undirectedGraph = CreateUndirectedGraph(edges);
        return FindShortestPathWithHops(start, goal, availableHops);
    }
    private int FindShortestPathWithHops(int start, int goal, int availableHops)
    {
        var minHeap = new PriorityQueue<Point, int>(Comparer<int>.Create((x, y) => x.CompareTo(y)));
        minHeap.Enqueue(new Point(start, 0, availableHops), 0);

        int[][] minDistance = new int[numberOfNodes][];
        for (int nodeID = 0; nodeID < numberOfNodes; ++nodeID)
        {
            minDistance[nodeID] = new int[availableHops + 1];
            Array.Fill(minDistance[nodeID], INFINITY_POINT);
        }
        minDistance[start][availableHops] = 0;

        while (minHeap.Count > 0)
        {
            Point current = minHeap.Dequeue();
            if (current.ID == goal)
            {
                return current.distanceFromStart;
            }

            foreach (Edge edge in undirectedGraph[current.ID])
            {
                if (minDistance[edge.ID][current.availableHops] > current.distanceFromStart + edge.distance)
                {
                    minDistance[edge.ID][current.availableHops] = current.distanceFromStart + edge.distance;
                    minHeap.Enqueue(new Point(edge.ID, minDistance[edge.ID][current.availableHops], current.availableHops),
                                    minDistance[edge.ID][current.availableHops]);
                }
                if (current.availableHops > 0 && minDistance[edge.ID][current.availableHops - 1] > current.distanceFromStart)
                {
                    minDistance[edge.ID][current.availableHops - 1] = current.distanceFromStart;
                    minHeap.Enqueue(new Point(edge.ID, minDistance[edge.ID][current.availableHops - 1], current.availableHops - 1),
                                    minDistance[edge.ID][current.availableHops - 1]);
                }
            }
        }

        return NO_PATH_FOUND;
    }

    private IList<Edge>[] CreateUndirectedGraph(int[][] edges)
    {
        undirectedGraph = new List<Edge>[numberOfNodes];
        for (int nodeID = 0; nodeID < numberOfNodes; ++nodeID)
        {
            undirectedGraph[nodeID] = new List<Edge>();
        }

        foreach (int[] edge in edges)
        {
            int from = edge[0];
            int to = edge[1];
            int distance = edge[2];

            undirectedGraph[from].Add(new Edge(to, distance));
            undirectedGraph[to].Add(new Edge(from, distance));
        }

        return undirectedGraph;
    }
}
```
```Kotlin []
import java.util.PriorityQueue

class Solution {

    private data class Point(val ID: Int, val distanceFromStart: Int, val availableHops: Int) {}
    private data class Edge(val ID: Int, val distance: Int) {}

    private companion object {
        const val INFINITY_POINT = Int.MAX_VALUE
        const val NO_PATH_FOUND = -1
    }

    private lateinit var undirectedGraph: Array<ArrayList<Edge>>
    private var numberOfNodes = 0


    fun shortestPathWithHops(numberOfNodes: Int, edges: Array<IntArray>, start: Int, goal: Int, availableHops: Int): Int {
        this.numberOfNodes = numberOfNodes
        undirectedGraph = createUndirectedGraph(edges)
        return findShortestPath(start, goal, availableHops)
    }

    private fun findShortestPath(start: Int, goal: Int, availableHops: Int): Int {
        val minHeap = PriorityQueue<Point>() { x, y -> x.distanceFromStart - y.distanceFromStart }
        minHeap.add(Point(start, 0, availableHops))

        val minDistance = Array<IntArray>(numberOfNodes) { IntArray(availableHops + 1) { INFINITY_POINT } }
        minDistance[start][availableHops] = 0

        while (!minHeap.isEmpty()) {
            val current = minHeap.poll()
            if (current.ID == goal) {
                return current.distanceFromStart
            }

            for (edge in undirectedGraph[current.ID]) {
                if (minDistance[edge.ID][current.availableHops] > current.distanceFromStart + edge.distance) {
                    minDistance[edge.ID][current.availableHops] = current.distanceFromStart + edge.distance
                    minHeap.add(Point(edge.ID, minDistance[edge.ID][current.availableHops], current.availableHops))
                }
                if (current.availableHops > 0 && minDistance[edge.ID][current.availableHops - 1] > current.distanceFromStart) {
                    minDistance[edge.ID][current.availableHops - 1] = current.distanceFromStart
                    minHeap.add(Point(edge.ID, minDistance[edge.ID][current.availableHops - 1], current.availableHops - 1))
                }
            }
        }

        return NO_PATH_FOUND
    }

    private fun createUndirectedGraph(edges: Array<IntArray>): Array<ArrayList<Edge>> {
        undirectedGraph = Array<ArrayList<Edge>>(numberOfNodes) { ArrayList<Edge>() }

        for (nodeID in 0..<numberOfNodes) {
            undirectedGraph[nodeID] = ArrayList<Edge>()
        }

        for ((from, to, distance) in edges) {
            undirectedGraph[from].add(Edge(to, distance))
            undirectedGraph[to].add(Edge(from, distance))
        }

        return undirectedGraph
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

type Point struct {
    ID                int
    distanceFromStart int
    availableHops     int
}

type Edge struct {
    ID       int
    distance int
}

var INFINITY_POINT = math.MaxInt
var NO_PATH_FOUND = -1

var undirectedGraph [][]Edge
var numberOfNodes = 0

func shortestPathWithHops(totalNodes int, edges [][]int, start int, goal int, availableHops int) int {
    numberOfNodes = totalNodes
    undirectedGraph = createUndirectedGraph(edges)
    return findShortestPathWithHops(start, goal, availableHops)
}

func findShortestPathWithHops(start int, goal int, availableHops int) int {
    minHeap := PriorityQueue{}
    point := &Point{start, 0, availableHops}
    heap.Push(&minHeap, point)

    minDistance := createSliceMinDistance(availableHops)
    minDistance[start][availableHops] = 0

    for minHeap.Len() > 0 {
        current := heap.Pop(&minHeap).(*Point)
        if current.ID == goal {
            return current.distanceFromStart
        }

        for _, edge := range undirectedGraph[current.ID] {
            if minDistance[edge.ID][current.availableHops] > current.distanceFromStart+edge.distance {
                minDistance[edge.ID][current.availableHops] = current.distanceFromStart + edge.distance
                point := &Point{edge.ID, minDistance[edge.ID][current.availableHops], current.availableHops}
                heap.Push(&minHeap, point)
            }
            if current.availableHops > 0 && minDistance[edge.ID][current.availableHops-1] > current.distanceFromStart {
                minDistance[edge.ID][current.availableHops-1] = current.distanceFromStart
                point := &Point{edge.ID, minDistance[edge.ID][current.availableHops-1], current.availableHops - 1}
                heap.Push(&minHeap, point)
            }
        }
    }

    return NO_PATH_FOUND
}

func createUndirectedGraph(edges [][]int) [][]Edge {
    undirectedGraph = make([][]Edge, numberOfNodes)

    for nodeID := 0; nodeID < numberOfNodes; nodeID++ {
        undirectedGraph[nodeID] = []Edge{}
    }

    for _, edge := range edges {
        from := edge[0]
        to := edge[1]
        distance := edge[2]

        undirectedGraph[from] = append(undirectedGraph[from], Edge{to, distance})
        undirectedGraph[to] = append(undirectedGraph[to], Edge{from, distance})
    }

    return undirectedGraph
}

func createSliceMinDistance(availableHops int) [][]int {
    minDistance := make([][]int, numberOfNodes)
    for nodeID := 0; nodeID < numberOfNodes; nodeID++ {

        minDistance[nodeID] = make([]int, availableHops+1)
        for i := 0; i < availableHops+1; i++ {
            minDistance[nodeID][i] = INFINITY_POINT
        }
    }
    return minDistance
}

type PriorityQueue []*Point

func (pq PriorityQueue) Len() int {
    return len(pq)
}

func (pq PriorityQueue) Less(first int, second int) bool {
    return pq[first].distanceFromStart < pq[second].distanceFromStart
}

func (pq PriorityQueue) Swap(first int, second int) {
    pq[first], pq[second] = pq[second], pq[first]
}

func (pq *PriorityQueue) Push(object any) {
    point := object.(*Point)
    *pq = append(*pq, point)
}

func (pq *PriorityQueue) Pop() any {
    length := len(*pq)
    point := (*pq)[length-1]
    (*pq)[length-1] = nil
    *pq = (*pq)[0 : length-1]
    return point
}
```
