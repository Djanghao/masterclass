# Explanation with drawings. Ruby 100%.

**Author:** user9697N
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-uncommon-subsequence-i/solutions/532010/](https://leetcode.com/problems/longest-uncommon-subsequence-i/solutions/532010/)

---

#### Leetcode: 521.

The key to understanding this task is that `AA` should not be any subsequence of the `A`.


![explanation of lc521 with equal stiring and one string will be bigger than other](./images/0.png)


```Ruby
# 521. Longest Uncommon Subsequence I
# https://leetcode.com/problems/longest-uncommon-subsequence-i/
# Runtime: 28 ms, faster than 100.00% of Ruby online submissions for Longest Uncommon Subsequence I .
# Memory Usage: 9.2 MB, less than 100.00% of Ruby online submissions for Longest Uncommon Subsequence I .
# @param {String} a
# @param {String} b
# @return {Integer}
def find_lu_slength(a, b)
    return a.size if a.size > b.size
    return -1 if a == b
    b.size
end
```