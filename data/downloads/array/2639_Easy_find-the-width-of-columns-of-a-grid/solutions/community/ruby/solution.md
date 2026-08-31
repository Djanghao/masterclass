# No helper methods

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/4381999/](https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/4381999/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
# @param {Integer[][]} grid
# @return {Integer[]}
def find_column_width(grid)
    answer = Array.new(grid[0].size) { -1 }
    grid.each_with_index do |row, y|
        row.each_with_index do |col, x|
            if col.to_s.size > answer[x]
                answer[x] = col.to_s.size
            end
        end
    end

    answer
end
```