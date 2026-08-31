# [Kotlin] Prefix Sum with Explanation (100% TC & SC)

**Author:** devle79
**Votes:** 0
**Link:** [https://leetcode.com/problems/shifting-letters-ii/solutions/4394447/](https://leetcode.com/problems/shifting-letters-ii/solutions/4394447/)

---

# Approach
<!-- Describe your approach to solving the problem. -->

Firstable, Idk why but this problem accepted brute force solution like this:

```kotlin
fun shiftingLetters(s: String, shifts: Array<IntArray>): String {
    val letterArray = s.toCharArray()

    shifts.forEach { shift ->
        val isPlus = shift[2] == 1
        val added = if (isPlus) 1 else -1

        for (i in shift[0] .. shift[1]) {
            val letter = letterArray[i]

            letterArray[i] = if (letter == 'a' && !isPlus) 'z'
                            else if (letter == 'z' && isPlus) 'a'
                            else letterArray[i] + added
        }
    }

    return letterArray.concatToString()
}
```

Anyway, we don't wanna code that kind of shxt at interview. right?

We gonna use two algorithm, `Line Sweep` and `Prefix Sum`.

1. Line Sweep

In brute force, we iterated every elements in range `shifts[i][0] .. shift[i][1]`.

Instead, we can make another array `rangeSum` and only increase value at `rangeSum[start]` and decrease value at `rangeSum[end + 1]`.

Why add it like that? good question.

Since we'll use `Prefix Sum` method, so we don't have to update all between `start .. end`. (because prefix sum contains all values before that)

When calculating prefix sum, the value added from `rangeSum[start]` must exist only up to `rangeSum[end]`. Right?

Therefore, by decreasing the value of `rangeSum[end + 1]`, the value added at `rangeSum[start]` is eliminated in prefix sum loop.

Backward? vice virsa.

2. Prefix Sum

When after `rangeSum` constructed, for example `abc` `[[1, 2, 1], [0, 2, 1]]`, gone be like this: `[1, 1, 0, -2]`

And prefix sum will be like this: `[1, 2, 2, 0]`

Add prefix sum to `letter - 'a'` to find the range to which that letter should be shifted.

Since prefix sum can be greater than 26, apply mod.

If it is negative(backward), add 26.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin
class Solution {

    fun shiftingLetters(s: String, shifts: Array<IntArray>): String {
        val letterArray = s.toCharArray()
        val rangeSum = IntArray(s.length + 1)

        shifts.forEach { shift ->
            val added = if (shift[2] == 1) 1 else -1
            rangeSum[shift[0]] += added
            rangeSum[shift[1] + 1] -= added
        }

        var prefix = 0

        for (i in letterArray.indices) {
            prefix += rangeSum[i]
            letterArray[i] = 'a' + findLetterIndex(letterArray[i], prefix)
        }

        return letterArray.concatToString()
    }

    private fun findLetterIndex(letter: Char, prefix: Int): Int {
        var shiftCount = (letter - 'a' + prefix) % 26
        if (shiftCount < 0) shiftCount += 26
        return shiftCount
    }
    
}
```