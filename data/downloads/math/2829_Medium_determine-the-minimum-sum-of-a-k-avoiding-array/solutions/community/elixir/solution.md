# List construction with recursion

**Author:** erinawiggins
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/solutions/5647042/](https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/solutions/5647042/)

---

# Intuition
The idea is to construct a list starting from 1, then conditionally check if the next number to be added forms an 'invalid pair' with any previous number in the list, skipping over it if so, and continuing until the length of the list = n.

# Approach
We can recursively build the list so long as the `length < n`. The condition `if 0 < (k - count) and (k - count) < count` does most of the heavy lifting -- we're capitalizing on the fact that all of the numbers in the list up to this point are > 0 and less than the current iteration. We just need to get the difference between k and count and see if it falls within the same range to determine if there's a complement adding up to `k`.

The function is called again with the iteration value `count` appended to the front if there's no complement found, otherwise it just passes on the existing list and increments the `count` anyway.

# Code
```
defmodule Solution do
  @spec minimum_sum(n :: integer, k :: integer) :: integer
  def minimum_sum(n, k) do
    add_to_list([], 1, n, k)
    |> Enum.sum
  end

  defp add_to_list(list, count, n, k) do
    if (length(list) < n) do
      if 0 < (k - count) and (k - count) < count do
        add_to_list(list, count + 1, n, k)
      else
        add_to_list([count | list], count + 1, n, k)
      end
    else
      list
    end
  end
end
```