# Elixir recursion solution

**Author:** PavelPatsey
**Votes:** 0
**Link:** [https://leetcode.com/problems/assign-cookies/solutions/4489270/](https://leetcode.com/problems/assign-cookies/solutions/4489270/)

---

# Intuition
Solve the problem using recursion.

# Code
```
defmodule Solution do
  @spec find_content_children(g :: [integer], s :: [integer]) :: integer
  def find_content_children(g, s) do
    g = Enum.sort(g)
    s = Enum.sort(s)
    _find_content_children(g, s, 0)
  end

  defp _find_content_children([head_g | tail_g], [head_s | tail_s], accumulator)
       when head_g <= head_s do
    _find_content_children(tail_g, tail_s, accumulator + 1)
  end

  defp _find_content_children(g, [_head_s | tail_s], accumulator) do
    _find_content_children(g, tail_s, accumulator)
  end

  defp _find_content_children(_g, [], accumulator) do
    accumulator
  end

  defp _find_content_children([], _s, accumulator) do
    accumulator
  end
end
```