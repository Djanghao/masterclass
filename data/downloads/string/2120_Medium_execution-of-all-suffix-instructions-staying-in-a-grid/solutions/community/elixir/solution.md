# Elixir solution use Enum.reduce_while()

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/solutions/3649956/](https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/solutions/3649956/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 574ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 64.9MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec execute_instructions(n :: integer, start_pos :: [integer], s :: String.t) :: [integer]
  def execute_instructions(n, start_pos, s) do
    execute_instructions(n, Enum.at(start_pos, 1), Enum.at(start_pos, 0), String.codepoints(s), []) |> Enum.reverse()
  end

  @spec execute_instructions(n :: integer, x :: integer, y :: integer, s :: [char], res :: [integer]) :: [integer]
  def execute_instructions(_, _, _, s, res) when s == [] do
    res
  end

  def execute_instructions(n, x, y, s, res) do
    execute_instructions(n, x, y, s |> tl, [helper(n, x, y, s) | res])
  end

  @spec helper(n :: integer, x :: integer, y :: integer, s :: [char]) :: integer
  def helper(n, x, y, s) do
    Enum.reduce_while(s, {x, y, 0}, fn inst, {x, y, cnt} ->
      {x, y} =
        cond do
          inst == "L" ->
            {x - 1, y}
          inst == "R" ->
            {x + 1, y}
          inst == "U" ->
            {x, y - 1}
          inst == "D" ->
            {x, y + 1}
        end
      if x < 0 or y < 0 or x == n or y == n do
        {:halt, {x, y, cnt}}
      else
        {:cont, {x, y, cnt + 1}}
      end
    end) |> elem(2)
  end
end

```