# Python 3 || 4 lines, Counters, w/ explanation || T/S: 98% / 23%

**Author:** Spaulding_
**Votes:** 12
**Link:** [https://leetcode.com/problems/find-the-integer-added-to-array-ii/solutions/5084752/](https://leetcode.com/problems/find-the-integer-added-to-array-ii/solutions/5084752/)

---

Here's the intuition:

- This problem entails finding the *subjective mapping F* of `nums2` into `nums1` such that for all *F(n2)* = *n1*, *n2 - n1* is constant for that mapping, and that constant is the minimum for all such mappings.
- Also, because `nums2` has exactly two less elements that `nums1`, the greatest element in `nums2` must be mapped to one of the three greatest elements in `nums1`, and the common difference we seek must be one of these three differences.

Here's the plan:

1. We determine `Counter(nums2)` and  `mx = max(nums2)`.
2. We use the heapq method `nlargest` to determine the three greatest elements in `nums1`.
3. We iterate through these three elements `n`, in each case adjusting the values in `nums1` by the difference `mx - n`, determining `ctr1` for this adjusted list, and then use *Counter comparison* on `ctr1` and `ctr2` to determine whether this difference is our answer.


```
class Solution:
    def minimumAddedInteger(self, nums1: List[int], nums2: List[int]) -> int:

        ctr2, mx = Counter(nums2), max(nums2)

        for n in nlargest(3, nums1):

            ctr1 = Counter(map(lambda x: x + mx - n, nums1 ))
            if ctr1 >= ctr2: return mx - n
```
[https://leetcode.com/problems/find-the-integer-added-to-array-ii/submissions/1244318375/](https://leetcode.com/problems/find-the-integer-added-to-array-ii/submissions/1244318375/)


I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(nums1)`. (Note that for all uses of *nlargest(k, list)*, *k* is always 3)