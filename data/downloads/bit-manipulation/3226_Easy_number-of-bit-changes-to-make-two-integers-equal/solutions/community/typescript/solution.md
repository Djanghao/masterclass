# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal/solutions/5757805/](https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal/solutions/5757805/)

---

```Java []
public class Solution {

    private static final int IMPOSSIBLE_TO_MAKE_SOURCE_NUMBER_EQUAL_TO_TARGET_NUMBER = -1;

    public int minChanges(int sourceNumber, int targetNumber) {
        int minChangesToMakeSourceNumberEqualToTargetNumber = 0;

        while (sourceNumber > 0 || targetNumber > 0) {
            int sourceDigit = sourceNumber & 1;
            int targetDigit = targetNumber & 1;

            if (sourceDigit < targetDigit) {
                return IMPOSSIBLE_TO_MAKE_SOURCE_NUMBER_EQUAL_TO_TARGET_NUMBER;
            }

            minChangesToMakeSourceNumberEqualToTargetNumber += sourceDigit ^ targetDigit;
            sourceNumber >>= 1;
            targetNumber >>= 1;
        }

        return minChangesToMakeSourceNumberEqualToTargetNumber;
    }
}
```
```JavaScript []
/**
 * @param {number} sourceNumber
 * @param {number} targetNumber
 * @return {number}
 */
var minChanges = function (sourceNumber, targetNumber) {
    const IMPOSSIBLE_TO_MAKE_SOURCE_NUMBER_EQUAL_TO_TARGET_NUMBER = -1;
    let minChangesToMakeSourceNumberEqualToTargetNumber = 0;

    while (sourceNumber > 0 || targetNumber > 0) {
        const sourceDigit = sourceNumber & 1;
        const targetDigit = targetNumber & 1;

        if (sourceDigit < targetDigit) {
            return IMPOSSIBLE_TO_MAKE_SOURCE_NUMBER_EQUAL_TO_TARGET_NUMBER;
        }

        minChangesToMakeSourceNumberEqualToTargetNumber += sourceDigit ^ targetDigit;
        sourceNumber >>= 1;
        targetNumber >>= 1;
    }

    return minChangesToMakeSourceNumberEqualToTargetNumber;
};
```
```TypeScript []
function minChanges(sourceNumber: number, targetNumber: number): number {
    const IMPOSSIBLE_TO_MAKE_SOURCE_NUMBER_EQUAL_TO_TARGET_NUMBER = -1;
    let minChangesToMakeSourceNumberEqualToTargetNumber = 0;

    while (sourceNumber > 0 || targetNumber > 0) {
        const sourceDigit = sourceNumber & 1;
        const targetDigit = targetNumber & 1;

        if (sourceDigit < targetDigit) {
            return IMPOSSIBLE_TO_MAKE_SOURCE_NUMBER_EQUAL_TO_TARGET_NUMBER;
        }

        minChangesToMakeSourceNumberEqualToTargetNumber += sourceDigit ^ targetDigit;
        sourceNumber >>= 1;
        targetNumber >>= 1;
    }

    return minChangesToMakeSourceNumberEqualToTargetNumber;
};
```
```C++ []
using namespace std;

class Solution {

    static const int IMPOSSIBLE_TO_MAKE_SOURCE_NUMBER_EQUAL_TO_TARGET_NUMBER = -1;

public:
    int minChanges(int sourceNumber, int targetNumber) const {
        int minChangesToMakeSourceNumberEqualToTargetNumber = 0;

        while (sourceNumber > 0 || targetNumber > 0) {
            int sourceDigit = sourceNumber & 1;
            int targetDigit = targetNumber & 1;

            if (sourceDigit < targetDigit) {
                return IMPOSSIBLE_TO_MAKE_SOURCE_NUMBER_EQUAL_TO_TARGET_NUMBER;
            }

            minChangesToMakeSourceNumberEqualToTargetNumber += sourceDigit ^ targetDigit;
            sourceNumber >>= 1;
            targetNumber >>= 1;
        }

        return minChangesToMakeSourceNumberEqualToTargetNumber;
    }
};
```
```C# []
using System;

public class Solution
{
    private static readonly int IMPOSSIBLE_TO_MAKE_SOURCE_NUMBER_EQUAL_TO_TARGET_NUMBER = -1;

    public int MinChanges(int sourceNumber, int targetNumber)
    {
        int minChangesToMakeSourceNumberEqualToTargetNumber = 0;

        while (sourceNumber > 0 || targetNumber > 0)
        {
            int sourceDigit = sourceNumber & 1;
            int targetDigit = targetNumber & 1;

            if (sourceDigit < targetDigit)
            {
                return IMPOSSIBLE_TO_MAKE_SOURCE_NUMBER_EQUAL_TO_TARGET_NUMBER;
            }

            minChangesToMakeSourceNumberEqualToTargetNumber += sourceDigit ^ targetDigit;
            sourceNumber >>= 1;
            targetNumber >>= 1;
        }

        return minChangesToMakeSourceNumberEqualToTargetNumber;

    }
}
```
```Kotlin []
class Solution {

    private companion object {
        const val IMPOSSIBLE_TO_MAKE_SOURCE_NUMBER_EQUAL_TO_TARGET_NUMBER = -1
    }

    fun minChanges(sourceNumber: Int, targetNumber: Int): Int {
        var minChangesToMakeSourceNumberEqualToTargetNumber = 0
        var sourceNumber = sourceNumber
        var targetNumber = targetNumber

        while (sourceNumber > 0 || targetNumber > 0) {
            val sourceDigit = sourceNumber and 1
            val targetDigit = targetNumber and 1

            if (sourceDigit < targetDigit) {
                return IMPOSSIBLE_TO_MAKE_SOURCE_NUMBER_EQUAL_TO_TARGET_NUMBER
            }

            minChangesToMakeSourceNumberEqualToTargetNumber += sourceDigit xor targetDigit
            sourceNumber = sourceNumber shr 1
            targetNumber = targetNumber shr 1
        }

        return minChangesToMakeSourceNumberEqualToTargetNumber
    }
}
```
```Go []
package main

import "fmt"

const IMPOSSIBLE_TO_MAKE_SOURCE_NUMBER_EQUAL_TO_TARGET_NUMBER = -1

func minChanges(sourceNumber int, targetNumber int) int {
    minChangesToMakeSourceNumberEqualToTargetNumber := 0

    for sourceNumber > 0 || targetNumber > 0 {
        sourceDigit := sourceNumber & 1
        targetDigit := targetNumber & 1

        if sourceDigit < targetDigit {
            return IMPOSSIBLE_TO_MAKE_SOURCE_NUMBER_EQUAL_TO_TARGET_NUMBER
        }

        minChangesToMakeSourceNumberEqualToTargetNumber += sourceDigit ^ targetDigit
        sourceNumber >>= 1
        targetNumber >>= 1
    }

    return minChangesToMakeSourceNumberEqualToTargetNumber
}
```