# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-digit-differences-of-all-pairs/solutions/5208258/](https://leetcode.com/problems/sum-of-digit-differences-of-all-pairs/solutions/5208258/)

---

```Java []
public class Solution {

    private static final int NUMBER_OF_DIGITS = 10;

    public long sumDigitDifferences(int[] input) {
        long sumDigitDifferences = 0;
        while (!allDigitsAreProcessed(input)) {
            int[] frequency = new int[NUMBER_OF_DIGITS];
            calculateFrequencyForDigitPlace(input, frequency);
            sumDigitDifferences += calculateSumDigitDifferencesForDigitPlace(frequency, input.length);
        }

        return sumDigitDifferences;
    }

    private boolean allDigitsAreProcessed(int[] input) {
        return input[0] == 0;
    }

    private void calculateFrequencyForDigitPlace(int[] input, int[] frequency) {
        for (int i = 0; i < input.length; ++i) {
            ++frequency[input[i] % 10];
            input[i] = input[i] / 10;
        }
    }

    private long calculateSumDigitDifferencesForDigitPlace(int[] frequency, int numberOfInputIntegers) {
        long sumDigitDifferences = 0;
        int sumProcessedFrequencies = 0;

        for (int currentFrequency : frequency) {
            if (currentFrequency > 0) {
                sumProcessedFrequencies += currentFrequency;
                sumDigitDifferences += currentFrequency * (numberOfInputIntegers - sumProcessedFrequencies);
            }
        }
        return sumDigitDifferences;
    }
}
```
```JavaScript []
/**
 * @param {number[]} input
 * @return {number}
 */
var sumDigitDifferences = function (input) {
    const NUMBER_OF_DIGITS = 10;
    let sumDigitDifferences = 0;

    while (!allDigitsAreProcessed(input)) {
        const frequency = new Array(NUMBER_OF_DIGITS).fill(0);
        calculateFrequencyForDigitPlace(input, frequency);
        sumDigitDifferences += calculateSumDigitDifferencesForDigitPlace(frequency, input.length);
    }

    return sumDigitDifferences;
};

/**
 * @param {number[]} input
 * @return {boolean}
 */
function allDigitsAreProcessed(input) {
    return input[0] === 0;
}

/**
 * @param {number[]} input
 * @param {number[]} frequency
 * @return {void}
 */
function calculateFrequencyForDigitPlace(input, frequency) {
    for (let i = 0; i < input.length; ++i) {
        ++frequency[input[i] % 10];
        input[i] = Math.floor(input[i] / 10);
    }
}

/**
 * @param {number[]} frequency
 * @param {number} numberOfInputIntegers
 * @return {number}
 */
function calculateSumDigitDifferencesForDigitPlace(frequency, numberOfInputIntegers) {
    let sumDigitDifferences = 0;
    let sumProcessedFrequencies = 0;

    for (let currentFrequency of frequency) {
        if (currentFrequency > 0) {
            sumProcessedFrequencies += currentFrequency;
            sumDigitDifferences += currentFrequency * (numberOfInputIntegers - sumProcessedFrequencies);
        }
    }
    return sumDigitDifferences;
}
```
```TypeScript []
function sumDigitDifferences(input: number[]): number {
    const NUMBER_OF_DIGITS = 10;
    let sumDigitDifferences = 0;

    while (!allDigitsAreProcessed(input)) {
        const frequency: number[] = new Array(NUMBER_OF_DIGITS).fill(0);
        calculateFrequencyForDigitPlace(input, frequency);
        sumDigitDifferences += calculateSumDigitDifferencesForDigitPlace(frequency, input.length);
    }

    return sumDigitDifferences;
};

function allDigitsAreProcessed(input: number[]): boolean {
    return input[0] === 0;
}

function calculateFrequencyForDigitPlace(input: number[], frequency: number[]): void {
    for (let i = 0; i < input.length; ++i) {
        ++frequency[input[i] % 10];
        input[i] = Math.floor(input[i] / 10);
    }
}

function calculateSumDigitDifferencesForDigitPlace(frequency: number[], numberOfInputIntegers: number): number {
    let sumDigitDifferences = 0;
    let sumProcessedFrequencies = 0;

    for (let currentFrequency of frequency) {
        if (currentFrequency > 0) {
            sumProcessedFrequencies += currentFrequency;
            sumDigitDifferences += currentFrequency * (numberOfInputIntegers - sumProcessedFrequencies);
        }
    }
    return sumDigitDifferences;
}
```
```C++ []
#include <span>
#include <array>
#include <vector>
using namespace std;

class Solution {

    static const int NUMBER_OF_DIGITS = 10;

public:
    long long sumDigitDifferences(vector<int>& input) const {
        long long sumDigitDifferences = 0;
        while (!allDigitsAreProcessed(input)) {
            array<int, NUMBER_OF_DIGITS> frequency{};
            calculateFrequencyForDigitPlace(input, frequency);
            sumDigitDifferences += calculateSumDigitDifferencesForDigitPlace(frequency, input.size());
        }

        return sumDigitDifferences;
    }

private:
    bool allDigitsAreProcessed(span<const int> input) const {
        return input[0] == 0;
    }

    void calculateFrequencyForDigitPlace(span<int> input, span<int> frequency) const {
        for (size_t i = 0; i < input.size(); ++i) {
            ++frequency[input[i] % 10];
            input[i] = input[i] / 10;
        }
    }

    long long calculateSumDigitDifferencesForDigitPlace(span<const int> frequency, int numberOfInputIntegers) const {
        long long sumDigitDifferences = 0;
        int sumProcessedFrequencies = 0;

        for (const auto& currentFrequency : frequency) {
            if (currentFrequency > 0) {
                sumProcessedFrequencies += currentFrequency;
                sumDigitDifferences += currentFrequency * (numberOfInputIntegers - sumProcessedFrequencies);
            }
        }
        return sumDigitDifferences;
    }
};
```
```C# []
using System;

public class Solution
{
    private static readonly int NUMBER_OF_DIGITS = 10;

    public long SumDigitDifferences(int[] input)
    {
        long sumDigitDifferences = 0;
        while (!AllDigitsAreProcessed(input))
        {
            int[] frequency = new int[NUMBER_OF_DIGITS];
            CalculateFrequencyForDigitPlace(input, frequency);
            sumDigitDifferences += CalculateSumDigitDifferencesForDigitPlace(frequency, input.Length);
        }

        return sumDigitDifferences;
    }

    private bool AllDigitsAreProcessed(int[] input)
    {
        return input[0] == 0;
    }

    private void CalculateFrequencyForDigitPlace(int[] input, int[] frequency)
    {
        for (int i = 0; i < input.Length; ++i)
        {
            ++frequency[input[i] % 10];
            input[i] = input[i] / 10;
        }
    }

    private long CalculateSumDigitDifferencesForDigitPlace(int[] frequency, int numberOfInputIntegers)
    {
        long sumDigitDifferences = 0;
        int sumProcessedFrequencies = 0;

        foreach (int currentFrequency in frequency)
        {
            if (currentFrequency > 0)
            {
                sumProcessedFrequencies += currentFrequency;
                sumDigitDifferences += currentFrequency * (numberOfInputIntegers - sumProcessedFrequencies);
            }
        }
        return sumDigitDifferences;
    }
}
```
```Kotlin []
class Solution {

    private companion object {
        const val NUMBER_OF_DIGITS = 10
    }

    fun sumDigitDifferences(input: IntArray): Long {
        var sumDigitDifferences: Long = 0
        while (!allDigitsAreProcessed(input)) {
            val frequency = IntArray(NUMBER_OF_DIGITS)
            calculateFrequencyForDigitPlace(input, frequency)
            sumDigitDifferences += calculateSumDigitDifferencesForDigitPlace(frequency, input.size)
        }

        return sumDigitDifferences
    }

    private fun allDigitsAreProcessed(input: IntArray): Boolean {
        return input[0] == 0
    }

    private fun calculateFrequencyForDigitPlace(input: IntArray, frequency: IntArray) {
        for (i in input.indices) {
            ++frequency[input[i] % 10]
            input[i] = input[i] / 10
        }
    }

    private fun calculateSumDigitDifferencesForDigitPlace(frequency: IntArray, numberOfInputIntegers: Int): Long {
        var sumDigitDifferences: Long = 0
        var sumProcessedFrequencies = 0

        for (currentFrequency in frequency) {
            if (currentFrequency > 0) {
                sumProcessedFrequencies += currentFrequency
                sumDigitDifferences += currentFrequency * (numberOfInputIntegers - sumProcessedFrequencies)
            }
        }
        return sumDigitDifferences
    }
}
```
```Go []
package main

import (
	"fmt"
)

const NUMBER_OF_DIGITS = 10

func sumDigitDifferences(input []int) int64 {
	var sumDigitDifferences int64 = 0
	for !allDigitsAreProcessed(input) {
		var frequency = make([]int, NUMBER_OF_DIGITS)
		calculateFrequencyForDigitPlace(input, frequency)
		sumDigitDifferences += calculateSumDigitDifferencesForDigitPlace(frequency, len(input))
	}

	return sumDigitDifferences
}

func allDigitsAreProcessed(input []int) bool {
	return input[0] == 0
}

func calculateFrequencyForDigitPlace(input []int, frequency []int) {
	for i := range input {
		frequency[input[i]%10]++
		input[i] = input[i] / 10
	}
}

func calculateSumDigitDifferencesForDigitPlace(frequency []int, numberOfInputIntegers int) int64 {
	var sumDigitDifferences int64 = 0
	var sumProcessedFrequencies = 0

	for _, currentFrequency := range frequency {
		if currentFrequency > 0 {
			sumProcessedFrequencies += currentFrequency
			sumDigitDifferences += int64(currentFrequency) * int64(numberOfInputIntegers-sumProcessedFrequencies)
		}
	}
	return sumDigitDifferences
}
```