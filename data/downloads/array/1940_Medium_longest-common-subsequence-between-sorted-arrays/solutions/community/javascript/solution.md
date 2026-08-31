# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-common-subsequence-between-sorted-arrays/solutions/5251874/](https://leetcode.com/problems/longest-common-subsequence-between-sorted-arrays/solutions/5251874/)

---

```Java []
import java.util.ArrayList;
import java.util.List;

public class Solution {

    private static final int[] RANGE_OF_VALUES = {1, 100};

    public List<Integer> longestCommonSubsequence(int[][] arrays) {
        int[] frequency = new int[RANGE_OF_VALUES[1] + 1];
        List<Integer> longestCommonSubsequence = new ArrayList<>();

        for (int[] numbers : arrays) {
            for (int value : numbers) {
                ++frequency[value];
            }
        }

        for (int value = RANGE_OF_VALUES[0]; value <= RANGE_OF_VALUES[1]; value++) {
            if (frequency[value] == arrays.length) {
                longestCommonSubsequence.add(value);
            }
        }

        return longestCommonSubsequence;
    }
}
```
```JavaScript []
/**
 * @param {number[][]} arrays
 * @return {number[]}
 */
var longestCommonSubsequence = function (arrays) {
    const RANGE_OF_VALUES = [1, 100];
    const frequency = new Array(RANGE_OF_VALUES[1] + 1).fill(0);
    const longestCommonSubsequence = new Array();

    for (let numbers of arrays) {
        for (let value of numbers) {
            ++frequency[value];
        }
    }

    for (let value = RANGE_OF_VALUES[0]; value <= RANGE_OF_VALUES[1]; value++) {
        if (frequency[value] === arrays.length) {
            longestCommonSubsequence.push(value);
        }
    }

    return longestCommonSubsequence;
};
```
```TypeScript []
function longestCommonSubsequence(arrays: number[][]): number[] {
    const RANGE_OF_VALUES: number[] = [1, 100];
    const frequency: number[] = new Array(RANGE_OF_VALUES[1] + 1).fill(0);
    const longestCommonSubsequence: number[] = new Array();

    for (let numbers of arrays) {
        for (let value of numbers) {
            ++frequency[value];
        }
    }

    for (let value = RANGE_OF_VALUES[0]; value <= RANGE_OF_VALUES[1]; value++) {
        if (frequency[value] === arrays.length) {
            longestCommonSubsequence.push(value);
        }
    }

    return longestCommonSubsequence;
};
```
```C++ []
#include <array>
#include <vector>
using namespace std;

class Solution {

    static constexpr array<int, 2> RANGE_OF_VALUES = { 1, 100 };

public:
    vector<int> longestCommonSubsequence(const vector<vector<int>>& arrays) const {
        array<int, RANGE_OF_VALUES[1] + 1> frequency{};
        vector<int> longestCommonSubsequence;

        for (const auto& numbers : arrays) {
            for (int value : numbers) {
                ++frequency[value];
            }
        }

        for (size_t value = RANGE_OF_VALUES[0]; value <= RANGE_OF_VALUES[1]; value++) {
            if (frequency[value] == arrays.size()) {
                longestCommonSubsequence.push_back(value);
            }
        }

        return longestCommonSubsequence;
    }
};
```
```C# []
using System;
using System.Collections.Generic;

public class Solution
{
    private static readonly int[] RANGE_OF_VALUES = { 1, 100 };

    public IList<int> LongestCommonSubsequence(int[][] arrays)
    {
        int[] frequency = new int[RANGE_OF_VALUES[1] + 1];
        IList<int> longestCommonSubsequence = new List<int>();

        foreach (int[] numbers in arrays)
        {
            foreach (int value in numbers)
            {
                ++frequency[value];
            }
        }

        for (int value = RANGE_OF_VALUES[0]; value <= RANGE_OF_VALUES[1]; value++)
        {
            if (frequency[value] == arrays.Length)
            {
                longestCommonSubsequence.Add(value);
            }
        }

        return longestCommonSubsequence;
    }
}
```
```Kotlin []
class Solution {

    private companion object {
        val RANGE_OF_VALUES = intArrayOf(1, 100)
    }

    fun longestCommonSubsequence(arrays: Array<IntArray>): List<Int> {
        val frequency = IntArray(RANGE_OF_VALUES[1] + 1)
        val longestCommonSubsequence = ArrayList<Int>()

        for (numbers in arrays) {
            for (value in numbers) {
                ++frequency[value]
            }
        }

        for (value in RANGE_OF_VALUES[0]..RANGE_OF_VALUES[1]) {
            if (frequency[value] == arrays.size) {
                longestCommonSubsequence.add(value)
            }
        }

        return longestCommonSubsequence
    }
}
```
```Go []
package main

import "fmt"

var RANGE_OF_VALUES = [2]int{1, 100}

func longestCommonSubsequence(arrays [][]int) []int {
	var frequency = make([]int, RANGE_OF_VALUES[1]+1)
	var longestCommonSubsequence = []int{}

	for _, numbers := range arrays {
		for _, value := range numbers {
			frequency[value]++
		}
	}

	for value := RANGE_OF_VALUES[0]; value <= RANGE_OF_VALUES[1]; value++ {
		if frequency[value] == len(arrays) {
			longestCommonSubsequence = append(longestCommonSubsequence, value)
		}
	}

	return longestCommonSubsequence
}
```