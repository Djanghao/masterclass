# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-a-swap/solutions/5544035/](https://leetcode.com/problems/lexicographically-smallest-string-after-a-swap/solutions/5544035/)

---

```Java []
public class Solution {

    public String getSmallestString(String input) {
        char[] inputAsArray = input.toCharArray();

        for (int i = 0; i < inputAsArray.length - 1; ++i) {
            int x = inputAsArray[i] - '0';
            int y = inputAsArray[i + 1] - '0';
            if (x % 2 == y % 2 && x > y) {
                swap(inputAsArray, i, i + 1);
                break;
            }
        }
        return String.valueOf(inputAsArray);
    }

    private void swap(char[] inputAsArray, int first, int second) {
        char temp = inputAsArray[first];
        inputAsArray[first] = inputAsArray[second];
        inputAsArray[second] = temp;
    }
}
```
```JavaScript []
/**
 * @param {string} input
 * @return {string}
 */
var getSmallestString = function (input) {
    const ASCII_ZERO = 48;
    const inputAsArray = input.split('');

    for (let i = 0; i < inputAsArray.length - 1; ++i) {
        let x = inputAsArray[i].codePointAt(0) - ASCII_ZERO;
        let y = inputAsArray[i + 1].codePointAt(0) - ASCII_ZERO;
        if (x % 2 === y % 2 && x > y) {
            [inputAsArray[i], inputAsArray[i + 1]] = [inputAsArray[i + 1], inputAsArray[i]];
            break;
        }
    }
    return inputAsArray.join('');
};
```
```TypeScript []
function getSmallestString(input: string): string {
    const ASCII_ZERO = 48;
    const inputAsArray: string[] = input.split('');

    for (let i = 0; i < inputAsArray.length - 1; ++i) {
        let x = inputAsArray[i].codePointAt(0) - ASCII_ZERO;
        let y = inputAsArray[i + 1].codePointAt(0) - ASCII_ZERO;
        if (x % 2 === y % 2 && x > y) {
            [inputAsArray[i], inputAsArray[i + 1]] = [inputAsArray[i + 1], inputAsArray[i]];
            break;
        }
    }
    return inputAsArray.join('');
};
```
```C++ []
#include <string>
using namespace std;

class Solution {

public:
    string getSmallestString(string& input)const {
        for (size_t i = 0; i < input.size() - 1; ++i) {
            int x = input[i] - '0';
            int y = input[i + 1] - '0';
            if (x % 2 == y % 2 && x > y) {
                swap(input[i],input[i+1]);
                break;
            }
        }
        return input;
    }
};
```
```C# []
using System;

public class Solution
{
    public string GetSmallestString(string input)
    {
        char[] inputAsArray = input.ToCharArray();

        for (int i = 0; i < inputAsArray.Length - 1; ++i)
        {
            int x = inputAsArray[i] - '0';
            int y = inputAsArray[i + 1] - '0';
            if (x % 2 == y % 2 && x > y)
            {
                Swap(inputAsArray, i, i + 1);
                break;
            }
        }
        return string.Join("", inputAsArray);
    }

    private void Swap(char[] inputAsArray, int first, int second)
    {
        char temp = inputAsArray[first];
        inputAsArray[first] = inputAsArray[second];
        inputAsArray[second] = temp;
    }
}
```
```Kotlin []
class Solution {

    fun getSmallestString(input: String): String {
        val inputAsArray = input.toCharArray()

        for (i in 0..<inputAsArray.size - 1) {
            val x = inputAsArray[i] - '0'
            val y = inputAsArray[i + 1] - '0'
            if (x % 2 == y % 2 && x > y) {
                swap(inputAsArray, i, i + 1)
                break
            }
        }
        return inputAsArray.joinToString("")
    }

    private fun swap(inputAsArray: CharArray, first: Int, second: Int) {
        val temp = inputAsArray[first]
        inputAsArray[first] = inputAsArray[second]
        inputAsArray[second] = temp
    }
}
```
```Go []
package main

import (
    "fmt"
    "reflect"
)

func getSmallestString(input string) string {
    inputAsArray := []byte(input)
    swap := reflect.Swapper(inputAsArray)

    for i := 0; i < len(inputAsArray) - 1; i++ {
        x := inputAsArray[i] - '0'
        y := inputAsArray[i+1] - '0'
        if x % 2 == y % 2 && x > y {
            swap(i, i + 1)
            break
        }
    }
    return string(inputAsArray)
}
```
