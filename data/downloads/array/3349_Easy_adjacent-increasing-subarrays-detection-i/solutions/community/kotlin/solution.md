# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/solutions/6099769/](https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/solutions/6099769/)

---

```Java []
import java.util.List;

public class Solution {

    private int minLengthOfIncreasingSubarray;

    public boolean hasIncreasingSubarrays(List<Integer> input, int minLengthOfIncreasingSubarray) {
        this.minLengthOfIncreasingSubarray = minLengthOfIncreasingSubarray;
        int currentIncreasingCount = 1;
        int previousIncreasingCount = 0;

        for (int i = 1; i < input.size(); ++i) {
            if (foundTwoAdjacentIncreasingSubarraysWithMinLength(currentIncreasingCount, previousIncreasingCount)) {
                return true;
            }

            if (input.get(i - 1) >= input.get(i)) {
                previousIncreasingCount = currentIncreasingCount;
                currentIncreasingCount = 1;
                continue;
            }
            ++currentIncreasingCount;
        }
        return foundTwoAdjacentIncreasingSubarraysWithMinLength(currentIncreasingCount, previousIncreasingCount);
    }

    private boolean foundTwoAdjacentIncreasingSubarraysWithMinLength(int currentIncreasingCount, int previousIncreasingCount) {
        return currentIncreasingCount >= 2 * minLengthOfIncreasingSubarray
               || (currentIncreasingCount >= minLengthOfIncreasingSubarray
               && previousIncreasingCount >= minLengthOfIncreasingSubarray);
    }
}
```
```JavaScript []
/**
 * @param {number[]} input
 * @param {number} minLengthOfIncreasingSubarray
 * @return {boolean}
 */
var hasIncreasingSubarrays = function (input, minLengthOfIncreasingSubarray) {
    this.minLengthOfIncreasingSubarray = minLengthOfIncreasingSubarray;
    let currentIncreasingCount = 1;
    let previousIncreasingCount = 0;

    for (let i = 1; i < input.length; ++i) {
        if (foundTwoAdjacentIncreasingSubarraysWithMinLength(currentIncreasingCount, previousIncreasingCount)) {
            return true;
        }

        if (input[i - 1] >= input[i]) {
            previousIncreasingCount = currentIncreasingCount;
            currentIncreasingCount = 1;
            continue;
        }
        ++currentIncreasingCount;
    }
    return foundTwoAdjacentIncreasingSubarraysWithMinLength(currentIncreasingCount, previousIncreasingCount);
};


/**
 * @param {number} currentIncreasingCount
 * @param {number} previousIncreasingCount
 * @return {boolean}
 */
function foundTwoAdjacentIncreasingSubarraysWithMinLength(currentIncreasingCount, previousIncreasingCount) {
    return currentIncreasingCount >= 2 * this.minLengthOfIncreasingSubarray
           || (currentIncreasingCount >= this.minLengthOfIncreasingSubarray
           && previousIncreasingCount >= this.minLengthOfIncreasingSubarray);
}
```
```TypeScript []
function hasIncreasingSubarrays(input: number[], minLengthOfIncreasingSubarray: number): boolean {
    this.minLengthOfIncreasingSubarray = minLengthOfIncreasingSubarray;
    let currentIncreasingCount = 1;
    let previousIncreasingCount = 0;

    for (let i = 1; i < input.length; ++i) {
        if (foundTwoAdjacentIncreasingSubarraysWithMinLength(currentIncreasingCount, previousIncreasingCount)) {
            return true;
        }

        if (input[i - 1] >= input[i]) {
            previousIncreasingCount = currentIncreasingCount;
            currentIncreasingCount = 1;
            continue;
        }
        ++currentIncreasingCount;
    }
    return foundTwoAdjacentIncreasingSubarraysWithMinLength(currentIncreasingCount, previousIncreasingCount);
};


function foundTwoAdjacentIncreasingSubarraysWithMinLength(currentIncreasingCount: number, previousIncreasingCount: number): boolean {
    return currentIncreasingCount >= 2 * this.minLengthOfIncreasingSubarray
           || (currentIncreasingCount >= this.minLengthOfIncreasingSubarray
           && previousIncreasingCount >= this.minLengthOfIncreasingSubarray);
}
```
```C++ []
#include <vector>
using namespace std;

class Solution {

    int minLengthOfIncreasingSubarray = 0;

public:
    bool hasIncreasingSubarrays(const vector<int>& input, int minLengthOfIncreasingSubarray) {
        this->minLengthOfIncreasingSubarray = minLengthOfIncreasingSubarray;
        int currentIncreasingCount = 1;
        int previousIncreasingCount = 0;

        for (size_t i = 1; i < input.size(); ++i) {
            if (foundTwoAdjacentIncreasingSubarraysWithMinLength(currentIncreasingCount, previousIncreasingCount)) {
                return true;
            }

            if (input[i - 1] >= input[i]) {
                previousIncreasingCount = currentIncreasingCount;
                currentIncreasingCount = 1;
                continue;
            }
            ++currentIncreasingCount;
        }
        return foundTwoAdjacentIncreasingSubarraysWithMinLength(currentIncreasingCount, previousIncreasingCount);
    }

private:
    bool foundTwoAdjacentIncreasingSubarraysWithMinLength(int currentIncreasingCount, int previousIncreasingCount) const {
        return currentIncreasingCount >= 2 * minLengthOfIncreasingSubarray
               || (currentIncreasingCount >= minLengthOfIncreasingSubarray
               && previousIncreasingCount >= minLengthOfIncreasingSubarray);
    }
};
```
```C# []
using System;

public class Solution
{
    private int minLengthOfIncreasingSubarray;

    public bool HasIncreasingSubarrays(IList<int> input, int minLengthOfIncreasingSubarray)
    {
        this.minLengthOfIncreasingSubarray = minLengthOfIncreasingSubarray;
        int currentIncreasingCount = 1;
        int previousIncreasingCount = 0;

        for (int i = 1; i < input.Count; ++i)
        {
            if (FoundTwoAdjacentIncreasingSubarraysWithMinLength(currentIncreasingCount, previousIncreasingCount))
            {
                return true;
            }

            if (input[i - 1] >= input[i])
            {
                previousIncreasingCount = currentIncreasingCount;
                currentIncreasingCount = 1;
                continue;
            }
            ++currentIncreasingCount;
        }
        return FoundTwoAdjacentIncreasingSubarraysWithMinLength(currentIncreasingCount, previousIncreasingCount);
    }

    private bool FoundTwoAdjacentIncreasingSubarraysWithMinLength(int currentIncreasingCount, int previousIncreasingCount)
    {
        return currentIncreasingCount >= 2 * minLengthOfIncreasingSubarray
               || (currentIncreasingCount >= minLengthOfIncreasingSubarray
               && previousIncreasingCount >= minLengthOfIncreasingSubarray);
    }
}
```
```Kotlin []
class Solution {

    var minLengthOfIncreasingSubarray = 0

    fun hasIncreasingSubarrays(input: List<Int>, minLengthOfIncreasingSubarray: Int): Boolean {
        this.minLengthOfIncreasingSubarray = minLengthOfIncreasingSubarray
        var currentIncreasingCount = 1
        var previousIncreasingCount = 0

        for (i in 1..<input.size) {
            if (foundTwoAdjacentIncreasingSubarraysWithMinLength(currentIncreasingCount, previousIncreasingCount)) {
                return true
            }

            if (input[i - 1] >= input[i]) {
                previousIncreasingCount = currentIncreasingCount
                currentIncreasingCount = 1
                continue
            }
            ++currentIncreasingCount
        }
        return foundTwoAdjacentIncreasingSubarraysWithMinLength(currentIncreasingCount, previousIncreasingCount)
    }

    private fun foundTwoAdjacentIncreasingSubarraysWithMinLength(currentIncreasingCount: Int, previousIncreasingCount: Int): Boolean {
        return currentIncreasingCount >= 2 * minLengthOfIncreasingSubarray
               || (currentIncreasingCount >= minLengthOfIncreasingSubarray
               && previousIncreasingCount >= minLengthOfIncreasingSubarray)
    }
}
```
```Go []
package main

import "fmt"

var minLengthOfIncreasingSubarray int

func hasIncreasingSubarrays(input []int, minimumLengthOfIncreasingSubarray int) bool {
    minLengthOfIncreasingSubarray = minimumLengthOfIncreasingSubarray
    currentIncreasingCount := 1
    previousIncreasingCount := 0

    for i := 1; i < len(input); i++ {
        if foundTwoAdjacentIncreasingSubarraysWithMinLength(currentIncreasingCount, previousIncreasingCount) {
            return true
        }

        if input[i-1] >= input[i] {
            previousIncreasingCount = currentIncreasingCount
            currentIncreasingCount = 1
            continue
        }
        currentIncreasingCount++
    }
    return foundTwoAdjacentIncreasingSubarraysWithMinLength(currentIncreasingCount, previousIncreasingCount)
}

func foundTwoAdjacentIncreasingSubarraysWithMinLength(currentIncreasingCount int, previousIncreasingCount int) bool {
    return currentIncreasingCount >= 2 * minLengthOfIncreasingSubarray ||
              (currentIncreasingCount >= minLengthOfIncreasingSubarray &&
              previousIncreasingCount >= minLengthOfIncreasingSubarray)
}
```