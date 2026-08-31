# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/solutions/5506178/](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/solutions/5506178/)

---

```Java []
import java.util.ArrayDeque;
import java.util.Deque;

public class Solution {

    public String reverseParentheses(String s) {
        char[] input = s.toCharArray();
        Deque<Integer> indexOpeningParentheses = new ArrayDeque<>();

        for (int i = 0; i < input.length; ++i) {
            if (input[i] == '(') {
                indexOpeningParentheses.push(i);
                continue;
            }
            if (input[i] == ')') {
                int start = indexOpeningParentheses.pop() + 1;
                int end = i - 1;
                reverse(start, end, input);
            }
        }

        return createReverseParentheses(input);
    }

    private String createReverseParentheses(char[] input) {
        StringBuilder reverseParentheses = new StringBuilder();
        for (char current : input) {
            if (current != '(' && current != ')') {
                reverseParentheses.append(current);
            }
        }
        return reverseParentheses.toString();
    }

    private void reverse(int start, int end, char[] input) {
        while (start <= end) {
            swap(start, end, input);
            ++start;
            --end;
        }
    }

    private void swap(int first, int second, char[] input) {
        char temp = input[first];
        input[first] = input[second];
        input[second] = temp;
    }
}
```
```JavaScript []
/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    const input = s.split('');
    const indexOpeningParentheses = new Array();

    for (let i = 0; i < input.length; ++i) {
        if (input[i] === '(') {
            indexOpeningParentheses.push(i);
            continue;
        }
        if (input[i] === ')') {
            const start = indexOpeningParentheses.pop() + 1;
            const end = i - 1;
            reverse(start, end, input);
        }
    }

    return createReverseParentheses(input);
};

/**
 * @param {string[]} input
 * @return {string}
 */
function createReverseParentheses(input) {
    const reverseParentheses = new Array();
    for (let current of input) {
        if (current !== '(' && current !== ')') {
            reverseParentheses.push(current);
        }
    }
    return reverseParentheses.join('');
}

/**
 * @param {number} start
 * @param {number} end
 * @param {string[]} input
 * @return {void}
 */
function reverse(start, end, input) {
    while (start <= end) {
        swap(start, end, input);
        ++start;
        --end;
    }
}

/**
 * @param {number} first
 * @param {number} second
 * @param {string[]} input
 * @return {void}
 */
function swap(first, second, input) {
    [input[first], input[second]] = [input[second], input[first]];
}
```
```TypeScript []
function reverseParentheses(s: string): string {
    const input = s.split('');
    const indexOpeningParentheses = new Array();

    for (let i = 0; i < input.length; ++i) {
        if (input[i] === '(') {
            indexOpeningParentheses.push(i);
            continue;
        }
        if (input[i] === ')') {
            const start = indexOpeningParentheses.pop() + 1;
            const end = i - 1;
            reverse(start, end, input);
        }
    }

    return createReverseParentheses(input);
};

function createReverseParentheses(input: string[]): string {
    const reverseParentheses = new Array();
    for (let current of input) {
        if (current !== '(' && current !== ')') {
            reverseParentheses.push(current);
        }
    }
    return reverseParentheses.join('');
}

function reverse(start: number, end: number, input: string[]): void {
    while (start <= end) {
        swap(start, end, input);
        ++start;
        --end;
    }
}

function swap(first: number, second: number, input: string[]): void {
    [input[first], input[second]] = [input[second], input[first]];
}
```
```C++ []
#include <deque>
#include <string>
#include <string_view>
using namespace std;

class Solution {

public:
    string reverseParentheses(string input) const {

        deque<int> indexOpeningParentheses;

        for (int i = 0; i < input.size(); ++i) {
            if (input[i] == '(') {
                indexOpeningParentheses.push_back(i);
                continue;
            }
            if (input[i] == ')') {
                int start = indexOpeningParentheses.back() + 1;
                indexOpeningParentheses.pop_back();
                int end = i - 1;
                reverse(start, end, input);
            }
        }

        return createReverseParentheses(input);
    }

    string createReverseParentheses(string_view input)const {
        string reverseParentheses;
        for (const auto& current : input) {
            if (current != '(' && current != ')') {
                reverseParentheses.push_back(current);
            }
        }
        return reverseParentheses;
    }

    void reverse(int start, int end, string& input) const {
        while (start <= end) {
            swap(input[start], input[end]);
            ++start;
            --end;
        }
    }
};
```
```C# []
using System;
using System.Collections.Generic;

public class Solution
{
    public string ReverseParentheses(string s)
    {
        char[] input = s.ToCharArray();
        Stack<int> indexOpeningParentheses = new Stack<int>();

        for (int i = 0; i < input.Length; ++i)
        {
            if (input[i] == '(')
            {
                indexOpeningParentheses.Push(i);
                continue;
            }
            if (input[i] == ')')
            {
                int start = indexOpeningParentheses.Pop() + 1;
                int end = i - 1;
                Reverse(start, end, input);
            }
        }

        return CreateReverseParentheses(input);
    }

    private String CreateReverseParentheses(char[] input)
    {
        StringBuilder reverseParentheses = new StringBuilder();
        foreach (char current in input)
        {
            if (current != '(' && current != ')')
            {
                reverseParentheses.Append(current);
            }
        }
        return reverseParentheses.ToString();
    }

    private void Reverse(int start, int end, char[] input)
    {
        while (start <= end)
        {
            Swap(start, end, input);
            ++start;
            --end;
        }
    }

    private void Swap(int first, int second, char[] input)
    {
        char temp = input[first];
        input[first] = input[second];
        input[second] = temp;
    }
}
```
```Kotlin []
import java.util.ArrayDeque

class Solution {
    fun reverseParentheses(s: String): String {
        val input = s.toCharArray()
        val indexOpeningParentheses = ArrayDeque<Int>()

        for (i in input.indices) {
            if (input[i] == '(') {
                indexOpeningParentheses.push(i)
                continue;
            }
            if (input[i] == ')') {
                val start = indexOpeningParentheses.pop() + 1
                val end = i - 1
                reverse(start, end, input)
            }
        }

        return createReverseParentheses(input)
    }

    private fun createReverseParentheses(input: CharArray): String {
        val reverseParentheses = StringBuilder()
        for (current in input) {
            if (current != '(' && current != ')') {
                reverseParentheses.append(current)
            }
        }
        return reverseParentheses.toString()
    }

    private fun reverse(start: Int, end: Int, input: CharArray) {
        var start = start
        var end = end
        while (start <= end) {
            swap(start, end, input)
            ++start
            --end
        }
    }

    private fun swap(first: Int, second: Int, input: CharArray) {
        val temp = input[first]
        input[first] = input[second]
        input[second] = temp
    }
}
```
```Go []
package main

import (
    "fmt"
    "reflect"
    "strings"
)

func reverseParentheses(s string) string {
    input := []byte(s)
    indexOpeningParentheses := []int{}

    for i := range input {
        if input[i] == '(' {
            indexOpeningParentheses = append(indexOpeningParentheses, i)
            continue
        }
        if input[i] == ')' {
            lastIndex := len(indexOpeningParentheses) - 1
            start := indexOpeningParentheses[lastIndex] + 1
            end := i - 1
            indexOpeningParentheses = indexOpeningParentheses[:lastIndex]
            reverse(start, end, input)
        }
    }

    return createReverseParentheses(input)
}

func createReverseParentheses(input []byte) string {
    reverseParentheses := strings.Builder{}
    for _, current := range input {
        if current != '(' && current != ')' {
            reverseParentheses.WriteByte(current)
        }
    }
    return reverseParentheses.String()
}

func reverse(start int, end int, input []byte) {
    swap := reflect.Swapper(input)
    for start <= end {
        swap(start, end)
        start++
        end--
    }
}
```