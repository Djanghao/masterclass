# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-special-characters-ii/solutions/5260279/](https://leetcode.com/problems/count-the-number-of-special-characters-ii/solutions/5260279/)

---

```Java []
import java.util.Arrays;

public class Solution {

    private static final int ALPHABET_SIZE = 26;
    private static final int VISITED = Integer.MAX_VALUE;

    public int numberOfSpecialChars(String word) {
        char[] wordArray = word.toCharArray();
        int[] lastIndexSmallLetters = createArrayLastIndexSmallLetters(wordArray);
        return findNumberOfSpecialChars(wordArray, lastIndexSmallLetters);
    }

    private int[] createArrayLastIndexSmallLetters(char[] wordArray) {
        int[] lastIndexSmallLetters = new int[ALPHABET_SIZE];
        Arrays.fill(lastIndexSmallLetters, VISITED);

        for (int i = 0; i < wordArray.length; ++i) {
            char letter = wordArray[i];
            if (letter >= 'a') {
                lastIndexSmallLetters[letter - 'a'] = i;
            }
        }

        return lastIndexSmallLetters;
    }

    private int findNumberOfSpecialChars(char[] wordArray, int[] lastIndexSmallLetters) {
        int numberOfSpecialChars = 0;

        for (int i = 0; i < wordArray.length; ++i) {
            char letter = wordArray[i];
            if (letter >= 'a') {
                continue;
            }
            if (lastIndexSmallLetters[letter - 'A'] < i) {
                ++numberOfSpecialChars;
            }
            lastIndexSmallLetters[letter - 'A'] = VISITED;
        }

        return numberOfSpecialChars;
    }
}
```
```JavaScript []
/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
    this.ALPHABET_SIZE = 26;
    this.ASCII_LOWER_CASE_A = 97;
    this.ASCII_UPPER_CASE_A = 65;
    this.VISITED = Number.MAX_SAFE_INTEGER;

    const lastIndexSmallLetters = createArrayLastIndexSmallLetters(word);
    return findNumberOfSpecialChars(word, lastIndexSmallLetters);
};

/**
 * @param {string} word
 * @return {number[]}
 */
function createArrayLastIndexSmallLetters(word) {
    const lastIndexSmallLetters = new Array(this.ALPHABET_SIZE).fill(this.VISITED);

    for (let i = 0; i < word.length; ++i) {
        let letter = word.codePointAt(i);
        if (letter >= this.ASCII_LOWER_CASE_A) {
            lastIndexSmallLetters[letter - this.ASCII_LOWER_CASE_A] = i;
        }
    }

    return lastIndexSmallLetters;
}

/**
 * @param {string} word
 * @param {number[]} lastIndexSmallLetters
 * @return {number}
 */
function findNumberOfSpecialChars(word, lastIndexSmallLetters) {
    let numberOfSpecialChars = 0;

    for (let i = 0; i < word.length; ++i) {
        let letter = word.codePointAt(i);
        if (letter >= this.ASCII_LOWER_CASE_A) {
            continue;
        }
        if (lastIndexSmallLetters[letter - this.ASCII_UPPER_CASE_A] < i) {
            ++numberOfSpecialChars;
        }
        lastIndexSmallLetters[letter - this.ASCII_UPPER_CASE_A] = this.VISITED;
    }

    return numberOfSpecialChars;
}
```
```TypeScript []
function numberOfSpecialChars(word: string): number {
    this.ALPHABET_SIZE = 26;
    this.ASCII_LOWER_CASE_A = 97;
    this.ASCII_UPPER_CASE_A = 65;
    this.VISITED = Number.MAX_SAFE_INTEGER;

    const lastIndexSmallLetters = createArrayLastIndexSmallLetters(word);
    return findNumberOfSpecialChars(word, lastIndexSmallLetters);
};

function createArrayLastIndexSmallLetters(word: string): number[] {
    const lastIndexSmallLetters = new Array(this.ALPHABET_SIZE).fill(this.VISITED);

    for (let i = 0; i < word.length; ++i) {
        let letter = word.codePointAt(i);
        if (letter >= this.ASCII_LOWER_CASE_A) {
            lastIndexSmallLetters[letter - this.ASCII_LOWER_CASE_A] = i;
        }
    }

    return lastIndexSmallLetters;
}

function findNumberOfSpecialChars(word: string, lastIndexSmallLetters: number[]): number {
    let numberOfSpecialChars = 0;

    for (let i = 0; i < word.length; ++i) {
        let letter = word.codePointAt(i);
        if (letter >= this.ASCII_LOWER_CASE_A) {
            continue;
        }
        if (lastIndexSmallLetters[letter - this.ASCII_UPPER_CASE_A] < i) {
            ++numberOfSpecialChars;
        }
        lastIndexSmallLetters[letter - this.ASCII_UPPER_CASE_A] = this.VISITED;
    }

    return numberOfSpecialChars;
}
```
```C++ []
#include <span>
#include <array>
#include <ranges>
#include <limits>
#include <string>
using namespace std;

class Solution {

   static const int ALPHABET_SIZE = 26;
   static const int VISITED = numeric_limits<int>::max();

public:
    int numberOfSpecialChars(const string& word) const {
        array<int, ALPHABET_SIZE> lastIndexSmallLetters = createArrayLastIndexSmallLetters(word);
        return findNumberOfSpecialChars(word, lastIndexSmallLetters);
    }

private:
    array<int, ALPHABET_SIZE> createArrayLastIndexSmallLetters(string_view word)const {
        array<int, ALPHABET_SIZE> lastIndexSmallLetters;
        ranges::fill(lastIndexSmallLetters, VISITED);

        for (size_t i = 0; i < word.length(); ++i) {
            char letter = word[i];
            if (letter >= 'a') {
                lastIndexSmallLetters[letter - 'a'] = i;
            }
        }

        return lastIndexSmallLetters;
    }

    int findNumberOfSpecialChars(string_view word, span<int> lastIndexSmallLetters) const{
        int numberOfSpecialChars = 0;

        for (size_t i = 0; i < word.length(); ++i) {
            char letter = word[i];
            if (letter >= 'a') {
                continue;
            }
            if (lastIndexSmallLetters[letter - 'A'] < i) {
                ++numberOfSpecialChars;
            }
            lastIndexSmallLetters[letter - 'A'] = VISITED;
        }

        return numberOfSpecialChars;
    }
};
```
```C# []
using System;

public class Solution
{
    private static readonly int ALPHABET_SIZE = 26;
    private static readonly int VISITED = int.MaxValue;

    public int NumberOfSpecialChars(string word)
    {
        char[] wordArray = word.ToCharArray();
        int[] lastIndexSmallLetters = CreateArrayLastIndexSmallLetters(wordArray);
        return FindNumberOfSpecialChars(wordArray, lastIndexSmallLetters);
    }

    private int[] CreateArrayLastIndexSmallLetters(char[] wordArray)
    {
        int[] lastIndexSmallLetters = new int[ALPHABET_SIZE];
        Array.Fill(lastIndexSmallLetters, VISITED);

        for (int i = 0; i < wordArray.Length; ++i)
        {
            char letter = wordArray[i];
            if (letter >= 'a')
            {
                lastIndexSmallLetters[letter - 'a'] = i;
            }
        }

        return lastIndexSmallLetters;
    }

    private int FindNumberOfSpecialChars(char[] wordArray, int[] lastIndexSmallLetters)
    {
        int numberOfSpecialChars = 0;

        for (int i = 0; i < wordArray.Length; ++i)
        {
            char letter = wordArray[i];
            if (letter >= 'a')
            {
                continue;
            }
            if (lastIndexSmallLetters[letter - 'A'] < i)
            {
                ++numberOfSpecialChars;
            }
            lastIndexSmallLetters[letter - 'A'] = VISITED;
        }

        return numberOfSpecialChars;
    }
}
```
```Kotlin []
import java.util.Arrays

class Solution {

    private companion object {
        const val ALPHABET_SIZE = 26
        const val VISITED = Int.MAX_VALUE
    }

    fun numberOfSpecialChars(word: String): Int {
        val wordArray = word.toCharArray()
        val lastIndexSmallLetters = createArrayLastIndexSmallLetters(wordArray)
        return findNumberOfSpecialChars(wordArray, lastIndexSmallLetters)
    }

    private fun createArrayLastIndexSmallLetters(wordArray: CharArray): IntArray {
        val lastIndexSmallLetters = IntArray(ALPHABET_SIZE)
        Arrays.fill(lastIndexSmallLetters, VISITED)

        for (i in wordArray.indices) {
            val letter = wordArray[i]
            if (letter >= 'a') {
                lastIndexSmallLetters[letter - 'a'] = i
            }
        }

        return lastIndexSmallLetters
    }

    private fun findNumberOfSpecialChars(wordArray: CharArray, lastIndexSmallLetters: IntArray): Int {
        var numberOfSpecialChars = 0

        for (i in wordArray.indices) {
            val letter = wordArray[i]
            if (letter >= 'a') {
                continue
            }
            if (lastIndexSmallLetters[letter - 'A'] < i) {
                ++numberOfSpecialChars
            }
            lastIndexSmallLetters[letter - 'A'] = VISITED
        }

        return numberOfSpecialChars
    }
}
```
```Go []
package main

import (
	"fmt"
	"math"
)

var ALPHABET_SIZE = 26
var VISITED int = math.MaxInt

func numberOfSpecialChars(word string) int {
	lastIndexSmallLetters := createArrayLastIndexSmallLetters(&word)
	return findNumberOfSpecialChars(&word, &lastIndexSmallLetters)
}

func createArrayLastIndexSmallLetters(word *string) []int {
	lastIndexSmallLetters := make([]int, ALPHABET_SIZE)
	for i := range lastIndexSmallLetters {
		lastIndexSmallLetters[i] = VISITED
	}

	for i := range *word {
		letter := (*word)[i]
		if letter >= 'a' {
			lastIndexSmallLetters[letter-'a'] = i
		}
	}

	return lastIndexSmallLetters
}

func findNumberOfSpecialChars(word *string, lastIndexSmallLetters *[]int) int {
	numberOfSpecialChars := 0

	for i := range *word {
		letter := (*word)[i]
		if letter >= 'a' {
			continue
		}
		if (*lastIndexSmallLetters)[letter-'A'] < i {
			numberOfSpecialChars++
		}
		(*lastIndexSmallLetters)[letter-'A'] = VISITED
	}

	return numberOfSpecialChars
}
```