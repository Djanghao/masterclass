# Ruby solution

**Author:** galm4w
**Votes:** 0
**Link:** [https://leetcode.com/problems/alphabet-board-path/solutions/3827646/](https://leetcode.com/problems/alphabet-board-path/solutions/3827646/)

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
def alphabet_board_path(target)
  x = 0
  y = 0
  ans = ""
  target.chars.each do |c|
    idx = c.ord - 'a'.ord
    ty, tx = idx.divmod(5)

    ans += "U" * [0, y - ty].max
    ans += "L" * [0, x - tx].max
    ans += "D" * [0, ty - y].max
    ans += "R" * [0, tx - x].max
    ans += "!"

    y, x = ty, tx
  end

  ans
end
```