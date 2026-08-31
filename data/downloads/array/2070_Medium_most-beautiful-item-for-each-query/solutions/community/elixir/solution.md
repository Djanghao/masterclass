# Elixir - Binary Search | Binary Search Tree | Two Pointers

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-beautiful-item-for-each-query/solutions/6035468/](https://leetcode.com/problems/most-beautiful-item-for-each-query/solutions/6035468/)

---

# Complexity
- Time complexity: $$O((m + n) \\log n)$$ for binary search and BST approaches, and $$O(m \\log m + n \\log n)$$ for two pointers. $$m$$ is the number of queries and $$n$$ is the number of items.

- Space complexity: $$O(n)$$ for binary search and BST approaches, and $$O(m + n)$$ for two pointers.

# Code
I would love to use `:gb_trees` as the binary search tree, but OTP 26 lacks the `:gb_trees.iterator_from/3` function (which was added in OTP 27), so I have to roll my own BST.

```elixir [Binary Search]
defmodule Solution do
  @spec maximum_beauty(items :: [[integer]], queries :: [integer]) :: [integer]
  def maximum_beauty(items, queries) do
    items =
      items
      # Convert each item to {price, beauty}
      # because I think list is not the proper data structure
      # for storing heterogeneous data
      # (price and beauty are different things),
      # but tuples are exactly for such use cases.
      |> Enum.map(&List.to_tuple/1)
      # Sort by price (asc) then beauty (desc)
      # for the next step.
      |> Enum.sort_by(fn {price, beauty} -> {price, -beauty} end)
      # For each price, retain only the most beautiful item.
      |> Enum.uniq_by(&elem(&1, 0))
      # For each price, 
      # work out the maximum beauty of all the things with equal or lower price.
      |> Enum.scan({0, 0}, fn {price, beauty}, {_, max_beauty} ->
        {price, max(beauty, max_beauty)}
      end)
      # Convert the list to array
      # so that we can do binary search on it.
      # I'm not converting it to a tuple
      # because I think tuples should not be considered
      # as containers.
      |> :array.from_list()
    
    # For each query, do a binary search.
    Enum.map(queries, &search(items, 0, :array.size(items) - 1, &1))
  end

  defp search(items, i, j, query) when j <= i + 1 do
    [get(items, i), get(items, j)]
    |> Enum.reject(fn {price, _} -> price > query end)
    |> Enum.map(&elem(&1, 1))
    |> Enum.max(fn -> 0 end)
  end

  defp search(items, i, j, query) do
    m = div(i + j, 2)
    
    {price, beauty} = get(items, m)

    cond do
      query < price ->
        search(items, i, m - 1, query)

      query > price ->
        search(items, m, j, query)

      true ->
        beauty
    end
  end

  defp get(array, i) do
    :array.get(i, array)
  end
end
```

```elixir [Binary Search Tree]
defmodule Solution do
  @spec maximum_beauty(items :: [[integer]], queries :: [integer]) :: [integer]
  def maximum_beauty(items, queries) do
    items =
      items
      # Convert each item to {price, beauty}
      # because I think list is not the proper data structure
      # for storing heterogeneous data
      # (price and beauty are different things),
      # but tuples are exactly for such use cases.
      |> Enum.map(&List.to_tuple/1)
      # Sort by price (asc) then beauty (desc)
      # for the next step.
      |> Enum.sort_by(fn {price, beauty} -> {price, -beauty} end)
      # For each price, retain only the most beautiful item.
      |> Enum.uniq_by(&elem(&1, 0))
      # For each price, 
      # work out the maximum beauty of all the things with equal or lower price.
      |> Enum.scan({0, 0}, fn {price, beauty}, {_, max_beauty} ->
        {price, max(beauty, max_beauty)}
      end)
      # Convert the list to array
      # so that we can build a binary tree easily.
      |> :array.from_list()
      |> build_binary_tree()
    
    # For each query, do a binary search.
    Enum.map(queries, &(search(items, &1) || 0))
  end

  defp build_binary_tree(array) do
    build_binary_tree(array, 0, :array.size(array))
  end

  defp build_binary_tree(_array, i, j) when i >= j do
    nil
  end

  defp build_binary_tree(array, i, j) do
    m = div(i + j, 2)
    item = get(array, m)
    {item, build_binary_tree(array, i, m), build_binary_tree(array, m + 1, j)}
  end

  defp search(nil, _query) do
    nil
  end

  defp search({{query, beauty}, _left, _right}, query) do
    beauty
  end

  defp search({{price, beauty}, _left, right}, query) when query > price do
    search(right, query) || beauty
  end

  defp search({_item, left, _right}, query) do
    search(left, query)
  end

  defp get(array, i) do
    :array.get(i, array)
  end
end
```

```elixir [Two Pointers]
defmodule Solution do
  @spec maximum_beauty(items :: [[integer]], queries :: [integer]) :: [integer]
  def maximum_beauty(items, queries) do
    items =
      items
      |> Enum.map(&List.to_tuple/1)
      |> Enum.sort_by(fn {price, beauty} ->
        {price, -beauty}
      end)
      |> Enum.uniq_by(&elem(&1, 0))
      |> Enum.scan({0, 0}, fn {price, beauty}, {_, max_beauty} ->
        {price, max(beauty, max_beauty)}
      end)

    queries =
      queries
      |> Enum.with_index()
      |> Enum.sort()

    items
    |> do_query(queries, 0, [])
    |> Enum.sort_by(&elem(&1, 1))
    |> Enum.map(&elem(&1, 0))
  end

  # Because queries are sorted,
  # if no item is left to check,
  # it means that all the remaining queries
  # can buy the most beautiful item (of the `prev` beauty).
  defp do_query([], [{_, i} | queries], prev, acc) do
    do_query([], queries, prev, [{prev, i} | acc])
  end

  # If the money of the current query equals to
  # the current item's price,
  # then just buy the item with the max beauty before this item.
  defp do_query([{money, beauty} | _] = items, [{money, i} | queries], prev, acc) do
    do_query(items, queries, prev, [{beauty, i} | acc])
  end

  # If the current item is too expensive,
  # then buy the most beautify item before the current item.
  defp do_query([{price, beauty} | _] = items, [{money, i} | queries], prev, acc)
       when price > money do
    do_query(items, queries, prev, [{prev, i} | acc])
  end

  # If the current item is affordable,
  # then we check more items to see if there are
  # more beautiful items.
  defp do_query([{_price, beauty} | items], [{money, i} | _] = queries, _prev, acc) do
    do_query(items, queries, beauty, acc)
  end

  # When all queries are done,
  # just return `acc`. 
  defp do_query(_, [], _prev, acc), do: acc
end
```