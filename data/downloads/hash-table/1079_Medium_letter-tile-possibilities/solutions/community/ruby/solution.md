# Beats 100% users

**Author:** vishalsadriya
**Votes:** 0
**Link:** [https://leetcode.com/problems/letter-tile-possibilities/solutions/4768009/](https://leetcode.com/problems/letter-tile-possibilities/solutions/4768009/)

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
# @param {String} tiles
# @return {Integer}
def num_tile_possibilities(tiles)
   tiles_arr = tiles.chars.sort
  count = { value: 0 }

  backtrack(tiles_arr, count)

  count[:value]
end

def backtrack(remaining, count)
  return if remaining.empty?

  remaining.length.times do |i|
    next if i > 0 && remaining[i] == remaining[i - 1]

    count[:value] += 1
    new_remaining = remaining[0...i] + remaining[i + 1..-1]
    backtrack(new_remaining, count)
  end
end
```