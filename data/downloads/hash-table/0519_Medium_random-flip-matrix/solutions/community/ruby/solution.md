# Pretty ruby -- same as other solutions

**Author:** lucasgb
**Votes:** 0
**Link:** [https://leetcode.com/problems/random-flip-matrix/solutions/955501/](https://leetcode.com/problems/random-flip-matrix/solutions/955501/)

---

Nothing revolutionary here, other solutions use the same logic.

```
class Solution
=begin
    :type n_rows: Integer
    :type n_cols: Integer
=end
  def initialize(n_rows, n_cols)
    @x = n_rows
    @y = n_cols
    @base = @x * @y
    @zero_coords = {}
  end

=begin
    :rtype: Integer[]
=end
  def flip()
    @base -= 1
    r = rand(0..@base);
    x = @zero_coords[r] || r
    @zero_coords[r] = @zero_coords[@base] || @base
    return [x / @y, x % @y]
  end

=begin
    :rtype: Void
=end
  def reset()
    @base = @x * @y
    @zero_coords = {}
  end
end

# Your Solution object will be instantiated and called as such:
# obj = Solution.new(n_rows, n_cols)
# param_1 = obj.flip()
# obj.reset()
```