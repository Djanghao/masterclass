# Elixir, uses GenServer, mod hashing

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-hashset/solutions/4251633/](https://leetcode.com/problems/design-hashset/solutions/4251633/)

---

# Complexity
- Time complexity:
O(c) - c is the average number of hash collisions

- Space complexity:
O(1)

# Code
```
defmodule MyHashSet do
  use GenServer

  @bucket_size 10000

  @spec init_() :: any
  def init_() do
    arr = :array.new([default: [], fixed: true, size: @bucket_size]);
    if Process.whereis(__MODULE__), do: GenServer.call(__MODULE__, {:reset, arr}),
    else: GenServer.start_link(__MODULE__, arr, name: __MODULE__)
  end

  @spec add(key :: integer) :: any
  def add(key), do: GenServer.cast(__MODULE__, {:add, key})

  @spec remove(key :: integer) :: any
  def remove(key), do: GenServer.cast(__MODULE__, {:remove, key})

  @spec contains(key :: integer) :: boolean
  def contains(key), do: GenServer.call(__MODULE__, {:contains, key})

  @impl true
  def handle_cast({:add, key}, arr) do
    bucket = hash(key)
    val = :array.get(bucket, arr)
    arr = if Enum.find(val, &(&1 == key)), do: arr,
    else: :array.set(bucket, [key | val], arr)
    {:noreply, arr}
  end
  def handle_cast({:remove, key}, arr) do
    bucket = hash(key)
    val = :array.get(bucket, arr)
    arr = :array.set(bucket, Enum.filter(val, &(&1 != key)), arr) 
    {:noreply, arr}
  end

  @impl true
  def handle_call({:contains, key}, _, arr) do
    val = :array.get(hash(key), arr)
    {:reply, Enum.find(val, &(&1 == key)) == key, arr}
  end
  def handle_call({:reset, arr}, _, _), do: {:reply, :ok, arr}

  defp hash(key), do: rem(key, @bucket_size)
end
```