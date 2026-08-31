# 🧮 Simple Golang Solution with a(n) (overly verbose) Proof 🧮

**Author:** funkeyfreak
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-or-of-all-subsequence-sums/solutions/3462034/](https://leetcode.com/problems/bitwise-or-of-all-subsequence-sums/solutions/3462034/)

---

# Intuition and Proof
Consider the `subsequenceSumOr` function. Let `S` be the set of all possible subarrays of the input array `nums`. For any `s` in `S`, let `sum(s)` denote the sum of the elements in `s`. 

We will prove by induction on the length of `nums` that `subsequenceSumOr(nums)` correctly computes the bitwise OR of `sum(s)` for all `s` in `S`. 

For the base case `len(nums) = 0`, the only subarray of `nums` is the empty subarray, which has sum `0`. Therefore, `subsequenceSumOr(nums)` correctly computes the bitwise OR of `0`, which is `0`.

For the inductive step, assume that `subsequenceSumOr` correctly computes the bitwise OR of `sum(s)` for all `s` in `S` for an input array of length `n`. Let `nums` be an input array of length `n+1`, and let `last` be the last element of `nums`.

Let `T` be the set of all possible subarrays of the first `n` elements of `nums`. For any `t` in `T`, let `sum(t)` denote the sum of the elements in `t`.

Note that `S` consists of `T` together with all subarrays of `nums` that include `last`. Therefore, to compute the bitwise OR of `sum(s)` for all `s` in `S`, we must consider the bitwise OR of two sets of values:

1. The bitwise OR of `subsequenceSumOr(nums[:n])` with each `sum(s)` that includes `last`.
2. The bitwise OR of `sum(t)` for all `t` in `T`.

The bitwise OR of `sum(t)` for all `t` in `T` can be computed recursively using the `subsequenceSumOr` function on the first `n` elements of `nums`.

To compute the bitwise OR of `subsequenceSumOr(nums[:n])` with each `sum(s)` that includes `last`, we can use the bitwise OR operation to combine the result of `subsequenceSumOr(nums[:n])` with `last` and the result of `subsequenceSumOr(nums[:n])` shifted left by one bit.

Therefore, `subsequenceSumOr(nums)` correctly computes the bitwise OR of `sum(s)` for all `s` in `S`. 

Q.E.D

# Complexity
- Time complexity:
$$O(n)$$ where n is `len(nums)`


- Space complexity:
$$O(1)$$

# Code
```
func subsequenceSumOr(nums []int) int64 {
  var sum int64
  var res int64

  for _, num := range nums {
    sum += int64(num)
    res |= sum | int64(num)
  }

  return res
}
```