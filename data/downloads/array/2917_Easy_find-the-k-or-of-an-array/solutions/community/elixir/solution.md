# Elixir Simple Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/4345738/](https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/4345738/)

---

```
defmodule Solution do
  use Bitwise

  @spec find_k_or(nums :: [integer], k :: integer) :: integer
  def find_k_or(nums, k) do
    0..31
    |> Enum.reduce(0, fn i, ans ->
      t = 2 ** i

      nums
      |> Enum.reduce(0, fn num, acc ->
        acc + if (num &&& t) == t, do: 1, else: 0
      end)
      |> then(fn n ->
        ans + if n >= k, do: t, else: 0
      end)
    end)
  end
end

```