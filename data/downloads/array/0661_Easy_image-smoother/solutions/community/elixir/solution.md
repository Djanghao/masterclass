# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/image-smoother/solutions/4238033/](https://leetcode.com/problems/image-smoother/solutions/4238033/)

---

# Approach
Convert the list into a tuple for index based access. Iterate each element in the matrix using tail call recursion and accumulate the average for each position in the resulting list.

# Complexity
- Time complexity:
O(n) where n is the total number of elements in the matrix

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec image_smoother(img :: [[integer]]) :: [[integer]]
  def image_smoother(img) do
    tup = Enum.map(img, &List.to_tuple/1) |> List.to_tuple
    max_i = tuple_size(tup) - 1
    max_j = (elem(tup, 0) |> tuple_size()) - 1
    do_image_smoother(tup, max_i, max_j, max_j, [], [])
  end

  defp do_image_smoother(tup, i, j, max_j, row, acc) when i < 0, do: acc
  defp do_image_smoother(tup, i, j, max_j, row, acc) when j < 0 do
    do_image_smoother(tup, i - 1, max_j, max_j, [], [row | acc])
  end 
  defp do_image_smoother(tup, i, j, max_j, row, acc) do
    cell_avg = get_cell_avg(tup, i, j)
    do_image_smoother(tup, i, j - 1, max_j, [cell_avg | row], acc)
  end

  defp get_cell_avg(tup, i, j) do
    for x <- i-1..i+1, y <- j-1..j+1, el = get_el(tup, x, y), reduce: {0, 0} do
      {sum, count} -> {sum + el, count + 1}
    end |> then(fn {sum, count} -> floor(sum/count) end)
  end

  defp get_el(tup, i, j) do
    elem(tup, i) |> elem(j)
  rescue
    _ -> nil
  end
end
```