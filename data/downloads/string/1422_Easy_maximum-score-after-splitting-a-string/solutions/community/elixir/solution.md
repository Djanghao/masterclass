# Elixir solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-after-splitting-a-string/solutions/4438970/](https://leetcode.com/problems/maximum-score-after-splitting-a-string/solutions/4438970/)

---

# Code
```
defmodule Solution do
  @spec max_score(s :: String.t) :: integer
  def max_score(s) do
    chars = String.to_charlist(s)
    score = Enum.count(chars, fn ch -> ch == ?1 end)
    Enum.map_reduce(chars, score, fn
      ?0, score -> {score, score + 1}
      ?1, score -> {score, score - 1}
    end)
    |> elem(0)
    |> Enum.drop(1)
    |> Enum.max()
  end
end
```