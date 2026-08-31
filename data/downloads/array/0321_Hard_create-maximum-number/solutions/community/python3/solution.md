# Python Solution | Greedy Search + Dynamic Programming

**Author:** jmin3
**Votes:** 9
**Link:** [https://leetcode.com/problems/create-maximum-number/solutions/1027086/](https://leetcode.com/problems/create-maximum-number/solutions/1027086/)

---

```
class Solution:
    def maxNumber(self, nums1: List[int], nums2: List[int], k: int) -> List[int]:        
        def merge(n1, n2):
            res = []
            while (n1 or n2) :
                if n1>n2:
                    res.append(n1[0])
                    n1 = n1[1:]
                else:
                    res.append(n2[0])
                    n2 = n2[1:]
            return res
        
        def findmax(nums, length):
            l = []
            maxpop = len(nums)-length
            for i in range(len(nums)):
                while maxpop>0 and len(l) and nums[i]>l[-1]:
                    l.pop()
                    maxpop -= 1
                l.append(nums[i])
            return l[:length]
        
        n1 = len(nums1)
        n2 = len(nums2)
        res = [0]*k
        for i in range(k+1):
            j = k-i
            if i>n1 or j>n2:    continue
            l1 = findmax(nums1, i)
            l2 = findmax(nums2, j)
            res = max(res, merge(l1,l2))
        return res