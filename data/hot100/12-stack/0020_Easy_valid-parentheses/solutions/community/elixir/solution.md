# Elixir Recursive Stack Solution

**Author:** JJamesWWang
**Votes:** 4
**Link:** [https://leetcode.com/problems/valid-parentheses/solutions/1846911/](https://leetcode.com/problems/valid-parentheses/solutions/1846911/)

---

```elixir
defmodule Solution do
  @spec is_valid(s :: String.t) :: boolean
  def is_valid(s, t \\\\ []) do
     next = String.slice(s, 1..-1)
     case String.first(s) do
         nil -> Enum.empty?(t)
         "(" -> is_valid(next, ["(" | t])
         "{" -> is_valid(next, ["{" | t])
         "[" -> is_valid(next, ["[" | t])
         ")" -> Enum.at(t, 0, "") == "(" and is_valid(next, Enum.slice(t, 1..-1))
         "}" -> Enum.at(t, 0, "") == "{" and is_valid(next, Enum.slice(t, 1..-1))
         "]" -> Enum.at(t, 0, "") == "[" and is_valid(next, Enum.slice(t, 1..-1))
     end
  end
end
```