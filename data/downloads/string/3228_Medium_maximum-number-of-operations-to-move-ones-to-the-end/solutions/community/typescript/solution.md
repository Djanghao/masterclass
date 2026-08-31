# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-operations-to-move-ones-to-the-end/solutions/5530725/](https://leetcode.com/problems/maximum-number-of-operations-to-move-ones-to-the-end/solutions/5530725/)

---

```Java []
public class Solution {

    public int maxOperations(String binaryString) {
        char[] binaryArray = binaryString.toCharArray();
        int countOnes = binaryArray[0] - '0';
        int maxOperations = 0;

        for (int i = 1; i < binaryArray.length; ++i) {
            countOnes += binaryArray[i] - '0';
            maxOperations += binaryArray[i - 1] > binaryArray[i] ? countOnes : 0;
        }
        return maxOperations;
    }
}
```
```JavaScript []
/**
 * @param {string} binaryString
 * @return {number}
 */
var maxOperations = function (binaryString) {
    const ASCII_ZERO = 48;
    let countOnes = binaryString.codePointAt(0) - ASCII_ZERO;
    let maxOperations = 0;

    for (let i = 1; i < binaryString.length; ++i) {
        countOnes += binaryString.codePointAt(i) - ASCII_ZERO;
        maxOperations += binaryString[i - 1] > binaryString[i] ? countOnes : 0;
    }
    return maxOperations;
};
```
```TypeScript []
function maxOperations(binaryString: string): number {
    const ASCII_ZERO = 48;
    let countOnes = binaryString.codePointAt(0) - ASCII_ZERO;
    let maxOperations = 0;

    for (let i = 1; i < binaryString.length; ++i) {
        countOnes += binaryString.codePointAt(i) - ASCII_ZERO;
        maxOperations += binaryString[i - 1] > binaryString[i] ? countOnes : 0;
    }
    return maxOperations;
};
```
```C++ []
#include <string>
using namespace std;

class Solution {

public:
    int maxOperations(const string& binaryString) const {
        int countOnes = binaryString[0] - '0';
        int maxOperations = 0;

        for (size_t i = 1; i < binaryString.size(); ++i) {
            countOnes += binaryString[i] - '0';
            maxOperations += binaryString[i - 1] > binaryString[i] ? countOnes : 0;
        }
        return maxOperations;
    }
};
```
```C# []
using System;

public class Solution
{
    public int MaxOperations(string binaryString)
    {
        int countOnes = binaryString[0] - '0';
        int maxOperations = 0;

        for (int i = 1; i < binaryString.Length; ++i)
        {
            countOnes += binaryString[i] - '0';
            maxOperations += binaryString[i - 1] > binaryString[i] ? countOnes : 0;
        }
        return maxOperations;
    }
}
```
```Kotlin []
class Solution {

    fun maxOperations(binaryString: String): Int {
        var countOnes = binaryString[0] - '0'
        var maxOperations = 0

        for (i in 1..<binaryString.length) {
            countOnes += binaryString[i] - '0'
            maxOperations += if (binaryString[i - 1] > binaryString[i]) countOnes else 0
        }
        return maxOperations
    }
}
```
```Go []
package main

import "fmt"

func maxOperations(binaryString string) int {
    countOnes := int(binaryString[0] - '0')
    maxOperations := 0

    for i := 1; i < len(binaryString); i++ {
        countOnes += int(binaryString[i] - '0')
        maxOperations += Ternary(binaryString[i-1] > binaryString[i], countOnes, 0)
    }
    return maxOperations
}

func Ternary[T any](condition bool, first T, second T) T {
    if condition {
        return first
    }
    return second
}
```