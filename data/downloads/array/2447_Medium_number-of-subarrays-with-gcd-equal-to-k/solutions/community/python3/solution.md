# [Python3] Brute Force + Early Stopping, Clean & Concise

**Author:** xil899
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/solutions/2734224/](https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/solutions/2734224/)

---

**Implementation**
We use a nested for-loop to record the starting index `i` and ending index `j` for the subarray. Each time, when the GCD of subarray is smaller than `k`, we exit the inner for-loop.

**Complexity**
Time Complexity: `O(N^2logM)`, where `M <= 1e9` (worse case for GCD)
Space Complexity: `O(1)`
 
 **Solution**
```
class Solution:
    def subarrayGCD(self, nums: List[int], k: int) -> int:
        n = len(nums)
        ans = 0
        for i in range(n):
            temp = nums[i]
            for j in range(i, n):
                temp = math.gcd(temp, nums[j])
                if temp == k:
                    ans += 1
                elif temp < k:
                    break
        return ans
```