# Clean Java DP solution with comment

**Author:** jinwu
**Votes:** 353
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/solutions/54117/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/solutions/54117/)

---

    /**
	 * dp[i, j] represents the max profit up until prices[j] using at most i transactions. 
     * dp[i, j] = max(dp[i, j-1], prices[j] - prices[jj] + dp[i-1, jj]) { jj in range of [0, j-1] }
     *          = max(dp[i, j-1], prices[j] + max(dp[i-1, jj] - prices[jj]))
     * dp[0, j] = 0; 0 transactions makes 0 profit
     * dp[i, 0] = 0; if there is only one price data point you can't make any transaction.
	 */

    public int maxProfit(int k, int[] prices) {
    	int n = prices.length;
    	if (n <= 1)
    		return 0;
    	
    	//if k >= n/2, then you can make maximum number of transactions.
    	if (k >=  n/2) {
    		int maxPro = 0;
    		for (int i = 1; i < n; i++) {
    			if (prices[i] > prices[i-1])
    				maxPro += prices[i] - prices[i-1];
    		}
    		return maxPro;
    	}
    	
        int[][] dp = new int[k+1][n];
        for (int i = 1; i <= k; i++) {
        	int localMax = dp[i-1][0] - prices[0];
        	for (int j = 1; j < n; j++) {
        		dp[i][j] = Math.max(dp[i][j-1],  prices[j] + localMax);
        		localMax = Math.max(localMax, dp[i-1][j] - prices[j]);
        	}
        }
        return dp[k][n-1];
    }