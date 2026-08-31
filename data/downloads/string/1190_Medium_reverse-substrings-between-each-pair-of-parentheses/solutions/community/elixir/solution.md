# Elixir - O(n) Solution

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/solutions/5457481/](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/solutions/5457481/)

---

# First Try Using a Stack of Stacks

1. Create a stack (`acc` in the code) containing an empty stack.
2. Traverse the string `s`
   - when meets a `(`, push a new empty stack to `acc`
   - when meets a `)`, pop the top of `acc`, and push the chars in the popped stack into the new top of `acc`
   - otherwise push the current char to the top stack in `acc`
3. After finished traversing `s`, `acc` should contain only one stack. Reverse that stack and join the chars in it.

```elixir
defmodule Solution do
  @spec reverse_parentheses(s :: String.t) :: String.t
  def reverse_parentheses(s) do
    solve(s, [[]])
  end

  defp solve(<<?(, rest::binary>>, acc) do
    solve(rest, [[] | acc])
  end

  defp solve(<<?), rest::binary>>, [h1, h2 | t]) do
    solve(rest, [Enum.reverse(h1, h2) | t])
  end 

  defp solve(<<c, rest::binary>>, [h | t]) do
    solve(rest, [[c | h] | t])
  end

  defp solve("", [chars]) do
    chars
    |> Enum.reverse()
    |> List.to_string()
  end
end
```

This works, but in extreme cases (e.g. `"a(b(c(d(e))))"`), each non-paren char switches its place many times (proportional to the depth of the parens it resides in), so the time complexity is $$O(n^2)$$ in worst cases.

# Optimization

We don't merge stacks, instead we push child stack to its parent when its done collecting characters (in the end we have a tree), after that we reverse even layers (0-based) of the tree and keep odd layers as-is, then flatten the tree and join the chars. In this way, each non-paren char changes its place at most once.

## Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

## Code
```Elixir
defmodule Solution do
  @spec reverse_parentheses(s :: String.t) :: String.t
  def reverse_parentheses(s) do
    s
    |> treeify([[]])
    |> toggle(false)
    |> IO.iodata_to_binary()
  end

  defp treeify(<<?(, rest::binary>>, stack) do
    treeify(rest, [[] | stack])
  end

  defp treeify(<<?), rest::binary>>, [h1, h2 | t]) do
    treeify(rest, [[h1 | h2] | t])
  end

  defp treeify(<<char, rest::binary>>, [h | t]) do
    treeify(rest, [[char | h] | t])
  end

  defp treeify("", stack) do
    stack
  end

  defp toggle(stack, reverse?) do
    acc = Enum.reduce(stack, [], fn
      list, acc when is_list(list) ->
        [toggle(list, !reverse?) | acc]

      char, acc ->
        [char | acc]
    end)

    if reverse? do
      acc
    else
      Enum.reverse(acc)
    end
  end
end
```