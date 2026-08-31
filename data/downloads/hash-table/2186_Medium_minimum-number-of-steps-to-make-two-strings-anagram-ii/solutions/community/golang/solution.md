# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/solutions/5117281/](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/solutions/5117281/)

---

```Java []
public class Solution {

    private static final int ALPHABET_SIZE = 26;

    public int minSteps(String firstInput, String secondInput) {
        int[] frequency = new int[ALPHABET_SIZE];
        for (char letter : firstInput.toCharArray()) {
            ++frequency[letter - 'a'];
        }
        for (char letter : secondInput.toCharArray()) {
            --frequency[letter - 'a'];
        }
        
        return calculateMinSteps(frequency);
    }

    private int calculateMinSteps(int[] frequency) {
        int minSteps = 0;
        for (int current : frequency) {
            minSteps += Math.abs(current);
        }
        return minSteps;
    }
}
```
```JavaScript []
/**
 * @param {string} firstInput
 * @param {string} secondInput
 * @return {number}
 */
var minSteps = function (firstInput, secondInput) {
    const ALPHABET_SIZE = 26;
    const frequency = new Array(ALPHABET_SIZE).fill(0);
    for (let letter of firstInput) {
        ++frequency[toASCII(letter) - toASCII('a')];
    }
    for (let letter of secondInput) {
        --frequency[toASCII(letter) - toASCII('a')];
    }
    
    return calculateMinSteps(frequency);
};

/**
 * @param {number[]} frequency
 * @return {number}
 */
function calculateMinSteps(frequency) {
    let minSteps = 0;
    for (let current of frequency) {
        minSteps += Math.abs(current);
    }
    return minSteps;
}

/**
 * @param {string} letter
 * @return {number}
 */
function toASCII(letter) {
    return letter.codePointAt(0);
}
```
```TypeScript []
function minSteps(firstInput: string, secondInput: string): number {
    const ALPHABET_SIZE = 26;
    const frequency = new Array(ALPHABET_SIZE).fill(0);
    for (let letter of firstInput) {
        ++frequency[toASCII(letter) - toASCII('a')];
    }
    for (let letter of secondInput) {
        --frequency[toASCII(letter) - toASCII('a')];
    }
    
    return calculateMinSteps(frequency);
};

function calculateMinSteps(frequency: number[]): number {
    let minSteps = 0;
    for (let current of frequency) {
        minSteps += Math.abs(current);
    }
    return minSteps;
}

function toASCII(letter: string): number {
    return letter.codePointAt(0);
}
```
```C++ []
#include <span>
#include <array>
#include <cmath>
#include <string>
using namespace std;

class Solution {

    static const int ALPHABET_SIZE = 26;

public:
    int minSteps(const string& firstInput, const string& secondInput) const {
        array<int, ALPHABET_SIZE> frequency{};
        for (const auto& letter : firstInput) {
            ++frequency[letter - 'a'];
        }
        for (const auto& letter : secondInput) {
            --frequency[letter - 'a'];
        }

        return calculateMinSteps(frequency);
    }

private:
    int calculateMinSteps(span<const int> frequency) const {
        int minSteps = 0;
        for (const auto& current : frequency) {
            minSteps += abs(current);
        }
        return minSteps;
    }
};
```
```C# []
using System;

public class Solution
{
    static readonly int ALPHABET_SIZE = 26;

    public int MinSteps(string firstInput, string secondInput)
    {
        int[] frequency = new int[ALPHABET_SIZE];
        foreach (char letter in firstInput)
        {
            ++frequency[letter - 'a'];
        }
        foreach (char letter in secondInput)
        {
            --frequency[letter - 'a'];
        }

        return CalculateMinSteps(frequency);
    }

    private int CalculateMinSteps(int[] frequency)
    {
        int minSteps = 0;
        foreach (int current in frequency)
        {
            minSteps += Math.Abs(current);
        }
        return minSteps;
    }
}
```
```Kotlin []
import kotlin.math.abs

class Solution {

    private companion object {
        const val ALPHABET_SIZE = 26
    }

    fun minSteps(firstInput: String, secondInput: String): Int {
        val frequency = IntArray(ALPHABET_SIZE);
        for (letter in firstInput) {
            ++frequency[letter - 'a'];
        }
        for (letter in secondInput) {
            --frequency[letter - 'a'];
        }

        return calculateMinSteps(frequency);
    }

    private fun calculateMinSteps(frequency: IntArray): Int {
        var minSteps = 0
        for (current in frequency) {
            minSteps += abs(current)
        }
        return minSteps
    }
}
```
```Go []
package main

import (
	"math"
)

const ALPHABET_SIZE = 26

func minSteps(firstInput string, secondInput string) int {
	frequency := make([]int, ALPHABET_SIZE)
	for _, letter := range firstInput {
		frequency[letter-'a']++
	}
	for _, letter := range secondInput {
		frequency[letter-'a']--
	}

	return calculateMinSteps(frequency)
}

func calculateMinSteps(frequency []int) int {
	var minSteps = 0
	for _, current := range frequency {
		minSteps += int(math.Abs(float64(current)))
	}
	return minSteps
}
```