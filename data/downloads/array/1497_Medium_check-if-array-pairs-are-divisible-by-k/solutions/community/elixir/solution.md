# Elixir functional solution

**Author:** abdelrahmannagy1
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/solutions/5869833/](https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/solutions/5869833/)

---

# Code
```elixir []
defmodule Solution do
  @spec can_arrange(arr :: [integer], k :: integer) :: boolean
  def can_arrange(arr, k) do
    cntr = arr
    |> Enum.map(&(rem(rem(&1, k)+k, k)))
  |> Enum.reduce(%{}, fn x, acc -> Map.update(acc, x, 1, &(&1 + 1)) end)

    res = Enum.map(
    arr,
    fn n ->
      r = rem(rem(n, k)+k, k)
      if r == 0 do
        if rem(cntr[r], 2) == 1 do
          false
          else
          true
        end
        else
        if cntr[r] != cntr[k-r] do
          false
          else
          true
        end

      end
    end
    )
    Enum.all?(res)
  end
end
```