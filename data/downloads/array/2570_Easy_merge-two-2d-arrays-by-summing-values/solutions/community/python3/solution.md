# [Python] Two pointers | merge two sorted arrays

**Author:** jianpingbadao
**Votes:** 13
**Link:** [https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/3204945/](https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/3204945/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Merge two sorted array.

# Approach
<!-- Describe your approach to solving the problem. -->
Two pointers.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n + m)$$, where $$n$$ and $$m$$ stand for the length of two input arrays.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n + m)$$

# Code
```
class Solution:
    def mergeArrays(self, nums1: List[List[int]], nums2: List[List[int]]) -> List[List[int]]:
        res = []
        i = 0
        j = 0
        while i < len(nums1) or j < len(nums2):
            if i == len(nums1):
                res.append(nums2[j])
                j += 1
            elif j == len(nums2):
                res.append(nums1[i])
                i += 1
            else:
                if nums1[i][0] == nums2[j][0]:
                    res.append([nums1[i][0], nums1[i][1] + nums2[j][1]])
                    i += 1
                    j += 1
                elif nums1[i][0] < nums2[j][0]:
                    res.append(nums1[i])
                    i += 1
                else:
                    res.append(nums2[j])
                    j += 1
        return res

```