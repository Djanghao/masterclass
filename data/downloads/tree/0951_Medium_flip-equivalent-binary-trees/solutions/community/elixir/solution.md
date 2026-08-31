# Elixir & C - Easy solution

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/flip-equivalent-binary-trees/solutions/5960085/](https://leetcode.com/problems/flip-equivalent-binary-trees/solutions/5960085/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$ when the tree is extremely unbalanced.

# Code
```elixir [Elixir]
defmodule Solution do
  @spec flip_equiv(root1 :: TreeNode.t | nil, root2 :: TreeNode.t | nil) :: boolean
  def flip_equiv(
    %TreeNode{val: val, left: left1, right: right1},
    %TreeNode{val: val, left: left2, right: right2}
  ) do
    # the precedence of `and/2` is higher 
    # than the precedence of `or/2`
    flip_equiv(left1 , left2 ) and
    flip_equiv(right1, right2) or
    flip_equiv(left1 , right2) and
    flip_equiv(right1, left2 )
  end

  def flip_equiv(nil, nil), do: true

  def flip_equiv(_, _), do: false
end
```

```c [C]
bool flipEquiv(struct TreeNode* root1, struct TreeNode* root2) {
  // If both root1 and root2 are NULL
  // or they point to the same struct,
  // return true.
  if (root1 == root2) return true;

  // If only one of them is NULL,
  // return false.
  if (!root1 || !root2) return false;

  // If the values of them are not equal,
  // return false.
  if (root1->val != root2->val) return false;

  // Recursively check the children.
  return
    flipEquiv(root1->left, root2->left) &&
    flipEquiv(root1->right, root2->right) ||
    flipEquiv(root1->left, root2->right) &&
    flipEquiv(root1->right, root2->left);
}
```