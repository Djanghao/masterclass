# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-closest-marked-node/solutions/5314883/](https://leetcode.com/problems/find-the-closest-marked-node/solutions/5314883/)

---

```Java []
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.PriorityQueue;

public class Solution {

    private record Point(int ID, int distanceFromStart) {}
    
    private static final int INFINITY_POINT = Integer.MAX_VALUE;
    private static final int NO_PATH_FOUND = -1;

    private int numberOfNodes;
    private boolean[] markedAsBoolean;
    private Map<Integer, Integer>[] directedGraph;

    public int minimumDistance(int numberOfNodes, List<List<Integer>> edges, int startID, int[] markedID) {
        this.numberOfNodes = numberOfNodes;
        this.directedGraph = createDirectedGraph(edges);
        this.markedAsBoolean = createArrayMarkedAsBoolean(markedID);
        
        return findShortestPathWithDijkstraSearch(startID);
    }

    private int findShortestPathWithDijkstraSearch(int startID) {
        PriorityQueue<Point> minHeap = new PriorityQueue<>((first, second) -> first.distanceFromStart - second.distanceFromStart);
        minHeap.add(new Point(startID, 0));

        int[] minDistance = new int[numberOfNodes];
        Arrays.fill(minDistance, INFINITY_POINT);
        minDistance[startID] = 0;

        while (!minHeap.isEmpty()) {
            Point current = minHeap.poll();
            if (markedAsBoolean[current.ID]) {
                return current.distanceFromStart;
            }

            for (int next : directedGraph[current.ID].keySet()) {
                if (minDistance[next] > current.distanceFromStart + directedGraph[current.ID].get(next)) {
                    minDistance[next] = current.distanceFromStart + directedGraph[current.ID].get(next);
                    minHeap.add(new Point(next, minDistance[next]));
                }
            }
        }

        return NO_PATH_FOUND;
    }

    private Map<Integer, Integer>[] createDirectedGraph(List<List<Integer>> edges) {
        Map<Integer, Integer>[] graph = new HashMap[numberOfNodes];
        for (int nodeID = 0; nodeID < numberOfNodes; ++nodeID) {
            graph[nodeID] = new HashMap<>();
        }

        for (List<Integer> edge : edges) {
            int from = edge.get(0);
            int to = edge.get(1);
            int distance = edge.get(2);

            if (graph[from].containsKey(to) && graph[from].get(to) < distance) {
                distance = graph[from].get(to);
            }
            graph[from].put(to, distance);
        }
        return graph;
    }

    private boolean[] createArrayMarkedAsBoolean(int[] markedID) {
        boolean[] marked = new boolean[numberOfNodes];
        for (int node : markedID) {
            marked[node] = true;
        }
        return marked;
    }
}
```
```JavaScript []
/**
 * @param {number} numberOfNodes
 * @param {number[][]} edges
 * @param {number} startID
 * @param {number[]} markedID
 * @return {number}
 */
var minimumDistance = function (numberOfNodes, edges, startID, markedID) {
    this.INFINITY_POINT = Number.POSITIVE_INFINITY;
    this.NO_PATH_FOUND = -1;

    this.numberOfNodes = numberOfNodes;
    this.directedGraph = createDirectedGraph(edges);
    this.markedAsBoolean = createArrayMarkedAsBoolean(markedID);

    return findShortestPathWithDijkstraSearch(startID);
};

/**
 * @param {number} ID
 * @param {number} distanceFromStart 
 */
function Point(ID, distanceFromStart) {
    this.ID = ID;
    this.distanceFromStart = distanceFromStart;
}

/**
 * @param {number} startID
 * @return {number}  
 */
function findShortestPathWithDijkstraSearch(startID) {

    // const {MinPriorityQueue} = require('@datastructures-js/priority-queue');
    const minHeap = new MinPriorityQueue({compare: (first, second) => first.distanceFromStart - second.distanceFromStart});
    minHeap.enqueue(new Point(startID, 0));

    const minDistance = new Array(this.numberOfNodes).fill(this.INFINITY_POINT);
    minDistance[startID] = 0;

    while (!minHeap.isEmpty()) {
        const current = minHeap.dequeue();
        if (this.markedAsBoolean[current.ID]) {
            return current.distanceFromStart;
        }

        for (let next of this.directedGraph[current.ID].keys()) {
            if (minDistance[next] > current.distanceFromStart + this.directedGraph[current.ID].get(next)) {
                minDistance[next] = current.distanceFromStart + this.directedGraph[current.ID].get(next);
                minHeap.enqueue(new Point(next, minDistance[next]));
            }
        }
    }

    return this.NO_PATH_FOUND;
}

/**
 * @param {number[][]} edges
 * @return {Map<number,number>[]}
 */
function createDirectedGraph(edges) {
    const graph = new Array(this.numberOfNodes);
    for (let nodeID = 0; nodeID < this.numberOfNodes; ++nodeID) {
        graph[nodeID] = new Map();
    }

    for (let edge of edges) {
        let from = edge[0];
        let to = edge[1];
        let distance = edge[2];

        if (graph[from].has(to) && graph[from].get(to) < distance) {
            distance = graph[from].get(to);
        }
        graph[from].set(to, distance);
    }
    return graph;
}

/**
 * @param {number[]} markedID
 * @return {boolean[]}
 */
function createArrayMarkedAsBoolean(markedID) {
    const marked = new Array(this.numberOfNodes).fill(false);
    for (let node of markedID) {
        marked[node] = true;
    }
    return marked;
}
```
```TypeScript []
function minimumDistance(numberOfNodes: number, edges: number[][], startID: number, markedID: number[]): number {
    this.INFINITY_POINT = Number.POSITIVE_INFINITY;
    this.NO_PATH_FOUND = -1;

    this.numberOfNodes = numberOfNodes;
    this.directedGraph = createDirectedGraph(edges);
    this.markedAsBoolean = createArrayMarkedAsBoolean(markedID);

    return findShortestPathWithDijkstraSearch(startID);
};

function Point(ID: number, distanceFromStart: number) {
    this.ID = ID;
    this.distanceFromStart = distanceFromStart;
}

function findShortestPathWithDijkstraSearch(startID) {

    const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
    const minHeap = new MinPriorityQueue({ compare: (first, second) => first.distanceFromStart - second.distanceFromStart });
    minHeap.enqueue(new Point(startID, 0));

    const minDistance = new Array(this.numberOfNodes).fill(this.INFINITY_POINT);
    minDistance[startID] = 0;

    while (!minHeap.isEmpty()) {
        const current = minHeap.dequeue();
        if (this.markedAsBoolean[current.ID]) {
            return current.distanceFromStart;
        }

        for (let next of this.directedGraph[current.ID].keys()) {
            if (minDistance[next] > current.distanceFromStart + this.directedGraph[current.ID].get(next)) {
                minDistance[next] = current.distanceFromStart + this.directedGraph[current.ID].get(next);
                minHeap.enqueue(new Point(next, minDistance[next]));
            }
        }
    }

    return this.NO_PATH_FOUND;
}

function createDirectedGraph(edges: number[][]): Map<number, number>[] {
    const graph: Map<number, number>[] = new Array(this.numberOfNodes);
    for (let nodeID = 0; nodeID < this.numberOfNodes; ++nodeID) {
        graph[nodeID] = new Map();
    }

    for (let edge of edges) {
        let from = edge[0];
        let to = edge[1];
        let distance = edge[2];

        if (graph[from].has(to) && graph[from].get(to) < distance) {
            distance = graph[from].get(to);
        }
        graph[from].set(to, distance);
    }
    return graph;
}

function createArrayMarkedAsBoolean(markedID: number[]): boolean[] {
    const marked: boolean[] = new Array(this.numberOfNodes).fill(false);
    for (let node of markedID) {
        marked[node] = true;
    }
    return marked;
}
```
```C++ []
#include <span>
#include <queue>
#include <limits>
#include <vector>
#include <unordered_map>
using namespace std;

class Solution {

struct Point {
        int ID{};
        int distanceFromStart{};
        Point() = default;
        Point(int ID, int distanceFromStart) : ID{ ID }, distanceFromStart{ distanceFromStart } {}
    };

    struct ComparatorPoint {
        auto operator()(const Point& first, const Point& second) const {
            return first.distanceFromStart > second.distanceFromStart;
        }
    };

    static constexpr int INFINITY_POINT = numeric_limits<int>::max();
    static constexpr int NO_PATH_FOUND = -1;

    int numberOfNodes{};
    vector<bool> markedAsBoolean;
    vector<unordered_map<int, int>> directedGraph;

public:
    int minimumDistance(int numberOfNodes, const vector<vector<int>>& edges, int startID, const vector<int>& markedID) {
        this->numberOfNodes = numberOfNodes;
        directedGraph = createDirectedGraph(edges);
        markedAsBoolean = createArrayMarkedAsBoolean(markedID);

        return findShortestPathWithDijkstraSearch(startID);
    }

private:
    int findShortestPathWithDijkstraSearch(int startID) {
        priority_queue<Point, vector<Point>, ComparatorPoint> minHeap;
        minHeap.emplace(startID, 0);

        vector<int> minDistance(numberOfNodes, INFINITY_POINT);
        minDistance[startID] = 0;

        while (!minHeap.empty()) {
            Point current = minHeap.top();
            minHeap.pop();
            if (markedAsBoolean[current.ID]) {
                return current.distanceFromStart;
            }

            for (const auto& [nextID, distance] : directedGraph[current.ID]) {
                if (minDistance[nextID] >
                    current.distanceFromStart + distance) {
                    minDistance[nextID] = current.distanceFromStart + distance;
                    minHeap.emplace(nextID, minDistance[nextID]);
                }
            }
        }

        return NO_PATH_FOUND;
    }

    vector<unordered_map<int, int>> createDirectedGraph(span<const vector<int>> edges) const {
        vector<unordered_map<int, int>> graph(numberOfNodes);

        for (const auto& edge : edges) {
            int from = edge[0];
            int to = edge[1];
            int distance = edge[2];

            if (graph[from].contains(to) && graph[from][to] < distance) {
                distance = graph[from][to];
            }
            graph[from][to] = distance;
        }

        return graph;
    }

    vector<bool> createArrayMarkedAsBoolean(span<const int> markedID) const {
        vector<bool> marked(numberOfNodes);
        for (const auto& node : markedID) {
            marked[node] = true;
        }
        return marked;
    }
};
```
```C# []
using System;
using System.Collections.Generic;

public class Solution
{
    private sealed record Point(int ID, int distanceFromStart) {}

    private static readonly int INFINITY_POINT = int.MaxValue;
    private static readonly int NO_PATH_FOUND = -1;

    private int numberOfNodes;
    private bool[]? markedAsBoolean;
    private Dictionary<int, int>[]? directedGraph;

    public int MinimumDistance(int numberOfNodes, IList<IList<int>> edges, int startID, int[] markedID)
    {
        this.numberOfNodes = numberOfNodes;
        this.directedGraph = CreateDirectedGraph(edges);
        this.markedAsBoolean = CreateArrayMarkedAsBoolean(markedID);

        return FindShortestPathWithDijkstraSearch(startID);
    }

    private int FindShortestPathWithDijkstraSearch(int startID)
    {
        Comparer<int> comparator = Comparer<int>.Create((first, second) => first.CompareTo(second));
        PriorityQueue<Point, int> minHeap = new PriorityQueue<Point, int>(comparator);
        minHeap.Enqueue(new Point(startID, 0), 0);

        int[] minDistance = new int[numberOfNodes];
        Array.Fill(minDistance, INFINITY_POINT);
        minDistance[startID] = 0;

        while (minHeap.Count > 0)
        {
            Point current = minHeap.Dequeue();
            if (markedAsBoolean![current.ID])
            {
                return current.distanceFromStart;
            }

            foreach (int next in directedGraph![current.ID].Keys)
            {
                if (minDistance[next] > current.distanceFromStart + directedGraph![current.ID][next])
                {
                    minDistance[next] = current.distanceFromStart + directedGraph![current.ID][next];
                    minHeap.Enqueue(new Point(next, minDistance[next]), minDistance[next]);
                }
            }
        }

        return NO_PATH_FOUND;
    }

    private Dictionary<int, int>[] CreateDirectedGraph(IList<IList<int>> edges)
    {
        var graph = new Dictionary<int, int>[numberOfNodes];
        for (int nodeID = 0; nodeID < numberOfNodes; ++nodeID)
        {
            graph[nodeID] = new Dictionary<int, int>();
        }

        foreach (IList<int> edge in edges)
        {
            int from = edge[0];
            int to = edge[1];
            int distance = edge[2];

            if (graph[from].ContainsKey(to) && graph[from][to] < distance)
            {
                distance = graph[from][to];
            }
            graph[from][to] = distance;
        }
        return graph;
    }

    private bool[] CreateArrayMarkedAsBoolean(int[] markedID)
    {
        bool[] marked = new bool[numberOfNodes];
        foreach (int node in markedID)
        {
            marked[node] = true;
        }
        return marked;
    }
}
```
```Kotlin []
import java.util.PriorityQueue
import java.util.Arrays

class Solution {

    private data class Point(val ID: Int, val distanceFromStart: Int) {}

    companion object {
        const val INFINITY_POINT = Int.MAX_VALUE
        const val NO_PATH_FOUND = -1
    }

    private var numberOfNodes: Int = 0
    private lateinit var markedAsBoolean: BooleanArray
    private lateinit var directedGraph: List<HashMap<Int, Int>>

    fun minimumDistance(numberOfNodes: Int, edges: List<List<Int>>, startID: Int, markedID: IntArray): Int {
        this.numberOfNodes = numberOfNodes
        this.directedGraph = createDirectedGraph(edges)
        this.markedAsBoolean = createArrayMarkedAsBoolean(markedID)

        return findShortestPathWithDijkstraSearch(startID)
    }


    private fun findShortestPathWithDijkstraSearch(startID: Int): Int {
        val minHeap = PriorityQueue<Point> { first, second -> first.distanceFromStart - second.distanceFromStart }
        minHeap.add(Point(startID, 0))

        val minDistance = IntArray(numberOfNodes)
        Arrays.fill(minDistance, INFINITY_POINT)
        minDistance[startID] = 0

        while (!minHeap.isEmpty()) {
            val current = minHeap.poll()
            if (markedAsBoolean[current.ID]) {
                return current.distanceFromStart
            }

            for (next in directedGraph[current.ID].keys) {
                if (minDistance[next] > current.distanceFromStart + directedGraph[current.ID][next]!!) {
                    minDistance[next] = current.distanceFromStart + directedGraph[current.ID][next]!!
                    minHeap.add(Point(next, minDistance[next]))
                }
            }
        }

        return NO_PATH_FOUND
    }


    private fun createDirectedGraph(edges: List<List<Int>>): ArrayList<HashMap<Int, Int>> {
        val graph = ArrayList<HashMap<Int, Int>>(numberOfNodes)
        for (nodeID in 0..<numberOfNodes) {
            graph.add(HashMap<Int, Int>())
        }

        for (edge in edges) {
            val from = edge[0]
            val to = edge[1]
            var distance = edge[2]

            if (graph[from].containsKey(to) && graph[from][to]!! < distance) {
                distance = graph[from][to]!!
            }
            graph[from][to] = distance
        }
        return graph
    }

    private fun createArrayMarkedAsBoolean(markedID: IntArray): BooleanArray {
        val marked = BooleanArray(numberOfNodes)
        for (node in markedID) {
            marked[node] = true
        }
        return marked
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
}

var INFINITY_POINT = math.MaxInt
var NO_PATH_FOUND = -1

var numberOfNodes = 0
var markedAsBoolean []bool
var directedGraph []map[int]int

func minimumDistance(totalNodes int, edges [][]int, startID int, markedID []int) int {
    numberOfNodes = totalNodes
    directedGraph = createDirectedGraph(edges)
    markedAsBoolean = createArrayMarkedAsBoolean(markedID)

    return findShortestPathWithDijkstraSearch(startID)
}

func findShortestPathWithDijkstraSearch(startID int) int {
    minHeap := make(PriorityQueue, 0)
    item := &Item{
        value:    Point{startID, 0},
        priority: 0,
    }
    heap.Push(&minHeap, item)

    var minDistance = make([]int, numberOfNodes)
    for nodeId := 0; nodeId < numberOfNodes; nodeId++ {
        minDistance[nodeId] = INFINITY_POINT
    }
    minDistance[startID] = 0

    for minHeap.Len() > 0 {
        var current = heap.Pop(&minHeap).(*Item).value.(Point)
        if markedAsBoolean[current.ID] {
            return current.distanceFromStart
        }

        for next, edgeDistance := range directedGraph[current.ID] {
            if minDistance[next] > current.distanceFromStart+edgeDistance {
                minDistance[next] = current.distanceFromStart + edgeDistance
                item := &Item{
                    value:    Point{next, minDistance[next]},
                    priority: minDistance[next],
                }
                heap.Push(&minHeap, item)
            }
        }
    }

    return NO_PATH_FOUND
}

func createDirectedGraph(edges [][]int) []map[int]int {
    var graph = make([]map[int]int, numberOfNodes)
    for nodeID := 0; nodeID < numberOfNodes; nodeID++ {
        graph[nodeID] = map[int]int{}
    }

    for _, edge := range edges {
        from := edge[0]
        to := edge[1]
        distance := edge[2]

        if _, contains := graph[from][to]; contains && graph[from][to] < distance {
            distance = graph[from][to]
        }
        graph[from][to] = distance
    }
    return graph
}

func createArrayMarkedAsBoolean(markedID []int) []bool {
    marked := make([]bool, numberOfNodes)
    for _, node := range markedID {
        marked[node] = true
    }
    return marked
}

type Item struct {
    value    any
    priority int
    index    int
}

type PriorityQueue []*Item

func (pq PriorityQueue) Len() int {
    return len(pq)
}

func (pq PriorityQueue) Less(first int, second int) bool {
    return pq[first].priority < pq[second].priority
}

func (pq PriorityQueue) Swap(first int, second int) {
    pq[first], pq[second] = pq[second], pq[first]
    pq[first].index = first
    pq[second].index = second
}

func (pq *PriorityQueue) Push(object any) {
    length := len(*pq)
    item := object.(*Item)
    item.index = length
    *pq = append(*pq, item)
}

func (pq *PriorityQueue) Pop() any {
    pqBeforePop := *pq
    length := len(pqBeforePop)

    item := pqBeforePop[length-1]
    pqBeforePop[length-1] = nil

    item.index = -1
    *pq = pqBeforePop[0 : length-1]

    return item
}
```