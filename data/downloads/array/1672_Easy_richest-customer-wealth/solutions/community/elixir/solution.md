# elixir sum and map

**Author:** carti
**Votes:** 1
**Link:** [https://leetcode.com/problems/richest-customer-wealth/solutions/2431837/](https://leetcode.com/problems/richest-customer-wealth/solutions/2431837/)

---

```elixir
defmodule Solution do
  @spec maximum_wealth(accounts :: [[integer]]) :: integer
  def maximum_wealth(accounts) do
    accounts
    |> Enum.map(fn account -> Enum.sum(account) end) # sum each individual account
    |> Enum.max # take the max of each summed account
  end
end
```