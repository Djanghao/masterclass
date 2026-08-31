# Ruby: Two data structures.

**Author:** user9697N
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-good-ways-to-split-a-string/solutions/1155174/](https://leetcode.com/problems/number-of-good-ways-to-split-a-string/solutions/1155174/)

---

## Leetcode: 1525. Number of Good Ways to Split a String.

**Ruby: Two data structures.**

Two data structures are used to solve this problem, left one and right one, in left data structure stores number of distinct letters till current index (including), the right data structure stores how many distinct letters after current index (including). Iterate over all consecutive pairs, and if left value for left pair member is equal for right value for right member increase the good pairs counter.     

Ruby code:
```Ruby
# Leetcode: 1525. Number of Good Ways to Split a String.
# https://leetcode.com/problems/number-of-good-ways-to-split-a-string/
# Runtime: 240 ms, faster than 100.00% of Ruby online submissions for Number of Good Ways to Split a String.
# Memory Usage: 219.9 MB, less than 100.00% of Ruby online submissions for Number of Good Ways to Split a String.
# Thanks God!
# @param {String} s
# @return {Integer}
def num_splits(s)
    @s = s
    l = left()
    r = right()
    counter = 0
    (1...@s.size).each do |i|
        counter += 1 if l[i-1] == r[i]
    end
    counter
end
def left()
    h = {}
    ans = Array.new(@s.size)
    @s.size.times do |i|
        h[@s[i]] = true
        ans[i] = h.keys.size
    end
    ans
end
def right()
    h = {}
    ans = Array.new(@s.size)
    (0...@s.size).reverse_each do |i|
        h[@s[i]] = true
        ans[i] = h.keys.size
    end
    ans
end
```