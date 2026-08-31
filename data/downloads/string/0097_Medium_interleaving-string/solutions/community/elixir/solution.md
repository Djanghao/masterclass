# Elixir bottom up DP

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/interleaving-string/solutions/3956785/](https://leetcode.com/problems/interleaving-string/solutions/3956785/)

---

`Enum.scan` is used instead of `Enum.reduce` in the inner loop, because it is convenient to use the previous results for calculation, and I don't need an extra line of `Enum.reverse`.
# Code
```
defmodule Solution do
  @spec is_interleave(s1 :: String.t, s2 :: String.t, s3 :: String.t) :: boolean
  def is_interleave(s1, s2, s3) do
    if String.length(s1) + String.length(s2) != String.length(s3) do
      false
    else
      list1 = [?^ | String.to_charlist(s1)]
      list2 = [?^ | String.to_charlist(s2)]
      list3 = [?^ | String.to_charlist(s3)]
      acc = List.duplicate(true, length(list2))
      Enum.reduce(list1, {acc, list3}, fn ch1, {acc, list3} ->
        [acc, list2, list3]
        |> Enum.zip()
        |> Enum.scan(true, fn
          {true, _, ^ch1}, _ -> true
          {_, ch2, ch2}, true -> true
          _, _ -> false
        end)
        |> then(&{&1, tl(list3)})
      end)
      |> elem(0)
      |> List.last()
    end
  end
end
```