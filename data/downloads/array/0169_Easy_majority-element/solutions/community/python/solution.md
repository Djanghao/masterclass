# Python different solutions

**Author:** OldCodingFarmer
**Votes:** 272
**Link:** [https://leetcode.com/problems/majority-element/solutions/51712/](https://leetcode.com/problems/majority-element/solutions/51712/)

---

```
class Solution(object):
    def majorityElement1(self, nums):
        nums.sort()
        return nums[len(nums)//2]
    
    def majorityElement2(self, nums):
        m = {}
        for n in nums:
            m[n] = m.get(n, 0) + 1
            if m[n] > len(nums)//2:
                return n
            
    def majorityElement(self, nums):
        candidate, count = nums[0], 0
        for num in nums:
            if num == candidate:
                count += 1
            elif count == 0:
                candidate, count = num, 1
            else:
                count -= 1
        return candidate
```