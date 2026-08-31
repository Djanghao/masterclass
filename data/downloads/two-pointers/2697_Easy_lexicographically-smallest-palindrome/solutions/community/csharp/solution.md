# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 1
**Link:** [https://leetcode.com/problems/lexicographically-smallest-palindrome/solutions/5481625/](https://leetcode.com/problems/lexicographically-smallest-palindrome/solutions/5481625/)

---

```Java []
public class Solution {

    public String makeSmallestPalindrome(String s) {
        char[] lexicographicallySmallestPalindrome = s.toCharArray();
        int left = 0;
        int right = lexicographicallySmallestPalindrome.length - 1;

        while (left < right) {
            if (lexicographicallySmallestPalindrome[left] < lexicographicallySmallestPalindrome[right]) {
                lexicographicallySmallestPalindrome[right] = lexicographicallySmallestPalindrome[left];
            } else {
                lexicographicallySmallestPalindrome[left] = lexicographicallySmallestPalindrome[right];
            }
            ++left;
            --right;
        }
        return String.valueOf(lexicographicallySmallestPalindrome);
    }
}
```
```JavaScript []
/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function (s) {
    const lexicographicallySmallestPalindrome = s.split('');
    let left = 0;
    let right = lexicographicallySmallestPalindrome.length - 1;

    while (left < right) {
        if (lexicographicallySmallestPalindrome[left] < lexicographicallySmallestPalindrome[right]) {
            lexicographicallySmallestPalindrome[right] = lexicographicallySmallestPalindrome[left];
        } else {
            lexicographicallySmallestPalindrome[left] = lexicographicallySmallestPalindrome[right];
        }
        ++left;
        --right;
    }
    return lexicographicallySmallestPalindrome.join('');
};
```
```TypeScript []
function makeSmallestPalindrome(s: string): string {
    const lexicographicallySmallestPalindrome: string[] = s.split('');
    let left = 0;
    let right = lexicographicallySmallestPalindrome.length - 1;

    while (left < right) {
        if (lexicographicallySmallestPalindrome[left] < lexicographicallySmallestPalindrome[right]) {
            lexicographicallySmallestPalindrome[right] = lexicographicallySmallestPalindrome[left];
        } else {
            lexicographicallySmallestPalindrome[left] = lexicographicallySmallestPalindrome[right];
        }
        ++left;
        --right;
    }
    return lexicographicallySmallestPalindrome.join('');
};
```
```C++ []
#include <string>
using namespace std;

class Solution {

public:
    string makeSmallestPalindrome(string s) const {
        string lexicographicallySmallestPalindrome = move(s);
        size_t left = 0;
        size_t right = lexicographicallySmallestPalindrome.size() - 1;

        while (left < right) {
            if (lexicographicallySmallestPalindrome[left] < lexicographicallySmallestPalindrome[right]) {
                lexicographicallySmallestPalindrome[right] = lexicographicallySmallestPalindrome[left];
            }
            else {
                lexicographicallySmallestPalindrome[left] = lexicographicallySmallestPalindrome[right];
            }
            ++left;
            --right;
        }
        return lexicographicallySmallestPalindrome;
    }
};
```
```C# []
using System;

public class Solution
{
    public string MakeSmallestPalindrome(string s)
    {
        char[] lexicographicallySmallestPalindrome = s.ToCharArray();
        int left = 0;
        int right = lexicographicallySmallestPalindrome.Length - 1;

        while (left < right)
        {
            if (lexicographicallySmallestPalindrome[left] < lexicographicallySmallestPalindrome[right])
            {
                lexicographicallySmallestPalindrome[right] = lexicographicallySmallestPalindrome[left];
            }
            else
            {
                lexicographicallySmallestPalindrome[left] = lexicographicallySmallestPalindrome[right];
            }
            ++left;
            --right;
        }
        return String.Join("", lexicographicallySmallestPalindrome);
    }
}
```
```Kotlin []
class Solution {
    fun makeSmallestPalindrome(s: String): String {
        val lexicographicallySmallestPalindrome = s.toCharArray()
        var left = 0
        var right = lexicographicallySmallestPalindrome.size - 1

        while (left < right) {
            if (lexicographicallySmallestPalindrome[left] < lexicographicallySmallestPalindrome[right]) {
                lexicographicallySmallestPalindrome[right] = lexicographicallySmallestPalindrome[left]
            } else {
                lexicographicallySmallestPalindrome[left] = lexicographicallySmallestPalindrome[right]
            }
            ++left
            --right
        }
        return String(lexicographicallySmallestPalindrome)
    }
}
```
```Go []
package main

import "fmt"

func makeSmallestPalindrome(s string) string {
    lexicographicallySmallestPalindrome := []byte(s)
    left := 0
    right := len(lexicographicallySmallestPalindrome) - 1

    for left < right {
        if lexicographicallySmallestPalindrome[left] < lexicographicallySmallestPalindrome[right] {
            lexicographicallySmallestPalindrome[right] = lexicographicallySmallestPalindrome[left]
        } else {
            lexicographicallySmallestPalindrome[left] = lexicographicallySmallestPalindrome[right]
        }
        left++
        right--
    }
    return string(lexicographicallySmallestPalindrome)
}
```