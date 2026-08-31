# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/solutions/5401000/](https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/solutions/5401000/)

---

```Java []
import java.util.ArrayDeque;
import java.util.Deque;

public class Solution {

    private static final int ALPHABET_SIZE = 26;
    private static final char CHAR_MARK = '*';

    public String clearStars(String s) {
        Deque<Integer>[] indexesPerLetter = new ArrayDeque[ALPHABET_SIZE];
        for (int letter = 0; letter < ALPHABET_SIZE; ++letter) {
            indexesPerLetter[letter] = new ArrayDeque<>();
        }

        char[] input = s.toCharArray();
        for (int i = 0; i < input.length; ++i) {
            if (input[i] == CHAR_MARK) {
                markLexicographicallySmallestLetterForRemovalInInput(indexesPerLetter, input);
            } else {
                indexesPerLetter[input[i] - 'a'].addLast(i);
            }
        }

        return createLexicographicallyMinimumStringAfterRemovingStars(input);
    }

    private void markLexicographicallySmallestLetterForRemovalInInput(Deque<Integer>[] indexesPerLetter, char[] input) {
        for (int letter = 0; letter < ALPHABET_SIZE; ++letter) {
            if (!indexesPerLetter[letter].isEmpty()) {
                int index = indexesPerLetter[letter].pollLast();
                input[index] = CHAR_MARK;
                return;
            }
        }
    }

    private String createLexicographicallyMinimumStringAfterRemovingStars(char[] input) {
        StringBuilder lexicographicallyMinimumString = new StringBuilder();
        for (int i = 0; i < input.length; ++i) {
            if (input[i] != CHAR_MARK) {
                lexicographicallyMinimumString.append(input[i]);
            }
        }
        return lexicographicallyMinimumString.toString();
    }
}
```
```JavaScript []
/**
 * @param {string} s
 * @return {string}
 */
var clearStars = function (s) {
    this.ALPHABET_SIZE = 26;
    this.CHAR_MARK = '*';
    const indexesPerLetter = Array.from(new Array(this.ALPHABET_SIZE), () => new Array());

    const input = s.split('');
    for (let i = 0; i < input.length; ++i) {
        if (input[i] === this.CHAR_MARK) {
            markLexicographicallySmallestLetterForRemovalInInput(indexesPerLetter, input);
        } else {
            indexesPerLetter[input[i].codePointAt(0) - 'a'.codePointAt(0)].push(i);
        }
    }

    return createLexicographicallyMinimumStringAfterRemovingStars(input);
};

/**
 * @param {number[][]} indexesPerLetter
 * @param {string[]} input 
 * @return {void}
 */
function markLexicographicallySmallestLetterForRemovalInInput(indexesPerLetter, input) {
    for (let letter = 0; letter < this.ALPHABET_SIZE; ++letter) {
        if (indexesPerLetter[letter].length > 0) {
            const index = indexesPerLetter[letter].pop();
            input[index] = this.CHAR_MARK;
            return;
        }
    }
}

/**
 * @param {string[]} input 
 * @return {string}
 */
function createLexicographicallyMinimumStringAfterRemovingStars(input) {
    const lexicographicallyMinimumString = new Array();
    for (let i = 0; i < input.length; ++i) {
        if (input[i] !== this.CHAR_MARK) {
            lexicographicallyMinimumString.push(input[i]);
        }
    }
    return lexicographicallyMinimumString.join('');
}
```
```TypeScript []
function clearStars(s: string): string {
    this.ALPHABET_SIZE = 26;
    this.CHAR_MARK = '*';
    const indexesPerLetter: number[][] = Array.from(new Array(this.ALPHABET_SIZE), () => new Array());

    const input = s.split('');
    for (let i = 0; i < input.length; ++i) {
        if (input[i] === this.CHAR_MARK) {
            markLexicographicallySmallestLetterForRemovalInInput(indexesPerLetter, input);
        } else {
            indexesPerLetter[input[i].codePointAt(0) - 'a'.codePointAt(0)].push(i);
        }
    }

    return createLexicographicallyMinimumStringAfterRemovingStars(input);
};

function markLexicographicallySmallestLetterForRemovalInInput(indexesPerLetter: number[][], input: string[]): void {
    for (let letter = 0; letter < this.ALPHABET_SIZE; ++letter) {
        if (indexesPerLetter[letter].length > 0) {
            const index = indexesPerLetter[letter].pop();
            input[index] = this.CHAR_MARK;
            return;
        }
    }
}

function createLexicographicallyMinimumStringAfterRemovingStars(input: string[]): string {
    const lexicographicallyMinimumString: string[] = new Array();
    for (let i = 0; i < input.length; ++i) {
        if (input[i] !== this.CHAR_MARK) {
            lexicographicallyMinimumString.push(input[i]);
        }
    }
    return lexicographicallyMinimumString.join('');
}
```
```C++ []
#include <deque>
#include <string>
#include <string_view>
using namespace std;

class Solution {

    static const int ALPHABET_SIZE = 26;
    static const char CHAR_MARK = '*';

public:
    string clearStars(string& input) const {
        vector<deque<int>> indexesPerLetter(ALPHABET_SIZE);
        for (int i = 0; i < input.size(); ++i) {
            if (input[i] == CHAR_MARK) {
                markLexicographicallySmallestLetterForRemovalInInput(indexesPerLetter, input);
            }
            else {
                indexesPerLetter[input[i] - 'a'].push_back(i);
            }
        }
        return createLexicographicallyMinimumStringAfterRemovingStars(input);
    }

private:
    void markLexicographicallySmallestLetterForRemovalInInput(vector<deque<int>>& indexesPerLetter, string& input) const {
        for (int letter = 0; letter < ALPHABET_SIZE; ++letter) {
            if (!indexesPerLetter[letter].empty()) {
                int index = indexesPerLetter[letter].back();
                indexesPerLetter[letter].pop_back();
                input[index] = CHAR_MARK;
                return;
            }
        }
    }

    string createLexicographicallyMinimumStringAfterRemovingStars(string_view input) const {
        string lexicographicallyMinimumString;
        for (const auto& current : input) {
            if (current != CHAR_MARK) {
                lexicographicallyMinimumString.push_back(current);
            }
        }
        return lexicographicallyMinimumString;
    }
};
```
```C# []
using System;
using System.Collections.Generic;

public class Solution
{
    static readonly int ALPHABET_SIZE = 26;
    static readonly char CHAR_MARK = '*';

    public string ClearStars(string s)
    {
        Stack<int>[] indexesPerLetter = new Stack<int>[ALPHABET_SIZE];
        for (int letter = 0; letter < ALPHABET_SIZE; ++letter)
        {
            indexesPerLetter[letter] = new Stack<int>();
        }

        char[] input = s.ToCharArray();
        for (int i = 0; i < input.Length; ++i)
        {
            if (input[i] == CHAR_MARK)
            {
                MarkLexicographicallySmallestLetterForRemovalInInput(indexesPerLetter, input);
            }
            else
            {
                indexesPerLetter[input[i] - 'a'].Push(i);
            }
        }

        return CreateLexicographicallyMinimumStringAfterRemovingStars(input);
    }

    private void MarkLexicographicallySmallestLetterForRemovalInInput(Stack<int>[] indexesPerLetter, char[] input)
    {
        for (int letter = 0; letter < ALPHABET_SIZE; ++letter)
        {
            if (indexesPerLetter[letter].Count > 0)
            {
                int index = indexesPerLetter[letter].Pop();
                input[index] = CHAR_MARK;
                return;
            }
        }
    }

    private String CreateLexicographicallyMinimumStringAfterRemovingStars(char[] input)
    {
        StringBuilder lexicographicallyMinimumString = new StringBuilder();
        for (int i = 0; i < input.Length; ++i)
        {
            if (input[i] != CHAR_MARK)
            {
                lexicographicallyMinimumString.Append(input[i]);
            }
        }
        return lexicographicallyMinimumString.ToString();
    }
}
```
```Kotlin []
class Solution {

    private companion object {
        const val ALPHABET_SIZE = 26
        const val CHAR_MARK = '*'
    }

    fun clearStars(s: String): String {
        val indexesPerLetter = ArrayList<ArrayDeque<Int>>(ALPHABET_SIZE)
        for (letter in 0..<ALPHABET_SIZE) {
            indexesPerLetter.add(ArrayDeque<Int>())
        }

        val input = s.toCharArray()
        for (i in input.indices) {
            if (input[i] == CHAR_MARK) {
                markLexicographicallySmallestLetterForRemovalInInput(indexesPerLetter, input);
            } else {
                indexesPerLetter[input[i] - 'a'].addLast(i);
            }
        }

        return createLexicographicallyMinimumStringAfterRemovingStars(input);
    }

    private fun markLexicographicallySmallestLetterForRemovalInInput(indexesPerLetter: ArrayList<ArrayDeque<Int>>, input: CharArray) {
        for (letter in 0..<ALPHABET_SIZE) {
            if (!indexesPerLetter[letter].isEmpty()) {
                val index = indexesPerLetter[letter].removeLast()
                input[index] = CHAR_MARK;
                return;
            }
        }
    }

    private fun createLexicographicallyMinimumStringAfterRemovingStars(input: CharArray): String {
        val lexicographicallyMinimumString = StringBuilder()
        for (i in input.indices) {
            if (input[i] != CHAR_MARK) {
                lexicographicallyMinimumString.append(input[i])
            }
        }
        return lexicographicallyMinimumString.toString()
    }
}
```
```Go []
package main

import (
    "fmt"
    "strings"
)

const ALPHABET_SIZE = 26
const CHAR_MARK = '*'

func clearStars(s string) string {
    indexesPerLetter := make([][]int, ALPHABET_SIZE)
    for letter := 0; letter < ALPHABET_SIZE; letter++ {
        indexesPerLetter[letter] = []int{}
    }

    input := []byte(s)
    for i := range input {
        if input[i] == CHAR_MARK {
            markLexicographicallySmallestLetterForRemovalInInput(indexesPerLetter, input)
        } else {
            indexesPerLetter[input[i]-'a'] = append(indexesPerLetter[input[i]-'a'], i)
        }
    }

    return createLexicographicallyMinimumStringAfterRemovingStars(input)
}

func markLexicographicallySmallestLetterForRemovalInInput(indexesPerLetter [][]int, input []byte) {
    for letter := 0; letter < ALPHABET_SIZE; letter++ {
        if len(indexesPerLetter[letter]) > 0 {
            index := indexesPerLetter[letter][len(indexesPerLetter[letter])-1]
            indexesPerLetter[letter] = indexesPerLetter[letter][:len(indexesPerLetter[letter])-1]
            input[index] = CHAR_MARK
            return
        }
    }
}

func createLexicographicallyMinimumStringAfterRemovingStars(input []byte) string {
    lexicographicallyMinimumString := strings.Builder{}
    for i := range input {
        if input[i] != CHAR_MARK {
            lexicographicallyMinimumString.WriteByte(input[i])
        }
    }
    return lexicographicallyMinimumString.String()
}
```