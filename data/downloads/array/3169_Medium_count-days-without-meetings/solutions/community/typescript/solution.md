# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-days-without-meetings/solutions/5970244/](https://leetcode.com/problems/count-days-without-meetings/solutions/5970244/)

---

```Java []
import java.util.Arrays;

public class Solution {

    private static final int FIRST_DAY = 1;

    public int countDays(int numberOfDays, int[][] meetings) {

        Arrays.sort(meetings, (x, y) -> x[0] - y[0]);
        int totalMinStartTime = meetings[0][0];
        int totalMaxEndTime = Integer.MIN_VALUE;

        for (int[] meeting : meetings) {
            totalMaxEndTime = Math.max(totalMaxEndTime, meeting[1]);
        }

        int latestMaxEndTime = meetings[0][1];
        int daysAvailableForWorkWithoutMeetings = (totalMinStartTime - FIRST_DAY) + (numberOfDays - totalMaxEndTime);

        for (int i = 1; i < meetings.length; ++i) {
            if (latestMaxEndTime < meetings[i][0]) {
                daysAvailableForWorkWithoutMeetings += meetings[i][0] - latestMaxEndTime - 1;
            }
            latestMaxEndTime = Math.max(latestMaxEndTime, meetings[i][1]);
        }

        return daysAvailableForWorkWithoutMeetings;
    }
}
```
```JavaScript []
/**
 * @param {number} numberOfDays
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function (numberOfDays, meetings) {

    const FIRST_DAY = 1;
    meetings.sort((x, y) => x[0] - y[0]);
    let totalMinStartTime = meetings[0][0];
    let totalMaxEndTime = Number.MIN_SAFE_INTEGER;

    for (let meeting of meetings) {
        totalMaxEndTime = Math.max(totalMaxEndTime, meeting[1]);
    }

    let latestMaxEndTime = meetings[0][1];
    let daysAvailableForWorkWithoutMeetings = (totalMinStartTime - FIRST_DAY) + (numberOfDays - totalMaxEndTime);

    for (let i = 1; i < meetings.length; ++i) {
        if (latestMaxEndTime < meetings[i][0]) {
            daysAvailableForWorkWithoutMeetings += meetings[i][0] - latestMaxEndTime - 1;
        }
        latestMaxEndTime = Math.max(latestMaxEndTime, meetings[i][1]);
    }

    return daysAvailableForWorkWithoutMeetings;
};
```
```TypeScript []
function countDays(numberOfDays: number, meetings: number[][]): number {

    const FIRST_DAY = 1;
    meetings.sort((x, y) => x[0] - y[0]);
    let totalMinStartTime = meetings[0][0];
    let totalMaxEndTime = Number.MIN_SAFE_INTEGER;

    for (let meeting of meetings) {
        totalMaxEndTime = Math.max(totalMaxEndTime, meeting[1]);
    }

    let latestMaxEndTime = meetings[0][1];
    let daysAvailableForWorkWithoutMeetings = (totalMinStartTime - FIRST_DAY) + (numberOfDays - totalMaxEndTime);

    for (let i = 1; i < meetings.length; ++i) {
        if (latestMaxEndTime < meetings[i][0]) {
            daysAvailableForWorkWithoutMeetings += meetings[i][0] - latestMaxEndTime - 1;
        }
        latestMaxEndTime = Math.max(latestMaxEndTime, meetings[i][1]);
    }

    return daysAvailableForWorkWithoutMeetings;
};
```
```C++ []
#include <vector>
#include <limits>
#include <ranges>
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

    static const int FIRST_DAY = 1;

public:
    int countDays(int numberOfDays, vector<vector<int>>& meetings) const {

        ranges::sort(meetings, [](const auto& x, const auto& y) {return x[0] < y[0]; });
        int totalMinStartTime = meetings[0][0];
        int totalMaxEndTime = numeric_limits<int>::min();

        for (const auto& meeting : meetings) {
            totalMaxEndTime = max(totalMaxEndTime, meeting[1]);
        }

        int latestMaxEndTime = meetings[0][1];
        int daysAvailableForWorkWithoutMeetings = (totalMinStartTime - FIRST_DAY) + (numberOfDays - totalMaxEndTime);

        for (int i = 1; i < meetings.size(); ++i) {
            if (latestMaxEndTime < meetings[i][0]) {
                daysAvailableForWorkWithoutMeetings += meetings[i][0] - latestMaxEndTime - 1;
            }
            latestMaxEndTime = max(latestMaxEndTime, meetings[i][1]);
        }

        return daysAvailableForWorkWithoutMeetings;
    }
};
```
```C# []
using System;

public class Solution
{
    private static readonly int FIRST_DAY = 1;

    public int CountDays(int numberOfDays, int[][] meetings)
    {
        Array.Sort(meetings, (x, y) => x[0] - y[0]);
        int totalMinStartTime = meetings[0][0];
        int totalMaxEndTime = int.MinValue;

        foreach (int[] meeting in meetings)
        {
            totalMaxEndTime = Math.Max(totalMaxEndTime, meeting[1]);
        }

        int latestMaxEndTime = meetings[0][1];
        int daysAvailableForWorkWithoutMeetings = (totalMinStartTime - FIRST_DAY) + (numberOfDays - totalMaxEndTime);

        for (int i = 1; i < meetings.Length; ++i)
        {
            if (latestMaxEndTime < meetings[i][0])
            {
                daysAvailableForWorkWithoutMeetings += meetings[i][0] - latestMaxEndTime - 1;
            }
            latestMaxEndTime = Math.Max(latestMaxEndTime, meetings[i][1]);
        }

        return daysAvailableForWorkWithoutMeetings;
    }
}
```
```Kotlin []
import kotlin.math.max

class Solution {

    private companion object {
        const val FIRST_DAY = 1
    }

    fun countDays(numberOfDays: Int, meetings: Array<IntArray>): Int {

        meetings.sortWith() { x, y -> x[0] - y[0] }
        var totalMinStartTime = meetings[0][0]
        var totalMaxEndTime = Int.MIN_VALUE

        for (meeting in meetings) {
            totalMaxEndTime = max(totalMaxEndTime, meeting[1])
        }

        var latestMaxEndTime = meetings[0][1]
        var daysAvailableForWorkWithoutMeetings = (totalMinStartTime - FIRST_DAY) + (numberOfDays - totalMaxEndTime)

        for (i in 1..<meetings.size) {
            if (latestMaxEndTime < meetings[i][0]) {
                daysAvailableForWorkWithoutMeetings += meetings[i][0] - latestMaxEndTime - 1
            }
            latestMaxEndTime = max(latestMaxEndTime, meetings[i][1])
        }

        return daysAvailableForWorkWithoutMeetings
    }
}
```
```Go []
package main

import (
    "fmt"
    "math"
    "sort"
)

const FIRST_DAY = 1

func countDays(numberOfDays int, meetings [][]int) int {

    sort.Slice(meetings, func(i int, j int) bool { return meetings[i][0] < meetings[j][0] })
    totalMinStartTime := meetings[0][0]
    totalMaxEndTime := math.MinInt32

    for _, meeting := range meetings {
        totalMaxEndTime = max(totalMaxEndTime, meeting[1])
    }

    latestMaxEndTime := meetings[0][1]
    daysAvailableForWorkWithoutMeetings := (totalMinStartTime - FIRST_DAY) + (numberOfDays - totalMaxEndTime)

    for i := range meetings {
        if latestMaxEndTime < meetings[i][0] {
            daysAvailableForWorkWithoutMeetings += meetings[i][0] - latestMaxEndTime - 1
        }
        latestMaxEndTime = max(latestMaxEndTime, meetings[i][1])
    }

    return daysAvailableForWorkWithoutMeetings
}
```