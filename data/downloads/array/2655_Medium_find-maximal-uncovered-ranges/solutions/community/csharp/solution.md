# Java | JavaScript | C++ | C# Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-maximal-uncovered-ranges/solutions/4469693/](https://leetcode.com/problems/find-maximal-uncovered-ranges/solutions/4469693/)

---

```Java []
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Solution {

    private static final int LOWER_LIMIT = 0;

    public int[][] findMaximalUncoveredRanges(int upperLimit, int[][] ranges) {
        //'upperLimit' is zero based, therefore '--upperLimit' brings it to its actual value.
        --upperLimit;

        List<int[]> allMaximalUncoveredRanges = new ArrayList<>();
        if (ranges.length == 0) {
            allMaximalUncoveredRanges.add(new int[]{LOWER_LIMIT, upperLimit});
            return allMaximalUncoveredRanges.toArray(new int[allMaximalUncoveredRanges.size()][2]);
        }

        Arrays.sort(ranges, (x, y) -> x[0] - y[0]);

        int previousMaxRangeEnd = LOWER_LIMIT - 1;
        for (int[] currentRange : ranges) {
            int currentStart = currentRange[0];
            int currentEnd = currentRange[1];

            if (previousMaxRangeEnd + 1 < currentStart) {
                allMaximalUncoveredRanges.add(new int[]{previousMaxRangeEnd + 1, currentStart - 1});
            }
            previousMaxRangeEnd = Math.max(previousMaxRangeEnd, currentEnd);
        }

        if (previousMaxRangeEnd < upperLimit) {
            allMaximalUncoveredRanges.add(new int[]{previousMaxRangeEnd + 1, upperLimit});
        }

        return allMaximalUncoveredRanges.toArray(new int[allMaximalUncoveredRanges.size()][2]);
    }
}
```
```JavaScript []
/**
 * @param {number} upperLimit
 * @param {number[][]} ranges
 * @return {number[][]}
 */
var findMaximalUncoveredRanges = function (upperLimit, ranges) {
    const LOWER_LIMIT = 0;
    //'upperLimit' is zero based, therefore '--upperLimit' brings it to its actual value.
    --upperLimit;

    const allMaximalUncoveredRanges = new Array();
    if (ranges.length === 0) {
        allMaximalUncoveredRanges.push([LOWER_LIMIT, upperLimit]);
        return allMaximalUncoveredRanges;
    }

    ranges.sort((x, y) => x[0] - y[0]);

    let previousMaxRangeEnd = LOWER_LIMIT - 1;
    for (let [currentStart, currentEnd] of ranges) {
        if (previousMaxRangeEnd + 1 < currentStart) {
            allMaximalUncoveredRanges.push([previousMaxRangeEnd + 1, currentStart - 1]);
        }
        previousMaxRangeEnd = Math.max(previousMaxRangeEnd, currentEnd);
    }

    if (previousMaxRangeEnd < upperLimit) {
        allMaximalUncoveredRanges.push([previousMaxRangeEnd + 1, upperLimit]);
    }

    return allMaximalUncoveredRanges;
};
```
```C++ []
#include <ranges>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
    
    constexpr static int LOWER_LIMIT = 0;
    
public:
    vector<vector<int>> findMaximalUncoveredRanges(int upperLimit, vector<vector<int>>& ranges) const {
        //'upperLimit' is zero based, therefore '--upperLimit' brings it to its actual value.
        --upperLimit;

        vector<vector<int>> allMaximalUncoveredRanges;
        if (ranges.empty()) {
            allMaximalUncoveredRanges.push_back({LOWER_LIMIT, upperLimit});
            return allMaximalUncoveredRanges;
        }

        // Alternatively, prior to C++20 versions:
        // sort(ranges.begin(), ranges.end(), lambda expression);
        ranges::sort(ranges, [](const vector<int>& x, const vector<int>& y) {
            return x[0] < y[0]; });

        int previousMaxRangeEnd = LOWER_LIMIT - 1;
        for (const auto& currentRange : ranges) {
            int currentStart = currentRange[0];
            int currentEnd = currentRange[1];

            if (previousMaxRangeEnd + 1 < currentStart) {
                allMaximalUncoveredRanges.push_back({previousMaxRangeEnd + 1, currentStart - 1});
            }
            previousMaxRangeEnd = max(previousMaxRangeEnd, currentEnd);
        }

        if (previousMaxRangeEnd < upperLimit) {
            allMaximalUncoveredRanges.push_back({previousMaxRangeEnd + 1, upperLimit});
        }

        return allMaximalUncoveredRanges;
    }
};
```
```C# []
using System;
using System.Collections.Generic;

public class Solution
{
    private static readonly int LOWER_LIMIT = 0;

    public int[][] FindMaximalUncoveredRanges(int upperLimit, int[][] ranges)
    {
        //'upperLimit' is zero based, therefore '--upperLimit' brings it to its actual value.
        --upperLimit;

        IList<int[]> allMaximalUncoveredRanges = new List<int[]>();
        if (ranges.Length == 0)
        {
            allMaximalUncoveredRanges.Add(new int[] { LOWER_LIMIT, upperLimit });
            return allMaximalUncoveredRanges.ToArray<int[]>();
        }

        Array.Sort(ranges, (x, y) => x[0] - y[0]);

        int previousMaxRangeEnd = LOWER_LIMIT - 1;
        foreach (int[] currentRange in ranges)
        {
            int currentStart = currentRange[0];
            int currentEnd = currentRange[1];

            if (previousMaxRangeEnd + 1 < currentStart)
            {
                allMaximalUncoveredRanges.Add(new int[] { previousMaxRangeEnd + 1, currentStart - 1 });
            }
            previousMaxRangeEnd = Math.Max(previousMaxRangeEnd, currentEnd);
        }

        if (previousMaxRangeEnd < upperLimit)
        {
            allMaximalUncoveredRanges.Add(new int[] { previousMaxRangeEnd + 1, upperLimit });
        }

        return allMaximalUncoveredRanges.ToArray<int[]>();
    }
}
```