# Elixir with Stream.iterate

**Author:** Minamikaze392
**Votes:** 2
**Link:** [https://leetcode.com/problems/pascals-triangle/solutions/3720945/](https://leetcode.com/problems/pascals-triangle/solutions/3720945/)

---

# Code
```
defmodule Solution do
  @spec generate(num_rows :: integer) :: [[integer]]
  def generate(num_rows) do
    Stream.iterate([1], fn list ->
      [0 | list]
      |> Enum.chunk_every(2, 1)
      |> Enum.map(&Enum.sum/1)
    end)
    |> Enum.take(num_rows)
  end
end
```