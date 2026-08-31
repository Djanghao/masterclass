# Solves for any size grid

**Author:** rezaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-a-square-with-the-same-color/solutions/6110174/](https://leetcode.com/problems/make-a-square-with-the-same-color/solutions/6110174/)

---

# Intuition
Find any 2x2 squares that are majority the same color.

# Approach
- Split the grid into multiple 2x2 grids.
- Supports arbitrarily sized square grid
- Check each individual grid for majority same color


# Complexity
- Time complexity: N-squared

- Space complexity: $$2n$$

# Code
```ruby []
# @param {Character[][]} grid
# @return {Boolean}
def can_make_square(grid)
    grids = make_2_by_2(grid)

    for grid in grids
        whites = grid.flatten.count('W')
        blacks = grid.flatten.count('B')

        return true if whites > 2 || blacks > 2
    end

    return false
end

def make_2_by_2(grid)
    grids = []

    (0..(grid.length-2)).each do |row_ndx|
        (0..(grid[row_ndx].length-2)).each do |col_ndx|
            puts "row: #{row_ndx}, col: #{col_ndx}"
            grids << [grid[row_ndx].slice(col_ndx,2), grid[row_ndx+1].slice(col_ndx,2)]
        end
    end
    
    return grids
end
```