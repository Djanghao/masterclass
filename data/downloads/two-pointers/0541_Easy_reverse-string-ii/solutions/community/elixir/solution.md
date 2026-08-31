# Elixir, single pass

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-string-ii/solutions/4217686/](https://leetcode.com/problems/reverse-string-ii/solutions/4217686/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec reverse_str(s :: String.t, k :: integer) :: String.t
  def reverse_str(s, k), do: do_reverse_str(s, k, <<>>)

  defp do_reverse_str(s, k, acc) do
    acc_len = byte_size(acc)
    s_len = byte_size(s)
    cond do
      acc_len == s_len -> acc
      true -> 
        rev? = div(acc_len, k) |> rem(2) == 0
        i = acc_len
        j = min(i - 1 + k, s_len - 1)
        range = if rev?, do: j..i, else: i..j
        acc = for x <- range, into: acc, do: <<:binary.at(s, x)>>
        do_reverse_str(s, k, acc)  
    end 
  end
end
```