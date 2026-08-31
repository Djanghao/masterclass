# Array

**Author:** pratik1707
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-sql/solutions/4414383/](https://leetcode.com/problems/design-sql/solutions/4414383/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class SQL

=begin
    :type names: String[]
    :type columns: Integer[]
=end
    def initialize(names, columns)
        @tables = Hash.new
        @ids = Hash.new 
        for i in (0...names.length) do 
            col = columns[i]
            @tables[names[i]] = Array.new
            
        end 
        
    end


=begin
    :type name: String
    :type row: String[]
    :rtype: Void
=end
    def insert_row(name, row)       
        @tables[name] << row        
    end


=begin
    :type name: String
    :type row_id: Integer
    :rtype: Void
=end
    def delete_row(name, row_id)
        @tables[name][row_id-1] = nil 
    end


=begin
    :type name: String
    :type row_id: Integer
    :type column_id: Integer
    :rtype: String
=end
    def select_cell(name, row_id, column_id)       
        @tables[name][row_id-1][column_id-1]
    end


end

# Your SQL object will be instantiated and called as such:
# obj = SQL.new(names, columns)
# obj.insert_row(name, row)
# obj.delete_row(name, row_id)
# param_3 = obj.select_cell(name, row_id, column_id)
```