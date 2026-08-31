# Java | JavaScript | TypeScript | C++ | C# Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/solutions/4968983/](https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/solutions/4968983/)

---

```Java []
import java.util.Arrays;
import java.util.PriorityQueue;

public class Solution {

    private record ElementData(int value, int index) {}

    private boolean[] markedElements;
    private long sumOfUnmarkedElements;

    public long[] unmarkedSumArray(int[] input, int[][] queries) {

        PriorityQueue<ElementData> minHeapForValue = new PriorityQueue<>(
                (x, y) -> (x.value == y.value) ? (x.index - y.index) : (x.value - y.value));
        initializeMinHeapForValue(input, minHeapForValue);

        markedElements = new boolean[input.length];
        sumOfUnmarkedElements = Arrays.stream(input).asLongStream().sum();

        long[] sumOfUnmarkedElementsAfterEachQuery = new long[queries.length];
        int indexAnswer = 0;

        for (int i = 0; i < queries.length && !minHeapForValue.isEmpty(); ++i) {
            markElementsInQuery(queries[i], input, minHeapForValue);
            sumOfUnmarkedElementsAfterEachQuery[indexAnswer++] = sumOfUnmarkedElements;
        }

        return sumOfUnmarkedElementsAfterEachQuery;
    }

    private void markElementsInQuery(int[] query, int[] input, PriorityQueue<ElementData> minHeapForValue) {
        int index = query[0];
        int numberOfSmallestValuesToMark = query[1];

        if (!markedElements[index]) {
            sumOfUnmarkedElements -= input[index];
            markedElements[index] = true;
        }

        while (!minHeapForValue.isEmpty() && numberOfSmallestValuesToMark > 0) {
            ElementData element = minHeapForValue.poll();
            if (!markedElements[element.index]) {
                sumOfUnmarkedElements -= input[element.index];
                markedElements[element.index] = true;
                --numberOfSmallestValuesToMark;
            }
        }
    }

    private void initializeMinHeapForValue(int[] input, PriorityQueue<ElementData> minHeapForValue) {
        for (int i = 0; i < input.length; ++i) {
            minHeapForValue.add(new ElementData(input[i], i));
        }
    }
}
```
```JavaScript []
/**
 * @param {number[]} input
 * @param {number[][]} queries
 * @return {number[]}
 */
var unmarkedSumArray = function (input, queries) {
    this.markedElements = new Array(input.length).fill(false);
    this.sumOfUnmarkedElements = input.reduce((x, y) => x + y);

    // const {MinPriorityQueue} = require('@datastructures-js/priority-queue') 
    // MinPriorityQueue<ElementData>
    const minHeapForValue = new MinPriorityQueue(
            {compare: (x, y) => (x.value === y.value) ? (x.index - y.index) : (x.value - y.value)});
    initializeMinHeapForValue(input, minHeapForValue);

    const sumOfUnmarkedElementsAfterEachQuery = new Array(queries.length).fill(0);
    let indexAnswer = 0;

    for (let i = 0; i < queries.length && !minHeapForValue.isEmpty(); ++i) {
        markElementsInQuery(queries[i], input, minHeapForValue);
        sumOfUnmarkedElementsAfterEachQuery[indexAnswer++] = this.sumOfUnmarkedElements;
    }

    return sumOfUnmarkedElementsAfterEachQuery;
};

/**
 * @param {number} value
 * @param {number} index
 */
function ElementData(value, index) {
    this.value = value;
    this.index = index;
}

/**
 * @param {number[]} query
 * @param {number[]} input
 * @param {MinPriorityQueue<ElementData>} minHeapForValue
 * @return {void}
 */
function markElementsInQuery(query, input, minHeapForValue) {
    let index = query[0];
    let numberOfSmallestValuesToMark = query[1];

    if (!this.markedElements[index]) {
        this.sumOfUnmarkedElements -= input[index];
        this.markedElements[index] = true;
    }

    while (!minHeapForValue.isEmpty() && numberOfSmallestValuesToMark > 0) {
        const element = minHeapForValue.dequeue();
        if (!this.markedElements[element.index]) {
            this.sumOfUnmarkedElements -= input[element.index];
            this.markedElements[element.index] = true;
            --numberOfSmallestValuesToMark;
        }
    }
}

/**
 * @param {number[]} input
 * @param {MinPriorityQueue<ElementData>} minHeapForValue
 * @return {void}
 */
function initializeMinHeapForValue(input, minHeapForValue) {
    for (let i = 0; i < input.length; ++i) {
        minHeapForValue.enqueue(new ElementData(input[i], i));
    }
}
```
```TypeScript []
function unmarkedSumArray(input: number[], queries: number[][]): number[] {
    this.markedElements = new Array(input.length).fill(false);
    this.sumOfUnmarkedElements = input.reduce((x, y) => x + y);

    //const {MinPriorityQueue} = require('@datastructures-js/priority-queue')  
    const minHeapForValue = new MinPriorityQueue(
        { compare: (x, y) => (x.value === y.value) ? (x.index - y.index) : (x.value - y.value) });
    initializeMinHeapForValue(input, minHeapForValue);

    const sumOfUnmarkedElementsAfterEachQuery = new Array(queries.length).fill(0);
    let indexAnswer = 0;

    for (let i = 0; i < queries.length && !minHeapForValue.isEmpty(); ++i) {
        markElementsInQuery(queries[i], input, minHeapForValue);
        sumOfUnmarkedElementsAfterEachQuery[indexAnswer++] = this.sumOfUnmarkedElements;
    }

    return sumOfUnmarkedElementsAfterEachQuery;
};

class ElementData {
    constructor(public value: number, public index: number) { }
}

function markElementsInQuery(query: number[], input: number[], minHeapForValue: typeof MinPriorityQueue): void {
    let index = query[0];
    let numberOfSmallestValuesToMark = query[1];

    if (!this.markedElements[index]) {
        this.sumOfUnmarkedElements -= input[index];
        this.markedElements[index] = true;
    }

    while (!minHeapForValue.isEmpty() && numberOfSmallestValuesToMark > 0) {
        const element = minHeapForValue.dequeue();
        if (!this.markedElements[element.index]) {
            this.sumOfUnmarkedElements -= input[element.index];
            this.markedElements[element.index] = true;
            --numberOfSmallestValuesToMark;
        }
    }
}

function initializeMinHeapForValue(input: number[], minHeapForValue: typeof MinPriorityQueue): void {
    for (let i = 0; i < input.length; ++i) {
        minHeapForValue.enqueue(new ElementData(input[i], i));
    }
}
```
```C++ []
#include <span>
#include <queue>
#include <vector>
#include <numeric>
using namespace std;

class Solution {

    struct ElementData {
        int value;
        size_t index;
        ElementData(int value, size_t index) :value {value}, index {index} {}
    };

    struct Comparator {
        auto operator()(const ElementData& x, const ElementData& y) const {
            return (x.value == y.value) ? (x.index > y.index) : (x.value > y.value);
        }
    };

    using MinHeapForValue = priority_queue<ElementData, vector<ElementData>, Comparator>;

    vector<bool> markedElements;
    long long sumOfUnmarkedElements = 0;

public:
    vector<long long> unmarkedSumArray(const vector<int>& input, const vector<vector<int>>& queries) {

        MinHeapForValue minHeapForValue;
        initializeMinHeapForValue(input, minHeapForValue);

        markedElements.resize(input.size());
        sumOfUnmarkedElements = accumulate(input.begin(), input.end(), static_cast<long long>(0));

        vector<long long> sumOfUnmarkedElementsAfterEachQuery(queries.size());
        int indexAnswer = 0;

        for (size_t i = 0; i < queries.size() && !minHeapForValue.empty(); ++i) {
            markElementsInQuery(queries[i], input, minHeapForValue);
            sumOfUnmarkedElementsAfterEachQuery[indexAnswer++] = sumOfUnmarkedElements;
        }

        return sumOfUnmarkedElementsAfterEachQuery;
    }

private:
    void markElementsInQuery(span<const int> query, span<const int> input, MinHeapForValue& minHeapForValue) {
        int index = query[0];
        int numberOfSmallestValuesToMark = query[1];

        if (!markedElements[index]) {
            sumOfUnmarkedElements -= input[index];
            markedElements[index] = true;
        }

        while (!minHeapForValue.empty() && numberOfSmallestValuesToMark > 0) {
            ElementData element = minHeapForValue.top();
            minHeapForValue.pop();

            if (!markedElements[element.index]) {
                sumOfUnmarkedElements -= input[element.index];
                markedElements[element.index] = true;
                --numberOfSmallestValuesToMark;
            }
        }
    }

    void initializeMinHeapForValue(span<const int> input, MinHeapForValue& minHeapForValue) const {
        for (size_t i = 0; i < input.size(); ++i) {
            minHeapForValue.emplace(input[i], i);
        }
    }
};
```
```C# []
using System;
using System.Collections.Generic;

public class Solution
{
    private sealed record ElementData(int value, int index) { }

    private bool[]? markedElements;
    private long sumOfUnmarkedElements;

    public long[] UnmarkedSumArray(int[] input, int[][] queries)
    {
        Comparer<ElementData> comparator = Comparer<ElementData>
            .Create((x, y) => x.value == y.value
                          ? x.index.CompareTo(y.index)
                          : x.value.CompareTo(y.value));

        PriorityQueue<ElementData, ElementData> minHeapForValue = new PriorityQueue<ElementData, ElementData>(comparator);
        InitializeMinHeapForValue(input, minHeapForValue);

        markedElements = new bool[input.Length];
        sumOfUnmarkedElements = 0;
        foreach (int n in input)
        {
            sumOfUnmarkedElements += n;
        }


        long[] sumOfUnmarkedElementsAfterEachQuery = new long[queries.Length];
        int indexAnswer = 0;

        for (int i = 0; i < queries.Length && minHeapForValue.Count > 0; ++i)
        {
            MarkElementsInQuery(queries[i], input, minHeapForValue);
            sumOfUnmarkedElementsAfterEachQuery[indexAnswer++] = sumOfUnmarkedElements;
        }

        return sumOfUnmarkedElementsAfterEachQuery;
    }

    private void MarkElementsInQuery(int[] query, int[] input, PriorityQueue<ElementData, ElementData> minHeapForValue)
    {
        int index = query[0];
        int numberOfSmallestValuesToMark = query[1];

        if (!markedElements[index])
        {
            sumOfUnmarkedElements -= input[index];
            markedElements[index] = true;
        }

        while (minHeapForValue.Count > 0 && numberOfSmallestValuesToMark > 0)
        {
            ElementData element = minHeapForValue.Dequeue();
            if (!markedElements[element.index])
            {
                sumOfUnmarkedElements -= input[element.index];
                markedElements[element.index] = true;
                --numberOfSmallestValuesToMark;
            }
        }
    }

    private void InitializeMinHeapForValue(int[] input, PriorityQueue<ElementData, ElementData> minHeapForValue)
    {
        for (int i = 0; i < input.Length; ++i)
        {
            minHeapForValue.Enqueue(new ElementData(input[i], i), new ElementData(input[i], i));
        }
    }

}
```