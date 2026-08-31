# Elixir - Greedy DFS

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-cameras/solutions/2163936/](https://leetcode.com/problems/binary-tree-cameras/solutions/2163936/)

---

A node can have 3 states:
- not monitored
- monitored (but no camera is set on that node)
- camera is set on that node

We recursively set cameras on the tree in post-order. For each node, if all of its children are monitored, we do nothing. If any of its children has a camera on it, then we mark the current node as monitored. If any of its children is not monitored, we set a camera on the current node, and mark its unmonitored children monitored.

An exception is the root node. If all of its children are monitored by their children, we still need to set a camera on the root node.

```elixir
defmodule Solution do
  @not_monitored 0
  @monitored     1
  @cam_set       2
                      
  @spec min_camera_cover(root :: TreeNode.t | nil) :: integer
  def min_camera_cover(nil) do
    0
  end

  def min_camera_cover(root) do
    root = set_cams(root)
    root = if root.val == @not_monitored do
      %{root | val: @cam_set}
    else
      root
    end
    count_cams(root)
  end
    
  defp set_cams(nil) do
    nil
  end
  
  defp set_cams(node) do
    left = set_cams(node.left)
    right = set_cams(node.right)
    case {left, right} do
      {nil, nil} ->
        node
      
      {nil, %{val: @cam_set}} ->
        %{node | val: @monitored, right: right}
      {nil, %{val: @monitored}} ->
        %{node | right: right}
      {nil, %{val: @not_monitored}} ->
        %{node | val: @cam_set, right: %{right | val: @monitored}}
        
      {%{val: @cam_set}, nil} ->
        %{node | val: @monitored, left: left}
      {%{val: @monitored}, nil} ->
        %{node | left: left}
      {%{val: @not_monitored}, nil} ->
        %{node | val: @cam_set, left: %{left | val: @monitored}}
        
      {%{val: @cam_set}, %{val: @cam_set}} ->
        %{node | val: @monitored, left: left, right: right}
      {%{val: @cam_set}, %{val: @monitored}} ->
        %{node | val: @monitored, left: left, right: right}
      {%{val: @cam_set}, %{val: @not_monitored}} ->
        %{node | val: @cam_set, left: left, right: %{right | val: @monitored}}
       
      {%{val: @monitored}, %{val: @cam_set}} ->
        %{node | val: @monitored, left: left, right: right}
      {%{val: @monitored}, %{val: @monitored}} ->
        %{node | left: left, right: right}
      {%{val: @monitored}, %{val: @not_monitored}} ->
        %{node | val: @cam_set, left: left, right: %{right | val: @monitored}}
       
      {%{val: @not_monitored}, %{val: @cam_set}} ->
        %{node | val: @cam_set, left: %{left | val: @monitored}, right: right}
      {%{val: @not_monitored}, %{val: @monitored}} ->
        %{node | val: @cam_set, left: %{left | val: @monitored}, right: right}
      {%{val: @not_monitored}, %{val: @not_monitored}} ->
        %{node | val: @cam_set, left: %{left | val: @monitored}, right: %{right | val: @monitored}}
    end
  end
    
  defp count_cams(nil) do
    0  
  end
    
  defp count_cams(node) do
    left_count = count_cams(node.left)
    right_count = count_cams(node.right)
    
    if node.val == @cam_set do
      left_count + right_count + 1
    else
      left_count + right_count
    end
  end
end
```