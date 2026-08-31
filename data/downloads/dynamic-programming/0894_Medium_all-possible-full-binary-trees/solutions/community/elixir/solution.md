# Elixir recursive solution

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/all-possible-full-binary-trees/solutions/3218204/](https://leetcode.com/problems/all-possible-full-binary-trees/solutions/3218204/)

---

the `for` comprehension syntax makes the solution look very nice.
# Code
```elixir
defmodule Solution do
  @spec all_possible_fbt(n :: integer) :: [TreeNode.t | nil]
  def all_possible_fbt(1), do: [%TreeNode{}]
  def all_possible_fbt(n) do
    for i <- 1..n - 2//2,
    l <- all_possible_fbt(i),
    r <- all_possible_fbt(n - 1 - i) do
      %TreeNode{left: l, right: r}
    end
  end
end
```
Same logic but using `Enum.flat_map`.
```elixir
defmodule Solution do
  @spec all_possible_fbt(n :: integer) :: [TreeNode.t | nil]
  def all_possible_fbt(1), do: [%TreeNode{}]
  def all_possible_fbt(n) do
    (1..n - 2//2)
    |> Enum.flat_map(fn i ->
      all_possible_fbt(i)
      |> Enum.flat_map(fn l ->
        all_possible_fbt(n - 1 - i)
        |> Enum.map(fn r ->
          %TreeNode{left: l, right: r}
        end)
      end)
    end)
  end
end
```