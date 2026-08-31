# Java | JavaScript | TypeScript | C++ | C# Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-greatness-of-an-array/solutions/4964084/](https://leetcode.com/problems/maximize-greatness-of-an-array/solutions/4964084/)

---

```Java []
import java.util.Arrays;

public class Solution {

    public int maximizeGreatness(int[] input) {
        Arrays.sort(input);

        int indexForLowerValues = 0;
        int indexForGreaterValues = 0;
        int maxPossibleGreatness = 0;

        while (indexForLowerValues < input.length && indexForGreaterValues < input.length) {
            if (input[indexForLowerValues] < input[indexForGreaterValues]) {
                ++indexForLowerValues;
                ++maxPossibleGreatness;
            }
            ++indexForGreaterValues;
        }

        return maxPossibleGreatness;
    }
}
```
```JavaScript []
/**
 * @param {number[]} input
 * @return {number}
 */
var maximizeGreatness = function (input) {
    input.sort((x, y) => x - y);

    let indexForLowerValues = 0;
    let indexForGreaterValues = 0;
    let maxPossibleGreatness = 0;

    while (indexForLowerValues < input.length && indexForGreaterValues < input.length) {
        if (input[indexForLowerValues] < input[indexForGreaterValues]) {
            ++indexForLowerValues;
            ++maxPossibleGreatness;
        }
        ++indexForGreaterValues;
    }

    return maxPossibleGreatness;
};
```
```TypeScript []
function maximizeGreatness(input: number[]): number {
    input.sort((x, y) => x - y);

    let indexForLowerValues = 0;
    let indexForGreaterValues = 0;
    let maxPossibleGreatness = 0;

    while (indexForLowerValues < input.length && indexForGreaterValues < input.length) {
        if (input[indexForLowerValues] < input[indexForGreaterValues]) {
            ++indexForLowerValues;
            ++maxPossibleGreatness;
        }
        ++indexForGreaterValues;
    }

    return maxPossibleGreatness;
};
```
```C++ []
#include <ranges>
#include <vector>
using namespace std;

class Solution {

public:
    int maximizeGreatness(vector<int>& input) const{
        ranges::sort(input);

        size_t indexForLowerValues = 0;
        size_t indexForGreaterValues = 0;
        int maxPossibleGreatness = 0;

        while (indexForLowerValues < input.size() && indexForGreaterValues < input.size()) {
            if (input[indexForLowerValues] < input[indexForGreaterValues]) {
                ++indexForLowerValues;
                ++maxPossibleGreatness;
            }
            ++indexForGreaterValues;
        }

        return maxPossibleGreatness;
    }
};
```
```C# []
using System;

public class Solution
{
    public int MaximizeGreatness(int[] input)
    {
        Array.Sort(input);

        int indexForLowerValues = 0;
        int indexForGreaterValues = 0;
        int maxPossibleGreatness = 0;

        while (indexForLowerValues < input.Length && indexForGreaterValues < input.Length)
        {
            if (input[indexForLowerValues] < input[indexForGreaterValues])
            {
                ++indexForLowerValues;
                ++maxPossibleGreatness;
            }
            ++indexForGreaterValues;
        }

        return maxPossibleGreatness;
    }
}
```