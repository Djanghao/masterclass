# TypeScript Solution

**Author:** soraya1725
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-of-sub-multisets-with-bounded-sum/solutions/4207861/](https://leetcode.com/problems/count-of-sub-multisets-with-bounded-sum/solutions/4207861/)

---

# Intuition


# Approach
This function works by leveraging dynamic programming. The core idea is to maintain a list (dp) that keeps track of all possible sums that can be obtained using the numbers from the input array nums.

Initially, the function sorts the numbers in descending order. It first handles any zeros in the nums because zeros don't affect the sum but increase the count of combinations.

Then, the function processes each unique number in the array and computes possible sums that can be formed using this number. It does this by iterating through the current sums in dp and updating them with combinations of the current number.

Once all numbers are processed, it computes the final answer by summing up the counts of valid sums in the range [l, r].

The usage of MOD is to ensure that the results do not overflow the given limit, which is a common technique in competitive programming problems.

# Complexity
- Time complexity:
itialization and Sorting:

Initializing the dp array is O(r) where r is the upper bound of the range.
Sorting the nums array is log O(nlogn), where n is the length of the nums array.

Processing zeros:

In the worst case, the loop for processing zeros will run n times, thus O(n).
Main Loop:

The outer loop runs for each unique element of the nums array. In the worst case, it will run n times.

Inside the loop, we have another loop that can iterate at most up to r, the range's upper bound.

Nested inside is another loop which runs at most n times (in the case where all numbers in nums are the same).

This gives a worst-case complexity of O(n\xD7r\xD7n) for this portion. But in practical scenarios, it's likely to be much less since not all numbers in nums will be the same.

Final Loop:

Iterates in the range [l, r], so it is O(r). Combining all parts, the worst-case time complexity can be approximated as O(nlogn+n\xD7r\xD7n). If n is significantly smaller than r, you can simplify it further to(n^2\xD7r). However, in typical scenarios where the array doesn't consist of all identical numbers, the time complexity will be much better than this worst-case estimation.

- Space complexity:
The space complexity is dominated by the dp array, which is O(r).

# Code
```
function countSubMultisets(nums: number[], l: number, r: number): number {
    const MOD: number = 1000000007;
    const MAXN: number = 20000;
    let dp: number[] = new Array(20005).fill(0);
    
    for (let i = 0; i <= r; i++) {
        dp[i] = 0;
    }
    dp[0] = 1;

    nums.sort((a, b) => a - b);
    nums.reverse();
    let sf = 0;

    while (nums.length > 0 && nums[nums.length - 1] === 0) {
        dp[0]++;
        nums.pop();
    }

    while (nums.length > 0) {
        const tt = nums[nums.length - 1];
        let cn = 0;
        while (nums.length > 0 && nums[nums.length - 1] === tt) {
            nums.pop();
            cn++;
        }

        const chg = Math.min(sf + tt * cn, r);
        for (let i = chg; i >= tt; i--) {
            for (let j = 1; j <= cn; j++) {
                if (i - j * tt >= 0) {
                    dp[i] += dp[i - j * tt];
                    if (dp[i] >= MOD) {
                        dp[i] -= MOD;
                    }
                }
            }
        }

        sf += tt * cn;
    }

    let ans = 0;
    for (let i = l; i <= r; i++) {
        ans += dp[i];
        ans %= MOD;
    }

    return ans;
}
```