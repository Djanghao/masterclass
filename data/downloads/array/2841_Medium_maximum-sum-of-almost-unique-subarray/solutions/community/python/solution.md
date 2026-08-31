# Python Sliding Window

**Author:** shrishpellakur
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/solutions/4438243/](https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/solutions/4438243/)

---


```
class Solution:
    def maxSum(self, nums: List[int], m: int, k: int) -> int:
        
        hashmap = {}
        left = 0
        maxVal = 0
        add = 0

        for right in range(len(nums)):

            if nums[right] in hashmap:
                hashmap[nums[right]] += 1
            else:
                hashmap[nums[right]] = 1
            
            add += nums[right]
            
            if right - left + 1 == k:
                if len(hashmap) >= m:
                    maxVal = max(maxVal, add)
                add -= nums[left]
                hashmap[nums[left]] -= 1
                if hashmap[nums[left]] == 0:
                    del hashmap[nums[left]]
                left += 1
                
        return maxVal



```