# 1ms recursive, *needs cleaning

**Author:** K11ZU
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/solutions/5877990/](https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/solutions/5877990/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Looking at the problem we need to maximize and minimize the `num`
according to the rules.

# Approach
<!-- Describe your approach to solving the problem. -->
For maximizing we want to pick y to be 9 at all times, so should 
pick x to be the first digit in the `num` that is not 9 or stick to the original `num` otherways (`num` is all 9's).

For minimizing we want y to be 1 if `num` doesn't start with 1, y to be 0 otherways. If `num`doesn't start with 1 we pick x to be the first digit in `num`. If `num`starts with 1 we pick `y = 0` and x to be the first digit where `x > 1`.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ - We traverse the `num`digits array

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ - We create new arrays for the maximized and minimized num before we make it back into a number.

# Improvements
1. There is no need for `maximize\\3` that carries the first num, can just look for first digit that is not 9. 
2. Can optimize `maximize` to utilize tail recursion
3. Some function clauses for `minimize\\3` can be joined, since when `num` starts with a digit `> 1` only x such that `x > 1`should be picked.
4. Can optimize `minimize`to utilize tail recursion
# Code
```elixir []
defmodule Solution do
  @spec max_diff(num :: integer) :: integer
  def max_diff(num) do
    ints = Integer.digits(num)
    maximize(ints) - minimize(ints)
  end
  
  defp minimize(ints, y \\\\ 1, first_num \\\\ nil)
  defp minimize([1], y, 1), do: 1
  defp minimize([_], y, _first_num), do: y
  defp minimze([x | tail], 1, nil) when x > 1 do
    to_num(1, tail, x, 1)
  end
  defp minimize([head | tail], y, nil) do
    minimize([head | tail], y, head)
  end
  defp minimize([0 | tail], y, first_num) do
    minimize(tail, 0, first_num)
  end
  defp minimize([1 | tail], _y, 1) do
    Integer.pow(10, length(tail)) + minimize(tail, 0, 1)
  end
  defp minimize([x | tail], y, _first_num) do
    to_num(y, tail, x, y)
  end

  
  defp maximize(ints, y \\\\ 9, first_num \\\\ nil)
  defp maximize([], _, _), do: 0
  defp maximize([head | tail], y, nil) do
    maximize([head | tail], y, head)
  end
  defp maximize([y | tail], y, first_num) do
    y * Integer.pow(10, length(tail)) + maximize(tail, y, first_num)
  end
  defp maximize([x | tail], y, _first_num) do
    to_num(y, tail, x, y)
  end
  
  @spec to_num(first_num :: integer, ints :: [integer], num_to_replace :: integer, num_to_replace_with :: integer) :: integer
  defp to_num(n1,ints, x, y) do
    ints
    |> Enum.map(&maybe_replace(&1, x, y))
    |> Enum.reduce(n1, fn el, acc -> acc * 10 + el end)
  end

  defp maybe_replace(n, x, y) when n == x, do: y
  defp maybe_replace(n, _, _), do: n
end
```