# Elixir MapSet Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-unique-binary-string/solutions/4342680/](https://leetcode.com/problems/find-unique-binary-string/solutions/4342680/)

---

```
defmodule Solution do
  @spec find_different_binary_string(nums :: [String.t()]) :: String.t()
  def find_different_binary_string(nums) do
    st =
      nums
      |> Enum.map(&String.to_integer(&1, 2))
      |> MapSet.new()

    len = nums |> hd() |> String.length()

    0..(2 ** len)
    |> Enum.drop_while(&MapSet.member?(st, &1))
    |> hd()
    |> Integer.to_string(2)
    |> String.pad_leading(len, "0")
  end
end

```