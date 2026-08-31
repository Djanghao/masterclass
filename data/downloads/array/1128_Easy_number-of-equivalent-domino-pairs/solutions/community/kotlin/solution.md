# Java | JavaScript | TypeScript | C++ | C# | Kotlin Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-equivalent-domino-pairs/solutions/5081066/](https://leetcode.com/problems/number-of-equivalent-domino-pairs/solutions/5081066/)

---

```Java []
public class Solution {

    private static final int[] RANGE_OF_VALUES = {1, 9};

    public int numEquivDominoPairs(int[][] dominoes) {
        int[][] frequencyDominoes = new int[RANGE_OF_VALUES[1] + 1][RANGE_OF_VALUES[1] + 1];
        int countEquivalentDominoPairs = 0;

        for (int[] domino : dominoes) {
            int minValue = Math.min(domino[0], domino[1]);
            int maxValue = Math.max(domino[0], domino[1]);
            countEquivalentDominoPairs += frequencyDominoes[minValue][maxValue];
            ++frequencyDominoes[minValue][maxValue];
        }

        return countEquivalentDominoPairs;
    }
}
```
```JavaScript []
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
    const RANGE_OF_VALUES = [1, 9];
    const frequencyDominoes =
            Array.from(new Array(RANGE_OF_VALUES[1] + 1), () => new Array(RANGE_OF_VALUES[1] + 1).fill(0));
    let countEquivalentDominoPairs = 0;

    for (let domino of dominoes) {
        let minValue = Math.min(domino[0], domino[1]);
        let maxValue = Math.max(domino[0], domino[1]);
        countEquivalentDominoPairs += frequencyDominoes[minValue][maxValue];
        ++frequencyDominoes[minValue][maxValue];
    }

    return countEquivalentDominoPairs;
};
```
```TypeScript []
function numEquivDominoPairs(dominoes: number[][]): number {
    const RANGE_OF_VALUES = [1, 9];
    const frequencyDominoes: number[][] =
        Array.from(new Array(RANGE_OF_VALUES[1] + 1), () => new Array(RANGE_OF_VALUES[1] + 1).fill(0));
    let countEquivalentDominoPairs = 0;

    for (let domino of dominoes) {
        let minValue = Math.min(domino[0], domino[1]);
        let maxValue = Math.max(domino[0], domino[1]);
        countEquivalentDominoPairs += frequencyDominoes[minValue][maxValue];
        ++frequencyDominoes[minValue][maxValue];
    }

    return countEquivalentDominoPairs;
};
```
```C++ []
#include <array>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {

    static constexpr array<int, 2> RANGE_OF_VALUES{ { 1, 9 } };

public:
    int numEquivDominoPairs(const vector<vector<int>>& dominoes)const {
        array<array<int, RANGE_OF_VALUES[1] + 1>, RANGE_OF_VALUES[1] + 1> frequencyDominoes{};
        int countEquivalentDominoPairs = 0;

        for (const auto& domino : dominoes) {
            int minValue = min(domino[0], domino[1]);
            int maxValue = max(domino[0], domino[1]);
            countEquivalentDominoPairs += frequencyDominoes[minValue][maxValue];
            ++frequencyDominoes[minValue][maxValue];
        }

        return countEquivalentDominoPairs;
    }
};
```
```C# []
using System;

public class Solution
{
    private static readonly int[] RANGE_OF_VALUES = { 1, 9 };

    public int NumEquivDominoPairs(int[][] dominoes)
    {
        int[,] frequencyDominoes = new int[RANGE_OF_VALUES[1] + 1, RANGE_OF_VALUES[1] + 1];
        int countEquivalentDominoPairs = 0;

        foreach (int[] domino in dominoes)
        {
            int minValue = Math.Min(domino[0], domino[1]);
            int maxValue = Math.Max(domino[0], domino[1]);
            countEquivalentDominoPairs += frequencyDominoes[minValue, maxValue];
            ++frequencyDominoes[minValue, maxValue];
        }

        return countEquivalentDominoPairs;
    }
}
```
```Kotlin []
import kotlin.math.min
import kotlin.math.max

class Solution {

    companion object {
        val RANGE_OF_VALUES = intArrayOf(1, 9)
    }

    fun numEquivDominoPairs(dominoes: Array<IntArray>): Int {
        val frequencyDominoes = ArrayList<IntArray>(RANGE_OF_VALUES[1] + 1)
        for (i in 0..<RANGE_OF_VALUES[1] + 1) {
            frequencyDominoes.add(IntArray(RANGE_OF_VALUES[1] + 1))
        }
        var countEquivalentDominoPairs = 0

        for (domino in dominoes) {
            val minValue = min(domino[0], domino[1])
            val maxValue = max(domino[0], domino[1])
            countEquivalentDominoPairs += frequencyDominoes[minValue][maxValue]
            ++frequencyDominoes[minValue][maxValue]
        }

        return countEquivalentDominoPairs
    }
}
```
