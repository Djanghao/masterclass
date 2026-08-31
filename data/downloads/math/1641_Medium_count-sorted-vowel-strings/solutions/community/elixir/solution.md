# Dynamic approach with intermediate results memoized using process dictionary

**Author:** nietaki
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-sorted-vowel-strings/solutions/3448634/](https://leetcode.com/problems/count-sorted-vowel-strings/solutions/3448634/)

---

# Intuition
There are 5 vowels. Each solution of length $$n$$ ending with the vowel $$a$$ can be a result of appending the letter to a solution of length $$n-1$$ ending with a vowel $$<=a$$

# Approach
Dynamic algorithm, where we're building based on the length of the sub-solution and its last letter.

To make sure we're not calculating the same sub-result more than once, we're memoizing them using the `memoize(key, fun)` function.

# Complexity
- Time complexity:
$$O(n * 5) = O(n)$$

- Space complexity:
$$O(n * 5) = O(n)$$

# Code
```
defmodule Solution do
  @vowel_range 1..5

  @spec count_vowel_strings(n :: integer) :: integer
  def count_vowel_strings(n) do
    @vowel_range
    |> Enum.map(&count_length_last(n, &1))
    |> Enum.sum()
  end

  def count_length_last(length, last) do
    memoize({length, last}, fn -> do_count_length_last(length, last) end)
  end 

  def do_count_length_last(length, last)
  def do_count_length_last(1, _), do: 1

  def do_count_length_last(x, vowel) do
    1..vowel
    |> Enum.map(&count_length_last(x-1, &1))
    |> Enum.sum()
  end

  defp memoize(key, fun) do
    case Process.get(key) do
      nil -> 
        ret = fun.()
        Process.put(key, ret)
        ret
      value -> 
        value
    end
  end
end
```