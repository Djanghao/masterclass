# Ruby solution with comments

**Author:** hirens20
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-excel-sum-formula/solutions/5534957/](https://leetcode.com/problems/design-excel-sum-formula/solutions/5534957/)

---

# Code
```
class Excel

=begin
    :type height: Integer
    :type width: Character
=end
    def initialize(height, width)
        @height = height
        @width = width
        # +1 to convert 0-based index to a one-base count. Ex: 'A'.ord - 'A'.ord + 1 = 0 + 1 = 1
        @cells = Array.new(height) { Array.new(width.ord - 'A'.ord + 1, 0) } # matrix
        @formulas = {} # hash to store formula
    end


=begin
    :type row: Integer
    :type column: Character
    :type val: Integer
    :rtype: Void
=end
    # sets a cell's value and clears any formula associated with it
    def set(row, column, val)
        clear_formula(row, column)
        @cells[row - 1][column.ord - 'A'.ord] = val
    end


=begin
    :type row: Integer
    :type column: Character
    :rtype: Integer
=end
    # retrieves a cell's value, computing it if it has an associated formula 
    def get(r, c)
        @formulas.key?([r, c]) ? get_sum(r, c) : @cells[r - 1][c.ord - 'A'.ord]
    end


=begin
    :type row: Integer
    :type column: Character
    :type numbers: String[]
    :rtype: Integer
=end
    # sets a sum of formula for a cell and computes the sum of the specified cells or ranges
    def sum(r, c, strs)
        clear_formula(r, c)
        @formulas[[r, c]] = parse_sum(strs)
        get_sum(r, c)
    end

    private

    # clears any existing formula for a cell
    def clear_formula(r, c)
        @formulas.delete([r, c])
    end

    # parses the sum formula into individual cell references.
    def parse_sum(strs)
        ranges = []
        strs.each do |str|
          if str.include?(':')
            start_cell, end_cell = str.split(':')
            # expand_range because we want to consider all the cells in the rectangle
            ranges += expand_range(start_cell, end_cell)
          else
            ranges << str
          end
        end
        ranges
    end

    # expands a range into individual cell references
    def expand_range(start_cell, end_cell)
        start_r, start_c = cell_to_rc(start_cell)
        end_r, end_c = cell_to_rc(end_cell)
        cells = []
        (start_r..end_r).each do |r|
            (start_c..end_c).each do |c|
                cells << rc_to_cell(r, c)
            end
        end
        cells
    end

    # converts a cell identifier to row and column indicies
    def cell_to_rc(cell)
        c = cell[0].ord - 'A'.ord
        r = cell[1..-1].to_i
        [r, c]
    end

    # converts row and column indicies back to cell identifier 
    def rc_to_cell(r, c)
        (c + 'A'.ord).chr + r.to_s
    end

    # sum of all cells specified in formula
    def get_sum(r, c)
        ranges = @formulas[[r, c]]
        total = 0
        ranges.each do |cell|
            cell_r, cell_c = cell_to_rc(cell)
            total += get(cell_r, (cell_c + 'A'.ord).chr)
        end
        total
    end



end

# Your Excel object will be instantiated and called as such:
# obj = Excel.new(height, width)
# obj.set(row, column, val)
# param_2 = obj.get(row, column)
# param_3 = obj.sum(row, column, numbers)
```