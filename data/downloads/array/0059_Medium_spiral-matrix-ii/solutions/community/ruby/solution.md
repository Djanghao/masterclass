# Ruby

**Author:** kishorecheruku
**Votes:** 1
**Link:** [https://leetcode.com/problems/spiral-matrix-ii/solutions/5319407/](https://leetcode.com/problems/spiral-matrix-ii/solutions/5319407/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer} n
# @return {Integer[][]}
def generate_matrix(n)
    i, j = 0, 0
    up, right, left, down = 0, 1, 2, 3

    up_side = 0
    right_side = n
    down_side = n
    left_side = -1
    direction = right
    value = 0
    arr = Array.new(n){ Array.new(n){ nil } }

    while value < n * n
        if direction == right
            while j < right_side
                value += 1
                arr[i][j] = value
                j += 1
            end
            i, j = i+1, j-1
            right_side -= 1
            direction = down
        elsif direction == down
            while i < down_side
                value += 1
                arr[i][j] = value
                i += 1
            end
            i, j = i - 1, j - 1
            down_side -= 1
            direction = left
        elsif direction == left
            while j > left_side
                value += 1
                arr[i][j] = value
                j -= 1
            end
            i, j = i - 1, j + 1
            left_side += 1
            direction = up
        else
            while i > up_side
                value += 1
                arr[i][j] = value
                i -= 1
            end
            i, j = i+1, j+1
            up_side += 1
            direction = right
        end
    end
    arr
end
```