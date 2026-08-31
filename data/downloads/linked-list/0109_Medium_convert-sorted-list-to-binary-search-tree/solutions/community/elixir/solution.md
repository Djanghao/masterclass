# [Rust / Elixir] YARS (Yet Another Recursive Solution)

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/solutions/3284130/](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/solutions/3284130/)

---

# Approach
- Firstly find the length of linked list.
- Then we can calculate the length `length` of segment needed for *every* subtree to be built.
- Use a recursive function, with the calculated length `length` as a second parameter, and which returns the remaining linked list nodes after going through `length` nodes from the linked list.

# Complexity
- Time complexity: O(n)
- Space complexity: O(n)

n is the total number of nodes.
# Rust
```rust
use std::rc::Rc;
use std::cell::RefCell;
type OptLN = Option<Box<ListNode>>;
type OptTN = Option<Rc<RefCell<TreeNode>>>;

impl Solution {
    pub fn sorted_list_to_bst(head: OptLN) -> OptTN {
        let mut length = 0;
        let mut node = &head;
        while let Some(n) = node.as_ref() {
            length += 1;
            node = &n.next;
        }
        Self::convert(&head, length).0
    }

    fn convert<'a>(head: &'a OptLN, length: i32) -> (OptTN, &'a OptLN) {
        if length == 0 {
            return (None, head);
        }
        let (left, mid) = Self::convert(head, length / 2);
        let node = &mid.as_ref().unwrap().next;
        let (right, remaining) = Self::convert(node, (length - 1) / 2);
        let parent = Some(Rc::new(RefCell::new(TreeNode {
            val: mid.as_ref().unwrap().val,
            left,
            right,
        })));
        (parent, remaining)
    }
}
```
# Elixir
```elixir
defmodule Solution do
  @spec sorted_list_to_bst(head :: ListNode.t | nil) :: TreeNode.t | nil
  def sorted_list_to_bst(head) do
    len = length(head, 0)
    convert(head, len)
    |> elem(0)
  end

  defp length(nil, ans), do: ans
  defp length(node, ans), do: length(node.next, ans + 1)

  defp convert(node, 0), do: {nil, node}
  defp convert(node, len) do
    {left, mid} = convert(node, div(len, 2))
    {right, remaining} = convert(mid.next, div(len - 1, 2))
    parent = %TreeNode{
        val: mid.val,
        left: left,
        right: right,
    }
    {parent, remaining}
  end
end
```