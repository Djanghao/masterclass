# Bottom-up Elixir recursion approach

**Author:** nickshbln
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-univalue-subtrees/solutions/4980884/](https://leetcode.com/problems/count-univalue-subtrees/solutions/4980884/)

---

# Approach
Bottom-up Elixir recursion approach

# Complexity
- Time complexity: $$O(n)$$

# Code
```
defmodule Solution do
  def count_unival_subtrees(nil), do: 0

  def count_unival_subtrees(root) do
    {count, _, _ } = traverse(root)
    count
  end

  def traverse(%TreeNode{val: val, left: nil, right: nil}) do
    {1, true, val}
  end

  def traverse(%TreeNode{val: val, left: left, right: nil}) do
    case {count, is_uni, uni_value} = traverse(left) do 
        {_, true, ^val} -> {count + 1, true,  val}
        {_, true, _   } -> {count,     false, nil} 
        {_, false, _}   -> {count,     false, nil}
    end
  end

  def traverse(%TreeNode{val: val, left: nil, right: right}) do
    case {count, is_uni, uni_value} = traverse(right) do 
        {_, true, ^val} -> {count + 1, true,  val}
        {_, true, _   } -> {count,     false, nil} 
        {_, false, _}   -> {count,     false, nil}
    end
  end

  def traverse(%TreeNode{val: val, left: left, right: right}) do
    {l_count, l_is_uni, l_uni_value} = traverse(left)
    {r_count, r_is_uni, r_uni_value} = traverse(right)

    case {l_is_uni, r_is_uni, Enum.all?([l_uni_value==r_uni_value, l_uni_value==val])} do
        {true, true, true} -> {l_count + r_count + 1, true, val}
        _                  -> {l_count + r_count, false, nil   }
    end
  end
end

```