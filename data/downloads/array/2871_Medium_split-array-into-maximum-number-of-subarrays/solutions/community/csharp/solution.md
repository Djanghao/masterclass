# Java | JavaScript | C++ | C# Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-into-maximum-number-of-subarrays/solutions/4118410/](https://leetcode.com/problems/split-array-into-maximum-number-of-subarrays/solutions/4118410/)

---

```Java []
public class Solution {

    private static final int NO_POSSIBLE_DIVISIONS_OF_THE_ARRAY = 1;

    public int maxSubarrays(int[] inputValues) {

        int minScore = Integer.MAX_VALUE;
        for (int currentValue : inputValues) {
            minScore &= currentValue;
        }

        if (minScore != 0) {
            return NO_POSSIBLE_DIVISIONS_OF_THE_ARRAY;
        }

        int currentScore = Integer.MAX_VALUE;
        int maxNumberOfSubarraysWithMinScore = 0;

        for (int currentValue : inputValues) {
            currentScore &= currentValue;
            if (currentScore == 0) {
                ++maxNumberOfSubarraysWithMinScore;
                currentScore = Integer.MAX_VALUE;
            }
        }

        return maxNumberOfSubarraysWithMinScore;
    }
}
```
```JavaScript []
/**
 * @param {number[]} inputValues
 * @return {number}
 */
var maxSubarrays = function (inputValues) {

    const NO_POSSIBLE_DIVISIONS_OF_THE_ARRAY = 1;
    
    let minScore = Number.MAX_SAFE_INTEGER;
    for (let currentValue of inputValues) {
        minScore &= currentValue;
    }

    if (minScore !== 0) {
        return NO_POSSIBLE_DIVISIONS_OF_THE_ARRAY;
    }

    let currentScore = Number.MAX_SAFE_INTEGER;
    let maxNumberOfSubarraysWithMinScore = 0;

    for (let currentValue of inputValues) {
        currentScore &= currentValue;
        if (currentScore === 0) {
            ++maxNumberOfSubarraysWithMinScore;
            currentScore = Number.MAX_SAFE_INTEGER;
        }
    }

    return maxNumberOfSubarraysWithMinScore;
};
```
```C++ []
#include <vector>
using namespace std;

class Solution {
    
    static const int NO_POSSIBLE_DIVISIONS_OF_THE_ARRAY = 1;

public:
    int maxSubarrays(const vector<int>& inputValues) const {

        int minScore = INT_MAX;
        for (const auto& currentValue : inputValues) {
            minScore &= currentValue;
        }

        if (minScore != 0) {
            return NO_POSSIBLE_DIVISIONS_OF_THE_ARRAY;
        }

        int currentScore = INT_MAX;
        int maxNumberOfSubarraysWithMinScore = 0;

        for (const auto& currentValue : inputValues) {
            currentScore &= currentValue;
            if (currentScore == 0) {
                ++maxNumberOfSubarraysWithMinScore;
                currentScore = INT_MAX;
            }
        }

        return maxNumberOfSubarraysWithMinScore;
    }
};
```
```C# []
using System;

public class Solution
{
    private static readonly int NO_POSSIBLE_DIVISIONS_OF_THE_ARRAY = 1;

    public int MaxSubarrays(int[] inputValues)
    {
        int minScore = int.MaxValue;
        foreach (int currentValue in inputValues)
        {
            minScore &= currentValue;
        }

        if (minScore != 0)
        {
            return NO_POSSIBLE_DIVISIONS_OF_THE_ARRAY;
        }

        int currentScore = int.MaxValue;
        int maxNumberOfSubarraysWithMinScore = 0;

        foreach (int currentValue in inputValues)
        {
            currentScore &= currentValue;
            if (currentScore == 0)
            {
                ++maxNumberOfSubarraysWithMinScore;
                currentScore = int.MaxValue;
            }
        }

        return maxNumberOfSubarraysWithMinScore;
    }
}
```