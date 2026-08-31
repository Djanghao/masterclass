# TypeScript :: Prefix Sum

**Author:** VladyslavPetrovskyi
**Votes:** 0
**Link:** [https://leetcode.com/problems/plates-between-candles/solutions/5548155/](https://leetcode.com/problems/plates-between-candles/solutions/5548155/)

---

# Intuition
To solve the problem of finding the number of plates between candles in a given string for multiple queries efficiently, we need to preprocess the string to quickly determine the number of plates for any given query range.
The intuition is to use **helper arrays** to quickly locate the nearest candles to build boundaries and **prefix sums** to count plates between the boundaries.

# Approach
1. Preprocessing:
- **leftCandle** stores the index of the closest candle to the left of each position 
- **rightCandle** stores the index of the closest candle to the right of each position 
- **prefixSum** stores the cumulative count of plates up to each position
2. Process each query:
- determine the range by finding the nearest candles using **rightCandle[left]** and **leftCandle[right]**
- compute the number of plates between these candles using **prefixSum**

# Complexity
- Time complexity:
**O(N)** - constructing the **leftCandle**, **rightCandle** and **prefixSum** arrays each takes O(N), processing each query - O(1)

- Space complexity:
**O(N)** - for storing **leftCandle**, **rightCandle** and **prefixSum** arrays

# Code
```
function platesBetweenCandles(s: string, queries: number[][]): number[] {
    const n = s.length;

    const leftCandle = new Array(n);
    let left = -1;
    for (let i = 0; i < n; i++) {
        if (s[i] === '|') left = i;
        leftCandle[i] = left;
    }

    const rightCandle = new Array(n);
    let right = -1;
    for (let j = n - 1; j >= 0; j--) {
        if (s[j] === '|') right = j;
        rightCandle[j] = right;
    }

    const prefixSum = new Array(n);
    let plates = 0;
    for (let k = 0; k < n; k++) {
        if (s[k] === '*') plates++;
        prefixSum[k] = plates;
    }

    const result = [];
    for (let [left, right] of queries) {
        const firstCandle = rightCandle[left];
        const lastCandle = leftCandle[right];
        const platesCount = (firstCandle >= 0 && lastCandle >= 0 && lastCandle > firstCandle)
            ? prefixSum[lastCandle] - prefixSum[firstCandle]
            : 0;
        result.push(platesCount);
    }
    return result;
};
```