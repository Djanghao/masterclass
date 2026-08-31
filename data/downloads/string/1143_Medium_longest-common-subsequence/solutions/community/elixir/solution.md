# Elixir - Built In Functionality

**Author:** KettelBear
**Votes:** 4
**Link:** [https://leetcode.com/problems/longest-common-subsequence/solutions/2912840/](https://leetcode.com/problems/longest-common-subsequence/solutions/2912840/)

---

# Intuition
Knowing the available language library of functions.

# Approach
Use Elixir.

In light of not reinventing the wheel I used the built in function, which is a strong ideology of programming.

# Code
```
defmodule Solution do
  @spec longest_common_subsequence(text1 :: String.t, text2 :: String.t) :: integer
  def longest_common_subsequence(text1, text2) do
    text1
    |> String.myers_difference(text2)
    |> Enum.reduce(0, fn
      {:eq, chars}, acc -> acc + String.length(chars)
      _, acc -> acc
    end)
  end
end
```