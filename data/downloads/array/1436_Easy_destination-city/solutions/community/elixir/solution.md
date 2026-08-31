# Elixir - Clean but Cryptic Code

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/destination-city/solutions/4406263/](https://leetcode.com/problems/destination-city/solutions/4406263/)

---

# Code
```
defmodule Solution do
  @spec dest_city(paths :: [[String.t]]) :: String.t
  def dest_city(paths) do
    paths
    |> Stream.zip_with(&Function.identity/1)
    |> Enum.map(&MapSet.new/1)
    |> Enum.reduce(&MapSet.difference/2)
    |> Enum.at(0)
  end
end
```