# Ruby. O(n). With exmplanation.

**Author:** user9697N
**Votes:** 1
**Link:** [https://leetcode.com/problems/range-addition-ii/solutions/554261/](https://leetcode.com/problems/range-addition-ii/solutions/554261/)

---

#### Leetcode: 598. Range Addition II.


Let's try some optimization. Elements increasing always starts from top left element. This mins that maximum values will be in rectangle with width of minimum `A`, and height of minimum `B`, from the `ops` array of `[A,B]` pairs.

To get save in variable minimum, need initialize this variable with maximum. Maximum for `A` is `m`. And for `B` in `n`. 

```Ruby
# 598. Range Addition II
# https://leetcode.com/problems/range-addition-ii/
# Runtime: 28 ms, faster than 100.00% of Ruby online submissions for Range Addition II.
# Memory Usage: 9.5 MB, less than 100.00% of Ruby online submissions for Range Addition II.
# @param {Integer} m
# @param {Integer} n
# @param {Integer[][]} ops
# @return {Integer}
def max_count(m, n, ops)
    min_a, min_b = m,n
    ops.each do |(a,b)|
        min_a = a if a < min_a
        min_b = b if b < min_b
    end
    min_a * min_b
end