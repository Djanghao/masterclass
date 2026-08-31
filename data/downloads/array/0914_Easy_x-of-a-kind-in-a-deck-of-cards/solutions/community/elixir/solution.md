# Elixir, Integer.gcd

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/4289856/](https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/4289856/)

---

# Approach
Computes the frequency counts of the numbers. Performs gcd on all numbers. If the gcd for all the numbers is greater than 1, then the result is true.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec has_groups_size_x(deck :: [integer]) :: boolean
  def has_groups_size_x(deck) do
    case Enum.frequencies(deck) |> Map.values do
      [hd] -> hd > 1
      [hd1, hd2 | tl] -> gcd_list(tl, Integer.gcd(hd1, hd2)) > 1
    end
  end

  defp gcd_list(_, 1), do: 1
  defp gcd_list([], res), do: res
  defp gcd_list([hd |tl], res), do: gcd_list(tl, Integer.gcd(hd, res))
end
```