# Java | JavaScript | TypeScript | C++ | C# | Kotlin Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-divisible-substrings/solutions/5022823/](https://leetcode.com/problems/number-of-divisible-substrings/solutions/5022823/)

---

```Java []
public class Solution {

    public int countDivisibleSubstrings(String word) {
        int[] prefixSum = new int[word.length()];
        prefixSum[0] = letterToButtonDigit(word.charAt(0));
        int countDivisibleSubstrings = 1;

        for (int front = 1; front < word.length(); ++front) {

            prefixSum[front] = prefixSum[front - 1] + letterToButtonDigit(word.charAt(front));
            countDivisibleSubstrings += (prefixSum[front] % (front + 1) == 0) ? 1 : 0;

            for (int back = 0; back < front; ++back) {
                countDivisibleSubstrings += ((prefixSum[front] - prefixSum[back]) % (front - back) == 0) ? 1 : 0;
            }
        }

        return countDivisibleSubstrings;
    }

    /*
     a,b => 1 | c,d,e => 2 | f,g,h => 3 | i,j,k => 4 | l,m,n => 5
     o,p,q => 6 | r,s,t => 7 | u,v,w => 8 | x,y,z => 9
     */
    private int letterToButtonDigit(char letter) {
        return (letter - 'a' + 4) / 3;
    }
}
```
```JavaScript []
/**
 * @param {string} word
 * @return {number}
 */
var countDivisibleSubstrings = function (word) {
    const prefixSum = new Array(word.length).fill(0);
    prefixSum[0] = letterToButtonDigit(word.charAt(0));
    let countDivisibleSubstrings = 1;

    for (let front = 1; front < word.length; ++front) {

        prefixSum[front] = prefixSum[front - 1] + letterToButtonDigit(word.charAt(front));
        countDivisibleSubstrings += (prefixSum[front] % (front + 1) === 0) ? 1 : 0;

        for (let back = 0; back < front; ++back) {
            countDivisibleSubstrings += ((prefixSum[front] - prefixSum[back]) % (front - back) === 0) ? 1 : 0;
        }
    }

    return countDivisibleSubstrings;
};

/*
 a,b => 1 | c,d,e => 2 | f,g,h => 3 | i,j,k => 4 | l,m,n => 5
 o,p,q => 6 | r,s,t => 7 | u,v,w => 8 | x,y,z => 9
 */
/**
 * @param {string} letter
 * @return {number}
 */
function letterToButtonDigit(letter) {
    return Math.floor((letter.codePointAt(0) - 'a'.codePointAt(0) + 4) / 3);
}
```
```TypeScript []
function countDivisibleSubstrings(word: string): number {
    const prefixSum: number[] = new Array(word.length).fill(0);
    prefixSum[0] = letterToButtonDigit(word.charAt(0));
    let countDivisibleSubstrings = 1;

    for (let front = 1; front < word.length; ++front) {

        prefixSum[front] = prefixSum[front - 1] + letterToButtonDigit(word.charAt(front));
        countDivisibleSubstrings += (prefixSum[front] % (front + 1) === 0) ? 1 : 0;

        for (let back = 0; back < front; ++back) {
            countDivisibleSubstrings += ((prefixSum[front] - prefixSum[back]) % (front - back) === 0) ? 1 : 0;
        }
    }

    return countDivisibleSubstrings;
};

/*
 a,b => 1 | c,d,e => 2 | f,g,h => 3 | i,j,k => 4 | l,m,n => 5
 o,p,q => 6 | r,s,t => 7 | u,v,w => 8 | x,y,z => 9
 */
function letterToButtonDigit(letter: string): number {
    return Math.floor((letter.codePointAt(0) - 'a'.codePointAt(0) + 4) / 3);
}
```
```C++ []
#include <array>
#include <vector>
using namespace std;

class Solution {

public:
    int countDivisibleSubstrings(const string& word) const {
        vector<int> prefixSum(word.length());
        prefixSum[0] = letterToButtonDigit(word[0]);
        int countDivisibleSubstrings = 1;

        for (size_t front = 1; front < word.length(); ++front) {

            prefixSum[front] = prefixSum[front - 1] + letterToButtonDigit(word[front]);
            countDivisibleSubstrings += (prefixSum[front] % (front + 1) == 0) ? 1 : 0;

            for (size_t back = 0; back < front; ++back) {
                countDivisibleSubstrings += ((prefixSum[front] - prefixSum[back]) % (front - back) == 0) ? 1 : 0;
            }
        }

        return countDivisibleSubstrings;
    }

private:
    /*
     a,b => 1 | c,d,e => 2 | f,g,h => 3 | i,j,k => 4 | l,m,n => 5
     o,p,q => 6 | r,s,t => 7 | u,v,w => 8 | x,y,z => 9
     */
    int letterToButtonDigit(char letter) const {
        return (letter - 'a' + 4) / 3;
    }
};
```
```C# []
using System;

public class Solution
{
    public int CountDivisibleSubstrings(string word)
    {
        int[] prefixSum = new int[word.Length];
        prefixSum[0] = letterToButtonDigit(word[0]);
        int countDivisibleSubstrings = 1;

        for (int front = 1; front < word.Length; ++front)
        {
            prefixSum[front] = prefixSum[front - 1] + letterToButtonDigit(word[front]);
            countDivisibleSubstrings += (prefixSum[front] % (front + 1) == 0) ? 1 : 0;

            for (int back = 0; back < front; ++back)
            {
                countDivisibleSubstrings += ((prefixSum[front] - prefixSum[back]) % (front - back) == 0) ? 1 : 0;
            }
        }

        return countDivisibleSubstrings;
    }

    /*
     a,b => 1 | c,d,e => 2 | f,g,h => 3 | i,j,k => 4 | l,m,n => 5
     o,p,q => 6 | r,s,t => 7 | u,v,w => 8 | x,y,z => 9
     */
    private int letterToButtonDigit(char letter)
    {
        return (letter - 'a' + 4) / 3;
    }
}
```
```Kotlin []
class Solution {
    fun countDivisibleSubstrings(word: String): Int {
        val prefixSum = IntArray(word.length);
        prefixSum[0] = letterToButtonDigit(word[0]);
        var countDivisibleSubstrings = 1;

        for (front in 1..<word.length) {

            prefixSum[front] = prefixSum[front - 1] + letterToButtonDigit(word[front]);
            countDivisibleSubstrings += if (prefixSum[front] % (front + 1) == 0) 1 else 0;

            for (back in 0..<front) {
                countDivisibleSubstrings += if ((prefixSum[front] - prefixSum[back]) % (front - back) == 0) 1 else 0;
            }
        }

        return countDivisibleSubstrings;
    }

    /*
     a,b => 1 | c,d,e => 2 | f,g,h => 3 | i,j,k => 4 | l,m,n => 5
     o,p,q => 6 | r,s,t => 7 | u,v,w => 8 | x,y,z => 9
     */
    fun letterToButtonDigit(letter: Char): Int {
        return (letter - 'a' + 4) / 3;
    }
}
```