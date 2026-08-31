# Granular Solution

**Author:** Chris1337
**Votes:** 1
**Link:** [https://leetcode.com/problems/image-smoother/solutions/4426514/](https://leetcode.com/problems/image-smoother/solutions/4426514/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(nm)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(nm)
# Code
```
# @param {Integer[][]} img
# @return {Integer[][]}
def image_smoother(img)
    max_x = img[0].size - 1
    max_y = img.size - 1
    new_grid = Array.new(img.size) { Array.new(img[0].size)}

    y = 0
    while y < img.size
        x = 0        
        while x < img[0].size
            ele_sum = 0
            ele_count = 0
            if x > 0
                ele_sum += img[y][x-1]
                ele_count += 1
            end

            ele_sum += img[y][x]
            ele_count += 1

            if img[y][x+1]
                ele_sum += img[y][x+1]
                ele_count += 1
            end
            
            if y < max_y
                if x > 0
                    ele_sum += img[y + 1][x-1]
                    ele_count += 1
                end

                if img[y + 1][x]
                    ele_sum += img[y + 1][x]
                    ele_count += 1
                end

                if img[y + 1][x+1]
                    ele_sum += img[y + 1][x+1]
                    ele_count += 1
                end
            end

            if y > 0
                if x > 0
                    ele_sum += img[y - 1][x-1]
                    ele_count += 1
                end

                if img[y - 1][x]
                    ele_sum += img[y - 1][x]
                    ele_count += 1
                end

                if img[y - 1][x+1]
                    ele_sum += img[y - 1][x+1]
                    ele_count += 1
                end
            end

            new_grid[y][x] = (ele_sum/ele_count.to_f).floor
            x += 1
        end


        y += 1
    end

    new_grid
end
```