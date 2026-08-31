# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/increasing-decreasing-string/solutions/5293388/](https://leetcode.com/problems/increasing-decreasing-string/solutions/5293388/)

---

```Java []
public class Solution {

    private static final int ALPHABET_SIZE = 26;
    private final int[] frequency = new int[ALPHABET_SIZE];

    public String sortString(String input) {
        for (char letter : input.toCharArray()) {
            ++frequency[letter - 'a'];
        }

        int index = 0;
        boolean increasing = true;
        char[] alternatingIncreasingDecreasing = new char[input.length()];

        while (index < alternatingIncreasingDecreasing.length) {
            index = addLetters(alternatingIncreasingDecreasing, index, increasing);
            index = addLetters(alternatingIncreasingDecreasing, index, !increasing);
        }

        return String.valueOf(alternatingIncreasingDecreasing);
    }

    private int addLetters(char[] alternatingIncreasingDecreasing, int index, boolean increasing) {
        int start = increasing ? 0 : ALPHABET_SIZE - 1;
        int end = increasing ? ALPHABET_SIZE : -1;
        int step = increasing ? 1 : -1;

        for (int letter = start; letter != end; letter += step) {
            if (frequency[letter] > 0) {
                --frequency[letter];
                alternatingIncreasingDecreasing[index] = (char) (letter + 'a');
                ++index;
            }
        }
        return index;
    }
}
```
```JavaScript []
/**
 * @param {string} input
 * @return {string}
 */
var sortString = function (input) {
    this.ALPHABET_SIZE = 26;
    this.frequency = new Array(this.ALPHABET_SIZE).fill(0);
    for (let i = 0; i < input.length; ++i) {
        ++this.frequency[input.codePointAt(i) - 'a'.codePointAt(0)];
    }

    let index = 0;
    let increasing = true;
    const alternatingIncreasingDecreasing = new Array(input.length);

    while (index < alternatingIncreasingDecreasing.length) {
        index = addLetters(alternatingIncreasingDecreasing, index, increasing);
        index = addLetters(alternatingIncreasingDecreasing, index, !increasing);
    }

    return alternatingIncreasingDecreasing.join('');
};

/**
 * @param {string[]} alternatingIncreasingDecreasing
 * @param {number} index 
 * @param {boolean} increasing 
 * @return {number}
 */
function addLetters(alternatingIncreasingDecreasing, index, increasing) {
    let start = increasing ? 0 : this.ALPHABET_SIZE - 1;
    let end = increasing ? this.ALPHABET_SIZE : -1;
    let step = increasing ? 1 : -1;

    for (let letter = start; letter !== end; letter += step) {
        if (this.frequency[letter] > 0) {
            --this.frequency[letter];
            alternatingIncreasingDecreasing[index] = String.fromCodePoint(letter + 'a'.codePointAt(0));
            ++index;
        }
    }
    return index;
}
```
```TypeScript []
function sortString(input: string): string {
    this.ALPHABET_SIZE = 26;
    this.frequency = new Array<number>(this.ALPHABET_SIZE).fill(0);
    for (let i = 0; i < input.length; ++i) {
        ++this.frequency[input.codePointAt(i) - 'a'.codePointAt(0)];
    }

    let index = 0;
    let increasing = true;
    const alternatingIncreasingDecreasing = new Array<string>(input.length);

    while (index < alternatingIncreasingDecreasing.length) {
        index = addLetters(alternatingIncreasingDecreasing, index, increasing);
        index = addLetters(alternatingIncreasingDecreasing, index, !increasing);
    }

    return alternatingIncreasingDecreasing.join('');
};

function addLetters(alternatingIncreasingDecreasing: string[], index: number, increasing: boolean): number {
    let start = increasing ? 0 : this.ALPHABET_SIZE - 1;
    let end = increasing ? this.ALPHABET_SIZE : -1;
    let step = increasing ? 1 : -1;

    for (let letter = start; letter !== end; letter += step) {
        if (this.frequency[letter] > 0) {
            --this.frequency[letter];
            alternatingIncreasingDecreasing[index] = String.fromCodePoint(letter + 'a'.codePointAt(0));
            ++index;
        }
    }
    return index;
}
```
```C++ []
#include <array>
#include <string>
using namespace std;

class Solution {

    static const int ALPHABET_SIZE = 26;
    array<int, ALPHABET_SIZE> frequency{};

public:
    string sortString(const string& input) {
        for (const auto& letter : input) {
            ++frequency[letter - 'a'];
        }

        int index = 0;
        bool increasing = true;
        string alternatingIncreasingDecreasing(input.length(), ' ');

        while (index < alternatingIncreasingDecreasing.size()) {
            index = addLetters(alternatingIncreasingDecreasing, index, increasing);
            index = addLetters(alternatingIncreasingDecreasing, index, !increasing);
        }

        return alternatingIncreasingDecreasing;
    }

private:
    int addLetters(string& alternatingIncreasingDecreasing, int index, bool increasing) {
        int start = increasing ? 0 : ALPHABET_SIZE - 1;
        int end = increasing ? ALPHABET_SIZE : -1;
        int step = increasing ? 1 : -1;

        for (int letter = start; letter != end; letter += step) {
            if (frequency[letter] > 0) {
                --frequency[letter];
                alternatingIncreasingDecreasing[index] = static_cast<char>(letter + 'a');
                ++index;
            }
        }
        return index;
    }
};
```
```C# []
using System;

public class Solution
{
    private static readonly int ALPHABET_SIZE = 26;
    private readonly int[] frequency = new int[ALPHABET_SIZE];

    public string SortString(string input)
    {
        foreach (char letter in input)
        {
            ++frequency[letter - 'a'];
        }

        int index = 0;
        bool increasing = true;
        char[] alternatingIncreasingDecreasing = new char[input.Length];

        while (index < alternatingIncreasingDecreasing.Length)
        {
            index = AddLetters(alternatingIncreasingDecreasing, index, increasing);
            index = AddLetters(alternatingIncreasingDecreasing, index, !increasing);
        }

        return string.Join("", alternatingIncreasingDecreasing);
    }

    private int AddLetters(char[] alternatingIncreasingDecreasing, int index, bool increasing)
    {
        int start = increasing ? 0 : ALPHABET_SIZE - 1;
        int end = increasing ? ALPHABET_SIZE : -1;
        int step = increasing ? 1 : -1;

        for (int letter = start; letter != end; letter += step)
        {
            if (frequency[letter] > 0)
            {
                --frequency[letter];
                alternatingIncreasingDecreasing[index] = (char)(letter + 'a');
                ++index;
            }
        }
        return index;
    }
}
```
```Kotlin []
class Solution {

    private companion object {
        const val ALPHABET_SIZE = 26
    }

    private val frequency = IntArray(ALPHABET_SIZE)

    fun sortString(input: String): String {
        for (letter in input) {
            ++frequency[letter - 'a']
        }

        var index = 0
        val increasing = true
        val alternatingIncreasingDecreasing = StringBuilder()

        while (index < input.length) {
            index = addLetters(alternatingIncreasingDecreasing, index, increasing)
            index = addLetters(alternatingIncreasingDecreasing, index, !increasing)
        }

        return alternatingIncreasingDecreasing.toString()
    }

    private fun addLetters(alternatingIncreasingDecreasing: StringBuilder, index: Int, increasing: Boolean): Int {
        val start = if (increasing) 0 else (ALPHABET_SIZE - 1)
        val end = if (increasing) ALPHABET_SIZE else (-1)
        val step = if (increasing) 1 else (-1)

        var i = index
        var letter = start

        while (letter != end) {
            if (frequency[letter] > 0) {
                --frequency[letter];
                alternatingIncreasingDecreasing.append((letter + 'a'.code).toChar())
                ++i
            }
            letter += step
        }

        return i
    }
}
```
```Go []
package main

import (
	"fmt"
	"strings"
)

var ALPHABET_SIZE = 26
var frequency = make([]int, ALPHABET_SIZE)

func sortString(input string) string {
	for _, letter := range input {
		frequency[letter-'a']++
	}

	var index = 0
	var increasing = true
	var alternatingIncreasingDecreasing *strings.Builder = &strings.Builder{}

	for index < len(input) {
		index = addLetters(alternatingIncreasingDecreasing, index, increasing)
		index = addLetters(alternatingIncreasingDecreasing, index, !increasing)
	}

	return alternatingIncreasingDecreasing.String()
}

func addLetters(alternatingIncreasingDecreasing *strings.Builder, index int, increasing bool) int {
	start := Ternary(increasing, 0, ALPHABET_SIZE-1)
	end := Ternary(increasing, ALPHABET_SIZE, -1)
	step := Ternary(increasing, 1, -1)

	for letter := start; letter != end; letter += step {
		if frequency[letter] > 0 {
			frequency[letter]--
			alternatingIncreasingDecreasing.WriteByte(byte(letter) + byte('a'))
			index++
		}
	}

	return index
}

func Ternary[T any](condition bool, first T, second T) T {
	if condition {
		return first
	}
	return second
}
```