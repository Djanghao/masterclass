# Elixir prefix sum solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/solutions/4349640/](https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/solutions/4349640/)

---

For each query, **both** the conditions below need to be met:
1. At minimum eating speed, at least 1 favourite candy is **available on** the favourite day.
2. At maximum eating speed, at least 1 favourite candy is **eaten on or before** the favourite day.
# Code
```
defmodule Solution do
  @spec can_eat(candies_count :: [integer], queries :: [[integer]]) :: [boolean]
  def can_eat(candies_count, queries) do
    [0 | candies_count]
    |> Enum.scan(&+/2)
    |> List.to_tuple()
    |> then(fn t ->
      Enum.map(queries, fn [i, day, cap] ->
        day < elem(t, i + 1) and (day + 1) * cap > elem(t, i)
      end)
    end)
  end
end
```