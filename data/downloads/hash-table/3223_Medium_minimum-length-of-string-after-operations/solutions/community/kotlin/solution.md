# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-length-of-string-after-operations/solutions/5511714/](https://leetcode.com/problems/minimum-length-of-string-after-operations/solutions/5511714/)

---

```Java []
public class Solution {

    private static final int ALPHABET_SIZE = 26;

    public int minimumLength(String input) {
        int[] frequency = new int[ALPHABET_SIZE];
        for (char letter : input.toCharArray()) {
            ++frequency[letter - 'a'];
        }

        int minLengthAfterOperations = 0;
        for (int i = 0; i < ALPHABET_SIZE; ++i) {
            if (frequency[i] == 0) {
                continue;
            }
            minLengthAfterOperations += 2 >> (frequency[i] % 2);
        }

        return minLengthAfterOperations;
    }
}
```
```JavaScript []
/**
 * @param {string} input
 * @return {number}
 */
var minimumLength = function (input) {
    const ALPHABET_SIZE = 26;
    const ASCII_SMALL_CASE_A = 97;
    const frequency = new Array(ALPHABET_SIZE).fill(0);
    for (let i = 0; i < input.length; ++i) {
        ++frequency[input.codePointAt(i) - ASCII_SMALL_CASE_A];
    }

    let minLengthAfterOperations = 0;
    for (let i = 0; i < ALPHABET_SIZE; ++i) {
        if (frequency[i] === 0) {
            continue;
        }
        minLengthAfterOperations += 2 >> (frequency[i] % 2);
    }

    return minLengthAfterOperations;
};
```
```TypeScript []
function minimumLength(input: string): number {
    const ALPHABET_SIZE = 26;
    const ASCII_SMALL_CASE_A = 97;
    const frequency: number[] = new Array(ALPHABET_SIZE).fill(0);
    for (let i = 0; i < input.length; ++i) {
        ++frequency[input.codePointAt(i) - ASCII_SMALL_CASE_A];
    }

    let minLengthAfterOperations = 0;
    for (let i = 0; i < ALPHABET_SIZE; ++i) {
        if (frequency[i] === 0) {
            continue;
        }
        minLengthAfterOperations += 2 >> (frequency[i] % 2);
    }

    return minLengthAfterOperations;
};
```
```C++ []
#include <array>
#include <string>
using namespace std;

class Solution {

    static const int ALPHABET_SIZE = 26;

public:
    int minimumLength(const string& input) const {
        array<int, ALPHABET_SIZE> frequency{};
        for (const auto& letter : input) {
            ++frequency[letter - 'a'];
        }

        int minLengthAfterOperations = 0;
        for (size_t i = 0; i < ALPHABET_SIZE; ++i) {
            if (frequency[i] == 0) {
                continue;
            }
            minLengthAfterOperations += 2 >> (frequency[i] % 2);
        }

        return minLengthAfterOperations;
    }
};
```
```C# []
using System;

public class Solution
{
    private static readonly int ALPHABET_SIZE = 26;

    public int MinimumLength(string input)
    {
        int[] frequency = new int[ALPHABET_SIZE];
        foreach (char letter in input)
        {
            ++frequency[letter - 'a'];
        }

        int minLengthAfterOperations = 0;
        for (int i = 0; i < ALPHABET_SIZE; ++i)
        {
            if (frequency[i] == 0)
            {
                continue;
            }
            minLengthAfterOperations += 2 >> (frequency[i] % 2);
        }

        return minLengthAfterOperations;
    }
}
```
```Kotlin []
class Solution {

    private companion object {
        const val ALPHABET_SIZE = 26
    }

    fun minimumLength(input: String): Int {
        val frequency = IntArray(ALPHABET_SIZE)
        for (letter in input) {
            ++frequency[letter - 'a']
        }

        var minLengthAfterOperations = 0
        for (i in 0..<ALPHABET_SIZE) {
            if (frequency[i] == 0) {
                continue
            }
            minLengthAfterOperations += 2 shr (frequency[i] % 2)
        }

        return minLengthAfterOperations
    }
}
```
```Go []
package main

import "fmt"

const ALPHABET_SIZE = 26

func minimumLength(input string) int {
    frequency := make([]int, ALPHABET_SIZE)
    for _, letter := range input {
        frequency[letter-'a']++
    }

    minLengthAfterOperations := 0
    for i := 0; i < ALPHABET_SIZE; i++ {
        if frequency[i] == 0 {
            continue
        }
        minLengthAfterOperations += 2 >> (frequency[i] % 2)
    }

    return minLengthAfterOperations
}
```