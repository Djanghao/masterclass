# [Elixir] Recursion Approach | Beats 100%

**Author:** sultanfariz
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-1d-array-into-2d-array/solutions/5721471/](https://leetcode.com/problems/convert-1d-array-into-2d-array/solutions/5721471/)

---

![image.png](./images/0.png)

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n^2)$$

# Code
```elixir []
defmodule Solution do
  @spec construct_row(original :: [integer], n :: integer, acc :: [integer]) :: {[integer], [integer]}
  defp construct_row(original, 0, acc), do: {original, Enum.reverse(acc)}
  defp construct_row([], _, _), do: {[], []}
  defp construct_row([h | t], n, acc), do: construct_row(t, n-1, [h | acc])

  @spec construct2_d_array(original :: [integer], m :: integer, n :: integer, acc :: [[integer]]) :: [[integer]]
  defp construct2_d_array([], 0, _, acc), do: acc
  defp construct2_d_array([], _, _, _), do: []
  defp construct2_d_array(_, 0, _, _) , do: []
  defp construct2_d_array(original, m, n, acc) do
    {original, res} = construct_row(original, n, [])
    if res == [], do: [], else: construct2_d_array(original, m-1, n, acc ++ [res])
  end

  @spec construct2_d_array(original :: [integer], m :: integer, n :: integer) :: [[integer]]
  def construct2_d_array(original, m, n) do
    construct2_d_array(original, m, n, [])
  end
end
```