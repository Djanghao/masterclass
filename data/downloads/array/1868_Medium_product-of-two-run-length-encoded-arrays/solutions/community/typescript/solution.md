# Java | JavaScript | TypeScript | C++ | C# | Kotlin Solution.

**Author:** LachezarTsK
**Votes:** 1
**Link:** [https://leetcode.com/problems/product-of-two-run-length-encoded-arrays/solutions/4984483/](https://leetcode.com/problems/product-of-two-run-length-encoded-arrays/solutions/4984483/)

---

```Java []
import java.util.ArrayList;
import java.util.List;

public class Solution {

    public List<List<Integer>> findRLEArray(int[][] firstInputEncoded, int[][] secondInputEncoded) {

        return calculateProductBetweenBothInputs(firstInputEncoded, secondInputEncoded);
    }

    private List<List<Integer>> calculateProductBetweenBothInputs(int[][] firstInputEncoded, int[][] secondInputEncoded) {
        int firstInputIndex = 0;
        int secondInputIndex = 0;

        int previousProductValue = 0;
        int previousProductFrequency = 0;

        List<List<Integer>> productOfRunLengthEncodedInputs = new ArrayList<>();

        while (firstInputIndex < firstInputEncoded.length && secondInputIndex < secondInputEncoded.length) {

            int firstValue = firstInputEncoded[firstInputIndex][0];
            int secondValue = secondInputEncoded[secondInputIndex][0];
            int firstFrequency = firstInputEncoded[firstInputIndex][1];
            int secondFrequency = secondInputEncoded[secondInputIndex][1];

            int productValue = firstValue * secondValue;
            int productFrequency = Math.min(firstFrequency, secondFrequency);

            if (productValue == previousProductValue || previousProductFrequency == 0) {
                previousProductFrequency += productFrequency;
                previousProductValue = productValue;
            } else {
                productOfRunLengthEncodedInputs.add(List.of(previousProductValue, previousProductFrequency));
                previousProductValue = productValue;
                previousProductFrequency = productFrequency;
            }

            firstInputEncoded[firstInputIndex][1] = firstFrequency - productFrequency;
            secondInputEncoded[secondInputIndex][1] = secondFrequency - productFrequency;

            firstInputIndex += (firstInputEncoded[firstInputIndex][1] > 0) ? 0 : 1;
            secondInputIndex += (secondInputEncoded[secondInputIndex][1] > 0) ? 0 : 1;
        }

        productOfRunLengthEncodedInputs.add(List.of(previousProductValue, previousProductFrequency));

        return productOfRunLengthEncodedInputs;
    }
}
```
```JavaScript []
/**
 * @param {number[][]} firstInputEncoded
 * @param {number[][]} secondInputEncoded
 * @return {number[][]}
 */
var findRLEArray = function (firstInputEncoded, secondInputEncoded) {

    return calculateProductBetweenBothInputs(firstInputEncoded, secondInputEncoded);
};

/**
 * @param {number[][]} firstInputEncoded
 * @param {number[][]} secondInputEncoded
 * @return {number[][]}
 */
function calculateProductBetweenBothInputs(firstInputEncoded, secondInputEncoded) {
    let firstInputIndex = 0;
    let secondInputIndex = 0;

    let previousProductValue = 0;
    let previousProductFrequency = 0;

    const productOfRunLengthEncodedInputs = new Array();

    while (firstInputIndex < firstInputEncoded.length && secondInputIndex < secondInputEncoded.length) {

        let firstValue = firstInputEncoded[firstInputIndex][0];
        let secondValue = secondInputEncoded[secondInputIndex][0];
        let firstFrequency = firstInputEncoded[firstInputIndex][1];
        let secondFrequency = secondInputEncoded[secondInputIndex][1];

        let productValue = firstValue * secondValue;
        let productFrequency = Math.min(firstFrequency, secondFrequency);

        if (productValue === previousProductValue || previousProductFrequency === 0) {
            previousProductFrequency += productFrequency;
            previousProductValue = productValue;
        } else {
            productOfRunLengthEncodedInputs.push([previousProductValue, previousProductFrequency]);
            previousProductValue = productValue;
            previousProductFrequency = productFrequency;
        }

        firstInputEncoded[firstInputIndex][1] = firstFrequency - productFrequency;
        secondInputEncoded[secondInputIndex][1] = secondFrequency - productFrequency;

        firstInputIndex += (firstInputEncoded[firstInputIndex][1] > 0) ? 0 : 1;
        secondInputIndex += (secondInputEncoded[secondInputIndex][1] > 0) ? 0 : 1;
    }

    productOfRunLengthEncodedInputs.push([previousProductValue, previousProductFrequency]);

    return productOfRunLengthEncodedInputs;
}
```
```TypeScript []
function findRLEArray(firstInputEncoded: number[][], secondInputEncoded: number[][]): number[][] {

    return calculateProductBetweenBothInputs(firstInputEncoded, secondInputEncoded);
};

function calculateProductBetweenBothInputs(firstInputEncoded: number[][], secondInputEncoded: number[][]): number[][] {
    let firstInputIndex = 0;
    let secondInputIndex = 0;

    let previousProductValue = 0;
    let previousProductFrequency = 0;

    const productOfRunLengthEncodedInputs: number[][] = new Array();

    while (firstInputIndex < firstInputEncoded.length && secondInputIndex < secondInputEncoded.length) {

        let firstValue = firstInputEncoded[firstInputIndex][0];
        let secondValue = secondInputEncoded[secondInputIndex][0];
        let firstFrequency = firstInputEncoded[firstInputIndex][1];
        let secondFrequency = secondInputEncoded[secondInputIndex][1];

        let productValue = firstValue * secondValue;
        let productFrequency = Math.min(firstFrequency, secondFrequency);

        if (productValue === previousProductValue || previousProductFrequency === 0) {
            previousProductFrequency += productFrequency;
            previousProductValue = productValue;
        } else {
            productOfRunLengthEncodedInputs.push([previousProductValue, previousProductFrequency]);
            previousProductValue = productValue;
            previousProductFrequency = productFrequency;
        }

        firstInputEncoded[firstInputIndex][1] = firstFrequency - productFrequency;
        secondInputEncoded[secondInputIndex][1] = secondFrequency - productFrequency;

        firstInputIndex += (firstInputEncoded[firstInputIndex][1] > 0) ? 0 : 1;
        secondInputIndex += (secondInputEncoded[secondInputIndex][1] > 0) ? 0 : 1;
    }

    productOfRunLengthEncodedInputs.push([previousProductValue, previousProductFrequency]);

    return productOfRunLengthEncodedInputs;
}
```
```C++ []
#include <span>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {

public:
    vector<vector<int>> findRLEArray(vector<vector<int>>& firstInputEncoded, vector<vector<int>>& secondInputEncoded) const {

        return calculateProductBetweenBothInputs(firstInputEncoded, secondInputEncoded);
    }

private:
    vector<vector<int>> calculateProductBetweenBothInputs(span<vector<int>> firstInputEncoded, span<vector<int>> secondInputEncoded) const {
        int firstInputIndex = 0;
        int secondInputIndex = 0;

        int previousProductValue = 0;
        int previousProductFrequency = 0;

        vector<vector<int>> productOfRunLengthEncodedInputs;

        while (firstInputIndex < firstInputEncoded.size() && secondInputIndex < secondInputEncoded.size()) {

            int firstValue = firstInputEncoded[firstInputIndex][0];
            int secondValue = secondInputEncoded[secondInputIndex][0];
            int firstFrequency = firstInputEncoded[firstInputIndex][1];
            int secondFrequency = secondInputEncoded[secondInputIndex][1];

            int productValue = firstValue * secondValue;
            int productFrequency = min(firstFrequency, secondFrequency);

            if (productValue == previousProductValue || previousProductFrequency == 0) {
                previousProductFrequency += productFrequency;
                previousProductValue = productValue;
            }
            else {
                productOfRunLengthEncodedInputs.push_back(vector<int>{previousProductValue, previousProductFrequency});
                previousProductValue = productValue;
                previousProductFrequency = productFrequency;
            }

            firstInputEncoded[firstInputIndex][1] = firstFrequency - productFrequency;
            secondInputEncoded[secondInputIndex][1] = secondFrequency - productFrequency;

            firstInputIndex += (firstInputEncoded[firstInputIndex][1] > 0) ? 0 : 1;
            secondInputIndex += (secondInputEncoded[secondInputIndex][1] > 0) ? 0 : 1;
        }

        productOfRunLengthEncodedInputs.push_back(vector<int>{previousProductValue, previousProductFrequency});

        return productOfRunLengthEncodedInputs;
    }
};
```
```C# []
using System;
using System.Collections.Generic;

public class Solution
{
    public IList<IList<int>> FindRLEArray(int[][] firstInputEncoded, int[][] secondInputEncoded)
    {

        return CalculateProductBetweenBothInputs(firstInputEncoded, secondInputEncoded);
    }

    private IList<IList<int>> CalculateProductBetweenBothInputs(int[][] firstInputEncoded, int[][] secondInputEncoded)
    {
        int firstInputIndex = 0;
        int secondInputIndex = 0;

        int previousProductValue = 0;
        int previousProductFrequency = 0;

        IList<IList<int>> productOfRunLengthEncodedInputs = new List<IList<int>>();

        while (firstInputIndex < firstInputEncoded.Length && secondInputIndex < secondInputEncoded.Length)
        {

            int firstValue = firstInputEncoded[firstInputIndex][0];
            int secondValue = secondInputEncoded[secondInputIndex][0];
            int firstFrequency = firstInputEncoded[firstInputIndex][1];
            int secondFrequency = secondInputEncoded[secondInputIndex][1];

            int productValue = firstValue * secondValue;
            int productFrequency = Math.Min(firstFrequency, secondFrequency);

            if (productValue == previousProductValue || previousProductFrequency == 0)
            {
                previousProductFrequency += productFrequency;
                previousProductValue = productValue;
            }
            else
            {
                productOfRunLengthEncodedInputs.Add(new List<int>() { previousProductValue, previousProductFrequency });
                previousProductValue = productValue;
                previousProductFrequency = productFrequency;
            }

            firstInputEncoded[firstInputIndex][1] = firstFrequency - productFrequency;
            secondInputEncoded[secondInputIndex][1] = secondFrequency - productFrequency;

            firstInputIndex += (firstInputEncoded[firstInputIndex][1] > 0) ? 0 : 1;
            secondInputIndex += (secondInputEncoded[secondInputIndex][1] > 0) ? 0 : 1;
        }

        productOfRunLengthEncodedInputs.Add(new List<int>() { previousProductValue, previousProductFrequency });

        return productOfRunLengthEncodedInputs;
    }
}
```
```Kotlin []
import kotlin.math.min;

class Solution {

    fun findRLEArray(firstInputEncoded: Array<IntArray>, secondInputEncoded: Array<IntArray>): List<List<Int>> {

        return calculateProductBetweenBothInputs(firstInputEncoded, secondInputEncoded);
    }

    private fun calculateProductBetweenBothInputs(firstInputEncoded: Array<IntArray>, secondInputEncoded: Array<IntArray>): List<List<Int>> {

        var firstInputIndex = 0;
        var secondInputIndex = 0;

        var previousProductValue = 0;
        var previousProductFrequency = 0;

        val productOfRunLengthEncodedInputs = ArrayList<List<Int>>();

        while (firstInputIndex < firstInputEncoded.size && secondInputIndex < secondInputEncoded.size) {

            val firstValue = firstInputEncoded[firstInputIndex][0];
            val secondValue = secondInputEncoded[secondInputIndex][0];
            val firstFrequency = firstInputEncoded[firstInputIndex][1];
            val secondFrequency = secondInputEncoded[secondInputIndex][1];

            val productValue = firstValue * secondValue;
            val productFrequency = min(firstFrequency, secondFrequency);

            if (productValue == previousProductValue || previousProductFrequency == 0) {
                previousProductFrequency += productFrequency;
                previousProductValue = productValue;
            } else {
                productOfRunLengthEncodedInputs.add(listOf(previousProductValue, previousProductFrequency));
                previousProductValue = productValue;
                previousProductFrequency = productFrequency;
            }

            firstInputEncoded[firstInputIndex][1] = firstFrequency - productFrequency;
            secondInputEncoded[secondInputIndex][1] = secondFrequency - productFrequency;

            firstInputIndex += if (firstInputEncoded[firstInputIndex][1] > 0) 0 else 1;
            secondInputIndex += if (secondInputEncoded[secondInputIndex][1] > 0) 0 else 1;
        }

        productOfRunLengthEncodedInputs.add(listOf(previousProductValue, previousProductFrequency));

        return productOfRunLengthEncodedInputs;
    }
}
```