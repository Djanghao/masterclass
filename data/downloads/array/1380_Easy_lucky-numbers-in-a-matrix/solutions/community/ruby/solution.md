# Ruby one-line solution using transpose - lazy

**Author:** kohbis
**Votes:** 2
**Link:** [https://leetcode.com/problems/lucky-numbers-in-a-matrix/solutions/841204/](https://leetcode.com/problems/lucky-numbers-in-a-matrix/solutions/841204/)

---

```ruby
# @param {Integer[][]} matrix
# @return {Integer[]}
def lucky_numbers (matrix)
  matrix.transpose.map {|row| row.max } & matrix.map {|col| col.min }
end
```