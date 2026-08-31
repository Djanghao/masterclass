# Typical Matrix Shenanigans. O(n) O(1)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/solutions/4370802/](https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/solutions/4370802/)

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
# @param {Integer[][]} mat
# @param {Integer} k
# @return {Boolean}
def are_similar(mat, k)
    @row_size = mat[0].size
    @max_x = mat[0].size - 1
    if k > @row_size
        k = k % @row_size
    end

    # Traverse mat and gets updated position for each element.
    # If the value of the new position doesnt match the current element value
    # return false.
    mat.each_with_index do |row, y|
        row.each_with_index do |col_val, x|
            new_x = updated_position x, k
            if mat[y][new_x] != col_val
                return false
            end
        end
    end

    true
end

# Calculates new x position based on k.
def updated_position x, k
    new_x = x
    if x.even?
        new_x = x + k
    else
        new_x = x - k
    end

    if new_x > (@max_x)
        new_x = new_x % @row_size
    elsif new_x < 0
        new_x = new_x + @row_size
    end

    new_x
end


```