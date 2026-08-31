# Java | JavaScript | TypeScript | C++ | C# | Kotlin Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-visit-disappearing-nodes/solutions/5032882/](https://leetcode.com/problems/minimum-time-to-visit-disappearing-nodes/solutions/5032882/)

---

```Java []
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.PriorityQueue;

public class Solution {

    private record Point(int index, int edgeTime){}
    private record Step(int index, int timeFromSart){}

    private List<Point>[] graph;
    private static final int CAN_NOT_BE_REACHED = -1;

    public int[] minimumTime(int numberOfNodes, int[][] edges, int[] disappearTime) {
        initializeGraph(edges, numberOfNodes);
        return dijkstraSearchForMinTimePath(disappearTime, numberOfNodes);
    }

    private void initializeGraph(int[][] edges, int numberOfNodes) {
        graph = new List[numberOfNodes];
        for (int i = 0; i < numberOfNodes; ++i) {
            graph[i] = new ArrayList<>();
        }

        for (int[] edge : edges) {
            int from = edge[0];
            int to = edge[1];
            int time = edge[2];

            if (from != to) {
                graph[from].add(new Point(to, time));
                graph[to].add(new Point(from, time));
            }
        }
    }

    private int[] dijkstraSearchForMinTimePath(int[] disappearTime, int numberOfNodes) {
        PriorityQueue<Step> minHeap = new PriorityQueue<>((x, y) -> x.timeFromSart - y.timeFromSart);
        minHeap.add(new Step(0, 0));

        int[] minTime = Arrays.copyOf(disappearTime, disappearTime.length);
        minTime[0] = 0;

        while (!minHeap.isEmpty()) {
            Step current = minHeap.poll();
            if (current.timeFromSart > minTime[current.index]) {
                continue;
            }

            for (Point next : graph[current.index]) {
                if (minTime[next.index] > current.timeFromSart + next.edgeTime) {
                    minTime[next.index] = current.timeFromSart + next.edgeTime;
                    minHeap.add(new Step(next.index, minTime[next.index]));
                }
            }
        }

        markUnreachableNodes(minTime, disappearTime, numberOfNodes);
        return minTime;
    }

    private void markUnreachableNodes(int[] minTime, int[] disappearTime, int numberOfNodes) {
        for (int i = 0; i < numberOfNodes; ++i) {
            if (minTime[i] == disappearTime[i]) {
                minTime[i] = CAN_NOT_BE_REACHED;
            }
        }
    }
}
```
```JavaScript []
/**
 * @param {number} numberOfNodes
 * @param {number[][]} edges
 * @param {number[]} disappearTime
 * @return {number[]}
 */
var minimumTime = function (numberOfNodes, edges, disappearTime) {
    this.graph = Array.from(new Array(numberOfNodes), () => new Array());
    this.CAN_NOT_BE_REACHED = -1;

    initializeGraph(edges);
    return dijkstraSearchForMinTimePath(disappearTime, numberOfNodes);
};

/**
 * @param {number} index
 * @param {number} edgeTime
 */
function Point(index, edgeTime) {
    this.index = index;
    this.edgeTime = edgeTime;
}

/**
 * @param {number} index
 * @param {number} timeFromSart
 */
function Step(index, timeFromSart) {
    this.index = index;
    this.timeFromSart = timeFromSart;
}

/**
 * @param {number[][]} edges
 * @return {void}
 */
function initializeGraph(edges) {
    for (let [from, to, time] of edges) {
        if (from !== to) {
            this.graph[from].push(new Point(to, time));
            this.graph[to].push(new Point(from, time));
        }
    }
}

/**
 * @param {number[]} disappearTime
 * @param {number} numberOfNodes
 * @return {number[]}
 */
function dijkstraSearchForMinTimePath(disappearTime, numberOfNodes) {
    // MinPriorityQueue<Step>
    // const {MinPriorityQueue} = require('@datastructures-js/priority-queue');
    const minHeap = new MinPriorityQueue({compare: (x, y) => x.timeFromSart - y.timeFromSart});
    minHeap.enqueue(new Step(0, 0));

    const minTime = Array.from(disappearTime);
    minTime[0] = 0;

    while (!minHeap.isEmpty()) {
        const current = minHeap.dequeue();
        if (current.timeFromSart > minTime[current.index]) {
            continue;
        }

        for (let next of this.graph[current.index]) {
            if (minTime[next.index] > current.timeFromSart + next.edgeTime) {
                minTime[next.index] = current.timeFromSart + next.edgeTime;
                minHeap.enqueue(new Step(next.index, minTime[next.index]));
            }
        }
    }

    markUnreachableNodes(minTime, disappearTime, numberOfNodes);
    return minTime;
}

/**
 * @param {number[]} minTime
 * @param {number[]} disappearTime
 * @param {number} numberOfNodes
 * @return {void}
 */
function markUnreachableNodes(minTime, disappearTime, numberOfNodes) {
    for (let i = 0; i < numberOfNodes; ++i) {
        if (minTime[i] === disappearTime[i]) {
            minTime[i] = this.CAN_NOT_BE_REACHED;
        }
    }
}
```
```TypeScript []
function minimumTime(numberOfNodes: number, edges: number[][], disappearTime: number[]): number[] {
    this.graph = Array.from(new Array(numberOfNodes), () => new Array());
    this.CAN_NOT_BE_REACHED = -1;

    initializeGraph(edges);
    return dijkstraSearchForMinTimePath(disappearTime, numberOfNodes);
};

class Point {
    constructor(public index: number, public edgeTime: number){}
}

class Step {
    constructor(public index: number, public timeFromSart: number){}
}

function initializeGraph(edges: number[][]): void {
    for (let [from, to, time] of edges) {
        if (from !== to) {
            this.graph[from].push(new Point(to, time));
            this.graph[to].push(new Point(from, time));
        }
    }
}

function dijkstraSearchForMinTimePath(disappearTime: number[], numberOfNodes: number): number[] {
    // const {MinPriorityQueue} = require('@datastructures-js/priority-queue');
    const minHeap = new MinPriorityQueue({ compare: (x, y) => x.timeFromSart - y.timeFromSart });
    minHeap.enqueue(new Step(0, 0));

    const minTime: number[] = Array.from(disappearTime);
    minTime[0] = 0;

    while (!minHeap.isEmpty()) {
        const current = minHeap.dequeue();
        if (current.timeFromSart > minTime[current.index]) {
            continue;
        }

        for (let next of this.graph[current.index]) {
            if (minTime[next.index] > current.timeFromSart + next.edgeTime) {
                minTime[next.index] = current.timeFromSart + next.edgeTime;
                minHeap.enqueue(new Step(next.index, minTime[next.index]));
            }
        }
    }

    markUnreachableNodes(minTime, disappearTime, numberOfNodes);
    return minTime;
}


function markUnreachableNodes(minTime: number[], disappearTime: number[], numberOfNodes: number): void {
    for (let i = 0; i < numberOfNodes; ++i) {
        if (minTime[i] === disappearTime[i]) {
            minTime[i] = this.CAN_NOT_BE_REACHED;
        }
    }
}
```
```C++ []
#include <span>
#include <queue>
#include <vector>
using namespace std;

class Solution {

    struct Point {
        size_t index;
        int edgeTime;
        Point() = default;
        Point(size_t index, int edgeTime): index{index}, edgeTime{edgeTime}{}
    };

    struct Step {
        size_t index;
        int timeFromSart;
        Step() = default;
        Step(size_t index, int timeFromSart): index{index}, timeFromSart{timeFromSart}{}
    };

    struct CompareSteps {
        auto operator()(const Step& first, const Step& second)const {
            return first.timeFromSart > second.timeFromSart;
        };
    };

    vector<vector<Point>> graph;
    static const int CAN_NOT_BE_REACHED = -1;


public:
    vector<int> minimumTime(int numberOfNodes, const vector<vector<int>>& edges, const vector<int>& disappearTime) {
        initializeGraph(edges, numberOfNodes);
        return dijkstraSearchForMinTimePath(disappearTime, numberOfNodes);
    }

private:
    void initializeGraph(span<const vector<int>> edges, int numberOfNodes) {
        graph.resize(numberOfNodes);

        for (const auto& edge : edges) {
            int from = edge[0];
            int to = edge[1];
            int time = edge[2];

            if (from != to) {
                graph[from].emplace_back(to, time);
                graph[to].emplace_back(from, time);
            }
        }
    }

    vector<int> dijkstraSearchForMinTimePath(span<const int> disappearTime, int numberOfNodes) const {
        priority_queue<Step, vector<Step>, CompareSteps> minHeap;
        minHeap.emplace(0, 0);

        vector<int>minTime {disappearTime.begin(), disappearTime.end()};
        minTime[0] = 0;

        while (!minHeap.empty()) {
            Step current = minHeap.top();
            minHeap.pop();
            if (current.timeFromSart > minTime[current.index]) {
                continue;
            }

            for (const auto& next : graph[current.index]) {
                if (minTime[next.index] > current.timeFromSart + next.edgeTime) {
                    minTime[next.index] = current.timeFromSart + next.edgeTime;
                    minHeap.emplace(next.index, minTime[next.index]);
                }
            }
        }

        markUnreachableNodes(minTime, disappearTime, numberOfNodes);
        return minTime;
    }

    void markUnreachableNodes(span<int> minTime, span<const int> disappearTime, int numberOfNodes) const {
        for (int i = 0; i < numberOfNodes; ++i) {
            if (minTime[i] == disappearTime[i]) {
                minTime[i] = CAN_NOT_BE_REACHED;
            }
        }
    }
};
```
```C# []
using System;
using System.Collections.Generic;

public class Solution
{
    private sealed record Point(int index, int edgeTime){}
    private sealed record Step(int index, int timeFromSart){}

    private List<Point>[]? Graph;
    private static readonly int CAN_NOT_BE_REACHED = -1;

    public int[] MinimumTime(int numberOfNodes, int[][] edges, int[] disappearTime)
    {
        InitializeGraph(edges, numberOfNodes);
        return DijkstraSearchForMinTimePath(disappearTime, numberOfNodes);
    }

    private void InitializeGraph(int[][] edges, int numberOfNodes)
    {
        Graph = new List<Point>[numberOfNodes];
        for (int i = 0; i < numberOfNodes; ++i)
        {
            Graph[i] = new List<Point>();
        }

        foreach (int[] edge in edges)
        {
            int from = edge[0];
            int to = edge[1];
            int time = edge[2];

            if (from != to)
            {
                Graph[from].Add(new Point(to, time));
                Graph[to].Add(new Point(from, time));
            }
        }
    }

    private int[] DijkstraSearchForMinTimePath(int[] disappearTime, int numberOfNodes)
    {
        PriorityQueue<Step, int> minHeap = new PriorityQueue<Step, int>();
        minHeap.Enqueue(new Step(0, 0), 0);

        int[] minTime = new int[numberOfNodes];
        Array.Copy(disappearTime, minTime, disappearTime.Length);
        minTime[0] = 0;

        while (minHeap.Count > 0)
        {
            Step current = minHeap.Dequeue();
            if (current.timeFromSart > minTime[current.index])
            {
                continue;
            }

            foreach (Point next in Graph[current.index])
            {
                if (minTime[next.index] > current.timeFromSart + next.edgeTime)
                {
                    minTime[next.index] = current.timeFromSart + next.edgeTime;
                    minHeap.Enqueue(new Step(next.index, minTime[next.index]), minTime[next.index]);
                }
            }
        }

        MarkUnreachableNodes(minTime, disappearTime, numberOfNodes);
        return minTime;
    }

    private void MarkUnreachableNodes(int[] minTime, int[] disappearTime, int numberOfNodes)
    {
        for (int i = 0; i < numberOfNodes; ++i)
        {
            if (minTime[i] == disappearTime[i])
            {
                minTime[i] = CAN_NOT_BE_REACHED;
            }
        }
    }
}
```
```Kotlin []
import java.util.*

class Solution {

    data class Point(val index: Int, val edgeTime: Int){}
    data class Step(val index: Int, val timeFromSart: Int){}

    companion object {
        const val CAN_NOT_BE_REACHED = -1
    }

    private var graph = arrayOfNulls<ArrayList<Point>>(0)

    fun minimumTime(numberOfNodes: Int, edges: Array<IntArray>, disappearTime: IntArray): IntArray {
        initializeGraph(edges, numberOfNodes)
        return dijkstraSearchForMinTimePath(disappearTime, numberOfNodes)
    }

    private fun dijkstraSearchForMinTimePath(disappearTime: IntArray, numberOfNodes: Int): IntArray {
        val minHeap = PriorityQueue<Step> { x, y -> x.timeFromSart - y.timeFromSart }
        minHeap.add(Step(0, 0))

        val minTime = disappearTime.copyOf(disappearTime.size)
        minTime[0] = 0

        while (!minHeap.isEmpty()) {
            val current = minHeap.poll()
            if (current.timeFromSart > minTime[current.index]) {
                continue
            }

            for (next in graph[current.index]!!) {
                if (minTime[next.index] > current.timeFromSart + next.edgeTime) {
                    minTime[next.index] = current.timeFromSart + next.edgeTime
                    minHeap.add(Step(next.index, minTime[next.index]))
                }
            }
        }

        markUnreachableNodes(minTime, disappearTime, numberOfNodes)
        return minTime
    }

    private fun markUnreachableNodes(minTime: IntArray, disappearTime: IntArray, numberOfNodes: Int) {
        for (i in 0..<numberOfNodes) {
            if (minTime[i] == disappearTime[i]) {
                minTime[i] = CAN_NOT_BE_REACHED
            }
        }
    }

    private fun initializeGraph(edges: Array<IntArray>, numberOfNodes: Int) {
        graph = arrayOfNulls<ArrayList<Point>>(numberOfNodes)
        for (i in 0..<numberOfNodes) {
            graph[i] = ArrayList<Point>()
        }

        for ((from, to, time) in edges) {
            if (from != to) {
                graph[from]!!.add(Point(to, time))
                graph[to]!!.add(Point(from, time))
            }
        }
    }
}
```