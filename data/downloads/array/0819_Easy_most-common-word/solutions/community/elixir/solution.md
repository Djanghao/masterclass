# Straightforward Elixir-style approach

**Author:** nickshbln
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-common-word/solutions/4976082/](https://leetcode.com/problems/most-common-word/solutions/4976082/)

---

# Approach
Nothing complicated, just step-by-step Elixir-style data transformation 

# Complexity
- Time complexity:
$$O(n)$$


# Code
```
defmodule Solution do
  @spec most_common_word(paragraph :: String.t(), banned :: [String.t()]) :: String.t()
  def most_common_word(paragraph, banned) do
    paragraph
    |> String.replace(~r/[!?',;.]/, " ")
    |> String.split()
    |> Enum.map(fn word -> String.downcase(word) end)
    |> Enum.reject(fn word -> Enum.member?(banned, word) end)
    |> Enum.frequencies()
    |> Enum.max_by(fn {_key, val} -> val end)
    |> elem(0)
  end
end

```