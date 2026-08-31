# Java | JavaScript | TypeScript | C++ | C# | Kotlin Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads/solutions/5068844/](https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads/solutions/5068844/)

---

```Java []
public class Solution {

    int[] minCostPath;

    public int minimumCost(int[] start, int[] target, int[][] specialRoads) {
        minCostPath = new int[specialRoads.length];
        calculateMinCostFromStartToEndOfSpecialRoads(start, specialRoads);
        calculateMinCostFromStartToEndOfSpecialRoadsWithGoingBetweenSpecialRoads(specialRoads);
        return calculateMinCostFromStartToTarget(start, target, specialRoads);
    }

    private void calculateMinCostFromStartToEndOfSpecialRoads(int[] start, int[][] specialRoads) {
        for (int road = 0; road < specialRoads.length; ++road) {
            int fromX = specialRoads[road][0];
            int fromY = specialRoads[road][1];

            int toX = specialRoads[road][2];
            int toY = specialRoads[road][3];

            int specialCost = specialRoads[road][4];

            int ordinaryCostFromStart = getOrdinaryCost(start[0], start[1], toX, toY);
            int specialCostFromStart = getOrdinaryCost(start[0], start[1], fromX, fromY) + specialCost;

            minCostPath[road] = Math.min(ordinaryCostFromStart, specialCostFromStart);
        }
    }

    private void calculateMinCostFromStartToEndOfSpecialRoadsWithGoingBetweenSpecialRoads(int[][] specialRoads) {
        for (int firstRoad = 0; firstRoad < specialRoads.length; ++firstRoad) {
            for (int secondRoad = 0; secondRoad < specialRoads.length; ++secondRoad) {
                if (firstRoad == secondRoad) {
                    continue;
                }
                connectSpecialRoads(firstRoad, secondRoad, specialRoads);
                connectSpecialRoads(secondRoad, firstRoad, specialRoads);
            }
        }
    }

    private void connectSpecialRoads(int indexFrom, int indexTo, int[][] specialRoads) {
        int fromX = specialRoads[indexFrom][2];
        int fromY = specialRoads[indexFrom][3];
        int toX = specialRoads[indexTo][0];
        int toSecondRoadY = specialRoads[indexTo][1];

        int specialCostSecondRoad = specialRoads[indexTo][4];
        int ordinaryCostFromFirstToSecond = getOrdinaryCost(fromX, fromY, toX, toSecondRoadY);

        int costFromStart = minCostPath[indexFrom] + ordinaryCostFromFirstToSecond + specialCostSecondRoad;

        minCostPath[indexTo] = Math.min(minCostPath[indexTo], costFromStart);
    }

    private int calculateMinCostFromStartToTarget(int[] start, int[] target, int[][] specialRoads) {
        int minCostFromStartToTarget = getOrdinaryCost(start[0], start[1], target[0], target[1]);

        for (int road = 0; road < specialRoads.length; ++road) {
            int endRoadX = specialRoads[road][2];
            int endRoadY = specialRoads[road][3];
            int ordinaryCostFromSpecialRoadEndToTarget = getOrdinaryCost(endRoadX, endRoadY, target[0], target[1]);

            minCostFromStartToTarget = Math.min(minCostFromStartToTarget, minCostPath[road] + ordinaryCostFromSpecialRoadEndToTarget);
        }
        return minCostFromStartToTarget;
    }

    private int getOrdinaryCost(int fromX, int fromY, int toX, int toY) {
        return Math.abs(fromX - toX) + Math.abs(fromY - toY);
    }
}
```
```JavaScript []
/**
 * @param {number[]} start
 * @param {number[]} target
 * @param {number[][]} specialRoads
 * @return {number}
 */
var minimumCost = function (start, target, specialRoads) {
    this.minCostPath = new Array(specialRoads.length);
    calculateMinCostFromStartToEndOfSpecialRoads(start, specialRoads);
    calculateMinCostFromStartToEndOfSpecialRoadsWithGoingBetweenSpecialRoads(specialRoads);
    return calculateMinCostFromStartToTarget(start, target, specialRoads);
};

/**
 * @param {number} start
 * @param {number[][]} specialRoads
 * @return {void}
 */
function calculateMinCostFromStartToEndOfSpecialRoads(start, specialRoads) {
    for (let road = 0; road < specialRoads.length; ++road) {
        const fromX = specialRoads[road][0];
        const fromY = specialRoads[road][1];

        const toX = specialRoads[road][2];
        const toY = specialRoads[road][3];

        const specialCost = specialRoads[road][4];

        const ordinaryCostFromStart = getOrdinaryCost(start[0], start[1], toX, toY);
        const specialCostFromStart = getOrdinaryCost(start[0], start[1], fromX, fromY) + specialCost;

        this.minCostPath[road] = Math.min(ordinaryCostFromStart, specialCostFromStart);
    }
}

/**
 * @param {number[][]} specialRoads
 * @return {void}
 */
function calculateMinCostFromStartToEndOfSpecialRoadsWithGoingBetweenSpecialRoads(specialRoads) {
    for (let firstRoad = 0; firstRoad < specialRoads.length; ++firstRoad) {
        for (let secondRoad = 0; secondRoad < specialRoads.length; ++secondRoad) {
            if (firstRoad === secondRoad) {
                continue;
            }
            connectSpecialRoads(firstRoad, secondRoad, specialRoads);
            connectSpecialRoads(secondRoad, firstRoad, specialRoads);
        }
    }
}

/**
 * @param {number} indexFrom
 * @param {number} indexTo
 * @param {number[][]} specialRoads
 * @return {void}
 */
function connectSpecialRoads(indexFrom, indexTo, specialRoads) {
    const fromX = specialRoads[indexFrom][2];
    const fromY = specialRoads[indexFrom][3];
    const toX = specialRoads[indexTo][0];
    const toSecondRoadY = specialRoads[indexTo][1];

    const specialCostSecondRoad = specialRoads[indexTo][4];
    const ordinaryCostFromFirstToSecond = getOrdinaryCost(fromX, fromY, toX, toSecondRoadY);

    const costFromStart = this.minCostPath[indexFrom] + ordinaryCostFromFirstToSecond + specialCostSecondRoad;

    this.minCostPath[indexTo] = Math.min(this.minCostPath[indexTo], costFromStart);
}

/**
 * @param {number[]} start
 * @param {number[]} target
 * @param {number[][]} specialRoads
 * @return {number}
 */
function calculateMinCostFromStartToTarget(start, target, specialRoads) {
    let minCostFromStartToTarget = getOrdinaryCost(start[0], start[1], target[0], target[1]);

    for (let road = 0; road < specialRoads.length; ++road) {
        const endRoadX = specialRoads[road][2];
        const endRoadY = specialRoads[road][3];
        const ordinaryCostFromSpecialRoadEndToTarget = getOrdinaryCost(endRoadX, endRoadY, target[0], target[1]);

        minCostFromStartToTarget = Math.min(minCostFromStartToTarget, this.minCostPath[road] + ordinaryCostFromSpecialRoadEndToTarget);
    }
    return minCostFromStartToTarget;
}

/**
 * @param {number} fromX
 * @param {number} fromY
 * @param {number} toX
 * @param {number} toY
 * @return {number}
 */
function getOrdinaryCost(fromX, fromY, toX, toY) {
    return Math.abs(fromX - toX) + Math.abs(fromY - toY);
}
```
```TypeScript []
function minimumCost(start: number[], target: number[], specialRoads: number[][]): number {
    this.minCostPath = new Array<number>(specialRoads.length);
    calculateMinCostFromStartToEndOfSpecialRoads(start, specialRoads);
    calculateMinCostFromStartToEndOfSpecialRoadsWithGoingBetweenSpecialRoads(specialRoads);
    return calculateMinCostFromStartToTarget(start, target, specialRoads);
};

function calculateMinCostFromStartToEndOfSpecialRoads(start: number[], specialRoads: number[][]): void {
    for (let road = 0; road < specialRoads.length; ++road) {
        const fromX = specialRoads[road][0];
        const fromY = specialRoads[road][1];

        const toX = specialRoads[road][2];
        const toY = specialRoads[road][3];

        const specialCost = specialRoads[road][4];

        const ordinaryCostFromStart = getOrdinaryCost(start[0], start[1], toX, toY);
        const specialCostFromStart = getOrdinaryCost(start[0], start[1], fromX, fromY) + specialCost;

        this.minCostPath[road] = Math.min(ordinaryCostFromStart, specialCostFromStart);
    }
}

function calculateMinCostFromStartToEndOfSpecialRoadsWithGoingBetweenSpecialRoads(specialRoads): void {
    for (let firstRoad = 0; firstRoad < specialRoads.length; ++firstRoad) {
        for (let secondRoad = 0; secondRoad < specialRoads.length; ++secondRoad) {
            if (firstRoad === secondRoad) {
                continue;
            }
            connectSpecialRoads(firstRoad, secondRoad, specialRoads);
            connectSpecialRoads(secondRoad, firstRoad, specialRoads);
        }
    }
}

function connectSpecialRoads(indexFrom: number, indexTo: number, specialRoads: number[][]) {
    const fromX = specialRoads[indexFrom][2];
    const fromY = specialRoads[indexFrom][3];
    const toX = specialRoads[indexTo][0];
    const toSecondRoadY = specialRoads[indexTo][1];

    const specialCostSecondRoad = specialRoads[indexTo][4];
    const ordinaryCostFromFirstToSecond = getOrdinaryCost(fromX, fromY, toX, toSecondRoadY);

    const costFromStart = this.minCostPath[indexFrom] + ordinaryCostFromFirstToSecond + specialCostSecondRoad;

    this.minCostPath[indexTo] = Math.min(this.minCostPath[indexTo], costFromStart);
}

function calculateMinCostFromStartToTarget(start: number[], target: number[], specialRoads: number[][]): number {
    let minCostFromStartToTarget = getOrdinaryCost(start[0], start[1], target[0], target[1]);

    for (let road = 0; road < specialRoads.length; ++road) {
        const endRoadX = specialRoads[road][2];
        const endRoadY = specialRoads[road][3];
        const ordinaryCostFromSpecialRoadEndToTarget = getOrdinaryCost(endRoadX, endRoadY, target[0], target[1]);

        minCostFromStartToTarget = Math.min(minCostFromStartToTarget, this.minCostPath[road] + ordinaryCostFromSpecialRoadEndToTarget);
    }
    return minCostFromStartToTarget;
}

function getOrdinaryCost(fromX: number, fromY: number, toX: number, toY: number): number {
    return Math.abs(fromX - toX) + Math.abs(fromY - toY);
}
```
```C++ []
#include <span>
#include <cmath>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {

    vector<int> minCostPath;

public:
    int minimumCost(const vector<int>& start, const vector<int>& target, const vector<vector<int>>& specialRoads) {
        minCostPath.resize(specialRoads.size());
        calculateMinCostFromStartToEndOfSpecialRoads(start, specialRoads);
        calculateMinCostFromStartToEndOfSpecialRoadsWithGoingBetweenSpecialRoads(specialRoads);
        return calculateMinCostFromStartToTarget(start, target, specialRoads);
    }

private:
    void calculateMinCostFromStartToEndOfSpecialRoads(span<const int>start, span<const vector<int>> specialRoads) {
        for (size_t road = 0; road < specialRoads.size(); ++road) {
            int fromX = specialRoads[road][0];
            int fromY = specialRoads[road][1];

            int toX = specialRoads[road][2];
            int toY = specialRoads[road][3];

            int specialCost = specialRoads[road][4];

            int ordinaryCostFromStart = getOrdinaryCost(start[0], start[1], toX, toY);
            int specialCostFromStart = getOrdinaryCost(start[0], start[1], fromX, fromY) + specialCost;

            minCostPath[road] = min(ordinaryCostFromStart, specialCostFromStart);
        }
    }

    void calculateMinCostFromStartToEndOfSpecialRoadsWithGoingBetweenSpecialRoads(span<const vector<int>> specialRoads) {
        for (size_t firstRoad = 0; firstRoad < specialRoads.size(); ++firstRoad) {
            for (size_t secondRoad = 0; secondRoad < specialRoads.size(); ++secondRoad) {
                if (firstRoad == secondRoad) {
                    continue;
                }
                connectSpecialRoads(firstRoad, secondRoad, specialRoads);
                connectSpecialRoads(secondRoad, firstRoad, specialRoads);
            }
        }
    }

    void connectSpecialRoads(size_t indexFrom, size_t indexTo, span<const vector<int>> specialRoads) {
            int fromX = specialRoads[indexFrom][2];
            int fromY = specialRoads[indexFrom][3];
            int toX = specialRoads[indexTo][0];
            int toSecondRoadY = specialRoads[indexTo][1];

            int specialCostSecondRoad = specialRoads[indexTo][4];
            int ordinaryCostFromFirstToSecond = getOrdinaryCost(fromX, fromY, toX, toSecondRoadY);

            int costFromStart = minCostPath[indexFrom] + ordinaryCostFromFirstToSecond + specialCostSecondRoad;

            minCostPath[indexTo] = min(minCostPath[indexTo], costFromStart);
    }

    int calculateMinCostFromStartToTarget(span<const int> start, span<const int> target, span<const vector<int>> specialRoads) {
        int minCostFromStartToTarget = getOrdinaryCost(start[0], start[1], target[0], target[1]);

        for (size_t road = 0; road < specialRoads.size(); ++road) {
            int endRoadX = specialRoads[road][2];
            int endRoadY = specialRoads[road][3];
            int ordinaryCostFromSpecialRoadEndToTarget = getOrdinaryCost(endRoadX, endRoadY, target[0], target[1]);

            minCostFromStartToTarget = min(minCostFromStartToTarget, minCostPath[road] + ordinaryCostFromSpecialRoadEndToTarget);
        }
        return minCostFromStartToTarget;
    }

    int getOrdinaryCost(int fromX, int fromY, int toX, int toY)const {
        return abs(fromX - toX) + abs(fromY - toY);
    }
};
```
```C# []
using System;

public class Solution
{
    int[]? minCostPath;

    public int MinimumCost(int[] start, int[] target, int[][] specialRoads)
    {
        minCostPath = new int[specialRoads.Length];
        CalculateMinCostFromStartToEndOfSpecialRoads(start, specialRoads);
        CalculateMinCostFromStartToEndOfSpecialRoadsWithGoingBetweenSpecialRoads(specialRoads);
        return CalculateMinCostFromStartToTarget(start, target, specialRoads);
    }

    private void CalculateMinCostFromStartToEndOfSpecialRoads(int[] start, int[][] specialRoads)
    {
        for (int road = 0; road < specialRoads.Length; ++road)
        {
            int fromX = specialRoads[road][0];
            int fromY = specialRoads[road][1];

            int toX = specialRoads[road][2];
            int toY = specialRoads[road][3];

            int specialCost = specialRoads[road][4];

            int ordinaryCostFromStart = GetOrdinaryCost(start[0], start[1], toX, toY);
            int specialCostFromStart = GetOrdinaryCost(start[0], start[1], fromX, fromY) + specialCost;

            minCostPath[road] = Math.Min(ordinaryCostFromStart, specialCostFromStart);
        }
    }

    private void CalculateMinCostFromStartToEndOfSpecialRoadsWithGoingBetweenSpecialRoads(int[][] specialRoads)
    {
        for (int firstRoad = 0; firstRoad < specialRoads.Length; ++firstRoad)
        {
            for (int secondRoad = 0; secondRoad < specialRoads.Length; ++secondRoad)
            {
                if (firstRoad == secondRoad)
                {
                    continue;
                }
                ConnectSpecialRoads(firstRoad, secondRoad, specialRoads);
                ConnectSpecialRoads(secondRoad, firstRoad, specialRoads);
            }
        }
    }

    private void ConnectSpecialRoads(int indexFrom, int indexTo, int[][] specialRoads)
    {
        int fromX = specialRoads[indexFrom][2];
        int fromY = specialRoads[indexFrom][3];
        int toX = specialRoads[indexTo][0];
        int toSecondRoadY = specialRoads[indexTo][1];

        int specialCostSecondRoad = specialRoads[indexTo][4];
        int ordinaryCostFromFirstToSecond = GetOrdinaryCost(fromX, fromY, toX, toSecondRoadY);

        int costFromStart = minCostPath[indexFrom] + ordinaryCostFromFirstToSecond + specialCostSecondRoad;

        minCostPath[indexTo] = Math.Min(minCostPath[indexTo], costFromStart);
    }

    private int CalculateMinCostFromStartToTarget(int[] start, int[] target, int[][] specialRoads)
    {
        int minCostFromStartToTarget = GetOrdinaryCost(start[0], start[1], target[0], target[1]);

        for (int road = 0; road < specialRoads.Length; ++road)
        {
            int endRoadX = specialRoads[road][2];
            int endRoadY = specialRoads[road][3];
            int ordinaryCostFromSpecialRoadEndToTarget = GetOrdinaryCost(endRoadX, endRoadY, target[0], target[1]);

            minCostFromStartToTarget = Math.Min(minCostFromStartToTarget, minCostPath[road] + ordinaryCostFromSpecialRoadEndToTarget);
        }
        return minCostFromStartToTarget;
    }

    private int GetOrdinaryCost(int fromX, int fromY, int toX, int toY)
    {
        return Math.Abs(fromX - toX) + Math.Abs(fromY - toY);
    }
}
```
```Kotlin []
import kotlin.math.abs
import kotlin.math.min

class Solution {

    private lateinit var minCostPath: IntArray;

    fun minimumCost(start: IntArray, target: IntArray, specialRoads: Array<IntArray>): Int {
        minCostPath = IntArray(specialRoads.size);
        calculateMinCostFromStartToEndOfSpecialRoads(start, specialRoads);
        calculateMinCostFromStartToEndOfSpecialRoadsWithGoingBetweenSpecialRoads(specialRoads);
        return calculateMinCostFromStartToTarget(start, target, specialRoads);
    }

    private fun calculateMinCostFromStartToEndOfSpecialRoads(start: IntArray, specialRoads: Array<IntArray>) {
        for (road in specialRoads.indices) {
            val fromX = specialRoads[road][0];
            val fromY = specialRoads[road][1];

            val toX = specialRoads[road][2];
            val toY = specialRoads[road][3];

            val specialCost = specialRoads[road][4];

            val ordinaryCostFromStart = getOrdinaryCost(start[0], start[1], toX, toY);
            val specialCostFromStart = getOrdinaryCost(start[0], start[1], fromX, fromY) + specialCost;

            minCostPath[road] = min(ordinaryCostFromStart, specialCostFromStart);
        }
    }

    private fun calculateMinCostFromStartToEndOfSpecialRoadsWithGoingBetweenSpecialRoads(specialRoads: Array<IntArray>) {
        for (firstRoad in specialRoads.indices) {
            for (secondRoad in specialRoads.indices) {
                if (firstRoad == secondRoad) {
                    continue;
                }
                connectSpecialRoads(firstRoad, secondRoad, specialRoads);
                connectSpecialRoads(secondRoad, firstRoad, specialRoads);
            }
        }
    }

    private fun connectSpecialRoads(indexFrom: Int, indexTo: Int, specialRoads: Array<IntArray>) {
        val fromX = specialRoads[indexFrom][2];
        val fromY = specialRoads[indexFrom][3];
        val toX = specialRoads[indexTo][0];
        val toSecondRoadY = specialRoads[indexTo][1];

        val specialCostSecondRoad = specialRoads[indexTo][4];
        val ordinaryCostFromFirstToSecond = getOrdinaryCost(fromX, fromY, toX, toSecondRoadY);

        val costFromStart = minCostPath[indexFrom] + ordinaryCostFromFirstToSecond + specialCostSecondRoad

        minCostPath[indexTo] = min(minCostPath[indexTo], costFromStart);
    }

    private fun calculateMinCostFromStartToTarget(
        start: IntArray,
        target: IntArray,
        specialRoads: Array<IntArray>
    ): Int {
        var minCostFromStartToTarget = getOrdinaryCost(start[0], start[1], target[0], target[1]);

        for (road in specialRoads.indices) {
            val endRoadX = specialRoads[road][2];
            val endRoadY = specialRoads[road][3];
            val ordinaryCostFromSpecialRoadEndToTarget = getOrdinaryCost(endRoadX, endRoadY, target[0], target[1]);

            minCostFromStartToTarget = min(
                minCostFromStartToTarget, minCostPath[road] + ordinaryCostFromSpecialRoadEndToTarget
            );
        }
        return minCostFromStartToTarget;
    }

    private fun getOrdinaryCost(fromX: Int, fromY: Int, toX: Int, toY: Int): Int {
        return abs(fromX - toX) + abs(fromY - toY);
    }
}
```