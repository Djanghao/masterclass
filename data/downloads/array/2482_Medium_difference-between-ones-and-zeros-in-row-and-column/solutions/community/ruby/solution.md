# Ruby || T/S O(m*n)/O(m+n) || 4-liner

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/solutions/4402920/](https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/solutions/4402920/)

---

# Complexity
- Time complexity:
$$O(m*n)$$

- Space complexity:
$$O(m+n)$$ - if not count output matrix

# Code
```ruby
def ones_minus_zeros(grid)
    h, w = grid.size, grid.first.size
    hpw = h + w
    rsums, csums = [grid, grid.transpose].collect {|matrix| matrix.collect(&:sum) }
    h.times.collect {|ri| w.times.collect {|ci|  2*(rsums[ri] + csums[ci]) - hpw }}
end
```