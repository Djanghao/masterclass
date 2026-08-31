# Simple Solution with comments

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/surface-area-of-3d-shapes/solutions/4874034/](https://leetcode.com/problems/surface-area-of-3d-shapes/solutions/4874034/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(nm)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
# @param {Integer[][]} grid
# @return {Integer}
def surface_area(grid)
    ans = 0
    # add bottom face and top face
    ans = 0

    # sides
    y = 0
    while y < grid.size
        x = 0
        while x < grid[0].size
            height = grid[y][x]
            if height > 0
                # add front and back face
                ans += 2

                # add north face
                if y == 0
                    ans += height
                elsif grid[y - 1][x]
                    if grid[y - 1][x] < height
                        ans += height - grid[y - 1][x] 
                    end
                end

                # add south face
                if !grid[y + 1]
                    ans += height
                elsif grid[y + 1][x]
                    if grid[y + 1][x] < height
                        ans += height - grid[y + 1][x] 
                    end
                end
 
                # add west face
                if x == 0
                    ans += height
                elsif grid[y][x - 1]
                    if grid[y][x - 1]< height
                        ans += height - grid[y][x - 1]
                    end
                end

                # add east face
                if !grid[y][x + 1]
                    ans += height
                elsif grid[y][x + 1]
                    if grid[y][x + 1]< height
                        ans += height - grid[y][x + 1]
                    end
                end
            end
            x += 1
        end

        y += 1
    end

    ans
end
```