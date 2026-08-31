# Elixir: map reduce, filter, chunk, map product, sum.

**Author:** PavelPatsey
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-laser-beams-in-a-bank/solutions/4498684/](https://leetcode.com/problems/number-of-laser-beams-in-a-bank/solutions/4498684/)

---

# Code
```
defmodule Solution do
  @spec number_of_beams(bank :: [String.t()]) :: integer
  def number_of_beams(bank) do
    bank
    |> Enum.map(&Solution.reduce_row/1)
    |> Enum.filter(fn x -> x > 0 end)
    |> Enum.chunk_every(2, 1, :discard)
    |> Enum.map(&Enum.product/1)
    |> Enum.sum()
  end

  @spec reduce_row(row :: String.t()) :: integer
  def reduce_row(row) do
    row
    |> String.graphemes()
    |> Enum.reduce(0, fn x, acc -> String.to_integer(x) + acc end)
  end
end
```