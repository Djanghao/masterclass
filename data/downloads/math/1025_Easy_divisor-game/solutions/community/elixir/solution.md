# Elixir, game theory

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/divisor-game/solutions/4311795/](https://leetcode.com/problems/divisor-game/solutions/4311795/)

---

# Approach
If the number is even, then the result is true. Try soliving cases manually for 1, 2, 3, 4, 5... The pattern is that if the starting number is even, alice will win the game.

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec divisor_game(n :: integer) :: boolean
  def divisor_game(n), do: rem(n, 2) == 0
end
```