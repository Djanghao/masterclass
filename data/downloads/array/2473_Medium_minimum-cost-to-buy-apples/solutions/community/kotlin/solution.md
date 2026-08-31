# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-buy-apples/solutions/5374446/](https://leetcode.com/problems/minimum-cost-to-buy-apples/solutions/5374446/)

---

```Java []
import java.util.ArrayList;
import java.util.List;
import java.util.PriorityQueue;

public class Solution {

    private record Road(int toCityID, int cost) {}
    private record City(int ID, long costFromStart) {}

    private int numberOfCities;
    private int multiplierForReturnJourney;

    public long[] minCost(int numberOfCities, int[][] roads, int[] appleCost, int multiplierForReturnJourney) {
        this.numberOfCities = numberOfCities;
        this.multiplierForReturnJourney = multiplierForReturnJourney;
        List<Road>[] undirectedGraph = createUndirectedGraph(roads);
        return findMinCostForAllApplesByMultisourceDijkstraSearch(undirectedGraph, appleCost);
    }

    private long[] findMinCostForAllApplesByMultisourceDijkstraSearch(List<Road>[] undirectedGraph, int[] appleCost) {
        PriorityQueue<City> minHeapCities = createMinHeapCities(appleCost);
        long[] minAppleCost = createArrayMinAppleCost(appleCost);

        while (!minHeapCities.isEmpty()) {

            City city = minHeapCities.poll();
            if (city.costFromStart > minAppleCost[city.ID]) {
                continue;
            }

            for (Road road : undirectedGraph[city.ID]) {
                long totalAppleCost = calculateTotalAppleCost(city, road);

                if (minAppleCost[road.toCityID] > totalAppleCost) {
                    minAppleCost[road.toCityID] = totalAppleCost;
                    minHeapCities.add(new City(road.toCityID, minAppleCost[road.toCityID]));
                }
            }
        }
        return minAppleCost;
    }

    private List<Road>[] createUndirectedGraph(int[][] roads) {
        List<Road>[] undirectedGraph = new ArrayList[numberOfCities];
        for (int i = 0; i < numberOfCities; ++i) {
            undirectedGraph[i] = new ArrayList<>();
        }

        for (int[] road : roads) {
            // road[0] - 1 and road[1] - 1
            // transition from one-based to zero-based city IDs
            int from = road[0] - 1;
            int to = road[1] - 1;
            int cost = road[2];
            undirectedGraph[from].add(new Road(to, cost));
            undirectedGraph[to].add(new Road(from, cost));
        }
        return undirectedGraph;
    }

    private PriorityQueue<City> createMinHeapCities(int[] appleCost) {
        PriorityQueue<City> minHeapCities = new PriorityQueue<>((x, y) -> Long.compare(x.costFromStart, y.costFromStart));
        for (int i = 0; i < numberOfCities; ++i) {
            minHeapCities.add(new City(i, appleCost[i]));
        }
        return minHeapCities;
    }

    private long[] createArrayMinAppleCost(int[] appleCost) {
        long[] minCostPaths = new long[numberOfCities];
        for (int i = 0; i < numberOfCities; ++i) {
            minCostPaths[i] = appleCost[i];
        }
        return minCostPaths;
    }

    private long calculateTotalAppleCost(City city, Road road) {
        return city.costFromStart + road.cost * (1 + multiplierForReturnJourney);
    }
}
```
```JavaScript []
// const {MinPriorityQueue} = require('@datastructures-js/priority-queue');
// when running the code on leetcode.com, the line above should be commented out
// because it is automatically included in the Solution file on leetcode.com

/**
 * @param {number} numberOfCities
 * @param {number[][]} roads
 * @param {number[]} appleCost
 * @param {number} multiplierForReturnJourney
 * @return {number[]}
 */
var minCost = function (numberOfCities, roads, appleCost, multiplierForReturnJourney) {
    this.numberOfCities = numberOfCities;
    this.multiplierForReturnJourney = multiplierForReturnJourney;
    const undirectedGraph = createUndirectedGraph(roads);
    return findMinCostForAllApplesByMultisourceDijkstraSearch(undirectedGraph, appleCost);
};

/**
 * @param {number} toCityID
 * @param {number} cost
 */
function Road(toCityID, cost) {
    this.toCityID = toCityID;
    this.cost = cost;
}

/**
 * @param {number} ID
 * @param {number} costFromStart
 */
function City(ID, costFromStart) {
    this.ID = ID;
    this.costFromStart = costFromStart;
}

/**
 * @param {Road[][]} undirectedGraph
 * @param {number[]} appleCost
 * @return {number[]}
 */
function findMinCostForAllApplesByMultisourceDijkstraSearch(undirectedGraph, appleCost) {
    const minHeapCities = createMinHeapCities(appleCost);
    const minAppleCost = createArrayMinAppleCost(appleCost);

    while (!minHeapCities.isEmpty()) {

        const city = minHeapCities.dequeue();
        if (city.costFromStart > minAppleCost[city.ID]) {
            continue;
        }

        for (let road of undirectedGraph[city.ID]) {
            const totalAppleCost = calculateTotalAppleCost(city, road);
            if (minAppleCost[road.toCityID] > totalAppleCost) {
                minAppleCost[road.toCityID] = totalAppleCost;
                minHeapCities.enqueue(new City(road.toCityID, minAppleCost[road.toCityID]));
            }
        }
    }
    return minAppleCost;
}

/**
 * @param {number[][]} roads
 * @return {Road[][]}
 */
function createUndirectedGraph(roads) {
    const undirectedGraph = Array.from(new Array(this.numberOfCities), () => new Array());

    for (let [from, to, cost] of roads) {
        // from - 1 and to - 1
        // transition from one-based to zero-based city IDs
        undirectedGraph[from - 1].push(new Road(to - 1, cost));
        undirectedGraph[to - 1].push(new Road(from - 1, cost));
    }
    return undirectedGraph;
}

/**
 * @param {number[]} appleCost
 * @return {MinPriorityQueue<City>}
 */
function createMinHeapCities(appleCost) {
    const minHeapCities = new MinPriorityQueue({compare: (x, y) => x.costFromStart - y.costFromStart});
    for (let i = 0; i < this.numberOfCities; ++i) {
        minHeapCities.enqueue(new City(i, appleCost[i]));
    }
    return minHeapCities;
}

/** 
 * @param {number[]} appleCost
 * @return {number[]}
 */
function createArrayMinAppleCost(appleCost) {
    const minCostPaths = new Array(this.numberOfCities);
    for (let i = 0; i < this.numberOfCities; ++i) {
        minCostPaths[i] = appleCost[i];
    }
    return minCostPaths;
}

/**
 * @param {City} city
 * @param {Road} road
 * @return {number}
 */
function calculateTotalAppleCost(city, road) {
    return city.costFromStart + road.cost * (1 + this.multiplierForReturnJourney);
}
```
```TypeScript []
// const {MinPriorityQueue} = require('@datastructures-js/priority-queue');
// when running the code on leetcode.com, the line above should be commented out
// because it is automatically included in the Solution file on leetcode.com

function minCost(numberOfCities: number, roads: number[][], appleCost: number[], multiplierForReturnJourney: number): number[] {
    this.numberOfCities = numberOfCities;
    this.multiplierForReturnJourney = multiplierForReturnJourney;
    const undirectedGraph = createUndirectedGraph(roads);
    return findMinCostForAllApplesByMultisourceDijkstraSearch(undirectedGraph, appleCost);
};

class Road {
    toCityID: number;
    cost: number;

    constructor(toCityID: number, cost: number) {
        this.toCityID = toCityID;
        this.cost = cost;
    }
}

class City {
    ID: number;
    costFromStart: number;

    constructor(ID: number, costFromStart: number) {
        this.ID = ID;
        this.costFromStart = costFromStart;
    }
}

function findMinCostForAllApplesByMultisourceDijkstraSearch(undirectedGraph: Road[][], appleCost: number[]): number[] {
    const minHeapCities = createMinHeapCities(appleCost);
    const minAppleCost = createArrayMinAppleCost(appleCost);

    while (!minHeapCities.isEmpty()) {

        const city = minHeapCities.dequeue();
        if (city.costFromStart > minAppleCost[city.ID]) {
            continue;
        }

        for (let road of undirectedGraph[city.ID]) {
            const totalAppleCost = calculateTotalAppleCost(city, road);
            if (minAppleCost[road.toCityID] > totalAppleCost) {
                minAppleCost[road.toCityID] = totalAppleCost;
                minHeapCities.enqueue(new City(road.toCityID, minAppleCost[road.toCityID]));
            }
        }
    }
    return minAppleCost;
}

function createUndirectedGraph(roads: number[][]): Road[][] {
    const undirectedGraph = Array.from(new Array(this.numberOfCities), () => new Array());

    for (let [from, to, cost] of roads) {
        // from - 1 and to - 1
        // transition from one-based to zero-based city IDs
        undirectedGraph[from - 1].push(new Road(to - 1, cost));
        undirectedGraph[to - 1].push(new Road(from - 1, cost));
    }
    return undirectedGraph;
}

function createMinHeapCities(appleCost: number[]): typeof MinPriorityQueue {
    const minHeapCities = new MinPriorityQueue({ compare: (x: City, y: City) => x.costFromStart - y.costFromStart });
    for (let i = 0; i < this.numberOfCities; ++i) {
        minHeapCities.enqueue(new City(i, appleCost[i]));
    }
    return minHeapCities;
}

function createArrayMinAppleCost(appleCost: number[]): number[] {
    const minCostPaths = new Array(this.numberOfCities);
    for (let i = 0; i < this.numberOfCities; ++i) {
        minCostPaths[i] = appleCost[i];
    }
    return minCostPaths;
}

function calculateTotalAppleCost(city: City, road: Road): number {
    return city.costFromStart + road.cost * (1 + this.multiplierForReturnJourney);
}
```
```C++ []
#include <span>
#include <queue>
#include <vector>
using namespace std;

class Solution {

    struct Road {
        int toCityID = 0;
        int cost = 0;

        Road(int toCityID, int cost) : toCityID{ toCityID }, cost{ cost } {}

        Road() = default;
        ~Road() = default;
    };

    struct City {
        int ID = 0;
        long long costFromStart = 0;

        City(int ID, long long costFromStart) : ID{ ID }, costFromStart{ costFromStart } {}

        City() = default;
        ~City() = default;
    };

    struct CompareCities {
        bool operator()(const City& x, const City& y)const {
            return x.costFromStart > y.costFromStart;
        }
    };

    int numberOfCities = 0;
    int multiplierForReturnJourney = 0;

    using MinHeapCities = priority_queue<City, vector<City>, CompareCities>;
    using UndirectedGraph = vector<vector<Road>>;

public:
    vector<long long> minCost(int numberOfCities, const vector<vector<int>>& roads, const vector<int>& appleCost, int multiplierForReturnJourney) {
        this->numberOfCities = numberOfCities;
        this->multiplierForReturnJourney = multiplierForReturnJourney;
        UndirectedGraph undirectedGraph = createUndirectedGraph(roads);
        return findMinCostForAllApplesByMultisourceDijkstraSearch(undirectedGraph, appleCost);
    }

private:
    vector<long long> findMinCostForAllApplesByMultisourceDijkstraSearch(const UndirectedGraph& undirectedGraph, span<const int> appleCost) const {
        MinHeapCities minHeapCities = createMinHeapCities(appleCost);
        vector<long long> minAppleCost = createVectorMinAppleCost(appleCost);

        while (!minHeapCities.empty()) {

            City city = minHeapCities.top();
            minHeapCities.pop();

            if (city.costFromStart > minAppleCost[city.ID]) {
                continue;
            }

            for (Road road : undirectedGraph[city.ID]) {
                long long totalAppleCost = calculateTotalAppleCost(city, road);

                if (minAppleCost[road.toCityID] > totalAppleCost) {
                    minAppleCost[road.toCityID] = totalAppleCost;
                    minHeapCities.emplace(road.toCityID, minAppleCost[road.toCityID]);
                }
            }
        }
        return minAppleCost;
    }

    UndirectedGraph createUndirectedGraph(span<const vector<int>> roads) const {
        UndirectedGraph undirectedGraph(numberOfCities, vector<Road>());

        for (const auto& road : roads) {
            // road[0] - 1 and road[1] - 1
            // transition from one-based to zero-based city IDs
            int from = road[0] - 1;
            int to = road[1] - 1;
            int cost = road[2];
            undirectedGraph[from].emplace_back(to, cost);
            undirectedGraph[to].emplace_back(from, cost);
        }
        return undirectedGraph;
    }

    MinHeapCities createMinHeapCities(span<const int> appleCost) const {
        MinHeapCities minHeapCities;
        for (int i = 0; i < numberOfCities; ++i) {
            minHeapCities.emplace(i, appleCost[i]);
        }
        return minHeapCities;
    }

    vector<long long> createVectorMinAppleCost(span<const int> appleCost) const {
        vector<long long> minCostPaths(numberOfCities);
        for (int i = 0; i < numberOfCities; ++i) {
            minCostPaths[i] = appleCost[i];
        }
        return minCostPaths;
    }

    long long calculateTotalAppleCost(const City& city, const Road& road) const {
        return city.costFromStart + road.cost * (1 + multiplierForReturnJourney);
    }
};
```
```C# []
using System;
using System.Collections.Generic;

public class Solution
{
    private sealed record Road(int toCityID, int cost) { }
    private sealed record City(int ID, long costFromStart) { }

    private int numberOfCities;
    private int multiplierForReturnJourney;

    public long[] MinCost(int numberOfCities, int[][] roads, int[] appleCost, int multiplierForReturnJourney)
    {
        this.numberOfCities = numberOfCities;
        this.multiplierForReturnJourney = multiplierForReturnJourney;
        IList<Road>[] undirectedGraph = CreateUndirectedGraph(roads);
        return FindMinCostForAllApplesByMultisourceDijkstraSearch(undirectedGraph, appleCost);
    }

    private long[] FindMinCostForAllApplesByMultisourceDijkstraSearch(IList<Road>[] undirectedGraph, int[] appleCost)
    {
        PriorityQueue<City, long> minHeapCities = CreateMinHeapCities(appleCost);
        long[] minAppleCost = CreateArrayMinAppleCost(appleCost);

        while (minHeapCities.Count > 0)
        {
            City city = minHeapCities.Dequeue();
            if (city.costFromStart > minAppleCost[city.ID])
            {
                continue;
            }

            foreach (Road road in undirectedGraph[city.ID])
            {
                long totalAppleCost = CalculateTotalAppleCost(city, road);

                if (minAppleCost[road.toCityID] > totalAppleCost)
                {
                    minAppleCost[road.toCityID] = totalAppleCost;
                    minHeapCities.Enqueue(new City(road.toCityID, minAppleCost[road.toCityID]), minAppleCost[road.toCityID]);
                }
            }
        }
        return minAppleCost;
    }

    private IList<Road>[] CreateUndirectedGraph(int[][] roads)
    {
        IList<Road>[] undirectedGraph = new List<Road>[numberOfCities];
        for (int i = 0; i < numberOfCities; ++i)
        {
            undirectedGraph[i] = new List<Road>();
        }

        foreach (int[] road in roads)
        {
            // road[0] - 1 and road[1] - 1
            // transition from one-based to zero-based city IDs
            int from = road[0] - 1;
            int to = road[1] - 1;
            int cost = road[2];
            undirectedGraph[from].Add(new Road(to, cost));
            undirectedGraph[to].Add(new Road(from, cost));
        }
        return undirectedGraph;
    }

    private PriorityQueue<City, long> CreateMinHeapCities(int[] appleCost)
    {
        Comparer<long> compareDistanceFromStart = Comparer<long>.Create((x, y) => x.CompareTo(y));
        PriorityQueue<City, long> minHeapCities = new PriorityQueue<City, long>(compareDistanceFromStart);
        for (int i = 0; i < numberOfCities; ++i)
        {
            minHeapCities.Enqueue(new City(i, appleCost[i]), appleCost[i]);
        }
        return minHeapCities;
    }

    private long[] CreateArrayMinAppleCost(int[] appleCost)
    {
        long[] minCostPaths = new long[numberOfCities];
        for (int i = 0; i < numberOfCities; ++i)
        {
            minCostPaths[i] = appleCost[i];
        }
        return minCostPaths;
    }

    private long CalculateTotalAppleCost(City city, Road road)
    {
        return city.costFromStart + road.cost * (1 + multiplierForReturnJourney);
    }
}
```
```Kotlin []

import java.util.PriorityQueue

class Solution {

    private data class Road(val toCityID: Int, val cost: Int) {}
    private data class City(val ID: Int, val costFromStart: Long) {}

    private var numberOfCities = 0
    private var multiplierForReturnJourney = 0

    fun minCost(numberOfCities: Int, roads: Array<IntArray>, appleCost: IntArray, multiplierForReturnJourney: Int): LongArray {
        this.numberOfCities = numberOfCities
        this.multiplierForReturnJourney = multiplierForReturnJourney
        val undirectedGraph = createUndirectedGraph(roads)
        return findMinCostForAllApplesByMultisourceDijkstraSearch(undirectedGraph, appleCost)
    }

    private fun findMinCostForAllApplesByMultisourceDijkstraSearch(undirectedGraph: Array<ArrayList<Road>>, appleCost: IntArray): LongArray {
        val minHeapCities = createMinHeapCities(appleCost)
        val minAppleCost = createArrayMinAppleCost(appleCost)

        while (!minHeapCities.isEmpty()) {

            val city = minHeapCities.poll()
            if (city.costFromStart > minAppleCost[city.ID]) {
                continue
            }

            for (road in undirectedGraph[city.ID]) {
                val totalAppleCost = calculateTotalAppleCost(city, road)

                if (minAppleCost[road.toCityID] > totalAppleCost) {
                    minAppleCost[road.toCityID] = totalAppleCost
                    minHeapCities.add(City(road.toCityID, minAppleCost[road.toCityID]))
                }
            }
        }
        return minAppleCost
    }

    private fun createUndirectedGraph(roads: Array<IntArray>): Array<ArrayList<Road>> {
        val undirectedGraph = Array<ArrayList<Road>>(numberOfCities) { ArrayList<Road>() }

        for ((from, to, cost) in roads) {
            // from - 1 and to - 1
            // transition from one-based to zero-based city IDs
            undirectedGraph[from - 1].add(Road(to - 1, cost))
            undirectedGraph[to - 1].add(Road(from - 1, cost))
        }
        return undirectedGraph
    }

    private fun createMinHeapCities(appleCost: IntArray): PriorityQueue<City> {
        val minHeapCities = PriorityQueue<City> { x, y -> x.costFromStart.compareTo(y.costFromStart) }
        for (i in 0..<numberOfCities) {
            minHeapCities.add(City(i, appleCost[i].toLong()))
        }
        return minHeapCities
    }

    private fun createArrayMinAppleCost(appleCost: IntArray): LongArray {
        val minCostPaths = LongArray(numberOfCities)
        for (i in 0..<numberOfCities) {
            minCostPaths[i] = appleCost[i].toLong()
        }
        return minCostPaths
    }

    private fun calculateTotalAppleCost(city: City, road: Road): Long {
        return city.costFromStart + road.cost * (1 + multiplierForReturnJourney)
    }
}
```
```Go []
package main

import (
    "container/heap"
    "fmt"
)

var numberOfCities = 0
var multiplierForReturnJourney = 0

func minCost(numberOfCities_ int, roads [][]int, appleCost []int, multiplierForReturnJourney_ int) []int64 {
    numberOfCities = numberOfCities_
    multiplierForReturnJourney = multiplierForReturnJourney_
    undirectedGraph := createUndirectedGraph(&roads)
    return findMinCostForAllApplesByMultisourceDijkstraSearch(&undirectedGraph, &appleCost)
}

type Road struct {
    toCityID int
    cost     int
}

type City struct {
    ID            int
    costFromStart int64
}

func findMinCostForAllApplesByMultisourceDijkstraSearch(undirectedGraph *[][]Road, appleCost *[]int) []int64 {
    minHeapCities := createMinHeapCities(appleCost)
    minAppleCost := createArrayMinAppleCost(appleCost)

    for minHeapCities.Len() > 0 {

        city := heap.Pop(&minHeapCities).(*City)
        if city.costFromStart > minAppleCost[city.ID] {
            continue
        }

        for _, road := range (*undirectedGraph)[city.ID] {
            totalAppleCost := calculateTotalAppleCost(city, &road)

            if minAppleCost[road.toCityID] > totalAppleCost {
                minAppleCost[road.toCityID] = totalAppleCost
                heap.Push(&minHeapCities, &City{road.toCityID, minAppleCost[road.toCityID]})
            }
        }
    }
    return minAppleCost
}

func createUndirectedGraph(roads *[][]int) [][]Road {
    undirectedGraph := make([][]Road, numberOfCities)
    for i := 0; i < numberOfCities; i++ {
        undirectedGraph[i] = make([]Road, 0)
    }

    for _, road := range *roads {
        // road[0] - 1 and road[1] - 1
        // transition from one-based to zero-based city IDs
        from := road[0] - 1
        to := road[1] - 1
        cost := road[2]
        undirectedGraph[from] = append(undirectedGraph[from], Road{to, cost})
        undirectedGraph[to] = append(undirectedGraph[to], Road{from, cost})
    }
    return undirectedGraph
}

func createMinHeapCities(appleCost *[]int) PriorityQueue {
    minHeapCities := make(PriorityQueue, 0)
    for i := 0; i < numberOfCities; i++ {
        minHeapCities = append(minHeapCities, &City{i, int64((*appleCost)[i])})
    }
    return minHeapCities
}

func createArrayMinAppleCost(appleCost *[]int) []int64 {
    minCostPaths := make([]int64, numberOfCities)
    for i := 0; i < numberOfCities; i++ {
        minCostPaths[i] = int64((*appleCost)[i])
    }
    return minCostPaths
}

func calculateTotalAppleCost(city *City, road *Road) int64 {
    return city.costFromStart + int64(road.cost*(1+multiplierForReturnJourney))
}

type PriorityQueue []*City

func (pq PriorityQueue) Len() int {
    return len(pq)
}

func (pq PriorityQueue) Less(first int, second int) bool {
    return pq[first].costFromStart < pq[second].costFromStart
}

func (pq PriorityQueue) Swap(first int, second int) {
    pq[first], pq[second] = pq[second], pq[first]
}

func (pq *PriorityQueue) Push(object any) {
    point := object.(*City)
    *pq = append(*pq, point)
}

func (pq *PriorityQueue) Pop() any {
    length := len(*pq)
    city := (*pq)[length-1]
    (*pq)[length-1] = nil
    *pq = (*pq)[0 : length-1]
    return city
}
```
