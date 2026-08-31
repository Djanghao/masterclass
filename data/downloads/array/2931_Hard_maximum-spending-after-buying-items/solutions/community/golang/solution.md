# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-spending-after-buying-items/solutions/5356203/](https://leetcode.com/problems/maximum-spending-after-buying-items/solutions/5356203/)

---

```Java []
public class Solution {

    private static final int ALL_ITEMS_IN_SHOP_PURCHASED = -1;

    public long maxSpending(int[][] values) {
        int[] indexesAccessibleItemsPerShop = createIndexesAccessibleItemsPerShop(values);
        return calculateMaxSpending(values, indexesAccessibleItemsPerShop);
    }

    private int[] createIndexesAccessibleItemsPerShop(int[][] values) {
        int[] indexesAccessibleItemsPerShop = new int[values.length];
        for (int i = 0; i < indexesAccessibleItemsPerShop.length; ++i) {
            indexesAccessibleItemsPerShop[i] = values[0].length - 1;
        }
        return indexesAccessibleItemsPerShop;
    }

    private long calculateMaxSpending(int[][] values, int[] indexesAccessibleItemsPerShop) {
        long maxSpending = 0;
        long currentDay = 1;
        int totalDays = values.length * values[0].length;

        while (currentDay <= totalDays) {
            maxSpending += currentDay * findMinValueAmongAccessibleItemsPerShop(values, indexesAccessibleItemsPerShop);
            ++currentDay;
        }

        return maxSpending;
    }

    private int findMinValueAmongAccessibleItemsPerShop(int[][] values, int[] indexesAccessibleItemsPerShop) {
        int minValue = Integer.MAX_VALUE;
        int indexForMinValue = 0;

        for (int i = 0; i < indexesAccessibleItemsPerShop.length; ++i) {
            if (indexesAccessibleItemsPerShop[i] != ALL_ITEMS_IN_SHOP_PURCHASED
                    && minValue > values[i][indexesAccessibleItemsPerShop[i]]) {

                minValue = values[i][indexesAccessibleItemsPerShop[i]];
                indexForMinValue = i;
            }
        }
        --indexesAccessibleItemsPerShop[indexForMinValue];
        return minValue;
    }
}
```
```JavaScript []
/**
 * @param {number[][]} values
 * @return {number}
 */
var maxSpending = function (values) {
    this.ALL_ITEMS_IN_SHOP_PURCHASED = -1;
    const indexesAccessibleItemsPerShop = createIndexesAccessibleItemsPerShop(values);
    return calculateMaxSpending(values, indexesAccessibleItemsPerShop);
};

/**
 * @param {number[][]} values
 * @return {number[]}
 */
function createIndexesAccessibleItemsPerShop(values) {
    const indexesAccessibleItemsPerShop = new Array(values.length);
    for (let i = 0; i < indexesAccessibleItemsPerShop.length; ++i) {
        indexesAccessibleItemsPerShop[i] = values[0].length - 1;
    }
    return indexesAccessibleItemsPerShop;
}

/**
 * @param {number[][]} values
 * @param {number[]} indexesAccessibleItemsPerShop
 * @return {number}
 */
function calculateMaxSpending(values, indexesAccessibleItemsPerShop) {
    let maxSpending = 0;
    let currentDay = 1;
    const totalDays = values.length * values[0].length;

    while (currentDay <= totalDays) {
        maxSpending += currentDay * findMinValueAmongAccessibleItemsPerShop(values, indexesAccessibleItemsPerShop);
        ++currentDay;
    }

    return maxSpending;
}

/**
 * @param {number[][]} values
 * @param {number[]} indexesAccessibleItemsPerShop
 * @return {number}
 */
function findMinValueAmongAccessibleItemsPerShop(values, indexesAccessibleItemsPerShop) {
    let minValue = Number.MAX_SAFE_INTEGER;
    let indexForMinValue = 0;

    for (let i = 0; i < indexesAccessibleItemsPerShop.length; ++i) {
        if (indexesAccessibleItemsPerShop[i] !== this.ALL_ITEMS_IN_SHOP_PURCHASED
                && minValue > values[i][indexesAccessibleItemsPerShop[i]]) {

            minValue = values[i][indexesAccessibleItemsPerShop[i]];
            indexForMinValue = i;
        }
    }
    --indexesAccessibleItemsPerShop[indexForMinValue];
    return minValue;
}
```
```TypeScript []
function maxSpending(values: number[][]): number {
    this.ALL_ITEMS_IN_SHOP_PURCHASED = -1;
    const indexesAccessibleItemsPerShop = createIndexesAccessibleItemsPerShop(values);
    return calculateMaxSpending(values, indexesAccessibleItemsPerShop);
};

function createIndexesAccessibleItemsPerShop(values: number[][]): number[] {
    const indexesAccessibleItemsPerShop: number[] = new Array(values.length);
    for (let i = 0; i < indexesAccessibleItemsPerShop.length; ++i) {
        indexesAccessibleItemsPerShop[i] = values[0].length - 1;
    }
    return indexesAccessibleItemsPerShop;
}

function calculateMaxSpending(values: number[][], indexesAccessibleItemsPerShop: number[]): number {
    let maxSpending = 0;
    let currentDay = 1;
    const totalDays = values.length * values[0].length;

    while (currentDay <= totalDays) {
        maxSpending += currentDay * findMinValueAmongAccessibleItemsPerShop(values, indexesAccessibleItemsPerShop);
        ++currentDay;
    }

    return maxSpending;
}

function findMinValueAmongAccessibleItemsPerShop(values: number[][], indexesAccessibleItemsPerShop: number[]): number {
    let minValue = Number.MAX_SAFE_INTEGER;
    let indexForMinValue = 0;

    for (let i = 0; i < indexesAccessibleItemsPerShop.length; ++i) {
        if (indexesAccessibleItemsPerShop[i] !== this.ALL_ITEMS_IN_SHOP_PURCHASED
            && minValue > values[i][indexesAccessibleItemsPerShop[i]]) {

            minValue = values[i][indexesAccessibleItemsPerShop[i]];
            indexForMinValue = i;
        }
    }
    --indexesAccessibleItemsPerShop[indexForMinValue];
    return minValue;
}
```
```C++ []
#include <span>
#include <limits>
#include <vector>
using namespace std;

class Solution {

    static const int  ALL_ITEMS_IN_SHOP_PURCHASED = -1;

public:
    long long maxSpending(const vector<vector<int>>& values) const {
        vector<int> indexesAccessibleItemsPerShop = createIndexesAccessibleItemsPerShop(values);
        return calculateMaxSpending(values, indexesAccessibleItemsPerShop);
    }

private:
    vector<int> createIndexesAccessibleItemsPerShop(span<const vector<int>> values) const {
        vector<int> indexesAccessibleItemsPerShop(values.size());
        for (size_t i = 0; i < indexesAccessibleItemsPerShop.size(); ++i) {
            indexesAccessibleItemsPerShop[i] = values[0].size() - 1;
        }
        return indexesAccessibleItemsPerShop;
    }

    long long calculateMaxSpending(span<const vector<int>> values, span<int> indexesAccessibleItemsPerShop) const {
        long long maxSpending = 0;
        long long currentDay = 1;
        int totalDays = values.size() * values[0].size();

        while (currentDay <= totalDays) {
            maxSpending += currentDay * findMinValueAmongAccessibleItemsPerShop(values, indexesAccessibleItemsPerShop);
            ++currentDay;
        }

        return maxSpending;
    }

    int findMinValueAmongAccessibleItemsPerShop(span<const vector<int>> values, span<int> indexesAccessibleItemsPerShop) const {
        int minValue = numeric_limits<int>::max();
        int indexForMinValue = 0;

        for (size_t i = 0; i < indexesAccessibleItemsPerShop.size(); ++i) {
            if (indexesAccessibleItemsPerShop[i] != ALL_ITEMS_IN_SHOP_PURCHASED
                && minValue > values[i][indexesAccessibleItemsPerShop[i]]) {

                minValue = values[i][indexesAccessibleItemsPerShop[i]];
                indexForMinValue = i;
            }
        }
        --indexesAccessibleItemsPerShop[indexForMinValue];
        return minValue;
    }
};
```
```C# []
using System;

public class Solution
{
    private static readonly int ALL_ITEMS_IN_SHOP_PURCHASED = -1;

    public long MaxSpending(int[][] values)
    {
        int[] indexesAccessibleItemsPerShop = CreateIndexesAccessibleItemsPerShop(values);
        return CalculateMaxSpending(values, indexesAccessibleItemsPerShop);
    }

    private int[] CreateIndexesAccessibleItemsPerShop(int[][] values)
    {
        int[] indexesAccessibleItemsPerShop = new int[values.Length];
        for (int i = 0; i < indexesAccessibleItemsPerShop.Length; ++i)
        {
            indexesAccessibleItemsPerShop[i] = values[0].Length - 1;
        }
        return indexesAccessibleItemsPerShop;
    }

    private long CalculateMaxSpending(int[][] values, int[] indexesAccessibleItemsPerShop)
    {
        long maxSpending = 0;
        long currentDay = 1;
        int totalDays = values.Length * values[0].Length;

        while (currentDay <= totalDays)
        {
            maxSpending += currentDay * FindMinValueAmongAccessibleItemsPerShop(values, indexesAccessibleItemsPerShop);
            ++currentDay;
        }

        return maxSpending;
    }

    private int FindMinValueAmongAccessibleItemsPerShop(int[][] values, int[] indexesAccessibleItemsPerShop)
    {
        int minValue = int.MaxValue;
        int indexForMinValue = 0;

        for (int i = 0; i < indexesAccessibleItemsPerShop.Length; ++i)
        {
            if (indexesAccessibleItemsPerShop[i] != ALL_ITEMS_IN_SHOP_PURCHASED
                    && minValue > values[i][indexesAccessibleItemsPerShop[i]])
            {
                minValue = values[i][indexesAccessibleItemsPerShop[i]];
                indexForMinValue = i;
            }
        }
        --indexesAccessibleItemsPerShop[indexForMinValue];
        return minValue;
    }
}
```
```Kotlin []
class Solution {

    private companion object {
        const val ALL_ITEMS_IN_SHOP_PURCHASED = -1
    }

    fun maxSpending(values: Array<IntArray>): Long {
        val indexesAccessibleItemsPerShop = createIndexesAccessibleItemsPerShop(values)
        return calculateMaxSpending(values, indexesAccessibleItemsPerShop)
    }

    private fun createIndexesAccessibleItemsPerShop(values: Array<IntArray>): IntArray {
        val indexesAccessibleItemsPerShop = IntArray(values.size)
        for (i in indexesAccessibleItemsPerShop.indices) {
            indexesAccessibleItemsPerShop[i] = values[0].size - 1
        }
        return indexesAccessibleItemsPerShop
    }

    private fun calculateMaxSpending(values: Array<IntArray>, indexesAccessibleItemsPerShop: IntArray): Long {
        var maxSpending: Long = 0
        var currentDay: Long = 1
        val totalDays: Int = values.size * values[0].size

        while (currentDay <= totalDays) {
            maxSpending += currentDay * findMinValueAmongAccessibleItemsPerShop(values, indexesAccessibleItemsPerShop)
            ++currentDay
        }

        return maxSpending
    }

    private fun findMinValueAmongAccessibleItemsPerShop(values: Array<IntArray>, indexesAccessibleItemsPerShop: IntArray): Int {
        var minValue = Int.MAX_VALUE
        var indexForMinValue = 0

        for (i in indexesAccessibleItemsPerShop.indices) {
            if (indexesAccessibleItemsPerShop[i] != ALL_ITEMS_IN_SHOP_PURCHASED
                && minValue > values[i][indexesAccessibleItemsPerShop[i]]
            ) {

                minValue = values[i][indexesAccessibleItemsPerShop[i]]
                indexForMinValue = i
            }
        }
        --indexesAccessibleItemsPerShop[indexForMinValue]
        return minValue
    }
}
```
```Go []
package main

import (
    "fmt"
    "math"
)

const ALL_ITEMS_IN_SHOP_PURCHASED = -1

func maxSpending(values [][]int) int64 {
    var indexesAccessibleItemsPerShop []int = createIndexesAccessibleItemsPerShop(values)
    return calculateMaxSpending(values, indexesAccessibleItemsPerShop)
}

func createIndexesAccessibleItemsPerShop(values [][]int) []int {
    indexesAccessibleItemsPerShop := make([]int, len(values))
    for i := range indexesAccessibleItemsPerShop {
        indexesAccessibleItemsPerShop[i] = len(values[0]) - 1
    }
    return indexesAccessibleItemsPerShop
}

func calculateMaxSpending(values [][]int, indexesAccessibleItemsPerShop []int) int64 {
    var maxSpending int64 = 0
    var currentDay int64 = 1
    var totalDays int64 = int64(len(values) * len(values[0]))

    for currentDay <= totalDays {
        maxSpending += currentDay * int64(findMinValueAmongAccessibleItemsPerShop(values, indexesAccessibleItemsPerShop))
        currentDay++
    }

    return maxSpending
}

func findMinValueAmongAccessibleItemsPerShop(values [][]int, indexesAccessibleItemsPerShop []int) int {
    minValue := math.MaxInt
    indexForMinValue := 0

    for i := range indexesAccessibleItemsPerShop {
        if indexesAccessibleItemsPerShop[i] != ALL_ITEMS_IN_SHOP_PURCHASED &&
            minValue > values[i][indexesAccessibleItemsPerShop[i]] {

            minValue = values[i][indexesAccessibleItemsPerShop[i]]
            indexForMinValue = i
        }
    }
    indexesAccessibleItemsPerShop[indexForMinValue]--
    return minValue
}
```