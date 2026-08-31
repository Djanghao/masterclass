# Elixir - O(n) Combinatorial Solution

**Author:** Aetherus
**Votes:** 2
**Link:** [https://leetcode.com/problems/pascals-triangle-ii/solutions/4174682/](https://leetcode.com/problems/pascals-triangle-ii/solutions/4174682/)

---

# Intuition
We all know that the m-th number in the n-th layer of the Pascal triangle is $$n \\choose m$$, but calculating that value requires factorial, or at least $$\\prod ...$$, which is slow.

Fortunately, we need to calculate the whole layer anyway. Can we derive the m-th number basing on the (m-1)-th number?

We know that the m-th number is

$${n \\choose m} \\equiv \\frac{n!}{m!(n-m)!} = \\frac{(m+1) \	imes (m+2) \	imes ... \	imes n}{1 \	imes 2 \	imes ... \	imes (n-m)}$$

So the (m-1)-th number is

$$\\frac{((m-1)+1) \	imes ((m-1)+2) \	imes ... \	imes n}{1 \	imes 2 \	imes ... \	imes (n-(m-1))} = \\frac{m \	imes (m+1) \	imes ... \	imes n}{1 \	imes 2 \	imes ... \	imes (n-m+1)}$$

So

$${n \\choose m} = {n \\choose m - 1} \	imes \\frac{n - m + 1}{m}$$

which means

$$The\\ mth\\ number = the\\ (m-1)th\\ number \	imes \\frac{n - m + 1}{m}$$

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$ (excluding the space of the returned list)

# Code
```
defmodule Solution do
  @spec get_row(row_index :: integer) :: [integer]
  def get_row(n) do
    Enum.reduce(1..n//1, [1], fn m, [h | _] = acc ->
      [div(h * (n - m + 1), m) | acc]
    end)

    # Because the layer is symetric,
    # we don't need to reverse it.
  end
end
```