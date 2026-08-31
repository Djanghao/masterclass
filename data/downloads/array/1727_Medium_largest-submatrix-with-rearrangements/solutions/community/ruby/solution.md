# Ruby || O(m*n*log(n))/O(1)

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-submatrix-with-rearrangements/solutions/4331849/](https://leetcode.com/problems/largest-submatrix-with-rearrangements/solutions/4331849/)

---


# Complexity
- Time complexity:
$$O(m*n*log(n))$$

- Space complexity:
$$O(1)$$

# Code
```ruby
class Numeric
    def max(v) = (self < v ? v : self)
end

def largest_submatrix(matrix)
    h, w = matrix.size, matrix.first.size
    matrix.each_cons(2).inject(matrix.first.filter(&:positive?).size) {|res, (row1, row2)|
        row1.each_with_index {|v, cidx| row2[cidx] += v if row2[cidx].positive? }
        row2.sort.each_with_index.inject(res) {|res1, (v, i)| res1.max(v * (w - i))}
    }
end

```