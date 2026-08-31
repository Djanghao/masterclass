# Ruby | 100% | Bit mask

**Author:** AgentIvan
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-rows-covered-by-columns/solutions/2525118/](https://leetcode.com/problems/maximum-rows-covered-by-columns/solutions/2525118/)

---

#### Runtime: 192 ms, faster than 100.00% of Ruby online submissions
#### Memory Usage: 211.1 MB, less than 100.00% of Ruby online submissions
```ruby
def maximum_rows(mat, cols)
  m, n, max = mat.length, mat[0].length, 0
  ints = mat.map{ _1.reduce(0) { |s, n| s * 2 + n }}  # int form line of bits
  [*0...n].combination(cols).map { |comb|             # comibations of columns of `cols` length 
    mask = comb.reduce(0) { |sum, n| sum + (1 << n) } # convert to bit mask (reversed order of bits doesn't metter)
    ints.count { |i| mask & i == i }                  # count of mask covers i
  }.max                                               # return max
end
```