# Simple recursive approach

**Author:** aruZeta
**Votes:** 0
**Link:** [https://leetcode.com/problems/flip-string-to-monotone-increasing/solutions/3064384/](https://leetcode.com/problems/flip-string-to-monotone-increasing/solutions/3064384/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
By iterating the string from left to right recursively, we pass to the next iteration the number of `'1'` it will have on it's left.

When the last character is reached it will return the number of flips it needs to to fix the string from that last position and an accumulator of the `'0'` on the right of the previous character.

Since we did it recursively, each iteration will return to the previous one, and so it will repeat the previous process, checking the count of flips it needs to do and if less than the current minimum change it (note: to calculate the number of flips you just need to sum the number of `'0'` on the left and `'1'` on the right).

# Complexity
- Time complexity: O(n)

- Space complexity: O(1) ig?

# Code
```
defmodule Solution do
  @spec min_flips_mono_incr(s :: String.t) :: integer
  def min_flips_mono_incr(s),
    do: s |> algo(0) |> elem(1)

  def algo(<< sh, st::binary-size(0) >>, ones),
    do: { (if sh == ?1, do: 0, else: 1), ones }

  def algo(<< sh, st::binary >>, ones) do
    if sh == ?1 do
      { zeroes, min } = algo(st, ones + 1)
      { zeroes, min(min, ones + zeroes) }
    else
      { zeroes, min } = algo(st, ones)
      { zeroes + 1, min(min, ones + zeroes) }
    end
  end
end
```