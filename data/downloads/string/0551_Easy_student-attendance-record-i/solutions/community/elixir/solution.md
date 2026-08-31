# Elixir bitstring matching

**Author:** de4dbeef
**Votes:** 0
**Link:** [https://leetcode.com/problems/student-attendance-record-i/solutions/4980553/](https://leetcode.com/problems/student-attendance-record-i/solutions/4980553/)

---

# Code
```
defmodule Solution do
  @spec check_record(s :: String.t) :: boolean
  def check_record(s) do
    eligible?(s, 0)
  end

  defp eligible?("LLL" <> _rest, _absent?), do: false
  defp eligible?("A" <> _rest, 1), do: false
  defp eligible?("A" <> rest, 0), do: eligible?(rest, 1)
  defp eligible?(<<_, rest::bitstring>>, absent?), do: eligible?(rest, absent?)
  defp eligible?("", _absent?), do: true
end
```