# [Elixir] solution

**Author:** Pai-Mei
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/1689835/](https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/1689835/)

---

```
defmodule Solution do
  @spec balanced_string_split(s :: String.t) :: integer
  def balanced_string_split(s) do
    Enum.reduce(String.graphemes(s), {0, 0}, fn char, {res, ct} ->
      a = if char === "L", do: 1, else: -1
      b = if ct === 0, do: 1, else: 0

      {res + b, ct + a}
    end)
    |> elem(0)
  end
end
```

With recursion:
```
defmodule Solution do
    def while_graphemes([], res, _ct) do
      res
    end

    def while_graphemes([h | t], res, ct) do
      a = if h === "L", do: 1, else: -1
      b = if ct === 0, do: 1, else: 0

      while_graphemes(t, res + b, ct + a)
    end

    @spec balanced_string_split(s :: String.t()) :: integer
    def balanced_string_split(s) do
      while_graphemes(String.graphemes(s), 0, 0)
    end
  end
```