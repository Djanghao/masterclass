# Ruby O(N + V) - Count remainders in 2 lines

**Author:** rmuntani
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/solutions/5990508/](https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/solutions/5990508/)

---

# Intuition
Given N and the value V, the minimum positive value we can turn N into is N % V. We can also turn N into (N % V) + k * V (where k is a positive number).

We can turn all of the numbers to their minimum positive value presented above. If two numbers have the same minimum positive value, we can turn one of them into N + V. If a third number has the same minimum positive value as them, we can turn it into N + 2V, and so forth.

By getting the count of remainders, we can get the maximum number for each remainder. As an example, given remainder M with count 8, and remainder N with count 3, the maximum values we can get are M + 7V and N + 2V. So M + 8V and N + 3V are certainly missing from the array, as we can't get to them.

By calculating the maximum value for each reminder and getting the minimum out of all of them, we can get MEX.

Example:

```
nums = [1,-10,7,13,6,8], value = 5
Remainders are:
[1,0,2,3,1,3] ->
0 has count 1 -> we only have 0. 5 is missing
1 has count 2 -> we can get 1 and 6. 11 is the first one missing
2 has count 1 -> we can get 2 only. 7 is missing
3 has count 2 -> we can get 3 and 8. 13 is missing
4 has count 0 -> 4 is missing.

4 is the minimum missing, so we choose 4.
```

# Approach
1) count the remainders
2) get the minimum numbers that's missing by doing (remainder_count) * value + remainder

# Complexity
- Time complexity:
O(N + V) - we see each number once, and we see all of the remainders once. 

- Space complexity:
O(V) - we store up to V counts of remainders

# Code
```ruby []
# @param {Integer[]} nums
# @param {Integer} value
# @return {Integer}
def find_smallest_integer(nums, value)
   rem_count = nums.map { _1 % value }.tally 
   (0..value - 1).map { |n| (rem_count[n] || 0) * value + n }.min
end
```