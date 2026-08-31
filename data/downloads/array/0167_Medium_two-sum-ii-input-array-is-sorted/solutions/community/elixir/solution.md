# Elixir O(n) Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/4056709/](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/4056709/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec two_sum(numbers :: [integer], target :: integer) :: [integer]
  def two_sum(numbers, target) do
    asc = Enum.with_index(numbers, 1)
    desc = Enum.reverse(asc)
    solve(asc, desc, target)
  end

  defp solve([{m, _} | asc],     [{n, _} | _] = desc, target) when m + n < target, do: solve(asc, desc, target)
  defp solve([{m, _} | _] = asc, [{n, _} | desc],     target) when m + n > target, do: solve(asc, desc, target)
  defp solve([{_, i} | _],       [{_, j} | _],             _),                     do: [i, j]  

end
```