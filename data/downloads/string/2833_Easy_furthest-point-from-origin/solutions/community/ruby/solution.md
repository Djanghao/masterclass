# Simple solution

**Author:** musthafa_kareechiyil
**Votes:** 0
**Link:** [https://leetcode.com/problems/furthest-point-from-origin/solutions/4642186/](https://leetcode.com/problems/furthest-point-from-origin/solutions/4642186/)

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
# @param {String} moves
# @return {Integer}
def furthest_distance_from_origin(moves)
    moves_chars = moves.chars
    count_of_R = moves_chars.count("R")
    count_of_L = moves_chars.count("L")
    count_of_wild = moves_chars.count("_")
    (count_of_R - count_of_L).abs + count_of_wild
end
```