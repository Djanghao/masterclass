# Elixir recursion solution

**Author:** PavelPatsey
**Votes:** 0
**Link:** [https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/solutions/5218008/](https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/solutions/5218008/)

---

# Code
```
defmodule Solution do
  @spec special_array(nums :: [integer]) :: integer
  def special_array(nums) do
    do_special_array(0, length(nums), nums)
  end

  defp do_special_array(x, len_nums, _nums) when x > len_nums, do: -1

  defp do_special_array(x, len_nums, nums) do
    counter = get_counter(x, 0, nums)

    if counter == x do
      x
    else
      do_special_array(x + 1, len_nums, nums)
    end
  end

  defp get_counter(_x, counter, []), do: counter

  defp get_counter(x, counter, [head | tail]) do
    counter =
      if head >= x do
        counter + 1
      else
        counter
      end

    get_counter(x, counter, tail)
  end
end
```