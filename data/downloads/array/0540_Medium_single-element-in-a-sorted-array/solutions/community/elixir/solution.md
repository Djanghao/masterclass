# Two approaches in Elixir

**Author:** kkhaniffff
**Votes:** 0
**Link:** [https://leetcode.com/problems/single-element-in-a-sorted-array/solutions/3213974/](https://leetcode.com/problems/single-element-in-a-sorted-array/solutions/3213974/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I've prepared 2 different solutions in Elixir.
# Approach 1
<!-- Describe your approach to solving the problem. -->
Binary search.
Similar idea as many other solutions: 
- if mid element is not equal to previous or next, then we've found the answer
- if mid index is even
    - if mid elemnt is equal to next element, then our answer is in the right side
    - it is in the left side otherwise
- if it is odd
    - if mid element is equal to previous element, answer is in the rigth size
    - else it is in the left side

There are several base cases which have to be considered:
- if length is equal to 1, then the first element is the answer
- if the first is not equal to the second, it is the answer
- if the last element is not equal to the previous one, it is the answer

The last two cases are necessary not to exceed the bounds of the list.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) since we need to convert list to a tuple, otherwise all operations would also require additional list traversals
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1) 
# Code
```
defmodule Solution do
  @spec single_non_duplicate(nums :: [integer]) :: integer
  def single_non_duplicate(nums) do
    tuple = List.to_tuple(nums)
    {left, right} = {0, tuple_size(tuple) - 1}
    
    cond do
        right == 0 -> elem(tuple, 0)
        elem(tuple, 0) != elem(tuple, 1) -> elem(tuple, 0)
        elem(tuple, right) != elem(tuple, right - 1) -> elem(tuple, right)
        true -> binary_search(tuple, left, right)  
    end
  end

  defp binary_search(nums, left, right) when left > right do
    elem(nums, left)
  end

  defp binary_search(nums, left, right) do 
    mid = div(left + right, 2)

    val = elem(nums, mid)
    prev = elem(nums, mid - 1)
    next = elem(nums, mid + 1)

    cond do
        val != prev and val != next -> val
        rem(mid, 2) == 0 -> cond do
            val == next -> binary_search(nums, mid + 1, right)
            true -> binary_search(nums, left, mid - 1)
        end
        true -> cond do 
            val == prev -> binary_search(nums, mid + 1, right)
            true -> binary_search(nums, left, mid - 1)
        end
    end
  end
end
```

# Approach 2
<!-- Describe your approach to solving the problem. -->
We can simply apply bitwise XOR to all elements of our list and the resulting number will be the answer. 

Explanation:

Bitwise XOR operation on equal integers gives zero, and we have a list with all the elements occuring twise except for the one we're looking for.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) since we are traversing an entire list
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
defmodule Solution do
  @spec single_non_duplicate(nums :: [integer]) :: integer
  def single_non_duplicate(nums) do
    Enum.reduce(nums, 0, fn x, acc -> Bitwise.bxor(x, acc) end)
  end
end
```