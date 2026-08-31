# Beats 100%. O(1) memory, one traversal of matrix. No recursion, union find or any algo required.

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-servers-that-communicate/solutions/4172774/](https://leetcode.com/problems/count-servers-that-communicate/solutions/4172774/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(mn)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
# @param {Integer[][]} grid
# @return {Integer}
def count_servers(grid)
    # The trick to O(1) memory is to store the unconnected found 1's in the top row.
    # This also makes it possible to go over the entire matrix once.

    # First row.
    count = 0
    one_found_in_row = false    
    one_found_but_not_connected = false
    grid[0].each_with_index do |col, i|
        if col == 1
            if one_found_in_row
                count += 1
            elsif one_found_but_not_connected
                count += 2
                one_found_in_row = true
                one_found_but_not_connected = false
            else
                one_found_but_not_connected = i
            end
        end
    end

    if one_found_but_not_connected
        grid[0][one_found_but_not_connected] = 2
    end

    # Second row and onward. 
    grid[1..-1].each_with_index do |row, y_index|
        one_found_in_row = false
        one_found_but_not_connected = false
        row.each_with_index do |col, x_index|

            if col == 1
                # Check there is a 1 in top row which is found but unconnected.
                if grid[0][x_index] == 2
                    count += 2
                    grid[0][x_index] = 1

                    # Account for edge case where we have a 1 in this row which unconnected.
                    if one_found_but_not_connected
                        count += 1
                        grid[0][one_found_but_not_connected] = 1
                        one_found_but_not_connected = false
                    end
                    
                    one_found_in_row = true
                    next

                # Check there is a 1 in top row which is found and connected.
                elsif grid[0][x_index] == 1
                    count += 1

                    # Account for edge case where we have a 1 in this row which unconnected.
                    if one_found_but_not_connected
                            count += 1
                        grid[0][one_found_but_not_connected] = 1
                        one_found_but_not_connected = false
                    end

                    one_found_in_row = true
                    next
                end
                
                # Check if prev 1 found and connected                
                if one_found_in_row
                    count += 1
                    grid[0][x_index] = 1
                    next
                # Check if prev 1 found but not connected
                elsif one_found_but_not_connected
                    count += 2
                    grid[0][one_found_but_not_connected] = 1
                    grid[0][x_index] = 1
                    one_found_in_row = true
                    one_found_but_not_connected = false
                    next
                # Set as found but not connected.
                else
                    one_found_but_not_connected = x_index
                end
            end
        end
        
        if one_found_but_not_connected
            grid[0][one_found_but_not_connected] = 2
        end    
    end

    count
end




```