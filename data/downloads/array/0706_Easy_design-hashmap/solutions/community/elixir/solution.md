# Elixir solution with Agent for state!

**Author:** ronbrz
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-hashmap/solutions/4126981/](https://leetcode.com/problems/design-hashmap/solutions/4126981/)

---

These sorts of problems aren't great for elixir, as in elixir all data is immutable. We do not have a true `array` type with constant time lookups and insertions. And in an implementation sense, data structures will not have the interface described where we operate on an initialized data struct without passing that data struct along with it.

To illustrate, if you want to create a map and operate on it in elixir you must pass the map to the corresponding function, like so:

```
my_map = Map.new()
updated_map = Map.put(my_map, :a, 2)
```
resulting in the maps:
```
my_map = %{}
updated_map = %{:a => 2}
```
We do not do things like this in elixir:
```
my_map = Map.new()
my_map.put(:a, 2) # weird!!
# or
Map.put(:a, 2) # weird!!
```


To simulate this odd, stateful behavior we can use [`Agent`](https://elixir-lang.org/getting-started/mix-otp/agent.html) to keep track of state.

With elixir we can dip into erlangs libraries as well, so let's use the [`array`](https://www.erlang.org/doc/man/array) erlang library as our base array. This is not a true array, but a set of nested tuples, so lookup will be $$O(lg10(N))$$ [source](https://stackoverflow.com/questions/16447921/arrays-implementation-in-erlang/16464349#16464349)

# Code
```
defmodule MyHashMap do
  @spec init_() :: any
  def init_() do
    case Agent.start_link(fn -> :array.new end, name: __MODULE__) do
        # clean up from last test case
        {:error, {:already_started, pid}} -> Agent.update(pid, fn _ -> :array.new end) 
        pid -> pid
    end
  end

  @spec put(key :: integer, value :: integer) :: any
  def put(key, value) do
    Agent.update(__MODULE__, fn arr -> :array.set(key, value, arr) end)
  end

  @spec get(key :: integer) :: integer
  def get(key) do
    case Agent.get(__MODULE__, fn arr -> :array.get(key, arr) end) do
        :undefined -> -1
        val -> val
    end
  end

  @spec remove(key :: integer) :: any
  def remove(key) do
    Agent.update(__MODULE__, fn arr -> :array.set(key, :undefined, arr) end)
  end
end
```