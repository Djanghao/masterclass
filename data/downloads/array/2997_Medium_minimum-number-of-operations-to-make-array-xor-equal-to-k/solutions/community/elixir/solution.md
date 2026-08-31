# Elixir Simple Solution

**Author:** stackcats
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/solutions/4606596/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/solutions/4606596/)

---

```
defmodule Solution do
  use Bitwise

  @spec min_operations(nums :: [integer], k :: integer) :: integer
  def min_operations(nums, k) do
    nums
    |> Enum.reduce(k, &bxor/2)
    |> Integer.digits(2)
    |> Enum.count(fn d -> d == 1 end)
  end
end

```