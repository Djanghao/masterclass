# Ruby solution.

**Author:** neelarunabh
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximal-rectangle/solutions/5018908/](https://leetcode.com/problems/maximal-rectangle/solutions/5018908/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Character[][]} matrix
# @return {Integer}
def maximal_rectangle(matrix)
    return 0 if matrix.nil? || matrix.length == 0 || matrix[0].length == 0
    
    m = matrix.length
    n = matrix[0].length
    
    heights = Array.new(n, 0)
    left_boundaries = Array.new(n, 0)
    right_boundaries = Array.new(n, n)
    
    max_rectangle = 0
    
    (0...m).each do |i|
        left = 0
        right = n
        
        update_heights_and_left_boundaries(matrix[i], heights, left_boundaries, left)
        
        update_right_boundaries(matrix[i], right_boundaries, right)
        
        max_rectangle = calculate_max_rectangle(heights, left_boundaries, right_boundaries, max_rectangle)
    end
    
    max_rectangle
end

def update_heights_and_left_boundaries(row, heights, left_boundaries, left)
    (0...heights.length).each do |j|
        if row[j] == '1'
            heights[j] += 1
            left_boundaries[j] = [left_boundaries[j], left].max
        else
            heights[j] = 0
            left_boundaries[j] = 0
            left = j + 1
        end
    end
end

def update_right_boundaries(row, right_boundaries, right)
    (right_boundaries.length - 1).downto(0) do |j|
        if row[j] == '1'
            right_boundaries[j] = [right_boundaries[j], right].min
        else
            right_boundaries[j] = right
            right = j
        end
    end
end

def calculate_max_rectangle(heights, left_boundaries, right_boundaries, max_rectangle)
    (0...heights.length).each do |j|
        width = right_boundaries[j] - left_boundaries[j]
        area = heights[j] * width
        max_rectangle = [max_rectangle, area].max
    end
    max_rectangle
end
```