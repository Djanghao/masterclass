# Elixir - Simple Solution

**Author:** Nono31
**Votes:** 2
**Link:** [https://leetcode.com/problems/time-needed-to-buy-tickets/solutions/4995670/](https://leetcode.com/problems/time-needed-to-buy-tickets/solutions/4995670/)

---



# Code
```
defmodule Solution do
  @spec time_required_to_buy(tickets :: [integer], k :: integer) :: integer
  def time_required_to_buy(tickets, k) do
    k_n = Enum.at(tickets, k)
    tickets |> Enum.with_index()
    |> Enum.reduce(0, fn {t, i}, count ->
      cond do
        i == k -> count + t
        i < k -> count + min(t, k_n)
        i > k -> count + min(t, k_n - 1)
      end
    end)
  end
end
```