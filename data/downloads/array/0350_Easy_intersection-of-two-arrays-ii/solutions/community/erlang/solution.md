# Easy erlang solution

**Author:** wt2080
**Votes:** 0
**Link:** [https://leetcode.com/problems/intersection-of-two-arrays-ii/solutions/4326159/](https://leetcode.com/problems/intersection-of-two-arrays-ii/solutions/4326159/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

To remain duplicated numbers in Nums1, used lists:subtract.

Ans = Nums1 - (Nums1 - Nums2)

# Code
```
-spec intersect(Nums1 :: [integer()], Nums2 :: [integer()]) -> [integer()].
intersect(Nums1, Nums2) ->
    lists:subtract(
        Nums1,
        lists:subtract(Nums1, Nums2)
    ).
```