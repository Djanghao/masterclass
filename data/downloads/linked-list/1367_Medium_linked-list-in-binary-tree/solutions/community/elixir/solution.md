# [Elixir] Recursion Approach | Beats 100%

**Author:** sultanfariz
**Votes:** 0
**Link:** [https://leetcode.com/problems/linked-list-in-binary-tree/solutions/5750549/](https://leetcode.com/problems/linked-list-in-binary-tree/solutions/5750549/)

---

![image.png](./images/0.png)

# Approach
Iterate every node and check if node value equals to linked list head value. If yes, iterate both left and right nodes along with the next node of linked list. If not, iterate with linked list starting from the initial head.
To avoid Time Limit Exceeded error, return the true and break the current function whenever there's a child function that returned true.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```elixir []
# Definition for singly-linked list.
#
# defmodule ListNode do
#   @type t :: %__MODULE__{
#           val: integer,
#           next: ListNode.t() | nil
#         }
#   defstruct val: 0, next: nil
# end

# Definition for a binary tree node.
#
# defmodule TreeNode do
#   @type t :: %__MODULE__{
#           val: integer,
#           left: TreeNode.t() | nil,
#           right: TreeNode.t() | nil
#         }
#   defstruct val: 0, left: nil, right: nil
# end

defmodule Solution do
  @spec traverse(head :: ListNode.t | nil, root :: TreeNode.t | nil) :: boolean
  defp traverse(nil, _), do: true
  defp traverse(_, nil), do: false
  defp traverse(head, root) when head.val == root.val do
    traverse(head.next, root.left) 
    or traverse(head.next, root.right)
  end
  defp traverse(_, _), do: false

  @spec is_sub_path(head :: ListNode.t | nil, root :: TreeNode.t | nil) :: boolean
  def is_sub_path(_, nil), do: false
  def is_sub_path(head, root) do
    case traverse(head, root) do
      true -> true
      false -> is_sub_path(head, root.left) or is_sub_path(head, root.right)
    end
  end
end
```