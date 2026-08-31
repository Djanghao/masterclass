# Elixir solution with handmade zipper

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/unique-binary-search-trees-ii/solutions/1999828/](https://leetcode.com/problems/unique-binary-search-trees-ii/solutions/1999828/)

---

Obviously there are many functions in the `BSTZipper` module that are not used, but I'm just too lazy to clean it up :D

And I know I'm complicating things. I'm just coding a zipper that has tree rotation for fun.

```elixir
defmodule BSTZipper do
  @typep track_step :: {TreeNode.t, :left | :right}
  @typep track :: [track_step]
  @opaque t :: {TreeNode.t, track}

  @spec from_tree(TreeNode.t) :: t
  def from_tree(root) do
    {root, []}
  end
    
  @spec up(t | :error) :: :error | t
  def up(:error), do: :error
  def up({_root, []}), do: :error
  def up({focus, [{parent, :left} | rest]}) do
    {%TreeNode{parent | left: focus}, rest}
  end
  def up({focus, [{parent, :right} | rest]}) do
    {%TreeNode{parent | right: focus}, rest}
  end
  
  @spec left(t | :error) :: :error | t
  def left(:error), do: :error
  def left({%TreeNode{left: nil}, _track}), do: :error
  def left({focus, track}) do
    {focus.left, [{focus, :left} | track]}        
  end
    
  @spec right(t | :error) :: :error | t
  def right(:error), do: :error
  def right({%TreeNode{right: nil}, _track}), do: :error
  def right({focus, track}) do
    {focus.right, [{focus, :right} | track]}        
  end
    
  @spec val(t | :error) :: :error | integer
  def val(:error), do: :error
  def val({focus, _track}), do: focus.val

  @spec set(t | :error, integer) :: t | :error
  def set(:error, _), do: :error
  def set({focus, track}, val) do
    {%TreeNode{focus | val: val}, track}
  end
  
  @spec detach_left(t | :error) :: :error | {TreeNode.t, t}
  def detach_left(:error), do: :error
  def detach_left({focus, track}) do
    subtree = focus.left
    focus = %TreeNode{focus | left: nil}
    {subtree, {focus, track}}
  end
    
  @spec detach_right(t | :error) :: :error | {TreeNode.t, t}
  def detach_right(:error), do: :error
  def detach_right({focus, track}) do
    subtree = focus.right
    focus = %TreeNode{focus | right: nil}
    {subtree, {focus, track}}
  end
  
  @spec attach_left(t | :error, nil | TreeNode.t) :: :error | t
  def attach_left(:error, _), do: :error
  def attach_left({%TreeNode{left: nil} = focus, track}, subtree) do
    {%TreeNode{focus | left: subtree}, track}
  end
  def attach_left({_focus, _track}, _subtree), do: :error
                                              
  @spec attach_right(t | :error, nil | TreeNode.t) :: :error | t
  def attach_right(:error, _), do: :error
  def attach_right({%TreeNode{right: nil} = focus, track}, subtree) do
    {%TreeNode{focus | right: subtree}, track}
  end
  def attach_right({_focus, _track}, _subtree), do: :error
      
  @spec rotate_left(t | :error) :: t | :error
  def rotate_left(:error), do: :error
  def rotate_left({%TreeNode{right: nil}, _track}), do: :error
  def rotate_left(zipper) do
    {subsubtree, subzipper} =
      zipper
      |> right()
      |> detach_left()
    
    {focus, track} = up(subzipper)
    new_focus = %{focus.right | left: %{focus | right: subsubtree}}
    {new_focus, track}
  end
    
  @spec rotate_right(t | :error) :: t | :error
  def rotate_right(:error), do: :error
  def rotate_right({%TreeNode{left: nil}, _track}), do: :error
  def rotate_right(zipper) do
    {subsubtree, subzipper} =
      zipper
      |> left()
      |> detach_right()
    
    {focus, track} = up(subzipper)
    new_focus = %{focus.left | right: %{focus | left: subsubtree}}
    {new_focus, track}
  end

  @spec focus(t | :error) :: TreeNode.t | :error
  def focus(:error), do: :error
  def focus({focus, _track}), do: focus
    
  @spec to_tree(t | :error) :: TreeNode.t | :error
  def to_tree(:error), do: :error
  def to_tree({root, []}), do: root
  def to_tree(zipper) do
    zipper
    |> up()
    |> to_tree()
  end
end
                      
defmodule Solution do 
  import BSTZipper

  @spec generate_trees(n :: integer) :: [TreeNode.t | nil]
  def generate_trees(n) do
    base = 
      1..n
      |> Enum.reduce(nil, fn k, node ->
        %TreeNode{val: k, left: node}
      end)

    do_generate_trees(base, :left_to_right)
  end

  defp do_generate_trees(nil, _), do: [nil]

  defp do_generate_trees(node, direction) do
    rotate = case direction do
      :left_to_right -> &rotate_right/1
      :right_to_left -> &rotate_left/1
    end

    node
    |> from_tree()
    |> Stream.unfold(fn
      :error -> nil
      zipper -> {zipper, rotate.(zipper)}
    end)
    |> Enum.flat_map(fn zipper ->
      node = focus(zipper)
      for left_solution <- do_generate_trees(node.left, :left_to_right),
          right_solution <- do_generate_trees(node.right, :right_to_left) do
        %TreeNode{node | left: left_solution, right: right_solution}
      end
    end)
  end
end
```