# Succinct Elixir solution: sorting with recursion

**Author:** ggiesa
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/solutions/3674973/](https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/solutions/3674973/)

---


```
defmodule Solution do
  @spec maximum_element_after_decrementing_and_rearranging(arr :: [integer]) :: integer
  def maximum_element_after_decrementing_and_rearranging(arr) when length(arr) == 1, do: 1
  def maximum_element_after_decrementing_and_rearranging(arr) do
    Enum.sort(arr)
    |> tl()
    |> transform(1, 1)
  end

  def transform([], _, largest), do: largest
  def transform([curr | rest], prev, largest) do
    curr = if curr - prev <= 1, do: curr, else: (curr - (curr - prev)) + 1
    transform(rest, curr, max(curr, largest))
  end
end
```