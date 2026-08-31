# Elixir solution (though you can't choose Elixir for this problem)

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/running-sum-of-1d-array/solutions/2096253/](https://leetcode.com/problems/running-sum-of-1d-array/solutions/2096253/)

---

```elixir
defmodule Solution do
	
  @spec running_sum([integer]) :: [integer]
  def running_sum(nums) do
    nums
	|> tl()
	|> Enum.reduce([hd(nums)], fn num, [prev_sum | _] = sums ->
	  [prev_sum + n | sums]
	end)
	|> Enum.reverse()
  end
end
```