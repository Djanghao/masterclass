# Elixir: Prefix XOR

**Author:** pul-paulsen
**Votes:** 1
**Link:** [https://leetcode.com/problems/xor-queries-of-a-subarray/solutions/5787095/](https://leetcode.com/problems/xor-queries-of-a-subarray/solutions/5787095/)

---

# Intuition
**Follow the prefix algorithm**, that has been explained several times here, e.g. by [Klemo](https://leetcode.com/problems/xor-queries-of-a-subarray/solutions/5782690/elixir-prefix-xor/) 

# Approach
Functional decomposition using the expressivity of Elixirwith pipes, reduce, map

# Complexity
- Time complexity: **O(n+q)**, where n is the lenght of the input array and q the number of queries

- Space complexity: **O(n+q)**

# Code
```elixir []
defmodule Solution do
    import Bitwise, only: [bxor: 2]
    @spec xor_queries(arr :: [integer], queries :: [[integer]]) :: [integer]
    def xor_queries(arr, queries) when is_list(arr) and is_list(queries),
        do: 
            arr
            |> accumulated_xors()
            |> results(queries)

    defp accumulated_xors(arr), 
      do: 
        Enum.reduce(arr, [0], fn n, [prev_xor | _] = xors -> [bxor(prev_xor, n) | xors] end)
        |> then(&Enum.reverse/1)
        |> then(&tl/1)
        |> then(&List.to_tuple/1)

    defp results(xors, queries),
      do:
        Enum.map(queries, fn
          [0, j] -> elem(xors, j) 
          [i, j] -> bxor(elem(xors, j), elem(xors, i-1)) 
        end)      
     
end
```