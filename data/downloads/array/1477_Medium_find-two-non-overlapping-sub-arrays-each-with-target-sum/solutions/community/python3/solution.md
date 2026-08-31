# [Python] Similar to BUY AND SELL STOCK 3, Simple DP Solution, Logic and Intuition explained.

**Author:** 101leetcode
**Votes:** 58
**Link:** [https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/solutions/685600/](https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/solutions/685600/)

---

```
class Solution:
    def minSumOfLengths(self, arr: List[int], target: int) -> int:
        ## RC ##
        ## APPROACH : DP ##        
		## Similar to Leetcode: 123 Best Time To Buy And Sell Stock III ##
        ## LOGIC ##
        ## 1. Like typical subarray sum problem, calculate the valid subarray lengths at that particular index using running/prefix sum
        ## 2. dp will have the minimum subarray length with sum = target found till that index.
        ## 3. now reverse the array and compute the same. (we now have both dp_left and dp_right)
        ## 4. As there should not be any overlaps, we consider minimum found till index - 1 in left side and minimum found from this current index till end on right side. Compute the sum and store in ans.
		
		## INTUITION ## (How did I get to know that I have to use dp_left and dp_ right ?)
		## As we are finding only 2 best cases, if we consider any particular index, one best case can be to its left side , othe best case can be to its right side ##
        
		## TIME COMPLEXICITY : O(3xN) ##
		## SPACE COMPLEXICITY : O(N) ##
        
        def get_sub_arrays( arr ):
            lookup = collections.defaultdict(int)
            running_sum = 0
            dp = [float('inf')] * len(arr)
            
            for i, num in enumerate(arr):
                running_sum += num
                if running_sum == target:
                    dp[i] = i - 0 + 1
                elif running_sum - target in lookup:
                    dp[i] = i - lookup[running_sum - target] + 1
                lookup[running_sum] = i+1
                dp[i] = min( dp[i-1], dp[i] )
            return dp
        
        dp_left = get_sub_arrays( arr )                     # from front
        dp_right = get_sub_arrays( arr[::-1] )[::-1]        # from backwards
        
        ans = float('inf')
        for i in range( 1, len(arr) ):
            ans = min( ans, dp_left[i-1] + dp_right[i] )
        return ans if( ans != float('inf') ) else -1
```
UPVOTE IF YOU LIKE MY SOLUTION.