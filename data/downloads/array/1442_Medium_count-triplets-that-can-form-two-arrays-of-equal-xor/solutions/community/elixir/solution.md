# Elixir: n^2 iteration with xor

**Author:** de4dbeef
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/solutions/5232492/](https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/solutions/5232492/)

---

# Code
```
defmodule Solution do
  @spec count_triplets(arr :: [integer]) :: integer
  def count_triplets(arr) do
    solve(0, arr)  
  end

  defp solve(acc, []), do: acc

  defp solve(acc, [head | tail]) do
    tail
    |> Enum.scan(head, &Bitwise.bxor/2)
    |> Enum.with_index(1)
    |> Enum.reduce(acc, fn
      {0, idx}, acc -> acc + idx
      _, acc -> acc
    end)
    |> solve(tail)
  end
end
```