# A Python solution

**Author:** Google
**Votes:** 381
**Link:** [https://leetcode.com/problems/maximum-subarray/solutions/20194/](https://leetcode.com/problems/maximum-subarray/solutions/20194/)

---

    class Solution:
        # @param A, a list of integers
        # @return an integer
        # 6:57
        def maxSubArray(self, A):
            if not A:
                return 0
    
            curSum = maxSum = A[0]
            for num in A[1:]:
                curSum = max(num, curSum + num)
                maxSum = max(maxSum, curSum)
    
            return maxSum