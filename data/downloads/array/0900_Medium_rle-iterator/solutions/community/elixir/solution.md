# Elixir: solved with recursion, state held in Agent

**Author:** de4dbeef
**Votes:** 0
**Link:** [https://leetcode.com/problems/rle-iterator/solutions/5024907/](https://leetcode.com/problems/rle-iterator/solutions/5024907/)

---

# Intuition
* Expand the `encoding` list into a list of each value, i.e. the "unfolded" version they'd show in example
* Split the unfolded list at the `n` index
* Return the last element of the first list, then "save" the state of the remaining values
* If the size of the first list is `< n` or if the list is empty, return `-1`

# Approach
* Expanding the list isn't practical for all scenarios (i.e. when the provided quantities are large the tests will timeout/OOM when lists are too large)
* Instead of expanding, keep the list as is. And perform operations on that list based on `n`
    * Match on `[cnt, elm | rest]` where `cnt` is the quantity and `elm` is the element
    * If `n` is less than `cnt`, return `elm` and subtract `n` from `cnt` and "save" the updated list, i.e. `{elm, [cnt - n, elm | rest]}`
    * If `n` is greater than `cnt`, recurse passing `rest` and `n - cnt` (i.e. we've "dropped" the first `cnt` values), i.e. `do_next(rest, n - cnt)`
    * If the state is `[]`, then just return `-1`
* This operation can be done just by using a function, no `GenServer` needed
* However, since Leetcode provides the "API" `next/1`, we need a way to "store" the state as it's subsequently called. So I used `Agent` as a quick way to save state. We only use it to pass the current state into the "generic" function
* We also "reset" the named Agent in `init_/1` since Leetcode's test cases will use the same process throughout all tests


# Code
```
defmodule RLEIterator do
  use Agent

  @spec init_(encoding :: [integer]) :: any
  def init_(encoding) do
    # Kinda hacky, IMO. But feel it's a fine way to "reset" the named Agent for
    # this scenario
    case GenServer.whereis(__MODULE__) do
      nil -> Agent.start_link(fn -> encoding end, name: __MODULE__)
      _ -> Agent.cast(__MODULE__, fn _ -> encoding end)
    end
  end

  @spec next(n :: integer) :: integer
  def next(n) do
    Agent.get_and_update(__MODULE__, RLEIterator, :rle_next, [n])
  end

  @spec rle_next([integer], integer) :: {integer, [integer]}
  def rle_next([cnt, _elm | rest], n) when cnt < n, do: rle_next(rest, n - cnt)
  def rle_next([cnt, elm | rest], n), do: {elm, [cnt - n, elm | rest]}
  def rle_next([], _n), do: {-1, []}
end

# Your functions will be called as such:
#
# RLEIterator.init_(encoding)
# param_1 = RLEIterator.next(n)
#
# `RLEIterator.init_/1` will be called before every test case, in which you can
# do some necessary initializations.

```