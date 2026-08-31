# Elixir Solution

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/defuse-the-bomb/solutions/6056525/](https://leetcode.com/problems/defuse-the-bomb/solutions/6056525/)

---

# Complexity
- Time complexity: $$O(n \\cdot k)$$.
- Space complexity: $$O(n + k)$$ when `k < 0`, otherwise $$O(k)$$.

# Code
```elixir []
defmodule Solution do
  @spec decrypt(code :: [integer], k :: integer) :: [integer]
  def decrypt(code, 0) do
    Enum.map(code, fn _ -> 0 end)
  end

  def decrypt(code, k) when k < 0 do
    code
    |> Enum.reverse()
    |> decrypt(-k)
    |> Enum.reverse()
  end

  def decrypt(code, k) do
    code
    |> Stream.cycle()
    |> Stream.drop(1)
    |> Stream.chunk_every(k, 1)
    |> Stream.map(&Enum.sum/1)
    |> Enum.take(length(code))
  end
end
```