# Elixir tail recursion & pattern matching

**Author:** de4dbeef
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/solutions/4866511/](https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/solutions/4866511/)

---

# Intuition
* Start at begining of list.
* Iterate through the list, summing up values.
* If the sum is ever 0, "drop" those values by recursing down with the remaining values
* If the iteration reaches the end and the sum is not 0, note the starting value and repeat process again on the next value. Idea being no sum is possible with that value, so we will definetly return it

# Approach
* It may be against the "spirit" of the problem, but I created helper functions to convert `ListNode` to a native list and another to go from native list to `ListNode`.
  It's still a singly linked list, and I don't feel I get much by disallowing myself from using the built-in pattern matching syntax
* We can perform the above process by recursing and matching our way through the list of values. 
* The function takes 4 values. (1) The current list we're iterating through. (2) the list as it was before we started iterating. (3) The running sum. And (4) the list of values we _know_ we'll keep.
* They are initialized as 1) the tail of the initial list, 2) the initial list, 3) the head value, 4) empty list
* Here are the function cases
  1. The running sum is 0 and there are no more values to check. We're done, return the kept values
  2. The running sum is _not_ 0 and there is exactly one value left. That remaining value is kept, we're done, return the kept values
  3. The running sum is _not_ 0, there are no more values to add. We "keep" the prior head, and begin the process again starting with the next value
  4. The sum is 0, but there are still values to check. We drop those summed values by "restarting" the with the current tail, this effecitively drops the values that sum to 0
  5. The sum is _not_ 0 and there are still values to check. Add the current head to the sum and recurse down

# Complexity
- Time complexity: $$O(n^2)$$. We may iterate over the list of `n`, `n` times

- Space complexity: $$O(n)$$. Just the size of the list
# Code
```
defmodule Solution do
  @spec remove_zero_sum_sublists(head :: ListNode.t | nil) :: ListNode.t | nil
  def remove_zero_sum_sublists(head) do
    head
    |> list_node_to_list()
    |> drop()
    |> list_to_list_node()
  end

  @spec drop([integer]) :: [integer]
  defp drop(l = [h | t]), do: do_drop(t, l, h, [])

  @spec do_drop([integer], [integer], integer, [integer]) :: [integer]
  defp do_drop([], _, 0, keep), do: Enum.reverse(keep)
  defp do_drop([], [h], _sum, keep), do: Enum.reverse([h | keep])

  defp do_drop([], [k, h | t], _sum, keep), do: do_drop(t, [h | t], h, [k | keep])
  defp do_drop([h | t], _, 0, keep), do: do_drop(t, [h | t], h, keep)
  defp do_drop([h | t], last, sum, keep), do: do_drop(t, last, sum + h, keep)

  @spec list_node_to_list(ListNode.t | nil) :: [any]
  defp list_node_to_list(head) do
    head
    |> Stream.unfold(fn
        nil -> nil
        %ListNode{val: val, next: next} -> {val, next}
    end)
    |> Enum.to_list()
  end

  @spec list_to_list_node([any]) :: ListNode.t | nil
  defp list_to_list_node(list) do
    list
    |> Enum.reverse()
    |> Enum.reduce(nil, fn val, next ->
        %ListNode{val: val, next: next}
    end)
  end
end
```