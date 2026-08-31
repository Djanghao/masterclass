# Ruby solution using Stack

**Author:** hirens20
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-rectangle-in-histogram/solutions/4306803/](https://leetcode.com/problems/largest-rectangle-in-histogram/solutions/4306803/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
# @param {Integer[]} heights
# @return {Integer}
def largest_rectangle_area(heights)
    n = heights.length
    stack = [] # [index, height]
    max_area = 0
    heights.each_with_index do |h, i|
        start = i
        while !stack.empty? && stack[-1][1] > h
            index, height = stack.pop
            max_area = [max_area, height * (i - index)].max
            start = index
        end
        stack << [start, h]
    end

    stack.each do |i, h|
        max_area = [max_area, h * (n - i)].max
    end
    max_area
end
```