# Explicit elixir solution

**Author:** elbasti
**Votes:** 0
**Link:** [https://leetcode.com/problems/asteroid-collision/solutions/5741799/](https://leetcode.com/problems/asteroid-collision/solutions/5741799/)

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
```elixir []
defmodule Solution do
  @spec asteroid_collision(asteroids :: [integer]) :: [integer]
  def asteroid_collision(asteroids) do
    asteroids
    |> collide([], 0)
  end

  def collide([], remainder, 0), do: flatten_reverse(remainder)
  def collide([], remainder, _), do: flatten_reverse(remainder) |> collide([], 0)
  def collide([any], remainder, collisions), do: collide([], [any]++remainder, collisions)

  def collide([a1 | [a2 | tail]], remainder, collisions) do
    if meet?(a1,a2) do
        collide(tail, [heavier(a1,a2)] ++ remainder, collisions+1)
    else 
        collide([a2] ++ tail, [a1] ++ remainder, collisions)
    end
  end

  defp meet?(a1, a2), do: ((a1 > 0) and (a2 < 0))
  defp heavier(a1, a2) do
    cond do 
        abs(a1) > abs(a2) -> a1
        abs(a2) > abs(a1) -> a2
        abs(a2) == abs(a1) -> []
    end
  end
  defp flatten_reverse(l), do: l |> List.flatten() |> Enum.reverse()
end
```