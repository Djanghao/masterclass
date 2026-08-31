# Elixir solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/text-justification/solutions/3953310/](https://leetcode.com/problems/text-justification/solutions/3953310/)

---

Using `Enum.chunk_while`.
# Code
```
defmodule Solution do
  @spec full_justify(words :: [String.t], max_width :: integer) :: [String.t]
  def full_justify(words, max_width) do
    chunk_fun = fn
      s, {[], 0, remain} -> {:cont, {[s], 1, remain - String.length(s)}}
      s, {list, len, remain} ->
        width = String.length(s)
        if remain >= 1 + width do
          {:cont, {[s | list], len + 1, remain - 1 - width}}
        else
          just("", list, len, remain)
          |> then(&{:cont, &1, {[s], 1, max_width - width}})
        end
    end

    after_fun = fn {list, len, remain} ->
      String.duplicate(" ", remain)
      |> just(list, len, 0)
      |> then(&{:cont, &1, {nil, nil, nil}})
    end

    Enum.chunk_while(words, {[], 0, max_width}, chunk_fun, after_fun)
  end

  defp just(acc, [s], 1, remain) do
    s <> String.duplicate(" ", remain) <> acc
  end
  defp just(acc, [s | tail], len, remain) do
    space = floor(remain / (len - 1))
    (String.duplicate(" ", space + 1) <> s <> acc)
    |> just(tail, len - 1, remain - space)
  end
end
```