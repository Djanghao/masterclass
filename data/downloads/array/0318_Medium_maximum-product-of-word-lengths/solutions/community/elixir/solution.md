# [Elixir] Bitmasking and Map, broken down into smaller functions

**Author:** tiedyedvortex
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/2087972/](https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/2087972/)

---

Okay, so this problem needs us to be able to do several things.

First, we need a way to convert a word into a bitmask. This can be done by taking the word as a charlist, and doing Enum.Reduce with bitwise or (|||) and bitshifting (<<<) to get to a numerical value. So "a" becomes binary 0, "b" becomes binary 10, "c" becomes binary 100, and "abc" becomes binary 111. We can also store the length of the word as we do so, so we end up with "a" as a tuple of {1, 1} while "aaa" becomes a tuple of {1, 3} and "abc" becomes a tuple of {111, 3}.

Then, we need a way to compute the product of two of theses tuples, conditional on them being distinct. With a bitmask, we can check if two words are fully disjoint by taking the bitwise and (&&&) and checking if it's greater than zero--if there are any bits (letters) in common, then this will be positive and return a product length of 0, otherwise we return the product of the lengths.

Then we need a reducer function that updates for one additional word in an accumulated map, along with a running total of the maximum distinct product length. If the map is empty, then there's nothing to compare against: we just insert the word and its length, with a max distinct product of 0 (nothing to multiply it with yet. If the map is NOT empty, then we have to iterate over the key-value pairs in the map to find the largest distinct product we can make with this new word. Having done so, we update both our running maximum if necessary, and we update the map value for this mask. We need to keep only the longest length we've seen; if we've already seen "aaa" and we later see "aa", we want to keep the map as {1, 3} and not overwrite with {1, 2}.

Finally, we apply this larger reducer function accross our initial words array, extracting just the maximum product and returning it. 

```
defmodule Solution do
  use Bitwise

  @spec max_product(words :: [String.t]) :: integer
  def max_product(words) do
    initial = {%{}, 0}
    {_, max_len} = Enum.reduce(words, initial, &insert_word/2)
    max_len
  end

  @spec word_mask_and_length(charlist()) :: {mask :: non_neg_integer(), len :: non_neg_integer()}
  defp word_mask_and_length(charlist) do
    reducer = fn c, {mask, len} ->
      {mask ||| (1 <<< (c - 97)), len+1} end
    intial = {0, 0}
    Enum.reduce(charlist, intial, reducer)
  end

  @spec distinct_product({non_neg_integer(), non_neg_integer()}, {non_neg_integer(), non_neg_integer()}) :: non_neg_integer()
  defp distinct_product({left_mask, left_len}, {right_mask, right_len}) do
    if (left_mask &&& right_mask) > 0 do
      0
    else
      left_len * right_len
    end
  end

  @spec insert_word(String.t(), {%{non_neg_integer() => non_neg_integer()}, non_neg_integer()}) :: {%{non_neg_integer() => non_neg_integer()}, non_neg_integer()}
  defp insert_word(word, {previous_masks, previous_max}) do
    {curr_mask, curr_len} = word |> String.to_charlist |> word_mask_and_length

    if Enum.empty?(previous_masks) do
      {Map.new([{curr_mask, curr_len}]), 0}
    else
      compare = fn {prev_mask, prev_len} ->
        distinct_product({prev_mask, prev_len}, {curr_mask, curr_len}) end

      new_max = previous_masks
        |> Enum.map(compare)
        |> Enum.max
        |> max(previous_max)

      longer_len = max(Map.get(previous_masks, curr_mask, curr_len), curr_len)
      new_set = Map.put(previous_masks, curr_mask, longer_len)

      {new_set, new_max}
    end
  end
end
```