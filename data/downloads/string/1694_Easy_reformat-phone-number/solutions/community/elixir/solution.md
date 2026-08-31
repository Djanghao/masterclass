# Straightforward Elixir

**Author:** erinawiggins
**Votes:** 0
**Link:** [https://leetcode.com/problems/reformat-phone-number/solutions/5963984/](https://leetcode.com/problems/reformat-phone-number/solutions/5963984/)

---

# Approach
First remove the dashes and spaces. We chunk the characters into groups of three and join them with a dash. Finally, we need to account for the case where a single digit is isolated after a dash at the end of the string -- In that case, we use regex to swap the -3 digit and the -2 dash.

# Code
```elixir []
defmodule Solution do
  @spec reformat_number(number :: String.t) :: String.t
  def reformat_number(number) do
    result = String.replace(number, ~r/[- ]/, "")
    |> String.graphemes
    |> Enum.chunk_every(3)
    |> Enum.join("-")

    if rem(String.length(result), 4) == 1 do
      String.replace(result, ~r/(.)-(.)$/, "-\\\\1\\\\2")
    else
      result
    end
  end
end
```