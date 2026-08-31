# Elixir Simple Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-missing-and-repeated-values/solutions/4632930/](https://leetcode.com/problems/find-missing-and-repeated-values/solutions/4632930/)

---

```
defmodule Solution do
  @spec find_missing_and_repeated_values(grid :: [[integer]]) :: [integer]
  def find_missing_and_repeated_values(grid) do
    {sum, sum_of_squares} =
      Enum.reduce(grid, {0, 0}, fn row, {sum, sum_of_squares} ->
        row
        |> Enum.reduce({sum, sum_of_squares}, fn n, {sum, sum_of_squares} ->
          {sum + n, sum_of_squares + n * n}
        end)
      end)

    n = length(grid) ** 2
    real_sum = div((1 + n) * n, 2)
    real_sum_of_squares = div(n * (1 + n) * (1 + 2 * n), 6)
    # a: repeated, b: missing
    # a - b
    c1 = sum - real_sum

    # (a - b) * (a + b)
    c2 = sum_of_squares - real_sum_of_squares

    # a + b
    c3 = div(c2, c1)

    a = div(c1 + c3, 2)
    b = a - c1
    [a, b]
  end
end

```