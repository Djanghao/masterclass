# Elixir - Simple Recursion

**Author:** Nono31
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-the-string-great/solutions/4975540/](https://leetcode.com/problems/make-the-string-great/solutions/4975540/)

---

# Code
```
defmodule Solution do
  @spec make_good(s :: String.t) :: String.t
  def make_good(s) do
    s = String.to_charlist(s) 
    do_make(s, [])
  end

  defp do_make([], good), do: good |> Enum.reverse() |> to_string()
  defp do_make([c | s_tail], []), do: do_make(s_tail, [c])
  defp do_make([c | s_tail], [g | good_tail] = good) do
    if abs(g - c) == 32 do
      do_make(s_tail, good_tail)
    else
      do_make(s_tail, [c | good])
    end
  end
end
```