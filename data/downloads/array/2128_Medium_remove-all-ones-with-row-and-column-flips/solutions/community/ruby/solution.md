# Ruby Solution - checking pattern and anti-pattern

**Author:** eggtart1210
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips/solutions/1843677/](https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips/solutions/1843677/)

---

```
# @param {Integer[][]} grid
# @return {Boolean}
def remove_ones(grid)
    
    pattern = grid[0]
    antiPattern = invert(pattern.clone)
    
    rows = grid.length
    
    for i in 0...rows
        return false if grid[i] != pattern && grid[i] != antiPattern
    end
    
    return true
    
end

def invert(row)
    
   for i in 0...row.length
       row[i] == 0 ? (row[i] = 1) : (row[i] = 0)
   end
    
   return row
    
end
```