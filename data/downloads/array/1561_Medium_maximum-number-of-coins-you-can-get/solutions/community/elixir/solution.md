# Elixir solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-coins-you-can-get/solutions/4323036/](https://leetcode.com/problems/maximum-number-of-coins-you-can-get/solutions/4323036/)

---

# Code
```
defmodule Solution do
  @spec max_coins(piles :: [integer]) :: integer
  def max_coins(piles) do
    Enum.sort(piles)
    |> Enum.drop(div(length(piles), 3))
    |> Enum.take_every(2)
    |> Enum.sum()
  end
end
```