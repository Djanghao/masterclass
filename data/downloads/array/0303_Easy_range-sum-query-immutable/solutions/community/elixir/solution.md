# Elixir: Erlang array & Agent

**Author:** de4dbeef
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-sum-query-immutable/solutions/5028954/](https://leetcode.com/problems/range-sum-query-immutable/solutions/5028954/)

---

# Code
```
defmodule NumArray do
  use Agent

  @spec init_(nums :: [integer]) :: any
  def init_(nums) do
    case GenServer.whereis(__MODULE__) do
      nil -> Agent.start_link(fn -> precompute(nums) end, name: __MODULE__)
      _ -> Agent.cast(__MODULE__, fn _ -> precompute(nums) end)
    end
  end

  @spec sum_range(left :: integer, right :: integer) :: integer
  def sum_range(left, right) do
    Agent.get(__MODULE__, fn state ->
      :array.get(right + 1, state) - :array.get(left, state)
    end)
  end

  @spec precompute([integer]) :: [integer]
  defp precompute(nums) do
    [0 | nums]
    |> Enum.scan(&(&1 + &2))
    |> :array.from_list()
  end
end

# [From LeetCode:]
# Your functions will be called as such:
#
# NumArray.init_(nums)
# param_1 = NumArray.sum_range(left, right)
#
# NumArray.init_ will be called before every test case, in which you can do
# some necessary initializations.
```