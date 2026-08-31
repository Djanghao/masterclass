# TypeScript/JavaScript - DP tabulation soln with example

**Author:** teoyuqi
**Votes:** 1
**Link:** [https://leetcode.com/problems/partition-array-for-maximum-sum/solutions/4669733/](https://leetcode.com/problems/partition-array-for-maximum-sum/solutions/4669733/)

---

# Approach
In the dp array, `dp[i]` will be the max sum after partitioning up to element `arr[i]`.
* In each iteration of the outer loop, we only need to consider elements up till `arr[i]`
* For `j in [0 .. k)`, we try putting `arr[i - j], arr[i - (j - 1)]..., arr[i]` in the same parition

# Example
e.g. `[1,15,7,9,2,5,10]`, `k = 3`, `i = 4`

Since `i = 4`, we only consider up till element `arr[i]` (i.e. 9) in this iteration of the outer loop.

We will try `j` from { 0, 1, 2 }.

```text
    j = 0:
        [1, 15, 7, 9 | 2]
        currSubArrMax = 2
        sum0 = dp[up till 9] + sum([2])

    j = 1:
        [1, 15, 7 | 9, 2]
        currSubArrMax = 9
        sum1 = dp[up till 7] + sum([9, 9])

    j = 2:
        [1, 15, | 7, 9, 2]
        currSubArrMax = 9
        sum2 = dp[up till 15] + sum([9, 9, 9])

dp[i] = max(sum0, sum1, sum2)

```

# Complexity
- Time complexity: `O(nk)`
- Space complexity: `O(n)`

```TypeScript
function maxSumAfterPartitioning(arr: number[], k: number): number {
    // dp[i] = max sum up to arr[i]
    const dp = Array<number>(arr.length).fill(0);
    
    for (let i = 0; i < arr.length; i++) {
        let currSubArrMax = -1;
        for (let j = 0; j < k; j++) {
            if (j > i) { break; }

            currSubArrMax = Math.max(currSubArrMax, arr[i - j]);
            const currSubArrSum = currSubArrMax * (j + 1);
            const prevSubArrSum = i - j > 0
                ? dp[i - j - 1]
                : 0;

            dp[i] = Math.max(dp[i], currSubArrSum + prevSubArrSum)
        }
    }

    return dp[arr.length - 1];
};
```