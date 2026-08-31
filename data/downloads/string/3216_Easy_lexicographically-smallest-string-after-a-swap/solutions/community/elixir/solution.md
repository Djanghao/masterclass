# Elixir - binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-a-swap/solutions/5543638/](https://leetcode.com/problems/lexicographically-smallest-string-after-a-swap/solutions/5543638/)

---

# Complexity
- Time complexity:
O(n) where n is the length of input string

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec get_smallest_string(s :: String.t) :: String.t
  def get_smallest_string(s), do: do_get_smallest_string(s, <<>>)

  defp do_get_smallest_string(s, result) when byte_size(s) == 1, do: result <> s
  defp do_get_smallest_string(<<n1s, n2s, rest::bytes>>, result) do
    n1 = n1s - ?0
    n2 = n2s - ?0
    if (rem(n1, 2) == rem(n2, 2)) && n2 < n1,
    do: <<result::bytes, n2s, n1s, rest::bytes>>,
    else: do_get_smallest_string(<<n2s, rest::bytes>>, <<result::bytes, n1s>>)
  end
end
```