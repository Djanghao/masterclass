# Elixir Simple Solution

**Author:** stackcats
**Votes:** 1
**Link:** [https://leetcode.com/problems/rearrange-array-elements-by-sign/solutions/1717784/](https://leetcode.com/problems/rearrange-array-elements-by-sign/solutions/1717784/)

---

```elixir
defmodule Solution do
  @spec rearrange_array(nums :: [integer]) :: [integer]
  def rearrange_array(nums) do
    {p, n} = Enum.split_with(nums, fn x -> x > 0 end)
    aux(p, n)
  end

  def aux([], []), do: []

  def aux([p | ps], [n | ns]) do
    [p, n | aux(ps, ns)]
  end
end
```