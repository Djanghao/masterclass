# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-string-length/solutions/5599278/](https://leetcode.com/problems/minimize-string-length/solutions/5599278/)

---


```Java []

public class Solution {

    public int minimizedStringLength(String input) {
        int bitMaskAllUniqueLetters = 0;
        for (int letter : input.toCharArray()) {
            bitMaskAllUniqueLetters |= 1 << (letter - 'a');
        }

        int minimizedLength = 0;
        while (bitMaskAllUniqueLetters > 0) {
            minimizedLength += bitMaskAllUniqueLetters & 1;
            bitMaskAllUniqueLetters >>= 1;
        }
        return minimizedLength;
    }
}
```
```JavaScript []

/**
 * @param {string} input
 * @return {number}
 */
var minimizedStringLength = function (input) {
    const ASCII_SMALL_CASE_A = 97;
    let bitMaskAllUniqueLetters = 0;
    for (let i = 0; i < input.length; ++i) {
        bitMaskAllUniqueLetters |= 1 << (input.codePointAt(i) - ASCII_SMALL_CASE_A);
    }

    let minimizedLength = 0;
    while (bitMaskAllUniqueLetters > 0) {
        minimizedLength += bitMaskAllUniqueLetters & 1;
        bitMaskAllUniqueLetters >>= 1;
    }
    return minimizedLength;
};
```
```TypeScript []

function minimizedStringLength(input: string): number {
    const ASCII_SMALL_CASE_A = 97;
    let bitMaskAllUniqueLetters = 0;
    for (let i = 0; i < input.length; ++i) {
        bitMaskAllUniqueLetters |= 1 << (input.codePointAt(i) - ASCII_SMALL_CASE_A);
    }

    let minimizedLength = 0;
    while (bitMaskAllUniqueLetters > 0) {
        minimizedLength += bitMaskAllUniqueLetters & 1;
        bitMaskAllUniqueLetters >>= 1;
    }
    return minimizedLength;
};
```
```C++ []

#include <string>
using namespace std;


class Solution {

public:
    int minimizedStringLength(const string& input)const {
        int bitMaskAllUniqueLetters = 0;
        for (const auto& letter : input) {
            bitMaskAllUniqueLetters |= 1 << (letter - 'a');
        }

        int minimizedLength = 0;
        while (bitMaskAllUniqueLetters > 0) {
            minimizedLength += bitMaskAllUniqueLetters & 1;
            bitMaskAllUniqueLetters >>= 1;
        }
        return minimizedLength;
    }
};
```
```C# []

using System;

public class Solution
{
    public int MinimizedStringLength(string input)
    {
        int bitMaskAllUniqueLetters = 0;
        foreach (int letter in input)
        {
            bitMaskAllUniqueLetters |= 1 << (letter - 'a');
        }

        int minimizedLength = 0;
        while (bitMaskAllUniqueLetters > 0)
        {
            minimizedLength += bitMaskAllUniqueLetters & 1;
            bitMaskAllUniqueLetters >>= 1;
        }
        return minimizedLength;
    }
}
```
```Kotlin []

class Solution {
    fun minimizedStringLength(input: String): Int {
        var bitMaskAllUniqueLetters = 0
        for (letter in input) {
            bitMaskAllUniqueLetters = bitMaskAllUniqueLetters or (1 shl (letter - 'a'))
        }

        var minimizedLength = 0
        while (bitMaskAllUniqueLetters > 0) {
            minimizedLength += bitMaskAllUniqueLetters and 1
            bitMaskAllUniqueLetters = bitMaskAllUniqueLetters shr 1
        }
        return minimizedLength
    }
}
```
```Go []

package main

import "fmt"

func minimizedStringLength(input string) int {
    bitMaskAllUniqueLetters := 0
    for _, letter := range input {
        bitMaskAllUniqueLetters |= 1 << (letter - 'a')
    }

    minimizedLength := 0
    for bitMaskAllUniqueLetters > 0 {
        minimizedLength += bitMaskAllUniqueLetters & 1
        bitMaskAllUniqueLetters = bitMaskAllUniqueLetters >> 1
    }
    return minimizedLength
}
```