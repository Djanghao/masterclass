# Ruby: minimax with recursion

**Author:** lacrosse
**Votes:** 2
**Link:** [https://leetcode.com/problems/stone-game-ii/solutions/3563410/](https://leetcode.com/problems/stone-game-ii/solutions/3563410/)

---

# Code

```ruby
def min(a, b) = a < b ? a : b
def max(a, b) = a > b ? a : b
def stone_game_ii(piles)
  st = 0
  ps = piles.map! { st += _1 }.unshift(0)
  z = ps.size
  game = Array.new(z) do |i|
    remaining_stones = ps[-1] - ps[i]
    Hash.new do |h, m|
      min_best_response = (i + 1..min(i + 2 * m, z)).map { game[_1][max(m, _1 - i)] }.min
      h[m] = remaining_stones - min_best_response
    end
  end << -> _ { 0 }

  game[0][1]
end
```

# Time complexity

$$\\mathcal{O}(n^2)$$

# Space complexity

$$\\mathcal{O}(n^2)$$