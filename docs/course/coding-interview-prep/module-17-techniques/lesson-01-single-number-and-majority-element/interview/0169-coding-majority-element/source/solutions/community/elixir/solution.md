# Elixir | Boyer-Moore Majority Vote Algorithm

**Author:** ryanzidago
**Votes:** 2
**Link:** [https://leetcode.com/problems/majority-element/solutions/1442188/](https://leetcode.com/problems/majority-element/solutions/1442188/)

---

```elixir
defmodule Solution do
  @spec majority_element(nums :: [integer]) :: integer
  def majority_element(nums) do
    do_majority_element(nums, 0, nil)
  end
      
  defp do_majority_element([], _count, candidate), do: candidate
                                                     
  defp do_majority_element([head | tail], count = 0, candidate) do 
    do_majority_element(tail, count + 1, head)
  end
      
  defp do_majority_element([candidate | tail], count, candidate) do 
    do_majority_element(tail, count + 1, candidate) 
  end
      
  defp do_majority_element([_head | tail], count, candidate) do 
    do_majority_element(tail, count - 1, candidate)
  end   
end
```