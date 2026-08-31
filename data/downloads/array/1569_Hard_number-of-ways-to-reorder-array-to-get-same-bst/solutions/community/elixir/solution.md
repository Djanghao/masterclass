# Elixir - Recursive solution

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/solutions/3660059/](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/solutions/3660059/)

---

# Intuition
- The first number in `nums` always is the root.
- For all permutations of the descendants of `root`, if the order of the numbers less than the root keeps the same as they are in `nums`, and so is the order of the numbers greater than the root, then the BST keeps the same.
- The number of permutations that keeps the orders of both lesser and greater numbers is just $$\\begin{pmatrix} n \\\\ m \\end{pmatrix}$$ where $$n$$ is the total number of descendants and $$m$$ is the number of the descendants less than the root.
- Recursively find the number of permutations in the left and right subtrees, and multiply them together.

# Time Complexity
$$O(n^2)$$

# Space Complexity
$$O(n^2)$$

# Code
```
defmodule Solution do
  @spec num_of_ways(nums :: [integer]) :: integer
  def num_of_ways(nums) do
    calc(nums) - 1
  end

  @modulus 1_000_000_007

  defp calc([]), do: 1

  defp calc([h | t]) do
    {lesser, greater} = Enum.split_with(t, & &1 < h)

    combinations(length(t), length(lesser))
    |> rem(@modulus)
    |> Kernel.*(calc(lesser))
    |> rem(@modulus)
    |> Kernel.*(calc(greater))
    |> rem(@modulus)
  end

  defp combinations(_n, 0), do: 1

  defp combinations(n, n), do: 1

  defp combinations(n, m) do
    div(Enum.product(m+1..n), Enum.product(1..n-m))
  end
end
```