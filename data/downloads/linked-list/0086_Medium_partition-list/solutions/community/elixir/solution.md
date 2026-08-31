# [Rust / Elixir] split then extend

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/partition-list/solutions/3910976/](https://leetcode.com/problems/partition-list/solutions/3910976/)

---

# Code
```Rust []
type OptNode = Option<Box<ListNode>>;

impl Solution {
    pub fn partition(mut head: OptNode, x: i32) -> OptNode {
        let mut lt = Some(Box::new(ListNode::new(0)));
        let mut lt_tail = &mut lt;
        let mut ge = Some(Box::new(ListNode::new(0)));
        let mut ge_tail = &mut ge;
        
        while let Some(mut n) = head {
            head = n.next.take();
            if n.val < x {
                lt_tail = Self::append_tail(lt_tail, n);
            }
            else {
                ge_tail = Self::append_tail(ge_tail, n);
            }
        }
        lt_tail.as_mut().unwrap().next = ge.unwrap().next;
        lt.unwrap().next
    }

    fn append_tail<'a>(tail: &'a mut OptNode, n: Box<ListNode>) -> &'a mut OptNode {
        tail.as_mut().unwrap().next.replace(n);
        &mut tail.as_mut().unwrap().next
    }
}
```
```Elixir []
defmodule Solution do
  @spec partition(head :: ListNode.t | nil, x :: integer) :: ListNode.t | nil
  def partition(head, x) do
    split(head, x, nil, nil)
  end

  defp split(nil, _, lt, ge) do
    reverse(ge, nil)
    |> then(&reverse(lt, &1))
  end
  defp split(node = %ListNode{val: y}, x, lt, ge)
  when y < x do
    split(node.next, x, %{node | next: lt}, ge)
  end
  defp split(node, x, lt, ge) do
    split(node.next, x, lt, %{node | next: ge})
  end

  defp reverse(nil, append), do: append
  defp reverse(node, append) do
    reverse(node.next, %{node | next: append})
  end
end
```