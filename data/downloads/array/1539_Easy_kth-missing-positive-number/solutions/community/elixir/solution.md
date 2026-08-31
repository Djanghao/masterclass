# O(log n) solution using binary search in Elixir

**Author:** syeo66
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-missing-positive-number/solutions/4746435/](https://leetcode.com/problems/kth-missing-positive-number/solutions/4746435/)

---

# Code
```
defmodule Solution do
  @spec find_kth_positive(arr :: [integer], k :: integer) :: integer
  def find_kth_positive(arr, k) do
    find_kth_positive(arr, k, 0, length(arr) - 1)
  end

  def find_kth_positive(arr, k, l, h) do
    if l <= h do
        m = div((l + h), 2)
        # calculate the missing numbers
        miss = Enum.at(arr, m) - m - 1;
        if miss < k do
            find_kth_positive(arr, k, m + 1, h)
        else
            find_kth_positive(arr, k, l, m - 1)
        end
    else
        h + 1 + k
    end
  end
end
```