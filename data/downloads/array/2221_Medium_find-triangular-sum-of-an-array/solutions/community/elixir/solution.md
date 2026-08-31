# Simple Elixir Solution

**Author:** WindexOriginal
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-triangular-sum-of-an-array/solutions/3989540/](https://leetcode.com/problems/find-triangular-sum-of-an-array/solutions/3989540/)

---


# Approach
We can use [Enum.chunk_every](https://hexdocs.pm/elixir/1.12/Enum.html#chunk_every/4) to chunk the list.  Once the list is chunked we can map those chunks into sums mod 10.

Pattern matching in the triangular sum function recognizes the base case of a single element list and makes a recursive call in all other cases.

# Complexity
- Time complexity:
    - For every triangle sum run: 
        - One run through the list to chunk.
        - Another run through the list to map to sums.
        - **NOTE** We could improve performance by chunking and summing in the same run, but we would need to write a custom reducer and we wouldn't save that much time.
    - The number of triangle sum runs:
        - The number of elements in the list is halved each run.
    - Overall: N log(N)


# Code
```
defmodule Solution do
  @spec triangular_sum(nums :: [integer]) :: integer
  def triangular_sum([a]), do: a
  def triangular_sum(nums) do
    triangular_sum(triangle_round(nums))
  end

  def triangle_round(list) do
    list 
    |> Enum.chunk_every(2, 1, :discard)
    |> Enum.map(fn [n1, n2] -> 
      rem(n1 + n2, 10)
    end)
  end

end
```