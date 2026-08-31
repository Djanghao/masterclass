# 3 Solutions | Easy to Understand | Faster | Brute Force | Two Pointers | Binary Search | Python

**Author:** Mrmagician
**Votes:** 14
**Link:** [https://leetcode.com/problems/two-sum-less-than-k/solutions/964454/](https://leetcode.com/problems/two-sum-less-than-k/solutions/964454/)

---

```
class Solution:
    def twoSumLessThanK(self, nums: List[int], k: int) -> int:
        return self.withBinarySearch(nums, k)
    
    def withBinarySearch(self, nums, k):
        nums.sort()
        possibleSum = -1
        for index, curr in enumerate(nums):
            start, end = index + 1, len(nums) - 1
            target = k - curr
            nextLargest = float('-inf')
            while start < end - 1:
                mid = (start + end) // 2
                if nums[mid] < target:
                    start = mid
                else:
                    end = mid - 1
                
            if start < len(nums) and nums[start] < target:
                otherOne = nums[start]
                if nums[end] < target:
                    otherOne = max(otherOne, nums[end])
                possibleSum = max(possibleSum, curr + otherOne)  
        return possibleSum
    
    def withTwoPointers(self, nums, k):
        # This approach needs sorting
        nums.sort()
        start, end = 0, len(nums) - 1
        possibleSum = -1
        while start < end:
            total = nums[start] + nums[end]
            if total < k:
                possibleSum = max(possibleSum, total)
                start += 1
            else:
                end -= 1
        return possibleSum
    
    
    def bruteForce(self, nums, k):
        possibleSums = []
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                s = nums[i] + nums[j]
                if s < k: possibleSums.append(s)
        return max(possibleSums) if len(possibleSums) else -1
```

**I hope that you've found the solution useful.**
*In that case, please do upvote and encourage me to on my quest to document all leetcode problems\uD83D\uDE03*
PS: Search for **mrmagician** tag in the discussion, if I have solved it, You will find it there\uD83D\uDE38