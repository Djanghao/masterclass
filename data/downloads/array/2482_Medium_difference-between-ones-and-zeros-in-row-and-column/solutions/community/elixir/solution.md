# Elixir - Easy Solution

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/solutions/4401807/](https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/solutions/4401807/)

---

# Intuition
$$a + b - c - d = (a - c) + (b - d)$$

$$(\\sum\\limits_{i} a_i) - (\\sum\\limits_{i} b_i) = \\sum\\limits_{i}(a_i - b_i)$$

Just commutativity and associativity.

## Complexity

- Time complexity: $$O(m \	imes n)$$
- Space complexity: $$O(m + n)$$

# Code
```elixir
defmodule Solution do
  @spec ones_minus_zeros(grid :: [[integer]]) :: [[integer]]
  def ones_minus_zeros(grid) do
    row_diffs = grid |> Enum.map(&diff/1)
    col_diffs = grid |> Enum.zip_with(&diff/1)

    for row_diff <- row_diffs do
      for col_diff <- col_diffs do
        row_diff + col_diff
      end
    end
  end

  defp diff(row) do
    freqs = Enum.frequencies(row)
    Map.get(freqs, 1, 0) - Map.get(freqs, 0, 0)
  end
end
```

# Minor Optimization

For each row, the number of ones equals to the sum of that row. The number of zeroes equals to the length of the row minus the number of ones. So we can reimplement `diff/1` as

```elixir
defp diff(row) do
  Enum.sum(row) * 2 - length(row)
end
```

Still an $$O(n)$$ operation though.