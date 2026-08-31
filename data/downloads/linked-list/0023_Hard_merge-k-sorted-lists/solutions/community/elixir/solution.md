# [Rust / Elixir] Merge sort

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/merge-k-sorted-lists/solutions/3286069/](https://leetcode.com/problems/merge-k-sorted-lists/solutions/3286069/)

---

# Approach
Just like the 2nd part (merging) of the Merge sort algorithm.

# Complexity
- Time complexity: O(n*log(k))

- Space complexity: O(1)

where n is total number of nodes, k is length of `lists`.

# Rust
```rust
type OptNode = Option<Box<ListNode>>;

impl Solution {
    pub fn merge_k_lists(mut lists: Vec<OptNode>) -> OptNode {
        if lists.is_empty() {
			return None;
        }
		while lists.len() > 1 {
			for i in 0..(lists.len() + 1) / 2 {
				if i * 2 + 1 == lists.len() {
					lists[i] = lists[i * 2].take();
				}
				else {
					lists[i] = Self::merge_two(lists[i * 2].take(), lists[i * 2 + 1].take());
				}
			}
			lists.truncate((lists.len() + 1) / 2);
		}
		lists.pop().unwrap()
    }

	fn merge_two(mut list1: OptNode, mut list2: OptNode) -> OptNode {
		let mut dummy = Some(Box::new(ListNode::new(0)));
		let mut tail = &mut dummy;
		loop {
			match (list1.as_mut(), list2.as_mut()) {
				(Some(n1), Some(n2)) => {
					if n1.val < n2.val {
						let next = n1.next.take();
						tail.as_mut().unwrap().next = list1;
						tail = &mut tail.as_mut().unwrap().next;
						list1 = next;
					}
					else {
						let next = n2.next.take();
						tail.as_mut().unwrap().next = list2;
						tail = &mut tail.as_mut().unwrap().next;
						list2 = next;
					}
				}
				(Some(_), None) => {
					tail.as_mut().unwrap().next = list1;
					break;
				}
				(None, _) => {
					tail.as_mut().unwrap().next = list2;
					break;
				}
			}
		}
		dummy.unwrap().next
	}
}
```
# Elixir
```elixir
defmodule Solution do
  @spec merge_k_lists(lists :: [ListNode.t | nil]) :: ListNode.t | nil
  def merge_k_lists([]), do: nil
  def merge_k_lists([node]), do: node
  def merge_k_lists(lists) do
    Stream.chunk_every(lists, 2)
    |> Enum.map(&merge/1)
    |> merge_k_lists()
  end

  defp merge([list1]), do: list1
  defp merge([list1, list2]) do
    merge_two(list1, list2, nil)
  end

  defp merge_two(list1, nil, ans), do: reverse(ans, list1)
  defp merge_two(nil, list2, ans), do: reverse(ans, list2)
  defp merge_two(list1, list2, ans) when list1.val < list2.val do
    merge_two(list1.next, list2, %{list1 | next: ans})
  end
  defp merge_two(list1, list2, ans) do
    merge_two(list1, list2.next, %{list2 | next: ans})
  end
  
  defp reverse(nil, tail), do: tail
  defp reverse(list, tail) do
    reverse(list.next, %{list | next: tail})
  end
end
```