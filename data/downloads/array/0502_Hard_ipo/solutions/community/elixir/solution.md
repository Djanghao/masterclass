# Elixir - Max Heap (using Pairing Heap)

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/ipo/solutions/5315151/](https://leetcode.com/problems/ipo/solutions/5315151/)

---

# Code
```elixir
defmodule Solution do
  defmodule Heap do
    @opaque t() :: empty_heap() | non_empty_heap()
    @opaque empty_heap() :: :empty_heap
    @opaque non_empty_heap() :: {key(), value(), [non_empty_heap()]}
    @type key() :: any()
    @type value() :: any()

    @spec new() :: empty_heap()
    def new(), do: :empty_heap

    @spec push(t(), key(), value()) :: non_empty_heap()
    def push(heap, key, value), do: meld(heap, {key, value, []})

    @spec pop(empty_heap()) :: {:error, :empty, empty_heap()}
    def pop(:empty_heap), do: {:error, :empty, :empty_heap}

    @spec pop(non_empty_heap()) :: {:ok, key(), value(), t()}
    def pop({key, value, children}), do: {:ok, key, value, pair(children)}

    @spec pop_first(t(), (key(), value() -> boolean())) :: {:ok, key(), value(), t()} | {:error, :not_found, t()}
    def pop_first(heap, fun) do
      do_pop_first(heap, [], fun)
    end

    defp do_pop_first(heap, ls, fun) do
      case pop(heap) do
        {:error, :empty, _} ->
          {:error, :not_found, pair(ls)}

        {:ok, key, value, new_heap} ->
          if fun.(key, value) do
            {:ok, key, value, meld(new_heap, pair(ls))}
          else
            do_pop_first(new_heap, [{key, value, []} | ls], fun)
          end
      end
    end

    defp meld(:empty_heap, heap2), do: heap2

    defp meld(heap1, :empty_heap), do: heap1

    defp meld({k1, v1, children1} = heap1, {k2, v2, children2} = heap2) do
      if k1 > k2 do
        {k1, v1, [heap2 | children1]}
      else
        {k2, v2, [heap1 | children2]}
      end
    end

    defp pair([]), do: :empty_heap

    defp pair([heap]), do: heap

    defp pair([heap1, heap2 | rest]) do
      meld(meld(heap1, heap2), pair(rest))
    end
  end

  @spec find_maximized_capital(
    max_projects :: integer,
    initial_total_capital :: integer,
    profits :: [integer],
    required_capitals :: [integer]
  ) :: integer
  def find_maximized_capital(max_projects, initial_total_capital, profits, required_capitals) do
    profits
    |> Stream.zip(required_capitals)
    |> Enum.reduce(Heap.new(), fn {profit, required_capital}, heap ->
      Heap.push(heap, profit, required_capital)
    end)
    |> maximize_capital(max_projects, initial_total_capital)
  end

  defp maximize_capital(_heap, 0, total_capital) do
    total_capital
  end

  defp maximize_capital(heap, max_projects, total_capital) do
    case Heap.pop_first(heap, fn _profit, required_capital -> required_capital <= total_capital end) do
      {:error, :not_found, _} ->
        total_capital

      {:ok, profit, _required_capital, heap2} ->
        maximize_capital(heap2, max_projects - 1, total_capital + profit)
    end
  end
end
```