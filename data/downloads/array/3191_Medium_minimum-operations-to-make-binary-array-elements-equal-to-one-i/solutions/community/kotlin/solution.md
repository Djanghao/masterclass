# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/solutions/5357235/](https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/solutions/5357235/)

---

```Java []
public class Solution {

    private static final int IMPOSSIBLE_TO_MAKE_ALL_ELEMENTS_EQUAL_TO_ONE = -1;

    public int minOperations(int[] input) {
        int countFlips = 0;

        for (int i = 0; i < input.length; ++i) {
            if (input[i] == 1) {
                continue;
            }
            if (i + 2 > input.length - 1) {
                return IMPOSSIBLE_TO_MAKE_ALL_ELEMENTS_EQUAL_TO_ONE;
            }
            input[i + 1] ^= 1;
            input[i + 2] ^= 1;
            ++countFlips;
        }

        return countFlips;
    }
}
```
```JavaScript []
/**
 * @param {number[]} input
 * @return {number}
 */
var minOperations = function (input) {
    const IMPOSSIBLE_TO_MAKE_ALL_ELEMENTS_EQUAL_TO_ONE = -1;
    let countFlips = 0;

    for (let i = 0; i < input.length; ++i) {
        if (input[i] === 1) {
            continue;
        }
        if (i + 2 > input.length - 1) {
            return IMPOSSIBLE_TO_MAKE_ALL_ELEMENTS_EQUAL_TO_ONE;
        }
        input[i + 1] ^= 1;
        input[i + 2] ^= 1;
        ++countFlips;
    }

    return countFlips;
};
```
```TypeScript []
function minOperations(input: number[]): number {
    const IMPOSSIBLE_TO_MAKE_ALL_ELEMENTS_EQUAL_TO_ONE = -1;
    let countFlips = 0;

    for (let i = 0; i < input.length; ++i) {
        if (input[i] === 1) {
            continue;
        }
        if (i + 2 > input.length - 1) {
            return IMPOSSIBLE_TO_MAKE_ALL_ELEMENTS_EQUAL_TO_ONE;
        }
        input[i + 1] ^= 1;
        input[i + 2] ^= 1;
        ++countFlips;
    }

    return countFlips;
};
```
```C++ []
#include <vector>
using namespace std;

class Solution {

    static const int IMPOSSIBLE_TO_MAKE_ALL_ELEMENTS_EQUAL_TO_ONE = -1;

public:
    int minOperations(vector<int>& input) const {
        int countFlips = 0;

        for (size_t i = 0; i < input.size(); ++i) {
            if (input[i] == 1) {
                continue;
            }
            if (i + 2 > input.size() - 1) {
                return IMPOSSIBLE_TO_MAKE_ALL_ELEMENTS_EQUAL_TO_ONE;
            }
            input[i + 1] ^= 1;
            input[i + 2] ^= 1;
            ++countFlips;
        }

        return countFlips;
    }
};
```
```C# []
using System;

public class Solution
{
    static readonly int IMPOSSIBLE_TO_MAKE_ALL_ELEMENTS_EQUAL_TO_ONE = -1;
    public int MinOperations(int[] input)
    {
        int countFlips = 0;

        for (int i = 0; i < input.Length; ++i)
        {
            if (input[i] == 1)
            {
                continue;
            }
            if (i + 2 > input.Length - 1)
            {
                return IMPOSSIBLE_TO_MAKE_ALL_ELEMENTS_EQUAL_TO_ONE;
            }
            input[i + 1] ^= 1;
            input[i + 2] ^= 1;
            ++countFlips;
        }

        return countFlips;
    }
}
```
```Kotlin []
class Solution {

    private companion object {
        const val IMPOSSIBLE_TO_MAKE_ALL_ELEMENTS_EQUAL_TO_ONE = -1
    }

    fun minOperations(input: IntArray): Int {
        var countFlips = 0

        for (i in input.indices) {
            if (input[i] == 1) {
                continue
            }
            if (i + 2 > input.size - 1) {
                return IMPOSSIBLE_TO_MAKE_ALL_ELEMENTS_EQUAL_TO_ONE
            }
            input[i + 1] = input[i + 1] xor 1
            input[i + 2] = input[i + 2] xor 1
            ++countFlips
        }

        return countFlips
    }
}
```
```Go []
package main

import "fmt"

const IMPOSSIBLE_TO_MAKE_ALL_ELEMENTS_EQUAL_TO_ONE = -1

func minOperations(input []int) int {
    countFlips := 0

    for i := range input {
        if input[i] == 1 {
            continue
        }
        if i + 2 > len(input) - 1 {
            return IMPOSSIBLE_TO_MAKE_ALL_ELEMENTS_EQUAL_TO_ONE
        }
        input[i + 1] ^= 1
        input[i + 2] ^= 1
        countFlips++
    }

    return countFlips
}
```