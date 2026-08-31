# Ruby: Enumerator of pairs, map into matrix, convert in flat array.

**Author:** user9697N
**Votes:** 1
**Link:** [https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/894491/](https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/894491/)

---

##### Leetcode: 1313. Decompress Run-Length Encoded List.


Create enumerator of pairs, map it into two dimensional array, make this array flat. 

Ruby code:
```Ruby
# Leetcode: 1313. Decompress Run-Length Encoded List.
# https://leetcode.com/problems/decompress-run-length-encoded-list/
# Runtime: 76 ms, faster than 41.82% of Ruby online submissions for Decompress Run-Length Encoded List.
# Memory Usage: 210.8 MB, less than 5.45% of Ruby online submissions for Decompress Run-Length Encoded List.
# @param {Integer[]} nums
# @return {Integer[]}
def decompress_rl_elist(nums)
    nums.each_slice(2).map{|(f,val)| [val]*f}.flatten
end
```