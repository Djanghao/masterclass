# Elixir DP solution

**Author:** PavelPatsey
**Votes:** 0
**Link:** [https://leetcode.com/problems/perfect-squares/solutions/4699436/](https://leetcode.com/problems/perfect-squares/solutions/4699436/)

---

# Code
```
defmodule Solution do
  @spec num_squares(n :: integer) :: integer
  def num_squares(n) do
    get_num_squares(n, %{0 => 0}, 1, 1)
  end

  def get_num_squares(n, dp, key, s) when key == n and (s + 1) * (s + 1) > n do
    min(Map.get(dp, key), 1 + Map.get(dp, key - s ** 2))
  end

  def get_num_squares(n, dp, key, s) when key - s * s < 0 do
    get_num_squares(n, dp, key + 1, 1)
  end

  def get_num_squares(n, dp, key, s) do
    new_dp = Map.put(dp, key, min(Map.get(dp, key), 1 + Map.get(dp, key - s ** 2)))
    get_num_squares(n, new_dp, key, s + 1)
  end
end
```