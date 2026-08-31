# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/solutions/5915578/](https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/solutions/5915578/)

---

```Java []
public class Solution {

    public int minElement(int[] input) {
        int elementWithMinSumOfDigits = Integer.MAX_VALUE;
        for (int value : input) {
            int sumOfDigits = calculateSumOfDigits(value);
            elementWithMinSumOfDigits = Math.min(elementWithMinSumOfDigits, sumOfDigits);
        }
        return elementWithMinSumOfDigits;
    }

    private int calculateSumOfDigits(int value) {
        int sumOfDigits = 0;
        while (value > 0) {
            sumOfDigits += value % 10;
            value /= 10;
        }
        return sumOfDigits;
    }
}
```
```JavaScript []
/**
 * @param {number[]} input
 * @return {number}
 */
var minElement = function (input) {
    let elementWithMinSumOfDigits = Number.MAX_SAFE_INTEGER;
    for (let value of input) {
        const sumOfDigits = calculateSumOfDigits(value);
        elementWithMinSumOfDigits = Math.min(elementWithMinSumOfDigits, sumOfDigits);
    }
    return elementWithMinSumOfDigits;
};

/**
 * @param {number} value
 * @return {number}
 */
function calculateSumOfDigits(value) {
    let sumOfDigits = 0;
    while (value > 0) {
        sumOfDigits += value % 10;
        value = Math.floor(value / 10);
    }
    return sumOfDigits;
}
```
```TypeScript []
function minElement(input: number[]): number {
    let elementWithMinSumOfDigits = Number.MAX_SAFE_INTEGER;
    for (let value of input) {
        const sumOfDigits = calculateSumOfDigits(value);
        elementWithMinSumOfDigits = Math.min(elementWithMinSumOfDigits, sumOfDigits);
    }
    return elementWithMinSumOfDigits;
};

function calculateSumOfDigits(value: number): number {
    let sumOfDigits = 0;
    while (value > 0) {
        sumOfDigits += value % 10;
        value = Math.floor(value / 10);
    }
    return sumOfDigits;
}
```
```C++ []
#include <vector>
#include <limits>
#include <algorithm>
using namespace std;

class Solution {

public:
    int minElement(const vector<int>& input) const {
        int elementWithMinSumOfDigits = numeric_limits<int>::max();
        for (const auto& value : input) {
            int sumOfDigits = calculateSumOfDigits(value);
            elementWithMinSumOfDigits = min(elementWithMinSumOfDigits, sumOfDigits);
        }
        return elementWithMinSumOfDigits;
    }

private:
    int calculateSumOfDigits(int value) const {
        int sumOfDigits = 0;
        while (value > 0) {
            sumOfDigits += value % 10;
            value /= 10;
        }
        return sumOfDigits;
    }
};
```
```C# []
using System;

public class Solution
{
    public int MinElement(int[] input)
    {
        int elementWithMinSumOfDigits = int.MaxValue;
        foreach (int value in input)
        {
            int sumOfDigits = calculateSumOfDigits(value);
            elementWithMinSumOfDigits = Math.Min(elementWithMinSumOfDigits, sumOfDigits);
        }
        return elementWithMinSumOfDigits;
    }

    private int calculateSumOfDigits(int value)
    {
        int sumOfDigits = 0;
        while (value > 0)
        {
            sumOfDigits += value % 10;
            value /= 10;
        }
        return sumOfDigits;
    }
}
```
```Kotlin []
import kotlin.math.min

class Solution {
    
    fun minElement(input: IntArray): Int {
        var elementWithMinSumOfDigits = Int.MAX_VALUE
        for (value in input) {
            var sumOfDigits = calculateSumOfDigits(value)
            elementWithMinSumOfDigits = min(elementWithMinSumOfDigits, sumOfDigits)
        }
        return elementWithMinSumOfDigits
    }

    private fun calculateSumOfDigits(value: Int): Int {
        var value = value
        var sumOfDigits = 0
        while (value > 0) {
            sumOfDigits += value % 10
            value /= 10
        }
        return sumOfDigits
    }
}
```
```Go []
package main

import (
    "fmt"
    "math"
)

func minElement(input []int) int {
    elementWithMinSumOfDigits := math.MaxInt32
    for _, value := range input {
        sumOfDigits := calculateSumOfDigits(value)
        elementWithMinSumOfDigits = min(elementWithMinSumOfDigits, sumOfDigits)
    }
    return elementWithMinSumOfDigits
}

func calculateSumOfDigits(value int) int {
    sumOfDigits := 0
    for value > 0 {
        sumOfDigits += value % 10
        value /= 10
    }
    return sumOfDigits
}
```