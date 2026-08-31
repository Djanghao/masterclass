# Elixir : Trying to implement heap with binary tree structure (very slow)

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/single-threaded-cpu/solutions/2966308/](https://leetcode.com/problems/single-threaded-cpu/solutions/2966308/)

---

# Code
```
defmodule MinHeap do
  @type t :: %__MODULE__{
    val: integer,
    size: non_neg_integer,
    left: t | nil,
    right: t | nil
  }
  defstruct val: 0, size: 1, left: nil, right: nil

  def push(nil, x), do: %__MODULE__{val: x}
  def push(heap, x) when x < heap.val do
    push(%{heap | val: x}, heap.val)
  end
  def push(heap = %__MODULE__{left: nil}, x) do
    push_to_child(heap, x, :left)
  end
  def push(heap = %__MODULE__{right: nil}, x) do
    push_to_child(heap, x, :right)
  end
  def push(heap, x) when heap.left.size < heap.right.size do
    push_to_child(heap, x, :left)
  end
  def push(heap, x) do
    push_to_child(heap, x, :right)
  end

  defp push_to_child(heap, x, key) do
    Map.update!(heap, :size, &(&1 + 1))
    |> Map.update!(key, &(push(&1, x)))
  end

  def pop(heap) do
    {heap.val, replace(heap)}
  end

  defp replace(%__MODULE__{size: 1}), do: nil
  defp replace(%__MODULE__{left: child, right: nil}), do: child
  defp replace(%__MODULE__{left: nil, right: child}), do: child
  defp replace(heap) when heap.left.val < heap.right.val do
    replace_to_child(heap, :left)
  end
  defp replace(heap) do
    replace_to_child(heap, :right)
  end

  defp replace_to_child(heap, key) do
    child = Map.get(heap, key)
    Map.put(heap, :val, child.val)
    |> Map.update!(:size, &(&1 - 1))
    |> Map.put(key, replace(child))
  end
end

defmodule Solution do
  @spec get_order(tasks :: [[integer]]) :: [integer]
  def get_order(tasks) do
    Enum.with_index(tasks)
    |> Enum.sort_by(fn {[start, _], _} -> start end)
    |> sim([], nil, 0)
  end

  defp sim([], ans, nil, _), do: Enum.reverse(ans)
  defp sim([{[start, duration], i} | tail], ans, nil, time) do
    sim(tail, ans, MinHeap.push(nil, {duration, i}), max(time, start))
  end
  defp sim([{[start, duration], i} | tail], ans, heap, time)
  when start <= time do
    sim(tail, ans, MinHeap.push(heap, {duration, i}), time)
  end
  defp sim(tasks, ans, heap, time) do
    {{duration, i}, heap} = MinHeap.pop(heap)
    sim(tasks, [i | ans], heap, time + duration)
  end
end
```