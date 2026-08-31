# Go/Python/JavaScript/Java O(n^2) time | O(n) space

**Author:** vtalantsev
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-number-of-coins-for-fruits/solutions/4329575/](https://leetcode.com/problems/minimum-number-of-coins-for-fruits/solutions/4329575/)

---

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func minimumCoins(prices []int) int {
    n := len(prices)
    dp := make([]int,n+1)
    for i:=0;i<n;i++{
        dp[i] = math.MaxInt
    }
    dp[n] = 0

    for i:=n-1;i>-1;i--{
        for j:=i+1;j<min(i+i+3, n+1);j++{
            dp[i] = min(dp[i], dp[j] + prices[i])
        }
    }

    return dp[0]
}
```
```python []
class Solution:
    def minimumCoins(self, prices: List[int]) -> int:
        n = len(prices)
        dp = [inf for _ in range(n+1)]
        dp[-1] = 0

        for i in range(n-1,-1,-1):
            for j in range(i+1, min(i+i+3, n+1)):
                dp[i] = min(dp[i], dp[j] + prices[i])

        return dp[0]
```
```javascript []
/**
 * @param {number[]} prices
 * @return {number}
 */
var minimumCoins = function(prices) {
    let n = prices.length
    let dp = new Array(n+1).fill(Number.MAX_VALUE)
    dp[n] = 0

    for (let i=n-1;i>-1;i--){
        for (let j=i+1;j<Math.min(i+i+3, n+1);j++){
            dp[i] = Math.min(dp[i], dp[j] + prices[i])
        }
    }

    return dp[0]
};
```
```java []
class Solution {
    public int minimumCoins(int[] prices) {
        int n = prices.length;
        int[] dp = new int[n+1];
        Arrays.fill(dp,Integer.MAX_VALUE);
        dp[n] = 0;

        for (int i=n-1;i>-1;i--){
            for (int j=i+1;j<Math.min(i+i+3, n+1);j++){
                dp[i] = Math.min(dp[i], dp[j] + prices[i]);
            }
        }

        return dp[0];
    }
}
```