# [Rust / Elixir] with monotonic stack

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-node-in-linked-list/solutions/4831625/](https://leetcode.com/problems/next-greater-node-in-linked-list/solutions/4831625/)

---

Rust: Head-to-tail traversing.
Elixir: Convert to list, then tail-to-head traversing.

# Code
```Rust []
impl Solution {
    pub fn next_larger_nodes(mut head: Option<Box<ListNode>>) -> Vec<i32> {
        let mut ans = Vec::<i32>::new();
        let mut mono = Vec::<(i32, usize)>::new();
        let mut i = 0;
        while let Some(mut n) = head {
            while !mono.is_empty()
            && mono.last().unwrap().0 < n.val {
                ans[mono.pop().unwrap().1] = n.val;
            }
            mono.push((n.val, i));
            ans.push(0);
            i += 1;
            head = n.next.take();
        }
        ans
    }
}
```
```Elixir []
defmodule Solution do
  @spec next_larger_nodes(head :: ListNode.t | nil) :: [integer]
  def next_larger_nodes(head) do
    to_list(head, [])
    |> Enum.reduce({[], []}, &do_reduce/2)
    |> elem(0)
  end

  defp to_list(%{val: x, next: n}, list) do
    to_list(n, [x | list])
  end
  defp to_list(nil, list), do: list

  defp do_reduce(x, {ans, [y | stack]}) when x >= y do
    do_reduce(x, {ans, stack})
  end
  defp do_reduce(x, {ans, [y | stack]}) do
    {[y | ans], [x, y | stack]}
  end
  defp do_reduce(x, {ans, []}) do
    {[0 | ans], [x]}
  end
end
```