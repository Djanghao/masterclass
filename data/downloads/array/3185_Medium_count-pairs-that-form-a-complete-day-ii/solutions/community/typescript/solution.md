# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-that-form-a-complete-day-ii/solutions/5609182/](https://leetcode.com/problems/count-pairs-that-form-a-complete-day-ii/solutions/5609182/)

---

```Java []
public class Solution {

    private static final int _24_HOURS = 24;

    public long countCompleteDayPairs(int[] hours) {
        int[] remainderHours = new int[_24_HOURS];
        long countCompleteDayPairs = 0;

        for (int current : hours) {
            int remainder = current % _24_HOURS;
            int complementaryTo24Hours = (_24_HOURS - (remainder)) % _24_HOURS;
            countCompleteDayPairs += remainderHours[complementaryTo24Hours];
            ++remainderHours[remainder];
        }
        return countCompleteDayPairs;
    }
}
```
```JavaScript []
/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function (hours) {
    const _24_HOURS = 24;
    const remainderHours = new Array(_24_HOURS).fill(0);
    let countCompleteDayPairs = 0;

    for (let current of hours) {
        let remainder = current % _24_HOURS;
        let complementaryTo24Hours = (_24_HOURS - (remainder)) % _24_HOURS;
        countCompleteDayPairs += remainderHours[complementaryTo24Hours];
        ++remainderHours[remainder];
    }
    return countCompleteDayPairs;
};
```
```TypeScript []
function countCompleteDayPairs(hours: number[]): number {
    const _24_HOURS = 24;
    const remainderHours: number[] = new Array(_24_HOURS).fill(0);
    let countCompleteDayPairs = 0;

    for (let current of hours) {
        let remainder = current % _24_HOURS;
        let complementaryTo24Hours = (_24_HOURS - (remainder)) % _24_HOURS;
        countCompleteDayPairs += remainderHours[complementaryTo24Hours];
        ++remainderHours[remainder];
    }
    return countCompleteDayPairs;
};
```
```C++ []
#include <array>
#include <vector>
using namespace std;

class Solution {

    static const int _24_HOURS = 24;

public:
    long long countCompleteDayPairs(const vector<int>& hours) const {
        array<int, _24_HOURS> remainderHours{};
        long long countCompleteDayPairs = 0;

        for (const auto& current : hours) {
            int remainder = current % _24_HOURS;
            int complementaryTo24Hours = (_24_HOURS - (remainder)) % _24_HOURS;
            countCompleteDayPairs += remainderHours[complementaryTo24Hours];
            ++remainderHours[remainder];
        }
        return countCompleteDayPairs;
    }
};
```
```C# []
using System;

public class Solution
{
    private static readonly int _24_HOURS = 24;

    public long CountCompleteDayPairs(int[] hours)
    {
        int[] remainderHours = new int[_24_HOURS];
        long countCompleteDayPairs = 0;

        foreach (int current in hours)
        {
            int remainder = current % _24_HOURS;
            int complementaryTo24Hours = (_24_HOURS - (remainder)) % _24_HOURS;
            countCompleteDayPairs += remainderHours[complementaryTo24Hours];
            ++remainderHours[remainder];
        }
        return countCompleteDayPairs;
    }
}
```
```Kotlin []
class Solution {

    private companion object {
        const val _24_HOURS = 24
    }

    fun countCompleteDayPairs(hours: IntArray): Long {
        val remainderHours = IntArray(_24_HOURS)
        var countCompleteDayPairs: Long = 0

        for (current in hours) {
            val remainder = current % _24_HOURS
            val complementaryTo24Hours = (_24_HOURS - (remainder)) % _24_HOURS
            countCompleteDayPairs += remainderHours[complementaryTo24Hours]
            ++remainderHours[remainder]
        }
        return countCompleteDayPairs
    }
}
```
```Go []
package main

import "fmt"

const _24_HOURS = 24

func countCompleteDayPairs(hours []int) int64 {
    remainderHours := make([]int, _24_HOURS)
    var countCompleteDayPairs int64 = 0

    for _, current := range hours {
        remainder := current % _24_HOURS
        complementaryTo24Hours := (_24_HOURS - (remainder)) % _24_HOURS
        countCompleteDayPairs += int64(remainderHours[complementaryTo24Hours])
        remainderHours[remainder]++
    }
    return countCompleteDayPairs
}
```