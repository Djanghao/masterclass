# [Rust / Elixir] YARS (Yet Another Recursive Solution)

**Author:** Minamikaze392
**Votes:** 2
**Link:** [https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/solutions/4034849/](https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/solutions/4034849/)

---

# Code
```Rust []
type OptNode = Option<Box<ListNode>>;

impl Solution {
    pub fn double_it(head: OptNode) -> OptNode {
        match Self::times2(head) {
            (node, 0) => node,
            (node, carry) => Some(Box::new(ListNode {
                val: carry,
                next: node,
            })),
        }
    }

    fn times2(node: OptNode) -> (OptNode, i32) {
        match node {
            None => (None, 0),
            Some(mut b) => {
                let (node2, carry) = Self::times2(b.next.take());
                let sum = b.val * 2 + carry;
                b.val = sum % 10;
                b.next = node2;
                (Some(b), sum / 10)
            }
        }
    }
}
```
```Elixir []
defmodule Solution do
  @spec double_it(head :: ListNode.t | nil) :: ListNode.t | nil
  def double_it(head) do
    case convert(head) do
      {node, 0} -> node
      {node, 1} -> %ListNode{val: 1, next: node}
    end
  end

  defp convert(nil), do: {nil, 0}
  defp convert(node) do
    {node2, carry} = convert(node.next)
    sum = 2 * node.val + carry
    {%ListNode{val: rem(sum, 10), next: node2}, div(sum, 10)}
  end
end
```
# Extra
Single loop solution:
```rust
type OptNode = Option<Box<ListNode>>;

impl Solution {
    pub fn double_it(mut head: OptNode) -> OptNode {
        if head.as_ref().unwrap().val >= 5 {
            head = Some(Box::new(ListNode {
                val: 0,
                next: head,
            }));
        }
        
        let mut node = &mut head;
        while let Some(n) = node.as_mut() {
            let double = n.val * 20
                + n.next.as_ref().map_or(0, |n2| n2.val * 2);
            n.val = (double / 10) % 10;
            node = &mut n.next;
        }
        head
    }
}
```