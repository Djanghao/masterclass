# Typescript | DP + Iterative + Beats 100.00% + Time: O(nk^2) - Space: O(k)

**Author:** queriel
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/solutions/1887607/](https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/solutions/1887607/)

---

Time: O(nk^2)
Space: O(k)
Language: javascript, typescript

Runtime: 325 ms, faster than 100.00%
Memory Usage: 45.1 MB, less than 100.00%

```
function maxValueOfCoins(piles: number[][], coins: number): number {
    let dp = new Array(coins + 1).fill(0);
    
    for (let i = 0; i < piles.length; ++i) {
	    for (let j = coins; j > 0; --j) {
			// "sum" is a count of coins from piles[i]
            let sum = 0;

            for (let k = 1; k <= Math.min(j, piles[i].length); k++) {
                sum += piles[i][k - 1];

				// take "k" coins from piles[i] and the previous best "j-k" coins
                dp[j] = Math.max(dp[j], dp[j-k] + sum);
            }
        }
    }
    
    return dp[coins];
}
```