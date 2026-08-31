# Elixir One-Liner Solution

**Author:** bpfaust
**Votes:** 2
**Link:** [https://leetcode.com/problems/counting-bits/solutions/1808013/](https://leetcode.com/problems/counting-bits/solutions/1808013/)

---

# Approach
1. Use a comprehension to create an array from `0` to `n` using the `..` Range notation. 
2. For each value `i` in the range, decompose the value to a list of its digits under base 2 and sum together the list. There is no need to count the 1s, because each 1 will add 1 more to the running sum, and each 0 will add 0. 
# Solution, Time, and Space
439 ms runtime using 56.1 MB of memory. At first this seems large all around, but this solution is running in something greater than O(n) time, as we are performing a summation operation within an O(n) loop. On space I want to say this is O(n log n), noting an `n` of 16 will require summing over 55 elements, which is remarkably close to `16 * log_2(16) = 64`. 

If this is the wrong way of figuring time and space complexities, do let me know in the comments so I may revise this text accordingly.
```
defmodule Solution do
  @spec count_bits(n :: integer) :: [integer]
  def count_bits(n) do
    for i <- 0..n, do: i |> Integer.digits(2) |> Enum.sum()
  end
end
```

# Testcases
```
0
1
2
100
```