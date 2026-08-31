# Ruby: minimax with dynamic programming in constant space

**Author:** lacrosse
**Votes:** 3
**Link:** [https://leetcode.com/problems/stone-game-iii/solutions/3566376/](https://leetcode.com/problems/stone-game-iii/solutions/3566376/)

---

# Code

```ruby
def stone_game_iii(stones)
  responses = [0, 0, 0]
  sum = 0
  stones.reverse_each do
    sum += _1
    responses.unshift(sum - responses.min).pop
  end
  %w[Tie Alice Bob][responses[0] * 2 <=> sum]
end
```

# Time complexity

$$\\mathcal{O}(|\	ext{stones}|)$$

# Space complexity

$$\\mathcal{O}(1)$$