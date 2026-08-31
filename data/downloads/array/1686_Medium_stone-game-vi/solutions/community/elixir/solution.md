# Elixir Solution

**Author:** martosaur
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-vi/solutions/3502772/](https://leetcode.com/problems/stone-game-vi/solutions/3502772/)

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
defmodule Solution do
  @spec stone_game_vi(alice_values :: [integer], bob_values :: [integer]) :: integer
  def stone_game_vi(alice_values, bob_values) do
    [_ | rest] = values = 
        alice_values
        |> Enum.zip(bob_values)
        |> Enum.sort_by(fn {a, b} -> a + b end, :desc)

    alice = Enum.take_every(values, 2) |> Enum.map(fn {a, _} -> a end) |> Enum.sum()
    bob = Enum.take_every(rest, 2) |> Enum.map(fn {_, b} -> b end) |> Enum.sum()

    cond do
      alice > bob -> 1
      bob > alice -> -1
      true -> 0 
    end
  end
end
```