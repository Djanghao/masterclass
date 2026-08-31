# Functional Programming in Elixir - 100%

**Author:** jrotolo
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solutions/5613976/](https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solutions/5613976/)

---



# Code
```
defmodule Solution do
  @spec find_score(nums :: [integer]) :: integer
  def find_score(nums) do
    result = 
        nums
        |> Stream.with_index()
        |> Enum.sort_by(fn x -> elem(x, 0) end)
        |> Enum.reduce({0, %{}}, fn element, acc ->
            index = elem(element, 1)
            value = elem(element, 0)

            if is_nil(Map.get(elem(acc, 1), index)) do
                {elem(acc, 0) + value, Map.merge(elem(acc, 1), %{(index - 1) => true, index => true, (index + 1) => true})}
            else
                acc
            end
        end)
    
    elem(result, 0)
  end
end
```

# Complexity
O(N log N)