# Easy to follow using Set

**Author:** a-mit
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/solutions/4595159/](https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/solutions/4595159/)

---

# Code
```
# @param {Integer[][]} matrix
# @return {Boolean}
def check_valid(matrix)
  size = matrix.size
  row_sets = Array.new(size) { Set.new }
  col_sets = Array.new(size) { Set.new }

  matrix.each_with_index do |row, row_index|
    row.each_with_index do |val, col_index|
      row_set = row_sets[row_index]
      col_set = col_sets[col_index]

      return false if row_set.include?(val) || col_set.include?(val)
      row_set.add(val)
      col_set.add(val)
    end
  end

  true 
end
```