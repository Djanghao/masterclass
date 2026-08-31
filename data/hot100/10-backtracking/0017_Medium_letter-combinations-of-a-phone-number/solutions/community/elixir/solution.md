# Elixir Cartesian Solution

**Author:** Aetherus
**Votes:** 2
**Link:** [https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/2005930/](https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/2005930/)

---

No DP, no backtracking, even no explicit recursion.

```elixir
defmodule Solution do
  @keyboard %{
    ?1 => '',
    ?2 => 'abc',
    ?3 => 'def',
    ?4 => 'ghi',
    ?5 => 'jkl',
    ?6 => 'mno',
    ?7 => 'pqrs',
    ?8 => 'tuv',
    ?9 => 'wxyz',
    ?0 => ' '
  }

  @spec letter_combinations(digits :: String.t) :: [String.t]
  def letter_combinations(""), do: []

  def letter_combinations(<<d>>) when d in ?0..?9 do
    Enum.map(@keyboard[d], &<<&1>>)  
  end

  def letter_combinations(digits) do
    digits
    |> String.to_charlist()
    |> Stream.map(&@keyboard[&1])
    |> Enum.reduce(&cartesian(&2, &1))
    |> Enum.map(&IO.iodata_to_binary/1)
  end
  
  @spec cartesian(iolist, iolist) :: iolist
  defp cartesian(iolist1, iolist2) do
    for a <- iolist1, b <- iolist2, do: [a, b]
  end
end
```