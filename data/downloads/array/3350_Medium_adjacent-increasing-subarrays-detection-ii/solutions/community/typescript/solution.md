# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/adjacent-increasing-subarrays-detection-ii/solutions/6101156/](https://leetcode.com/problems/adjacent-increasing-subarrays-detection-ii/solutions/6101156/)

---

```Java []
import java.util.List;

public class Solution {

    private int maxLengthTwoAdjacentIncreasingSubarrays;

    public int maxIncreasingSubarrays(List<Integer> input) {
        int currentIncreasingCount = 1;
        int previousIncreasingCount = 0;

        for (int i = 1; i < input.size(); ++i) {
            updateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount);

            if (input.get(i - 1) >= input.get(i)) {
                previousIncreasingCount = currentIncreasingCount;
                currentIncreasingCount = 1;
                continue;
            }
            ++currentIncreasingCount;
        }
        updateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount);

        return maxLengthTwoAdjacentIncreasingSubarrays;
    }

    private int getLengthTwoAdjacentIncreasingSubarrays(int currentIncreasingCount, int previousIncreasingCount) {
        return Math.max(currentIncreasingCount / 2, Math.min(currentIncreasingCount, previousIncreasingCount));
    }

    private void updateMaxLengthTwoAdjacentIncreasingSubarrays(int currentIncreasingCount, int previousIncreasingCount) {
        maxLengthTwoAdjacentIncreasingSubarrays = Math.max(maxLengthTwoAdjacentIncreasingSubarrays,
                getLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount));
    }
}
```
```JavaScript []
/**
 * @param {number[]} input
 * @return {number}
 */
var maxIncreasingSubarrays = function (input) {
    this.maxLengthTwoAdjacentIncreasingSubarrays = 0;
    let currentIncreasingCount = 1;
    let previousIncreasingCount = 0;

    for (let i = 1; i < input.length; ++i) {
        updateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount);

        if (input[i - 1] >= input[i]) {
            previousIncreasingCount = currentIncreasingCount;
            currentIncreasingCount = 1;
            continue;
        }
        ++currentIncreasingCount;
    }
    updateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount);

    return this.maxLengthTwoAdjacentIncreasingSubarrays;
};

/**
 * @param {number} currentIncreasingCount
 * @param {number} previousIncreasingCount 
 * @return {number}
 */
function getLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount) {
    return Math.max(Math.floor(currentIncreasingCount / 2), Math.min(currentIncreasingCount, previousIncreasingCount));
}

/**
 * @param {number} currentIncreasingCount
 * @param {number} previousIncreasingCount 
 * @return {void}
 */
function updateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount) {
    this.maxLengthTwoAdjacentIncreasingSubarrays = Math.max(this.maxLengthTwoAdjacentIncreasingSubarrays,
            getLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount));
}
```
```TypeScript []
function maxIncreasingSubarrays(input: number[]): number {
    this.maxLengthTwoAdjacentIncreasingSubarrays = 0;
    let currentIncreasingCount = 1;
    let previousIncreasingCount = 0;

    for (let i = 1; i < input.length; ++i) {
        updateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount);

        if (input[i - 1] >= input[i]) {
            previousIncreasingCount = currentIncreasingCount;
            currentIncreasingCount = 1;
            continue;
        }
        ++currentIncreasingCount;
    }
    updateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount);

    return this.maxLengthTwoAdjacentIncreasingSubarrays;
};

function getLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount: number, previousIncreasingCount: number): number {
    return Math.max(Math.floor(currentIncreasingCount / 2), Math.min(currentIncreasingCount, previousIncreasingCount));
}

function updateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount: number, previousIncreasingCount: number): void {
    this.maxLengthTwoAdjacentIncreasingSubarrays = Math.max(this.maxLengthTwoAdjacentIncreasingSubarrays,
        getLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount));
}
```
```C++ []
#include <vector>
#include <algorithm>
using namespace std;

/*
 The code will run faster with ios::sync_with_stdio(0).
 However, this should not be used in production code and interactive problems.
 In this particular problem, it is ok to apply ios::sync_with_stdio(0).

 Many of the top-ranked C++ solutions for time on leetcode apply this trick,
 so, for a fairer assessment of the time percentile of my code
 you could outcomment the lambda expression below for a faster run.
*/

/*
 const static auto speedup = [] {
    ios::sync_with_stdio(0);
    return nullptr;
}();
*/

class Solution {

    int maxLengthTwoAdjacentIncreasingSubarrays = 0;

public:
    int maxIncreasingSubarrays(const vector<int>& input) {
        int currentIncreasingCount = 1;
        int previousIncreasingCount = 0;

        for (size_t i = 1; i < input.size(); ++i) {
            updateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount);

            if (input[i - 1] >= input[i]) {
                previousIncreasingCount = currentIncreasingCount;
                currentIncreasingCount = 1;
                continue;
            }
            ++currentIncreasingCount;
        }
        updateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount);

        return maxLengthTwoAdjacentIncreasingSubarrays;
    }

private:
    int getLengthTwoAdjacentIncreasingSubarrays(int currentIncreasingCount, int previousIncreasingCount) const {
        return max(currentIncreasingCount / 2, min(currentIncreasingCount, previousIncreasingCount));
    }

    void updateMaxLengthTwoAdjacentIncreasingSubarrays(int currentIncreasingCount, int previousIncreasingCount) {
        maxLengthTwoAdjacentIncreasingSubarrays = max(maxLengthTwoAdjacentIncreasingSubarrays,
                getLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount));
    }
};
```
```C# []
using System;
using System.Collections.Generic;

public class Solution
{
    private int maxLengthTwoAdjacentIncreasingSubarrays;

    public int MaxIncreasingSubarrays(IList<int> input)
    {
        int currentIncreasingCount = 1;
        int previousIncreasingCount = 0;

        for (int i = 1; i < input.Count; ++i)
        {
            UpdateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount);

            if (input[i - 1] >= input[i])
            {
                previousIncreasingCount = currentIncreasingCount;
                currentIncreasingCount = 1;
                continue;
            }
            ++currentIncreasingCount;
        }
        UpdateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount);

        return maxLengthTwoAdjacentIncreasingSubarrays;
    }

    private int GetLengthTwoAdjacentIncreasingSubarrays(int currentIncreasingCount, int previousIncreasingCount)
    {
        return Math.Max(currentIncreasingCount / 2, Math.Min(currentIncreasingCount, previousIncreasingCount));
    }

    private void UpdateMaxLengthTwoAdjacentIncreasingSubarrays(int currentIncreasingCount, int previousIncreasingCount)
    {
        maxLengthTwoAdjacentIncreasingSubarrays = Math.Max(maxLengthTwoAdjacentIncreasingSubarrays,
                GetLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount));
    }
}
```
```Kotlin []
import kotlin.math.min
import kotlin.math.max

class Solution {

    private var maxLengthTwoAdjacentIncreasingSubarrays = 0

    fun maxIncreasingSubarrays(input: List<Int>): Int {
        var currentIncreasingCount = 1
        var previousIncreasingCount = 0

        for (i in 1..<input.size) {
            updateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount)

            if (input[i - 1] >= input[i]) {
                previousIncreasingCount = currentIncreasingCount
                currentIncreasingCount = 1
                continue
            }
            ++currentIncreasingCount
        }
        updateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount)

        return maxLengthTwoAdjacentIncreasingSubarrays
    }

    private fun getLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount: Int, previousIncreasingCount: Int): Int {
        return max(currentIncreasingCount / 2, min(currentIncreasingCount, previousIncreasingCount))
    }

    private fun updateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount: Int, previousIncreasingCount: Int) {
        maxLengthTwoAdjacentIncreasingSubarrays = max(maxLengthTwoAdjacentIncreasingSubarrays,
            getLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount)
        )
    }
}
```
```Go []
package main

import "fmt"

var maxLengthTwoAdjacentIncreasingSubarrays int

func maxIncreasingSubarrays(input []int) int {
    var currentIncreasingCount = 1
    var previousIncreasingCount = 0
    maxLengthTwoAdjacentIncreasingSubarrays = 0

    for i := 1; i < len(input); i++ {
        updateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount)

        if input[i-1] >= input[i] {
            previousIncreasingCount = currentIncreasingCount
            currentIncreasingCount = 1
            continue
        }
        currentIncreasingCount++
    }
    updateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount)

    return maxLengthTwoAdjacentIncreasingSubarrays
}

func getLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount int, previousIncreasingCount int) int {
    return max(currentIncreasingCount/2, min(currentIncreasingCount, previousIncreasingCount))
}

func updateMaxLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount int, previousIncreasingCount int) {
    maxLengthTwoAdjacentIncreasingSubarrays = max(maxLengthTwoAdjacentIncreasingSubarrays,
            getLengthTwoAdjacentIncreasingSubarrays(currentIncreasingCount, previousIncreasingCount))
}
```