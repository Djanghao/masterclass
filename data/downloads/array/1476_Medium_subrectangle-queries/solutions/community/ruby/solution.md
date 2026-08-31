# Ruby Solution

**Author:** hisully
**Votes:** 2
**Link:** [https://leetcode.com/problems/subrectangle-queries/solutions/746729/](https://leetcode.com/problems/subrectangle-queries/solutions/746729/)

---

```
class SubrectangleQueries
  def initialize(rectangle)
    @rectangle = rectangle
  end
  
  def update_subrectangle(row1, col1, row2, col2, new_value)
    sub_row = Array.new((col2+1-col1), new_value)
    (row1..row2).each do |row_index|
      @rectangle[row_index][col1..col2] = sub_row
    end
  end

  def get_value(row, col)
    @rectangle[row][col]
  end  
end
```