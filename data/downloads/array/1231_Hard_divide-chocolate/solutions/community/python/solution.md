# DP solution in Python (TLE)

**Author:** mangoslicer
**Votes:** 2
**Link:** [https://leetcode.com/problems/divide-chocolate/solutions/572159/](https://leetcode.com/problems/divide-chocolate/solutions/572159/)

---

The basic idea is for k = 0, k = 1, k = 2 for each of those iterate through sweetness and get me the ideal division. So we start with k = 0 and i iterates through the columns of sweetness. For each point i all the way back to k, the sum there could be the piece that we carve out for ourselves. This iteration is done with the j pointer. We take the min between the piece we carve out for ourselves and the previously min piece dp[k-1][j-1] vs sum between sweetness[j] to sweetness [i] (our piece). Whichever of those is lower is our piece. Now we want to maximize our piece so dp[k][i] representing our piece will take the max of all the pieces that can be formed. 

```python
    def maximizeSweetness(self, sweetness, K):
        dp = [[0 for _ in range(len(sweetness))] for _ in range(K+1)]
        
        for i in range(1, len(sweetness)):
            sweetness[i] += sweetness[i-1]
            
        for k in range(K+1):
            for i in range(k,len(sweetness)):
                for j in reversed(range(k, i+1)):
                    one = dp[k-1][j-1] if k - 1 >= 0 else float('inf')
                    two = sweetness[i] - (sweetness[j-1] if j - 1 >= 0 else 0)
                    my_sweetness = min(one, two)
                    dp[k][i] = max(dp[k][i], my_sweetness)
                    
    
        return dp[-1][-1]
```

	Time: O(k * n^2) 
	Space:O(k*n) for the dp array