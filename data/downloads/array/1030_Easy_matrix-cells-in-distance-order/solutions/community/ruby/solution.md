# Ruby solution: 2 loops, sort and map.

**Author:** user9697N
**Votes:** 2
**Link:** [https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/767339/](https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/767339/)

---

##### Leetcode: 1030. Matrix Cells in Distance Order.

Algorithm of this solution: 
- Iterate all cells of a matrix in two loops,  first loop is external second is nested.
- During iteration fill array with parks, cell coordinates and distance from input cell.
- Sort array by second element of a pair.
- Map array to leave only cell coordinate as an element of the array.
- Return this array as result.

Ruby code:
```Ruby
# Leetcode: 1030. Matrix Cells in Distance Order.
# https://leetcode.com/problems/matrix-cells-in-distance-order/
# Runtime: 208 ms, faster than 50.00% of Ruby online submissions for Matrix Cells in Distance Order.
# Memory Usage: 14.3 MB, less than 50.00% of Ruby online submissions for Matrix Cells in Distance Order.
# @param {Integer} r
# @param {Integer} c
# @param {Integer} r0
# @param {Integer} c0
# @return {Integer[][]}
def all_cells_dist_order(r, c, r0, c0)
    array = []
    (0...r).each do |row|
        (0...c).each do |cell|
            array.push([[row,cell], (row-r0).abs + (cell-c0).abs])
        end
    end
    array.sort_by(&:last).map(&:first)
end
```