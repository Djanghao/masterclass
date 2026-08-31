# Elixir Approach and Solution, Comprehensions, Anonymous Functions, and Enum

**Author:** bpfaust
**Votes:** 2
**Link:** [https://leetcode.com/problems/transpose-matrix/solutions/2100156/](https://leetcode.com/problems/transpose-matrix/solutions/2100156/)

---

Elixir adds a new wrinkle to this problem given variables in Elixir are immutable. What may be a trivial problem with mutable variables needs a bit more effort to tackle in an immutable world. 
# Approach
1. Flatten `matrix` into a single list and capture it into an anonymous function. 
2. Use a comprehension to count off each new row based on the length of the first row (the count of columns), assigned as `n`.  
3. As we step down the rows in the comprehension, drop the first elements of the flattened `matrix` equivalent to the number of rows already stepped through, counted by `i`, using `Enum.drop/2`. 
4. Use `Enum.take_every/2` to grab the proper values based upon the length of each row, starting with the first item (now exposed by the `Enum.drop/2` function). 

# Solution
Runtime of 393 ms, and memory usage of 50.9 MB. 
```
defmodule Solution do
  @spec transpose(matrix :: [[integer]]) :: [[integer]]
  def transpose(matrix = [row | _]) do
    n = length(row)

    matrix
    |> List.flatten()
    |> (&(for i <- 1..n, do: Enum.take_every(Enum.drop(&1, i - 1), n))).()
  end
end
```

# Testcases
```
[[1,2,3],[4,5,6],[7,8,9]]
[[1,2,3],[4,5,6]]
[[1,2],[4,5]]
[[1,2],[4,5],[7,8]]
```