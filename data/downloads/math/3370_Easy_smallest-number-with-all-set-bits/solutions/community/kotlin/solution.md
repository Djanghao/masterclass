# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-number-with-all-set-bits/solutions/6113775/](https://leetcode.com/problems/smallest-number-with-all-set-bits/solutions/6113775/)

---

```Java []
public class Solution {

    public int smallestNumber(int input) {
        return (Integer.highestOneBit(input) << 1) - 1;
    }
}
```
```JavaScript []
/**
 * @param {number} input
 * @return {number}
 */
var smallestNumber = function (input) {
    return ((2 << Math.floor(Math.log2(input)))) - 1;
};
```
```TypeScript []
function smallestNumber(input: number): number {
    return ((2 << Math.floor(Math.log2(input)))) - 1;
};
```
```C++ []
#include <cmath>
using namespace std;

class Solution {

public:
    int smallestNumber(int input) const {
        return(2 << static_cast<int>(log2(input))) - 1;
    }
};
```
```C# []
using System;

public class Solution
{
    public int SmallestNumber(int input)
    {
        return (2 << (int)Math.Log2(input)) - 1;
    }
}
```
```Kotlin []
import kotlin.math.log2

class Solution {
    fun smallestNumber(input: Int): Int {
        return (2 shl log2(input.toDouble()).toInt()) - 1
    }
}
```
```Go []
package main

import (
    "fmt"
    "math"
)

func smallestNumber(input int) int {
    return (2 << int(math.Log2(float64(input)))) - 1
}
```