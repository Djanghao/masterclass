# Elixir-way with tail-recursion and pattern-matching

**Author:** kkalb
**Votes:** 0
**Link:** [https://leetcode.com/problems/single-number/solutions/5122652/](https://leetcode.com/problems/single-number/solutions/5122652/)

---

# Intuition
Elixir-devs think about `Enum.frequencies/1` but it will be slow.
Tail-recursion, pattern-matching on frequent occurances and using a map instead of a list as accumulator should perform pretty good, even against bxor versions. 

# Approach
Tail-recursion with map as accumulator holding a key for found unique nums. Once the key is no longer unique in recursive calls, we delete the key from the map.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(log(n))$$

# Code
```
defmodule Solution do
  @spec single_number(nums :: [integer]) :: integer
  def single_number([v]), do: v
  def single_number([v, v]), do: v

  def single_number(nums), do: single_number(nums, %{})
  defp single_number([], acc), do: acc |> Map.values() |> List.first()

  defp single_number([num | tl], acc) do
    acc =
      case Map.get(acc, num) do
        nil -> Map.put(acc, num, num)
        _v -> Map.delete(acc, num)
      end

    single_number(tl, acc)
  end
end
```