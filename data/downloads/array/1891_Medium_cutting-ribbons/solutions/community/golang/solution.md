# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/cutting-ribbons/solutions/6125473/](https://leetcode.com/problems/cutting-ribbons/solutions/6125473/)

---

```Java []
public class Solution {

    public int maxLength(int[] ribbons, int targetNumberOfCuts) {
        int maxPossibleCutSize = 0;
        int minLimitCutSize = 1;
        int maxLimitCutSize = roundedDownMeanCutForSumOfAllRibbonSizes(ribbons, targetNumberOfCuts);

        while (minLimitCutSize <= maxLimitCutSize) {
            int cutSize = minLimitCutSize + (maxLimitCutSize - minLimitCutSize) / 2;

            if (isPossibleToHaveTargetNumberOfCuts(ribbons, targetNumberOfCuts, cutSize)) {
                maxPossibleCutSize = cutSize;
                minLimitCutSize = cutSize + 1;
            } else {
                maxLimitCutSize = cutSize - 1;
            }
        }

        return maxPossibleCutSize;
    }

    private boolean isPossibleToHaveTargetNumberOfCuts(int[] ribbons, int targetNumberOfCuts, int cutSize) {
        int numberOfCuts = 0;
        for (int ribbon : ribbons) {
            numberOfCuts += ribbon / cutSize;
            if (numberOfCuts >= targetNumberOfCuts) {
                return true;
            }
        }
        return false;
    }

    private int roundedDownMeanCutForSumOfAllRibbonSizes(int[] ribbons, int targetNumberOfCuts) {
        long sum = 0;
        for (int ribbon : ribbons) {
            sum += ribbon;
        }
        return (int) (sum / targetNumberOfCuts);
    }
}
```
```JavaScript []
/**
 * @param {number[]} ribbons
 * @param {number} targetNumberOfCuts
 * @return {number}
 */
var maxLength = function (ribbons, targetNumberOfCuts) {
    let maxPossibleCutSize = 0;
    let minLimitCutSize = 1;
    let maxLimitCutSize = roundedDownMeanCutForSumOfAllRibbonSizes(ribbons, targetNumberOfCuts);

    while (minLimitCutSize <= maxLimitCutSize) {
        const cutSize = minLimitCutSize + Math.floor((maxLimitCutSize - minLimitCutSize) / 2);

        if (isPossibleToHaveTargetNumberOfCuts(ribbons, targetNumberOfCuts, cutSize)) {
            maxPossibleCutSize = cutSize;
            minLimitCutSize = cutSize + 1;
        } else {
            maxLimitCutSize = cutSize - 1;
        }
    }

    return maxPossibleCutSize;
};


/**
 * @param {number[]} ribbons
 * @param {number} targetNumberOfCuts
 * @param {number} cutSize
 * @return {boolean}
 */
function isPossibleToHaveTargetNumberOfCuts(ribbons, targetNumberOfCuts, cutSize) {
    let numberOfCuts = 0;
    for (let ribbon of ribbons) {
        numberOfCuts += Math.floor(ribbon / cutSize);
        if (numberOfCuts >= targetNumberOfCuts) {
            return true;
        }
    }
    return false;
}

/**
 * @param {number[]} ribbons
 * @param {number} targetNumberOfCuts
 * @return {number}
 */
function roundedDownMeanCutForSumOfAllRibbonSizes(ribbons, targetNumberOfCuts) {
    let sum = 0;
    for (let ribbon of ribbons) {
        sum += ribbon;
    }
    return Math.floor(sum / targetNumberOfCuts);
}
```
```TypeScript []
function maxLength(ribbons: number[], targetNumberOfCuts: number): number {
    let maxPossibleCutSize = 0;
    let minLimitCutSize = 1;
    let maxLimitCutSize = roundedDownMeanCutForSumOfAllRibbonSizes(ribbons, targetNumberOfCuts);

    while (minLimitCutSize <= maxLimitCutSize) {
        const cutSize = minLimitCutSize + Math.floor((maxLimitCutSize - minLimitCutSize) / 2);

        if (isPossibleToHaveTargetNumberOfCuts(ribbons, targetNumberOfCuts, cutSize)) {
            maxPossibleCutSize = cutSize;
            minLimitCutSize = cutSize + 1;
        } else {
            maxLimitCutSize = cutSize - 1;
        }
    }

    return maxPossibleCutSize;
};

function isPossibleToHaveTargetNumberOfCuts(ribbons: number[], targetNumberOfCuts: number, cutSize: number): boolean {
    let numberOfCuts = 0;
    for (let ribbon of ribbons) {
        numberOfCuts += Math.floor(ribbon / cutSize);
        if (numberOfCuts >= targetNumberOfCuts) {
            return true;
        }
    }
    return false;
}

function roundedDownMeanCutForSumOfAllRibbonSizes(ribbons: number[], targetNumberOfCuts: number): number {
    let sum = 0;
    for (let ribbon of ribbons) {
        sum += ribbon;
    }
    return Math.floor(sum / targetNumberOfCuts);
}
```
```C++ []
#include <span>
#include <vector>
using namespace std;

class Solution {

public:
    int maxLength(const vector<int>& ribbons, int targetNumberOfCuts) const {
        int maxPossibleCutSize = 0;
        int minLimitCutSize = 1;
        int maxLimitCutSize = roundedDownMeanCutForSumOfAllRibbonSizes(ribbons, targetNumberOfCuts);

        while (minLimitCutSize <= maxLimitCutSize) {
            int cutSize = minLimitCutSize + (maxLimitCutSize - minLimitCutSize) / 2;

            if (isPossibleToHaveTargetNumberOfCuts(ribbons, targetNumberOfCuts, cutSize)) {
                maxPossibleCutSize = cutSize;
                minLimitCutSize = cutSize + 1;
            }
            else {
                maxLimitCutSize = cutSize - 1;
            }
        }

        return maxPossibleCutSize;
    }

private:
    bool isPossibleToHaveTargetNumberOfCuts(span<const int> ribbons, int targetNumberOfCuts, int cutSize) const {
        int numberOfCuts = 0;
        for (const auto& ribbon : ribbons) {
            numberOfCuts += ribbon / cutSize;
            if (numberOfCuts >= targetNumberOfCuts) {
                return true;
            }
        }
        return false;
    }

    int roundedDownMeanCutForSumOfAllRibbonSizes(span<const int> ribbons, int targetNumberOfCuts) const {
        long long sum = 0;
        for (const auto& ribbon : ribbons) {
            sum += ribbon;
        }
        return sum / targetNumberOfCuts;
    }
};
```
```C# []
using System;

public class Solution
{
    public int MaxLength(int[] ribbons, int targetNumberOfCuts)
    {
        int maxPossibleCutSize = 0;
        int minLimitCutSize = 1;
        int maxLimitCutSize = RoundedDownMeanCutForSumOfAllRibbonSizes(ribbons, targetNumberOfCuts);

        while (minLimitCutSize <= maxLimitCutSize)
        {
            int cutSize = minLimitCutSize + (maxLimitCutSize - minLimitCutSize) / 2;

            if (IsPossibleToHaveTargetNumberOfCuts(ribbons, targetNumberOfCuts, cutSize))
            {
                maxPossibleCutSize = cutSize;
                minLimitCutSize = cutSize + 1;
            }
            else
            {
                maxLimitCutSize = cutSize - 1;
            }
        }

        return maxPossibleCutSize;
    }

    private bool IsPossibleToHaveTargetNumberOfCuts(int[] ribbons, int targetNumberOfCuts, int cutSize)
    {
        int numberOfCuts = 0;
        foreach (int ribbon in ribbons)
        {
            numberOfCuts += ribbon / cutSize;
            if (numberOfCuts >= targetNumberOfCuts)
            {
                return true;
            }
        }
        return false;
    }

    private int RoundedDownMeanCutForSumOfAllRibbonSizes(int[] ribbons, int targetNumberOfCuts)
    {
        long sum = 0;
        foreach (int ribbon in ribbons)
        {
            sum += ribbon;
        }
        return (int)(sum / targetNumberOfCuts);
    }
}
```
```Kotlin []
class Solution {

    fun maxLength(ribbons: IntArray, targetNumberOfCuts: Int): Int {
        var maxPossibleCutSize = 0
        var minLimitCutSize = 1
        var maxLimitCutSize = roundedDownMeanCutForSumOfAllRibbonSizes(ribbons, targetNumberOfCuts)

        while (minLimitCutSize <= maxLimitCutSize) {
            val cutSize = minLimitCutSize + (maxLimitCutSize - minLimitCutSize) / 2

            if (isPossibleToHaveTargetNumberOfCuts(ribbons, targetNumberOfCuts, cutSize)) {
                maxPossibleCutSize = cutSize
                minLimitCutSize = cutSize + 1
            } else {
                maxLimitCutSize = cutSize - 1
            }
        }

        return maxPossibleCutSize
    }

    private fun isPossibleToHaveTargetNumberOfCuts(ribbons: IntArray, targetNumberOfCuts: Int, cutSize: Int): Boolean {
        var numberOfCuts = 0
        for (ribbon in ribbons) {
            numberOfCuts += ribbon / cutSize
            if (numberOfCuts >= targetNumberOfCuts) {
                return true
            }
        }
        return false
    }

    private fun roundedDownMeanCutForSumOfAllRibbonSizes(ribbons: IntArray, targetNumberOfCuts: Int): Int {
        var sum: Long = 0
        for (ribbon in ribbons) {
            sum += ribbon
        }
        return (sum / targetNumberOfCuts).toInt()
    }
}
```
```Go []
package main

import "fmt"

func maxLength(ribbons []int, targetNumberOfCuts int) int {
    maxPossibleCutSize := 0
    minLimitCutSize := 1
    maxLimitCutSize := roundedDownMeanCutForSumOfAllRibbonSizes(ribbons, targetNumberOfCuts)

    for minLimitCutSize <= maxLimitCutSize {
        cutSize := minLimitCutSize + (maxLimitCutSize-minLimitCutSize)/2

        if isPossibleToHaveTargetNumberOfCuts(ribbons, targetNumberOfCuts, cutSize) {
            maxPossibleCutSize = cutSize
            minLimitCutSize = cutSize + 1
        } else {
            maxLimitCutSize = cutSize - 1
        }
    }

    return maxPossibleCutSize
}

func isPossibleToHaveTargetNumberOfCuts(ribbons []int, targetNumberOfCuts int, cutSize int) bool {
    var numberOfCuts = 0
    for _, ribbon := range ribbons {
        numberOfCuts += ribbon / cutSize
        if numberOfCuts >= targetNumberOfCuts {
            return true
        }
    }
    return false
}

func roundedDownMeanCutForSumOfAllRibbonSizes(ribbons []int, targetNumberOfCuts int) int {
    var sum int64 = 0
    for _, ribbon := range ribbons {
        sum += int64(ribbon)
    }
    return int(sum / int64(targetNumberOfCuts))
}
```