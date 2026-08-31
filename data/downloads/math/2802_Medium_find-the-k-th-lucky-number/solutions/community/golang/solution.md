# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-th-lucky-number/solutions/5242564/](https://leetcode.com/problems/find-the-k-th-lucky-number/solutions/5242564/)

---

```Java []
public class Solution {

    private static final char[] LUCKY_DIGITS = {'4', '7'};

    public String kthLuckyNumber(int k) {
        int oneBasedIndexing = k + 1;
        // Since Java does not have Math.log2, as of 01-June-2024, we do as follows:
        // Math.log(oneBasedIndexing) / Math.log(2), which equals log2(oneBasedIndexing)
        int length = (int) (Math.log(oneBasedIndexing) / Math.log(2));
        char[] kthLuckyNumber = new char[length];

        for (int i = length - 1; i >= 0; --i) {
            kthLuckyNumber[i] = LUCKY_DIGITS[oneBasedIndexing & 1];
            oneBasedIndexing >>= 1;
        }

        return String.valueOf(kthLuckyNumber);
    }
}
```
```JavaScript []
/**
 * @param {number} k
 * @return {string}
 */
var kthLuckyNumber = function (k) {
    const LUCKY_DIGITS = ['4', '7'];
    let oneBasedIndexing = k + 1;
    let length = Math.floor(Math.log2(oneBasedIndexing));
    const kthLuckyNumber = new Array(length);

    for (let i = length - 1; i >= 0; --i) {
        kthLuckyNumber[i] = LUCKY_DIGITS[oneBasedIndexing & 1];
        oneBasedIndexing >>= 1;
    }

    return kthLuckyNumber.join('');
};
```
```TypeScript []
function kthLuckyNumber(k: number): string {
    const LUCKY_DIGITS = ['4', '7'];
    let oneBasedIndexing = k + 1;
    let length = Math.floor(Math.log2(oneBasedIndexing));
    const kthLuckyNumber: string[] = new Array(length);

    for (let i = length - 1; i >= 0; --i) {
        kthLuckyNumber[i] = LUCKY_DIGITS[oneBasedIndexing & 1];
        oneBasedIndexing >>= 1;
    }

    return kthLuckyNumber.join('');
};
```
```C++ []
#include <array>
#include <string>
using namespace std;

class Solution {

    static constexpr array<char, 2> LUCKY_DIGITS = { '4', '7' };

public:
    string kthLuckyNumber(int k)const {
        int oneBasedIndexing = k + 1;
        int length = log2(oneBasedIndexing);
        string kthLuckyNumber(length, ' ');

        for (int i = length - 1; i >= 0; --i) {
            kthLuckyNumber[i] = LUCKY_DIGITS[oneBasedIndexing & 1];
            oneBasedIndexing >>= 1;
        }

        return kthLuckyNumber;
    }
};
```
```C# []
using System;

public class Solution
{
    private static readonly char[] LUCKY_DIGITS = { '4', '7' };

    public string KthLuckyNumber(int k)
    {
        int oneBasedIndexing = k + 1;
        int length = (int)Math.Log2(oneBasedIndexing);
        char[] kthLuckyNumber = new char[length];

        for (int i = length - 1; i >= 0; --i)
        {
            kthLuckyNumber[i] = LUCKY_DIGITS[oneBasedIndexing & 1];
            oneBasedIndexing >>= 1;
        }

        return string.Join("", kthLuckyNumber);
    }
}
```
```Kotlin []
import kotlin.math.log

class Solution {

    private companion object {
        var LUCKY_DIGITS = charArrayOf('4', '7')
    }

    fun kthLuckyNumber(k: Int): String {
        var oneBasedIndexing = k + 1;

        val length = log(oneBasedIndexing.toDouble(), 2.0).toInt()
        val kthLuckyNumber = CharArray(length);

        for (i in length - 1 downTo 0) {
            kthLuckyNumber[i] = LUCKY_DIGITS[oneBasedIndexing and 1]
            oneBasedIndexing = oneBasedIndexing shr 1
        }

        return kthLuckyNumber.joinToString("")
    }
}
```
```Go []
package main

import (
	"fmt"
	"math"
)

func kthLuckyNumber(k int) string {
	var LUCKY_DIGITS = [2]byte{'4', '7'}
	var oneBasedIndexing = k + 1

	var length = int(math.Log2(float64(oneBasedIndexing)))
	var kthLuckyNumber = make([]byte, length)

	for i := length - 1; i >= 0; i-- {
		kthLuckyNumber[i] = LUCKY_DIGITS[oneBasedIndexing & 1]
		oneBasedIndexing = oneBasedIndexing >> 1
	}

	return string(kthLuckyNumber)
}
```