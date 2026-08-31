# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-email-addresses/solutions/4292745/](https://leetcode.com/problems/unique-email-addresses/solutions/4292745/)

---

# Approach
Uses tail call recursion and binary pattern matching to read each character of the email and clean it to proper form. Uses a set to keep track of cleaned emails to return the number of unique emails.

# Complexity
- Time complexity:
O(n) where n is the total number of characters in all the email strings

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec num_unique_emails(emails :: [String.t]) :: integer
  def num_unique_emails(emails), do: do_num_unique_emails(emails, MapSet.new())

  defp do_num_unique_emails([], acc), do: MapSet.size(acc)
  defp do_num_unique_emails([hd | tl], acc), do: do_num_unique_emails(tl, MapSet.put(acc, clean_email(hd, <<>>)))

  defp clean_email(<<>>, res), do: res
  defp clean_email(<<"@", _::bytes>> = rest, res), do: <<res::bytes, rest::bytes>>
  defp clean_email(<<".", rest::bytes>>, res), do: clean_email(rest, res)
  defp clean_email(<<"+", rest::bytes>>, res), do: clean_email(skip_local_name(rest), res)
  defp clean_email(<<f, rest::bytes>>, res), do: clean_email(rest, <<res::bytes, f>>)

  defp skip_local_name(<<"@", _::bytes>> = rest), do: rest
  defp skip_local_name(<<_, rest::bytes>>), do: skip_local_name(rest)  
end
```