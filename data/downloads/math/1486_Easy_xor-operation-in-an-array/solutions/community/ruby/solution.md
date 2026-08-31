# Ruby: Range, map, reduce.

**Author:** user9697N
**Votes:** 1
**Link:** [https://leetcode.com/problems/xor-operation-in-an-array/solutions/895818/](https://leetcode.com/problems/xor-operation-in-an-array/solutions/895818/)

---

##### Leetcode: 1486. XOR Operation in an Array.

Create range from 0 till n-1, map it into the array where each element calculated as double index plus start, and calculate all elements concatenation by XOR via reduce method.

Ruby code:
```Ruby
# Leetcode: 1486. XOR Operation in an Array.
# https://leetcode.com/problems/xor-operation-in-an-array/
# Runtime: 56 ms, faster than 30.43% of Ruby online submissions for XOR Operation in an Array.
# Memory Usage: 209.8 MB, less than 26.09% of Ruby online submissions for XOR Operation in an Array.
# @param {Integer} n
# @param {Integer} start
# @return {Integer}
def xor_operation(n, start)
    (0...n).map{|x| start+x*2}.reduce(&:^)
end
```