# 3 Elixir solutions using different kinds of priority queues

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximal-score-after-applying-k-operations/solutions/5909528/](https://leetcode.com/problems/maximal-score-after-applying-k-operations/solutions/5909528/)

---

# Time Complexity
- Pairing Heap: $$O(n \\log n + k \\log n)$$ amortized in worst case, but can be $$O(n \\log n + k)$$ in actual cases.
- gb_sets: $$O(n \\log n + k \\log n)$$.
- Binary Heap: $$O(n \\log n + k(\\log n)^2)$$.

# Space Complexity
- Pairing Heap: $$O(n)$$
- gb_sets: $$O(n)$$
- Binary Heap: $$O(n\\log(n))$$

FYI, "gb_sets" stands for "Generally Balanced Sets". A `:gb_sets.t()` is just like an AVL tree, except that it is not rebalanced on deletions.

# Code
```elixir [Pairing Heap (~150ms)]
defmodule Solution do
  defmodule Heap do
    def new(enumerable \\\\ []) do
      enumerable
      |> Enum.sort()
      |> Enum.reduce([], fn value, children ->
        [{value, children}]
      end)
      |> pair()
    end

    def push(heap, value), do: meld(heap, {value, []})

    def pop({value, children}) do
      {value, pair(children)}
    end

    defp meld(nil, heap), do: heap

    defp meld(heap, nil), do: heap

    defp meld({v1, c1} = h1, {v2, c2} = h2) do
      if v1 > v2 do
        {v1, [h2 | c1]}
      else
        {v2, [h1 | c2]}
      end
    end

    defp pair([]), do: nil

    defp pair([heap]), do: heap

    defp pair([h1, h2 | rest]) do
      meld(meld(h1, h2), pair(rest))
    end
  end

  @spec max_kelements(nums :: [integer], k :: integer) :: integer
  def max_kelements(nums, k) do
    heap = Heap.new(nums)

    for _ <- 1..k, reduce: {0, heap} do
      {score, heap} ->
        {n, heap} = Heap.pop(heap)
        heap = Heap.push(heap, ceil(n / 3))
        {score + n, heap}
    end
    |> elem(0)
  end
end
```

```elixir [:gb_sets (~800ms)]
defmodule Solution do
  @spec max_kelements(nums :: [integer], k :: integer) :: integer
  def max_kelements(nums, k) do
    pq =
      nums
      |> Enum.sort()
      |> Enum.with_index()
      |> :gb_sets.from_ordset()

    for _ <- 1..k, reduce: {0, pq} do
      {score, pq} ->
        {{n, i}, pq} = :gb_sets.take_largest(pq)
        pq = :gb_sets.insert({ceil(n / 3), i}, pq)
        {score + n, pq}
    end
    |> elem(0)
  end
end
```

```elixir [Binary Heap (TLE)]
defmodule Solution do
  defmodule Heap do
    def new(enumerable \\\\ []) do
      enumerable
      |> Enum.sort(:desc)
      |> Enum.with_index(1)
      |> Map.new(fn {v, i} -> {i, v} end)
    end

    def push(heap, value) do
      key = map_size(heap) + 1

      heap
      |> Map.put(key, value)
      |> swap_up(key)
    end

    def pop(heap) do
      value = heap[1]

      key_to_delete = map_size(heap)
      {value_to_delete, heap} = Map.pop(heap, key_to_delete)

      heap =
        heap
        |> Map.put(1, value_to_delete)
        |> swap_down(1)

      {value, heap}
    end

    defp swap_up(heap, 1) do
      heap
    end

    defp swap_up(heap, key) do
      parent_key = Bitwise.bsr(key, 1)

      value = heap[key]
      parent_value = heap[parent_key]

      if parent_value >= value do
        heap
      else
        swap_up(%{heap | key => parent_value, parent_key => value}, parent_key)
      end
    end

    defp swap_down(heap, key) do
      left_key = Bitwise.bsl(key, 1)
      right_key = left_key + 1

      value = heap[key]
      left_value = heap[left_key]
      right_value = heap[right_key]

      {max_value, max_key} = [
        {value, key},
        {left_value, left_key},
        {right_value, right_key}
      ]
      |> Enum.reject(fn {val, key} -> is_nil(val) end)
      |> Enum.max()

      if max_key == key do
        heap
      else
        heap
        |> Map.put(key, max_value)
        |> Map.put(max_key, value)
        |> swap_down(max_key)
      end
    end
  end

  @spec max_kelements(nums :: [integer], k :: integer) :: integer
  def max_kelements(nums, k) do
    heap = Heap.new(nums)

    for _ <- 1..k, reduce: {0, heap} do
      {score, heap} ->
        {n, heap} = Heap.pop(heap)
        heap = Heap.push(heap, ceil(n / 3))
        {score + n, heap}
    end
    |> elem(0)
  end
end
```