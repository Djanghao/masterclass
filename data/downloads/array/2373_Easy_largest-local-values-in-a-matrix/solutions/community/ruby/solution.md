# Ruby solution with nested for loops

**Author:** alanparmenter
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-local-values-in-a-matrix/solutions/2958603/](https://leetcode.com/problems/largest-local-values-in-a-matrix/solutions/2958603/)

---

# Code
```
# @param {Integer[][]} grid
# @return {Integer[][]}
def largest_local(grid)
  n = grid.size # take n from grid size
  array = [] # for grid traversal
  i_maxes = [] # for 1st dimension max
  j_maxes = [] # for 2nd dimension max
  for i in 0...n-2 # i for 1st dimension
    for j in 0...n-2 # j for 2nd dimension
      for k in 0..2 # k for 3x3 array
        array += grid[k+i][j..j+2] # grid traversal
      end
      j_maxes << array.max # maxes in 2nd dimension
      array = [] # reset for new grid traversal
    end
    i_maxes << j_maxes # collect 2nd dimension maxes in 1st dimension array
    j_maxes = [] # reset 2nd dimension maxes
  end
  i_maxes # return final answer
end
```