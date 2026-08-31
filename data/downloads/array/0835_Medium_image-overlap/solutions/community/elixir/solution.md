# [Elixir] Brute force solution using Sets

**Author:** juumixx
**Votes:** 1
**Link:** [https://leetcode.com/problems/image-overlap/solutions/2750332/](https://leetcode.com/problems/image-overlap/solutions/2750332/)

---

Converting both images to a set only containing the coordinates of 1-pixels, then counting the matching pixels for all shifted positions of the smaller image.
Wasn't sure it would be fast enough, but finished in just ~1s.
```
defmodule Solution do
  @spec largest_overlap(img1 :: [[integer]], img2 :: [[integer]]) :: integer
  def largest_overlap(img1, img2) do
    l = img1 |> Enum.count()
    i1 = to_set(img1)
    i2 = to_set(img2)

    {smaller, larger} =
      if MapSet.size(i1) < MapSet.size(i2) do
        {i1, i2}
      else
        {i2, i1}
      end

    for y <- (1 - l)..(l - 1) do
      for x <- (1 - l)..(l - 1) do
        smaller
        |> Enum.count(fn {a, b} ->
          a = a + x
          b = b + y
          0 <= a && a < l && 0 <= b && b < l && MapSet.member?(larger, {a, b})
        end)
      end
      |> Enum.max()
    end
    |> Enum.max()
  end

  defp to_set(img) do
    img
    |> Enum.with_index(fn row, y -> Enum.with_index(row, fn i, x -> i == 1 && {x, y} end) end)
    |> Enum.flat_map(& &1)
    |> Enum.filter(& &1)
    |> MapSet.new()
  end
end
```