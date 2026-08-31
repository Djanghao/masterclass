# Ruby: x xor x = 0; 0 xor x = x;

**Author:** user9697N
**Votes:** 3
**Link:** [https://leetcode.com/problems/single-number/solutions/1773439/](https://leetcode.com/problems/single-number/solutions/1773439/)

---

## Leetcode: 136. Single Number.

 
**Ruby: x xor x = 0; 0 xor x = x;**

This task is based on the rule that `x xor x = 0` and `0 xor x = x`. Because there is only one unique number and set of pairs in the input, all pairs would be 0, and 0 xor unique number would be that unique number.


Combine all elements of input by applying xor binary operation using [Enumerable#reduce](https://apidock.com/ruby/Enumerable/reduce).


Let's try.

Ruby code:
```Ruby
# Leetcode: 136. Single Number.
# https://leetcode.com/problems/single-number/
# = = = = = = =
# Accepted.
# Thanks God!
# = = = = = = =
# Runtime: 133 ms, faster than 42.53% of Ruby online submissions for Single Number.
# Memory Usage: 212.4 MB, less than 55.56% of Ruby online submissions for Single Number.
# @param {Integer[]} nums
# @return {Integer}
def single_number(nums)
  nums.reduce(&:^)
end
```
