# Python intuitive hashmap solution, O(n*m) time

**Author:** byuns9334
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/solutions/1658113/](https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/solutions/1658113/)

---

```
class Solution:
    def numTriplets(self, nums1: List[int], nums2: List[int]) -> int:
        sqr1, sqr2 = defaultdict(int), defaultdict(int)
        m, n = len(nums1), len(nums2)
        for i in range(m):
            sqr1[nums1[i]**2] += 1
        for j in range(n):
            sqr2[nums2[j]**2] += 1
            
        res = 0 
        for i in range(m-1):
            for j in range(i+1, m):
                if nums1[i]*nums1[j] in sqr2:
                    res += sqr2[nums1[i]*nums1[j]]
                    
        for i in range(n-1):
            for j in range(i+1, n):
                if nums2[i]*nums2[j] in sqr1:
                    res += sqr1[nums2[i]*nums2[j]]
        return res
```