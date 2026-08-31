# Elixir - a solution that cannot be simpler

**Author:** Aetherus
**Votes:** 7
**Link:** [https://leetcode.com/problems/same-tree/solutions/2197519/](https://leetcode.com/problems/same-tree/solutions/2197519/)

---

```elixir
defmodule Solution do
  @spec is_same_tree(p :: TreeNode.t | nil, q :: TreeNode.t | nil) :: boolean
  def is_same_tree(p, q) do
    p == q
  end
end
```

We can do so because in Elixir, everything is immutable, so if two things initially look the same, they'll never become different; if they are initially different, they'll never become the same either. Thus, comparing references is meaningless. So, in Elixir, `==` compares whole data structures.