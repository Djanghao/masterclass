# Elixir Reduce Filter Solution

**Author:** nordiCode
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/4158574/](https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/4158574/)

---

# Complexity

A pass to filter, a pass to map and a pass to reduce.
*O(3n)*

# Code
```
defmodule Solution do
@spec check_increasing(nums :: List) :: boolean
  def check_increasing(nums) do
    Enum.reduce(nums, {nil, true}, fn current, {prev, result} ->
      case prev do
        nil -> {current, result}
        _ ->
          if current > prev do
            {current, result}
          else
            {current, false}
          end
      end
    end)
    |> elem(1)
  end

   @spec are_numbers_ascending(s :: String.t) :: boolean
  def are_numbers_ascending(s) do
    digits = [0,1,2,3,4,5,6,7,8,9] |> Enum.map(&(Integer.to_string(&1)))
    s |> String.split(" ")
      |> Enum.filter(fn x -> is_int(x) end)
      |> Enum.map(fn x -> String.to_integer(x) end)
      |> check_increasing()
  end

  def is_int(value) when is_binary(value) do
    case Integer.parse(value) do
      {int, _} -> true
      :error -> false
    end
  end
end
```