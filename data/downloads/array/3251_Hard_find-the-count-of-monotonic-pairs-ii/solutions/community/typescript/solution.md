# ✅ 🎯  TS | Faster🔥 | DP | LESS LINES | SIMPLE | TC: O(n*maxElm) | SC: O(n*maxElm) 🎯✅

**Author:** pedro_hc_do
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-count-of-monotonic-pairs-ii/solutions/5628481/](https://leetcode.com/problems/find-the-count-of-monotonic-pairs-ii/solutions/5628481/)

---

# Intuition
My intuition was to use DP, where **d[x][y]** means the number of possible combinations considering the first **(y-1)** numbers, but ending in **x**, for example, for the input [2, 3, 2], the value in **dp[1][2]** would give me the number of combinations for **[2, 3, '1']**. This is important because to calculate the result for each **dp[x][y]**.

# Approach
I need to use two dynamic strategies, let's use the example **[2, 3, 2]** and imagine that we are calculating **[2, 3, '1' ]**:

1) To calculate the number of combinations in the third position when the value is 1, we need to take into account the decreasing and increasing property, so the smallest possible value in the back position must be 1, [2, 2, '1'] and [2, 3, '1'] (remembering that we don't need to worry about validating, if it's not possible like [2, 3, '1'] it will simply return 0. But how to get [2, 2, ' 1'] and [2, 3, '1'] looking in one position **dp[2][1]**? In the second explanation I will clarify this.

2) Here we need to ensure that when looking at a position dp[x][y] it includes the answers to the values \u200B\u200Babove, dp[x+1][y] + dp[x+2][y] ... dp [max][y], this way we will also be able to solve problem 1). That's why I calculate from the end `for(let j=nums[i]; j>=0; j--) {`



# Complexity
- Time complexity:$$O(m*maxElm)$$
- Space complexity: $$O(m*maxElm)$$

# Code
```
function countOfPairs(nums: number[]): number {
    let dp: number[][] = new Array(1002).fill(null).map(
        _ => new Array(nums.length + 1).fill(0)
    )

    for(let i=0; i<=nums.length; i++) {
        for(let j=nums[i]; j>=0; j--) {
            
            const prev = (i===0) ? 1 : dp[Math.max((nums[i-1] - (nums[i] - j)), j)][i]

            dp[j][i+1] = (dp[j][i + 1] + prev) % 1000000007
            dp[j][i+1] = (dp[j][i + 1] + dp[j+1][i+1]) % 1000000007
        }
    }

    return dp[0][nums.length]
};
```