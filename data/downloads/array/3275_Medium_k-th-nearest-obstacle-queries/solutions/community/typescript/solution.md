# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-th-nearest-obstacle-queries/solutions/5751310/](https://leetcode.com/problems/k-th-nearest-obstacle-queries/solutions/5751310/)

---

```Java []
import java.util.PriorityQueue;

public class Solution {

    private static final int NO_OBSTACLE_FOUND_AT_TARGET_NUMBER_OF_OBSTACLES_FROM_CENTER = -1;

    public int[] resultsArray(int[][] queries, int targetNumberOfObstaclesFromCenter) {
        PriorityQueue<Integer> maxHeapDistanceFromCenter = new PriorityQueue<>((first, second) -> second - first);

        int[] targetDistanceFromCenterPerQuery = new int[queries.length];
        int index = 0;

        for (int[] query : queries) {
            maxHeapDistanceFromCenter.add(getDistanceFromCenter(query));

            if (maxHeapDistanceFromCenter.size() > targetNumberOfObstaclesFromCenter) {
                maxHeapDistanceFromCenter.poll();
            }

            if (maxHeapDistanceFromCenter.size() < targetNumberOfObstaclesFromCenter) {
                targetDistanceFromCenterPerQuery[index] = NO_OBSTACLE_FOUND_AT_TARGET_NUMBER_OF_OBSTACLES_FROM_CENTER;
            } else {
                targetDistanceFromCenterPerQuery[index] = maxHeapDistanceFromCenter.peek();
            }

            ++index;
        }
        return targetDistanceFromCenterPerQuery;
    }

    private int getDistanceFromCenter(int[] coordinates) {
        int x = coordinates[0];
        int y = coordinates[1];
        return Math.abs(x) + Math.abs(y);
    }
}
```
```JavaScript []
// const {PriorityQueue} = require('@datastructures-js/priority-queue');
/*
 PriorityQueue is internally included in the solution\xA0file on leetcode.
 So, when running\xA0the code\xA0on leetcode it should stay commented out.\xA0
 It is mentioned here as a comment, just for information about 
 which external\xA0library is applied for this data structure.
 */

/**
 * @param {number[][]} queries
 * @param {number} targetNumberOfObstaclesFromCenter
 * @return {number[]}
 */
var resultsArray = function (queries, targetNumberOfObstaclesFromCenter) {
    const NO_OBSTACLE_FOUND_AT_TARGET_NUMBER_OF_OBSTACLES_FROM_CENTER = -1;
    const maxHeapDistanceFromCenter = new MaxPriorityQueue({compare: (first, second) => second - first});

    const targetDistanceFromCenterPerQuery = new Array(queries.length);
    let index = 0;

    for (let query of queries) {
        maxHeapDistanceFromCenter.enqueue(getDistanceFromCenter(query));
        if (maxHeapDistanceFromCenter.size() > targetNumberOfObstaclesFromCenter) {
            maxHeapDistanceFromCenter.dequeue();
        }

        if (maxHeapDistanceFromCenter.size() < targetNumberOfObstaclesFromCenter) {
            targetDistanceFromCenterPerQuery[index] = NO_OBSTACLE_FOUND_AT_TARGET_NUMBER_OF_OBSTACLES_FROM_CENTER;
        } else {
            targetDistanceFromCenterPerQuery[index] = maxHeapDistanceFromCenter.front();
        }

        ++index;
    }
    return targetDistanceFromCenterPerQuery;
};

/**
 * @param {number[]} coordinates
 * @return {number} 
 */
function getDistanceFromCenter(coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];
    return Math.abs(x) + Math.abs(y);
}
```
```TypeScript []
// const {PriorityQueue} = require('@datastructures-js/priority-queue');
/*
 PriorityQueue is internally included in the solution\xA0file on leetcode.
 So, when running\xA0the code\xA0on leetcode it should stay commented out.\xA0
 It is mentioned here as a comment, just for information about 
 which external\xA0library is applied for this data structure.
 */

function resultsArray(queries: number[][], targetNumberOfObstaclesFromCenter: number): number[] {
    const NO_OBSTACLE_FOUND_AT_TARGET_NUMBER_OF_OBSTACLES_FROM_CENTER = -1;
    const maxHeapDistanceFromCenter = new MaxPriorityQueue({ compare: (first, second) => second - first });

    const targetDistanceFromCenterPerQuery: number[] = new Array(queries.length);
    let index = 0;

    for (let query of queries) {
        maxHeapDistanceFromCenter.enqueue(getDistanceFromCenter(query));
        if (maxHeapDistanceFromCenter.size() > targetNumberOfObstaclesFromCenter) {
            maxHeapDistanceFromCenter.dequeue();
        }

        if (maxHeapDistanceFromCenter.size() < targetNumberOfObstaclesFromCenter) {
            targetDistanceFromCenterPerQuery[index] = NO_OBSTACLE_FOUND_AT_TARGET_NUMBER_OF_OBSTACLES_FROM_CENTER;
        } else {
            targetDistanceFromCenterPerQuery[index] = maxHeapDistanceFromCenter.front();
        }

        ++index;
    }
    return targetDistanceFromCenterPerQuery;
};

function getDistanceFromCenter(coordinates: number[]): number {
    const x = coordinates[0];
    const y = coordinates[1];
    return Math.abs(x) + Math.abs(y);
}
```
```C++ []
#include <span>
#include <cmath>
#include <queue>
#include <vector>
using namespace std;

class Solution {

    static const int NO_OBSTACLE_FOUND_AT_TARGET_NUMBER_OF_OBSTACLES_FROM_CENTER = -1;

public:
    vector<int> resultsArray(const vector<vector<int>>& queries, int targetNumberOfObstaclesFromCenter) const {
        priority_queue<int> maxHeapDistanceFromCenter;

        vector<int> targetDistanceFromCenterPerQuery(queries.size());
        int index = 0;

        for (const auto& query : queries) {
            maxHeapDistanceFromCenter.push(getDistanceFromCenter(query));

            if (maxHeapDistanceFromCenter.size() > targetNumberOfObstaclesFromCenter) {
                maxHeapDistanceFromCenter.pop();
            }

            if (maxHeapDistanceFromCenter.size() < targetNumberOfObstaclesFromCenter) {
                targetDistanceFromCenterPerQuery[index] = NO_OBSTACLE_FOUND_AT_TARGET_NUMBER_OF_OBSTACLES_FROM_CENTER;
            }
            else {
                targetDistanceFromCenterPerQuery[index] = maxHeapDistanceFromCenter.top();
            }

            ++index;
        }
        return targetDistanceFromCenterPerQuery;
    }

private:
    int getDistanceFromCenter(span<const int> coordinates) const {
        int x = coordinates[0];
        int y = coordinates[1];
        return abs(x) + abs(y);
    }
};
```
```C# []
using System;

public class Solution
{
    private static readonly int NO_OBSTACLE_FOUND_AT_TARGET_NUMBER_OF_OBSTACLES_FROM_CENTER = -1;

    public int[] ResultsArray(int[][] queries, int targetNumberOfObstaclesFromCenter)
    {
        PriorityQueue<int, int> maxHeapDistanceFromCenter =
            new PriorityQueue<int, int>(Comparer<int>.Create((first, second) => second - first));

        int[] targetDistanceFromCenterPerQuery = new int[queries.Length];
        int index = 0;

        foreach (int[] query in queries)
        {
            maxHeapDistanceFromCenter.Enqueue(GetDistanceFromCenter(query), GetDistanceFromCenter(query));

            if (maxHeapDistanceFromCenter.Count > targetNumberOfObstaclesFromCenter)
            {
                maxHeapDistanceFromCenter.Dequeue();
            }

            if (maxHeapDistanceFromCenter.Count < targetNumberOfObstaclesFromCenter)
            {
                targetDistanceFromCenterPerQuery[index] = NO_OBSTACLE_FOUND_AT_TARGET_NUMBER_OF_OBSTACLES_FROM_CENTER;
            }
            else
            {
                targetDistanceFromCenterPerQuery[index] = maxHeapDistanceFromCenter.Peek();
            }

            ++index;
        }
        return targetDistanceFromCenterPerQuery;
    }

    private int GetDistanceFromCenter(int[] coordinates)
    {
        int x = coordinates[0];
        int y = coordinates[1];
        return Math.Abs(x) + Math.Abs(y);
    }
}
```
```Kotlin []
import kotlin.math.abs
import java.util.PriorityQueue

class Solution {

    private companion object {
        const val NO_OBSTACLE_FOUND_AT_TARGET_NUMBER_OF_OBSTACLES_FROM_CENTER = -1
    }

    fun resultsArray(queries: Array<IntArray>, targetNumberOfObstaclesFromCenter: Int): IntArray {
        val maxHeapDistanceFromCenter = PriorityQueue<Int>() { first, second -> second - first }

        val targetDistanceFromCenterPerQuery = IntArray(queries.size)
        var index = 0

        for (query in queries) {
            maxHeapDistanceFromCenter.add(getDistanceFromCenter(query))

            if (maxHeapDistanceFromCenter.size > targetNumberOfObstaclesFromCenter) {
                maxHeapDistanceFromCenter.poll()
            }

            if (maxHeapDistanceFromCenter.size < targetNumberOfObstaclesFromCenter) {
                targetDistanceFromCenterPerQuery[index] = NO_OBSTACLE_FOUND_AT_TARGET_NUMBER_OF_OBSTACLES_FROM_CENTER
            } else {
                targetDistanceFromCenterPerQuery[index] = maxHeapDistanceFromCenter.peek()
            }

            ++index
        }
        return targetDistanceFromCenterPerQuery
    }

    private fun getDistanceFromCenter(coordinates: IntArray): Int {
        val x = coordinates[0]
        val y = coordinates[1]
        return abs(x) + abs(y)
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

var NO_OBSTACLE_FOUND_AT_TARGET_NUMBER_OF_OBSTACLES_FROM_CENTER = -1

func resultsArray(queries [][]int, targetNumberOfObstaclesFromCenter int) []int {
    maxHeapDistanceFromCenter := PriorityQueue{
        distanceFromCenter: make([]int, 0),
    }

    targetDistanceFromCenterPerQuery := make([]int, len(queries))
    index := 0

    for _, query := range queries {
        heap.Push(&maxHeapDistanceFromCenter, getDistanceFromCenter(query))

        if maxHeapDistanceFromCenter.Len() > targetNumberOfObstaclesFromCenter {
            heap.Pop(&maxHeapDistanceFromCenter)
        }

        if maxHeapDistanceFromCenter.Len() < targetNumberOfObstaclesFromCenter {
            targetDistanceFromCenterPerQuery[index] = NO_OBSTACLE_FOUND_AT_TARGET_NUMBER_OF_OBSTACLES_FROM_CENTER
        } else {
            targetDistanceFromCenterPerQuery[index] = maxHeapDistanceFromCenter.distanceFromCenter[0]
        }

        index++
    }
    return targetDistanceFromCenterPerQuery
}

func getDistanceFromCenter(coordinates []int) int {
    x := coordinates[0]
    y := coordinates[1]
    return int(math.Abs(float64(x)) + math.Abs(float64(y)))
}

type PriorityQueue struct {
    distanceFromCenter []int
}

func (pq PriorityQueue) Len() int {
    return len(pq.distanceFromCenter)
}

func (pq PriorityQueue) Less(first int, second int) bool {
    return pq.distanceFromCenter[first] > pq.distanceFromCenter[second]
}

func (pq PriorityQueue) Swap(first int, second int) {
    pq.distanceFromCenter[first], pq.distanceFromCenter[second] = pq.distanceFromCenter[second], pq.distanceFromCenter[first]
}

func (pq *PriorityQueue) Push(object any) {
    distance := object.(int)
    (*pq).distanceFromCenter = append((*pq).distanceFromCenter, distance)
}

func (pq *PriorityQueue) Pop() any {
    length := len((*pq).distanceFromCenter)
    distance := ((*pq).distanceFromCenter)[length-1]
    (*pq).distanceFromCenter = ((*pq).distanceFromCenter)[0 : length-1]
    return distance
}
```