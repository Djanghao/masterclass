# Elixir: straightforward List.foldl

**Author:** DJAruun
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/5247838/](https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/5247838/)

---

# Intuition
Took the natural route of iterating over the words list and folding it together into one value.

# Approach
Just did a simple fold with the accumulator increasing by one if the word was a prefix of s and the accumulator not increasing if it isnt the case.

# Complexity
- Time complexity:
The time complexity of this function is $$O(n*m)$$, where n is the number of words in the input list and m is the average length of the words. This is because for each word in the list, we are checking if the prefix of length m matches the input string s.

- Space complexity:
The space complexity of this function is $$O(1)$$ because we are only using a constant amount of extra space regardless of the size of the input.

# Code
```
defmodule Solution do
  @spec count_prefixes([String.t()], String.t()) :: non_neg_integer()
  def count_prefixes(words, s) do
    List.foldl(words, 0, fn w, acc ->
      case String.starts_with?(s, w) do
        true -> acc + 1
        false -> acc
      end
    end)
  end
end

```