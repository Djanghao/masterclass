# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/5833615/](https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/5833615/)

---

```Java []
public class Solution {

    private static final int NUMBER_OF_CONSECUTIVE_CHARS_TO_BE_REMOVED_AT_ONCE = 3;
    private static final char TARGET_CHAR = 'O';
    private static final char CHAR_TO_CONVERT_TO_TARGET = 'X';

    public int minimumMoves(String input) {
        int minMovesToConvertAllChars = 0;

        for (int i = 0; i < input.length(); ++i) {
            if (input.charAt(i) == CHAR_TO_CONVERT_TO_TARGET) {
                i += NUMBER_OF_CONSECUTIVE_CHARS_TO_BE_REMOVED_AT_ONCE - 1;
                ++minMovesToConvertAllChars;
            }
        }
        return minMovesToConvertAllChars;
    }
}
```
```JavaScript []
/**
 * @param {string} input
 * @return {number}
 */
var minimumMoves = function (input) {
    const NUMBER_OF_CONSECUTIVE_CHARS_TO_BE_REMOVED_AT_ONCE = 3;
    const TARGET_CHAR = 'O';
    const CHAR_TO_CONVERT_TO_TARGET = 'X';

    let minMovesToConvertAllChars = 0;

    for (let i = 0; i < input.length; ++i) {
        if (input.charAt(i) === CHAR_TO_CONVERT_TO_TARGET) {
            i += NUMBER_OF_CONSECUTIVE_CHARS_TO_BE_REMOVED_AT_ONCE - 1;
            ++minMovesToConvertAllChars;
        }
    }
    return minMovesToConvertAllChars;
};
```
```TypeScript []
function minimumMoves(input: string): number {
    const NUMBER_OF_CONSECUTIVE_CHARS_TO_BE_REMOVED_AT_ONCE = 3;
    const TARGET_CHAR = 'O';
    const CHAR_TO_CONVERT_TO_TARGET = 'X';

    let minMovesToConvertAllChars = 0;

    for (let i = 0; i < input.length; ++i) {
        if (input.charAt(i) === CHAR_TO_CONVERT_TO_TARGET) {
            i += NUMBER_OF_CONSECUTIVE_CHARS_TO_BE_REMOVED_AT_ONCE - 1;
            ++minMovesToConvertAllChars;
        }
    }
    return minMovesToConvertAllChars;
};
```
```C++ []
#include <string>
using namespace std;

class Solution {

    static const int NUMBER_OF_CONSECUTIVE_CHARS_TO_BE_REMOVED_AT_ONCE = 3;
    static const char TARGET_CHAR = 'O';
    static const char CHAR_TO_CONVERT_TO_TARGET = 'X';

public:
    int minimumMoves(const string& input) const {
        int minMovesToConvertAllChars = 0;

        for (size_t i = 0; i < input.length(); ++i) {
            if (input[i] == CHAR_TO_CONVERT_TO_TARGET) {
                i += NUMBER_OF_CONSECUTIVE_CHARS_TO_BE_REMOVED_AT_ONCE - 1;
                ++minMovesToConvertAllChars;
            }
        }
        return minMovesToConvertAllChars;
    }
};
```
```C# []
using System;

public class Solution
{
    private static readonly int NUMBER_OF_CONSECUTIVE_CHARS_TO_BE_REMOVED_AT_ONCE = 3;
    private static readonly char TARGET_CHAR = 'O';
    private static readonly char CHAR_TO_CONVERT_TO_TARGET = 'X';
    public int MinimumMoves(string input)
    {
        int minMovesToConvertAllChars = 0;

        for (int i = 0; i < input.Length; ++i)
        {
            if (input[i] == CHAR_TO_CONVERT_TO_TARGET)
            {
                i += NUMBER_OF_CONSECUTIVE_CHARS_TO_BE_REMOVED_AT_ONCE - 1;
                ++minMovesToConvertAllChars;
            }
        }
        return minMovesToConvertAllChars;
    }
}
```
```Kotlin []
class Solution {

    private companion object {
        const val NUMBER_OF_CONSECUTIVE_CHARS_TO_BE_REMOVED_AT_ONCE = 3
        const val TARGET_CHAR = 'O'
        const val CHAR_TO_CONVERT_TO_TARGET = 'X'
    }

    fun minimumMoves(input: String): Int {
        var minMovesToConvertAllChars = 0
        var i = 0

        while (i < input.length) {
            if (input[i] == CHAR_TO_CONVERT_TO_TARGET) {
                i += NUMBER_OF_CONSECUTIVE_CHARS_TO_BE_REMOVED_AT_ONCE - 1
                ++minMovesToConvertAllChars
            }
            ++i
        }
        return minMovesToConvertAllChars
    }
}
```
```Go []
package main

import "fmt"

func minimumMoves(input string) int {
    const NUMBER_OF_CONSECUTIVE_CHARS_TO_BE_REMOVED_AT_ONCE = 3
    const TARGET_CHAR = 'O'
    const CHAR_TO_CONVERT_TO_TARGET = 'X'

    minMovesToConvertAllChars := 0

    for i := 0; i < len(input); i++ {
        if input[i] == CHAR_TO_CONVERT_TO_TARGET {
            i += NUMBER_OF_CONSECUTIVE_CHARS_TO_BE_REMOVED_AT_ONCE - 1
            minMovesToConvertAllChars++
        }
    }
    return minMovesToConvertAllChars
}
```