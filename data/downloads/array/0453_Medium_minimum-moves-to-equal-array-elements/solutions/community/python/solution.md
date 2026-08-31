# 1 line solution; beats 98% O(N) time and 96% O(1) space; easy to understand

**Author:** sahajamatya
**Votes:** 27
**Link:** [https://leetcode.com/problems/minimum-moves-to-equal-array-elements/solutions/1909521/](https://leetcode.com/problems/minimum-moves-to-equal-array-elements/solutions/1909521/)

---

Let,
	`k` = number of elements in `nums`
	`s` = sum of elements in `nums` 
	`m` = minumum number of moves 
	`e` = element at all indices in final array (Eg., [a, b, d, a, c] will turn to [e, e, e, e, e])


Sum of all elements in the final array is going to be `k * e`.

On each move, the sum of the original array is going to increase by `k - 1`. So after `m` moves, the sum will increase by `m(k - 1)`. 

Hence, we have,
`s + m(k - 1) = k * e` ---- equation (i)

In this equation, `e` is the only unknown other than `m`. How can we find `e`? Whatever the smallest integer is in `nums`, plus the number of moves `m`, will be equal to `e`. This is because with each `m`, we only increment the value by 1. So, 

`min + m = e` ---- equation (ii)

Combining (i) and (ii), 

`s + m(k - 1) = k(min + m)`

Simplify for m, 

`m = s - (k * min)`

Hence, we return the `sum(nums)`, minus the product of the number of elements in nums and the smallest element in `nums`.
```
class Solution:
    def minMoves(self, nums: List[int]) -> int:
        return sum(nums) - (len(nums) * min(nums))
```