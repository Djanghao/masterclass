# Elixir solution with Union Find/Disjoint Set

**Author:** kkhaniffff
**Votes:** 0
**Link:** [https://leetcode.com/problems/similar-string-groups/solutions/3463316/](https://leetcode.com/problems/similar-string-groups/solutions/3463316/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Simply check every string with every other and, if they are similar, add them into a group. Use disjoint set to keep track of strings from the same group. 

# Approach
<!-- Describe your approach to solving the problem. -->
Initialize Disjoint Set with the size `n`, which is the number of strings in a list `strs`. 

Iterate over strings and for each string `i`, check if it is simimar with every other string `j`, for every `j > i` (to avoid checking 2 strings twice). 

For every similar string, use union operation and decrement total number of groups.

Return total number of remaining groups after checking all pairs of strings.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(m * n ^ 2) - where n is the number of strings and m is their length

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n) - storing two maps of lenth n in Disjoint Set

# Code
```
defmodule DisjointSet do
    defstruct root: %{}, rank: %{}, groups: 0

    def new(n) do
        {root, rank} = Enum.reduce(1..n, {%{}, %{}}, fn i, {root, rank} ->
            {Map.put(root, i, i), Map.put(rank, i, 1)}
        end)

        %DisjointSet{root: root, rank: rank, groups: n}
    end

    def find(ds, x) do
        root = ds.root[x]
        if x == root, do: x, else: find(ds, root)
    end

    def union(ds, x, y) do
        x_root = find(ds, x)
        y_root = find(ds, y)

        cond do
            x_root == y_root -> ds

            ds.rank[x_root] > ds.rank[y_root] ->
                %{ds |
                    root: %{ds.root | y_root => x_root}, 
                    groups: ds.groups - 1
                }

            ds.rank[x_root] < ds.rank[y_root] ->
                %{ds | 
                    root: %{ds.root | x_root => y_root}, 
                    groups: ds.groups - 1
                }

            true ->
                %{ds |
                    root: %{ds.root | x_root => y_root}, 
                    rank: %{ds.rank | y_root => ds.rank[y_root] + 1},
                    groups: ds.groups - 1
                }
        end
    end
end

defmodule Solution do
    @spec num_similar_groups(strs :: [String.t]) :: integer
    def num_similar_groups(strs) do
        len = length(strs)
        count(strs, 1, DisjointSet.new(len))
    end

    defp count([h], _i, ds), do: ds.groups
    defp count([h | t], i, ds) do
        t
        |> Enum.with_index(i + 1) 
        |> Enum.reduce(ds, fn {x, j}, ds -> 
            if similar?(h, x, 0), do: DisjointSet.union(ds, i, j), else: ds
        end)
        |> then(fn ds -> count(t, i + 1, ds) end)
    end

    defp similar?(<<>>, <<>>, diff), do: diff == 0 or diff == 2
    defp similar?(<<c, s1::binary>>, <<c, s2::binary>>, diff), do: similar?(s1, s2, diff)
    defp similar?(<<_, s1::binary>>, <<_, s2::binary>>, diff), do: similar?(s1, s2, diff + 1)
end
```
Please consider upwoting if you find my solution helpful!