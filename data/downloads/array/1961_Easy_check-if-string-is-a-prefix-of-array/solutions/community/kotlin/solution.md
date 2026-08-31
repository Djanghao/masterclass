# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/5294314/](https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/5294314/)

---

```Java []
public class Solution {

    public boolean isPrefixString(String prefix, String[] words) {
        int indexPrefix = 0;
        int sumLengthCompletedWords = 0;

        for (int i = 0; i < words.length && indexPrefix < prefix.length(); ++i) {
            for (int j = 0; j < words[i].length() && indexPrefix < prefix.length(); ++j) {
                if (prefix.charAt(indexPrefix) != words[i].charAt(j)) {
                    return false;
                }
                ++indexPrefix;
            }
            sumLengthCompletedWords += words[i].length();
        }

        return prefix.length() == sumLengthCompletedWords;
    }
}
```
```JavaScript []
/**
 * @param {string} prefix
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (prefix, words) {
    let indexPrefix = 0;
    let sumLengthCompletedWords = 0;

    for (let i = 0; i < words.length && indexPrefix < prefix.length; ++i) {
        for (let j = 0; j < words[i].length && indexPrefix < prefix.length; ++j) {
            if (prefix.charAt(indexPrefix) !== words[i].charAt(j)) {
                return false;
            }
            ++indexPrefix;
        }
        sumLengthCompletedWords += words[i].length;
    }

    return prefix.length === sumLengthCompletedWords;
};
```
```TypeScript []
function isPrefixString(prefix: string, words: string[]): boolean {
    let indexPrefix = 0;
    let sumLengthCompletedWords = 0;

    for (let i = 0; i < words.length && indexPrefix < prefix.length; ++i) {
        for (let j = 0; j < words[i].length && indexPrefix < prefix.length; ++j) {
            if (prefix.charAt(indexPrefix) !== words[i].charAt(j)) {
                return false;
            }
            ++indexPrefix;
        }
        sumLengthCompletedWords += words[i].length;
    }

    return prefix.length === sumLengthCompletedWords;
};
```
```C++ []
#include <vector>
#include <string>
using namespace std;

class Solution {

public:
    bool isPrefixString(const string& prefix, const vector<string>& words) const {
        int indexPrefix = 0;
        int sumLengthCompletedWords = 0;

        for (size_t i = 0; i < words.size() && indexPrefix < prefix.length(); ++i) {
            for (size_t j = 0; j < words[i].length() && indexPrefix < prefix.length(); ++j) {
                if (prefix[indexPrefix] != words[i][j]) {
                    return false;
                }
                ++indexPrefix;
            }
            sumLengthCompletedWords += words[i].length();
        }

        return prefix.length() == sumLengthCompletedWords;
    }
};
```
```C# []
using System;

public class Solution
{
    public bool IsPrefixString(string prefix, string[] words)
    {
        int indexPrefix = 0;
        int sumLengthCompletedWords = 0;

        for (int i = 0; i < words.Length && indexPrefix < prefix.Length; ++i)
        {
            for (int j = 0; j < words[i].Length && indexPrefix < prefix.Length; ++j)
            {
                if (prefix[indexPrefix] != words[i][j])
                {
                    return false;
                }
                ++indexPrefix;
            }
            sumLengthCompletedWords += words[i].Length;
        }

        return prefix.Length == sumLengthCompletedWords;
    }
}
```
```Kotlin []
class Solution {
    fun isPrefixString(prefix: String, words: Array<String>): Boolean {
        var indexPrefix = 0
        var sumLengthCompletedWords = 0

        var i = 0
        while (i < words.size && indexPrefix < prefix.length) {

            var j = 0
            while (j < words[i].length && indexPrefix < prefix.length) {
                if (prefix[indexPrefix] != words[i][j]) {
                    return false
                }
                ++indexPrefix
                ++j
            }
            sumLengthCompletedWords += words[i].length
            ++i
        }

        return prefix.length == sumLengthCompletedWords
    }
}
```
```Go []
package main

import "fmt"

func isPrefixString(prefix string, words []string) bool {
	indexPrefix := 0
	sumLengthCompletedWords := 0

	for i := 0; i < len(words) && indexPrefix < len(prefix); i++ {
		for j := 0; j < len(words[i]) && indexPrefix < len(prefix); j++ {
			if prefix[indexPrefix] != words[i][j] {
				return false
			}
			indexPrefix++
		}
		sumLengthCompletedWords += len(words[i])
	}

	return len(prefix) == sumLengthCompletedWords
}
```