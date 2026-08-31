# Elixir Dp Recursion Solution

**Author:** tywhisky
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-and-earn/solutions/2482375/](https://leetcode.com/problems/delete-and-earn/solutions/2482375/)

---

```elixir
defmodule Solution do
  @spec delete_and_earn(nums :: [integer]) :: integer
  def delete_and_earn(nums) do
    map =
      Enum.frequencies(nums)
      |> Enum.map(&{elem(&1, 0), elem(&1, 0) * elem(&1, 1)})
      |> Map.new()
      
    nums
    |> Enum.uniq()
    |> Enum.sort()  
    |> recursion(map, %{}, 0)
  end

  def recursion([], _, _, result), do: result
  def recursion([h | tail], map, dp, result) do
    curr = Map.get(map, h)
    record = get_record(dp, h - 2, 0)
    recursion(tail, map, Map.put(dp, h, curr + record), max(result, curr + record))
  end

  def get_record(_, t, result) when t < 0, do: result
  def get_record(dp, t, result) do
    got = Map.get(dp, t) || 0    
    get_record(dp, t - 1, max(result, got))
  end
end
```