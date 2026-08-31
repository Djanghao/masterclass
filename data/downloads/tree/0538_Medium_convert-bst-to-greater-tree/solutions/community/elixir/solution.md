# Elixir in order traversal (I think)

**Author:** stevensonmt
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-bst-to-greater-tree/solutions/1968182/](https://leetcode.com/problems/convert-bst-to-greater-tree/solutions/1968182/)

---

```
  def convert_bst(root) do
    do_convert(root, 0) |> elem(0)
  end
 
  def do_convert(nil, tally), do: {nil, tally}
  def do_convert(node, tally) do
    {right, interim_tally} = do_convert(node.right, tally)
    new_val = interim_tally + node.val
    {left, final_tally} = do_convert(node.left, new_val)
    {%TreeNode{ val: new_val, left: left, right: right}, final_tally}
  end
  ```