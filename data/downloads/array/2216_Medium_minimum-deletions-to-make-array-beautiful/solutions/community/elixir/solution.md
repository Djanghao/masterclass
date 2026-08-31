# Short, simple and easy to read

**Author:** glimmerfors
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/solutions/3356232/](https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/solutions/3356232/)

---

# Code
```
defmodule Solution do
  def min_deletion(nums) do
    delete_doubles(nums, 0)
  end

  defp delete_doubles([] = _nums, count) do
    count
  end

  defp delete_doubles([_] = _nums, count) do
    count + 1
  end

  defp delete_doubles([a | [b | c]] = nums, count) do
    if a == b do
      delete_doubles([b | c], count + 1)
    else
      delete_doubles(c, count)
    end
  end
end
```