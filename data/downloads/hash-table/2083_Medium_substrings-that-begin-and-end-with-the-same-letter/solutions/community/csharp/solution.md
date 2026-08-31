# Java | JavaScript | TypeScript | C++ | C# | Kotlin Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/solutions/5096279/](https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/solutions/5096279/)

---

```Java []
public class Solution {

    private static final int ALPHABET_SIZE = 26;

    public long numberOfSubstrings(String input) {
        long[] frequency = new long[ALPHABET_SIZE];
        for (char letter : input.toCharArray()) {
            ++frequency[letter - 'a'];
        }

        long totalSubstrings = 0;
        for (long value : frequency) {
            totalSubstrings += value * (value + 1) / 2;
        }

        return totalSubstrings;
    }
}
```
```JavaScript []
/**
 * @param {string} input
 * @return {number}
 */
var numberOfSubstrings = function (input) {
    const ALPHABET_SIZE = 26;
    const frequency = new Array(ALPHABET_SIZE).fill(0);
    for (let letter of input) {
        ++frequency[getASCII(letter) - getASCII('a')];
    }

    let totalSubstrings = 0;
    for (let value of frequency) {
        totalSubstrings += Math.floor(value * (value + 1) / 2);
    }

    return totalSubstrings;
};

/**
 * @param {string} letter
 * @return {number}
 */
function getASCII(letter) {
    return letter.codePointAt(0);
}
```
```TypeScript []
function numberOfSubstrings(input: string): number {
    const ALPHABET_SIZE = 26;
    const frequency: number[] = new Array(ALPHABET_SIZE).fill(0);
    for (let letter of input) {
        ++frequency[getASCII(letter) - getASCII('a')];
    }

    let totalSubstrings = 0;
    for (let value of frequency) {
        totalSubstrings += Math.floor(value * (value + 1) / 2);
    }

    return totalSubstrings;
};

function getASCII(letter: string): number {
    return letter.codePointAt(0);
}
```
```C++ []
#include <array>
#include <vector>
using namespace std;

class Solution {

    static const int ALPHABET_SIZE = 26;

public:
    long long numberOfSubstrings(const string& input) const {
        array<long long, ALPHABET_SIZE> frequency{};
        for (const auto& letter : input) {
            ++frequency[letter - 'a'];
        }

        long long totalSubstrings = 0;
        for (const auto& value : frequency) {
            totalSubstrings += value * (value + 1) / 2;
        }

        return totalSubstrings;
    }
};
```
```C# []
using System;

public class Solution
{
    private static readonly int ALPHABET_SIZE = 26;

    public long NumberOfSubstrings(string input)
    {
        long[] frequency = new long[ALPHABET_SIZE];
        foreach (char letter in input)
        {
            ++frequency[letter - 'a'];
        }

        long totalSubstrings = 0;
        foreach (long value in frequency)
        {
            totalSubstrings += value * (value + 1) / 2;
        }

        return totalSubstrings;
    }
}
```
```Kotlin []
class Solution {

    companion object {
        const val ALPHABET_SIZE = 26
    }

    fun numberOfSubstrings(input: String): Long {
        val frequency = LongArray(ALPHABET_SIZE);
        for (letter in input) {
            ++frequency[letter - 'a'];
        }

        var totalSubstrings: Long = 0;
        for (value in frequency) {
            totalSubstrings += value * (value + 1) / 2;
        }

        return totalSubstrings;
    }
}
```