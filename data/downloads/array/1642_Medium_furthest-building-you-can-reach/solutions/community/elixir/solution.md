# Elixir - Paring Heap

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/furthest-building-you-can-reach/solutions/2181118/](https://leetcode.com/problems/furthest-building-you-can-reach/solutions/2181118/)

---

```elixir
defmodule Solution do
  defmodule PQ do
    @moduledoc """
    Priority queue basing on pairing heap.
    """

    defstruct [
      size: 0,
      data: nil
    ]

    @type value_t :: any
    @typep pq_node(value) :: nil | {value, [pq_node(value)]}
    @opaque t(value) :: %__MODULE__{
      size: non_neg_integer,
      data: pq_node(value)
    }

    @spec new :: t(any)
    def new, do: %__MODULE__{}
                             
    @spec new(value_t) :: t(value_t)
    def new(value), do: %__MODULE__{size: 1, data: {value, []}}
    
    @spec size(t(any)) :: non_neg_integer()
    def size(%__MODULE__{size: size}), do: size
             
    @spec push(t(value_t), value_t) :: t(value_t)
    def push(%__MODULE__{size: size, data: pq}, value) do
      %__MODULE__{
        size: size + 1,
        data: merge(pq, {value, []})
      }
    end
    
    @spec pop(t(value_t)) :: {:ok, value_t, t(value_t)} | {:error, :empty}
    def pop(%__MODULE__{size: 0}), do: {:error, :empty}

    def pop(%__MODULE__{size: size, data: {value, sub_nodes}}) do
      {:ok, value, %__MODULE__{size: size - 1, data: pair(sub_nodes)}}
    end
    
    @spec merge(pq_node(value_t), pq_node(value_t)) :: pq_node(value_t)      
    defp merge(nil, node), do: node
    defp merge(node, nil), do: node
    defp merge({v1, sub1}, {v2, _sub2} = node2) when v1 < v2, do: {v1, [node2 | sub1]}
    defp merge(node1, {v2, sub2}), do: {v2, [node1 | sub2]}
    
    @spec pair([pq_node(value_t)]) :: pq_node(value_t)
    defp pair([]), do: nil
    defp pair([node]), do: node
    defp pair([node1, node2 | rest]), do: merge(merge(node1, node2), pair(rest))
  end

  @spec furthest_building(heights :: [integer], bricks :: integer, ladders :: integer) :: integer
  def furthest_building(heights, bricks, ladders) do
    height_diffs =
      heights
      |> Enum.chunk_every(2, 1, :discard)
      |> Enum.map(fn [h1, h2] -> h2 - h1 end)
      |> Enum.with_index(1)

    Stream.unfold({height_diffs, bricks, PQ.new()}, fn
      {[], _, _pq} ->
        nil
      {[{dh, i} | rest], bricks, pq} when dh <= 0 ->
        {i, {rest, bricks, pq}}
      {[{dh, i} | rest], bricks, pq} ->
        pq = PQ.push(pq, dh)

        if PQ.size(pq) > ladders do
          {:ok, min_dh, pq} = PQ.pop(pq)
          if min_dh > bricks do
            nil
          else
            {i, {rest, bricks - min_dh, pq}}
          end
        else
          {i, {rest, bricks, pq}}
        end
    end)
    |> Enum.at(-1)
    |> Kernel.||(0)
  end
end
```