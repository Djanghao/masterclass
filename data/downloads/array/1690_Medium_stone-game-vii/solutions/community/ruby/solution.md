# Ruby - T: O(n2) S: O(n2) 100% 100%

**Author:** hoangphanbk10
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-vii/solutions/2629190/](https://leetcode.com/problems/stone-game-vii/solutions/2629190/)

---

```
# @param {Integer[]} stones
# @return {Integer}
def stone_game_vii(stones)
  n = stones.size
  @min = Array.new(n) { [] }
  @max = Array.new(n) { [] }
  sum = stones.sum
  max_difference(stones, 0, n - 1, sum)
end

def max_difference(stones, left, right, sum)
  return 0 if left > right
  
  @max[left][right] ||= [
    (sum_left = sum - stones[left]) + min_difference(stones, left + 1, right, sum_left),
    (sum_right = sum - stones[right]) + min_difference(stones, left, right - 1, sum_right),
  ].max
end

def min_difference(stones, left, right, sum)
  return 0 if left > right

  @min[left][right] ||= [
    -(sum_left = sum - stones[left]) + max_difference(stones, left + 1, right, sum_left),
    -(sum_right = sum - stones[right]) + max_difference(stones, left, right - 1, sum_right),
  ].min
end