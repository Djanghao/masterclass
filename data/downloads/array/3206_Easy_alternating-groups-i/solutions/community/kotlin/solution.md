# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/alternating-groups-i/solutions/5442889/](https://leetcode.com/problems/alternating-groups-i/solutions/5442889/)

---

```Java []
public class Solution {

    public int numberOfAlternatingGroups(int[] colors) {
        int countGroupsOfAlternatingColors = 0;
        for (int i = 0; i < colors.length; ++i) {
            countGroupsOfAlternatingColors += isAlternatingColorsGroup(i, colors) ? 1 : 0;
        }
        return countGroupsOfAlternatingColors;
    }

    private boolean isAlternatingColorsGroup(int index, int[] colors) {
        int previousIndex = (colors.length - 1 + index) % colors.length;
        int nextIndex = (1 + index) % colors.length;
        return colors[previousIndex] != colors[index] && colors[index] != colors[nextIndex];
    }
}
```
```JavaScript []
/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors) {
    let countGroupsOfAlternatingColors = 0;
    for (let i = 0; i < colors.length; ++i) {
        countGroupsOfAlternatingColors += isAlternatingColorsGroup(i, colors) ? 1 : 0;
    }
    return countGroupsOfAlternatingColors;
};

/**
 * @param {number} index
 * @param {number[]} colors
 * @return {boolean}
 */
function isAlternatingColorsGroup(index, colors) {
    let previousIndex = (colors.length - 1 + index) % colors.length;
    let nextIndex = (1 + index) % colors.length;
    return colors[previousIndex] !== colors[index] && colors[index] !== colors[nextIndex];
}
```
```TypeScript []
function numberOfAlternatingGroups(colors: number[]): number {
    let countGroupsOfAlternatingColors = 0;
    for (let i = 0; i < colors.length; ++i) {
        countGroupsOfAlternatingColors += isAlternatingColorsGroup(i, colors) ? 1 : 0;
    }
    return countGroupsOfAlternatingColors;
};

function isAlternatingColorsGroup(index: number, colors: number[]): boolean {
    let previousIndex = (colors.length - 1 + index) % colors.length;
    let nextIndex = (1 + index) % colors.length;
    return colors[previousIndex] !== colors[index] && colors[index] !== colors[nextIndex];
}
```

```C++ []
#include <span>
#include <vector>
using namespace std;

class Solution {

public:
    int numberOfAlternatingGroups(const vector<int>& colors) const {
        int countGroupsOfAlternatingColors = 0;
        for (int i = 0; i < colors.size(); ++i) {
            countGroupsOfAlternatingColors += isAlternatingColorsGroup(i, colors) ? 1 : 0;
        }
        return countGroupsOfAlternatingColors;
    }

private:
    bool isAlternatingColorsGroup(int index, span<const int> colors) const {
        int previousIndex = (colors.size() - 1 + index) % colors.size();
        int nextIndex = (1 + index) % colors.size();
        return colors[previousIndex] != colors[index] && colors[index] != colors[nextIndex];
    }
};
```
```C# []
using System;

public class Solution
{
    public int NumberOfAlternatingGroups(int[] colors)
    {
        int countGroupsOfAlternatingColors = 0;
        for (int i = 0; i < colors.Length; ++i)
        {
            countGroupsOfAlternatingColors += IsAlternatingColorsGroup(i, colors) ? 1 : 0;
        }
        return countGroupsOfAlternatingColors;
    }

    private bool IsAlternatingColorsGroup(int index, int[] colors)
    {
        int previousIndex = (colors.Length - 1 + index) % colors.Length;
        int nextIndex = (1 + index) % colors.Length;
        return colors[previousIndex] != colors[index] && colors[index] != colors[nextIndex];
    }
}
```
```Kotlin []
class Solution {
    fun numberOfAlternatingGroups(colors: IntArray): Int {
        var countGroupsOfAlternatingColors = 0
        for (i in colors.indices) {
            countGroupsOfAlternatingColors += if (isAlternatingColorsGroup(i, colors)) 1 else 0
        }
        return countGroupsOfAlternatingColors
    }

    private fun isAlternatingColorsGroup(index: Int, colors: IntArray): Boolean {
        var previousIndex = (colors.size - 1 + index) % colors.size
        var nextIndex = (1 + index) % colors.size
        return colors[previousIndex] != colors[index] && colors[index] != colors[nextIndex]
    }
}
```
```Go []
package main

import "fmt"

func numberOfAlternatingGroups(colors []int) int {
    countGroupsOfAlternatingColors := 0
    for i := range colors {
        countGroupsOfAlternatingColors += Ternary(isAlternatingColorsGroup(i, colors), 1, 0)
    }
    return countGroupsOfAlternatingColors
}

func isAlternatingColorsGroup(index int, colors []int) bool {
    previousIndex := (len(colors) - 1 + index) % len(colors)
    nextIndex := (1 + index) % len(colors)
    return colors[previousIndex] != colors[index] && colors[index] != colors[nextIndex]
}

func Ternary[T any](condition bool, first T, second T) T {
    if condition {
        return first
    }
    return second
}
```



