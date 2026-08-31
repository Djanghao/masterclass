# Elixir: Agent & Erlang array

**Author:** de4dbeef
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-an-ordered-stream/solutions/5038860/](https://leetcode.com/problems/design-an-ordered-stream/solutions/5038860/)

---

# Code
```
defmodule OrderedStream do
  @spec init_(n :: integer) :: any
  def init_(n) do
    init = {:array.new(n, fixed: false), 0}

    case GenServer.whereis(__MODULE__) do
      nil -> Agent.start_link(fn -> init end, name: __MODULE__)
      _ -> Agent.cast(__MODULE__, fn _ -> init end)
    end
  end

  @spec insert(id_key :: integer, value :: String.t()) :: [String.t()]
  def insert(id_key, value) do
    Agent.get_and_update(__MODULE__, fn {arr, idx} ->
      arr = :array.set(id_key - 1, value, arr)
      chunk(arr, idx, [])
    end)
  end

  @spec chunk(any, integer, [String.t()]) :: {[integer], {any, integer}}
  defp chunk(arr, idx, acc) do
    case :array.get(idx, arr) do
      :undefined -> {Enum.reverse(acc), {arr, idx}}
      val -> chunk(arr, idx + 1, [val | acc])
    end
  end
end
```