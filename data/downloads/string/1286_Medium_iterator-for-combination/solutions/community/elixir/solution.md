# Recursive combinations with GenServer

**Author:** Fedor-Lyanguzov
**Votes:** 1
**Link:** [https://leetcode.com/problems/iterator-for-combination/solutions/4595018/](https://leetcode.com/problems/iterator-for-combination/solutions/4595018/)

---

# Intuition
Make recursive combinations, since Elixir has no loops. Then make GenServer to serve requests.

# Approach
Make unittests, then make recursive combinations, then wrap it with GenServer.

# Complexity
- Time complexity:
I dunno

- Space complexity:
I dunno

# Code
```
defmodule CombinationIterator do
  use GenServer

  @spec init_(characters :: String.t, combination_length :: integer) :: any
  def init_(characters, combination_length) do
    GenServer.start(__MODULE__, nil, name: __MODULE__)
    GenServer.call(__MODULE__, {:reset, Combinatorics.combine(characters |> String.codepoints(), combination_length) |> Enum.to_list()})
  end

  @spec next() :: String.t
  def next() do
    GenServer.call(__MODULE__, {:next})
  end

  @spec has_next() :: boolean
  def has_next() do
    GenServer.call(__MODULE__, {:has_next})
  end

  @impl true
  def init(init_arg), do: {:ok, init_arg}
  @impl true
  def handle_call({:has_next}, _from, []), do: {:reply, false, []}
  def handle_call({:has_next}, _from, state), do: {:reply, true, state}
  def handle_call({:next}, _from, []), do: {:reply, "", []}
  def handle_call({:next}, _from, [x | state]), do: {:reply, Enum.join(x, ""), state}
  def handle_call({:reset, state}, _from, _), do: {:reply, nil, state}

end


defmodule Combinatorics do
  def combine(xs, k) when is_integer(k) and k>=0 do
    xs = xs |> Enum.to_list()

    do_combine(xs, k)
    |> Stream.filter(&(Enum.count(&1) == k))
  end

  defp do_combine([], _k), do: [[]]
  defp do_combine(xs, 1), do: xs |> Stream.map(&[&1])

  defp do_combine([x | xs], k) do
      do_combine(xs, k - 1)
      |> Stream.map(&[x | &1])
      |> Stream.concat(do_combine(xs, k))
  end
end

```