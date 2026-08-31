# Elixir Simple Solution

**Author:** stackcats
**Votes:** 1
**Link:** [https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/3143384/](https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/3143384/)

---

```
defmodule Solution do
  @spec separate_digits(nums :: [integer]) :: [integer]
  def separate_digits(nums) do
    nums |> Enum.flat_map(&aux/1)
  end

  def aux(n, arr \\\\ [])
  def aux(n, arr) when n == 0, do: arr

  def aux(n, arr) do
    aux(div(n, 10), [rem(n, 10) | arr])
  end
end

```