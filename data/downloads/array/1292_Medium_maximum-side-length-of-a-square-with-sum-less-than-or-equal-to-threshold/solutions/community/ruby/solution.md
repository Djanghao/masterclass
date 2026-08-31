# Prefix Sum. Comments Included.

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/solutions/4427200/](https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/solutions/4427200/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n**2)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
# @param {Integer[][]} mat
# @param {Integer} threshold
# @return {Integer}
def max_side_length(mat, threshold)
    @mat = mat
    @threshold = threshold
    @max_side = 0
    @m = mat.size
    @n = mat[0].size

    # Prefix Sum our Matrix.
    y = 0
    while y < @m
        x = 0
        sum = 0
        while x < @n
            sum += mat[y][x]
            mat[y][x] = sum
            x += 1
        end

        y += 1
    end

    # Traverse matrix and attempt to update @max_side by calculating the largest square
    # whose sum is less than threshold.
    max_size_square = [@m,@n].min
    y = 0
    while y < @m
        x = 0
        while x < @n
            dfs_square y, x, @max_side + 1, max_size_square
            x += 1
        end

        y += 1
    end

    
    @max_side
end


def dfs_square y, x, current_level = 1, max_level
    current_y = y
    current_x = x + current_level - 1
    bounds_y = y + current_level
    

    if current_x >= @n || current_y >= @m || bounds_y > @m
        return
    end

    sum = 0
    while current_y < bounds_y 
        sum += @mat[current_y][current_x] 
        # Reduce sum by previous prefix sum entry.
        if current_x-current_level > 0
            sum -= @mat[current_y][current_x-current_level].to_i
        end

        current_y += 1
    end

  

    if sum <= @threshold and @max_side < current_level
        @max_side = current_level
    end

    if sum > @threshold || current_level == (max_level)
        return
    end


    dfs_square y, x, current_level+1, max_level
end

```