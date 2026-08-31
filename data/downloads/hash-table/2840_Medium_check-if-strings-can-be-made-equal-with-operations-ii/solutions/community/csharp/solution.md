# Java | JavaScript | C++ | C# Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/solutions/3998492/](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/solutions/3998492/)

---

```Java []
public class Solution {

    private static final int ALPHABET_SIZE = 26;

    public boolean checkStrings(String inputOne, String inputTwo) {
        int[] frequencyLettersAtEvenIndexes = new int[ALPHABET_SIZE];
        fillFrequency(0, inputOne, inputTwo, frequencyLettersAtEvenIndexes);

        int[] frequencyLettersAtOddIndexes = new int[ALPHABET_SIZE];
        fillFrequency(1, inputOne, inputTwo, frequencyLettersAtOddIndexes);

        return lettersAreSwappable(frequencyLettersAtEvenIndexes)
                && lettersAreSwappable(frequencyLettersAtOddIndexes);
    }

    private void fillFrequency(int startIndex, String inputOne, String inputTwo, int[] frequencyLetters) {
        for (int i = startIndex; i < inputOne.length(); i += 2) {
            ++frequencyLetters[inputOne.charAt(i) - 'a'];
            --frequencyLetters[inputTwo.charAt(i) - 'a'];
        }
    }

    private boolean lettersAreSwappable(int[] frequencyLetters) {
        for (int frequency : frequencyLetters) {
            if (frequency != 0) {
                return false;
            }
        }
        return true;
    }
}
```
```JavaScript []
/**
 * @param {string} inputOne
 * @param {string} inputTwo
 * @return {boolean}
 */
var checkStrings = function (inputOne, inputTwo) {
    this.ASCII_SMALL_CASE_A = 97;
    const ALPHABET_SIZE = 26;

    const frequencyLettersAtEvenIndexes = new Array(ALPHABET_SIZE).fill(0);
    fillFrequency(0, inputOne, inputTwo, frequencyLettersAtEvenIndexes);

    const frequencyLettersAtOddIndexes = new Array(ALPHABET_SIZE).fill(0);
    fillFrequency(1, inputOne, inputTwo, frequencyLettersAtOddIndexes);

    return lettersAreSwappable(frequencyLettersAtEvenIndexes)
            && lettersAreSwappable(frequencyLettersAtOddIndexes);
};

/**
 * @param {number} startIndex 
 * @param {string} inputOne
 * @param {string} inputTwo
 * @param {number[]} frequencyLetters 
 * @return {void}
 */
function fillFrequency(startIndex, inputOne, inputTwo, frequencyLetters) {
    for (let i = startIndex; i < inputOne.length; i += 2) {
        ++frequencyLetters[inputOne.codePointAt(i) - this.ASCII_SMALL_CASE_A];
        --frequencyLetters[inputTwo.codePointAt(i) - this.ASCII_SMALL_CASE_A];
    }
}

/**
 * @param {number[]} frequencyLetters 
 * @return {boolean}
 */
function lettersAreSwappable(frequencyLetters) {
    for (let frequency of frequencyLetters) {
        if (frequency !== 0) {
            return false;
        }
    }
    return true;
}
```
```C++ []
#include <array>
#include <string>
using namespace std;

class Solution {
    
    static const int ALPHABET_SIZE = 26;

public:
    bool checkStrings(const string& inputOne, const string& inputTwo) const {
        array<int, ALPHABET_SIZE> frequencyLettersAtEvenIndexes{0};
        fillFrequency(0, inputOne, inputTwo, frequencyLettersAtEvenIndexes);

        array<int, ALPHABET_SIZE> frequencyLettersAtOddIndexes{0};
        fillFrequency(1, inputOne, inputTwo, frequencyLettersAtOddIndexes);

        return lettersAreSwappable(frequencyLettersAtEvenIndexes)
                && lettersAreSwappable(frequencyLettersAtOddIndexes);
    }

private:
    //C++17, alternative to 'const string&':  string_view
    //C++20, alternative to 'array<int, ALPHABET_SIZE>&': span<int>
    void fillFrequency(int startIndex, const string& inputOne, const string& inputTwo, array<int, ALPHABET_SIZE>& frequencyLetters) const {
        for (int i = startIndex; i < inputOne.length(); i += 2) {
            ++frequencyLetters[inputOne[i] - 'a'];
            --frequencyLetters[inputTwo[i] - 'a'];
        }
    }

    //C++20, alternative to 'const array<int, ALPHABET_SIZE>&': span<const int>
    bool lettersAreSwappable(const array<int, ALPHABET_SIZE>& frequencyLetters) const {
        for (const auto& frequency : frequencyLetters) {
            if (frequency != 0) {
                return false;
            }
        }
        return true;
    }
};
```
```C# []
using System;

public class Solution
{
    const int ALPHABET_SIZE = 26;

    public bool CheckStrings(string inputOne, string inputTwo)
    {
        int[] frequencyLettersAtEvenIndexes = new int[ALPHABET_SIZE];
        FillFrequency(0, inputOne, inputTwo, frequencyLettersAtEvenIndexes);

        int[] frequencyLettersAtOddIndexes = new int[ALPHABET_SIZE];
        FillFrequency(1, inputOne, inputTwo, frequencyLettersAtOddIndexes);

        return LettersAreSwappable(frequencyLettersAtEvenIndexes)
                && LettersAreSwappable(frequencyLettersAtOddIndexes);
    }


    private void FillFrequency(int startIndex, String inputOne, String inputTwo, int[] frequencyLetters)
    {
        for (int i = startIndex; i < inputOne.Length; i += 2)
        {
            ++frequencyLetters[inputOne[i] - 'a'];
            --frequencyLetters[inputTwo[i] - 'a'];
        }
    }

    private bool LettersAreSwappable(int[] frequencyLetters)
    {
        foreach (int frequency in frequencyLetters)
        {
            if (frequency != 0)
            {
                return false;
            }
        }
        return true;
    }
}
```