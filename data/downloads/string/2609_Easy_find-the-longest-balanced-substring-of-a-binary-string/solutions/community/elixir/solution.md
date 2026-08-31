# Elixir, single pass

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/solutions/4740283/](https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/solutions/4740283/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec find_the_longest_balanced_substring(s :: String.t) :: integer
  def find_the_longest_balanced_substring(s) do
    for <<x <- s>>, reduce: {0, 0, 0} do
      {zero_count, one_count, res} -> cond do
        x == ?0 && one_count > 0 -> {1, 0, max(res, one_count)}
        x == ?0 -> {zero_count + 1, 0, res}
        x == ?1 && one_count < zero_count -> {zero_count, one_count + 1, res}
        true -> {0, 0, max(res, one_count)} 
      end
    end |> then(fn {zero_count, one_count, res} -> 
      max(res, min(zero_count, one_count)) * 2
    end)
  end
end
```