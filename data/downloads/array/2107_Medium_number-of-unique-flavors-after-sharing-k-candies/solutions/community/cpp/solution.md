# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies/solutions/6055920/](https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies/solutions/6055920/)

---

```Java []
public class Solution {

    public int shareCandies(int[] candies, int numberOfConsecutiveCandiesToGive) {
        int[] frequencyCandies = createFrequencyCandies(candies);
        int currentNumberOfUniqueFlavorsRetainedAfterGiving = findTotalNumberOfUniqueCandies(frequencyCandies);
        if (numberOfConsecutiveCandiesToGive == 0) {
            return currentNumberOfUniqueFlavorsRetainedAfterGiving;
        }

        for (int i = 0; i < numberOfConsecutiveCandiesToGive; ++i) {
            --frequencyCandies[candies[i]];
            if (frequencyCandies[candies[i]] == 0) {
                --currentNumberOfUniqueFlavorsRetainedAfterGiving;
            }
        }
        int maxNumberOfUniqueFlavorsRetainedAfterGiving = currentNumberOfUniqueFlavorsRetainedAfterGiving;

        for (int i = numberOfConsecutiveCandiesToGive; i < candies.length; ++i) {
            --frequencyCandies[candies[i]];
            if (frequencyCandies[candies[i]] == 0) {
                --currentNumberOfUniqueFlavorsRetainedAfterGiving;
            }

            ++frequencyCandies[candies[i - numberOfConsecutiveCandiesToGive]];
            if (frequencyCandies[candies[i - numberOfConsecutiveCandiesToGive]] == 1) {
                ++currentNumberOfUniqueFlavorsRetainedAfterGiving;
            }

            maxNumberOfUniqueFlavorsRetainedAfterGiving = Math.max(
                    maxNumberOfUniqueFlavorsRetainedAfterGiving,
                    currentNumberOfUniqueFlavorsRetainedAfterGiving);
        }

        return maxNumberOfUniqueFlavorsRetainedAfterGiving;
    }

    private int[] createFrequencyCandies(int[] candies) {
        int maxCandyValue = 0;
        for (int candy : candies) {
            maxCandyValue = Math.max(maxCandyValue, candy);
        }

        int[] frequencyCandies = new int[maxCandyValue + 1];
        for (int candy : candies) {
            ++frequencyCandies[candy];
        }
        return frequencyCandies;
    }

    private int findTotalNumberOfUniqueCandies(int[] frequencyCandies) {
        int totalNumberOfUniqueCandies = 0;
        for (int frequency : frequencyCandies) {
            if (frequency > 0) {
                ++totalNumberOfUniqueCandies;
            }
        }
        return totalNumberOfUniqueCandies;
    }
}
```
```JavaScript []
/**
 * @param {number[]} candies
 * @param {number} numberOfConsecutiveCandiesToGive
 * @return {number}
 */
var shareCandies = function (candies, numberOfConsecutiveCandiesToGive) {
    const frequencyCandies = createFrequencyCandies(candies);
    let currentNumberOfUniqueFlavorsRetainedAfterGiving = findTotalNumberOfUniqueCandies(frequencyCandies);
    if (numberOfConsecutiveCandiesToGive === 0) {
        return currentNumberOfUniqueFlavorsRetainedAfterGiving;
    }

    for (let i = 0; i < numberOfConsecutiveCandiesToGive; ++i) {
        --frequencyCandies[candies[i]];
        if (frequencyCandies[candies[i]] === 0) {
            --currentNumberOfUniqueFlavorsRetainedAfterGiving;
        }
    }
    let maxNumberOfUniqueFlavorsRetainedAfterGiving = currentNumberOfUniqueFlavorsRetainedAfterGiving;

    for (let i = numberOfConsecutiveCandiesToGive; i < candies.length; ++i) {
        --frequencyCandies[candies[i]];
        if (frequencyCandies[candies[i]] === 0) {
            --currentNumberOfUniqueFlavorsRetainedAfterGiving;
        }

        ++frequencyCandies[candies[i - numberOfConsecutiveCandiesToGive]];
        if (frequencyCandies[candies[i - numberOfConsecutiveCandiesToGive]] === 1) {
            ++currentNumberOfUniqueFlavorsRetainedAfterGiving;
        }

        maxNumberOfUniqueFlavorsRetainedAfterGiving = Math.max(
                maxNumberOfUniqueFlavorsRetainedAfterGiving,
                currentNumberOfUniqueFlavorsRetainedAfterGiving);
    }

    return maxNumberOfUniqueFlavorsRetainedAfterGiving;
};

/**
 * @param {number[]} candies
 * @return {number[]}
 */
function createFrequencyCandies(candies) {
    let maxCandyValue = 0;
    for (let candy of candies) {
        maxCandyValue = Math.max(maxCandyValue, candy);
    }

    const frequencyCandies = new Array(maxCandyValue + 1).fill(0);
    for (let candy of candies) {
        ++frequencyCandies[candy];
    }
    return frequencyCandies;
}

/**
 * @param {number[]} frequencyCandies
 * @return {number}
 */
function findTotalNumberOfUniqueCandies(frequencyCandies) {
    let totalNumberOfUniqueCandies = 0;
    for (let frequency of frequencyCandies) {
        if (frequency > 0) {
            ++totalNumberOfUniqueCandies;
        }
    }
    return totalNumberOfUniqueCandies;
}
```
```TypeScript []
function shareCandies(candies: number[], numberOfConsecutiveCandiesToGive: number): number {
    const frequencyCandies = createFrequencyCandies(candies);
    let currentNumberOfUniqueFlavorsRetainedAfterGiving = findTotalNumberOfUniqueCandies(frequencyCandies);
    if (numberOfConsecutiveCandiesToGive === 0) {
        return currentNumberOfUniqueFlavorsRetainedAfterGiving;
    }

    for (let i = 0; i < numberOfConsecutiveCandiesToGive; ++i) {
        --frequencyCandies[candies[i]];
        if (frequencyCandies[candies[i]] === 0) {
            --currentNumberOfUniqueFlavorsRetainedAfterGiving;
        }
    }
    let maxNumberOfUniqueFlavorsRetainedAfterGiving = currentNumberOfUniqueFlavorsRetainedAfterGiving;

    for (let i = numberOfConsecutiveCandiesToGive; i < candies.length; ++i) {
        --frequencyCandies[candies[i]];
        if (frequencyCandies[candies[i]] === 0) {
            --currentNumberOfUniqueFlavorsRetainedAfterGiving;
        }

        ++frequencyCandies[candies[i - numberOfConsecutiveCandiesToGive]];
        if (frequencyCandies[candies[i - numberOfConsecutiveCandiesToGive]] === 1) {
            ++currentNumberOfUniqueFlavorsRetainedAfterGiving;
        }

        maxNumberOfUniqueFlavorsRetainedAfterGiving = Math.max(
            maxNumberOfUniqueFlavorsRetainedAfterGiving,
            currentNumberOfUniqueFlavorsRetainedAfterGiving);
    }

    return maxNumberOfUniqueFlavorsRetainedAfterGiving;
};

function createFrequencyCandies(candies: number[]): number[] {
    let maxCandyValue = 0;
    for (let candy of candies) {
        maxCandyValue = Math.max(maxCandyValue, candy);
    }

    const frequencyCandies = new Array(maxCandyValue + 1).fill(0);
    for (let candy of candies) {
        ++frequencyCandies[candy];
    }
    return frequencyCandies;
}

function findTotalNumberOfUniqueCandies(frequencyCandies: number[]): number {
    let totalNumberOfUniqueCandies = 0;
    for (let frequency of frequencyCandies) {
        if (frequency > 0) {
            ++totalNumberOfUniqueCandies;
        }
    }
    return totalNumberOfUniqueCandies;
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

public:
    int shareCandies(const vector<int>& candies, int numberOfConsecutiveCandiesToGive) const {
        vector<int> frequencyCandies = createFrequencyCandies(candies);
        int currentNumberOfUniqueFlavorsRetainedAfterGiving = findTotalNumberOfUniqueCandies(frequencyCandies);
        if (numberOfConsecutiveCandiesToGive == 0) {
            return currentNumberOfUniqueFlavorsRetainedAfterGiving;
        }

        for (size_t i = 0; i < numberOfConsecutiveCandiesToGive; ++i) {
            --frequencyCandies[candies[i]];
            if (frequencyCandies[candies[i]] == 0) {
                --currentNumberOfUniqueFlavorsRetainedAfterGiving;
            }
        }
        int maxNumberOfUniqueFlavorsRetainedAfterGiving = currentNumberOfUniqueFlavorsRetainedAfterGiving;

        for (size_t i = numberOfConsecutiveCandiesToGive; i < candies.size(); ++i) {
            --frequencyCandies[candies[i]];
            if (frequencyCandies[candies[i]] == 0) {
                --currentNumberOfUniqueFlavorsRetainedAfterGiving;
            }

            ++frequencyCandies[candies[i - numberOfConsecutiveCandiesToGive]];
            if (frequencyCandies[candies[i - numberOfConsecutiveCandiesToGive]] == 1) {
                ++currentNumberOfUniqueFlavorsRetainedAfterGiving;
            }

            maxNumberOfUniqueFlavorsRetainedAfterGiving = max(
                    maxNumberOfUniqueFlavorsRetainedAfterGiving,
                    currentNumberOfUniqueFlavorsRetainedAfterGiving);
        }

        return maxNumberOfUniqueFlavorsRetainedAfterGiving;
    }

private:
    vector<int> createFrequencyCandies(span<const int> candies) const {
        int maxCandyValue = 0;
        for (const auto& candy : candies) {
            maxCandyValue = max(maxCandyValue, candy);
        }

        vector<int> frequencyCandies(maxCandyValue + 1);
        for (const auto& candy : candies) {
            ++frequencyCandies[candy];
        }
        return frequencyCandies;
    }

    int findTotalNumberOfUniqueCandies(span<const int> frequencyCandies) const {
        int totalNumberOfUniqueCandies = 0;
        for (const auto& frequency : frequencyCandies) {
            if (frequency > 0) {
                ++totalNumberOfUniqueCandies;
            }
        }
        return totalNumberOfUniqueCandies;
    }
};
```
```C# []
using System;

public class Solution
{
    public int ShareCandies(int[] candies, int numberOfConsecutiveCandiesToGive)
    {
        int[] frequencyCandies = CreateFrequencyCandies(candies);
        int currentNumberOfUniqueFlavorsRetainedAfterGiving = FindTotalNumberOfUniqueCandies(frequencyCandies);
        if (numberOfConsecutiveCandiesToGive == 0)
        {
            return currentNumberOfUniqueFlavorsRetainedAfterGiving;
        }

        for (int i = 0; i < numberOfConsecutiveCandiesToGive; ++i)
        {
            --frequencyCandies[candies[i]];
            if (frequencyCandies[candies[i]] == 0)
            {
                --currentNumberOfUniqueFlavorsRetainedAfterGiving;
            }
        }
        int maxNumberOfUniqueFlavorsRetainedAfterGiving = currentNumberOfUniqueFlavorsRetainedAfterGiving;

        for (int i = numberOfConsecutiveCandiesToGive; i < candies.Length; ++i)
        {
            --frequencyCandies[candies[i]];
            if (frequencyCandies[candies[i]] == 0)
            {
                --currentNumberOfUniqueFlavorsRetainedAfterGiving;
            }

            ++frequencyCandies[candies[i - numberOfConsecutiveCandiesToGive]];
            if (frequencyCandies[candies[i - numberOfConsecutiveCandiesToGive]] == 1)
            {
                ++currentNumberOfUniqueFlavorsRetainedAfterGiving;
            }

            maxNumberOfUniqueFlavorsRetainedAfterGiving = Math.Max(
                    maxNumberOfUniqueFlavorsRetainedAfterGiving,
                    currentNumberOfUniqueFlavorsRetainedAfterGiving);
        }

        return maxNumberOfUniqueFlavorsRetainedAfterGiving;
    }

    private int[] CreateFrequencyCandies(int[] candies)
    {
        int maxCandyValue = 0;
        foreach (int candy in candies)
        {
            maxCandyValue = Math.Max(maxCandyValue, candy);
        }

        int[] frequencyCandies = new int[maxCandyValue + 1];
        foreach (int candy in candies)
        {
            ++frequencyCandies[candy];
        }
        return frequencyCandies;
    }

    private int FindTotalNumberOfUniqueCandies(int[] frequencyCandies)
    {
        int totalNumberOfUniqueCandies = 0;
        foreach (int frequency in frequencyCandies)
        {
            if (frequency > 0)
            {
                ++totalNumberOfUniqueCandies;
            }
        }
        return totalNumberOfUniqueCandies;
    }
}
```
```Kotlin []
import kotlin.math.max

class Solution {

    fun shareCandies(candies: IntArray, numberOfConsecutiveCandiesToGive: Int): Int {
        val frequencyCandies = createFrequencyCandies(candies)
        var currentNumberOfUniqueFlavorsRetainedAfterGiving = findTotalNumberOfUniqueCandies(frequencyCandies)
        if (numberOfConsecutiveCandiesToGive == 0) {
            return currentNumberOfUniqueFlavorsRetainedAfterGiving
        }

        for (i in 0..<numberOfConsecutiveCandiesToGive) {
            --frequencyCandies[candies[i]]
            if (frequencyCandies[candies[i]] == 0) {
                --currentNumberOfUniqueFlavorsRetainedAfterGiving
            }
        }
        var maxNumberOfUniqueFlavorsRetainedAfterGiving = currentNumberOfUniqueFlavorsRetainedAfterGiving

        for (i in numberOfConsecutiveCandiesToGive..<candies.size) {
            --frequencyCandies[candies[i]]
            if (frequencyCandies[candies[i]] == 0) {
                --currentNumberOfUniqueFlavorsRetainedAfterGiving
            }

            ++frequencyCandies[candies[i - numberOfConsecutiveCandiesToGive]]
            if (frequencyCandies[candies[i - numberOfConsecutiveCandiesToGive]] == 1) {
                ++currentNumberOfUniqueFlavorsRetainedAfterGiving
            }

            maxNumberOfUniqueFlavorsRetainedAfterGiving = max(
                maxNumberOfUniqueFlavorsRetainedAfterGiving,
                currentNumberOfUniqueFlavorsRetainedAfterGiving
            )
        }

        return maxNumberOfUniqueFlavorsRetainedAfterGiving
    }

    private fun createFrequencyCandies(candies: IntArray): IntArray {
        var maxCandyValue = 0
        for (candy in candies) {
            maxCandyValue = max(maxCandyValue, candy)
        }

        val frequencyCandies = IntArray(maxCandyValue + 1)
        for (candy in candies) {
            ++frequencyCandies[candy]
        }
        return frequencyCandies
    }

    private fun findTotalNumberOfUniqueCandies(frequencyCandies: IntArray): Int {
        var totalNumberOfUniqueCandies = 0
        for (frequency in frequencyCandies) {
            if (frequency > 0) {
                ++totalNumberOfUniqueCandies
            }
        }
        return totalNumberOfUniqueCandies
    }
}
```
```Go []
package main

import "fmt"

func shareCandies(candies []int, numberOfConsecutiveCandiesToGive int) int {
    frequencyCandies := createFrequencyCandies(candies)
    currentNumberOfUniqueFlavorsRetainedAfterGiving := findTotalNumberOfUniqueCandies(frequencyCandies)
    if numberOfConsecutiveCandiesToGive == 0 {
        return currentNumberOfUniqueFlavorsRetainedAfterGiving
    }

    for i := 0; i < numberOfConsecutiveCandiesToGive; i++ {
        frequencyCandies[candies[i]]--
        if frequencyCandies[candies[i]] == 0 {
            currentNumberOfUniqueFlavorsRetainedAfterGiving--
        }
    }
    var maxNumberOfUniqueFlavorsRetainedAfterGiving = currentNumberOfUniqueFlavorsRetainedAfterGiving

    for i := numberOfConsecutiveCandiesToGive; i < len(candies); i++ {
        frequencyCandies[candies[i]]--
        if frequencyCandies[candies[i]] == 0 {
            currentNumberOfUniqueFlavorsRetainedAfterGiving--
        }

        frequencyCandies[candies[i-numberOfConsecutiveCandiesToGive]]++
        if frequencyCandies[candies[i-numberOfConsecutiveCandiesToGive]] == 1 {
            currentNumberOfUniqueFlavorsRetainedAfterGiving++
        }

        maxNumberOfUniqueFlavorsRetainedAfterGiving = max(
                maxNumberOfUniqueFlavorsRetainedAfterGiving,
                currentNumberOfUniqueFlavorsRetainedAfterGiving)
    }

    return maxNumberOfUniqueFlavorsRetainedAfterGiving
}

func createFrequencyCandies(candies []int) []int {
    maxCandyValue := 0
    for _, candy := range candies {
        maxCandyValue = max(maxCandyValue, candy)
    }

    frequencyCandies := make([]int, maxCandyValue+1)
    for _, candy := range candies {
        frequencyCandies[candy]++
    }
    return frequencyCandies
}

func findTotalNumberOfUniqueCandies(frequencyCandies []int) int {
    totalNumberOfUniqueCandies := 0
    for _, frequency := range frequencyCandies {
        if frequency > 0 {
            totalNumberOfUniqueCandies++
        }
    }
    return totalNumberOfUniqueCandies
}
```