# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/circular-sentence/solutions/4701061/](https://leetcode.com/problems/circular-sentence/solutions/4701061/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec is_circular_sentence(sentence :: String.t) :: boolean
  def is_circular_sentence(sentence) do
    last_char = :binary.at(sentence, byte_size(sentence) - 1)
    last_char == :binary.at(sentence, 0) &&
    do_is_circular_sentence(sentence)
  end

  defp do_is_circular_sentence(<<x, ?\\s, y, rest::bytes>>) do
    x == y && do_is_circular_sentence(<<y, rest::bytes>>)
  end
  defp do_is_circular_sentence(<<_, rest::bytes>>), do: do_is_circular_sentence(rest)
  defp do_is_circular_sentence(_), do: true
end
```