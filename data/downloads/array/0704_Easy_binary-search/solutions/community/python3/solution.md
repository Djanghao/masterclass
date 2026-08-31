# ✔️ Python Classic Binary Search Problem | 99% Faster | Fastest Solution

**Author:** pniraj657
**Votes:** 107
**Link:** [https://leetcode.com/problems/binary-search/solutions/2700642/](https://leetcode.com/problems/binary-search/solutions/2700642/)

---

**IF YOU FIND THIS POST HELPFUL PLEASE UPVOTE \uD83D\uDC4D**

Visit this blog to learn Python tips and techniques and to find a Leetcode solution with an explanation: https://www.python-techs.com/

**Solution:**
```
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums)-1
        
        while left<=right:
            mid = (left+right)//2
            if nums[mid]==target:
                return mid
            elif nums[mid]>target:
                right = mid-1
            else:
                left = mid+1
        
        return -1
```
**Thank you for reading! \uD83D\uDE04 Comment if you have any questions or feedback.**