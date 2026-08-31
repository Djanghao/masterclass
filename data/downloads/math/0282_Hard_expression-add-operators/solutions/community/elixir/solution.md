# Elixir DFS Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/expression-add-operators/solutions/2056084/](https://leetcode.com/problems/expression-add-operators/solutions/2056084/)

---

```elixir
defmodule Solution do
  @spec add_operators(num :: String.t(), target :: integer) :: [String.t()]
  def add_operators(num, target) do
    dfs([], num, 0, String.length(num), 0, 0, target, [])
  end

  def dfs(ans, num, i, len, acc, pre, target, exp) do
    if i == len do
      if acc == target do
        [exp |> Enum.reverse() |> Enum.join() | ans]
      else
        ans
      end
    else
      i..(len - 1)
      |> Enum.reduce_while(ans, fn j, ans ->
        if j > i && String.at(num, i) == "0" do
          {:halt, ans}
        else
          e = String.slice(num, i..j)
          n = String.to_integer(e)

          if i == 0 do
            {:cont, dfs(ans, num, j + 1, len, n, n, target, [e | exp])}
          else
            {:cont,
             ans
             |> dfs(num, j + 1, len, acc + n, n, target, [e, "+" | exp])
             |> dfs(num, j + 1, len, acc - n, -n, target, [e, "-" | exp])
             |> dfs(num, j + 1, len, acc - pre + pre * n, pre * n, target, [e, "*" | exp])}
          end
        end
      end)
    end
  end
end
```