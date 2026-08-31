# Elixir - Bit + BInary search - improved

**Author:** Vxz6N1LRaL
**Votes:** 0
**Link:** [https://leetcode.com/problems/special-array-ii/solutions/6129312/](https://leetcode.com/problems/special-array-ii/solutions/6129312/)

---

# Intuition
The goal is to check if subarrays alternate between odd and even numbers. Instead of looking at every pair in every subarray, I focus on the points in the array where this odd-even pattern changes. By storing these points, it can quickly determine if a subarray satisfies the condition without repeatedly checking every element.

# Approach
Going through the array, I calculate the odd/even (parity) of each number combined with its index using bitwise operations. group consecutive elements with the same parity into sections and mark the indices where the parity changes.
 
For each query, I use binary search to find the section containing the start and end indices. If both indices are in the same section, it means the subarray alternates correctly otherwise, it doesn\u2019t.

I only focus on the points where the parity changes to reduce the amount of data we need to work with.

binary search quickly finds the relevant sections without scanning the whole array

# Complexity
- Time complexity:
    - Building the sections takes $O(n)$, where $n$ is the number of elements in the array.
    - Answering each query takes $O(\\log m)$, where $m$ is the number of sections. For $q$ queries, the total complexity is $O(n + q \\log m)$.


- Space complexity:
    - Storing the section markers requires $O(m)$ space, where $m$ is the number of parity-change sections.


# Code
```elixir []
defmodule Solution do
  import Bitwise

  @spec is_array_special(nums :: [integer], queries :: [[integer]]) :: [boolean]
  def is_array_special(nums, queries) do
    sections =
      nums
      |> Stream.with_index()
      |> Enum.reduce([], fn {n, i}, acc ->
        parity = bxor(n, i) &&& 1
        case acc do
          [] -> [{parity, i}]
          [{last_parity, _} | _] = acc when last_parity != parity -> [{parity, i} | acc]
          _ -> acc
        end
      end)
      |> Enum.reverse()
      |> Enum.map(&elem(&1, 1))
      |> List.to_tuple()

    len = tuple_size(sections)

    Enum.map(queries, fn [from, to] ->
      binary_search(sections, from, 0, len) == binary_search(sections, to, 0, len)
    end)
  end

  defp binary_search(sections, index, low, high) when low >= high do
    elem(sections, low - 1)
  end

  defp binary_search(sections, index, low, high) do
    mid = div(low + high, 2)
    value = elem(sections, mid)

    cond do
      index < value -> binary_search(sections, index, low, mid)
      index > value -> binary_search(sections, index, mid + 1, high)
      true -> value
    end
  end
end
```