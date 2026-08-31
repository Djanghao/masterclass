# Elixir, two pass, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/solutions/4454500/](https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/solutions/4454500/)

---

# Approach
For a string of any size, there are only two possible ways for the alternating string to be created. Check the mismatch counts for both versions and return the smallest of them.

"011010"
Two possible versions = "010101", "101010"
To achieve this version "010101", 4 changes have to be made
To achieve this version "101010", only 2 changes have to be made
Hence the answer is 2.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec min_operations(s :: String.t) :: integer
  def min_operations(s), do: min(do_min_operations(s, ?1, 0), do_min_operations(s, ?0, 0))
  
  defp do_min_operations(<<f, rest::bytes>>, required, mismatch_count) do
    mismatch_count = if f == required, do: mismatch_count, else: mismatch_count + 1
    do_min_operations(rest, get_alternate(required), mismatch_count)
  end
  defp do_min_operations(_, _, mismatch_count), do: mismatch_count

  defp get_alternate(ch), do: if ch == ?1, do: ?0, else: ?1
end
```