# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-ii/solutions/5357490/](https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-ii/solutions/5357490/)

---


```Java []
public class Solution {

    public int minOperations(int[] input) {
        int flip = 0;
        int minOperations = 0;
        for (int i = 0; i < input.length; ++i) {
            if ((input[i] ^ flip) == 0) {
                ++minOperations;
                flip ^= 1;
            }
        }
        return minOperations;
    }
}
```
```JavaScript []
/**
 * @param {number[]} input
 * @return {number}
 */
var minOperations = function (input) {
    let flip = 0;
    let minOperations = 0;
    for (let i = 0; i < input.length; ++i) {
        if ((input[i] ^ flip) === 0) {
            ++minOperations;
            flip ^= 1;
        }
    }
    return minOperations;
};
```
```TypeScript []
function minOperations(input: number[]): number {
    let flip = 0;
    let minOperations = 0;
    for (let i = 0; i < input.length; ++i) {
        if ((input[i] ^ flip) === 0) {
            ++minOperations;
            flip ^= 1;
        }
    }
    return minOperations;
};
```
```C++ []
#include <vector>
using namespace std;

class Solution {

public:
    int minOperations(vector<int>& input) const {
        int flip = 0;
        int minOperations = 0;
        for (size_t i = 0; i < input.size(); ++i) {
            if ((input[i] ^ flip) == 0) {
                ++minOperations;
                flip ^= 1;
            }
        }
        return minOperations;
    }
};
```
```C# []
using System;

public class Solution
{
    public int MinOperations(int[] input)
    {
        int flip = 0;
        int minOperations = 0;
        for (int i = 0; i < input.Length; ++i)
        {
            if ((input[i] ^ flip) == 0)
            {
                ++minOperations;
                flip ^= 1;
            }
        }
        return minOperations;
    }
}
```
```Kotlin []
class Solution {
    fun minOperations(input: IntArray): Int {
        var flip = 0
        var minOperations = 0
        for (i in input.indices) {
            if ((input[i] xor flip) == 0) {
                ++minOperations
                flip = flip xor 1
            }
        }
        return minOperations
    }
}
```
```Go []
package main

import "fmt"

func minOperations(input []int) int {
    flip := 0
    minOperations := 0
    for i := range input {
        if (input[i] ^ flip) == 0 {
            minOperations++
            flip = flip ^ 1
        }
    }
    return minOperations
}
```