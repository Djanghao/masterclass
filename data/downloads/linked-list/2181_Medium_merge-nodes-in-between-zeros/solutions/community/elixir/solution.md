# [Rust / Elixir] YARS (Yet Another Recursive Solution)

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/merge-nodes-in-between-zeros/solutions/5413858/](https://leetcode.com/problems/merge-nodes-in-between-zeros/solutions/5413858/)

---

Discard the first node (which val is 0), then the list can be seen as a collection of segments:
`(val1) -> (val2) -> (val3) -> ... -> (0)`
Convert each segment into a single node with value as the sum of the values.
# Code
```Rust []
type OptNode = Option<Box<ListNode>>;

impl Solution {
    pub fn merge_nodes(head: OptNode) -> OptNode {
        Self::merge(head.unwrap().next)
    }

    fn merge(node: OptNode) -> OptNode {
        match node {
            None => None,
            Some(mut n) => {
                let mut next = Self::merge(n.next);
                if n.val == 0 {
                    n.next = next;
                    Some(n)
                }
                else {
                    next.as_mut().unwrap().val += n.val;
                    next
                }
            }
        }
    }
}
```
```Elixir []
defmodule Solution do
  @spec merge_nodes(head :: ListNode.t | nil) :: ListNode.t | nil
  def merge_nodes(head) do
    merge(head.next)
  end

  defp merge(nil), do: nil
  defp merge(node = %{val: 0}) do
    %{node | next: merge(node.next)}
  end
  defp merge(node) do
    next = merge(node.next)
    %{next | val: next.val + node.val}
  end
end
```