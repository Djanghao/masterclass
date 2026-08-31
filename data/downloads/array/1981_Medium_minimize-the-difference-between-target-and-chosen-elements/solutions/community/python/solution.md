# ✅ 100% efficient | Pruning + Memoization | Dynamic Programming | Explanation

**Author:** CaptainX
**Votes:** 29
**Link:** [https://leetcode.com/problems/minimize-the-difference-between-target-and-chosen-elements/solutions/1418634/](https://leetcode.com/problems/minimize-the-difference-between-target-and-chosen-elements/solutions/1418634/)

---

**Explanation:**


Please note following important observations from question,
1. We must choose exactly one element from each row
2. Minimize the diff between target and the sum of all chosen elements

Approach (and how to solve TLE)

Now, the general idea is to explore all possibilities, however, that'll be very hug (~70^70). Hence, the immediate thought is to apply dynamic programmic. The subproblems can be modelled as,

`findMinAbsDiff(i,prevSum)` -> returns the minimum abs diff with target, given that we're currently at row i and the sum of chosen numbers for row 0 to i-1 is `prevSum`

Hence, we can use a `dp[i][prevSum]` array for memoization. However, the answer will still not get accepted due to the nature of input test cases provided.

So, to optimize further you can leverage the fact the minimum possible answer for any input is `0`. Hence, if we get `0` absolute difference then we don't need to explore further, we stop and prune further explorations to save cost.

**Additional Note:** I've also sorted the array prior to actual exploration code to make pruning more efficient, based on the observation of the test constraints, as the target sum is much smaller compared to the sum of max values of the rows. However, that's not neccesary. 

**Code:**
```
class Solution:
    def minimizeTheDifference(self, mat: List[List[int]], target: int) -> int:
        
        # store the mxn size of the matrix
        m = len(mat)
        n = len(mat[0])
        
        dp = defaultdict(defaultdict)
        
        # Sorting each row of the array for more efficient pruning
        # Note:this purely based on the observation on problem constraints (although interesting :))
        for i in range(m):
            mat[i] = sorted(mat[i])
        
        # returns minimum absolute starting from from row i to n-1 for the target
        globalMin = float("inf")
        def findMinAbsDiff(i,prevSum):
            nonlocal globalMin
            if i == m:
                globalMin = min(globalMin, abs(prevSum-target))
                return abs(prevSum-target)
            
            # pruning step 1
            # because the array is increasing & prevSum & target will always be positive
            if prevSum-target > globalMin:
                return float("inf")
            
            
            if (i in dp) and (prevSum in dp[i]):
                return dp[i][prevSum]
            
            minDiff = float("inf")
            # for each candidate select that and backtrack
            for j in range(n):
                diff = findMinAbsDiff(i+1, prevSum+mat[i][j])
                # pruning step 2 - break if we found minDiff 0 --> VERY CRTICIAL
                if diff == 0:
                    minDiff = 0
                    break
                minDiff = min(minDiff, diff)
            
            dp[i][prevSum] = minDiff
            return minDiff
        
        return findMinAbsDiff(0, 0)
```