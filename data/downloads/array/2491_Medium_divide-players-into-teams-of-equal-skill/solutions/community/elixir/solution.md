# Elixir Solution

**Author:** abdelrahmannagy1
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/solutions/5869823/](https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/solutions/5869823/)

---

# Code
```elixir []
defmodule Solution do
  @spec divide_players(skill :: [integer]) :: integer
  def divide_players(skill) do
    n = length(skill)
    skill = skill
    |> Enum.sort()
    |> Enum.with_index()
    |> Map.new(fn {value, index} -> {index, value} end) 
    
    t = skill[0] + skill[n-1]
    twoptr(skill, 0, t, 0, n)
  end
  def twoptr(_, i, _, total, n) when i==(div(n,2)) do
    total
  end
  def twoptr(arr, i, t, total, n) do
    cond do
        arr[i] + arr[n-1-i] != t -> -1
        true -> twoptr(arr, i+1, t, total+(arr[i] * arr[n-1-i]), n)

    end  
  end
end
```