# Java | JavaScript | TypeScript | C++ | C# | Kotlin Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/solutions/5060627/](https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/solutions/5060627/)

---

```Java []
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.PriorityQueue;

public class Solution {

    private record Point(int index, int edgeCost){}
    private record Step(int index, int costFromStart, int discounts){}

    private static final int NOT_POSSIBLE_TO_REACH_DESTINATION = -1;
    private List<Point>[] graph;

    public int minimumCost(int numberOfCities, int[][] highways, int discounts) {
        createGraph(numberOfCities, highways);
        return dijkstraSearchForPathWithSmallestCost(numberOfCities, discounts);
    }

    private int dijkstraSearchForPathWithSmallestCost(int numberOfCities, int discounts) {
        PriorityQueue<Step> minHeapForCost = new PriorityQueue<>((x, y) -> x.costFromStart - y.costFromStart);
        minHeapForCost.add(new Step(0, 0, discounts));

        int[][] minCostToCity = new int[numberOfCities][discounts + 1];
        for (int i = 0; i < numberOfCities; ++i) {
            Arrays.fill(minCostToCity[i], Integer.MAX_VALUE);
        }
        minCostToCity[0][discounts] = 0;

        while (!minHeapForCost.isEmpty()) {
            Step current = minHeapForCost.poll();

            if (current.costFromStart > minCostToCity[current.index][current.discounts]) {
                continue;
            }
            if (current.index == numberOfCities - 1) {
                return current.costFromStart;
            }

            for (Point next : graph[current.index]) {

                if (minCostToCity[next.index][current.discounts] > current.costFromStart + next.edgeCost) {
                    minCostToCity[next.index][current.discounts] = current.costFromStart + next.edgeCost;
                    minHeapForCost.add(new Step(next.index, minCostToCity[next.index][current.discounts], current.discounts));
                }
                if (current.discounts > 0
                        && minCostToCity[next.index][current.discounts - 1] > current.costFromStart + next.edgeCost / 2) {
                    minCostToCity[next.index][current.discounts - 1] = current.costFromStart + next.edgeCost / 2;
                    minHeapForCost.add(new Step(next.index, minCostToCity[next.index][current.discounts - 1], current.discounts - 1));
                }
            }
        }
        return NOT_POSSIBLE_TO_REACH_DESTINATION;
    }

    private void createGraph(int numberOfCities, int[][] highways) {
        graph = new List[numberOfCities];
        for (int i = 0; i < numberOfCities; ++i) {
            graph[i] = new ArrayList<>();
        }

        for (int[] highway : highways) {
            int from = highway[0];
            int to = highway[1];
            int toll = highway[2];

            graph[from].add(new Point(to, toll));
            graph[to].add(new Point(from, toll));
        }
    }
}
```
```JavaScript []
/**
 * @param {number} numberOfCities
 * @param {number[][]} highways
 * @param {number} discounts
 * @return {number}
 */
var minimumCost = function (numberOfCities, highways, discounts) {
    this.NOT_POSSIBLE_TO_REACH_DESTINATION = -1;
    this.graph = Array.from(new Array(numberOfCities), () => new Array());
    createGraph(highways);
    return dijkstraSearchForPathWithSmallestCost(numberOfCities, discounts);
};

/**
 * @param {number} index
 * @param {number} edgeCost
 */
function Point(index, edgeCost) {
    this.index = index;
    this.edgeCost = edgeCost;
}

/**
 * @param {number} index
 * @param {number} costFromStart
 * @param {number} discounts
 */
function Step(index, costFromStart, discounts) {
    this.index = index;
    this.costFromStart = costFromStart;
    this.discounts = discounts;
}

/**
 * @param {number} numberOfCities
 * @param {number} discounts
 * @return {number}
 */
function dijkstraSearchForPathWithSmallestCost(numberOfCities, discounts) {
    // PriorityQueue<Step>
    // const {MinPriorityQueue} = require('@datastructures-js/priority-queue');
    const minHeapForCost = new MinPriorityQueue({compare: (x, y) => x.costFromStart - y.costFromStart});
    minHeapForCost.enqueue(new Step(0, 0, discounts));

    const minCostToCity = Array.from(new Array(numberOfCities), () => new Array(discounts + 1).fill(Number.MAX_SAFE_INTEGER));
    minCostToCity[0][discounts] = 0;

    while (!minHeapForCost.isEmpty()) {
        const current = minHeapForCost.dequeue();

        if (current.costFromStart > minCostToCity[current.index][current.discounts]) {
            continue;
        }
        if (current.index === numberOfCities - 1) {
            return current.costFromStart;
        }

        for (let next of this.graph[current.index]) {

            if (minCostToCity[next.index][current.discounts] > current.costFromStart + next.edgeCost) {
                minCostToCity[next.index][current.discounts] = current.costFromStart + next.edgeCost;
                minHeapForCost.enqueue(new Step(next.index, minCostToCity[next.index][current.discounts], current.discounts));
            }
            if (current.discounts > 0
                    && minCostToCity[next.index][current.discounts - 1] > current.costFromStart + Math.floor(next.edgeCost / 2)) {
                minCostToCity[next.index][current.discounts - 1] = current.costFromStart + Math.floor(next.edgeCost / 2);
                minHeapForCost.enqueue(new Step(next.index, minCostToCity[next.index][current.discounts - 1], current.discounts - 1));
            }
        }
    }
    return this.NOT_POSSIBLE_TO_REACH_DESTINATION;
}

/**
 * @param {number[][]} highways
 * @return {void}
 */
function createGraph(highways) {
    for (let [from, to, toll] of highways) {
        this.graph[from].push(new Point(to, toll));
        this.graph[to].push(new Point(from, toll));
    }
}
```
```TypeScript []
function minimumCost(numberOfCities: number, highways: number[][], discounts: number): number {
    this.NOT_POSSIBLE_TO_REACH_DESTINATION = -1;
    this.graph = Array.from(new Array(numberOfCities), () => new Array());
    createGraph(highways);
    return dijkstraSearchForPathWithSmallestCost(numberOfCities, discounts);
};

function Point(index: number, edgeCost: number) {
    this.index = index;
    this.edgeCost = edgeCost;
}

function Step(index: number, costFromStart: number, discounts: number) {
    this.index = index;
    this.costFromStart = costFromStart;
    this.discounts = discounts;
}

function dijkstraSearchForPathWithSmallestCost(numberOfCities: number, discounts: number): number {
    
    // const {MinPriorityQueue} = require('@datastructures-js/priority-queue');
    const minHeapForCost = new MinPriorityQueue({ compare: (x, y) => x.costFromStart - y.costFromStart });
    minHeapForCost.enqueue(new Step(0, 0, discounts));

    const minCostToCity = Array.from(new Array(numberOfCities), () => new Array(discounts + 1).fill(Number.MAX_SAFE_INTEGER));
    minCostToCity[0][discounts] = 0;

    while (!minHeapForCost.isEmpty()) {
        const current = minHeapForCost.dequeue();

        if (current.costFromStart > minCostToCity[current.index][current.discounts]) {
            continue;
        }
        if (current.index === numberOfCities - 1) {
            return current.costFromStart;
        }

        for (let next of this.graph[current.index]) {

            if (minCostToCity[next.index][current.discounts] > current.costFromStart + next.edgeCost) {
                minCostToCity[next.index][current.discounts] = current.costFromStart + next.edgeCost;
                minHeapForCost.enqueue(new Step(next.index, minCostToCity[next.index][current.discounts], current.discounts));
            }
            if (current.discounts > 0
                && minCostToCity[next.index][current.discounts - 1] > current.costFromStart + Math.floor(next.edgeCost / 2)) {
                minCostToCity[next.index][current.discounts - 1] = current.costFromStart + Math.floor(next.edgeCost / 2);
                minHeapForCost.enqueue(new Step(next.index, minCostToCity[next.index][current.discounts - 1], current.discounts - 1));
            }
        }
    }
    return this.NOT_POSSIBLE_TO_REACH_DESTINATION;
}

function createGraph(highways: number[][]): void {
    for (let [from, to, toll] of highways) {
        this.graph[from].push(new Point(to, toll));
        this.graph[to].push(new Point(from, toll));
    }
}
```
```C++ []
#include <span>
#include <queue>
#include <vector>
#include <limits>
using namespace std;

class Solution {

    struct Point {
        size_t index;
        int edgeCost;

        Point() = default;
        Point(size_t index, int edgeCost): index{ index }, edgeCost{ edgeCost }{}
    };

    struct Step {
        size_t index;
        int costFromStart;
        int discounts;

        Step() = default;
        Step(size_t index, int costFromStart, int discounts):
                index{ index }, costFromStart{ costFromStart }, discounts{ discounts }{}
    };

    struct CompareSteps {
        auto operator()(const Step& first, const Step& second) const {
            return first.costFromStart > second.costFromStart;
        }
    };

    static const int NOT_POSSIBLE_TO_REACH_DESTINATION = -1;
    vector<vector<Point>> graph;

public:
    int minimumCost(int numberOfCities, const vector<vector<int>>& highways, int discounts) {
        createGraph(numberOfCities, highways);
        return dijkstraSearchForPathWithSmallestCost(numberOfCities, discounts);
    }

private:
    int dijkstraSearchForPathWithSmallestCost(int numberOfCities, int discounts) const {
        priority_queue<Step, vector<Step>, CompareSteps> minHeapForCost;
        minHeapForCost.emplace(0, 0, discounts);

        vector<vector<int>> minCostToCity
        (numberOfCities, vector<int>(discounts + 1, numeric_limits<int>::max()));
        minCostToCity[0][discounts] = 0;

        while (!minHeapForCost.empty()) {
            Step current = minHeapForCost.top();
            minHeapForCost.pop();

            if (current.costFromStart > minCostToCity[current.index][current.discounts]) {
                continue;
            }
            if (current.index == numberOfCities - 1) {
                return current.costFromStart;
            }

            for (const auto& next : graph[current.index]) {

                if (minCostToCity[next.index][current.discounts] > current.costFromStart + next.edgeCost) {
                    minCostToCity[next.index][current.discounts] = current.costFromStart + next.edgeCost;
                    minHeapForCost.emplace(next.index, minCostToCity[next.index][current.discounts], current.discounts);
                }
                if (current.discounts > 0
                    && minCostToCity[next.index][current.discounts - 1] > current.costFromStart + next.edgeCost / 2) {
                    minCostToCity[next.index][current.discounts - 1] = current.costFromStart + next.edgeCost / 2;
                    minHeapForCost.emplace(next.index, minCostToCity[next.index][current.discounts - 1], current.discounts - 1);
                }
            }
        }
        return NOT_POSSIBLE_TO_REACH_DESTINATION;
    }

    void createGraph(int numberOfCities, span<const vector<int>> highways) {
        graph.resize(numberOfCities);

        for (const auto& highway : highways) {
            int from = highway[0];
            int to = highway[1];
            int toll = highway[2];

            graph[from].emplace_back(to, toll);
            graph[to].emplace_back(from, toll);
        }
    }
};
```
```C# []
using System;
using System.Collections.Generic;

public class Solution
{
    private sealed record Point(int index, int edgeCost) { }
    private sealed record Step(int index, int costFromStart, int discounts) { }

    private static readonly int NOT_POSSIBLE_TO_REACH_DESTINATION = -1;
    private IList<Point>[]? graph;

    public int MinimumCost(int numberOfCities, int[][] highways, int discounts)
    {
        CreateGraph(numberOfCities, highways);
        return DijkstraSearchForPathWithSmallestCost(numberOfCities, discounts);
    }

    private int DijkstraSearchForPathWithSmallestCost(int numberOfCities, int discounts)
    {
        PriorityQueue<Step, int> minHeapForCost = new PriorityQueue<Step, int>();
        minHeapForCost.Enqueue(new Step(0, 0, discounts), 0);

        int[][] minCostToCity = new int[numberOfCities][];
        for (int i = 0; i < numberOfCities; ++i)
        {
            minCostToCity[i] = new int[discounts + 1];
            Array.Fill(minCostToCity[i], int.MaxValue);
        }
        minCostToCity[0][discounts] = 0;

        while (minHeapForCost.Count > 0)
        {
            Step current = minHeapForCost.Dequeue();

            if (current.costFromStart > minCostToCity[current.index][current.discounts])
            {
                continue;
            }
            if (current.index == numberOfCities - 1)
            {
                return current.costFromStart;
            }

            foreach (Point next in graph[current.index])
            {
                if (minCostToCity[next.index][current.discounts] > current.costFromStart + next.edgeCost)
                {
                    minCostToCity[next.index][current.discounts] = current.costFromStart + next.edgeCost;
                    minHeapForCost
                        .Enqueue(new Step(next.index, minCostToCity[next.index][current.discounts], current.discounts),
                        minCostToCity[next.index][current.discounts]);
                }
                if (current.discounts > 0
                        && minCostToCity[next.index][current.discounts - 1] > current.costFromStart + next.edgeCost / 2)
                {
                    minCostToCity[next.index][current.discounts - 1] = current.costFromStart + next.edgeCost / 2;
                    minHeapForCost
                        .Enqueue(new Step(next.index, minCostToCity[next.index][current.discounts - 1], current.discounts - 1),
                        minCostToCity[next.index][current.discounts - 1]);
                }
            }
        }
        return NOT_POSSIBLE_TO_REACH_DESTINATION;
    }

    private void CreateGraph(int numberOfCities, int[][] highways)
    {
        graph = new List<Point>[numberOfCities];
        for (int i = 0; i < numberOfCities; ++i)
        {
            graph[i] = new List<Point>();
        }

        foreach (int[] highway in highways)
        {
            int from = highway[0];
            int to = highway[1];
            int toll = highway[2];

            graph[from].Add(new Point(to, toll));
            graph[to].Add(new Point(from, toll));
        }
    }
}
```
```Kotlin []
import java.util.*

class Solution {

    private data class Point(val index: Int, val edgeCost: Int) {}
    private data class Step(val index: Int, val costFromStart: Int, val discounts: Int) {}

    companion object {
        const val NOT_POSSIBLE_TO_REACH_DESTINATION = -1
    }

    private lateinit var graph: ArrayList<ArrayList<Point>>

    fun minimumCost(numberOfCities: Int, highways: Array<IntArray>, discounts: Int): Int {
        createGraph(numberOfCities, highways)
        return dijkstraSearchForPathWithSmallestCost(numberOfCities, discounts)
    }

    private fun dijkstraSearchForPathWithSmallestCost(numberOfCities: Int, discounts: Int): Int {
        val minHeapForCost = PriorityQueue<Step> { x, y -> x.costFromStart - y.costFromStart }
        minHeapForCost.add(Step(0, 0, discounts))

        val minCostToCity = ArrayList<IntArray>(numberOfCities)
        for (i in 0..<numberOfCities) {
            minCostToCity.add(IntArray(discounts + 1) { Int.MAX_VALUE })
        }
        minCostToCity[0][discounts] = 0

        while (!minHeapForCost.isEmpty()) {
            val current: Step = minHeapForCost.poll()

            if (current.costFromStart > minCostToCity[current.index][current.discounts]) {
                continue
            }
            if (current.index == numberOfCities - 1) {
                return current.costFromStart
            }

            for (next in graph[current.index]) {

                if (minCostToCity[next.index][current.discounts] > current.costFromStart + next.edgeCost) {
                    minCostToCity[next.index][current.discounts] = current.costFromStart + next.edgeCost
                    minHeapForCost.add(
                        Step(
                            next.index,
                            minCostToCity[next.index][current.discounts],
                            current.discounts
                        )
                    )
                }
                if (current.discounts > 0
                    && minCostToCity[next.index][current.discounts - 1] > current.costFromStart + next.edgeCost / 2
                ) {
                    minCostToCity[next.index][current.discounts - 1] = current.costFromStart + next.edgeCost / 2
                    minHeapForCost.add(
                        Step(
                            next.index,
                            minCostToCity[next.index][current.discounts - 1],
                            current.discounts - 1
                        )
                    )
                }
            }
        }
        return NOT_POSSIBLE_TO_REACH_DESTINATION
    }


    private fun createGraph(numberOfCities: Int, highways: Array<IntArray>) {
        graph = ArrayList<ArrayList<Point>>(numberOfCities)
        for (i in 0..<numberOfCities) {
            graph.add(ArrayList<Point>())
        }

        for ((from, to, toll) in highways) {
            graph[from].add(Point(to, toll))
            graph[to].add(Point(from, toll))
        }
    }
}
```