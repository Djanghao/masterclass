# Brute forcing only relevant coordinates

**Author:** glimmerfors
**Votes:** 0
**Link:** [https://leetcode.com/problems/coordinate-with-maximum-network-quality/solutions/3348712/](https://leetcode.com/problems/coordinate-with-maximum-network-quality/solutions/3348712/)

---

# Code
```
defmodule Solution do
  def best_coordinate(towers, radius) do
    {min_x, max_x, min_y, max_y} = get_bounds(towers)

    for y <- min_y..max_y,
        x <- min_x..max_x do
      {[x, y], get_quality(towers, x, y, radius)}
    end
    |> sort()
    |> (fn
        {_coords, 0} -> {[0, 0], 0}
        xyq -> xyq
      end).()
    |> elem(0)
  end

  defp get_bounds(towers) do
    x = Enum.map(towers, &Enum.at(&1, 0))
    y = Enum.map(towers, &Enum.at(&1, 1))

    {Enum.min(x), Enum.max(x), Enum.min(y), Enum.max(y)}
  end

  defp get_quality(towers, x, y, radius) do
    for [i, j, q] <- towers do
      with dist when dist <= radius <- get_dist(i, j, x, y) do
        floor(q / (1 + dist))
      else
        _ -> 0
      end
    end
    |> Enum.sum()
  end

  defp get_quality(i, j, q, x, y, radius) do
    with dist when dist <= radius <- Solution.get_dist(i, j, x, y) do
      floor(q / (1 + dist))
    else
      _ -> 0
    end
  end

  defp get_dist(x1, y1, x2, y2) do
    x = abs(x1 - x2)
    y = abs(y1 - y2)

    x * x + y * y
    |> :math.sqrt()
  end

  defp sort(qualities) do
    qualities
    |> Enum.sort(fn {[x0, y0], q0}, {[x1, y1], q1} ->
      cond do
        q0 < q1 -> false
        q0 > q1 -> true
        true -> cond do
                  x0 < x1 -> true
                  x0 == x1 and y0 < y1 -> true
                  true -> false
                end
      end
    end)
    |> Enum.at(0)
  end
end
```