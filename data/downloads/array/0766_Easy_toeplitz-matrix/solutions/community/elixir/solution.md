# Elixir - Cryptic solution

**Author:** Aetherus
**Votes:** 2
**Link:** [https://leetcode.com/problems/toeplitz-matrix/solutions/2761478/](https://leetcode.com/problems/toeplitz-matrix/solutions/2761478/)

---

```elixir
defmodule Solution do
  @spec is_toeplitz_matrix(matrix :: [[integer]]) :: boolean
  def is_toeplitz_matrix(matrix) do
    matrix
    |> Stream.chunk_every(2, 1, :discard)
    |> Stream.flat_map(fn [r1, r2] ->
      Stream.zip_with(r1, tl(r2), &==/2)
    end)
    |> Enum.all?()
  end
end
```

O(m * n) time, O(1) space.