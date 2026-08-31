# Elixir - Don't know how to name this approach

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/diagonal-traverse-ii/solutions/4315903/](https://leetcode.com/problems/diagonal-traverse-ii/solutions/4315903/)

---

# Intuition
If the original matrix is a perfect square, then the $$j$$th element in the $$i$$th row of the original matrix will become the $$\\frac{j^2 + (2i+3)j + i(i+1)}{2}$$th element in the final list.

If the original is not a square or it is zig-zag, no problem. We don't need an array anyway. We just pretend that it's a square, then we make a map whose keys are given by the formula above, then sort it by key, then discard the keys. In that case, the keys don't even need to be continuous. They just need to be ordered. (I omitted the divide-by-2 part in the code because it does not change the order)

# Complexity
- Time complexity:
$$O(n \\log n)$$

- Space complexity:
$$O(n \\log n)$$ where the $$\\log n$$ part comes from the HAMT nature of an Elixir map.

# Code
```
defmodule Solution do
  @spec find_diagonal_order(nums :: [[integer]]) :: [integer]
  def find_diagonal_order(nums) do
    for {row, i} <- Stream.with_index(nums),
        {num, j} <- Stream.with_index(row),
        into: %{} do
      k = j * j + (2 * i + 3) * j + (i * (i + 1))
      {k, num}
    end
    |> Enum.sort()
    |> Enum.map(&elem(&1, 1))
  end
end
```