# Easy Ruby solution

**Author:** Aksafan
**Votes:** 0
**Link:** [https://leetcode.com/problems/snake-in-matrix/solutions/5619717/](https://leetcode.com/problems/snake-in-matrix/solutions/5619717/)

---

# Intuition
We need the total amount of pair left-right and pair up-down.

# Approach
- Count total amount of every command.
- For pair left-right we need to add `RIGHT` and subtract `LEFT`.
- For pair up-down we need to add `DOWN` and subtract `UP`.
- Multiply left-right pair result by one (cause we add 1 to the right every column) and multiply up-down pair result by n amount of rows (as we add n every row).

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
# @param {Integer} n
# @param {String[]} commands
# @return {Integer}
def final_position_of_snake(n, commands)
  left_right_total = up_down_total = 0
  commands.each do |command|
    left_right_total += 1 if command == 'RIGHT'
    left_right_total -= 1 if command == 'LEFT'
    up_down_total += 1 if command == 'DOWN'
    up_down_total -= 1 if command == 'UP'
  end

  left_right_total * 1 + up_down_total * n
end
```