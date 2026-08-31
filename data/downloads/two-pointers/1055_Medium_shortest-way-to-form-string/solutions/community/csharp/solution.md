# Java | JavaScript | TypeScript | C++ | C# Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-way-to-form-string/solutions/4938927/](https://leetcode.com/problems/shortest-way-to-form-string/solutions/4938927/)

---

```Java []
public class Solution {

    private static final int ALPHABET_SIZE = 26;
    private static final int CAN_NOT_FORM_TARGET_FROM_SOURCE = -1;

    public int shortestWay(String source, String target) {
        if (!sourceHasAllUniqueLettersThatTargetHas(source, target)) {
            return CAN_NOT_FORM_TARGET_FROM_SOURCE;
        }

        int subsequencies = 0;
        int totalFoundLetters = 0;
        boolean endInSourceReached = true;
        int indexS = 0;

        for (int indexT = 0; indexT < target.length() && totalFoundLetters < target.length(); indexT += !endInSourceReached ? 1 : 0) {

            boolean notFound = true;
            for (indexS = !endInSourceReached ? indexS + 1 : 0; indexS < source.length(); ++indexS) {
                if (target.charAt(indexT) == source.charAt(indexS)) {
                    notFound = false;
                    ++totalFoundLetters;
                    break;
                }
            }
            endInSourceReached = notFound;
            subsequencies += (endInSourceReached || totalFoundLetters == target.length()) ? 1 : 0;
        }
        return subsequencies;
    }

    private boolean sourceHasAllUniqueLettersThatTargetHas(String source, String target) {
        boolean[] uniqueLettersInSource = new boolean[ALPHABET_SIZE];

        for (char letter : source.toCharArray()) {
            uniqueLettersInSource[letter - 'a'] = true;
        }

        for (char letter : target.toCharArray()) {
            if (!uniqueLettersInSource[letter - 'a']) {
                return false;
            }
        }
        return true;
    }
}
```
```JavaScript []
/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function (source, target) {
    const CAN_NOT_FORM_TARGET_FROM_SOURCE = -1;
    if (!sourceHasAllUniqueLettersThatTargetHas(source, target)) {
        return CAN_NOT_FORM_TARGET_FROM_SOURCE;
    }

    let subsequencies = 0;
    let totalFoundLetters = 0;
    let endInSourceReached = true;
    let indexS = 0;

    for (let indexT = 0; indexT < target.length && totalFoundLetters < target.length; indexT += !endInSourceReached ? 1 : 0) {

        let notFound = true;
        for (indexS = !endInSourceReached ? indexS + 1 : 0; indexS < source.length; ++indexS) {
            if (target.charAt(indexT) === source.charAt(indexS)) {
                notFound = false;
                ++totalFoundLetters;
                break;
            }
        }
        endInSourceReached = notFound;
        subsequencies += (endInSourceReached || totalFoundLetters === target.length) ? 1 : 0;
    }
    return subsequencies;
};

/**
 * @param {string} source
 * @param {string} target
 * @return {boolean}
 */
function sourceHasAllUniqueLettersThatTargetHas(source, target) {
    const ALPHABET_SIZE = 26;
    const ASCII_SMALL_CASE_A = 97;
    const uniqueLettersInSource = new Array(ALPHABET_SIZE).fill(false);

    for (let letter of source) {
        uniqueLettersInSource[letter.codePointAt(0) - ASCII_SMALL_CASE_A] = true;
    }

    for (let letter of target) {
        if (!uniqueLettersInSource[letter.codePointAt(0) - ASCII_SMALL_CASE_A]) {
            return false;
        }
    }
    return true;
}
```
```TypeScript []
function shortestWay(source: string, target: string): number {
    const CAN_NOT_FORM_TARGET_FROM_SOURCE = -1;
    if (!sourceHasAllUniqueLettersThatTargetHas(source, target)) {
        return CAN_NOT_FORM_TARGET_FROM_SOURCE;
    }

    let subsequencies = 0;
    let totalFoundLetters = 0;
    let endInSourceReached = true;
    let indexS = 0;

    for (let indexT = 0; indexT < target.length && totalFoundLetters < target.length; indexT += !endInSourceReached ? 1 : 0) {

        let notFound = true;
        for (indexS = !endInSourceReached ? indexS + 1 : 0; indexS < source.length; ++indexS) {
            if (target.charAt(indexT) === source.charAt(indexS)) {
                notFound = false;
                ++totalFoundLetters;
                break;
            }
        }
        endInSourceReached = notFound;
        subsequencies += (endInSourceReached || totalFoundLetters === target.length) ? 1 : 0;
    }
    return subsequencies;
};

function sourceHasAllUniqueLettersThatTargetHas(source: string, target: string): boolean {
    const ALPHABET_SIZE = 26;
    const ASCII_SMALL_CASE_A = 97;
    const uniqueLettersInSource = new Array<boolean>(ALPHABET_SIZE).fill(false);

    for (let letter of source) {
        uniqueLettersInSource[letter.codePointAt(0) - ASCII_SMALL_CASE_A] = true;
    }

    for (let letter of target) {
        if (!uniqueLettersInSource[letter.codePointAt(0) - ASCII_SMALL_CASE_A]) {
            return false;
        }
    }
    return true;
}
```
```C++ []
#include <array>
#include <string>
#include <string_view>
using namespace std;

class Solution {

    static const int ALPHABET_SIZE = 26;
    static const int CAN_NOT_FORM_TARGET_FROM_SOURCE = -1;

public:
    int shortestWay(const string& source, const string& target) const {
        if (!sourceHasAllUniqueLettersThatTargetHas(source, target)) {
            return CAN_NOT_FORM_TARGET_FROM_SOURCE;
        }

        int subsequencies = 0;
        int totalFoundLetters = 0;
        bool endInSourceReached = true;
        size_t indexS = 0;

        for (size_t indexT = 0; indexT < target.length() && totalFoundLetters < target.length(); indexT += !endInSourceReached ? 1 : 0) {

            bool notFound = true;
            for (indexS = !endInSourceReached ? indexS + 1 : 0; indexS < source.length(); ++indexS) {
                if (target[indexT] == source[indexS]) {
                    notFound = false;
                    ++totalFoundLetters;
                    break;
                }
            }
            endInSourceReached = notFound;
            subsequencies += (endInSourceReached || totalFoundLetters == target.length()) ? 1 : 0;
        }
        return subsequencies;
    }

private:
    bool sourceHasAllUniqueLettersThatTargetHas(string_view source, string_view target) const{
        array<bool, ALPHABET_SIZE> uniqueLettersInSource{};

        for (const auto& letter : source) {
            uniqueLettersInSource[letter - 'a'] = true;
        }

        for (const auto& letter : target) {
            if (!uniqueLettersInSource[letter - 'a']) {
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
    private static readonly int ALPHABET_SIZE = 26;
    private static readonly int CAN_NOT_FORM_TARGET_FROM_SOURCE = -1;

    public int ShortestWay(string source, string target)
    {
        if (!sourceHasAllUniqueLettersThatTargetHas(source, target))
        {
            return CAN_NOT_FORM_TARGET_FROM_SOURCE;
        }

        int subsequencies = 0;
        int totalFoundLetters = 0;
        bool endInSourceReached = true;
        int indexS = 0;

        for (int indexT = 0; indexT < target.Length && totalFoundLetters < target.Length; indexT += !endInSourceReached ? 1 : 0)
        {
            bool notFound = true;
            for (indexS = !endInSourceReached ? indexS + 1 : 0; indexS < source.Length; ++indexS)
            {
                if (target[indexT] == source[indexS])
                {
                    notFound = false;
                    ++totalFoundLetters;
                    break;
                }
            }
            endInSourceReached = notFound;
            subsequencies += (endInSourceReached || totalFoundLetters == target.Length) ? 1 : 0;
        }
        return subsequencies;
    }

    private bool sourceHasAllUniqueLettersThatTargetHas(String source, String target)
    {
        bool[] uniqueLettersInSource = new bool[ALPHABET_SIZE];

        foreach (char letter in source)
        {
            uniqueLettersInSource[letter - 'a'] = true;
        }

        foreach (char letter in target)
        {
            if (!uniqueLettersInSource[letter - 'a'])
            {
                return false;
            }
        }
        return true;
    }
}
```