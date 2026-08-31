# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/better-compression-of-string/solutions/5265858/](https://leetcode.com/problems/better-compression-of-string/solutions/5265858/)

---

```Java []
public class Solution {

    private static final int ALPHABET_SIZE = 26;

    public String betterCompression(String compressed) {
        int[] frequency = createArrayFrequency(compressed.toCharArray());
        return createBetterCompression(frequency);
    }

    private int[] createArrayFrequency(char[] compressed) {
        int[] frequency = new int[ALPHABET_SIZE];
        for (int i = 0; i < compressed.length; ++i) {

            int compression = 0;
            char letter = compressed[i];
            while (++i < compressed.length && Character.isDigit(compressed[i])) {
                compression = compression * 10 + (compressed[i] - '0');
            }
            frequency[letter - 'a'] += compression;
            --i;
        }
        return frequency;
    }

    private String createBetterCompression(int[] frequency) {
        StringBuilder betterCompression = new StringBuilder();
        for (int letter = 0; letter < ALPHABET_SIZE; ++letter) {
            if (frequency[letter] > 0) {
                betterCompression.append((char) (letter + 'a'));
                betterCompression.append(frequency[letter]);
            }
        }
        return betterCompression.toString();
    }
}
```
```JavaScript []
/**
 * @param {string} compressed
 * @return {string}
 */
var betterCompression = function (compressed) {
    this.ALPHABET_SIZE = 26;
    this.ASCII_SMALL_CASE_A = 97;
    this.ASCII_ZERO = 48;

    const frequency = createArrayFrequency(compressed);
    return createBetterCompression(frequency);
};

/**
 * @param {string} compressed
 * @return {number[]}
 */
function createArrayFrequency(compressed) {
    const frequency = new Array(this.ALPHABET_SIZE).fill(0);
    for (let i = 0; i < compressed.length; ++i) {

        let compression = 0;
        let letter = compressed.codePointAt(i);
        while (++i < compressed.length && isDigit(compressed.charAt(i))) {
            compression = compression * 10 + (compressed.codePointAt(i) - this.ASCII_ZERO);
        }
        frequency[letter - this.ASCII_SMALL_CASE_A] += compression;
        --i;
    }
    return frequency;
}

/**
 * @param {number[]} frequency
 * @return {string}
 */
function createBetterCompression(frequency) {
    const betterCompression = new Array();
    for (let letter = 0; letter < this.ALPHABET_SIZE; ++letter) {
        if (frequency[letter] > 0) {
            betterCompression.push(String.fromCodePoint(letter + this.ASCII_SMALL_CASE_A));
            betterCompression.push((frequency[letter]).toString());
        }
    }
    return betterCompression.join('');
}

/**
 * @param {string} character
 * @return {boolean}
 */
function isDigit(character) {
    return '0' <= character && character <= '9';
}
```
```TypeScript []
function betterCompression(compressed: string): string {
    this.ALPHABET_SIZE = 26;
    this.ASCII_SMALL_CASE_A = 97;
    this.ASCII_ZERO = 48;

    const frequency = createArrayFrequency(compressed);
    return createBetterCompression(frequency);
};

function createArrayFrequency(compressed: string): number[] {
    const frequency: number[] = new Array(this.ALPHABET_SIZE).fill(0);
    for (let i = 0; i < compressed.length; ++i) {

        let compression = 0;
        let letter = compressed.codePointAt(i);
        while (++i < compressed.length && isDigit(compressed.charAt(i))) {
            compression = compression * 10 + (compressed.codePointAt(i) - this.ASCII_ZERO);
        }
        frequency[letter - this.ASCII_SMALL_CASE_A] += compression;
        --i;
    }
    return frequency;
}

function createBetterCompression(frequency: number[]): string {
    const betterCompression: string[] = new Array();
    for (let letter = 0; letter < this.ALPHABET_SIZE; ++letter) {
        if (frequency[letter] > 0) {
            betterCompression.push(String.fromCodePoint(letter + this.ASCII_SMALL_CASE_A));
            betterCompression.push((frequency[letter]).toString());
        }
    }
    return betterCompression.join('');
}

function isDigit(character: string): boolean {
    return '0' <= character && character <= '9';
}
```
```C++ []
#include <span>
#include <array>
#include <string>
#include <string_view>
using namespace std;

class Solution {

    static const int ALPHABET_SIZE = 26;

public:
    string betterCompression(const string& compressed) const {
        array<int, ALPHABET_SIZE> frequency = createArrayFrequency(compressed);
        return createBetterCompression(frequency);
    }

private:
    array<int, ALPHABET_SIZE> createArrayFrequency(string_view compressed) const {
        array<int, ALPHABET_SIZE> frequency{};
        for (size_t i = 0; i < compressed.length(); ++i) {

            int compression = 0;
            char letter = compressed[i];
            while (++i < compressed.length() && isdigit(compressed[i])) {
                compression = compression * 10 + (compressed[i] - '0');
            }
            frequency[letter - 'a'] += compression;
            --i;
        }
        return frequency;
    }

    string createBetterCompression(span<const int> frequency) const {
        string betterCompression;
        for (size_t letter = 0; letter < ALPHABET_SIZE; ++letter) {
            if (frequency[letter] > 0) {
                betterCompression.push_back(static_cast<char>(letter + 'a'));
                betterCompression.append(to_string(frequency[letter]));
            }
        }
        return betterCompression;
    }
};
```
```C# []
using System;

public class Solution
{
    private static readonly int ALPHABET_SIZE = 26;

    public string BetterCompression(string compressed)
    {
        int[] frequency = CreateArrayFrequency(compressed.ToCharArray());
        return CreateBetterCompression(frequency);
    }

    private int[] CreateArrayFrequency(char[] compressed)
    {
        int[] frequency = new int[ALPHABET_SIZE];
        for (int i = 0; i < compressed.Length; ++i)
        {
            int compression = 0;
            char letter = compressed[i];
            while (++i < compressed.Length && char.IsDigit(compressed[i]))
            {
                compression = compression * 10 + (compressed[i] - '0');
            }
            frequency[letter - 'a'] += compression;
            --i;
        }
        return frequency;
    }

    private String CreateBetterCompression(int[] frequency)
    {
        StringBuilder betterCompression = new StringBuilder();
        for (int letter = 0; letter < ALPHABET_SIZE; ++letter)
        {
            if (frequency[letter] > 0)
            {
                betterCompression.Append((char)(letter + 'a'));
                betterCompression.Append(frequency[letter]);
            }
        }
        return betterCompression.ToString();
    }
}
```
```Kotlin []
class Solution {

    private companion object {
        const val ALPHABET_SIZE = 26
    }

    fun betterCompression(compressed: String): String {
        val frequency = createArrayFrequency(compressed.toCharArray());
        return createBetterCompression(frequency);
    }

    private fun createArrayFrequency(compressed: CharArray): IntArray {
        val frequency = IntArray(ALPHABET_SIZE)
        var index = 0

        while (index < compressed.size) {

            var compression = 0;
            val letter = compressed[index];
            while (++index < compressed.size && Character.isDigit(compressed[index])) {
                compression = compression * 10 + (compressed[index] - '0');
            }
            println(letter)
            frequency[letter - 'a'] += compression;
        }
        return frequency;
    }

    private fun createBetterCompression(frequency: IntArray): String {
        val betterCompression = StringBuilder()
        for (letter in 0..<ALPHABET_SIZE) {
            if (frequency[letter] > 0) {
                betterCompression.append((letter + 'a'.code).toChar());
                betterCompression.append(frequency[letter]);
            }
        }
        return betterCompression.toString()
    }
}
```
```Go []

package main

import (
	"fmt"
	"strings"
	"unicode"
)

const ALPHABET_SIZE = 26

func betterCompression(compressed string) string {
	var frequency = createArrayFrequency(&compressed)
	return createBetterCompression(&frequency)
}

func createArrayFrequency(compressed *string) [ALPHABET_SIZE]int {
	frequency := [ALPHABET_SIZE]int{}

	for i := 0; i < len(*compressed); i++ {

		compression := 0
		letter := (*compressed)[i]
		i++
		for i < len(*compressed) && unicode.IsDigit(rune((*compressed)[i])) {
			compression = compression*10 + int(((*compressed)[i])-'0')
			i++
		}
		i--
		frequency[int(letter-'a')] += compression
	}
	return frequency
}

func createBetterCompression(frequency *[ALPHABET_SIZE]int) string {
	betterCompression := strings.Builder{}

	for letter := 0; letter < ALPHABET_SIZE; letter++ {
		if (*frequency)[letter] > 0 {
			betterCompression.WriteRune(rune(letter + 'a'))
			betterCompression.WriteString(fmt.Sprint((*frequency)[letter]))
		}
	}
	return betterCompression.String()
}
```