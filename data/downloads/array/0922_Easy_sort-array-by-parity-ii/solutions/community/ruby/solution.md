# Ruby: Generate arrays, zip, flatten.

**Author:** user9697N
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-array-by-parity-ii/solutions/1491703/](https://leetcode.com/problems/sort-array-by-parity-ii/solutions/1491703/)

---

# Leetcode: 922. Sort Array By Parity II.

**Ruby: Generate arrays, zip, flatten.**

Create array of even and odd elements, zip to arrays to create even and odd pairs, flatten array of pairs in a flat arrays. Thus first elemen would be even and second is odd, index zero element would be first and it is even, index one element would be odd.

Ruby code:
```Ruby
# Leetcode: 922. Sort Array By Parity II.
# https://leetcode.com/problems/sort-array-by-parity-ii/
# = = = = = = =
# Accepted.
# Thanks God!
# = = = = = = =
# https://leetcode.com/explore/challenge/card/september-leetcoding-challenge-2021/639/week-4-september-22nd-september-28th/3990/
# @param {Integer[]} nums
# @return {Integer[]}
def sort_array_by_parity_ii(nums)
  even = nums.select(&:even?)
  odd = nums.select(&:odd?)
  even.zip(odd).flatten
end
```
