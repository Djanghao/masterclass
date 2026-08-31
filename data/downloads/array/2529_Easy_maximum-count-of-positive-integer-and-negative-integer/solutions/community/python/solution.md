# Easy Python Solution Binary Search (O(LogN))

**Author:** shivang_jaat
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/3364914/](https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/3364914/)

---

```
class Solution:
    def binarySearch(self,nums,target):
        left,right=0,len(nums)-1
        while left<=right:
            mid=(left+right)//2
            if nums[mid]<target:
                left=mid+1
            else:
                right=mid-1
        return left
    def maximumCount(self, nums: List[int]) -> int:
        return max(self.binarySearch(nums,0),len(nums)-self.binarySearch(nums,1))
```