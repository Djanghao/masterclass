# Elixir, uses for comprehension

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-square-sum-triples/solutions/4551174/](https://leetcode.com/problems/count-square-sum-triples/solutions/4551174/)

---

# Approach
Use for comprehension to iterate a and b, find the square root of a\xB2 + b\xB2, check if it is a whole number within the range 1..n. If so add 2 to the result since (a,b,c) and (b,a,c) are both valid triplets.

# Complexity
- Time complexity:
O(n\xB2)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec count_triples(n :: integer) :: integer
  def count_triples(n) when n < 3, do: 0
  def count_triples(n) do
    for a <- 1..(n-2), b <- (a+1)..(n-1), c = :math.sqrt((a * a) + (b * b)),
        round(c) == c, c <= n, reduce: 0 do
      acc -> acc + 2
    end
  end
end
```