# Python two solutions: O(nlogn) sorting and O(n) counting sort

**Author:** mxmb
**Votes:** 11
**Link:** [https://leetcode.com/problems/minimize-product-sum-of-two-arrays/solutions/1282012/](https://leetcode.com/problems/minimize-product-sum-of-two-arrays/solutions/1282012/)

---

Simple one liner O(nlogn)
```python
def minProductSum(self, nums1: List[int], nums2: List[int]) -> int:
        return sum([x*y for x,y in zip(sorted(nums1), sorted(nums2, reverse=True))])
```

Make use of the fact that `1 <= nums1[i], nums2[i] <= 100` in order to achieve O(n) time
```python
def minProductSum(self, nums1: List[int], nums2: List[int]) -> int:
        nums1count, nums2count = [0]*101, [0]*101
        m, n = len(nums1), len(nums1count)
        
        # Fill counting arrays
        for i in range(m):
            nums1count[nums1[i]] += 1
            nums2count[nums2[i]] += 1
        
        # Meet in the middle and multiply at each end
        l, r, product_sum = 0, n-1, 0
        while 0 < r and l < n:
            if not nums1count[l]:
                l += 1
            if not nums2count[r]:
                r -= 1
            if 0 < r and l < n and nums1count[l] and nums2count[r]:
                min_ = min(nums1count[l], nums2count[r])
                product_sum += l*r*min_
                nums1count[l] -= min_
                nums2count[r] -= min_
        return product_sum
		
```