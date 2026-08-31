# Elixir Solution

**Author:** frkbmr
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-ways/solutions/4463633/](https://leetcode.com/problems/decode-ways/solutions/4463633/)

---

# Intuition
Build the subproblem, then memoize it by passing along a map

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec num_decodings(s :: String.t) :: integer
  def num_decodings(s) do
    s |> String.graphemes() |> solve(%{}) |> elem(0)
  end

  def solve([], memo), do: {1, memo}

  def solve(list = [h | tail], memo) do
    case Map.get(memo, list) do
      nil ->
        {take_two_count, memo} = 
          if validate_value(h, Enum.take(tail, 1)) and length(tail) >= 1 do
            solve(tl(tail), memo)
          else
            {0, memo}
          end

        {single_int_count, memo} = 
          case h do
            "0" -> {0, memo}
            _ -> solve(tail, memo)
          end

        result = take_two_count + single_int_count

        {result, Map.put(memo, list, result)}
      result ->
        {result, memo}
    end
  end

  def validate_value(char1, char2) do
    case char1 do
      "0" -> false
      _ ->     
        potential_val = ([char1] ++ char2) |> Enum.join |> String.to_integer()
        potential_val > 0 and potential_val <= 26 
    end
  end
end

```