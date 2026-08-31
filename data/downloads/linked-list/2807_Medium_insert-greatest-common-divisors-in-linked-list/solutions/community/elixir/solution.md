# Elixir simple two functions.

**Author:** spring555
**Votes:** 1
**Link:** [https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/solutions/4887812/](https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/solutions/4887812/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 312ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 81.12MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
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
  @spec insert_greatest_common_divisors(head :: ListNode.t | nil) :: ListNode.t | nil
  def insert_greatest_common_divisors(head) when head.next != nil do
    %ListNode{val: head.val, next: %ListNode{val: Integer.gcd(head.val, head.next.val), next: insert_greatest_common_divisors(head.next)}}
  end

  def insert_greatest_common_divisors(head) do
    head
  end
end

```