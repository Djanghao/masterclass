# Easy walking elixir solution O(n)

**Author:** frkbmr
**Votes:** 0
**Link:** [https://leetcode.com/problems/simplify-path/solutions/4472592/](https://leetcode.com/problems/simplify-path/solutions/4472592/)

---

# Intuition
    # brute force O(n) -> split on /
    # build on each one, disregarding the slashes
    # start at the root directory, so make sure the value starts on, take a head off of the path

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec simplify_path(path :: String.t) :: String.t
  def simplify_path(path) do
    case path |> String.split("/") do
        [] -> ""
        paths -> 
           s = walk(paths, [])
           case String.first(s) do
              "/" -> s
              _ -> "/" <> s
           end
    end
  end

  def walk([], acc), do: Enum.reverse(acc) |> Enum.join("/")
  def walk([path | t], acc) do
    case path do
        "" -> walk(t, acc) # double slash, just move on
        ".." -> 
        # if we're at the root
            case acc do
                [] -> walk(t, [""])
                _ -> walk(t, tl(acc))
            end
        "." -> walk(t, acc)
        n -> walk(t, [path | acc])
    end
  end
end
```