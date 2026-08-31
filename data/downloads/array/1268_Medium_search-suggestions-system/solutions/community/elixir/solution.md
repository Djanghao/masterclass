# Elixir - Binary Search

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/search-suggestions-system/solutions/6008231/](https://leetcode.com/problems/search-suggestions-system/solutions/6008231/)

---

# Code
```elixir []
defmodule Solution do
  @spec suggested_products(products :: [String.t], search_word :: String.t) :: [[String.t]]
  def suggested_products(products, search_word) do
    products =
      products
      |> Enum.sort()
      |> List.to_tuple()

    queries =
      search_word
      |> :binary.bin_to_list()
      |> Enum.scan([], &[&1 | &2])
      |> Enum.map(&Enum.reverse/1)
      |> Enum.map(&to_string/1)

    Enum.map_reduce(queries, 0, fn query, lo ->
      search(products, lo, tuple_size(products), query)
    end)
    |> elem(0)
  end

  defp search(products, lo, lo, query) do
    take3(products, lo, query)
  end

  defp search(products, lo, hi, query) do
    mid = Bitwise.bsr(lo + hi, 1)
    product = elem(products, mid)

    cond do
      query < product ->
        search(products, lo, mid, query)

      query > product ->
        search(products, mid + 1, hi, query)

      true ->
        take3(products, mid, query)
    end
  end

  defp take3(products, i, query) do
    i..i + 2
    |> Enum.reject(& &1 >= tuple_size(products))
    |> Enum.map(&elem(products, &1))
    |> Enum.filter(&String.starts_with?(&1, query))
    |> then(&{&1, i})
  end
end
```