# Elixir - hashing and binary search

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-matching-subsequences/solutions/2307222/](https://leetcode.com/problems/number-of-matching-subsequences/solutions/2307222/)

---

```elixir
defmodule Solution do
  @spec num_matching_subseq(s :: String.t, words :: [String.t]) :: integer
  def num_matching_subseq(s, words) do
    indices_by_char =
      s
      |> :binary.bin_to_list()
      |> Stream.with_index()
      |> Enum.group_by(&elem(&1, 0), &elem(&1, 1))
      |> Map.new(fn {char, indices} ->
        {char, List.to_tuple(indices)}
      end)

    Enum.count(words, &subseq?(indices_by_char, &1))
  end

  defp subseq?(indices_by_char, word) do
    word
    |> :binary.bin_to_list()
    |> Enum.reduce_while(-1, fn
      _char, nil ->
        {:halt, nil}

      char, idx ->
        case indices_by_char[char] do
          nil -> {:halt, nil}
          indices -> {:cont, binary_search_greater(indices, idx)}
        end
    end)
    |> Kernel.!()
    |> Kernel.!()
  end

  defp binary_search_greater(tuple, n) do
    binary_search_greater(tuple, n, 0, tuple_size(tuple) - 1)
  end

  defp binary_search_greater(tuple, n, i, j) when i <= j do
    mid = div(i + j, 2)
    if elem(tuple, mid) > n do
      binary_search_greater(tuple, n, i, mid - 1)
    else
      binary_search_greater(tuple, n, mid + 1, j)
    end
  end

  defp binary_search_greater(tuple, _n, i, _j) when i >= tuple_size(tuple), do: nil

  defp binary_search_greater(tuple, _n, i, _j), do: elem(tuple, i)
end
```