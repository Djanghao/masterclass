# Java | JavaScript | TypeScript | C++ | C# | Kotlin Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/solutions/4994741/](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/solutions/4994741/)

---

```Java []
import java.util.PriorityQueue;

public class Solution {

    public int minOperations(int[] input, int target) {
        PriorityQueue<Long> minHeap = new PriorityQueue<>();
        for (long n : input) {
            minHeap.add(n);
        }

        int minOperations = 0;
        while (minHeap.peek() < target && minHeap.size() > 1) {
            long firstValue = minHeap.poll();
            long secondValue = minHeap.poll();
            long newValue = Math.min(firstValue, secondValue) * 2 + Math.max(firstValue, secondValue);

            minHeap.add(newValue);
            ++minOperations;
        }

        return minOperations;
    }
}
```
```JavaScript []
/**
 * @param {number[]} input
 * @param {number} target
 * @return {number}
 */
var minOperations = function (input, target) {
    // PriorityQueue<number>
    // const {MinPriorityQueue} = require('@datastructures-js/priority-queue');
    const minHeap = new MinPriorityQueue({compare: (x, y) => x - y});
    for (let n of input) {
        minHeap.enqueue(n);
    }

    let minOperations = 0;
    while (minHeap.front() < target && minHeap.size() > 1) {
        let firstValue = minHeap.dequeue();
        let secondValue = minHeap.dequeue();
        let newValue = Math.min(firstValue, secondValue) * 2 + Math.max(firstValue, secondValue);

        minHeap.enqueue(newValue);
        ++minOperations;
    }

    return minOperations;
};
```
```TypeScript []
function minOperations(input: number[], target: number): number {
    // const {MinPriorityQueue} = require('@datastructures-js/priority-queue');
    const minHeap = new MinPriorityQueue({ compare: (x, y) => x - y });
    for (let n of input) {
        minHeap.enqueue(n);
    }

    let minOperations = 0;
    while (minHeap.front() < target && minHeap.size() > 1) {
        let firstValue = minHeap.dequeue();
        let secondValue = minHeap.dequeue();
        let newValue = Math.min(firstValue, secondValue) * 2 + Math.max(firstValue, secondValue);

        minHeap.enqueue(newValue);
        ++minOperations;
    }

    return minOperations;
};
```
```C++ []
#include <queue>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {

public:
    int minOperations(const vector<int>& input, int target) const {
        priority_queue<long long, vector<long long>, greater<long long>> minHeap;
        for (const auto& n : input) {
            minHeap.push(n);
        }

        int minOperations = 0;
        while (minHeap.top() < target && minHeap.size() > 1) {
            long long firstValue = minHeap.top();
            minHeap.pop();

            long long secondValue = minHeap.top();
            minHeap.pop();

            long long newValue = min(firstValue, secondValue) * 2 + max(firstValue, secondValue);

            minHeap.push(newValue);
            ++minOperations;
        }

        return minOperations;
    }
};
```
```C# []
using System;
using System.Collections.Generic;

public class Solution
{
    public int MinOperations(int[] input, int target)
    {
        PriorityQueue<long, long> minHeap = new PriorityQueue<long, long>();
        foreach (long n in input)
        {
            minHeap.Enqueue(n, n);
        }

        int minOperations = 0;
        while (minHeap.Peek() < target && minHeap.Count > 1)
        {
            long firstValue = minHeap.Dequeue();
            long secondValue = minHeap.Dequeue();
            long newValue = Math.Min(firstValue, secondValue) * 2 + Math.Max(firstValue, secondValue);

            minHeap.Enqueue(newValue, newValue);
            ++minOperations;
        }

        return minOperations;
    }
}
```
```Kotlin []
import java.util.PriorityQueue
import kotlin.math.min
import kotlin.math.max

class Solution {
    fun minOperations(input: IntArray, target: Int): Int {
        val minHeap = PriorityQueue<Long>();
        for (n in input) {
            minHeap.add(n.toLong());
        }

        var minOperations = 0;
        while (minHeap.peek() < target && minHeap.size > 1) {
            val firstValue = minHeap.poll();
            val secondValue = minHeap.poll();
            val newValue: Long = min(firstValue, secondValue) * 2 + max(firstValue, secondValue);

            minHeap.add(newValue);
            ++minOperations;
        }

        return minOperations;
    }
}
```