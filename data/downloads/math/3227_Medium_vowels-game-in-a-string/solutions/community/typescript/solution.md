# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/vowels-game-in-a-string/solutions/5542931/](https://leetcode.com/problems/vowels-game-in-a-string/solutions/5542931/)

---

```Java []
public class Solution {

    public boolean doesAliceWin(String input) {
        for (char letter : input.toCharArray()) {
            if (isVowel(letter)) {
                return true;
            }
        }
        return false;
    }

    private boolean isVowel(char letter) {
        return letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u';
    }
}
```
```JavaScript []
/**
 * @param {string} input
 * @return {boolean}
 */
var doesAliceWin = function (input) {
    for (let letter of input) {
        if (isVowel(letter)) {
            return true;
        }
    }
    return false;
};

/**
 * @param {string} letter
 * @return {boolean}
 */
function isVowel(letter) {
    return letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u';
}
```
```TypeScript []
function doesAliceWin(input: string): boolean {
    for (let letter of input) {
        if (isVowel(letter)) {
            return true;
        }
    }
    return false;
};

function isVowel(letter: string): boolean {
    return letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u';
}
```
```C++ []
#include <string>
using namespace std;

class Solution {

public:
    bool doesAliceWin(const string& input) const {
        for (const auto& letter : input) {
            if (isVowel(letter)) {
                return true;
            }
        }
        return false;
    }

private:
    bool isVowel(char letter) const {
        return letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u';
    }
};
```
```C# []
using System;

public class Solution
{
    public bool DoesAliceWin(string input)
    {
        foreach (char letter in input)
        {
            if (IsVowel(letter))
            {
                return true;
            }
        }
        return false;
    }

    private bool IsVowel(char letter)
    {
        return letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u';
    }
}
```
```Kotlin []
class Solution {
    fun doesAliceWin(input: String): Boolean {
        for (letter in input) {
            if (isVowel(letter)) {
                return true
            }
        }
        return false
    }

    private fun isVowel(letter: Char): Boolean {
        return letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'
    }
}
```
```Go []
package main

import "fmt"

func doesAliceWin(input string) bool {
    for _, letter := range input {
        if isVowel(letter) {
            return true
        }
    }
    return false
}

func isVowel(letter rune) bool {
    return letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'
}
```