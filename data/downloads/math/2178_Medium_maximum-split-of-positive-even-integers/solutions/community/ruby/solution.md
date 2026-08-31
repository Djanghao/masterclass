# O(sqrt(n)) approach; O(1) to calculate the answer; O(sqrt(n)) to fill the array.

**Author:** galvin
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-split-of-positive-even-integers/solutions/4212091/](https://leetcode.com/problems/maximum-split-of-positive-even-integers/solutions/4212091/)

---

# Intuition
This is an O(1) problem other than filling & returning the answer. That is, if we could submit two integers as the answer, the first being the number of consecutive multiples of 2 starting with 2, and the other being the final value, this would be O(1)

# Approach
Calculate the answer in O(1) using the fact that the sum 1+2+3+...+n = n*(n+1)/2, so twice this (the sum of the first several evens) is n*(n+1), then calculate the last term.

# Complexity
- Time complexity:
O(1) to calculate the answer; O(sqrt(final_sum)) to fill the array because that's the size of the array.

- Space complexity:
O(sqrt(final_sum)), which is the size of the answer

# Code
```
# @param {Integer} final_sum
# @return {Integer[]}
def maximum_even_split(final_sum)
  return [] if final_sum % 2 == 1
  n = final_sum
  k = ((-1 + (1+4*n)**0.5)/2).to_i
  ans = []
  1.upto(k-1) do |i|
    ans.append(2*i)
  end
  ans.append n - (k-1)*k
  return ans
end
```