# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-the-sentence-is-pangram/solutions/4510269/](https://leetcode.com/problems/check-if-the-sentence-is-pangram/solutions/4510269/)

---

# Approach
Iterate the characters one by one and delete them from a MapSet containing all the alphabets. Return true if all the alphabets in the MapSet are deleted and the MapSet is empty.

# Complexity
- Time complexity:
O(n)
- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @alphabets ?a..?z |> MapSet.new
  @spec check_if_pangram(sentence :: String.t) :: boolean
  def check_if_pangram(sentence), do: do_check_if_pangram(sentence, @alphabets)

  defp do_check_if_pangram(<<ch, rest::bytes>>, alphabets) do
    MapSet.size(alphabets) == 0 || do_check_if_pangram(rest, MapSet.delete(alphabets, ch))
  end
  defp do_check_if_pangram(_, alphabets), do: MapSet.size(alphabets) == 0
end
```