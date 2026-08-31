# Scan twice with rating & candy of current and previous child

**Author:** Broplem
**Votes:** 0
**Link:** [https://leetcode.com/problems/candy/solutions/4880596/](https://leetcode.com/problems/candy/solutions/4880596/)

---

Each child must have at least one candy more than neighboring children with a lower rank.

We can achieve this by initially assigning each child one candy, then increasing the amount of candy for each child with a lower-rated neighbor.

To reduce time complexity, we scan the list once in each direction, comparing each child only to the previous child. A scan will only preserve or increase a child's candy total, ensuring that changes from the previous scan are preserved.

# Code
```
defmodule Solution do
  @spec candy(ratings :: [integer]) :: integer
  def candy(ratings) do
    ratings 
    # Each child initially gets one candy
    |> Enum.map(&({ &1, 1 }))
    # Adjust candy for children based on left neighbor's rating
    |> Enum.scan(&adjust_candy/2)
    # Adjust candy for children based on right neighbor's rating
    |> Enum.reverse() |> Enum.scan(&adjust_candy/2)
    # Get candy total
    |> Enum.map(&(elem(&1, 1))) |> Enum.sum()
  end

  defp adjust_candy({ rating, candy }, { prev_rating, prev_candy }) do
    if rating > prev_rating,
      do: { rating, max(prev_candy + 1, candy) },
      else: { rating, candy }
  end
end
```