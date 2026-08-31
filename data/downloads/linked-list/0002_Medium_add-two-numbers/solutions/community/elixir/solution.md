# Pattern Matching with Elixir

**Author:** sawyerwatts
**Votes:** 1
**Link:** [https://leetcode.com/problems/add-two-numbers/solutions/3116408/](https://leetcode.com/problems/add-two-numbers/solutions/3116408/)

---

# Intuition

My first impressions were that this is a very good problem to solve recursively since the data structure and problem are very recursive in nature, which told me that Elixir's strong functional capacities would be a good fit for this problem.

# Approach

I approached this problem with a pattern matching -oriented mindset, capitalizing on Elixir's functional paradigm. From there, I handled the first two easy patterns (from the top down) until I reached the last two patterns, which were the first time I had meaningful data to operate on. 

When considering how exactly the algorithm should work, I mentally did a couple "by hand," and that this is basically how I learned to do addition early in schooling where the numbers are above and below each other and you work right to left, and carry the one whenever the two numbers exceed the 9. From there, the algorithm came together quite nicely.

Initially, I duplicated the logic to handle applying the `carry_the_one?` boolean in both the third and fourth patterns, so I refactored the third pattern to instead create a new list with `val: 1` and call the fourth pattern to remove that duplication. That said, this definitely feels like an area where cleverness may be negatively impacting readability, especially given the simplicity of the duplication removed.

# Complexity

- Time complexity: O(n). This will short curcuit once the end of the smaller list is reached and there aren't anymore ones to carry over, so this will perform at most n+1 steps.

- Space complexity: O(n)

# Code

```ex
# Definition for singly-linked list.
#
# defmodule ListNode do
#   @type t :: %__MODULE__{
#           val: integer,
#           next: ListNode.t() | nil
#         }
#   defstruct val: 0, next: nil
# end

defmodule Solution do
  @spec add_two_numbers(l1 :: ListNode.t | nil, l2 :: ListNode.t | nil) :: ListNode.t | nil
  def add_two_numbers(l1, l2),
    do: go_add_two_numbers(l1, l2, false)

  defp go_add_two_numbers(nil, nil, carry_the_one?),
    do: if carry_the_one?, do: %ListNode{val: 1}, else: nil

  defp go_add_two_numbers(nil, l2, carry_the_one?),
    do: go_add_two_numbers(l2, nil, carry_the_one?)

  defp go_add_two_numbers(l1, nil, carry_the_one?),
    do: if carry_the_one?,
      do: go_add_two_numbers(l1, %ListNode{val: 1}, false),
      else: l1

  defp go_add_two_numbers(l1, l2, carry_the_one?) do
    sum = l1.val + l2.val + (if carry_the_one?, do: 1, else: 0)
    {sum, new_carry_the_one?} =
      if sum > 9,
        do:   {sum - 10, true},
        else: {sum,      false}
    %ListNode{val: sum, next: go_add_two_numbers(l1.next, l2.next, new_carry_the_one?)}
  end

end
```