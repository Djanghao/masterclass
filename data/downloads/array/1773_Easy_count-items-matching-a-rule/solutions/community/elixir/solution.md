# Elixir, uses Enum.count/2

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-items-matching-a-rule/solutions/4454572/](https://leetcode.com/problems/count-items-matching-a-rule/solutions/4454572/)

---


# Approach
Iterate each item and check if the item value for the given key is equal to the given value and count the results.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec count_matches(items :: [[String.t]], rule_key :: String.t, rule_value :: String.t) :: integer
  def count_matches(items, rule_key, rule_value) do
    Enum.count(items, fn item -> get_val(item, rule_key) == rule_value end)
  end

  defp get_val(item, key) do
    case key do
      "type" -> hd(item)
      "name" -> List.last(item)
      _ -> [_, val, _] = item
           val
    end
  end
end
```