# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-characters-to-make-target-string/solutions/5205508/](https://leetcode.com/problems/rearrange-characters-to-make-target-string/solutions/5205508/)

---

```Java []
public class Solution {

    private static final int ALPHABET_SIZE = 26;

    public int rearrangeCharacters(String availableLetters, String target) {
        int[] frequencyInAvailableLetters = new int[ALPHABET_SIZE];
        calculateFrequency(frequencyInAvailableLetters, availableLetters);

        int[] frequencyInTarget = new int[ALPHABET_SIZE];
        calculateFrequency(frequencyInTarget, target);

        return calculateMaxNumberOfTargetCopies(frequencyInAvailableLetters, frequencyInTarget);
    }

    private void calculateFrequency(int[] frequency, String source) {
        for (int letter : source.toCharArray()) {
            ++frequency[letter - 'a'];
        }
    }

    private int calculateMaxNumberOfTargetCopies(int[] frequencyInAvailableLetters, int[] frequencyInTarget) {
        int maxNumberOfTargetCopies = Integer.MAX_VALUE;

        for (int letter = 0; letter < ALPHABET_SIZE; ++letter) {
            if (frequencyInTarget[letter] > 0) {
                int numberOfCopies = frequencyInAvailableLetters[letter] / frequencyInTarget[letter];
                maxNumberOfTargetCopies = Math.min(numberOfCopies, maxNumberOfTargetCopies);
            }
        }

        return maxNumberOfTargetCopies;
    }
}
```
```JavaScript []
/**
 * @param {string} availablelLetters
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (availableLetters, target) {
    this.ALPHABET_SIZE = 26;
    this.ASCII_SMALL_CASE_A = 97;

    const frequencyInAvailableLetters = new Array(this.ALPHABET_SIZE).fill(0);
    calculateFrequency(frequencyInAvailableLetters, availableLetters);

    const frequencyInTarget = new Array(this.ALPHABET_SIZE).fill(0);
    calculateFrequency(frequencyInTarget, target);

    return calculateMaxNumberOfTargetCopies(frequencyInAvailableLetters, frequencyInTarget);
};

/**
 * @param {number[]} frequency
 * @param {string} source
 * @return {void}
 */
function calculateFrequency(frequency, source) {
    for (let letter of source) {
        ++frequency[letter.codePointAt(0) - this.ASCII_SMALL_CASE_A];
    }
}

/**
 * @param {number[]} frequencyInAvailableLetters
 * @param {number[]} frequencyInTarget
 * @return {number}
 */
function calculateMaxNumberOfTargetCopies(frequencyInAvailableLetters, frequencyInTarget) {
    let maxNumberOfTargetCopies = Number.MAX_SAFE_INTEGER;

    for (let letter = 0; letter < this.ALPHABET_SIZE; ++letter) {
        if (frequencyInTarget[letter] > 0) {
            let numberOfCopies = Math.floor(frequencyInAvailableLetters[letter] / frequencyInTarget[letter]);
            maxNumberOfTargetCopies = Math.min(numberOfCopies, maxNumberOfTargetCopies);
        }
    }

    return maxNumberOfTargetCopies;
}
```
```TypeScript []
function rearrangeCharacters(availableLetters: string, target: string): number {
    this.ALPHABET_SIZE = 26;
    this.ASCII_SMALL_CASE_A = 97;

    const frequencyInAvailableLetters = new Array(this.ALPHABET_SIZE).fill(0);
    calculateFrequency(frequencyInAvailableLetters, availableLetters);

    const frequencyInTarget = new Array(this.ALPHABET_SIZE).fill(0);
    calculateFrequency(frequencyInTarget, target);

    return calculateMaxNumberOfTargetCopies(frequencyInAvailableLetters, frequencyInTarget);
};

function calculateFrequency(frequency: number[], source: string): void {
    for (let letter of source) {
        ++frequency[letter.codePointAt(0) - this.ASCII_SMALL_CASE_A];
    }
}


function calculateMaxNumberOfTargetCopies(frequencyInAvailableLetters: number[], frequencyInTarget: number[]): number {
    let maxNumberOfTargetCopies = Number.MAX_SAFE_INTEGER;

    for (let letter = 0; letter < this.ALPHABET_SIZE; ++letter) {
        if (frequencyInTarget[letter] > 0) {
            let numberOfCopies = Math.floor(frequencyInAvailableLetters[letter] / frequencyInTarget[letter]);
            maxNumberOfTargetCopies = Math.min(numberOfCopies, maxNumberOfTargetCopies);
        }
    }

    return maxNumberOfTargetCopies;
}
```
```C++ []
#include <span>
#include <string>
#include <limits>
#include <algorithm>
using namespace std;

class Solution {

    static const int ALPHABET_SIZE = 26;

public:
    int rearrangeCharacters(const string& availableLetters, const string& target) const {
        array<int, ALPHABET_SIZE> frequencyInAvailableLetters{};
        calculateFrequency(frequencyInAvailableLetters, availableLetters);

        array<int, ALPHABET_SIZE> frequencyInTarget{};
        calculateFrequency(frequencyInTarget, target);

        return calculateMaxNumberOfTargetCopies(frequencyInAvailableLetters, frequencyInTarget);
    }

private:
    void calculateFrequency(span<int> frequency, string_view source) const {
        for (const auto& letter : source) {
            ++frequency[letter - 'a'];
        }
    }

    int calculateMaxNumberOfTargetCopies(span<const int>frequencyInAvailableLetters, span<const int> frequencyInTarget) const {
        int maxNumberOfTargetCopies = numeric_limits<int>::max();

        for (int letter = 0; letter < ALPHABET_SIZE; ++letter) {
            if (frequencyInTarget[letter] > 0) {
                int numberOfCopies = frequencyInAvailableLetters[letter] / frequencyInTarget[letter];
                maxNumberOfTargetCopies = min(numberOfCopies, maxNumberOfTargetCopies);
            }
        }

        return maxNumberOfTargetCopies;
    }
};
```
```C# []
using System;

public class Solution
{
    static readonly int ALPHABET_SIZE = 26;
    public int RearrangeCharacters(string availableLetters, string target)
    {
        int[] frequencyInAvailableLetters = new int[ALPHABET_SIZE];
        CalculateFrequency(frequencyInAvailableLetters, availableLetters);

        int[] frequencyInTarget = new int[ALPHABET_SIZE];
        CalculateFrequency(frequencyInTarget, target);

        return CalculateMaxNumberOfTargetCopies(frequencyInAvailableLetters, frequencyInTarget);
    }

    private void CalculateFrequency(int[] frequency, String source)
    {
        foreach (int letter in source)
        {
            ++frequency[letter - 'a'];
        }
    }

    private int CalculateMaxNumberOfTargetCopies(int[] frequencyInAvailableLetters, int[] frequencyInTarget)
    {
        int maxNumberOfTargetCopies = int.MaxValue;

        for (int letter = 0; letter < ALPHABET_SIZE; ++letter)
        {
            if (frequencyInTarget[letter] > 0)
            {
                int numberOfCopies = frequencyInAvailableLetters[letter] / frequencyInTarget[letter];
                maxNumberOfTargetCopies = Math.Min(numberOfCopies, maxNumberOfTargetCopies);
            }
        }

        return maxNumberOfTargetCopies;
    }
}
```
```Kotlin []
import kotlin.math.min

class Solution {

    private companion object {
        const val ALPHABET_SIZE = 26
    }

    fun rearrangeCharacters(availableLetters: String, target: String): Int {
        val frequencyInAvailableLetters = IntArray(ALPHABET_SIZE)
        calculateFrequency(frequencyInAvailableLetters, availableLetters)

        val frequencyInTarget = IntArray(ALPHABET_SIZE)
        calculateFrequency(frequencyInTarget, target)

        return calculateMaxNumberOfTargetCopies(frequencyInAvailableLetters, frequencyInTarget)
    }

    private fun calculateFrequency(frequency: IntArray, source: String) {
        for (letter in source) {
            ++frequency[letter - 'a']
        }
    }

    private fun calculateMaxNumberOfTargetCopies(
        frequencyInAvailableLetters: IntArray,
        frequencyInTarget: IntArray
    ): Int {
        var maxNumberOfTargetCopies = Int.MAX_VALUE

        for (letter in 0..<ALPHABET_SIZE) {
            if (frequencyInTarget[letter] > 0) {
                val numberOfCopies = frequencyInAvailableLetters[letter] / frequencyInTarget[letter]
                maxNumberOfTargetCopies = min(numberOfCopies, maxNumberOfTargetCopies)
            }
        }

        return maxNumberOfTargetCopies
    }
}
```
```Go []
package main

import (
	"fmt"
	"math"
)

const ALPHABET_SIZE = 26

func rearrangeCharacters(availableLetters string, target string) int {
	var frequencyInAvailableLetters = make([]int, ALPHABET_SIZE)
	calculateFrequency(frequencyInAvailableLetters, availableLetters)

	var frequencyInTarget = make([]int, ALPHABET_SIZE)
	calculateFrequency(frequencyInTarget, target)

	return calculateMaxNumberOfTargetCopies(frequencyInAvailableLetters, frequencyInTarget)
}

func calculateFrequency(frequency []int, source string) {
	for _, letter := range source {
		frequency[letter-'a']++
	}
}

func calculateMaxNumberOfTargetCopies(frequencyInAvailableLetters []int, frequencyInTarget []int) int {
	var maxNumberOfTargetCopies = math.MaxInt

	for letter := 0; letter < ALPHABET_SIZE; letter++ {
		if frequencyInTarget[letter] > 0 {
			var numberOfCopies = frequencyInAvailableLetters[letter] / frequencyInTarget[letter]
			maxNumberOfTargetCopies = min(numberOfCopies, maxNumberOfTargetCopies)
		}
	}

	return maxNumberOfTargetCopies
}
```