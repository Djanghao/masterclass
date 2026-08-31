# Elixir O(n)

**Author:** stevensonmt
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solutions/2011607/](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solutions/2011607/)

---

```elixir
  def find_unsorted_subarray(nums) do
    arr = List.to_tuple(nums)
    len = length(nums)
    first_unsorted = 0..len - 1
                     |> Enum.chunk_every(2, 1, :discard)
                     |> Enum.find(fn [i, j] -> elem(arr, i) > elem(arr, j) end)
                     |> try_hd() # silly helper function to avoid nil errors when array is already sorted
                    
    last_unsorted = 0..len - 1
                    |> Enum.reverse()
                    |> Enum.chunk_every(2, 1, :discard)
                    |> Enum.find(fn [i, j] -> elem(arr, i) < elem(arr, j) end)
                    |> try_hd()
                    
    case {first_unsorted, last_unsorted} do
        {nil, _} -> 0 # if either value is not found it is because the list is sorted
        {_, nil} -> 0
        _ ->
        {index_minimum_unsorted, index_maximum_unsorted} = 
                                     first_unsorted..last_unsorted
                                     |> Enum.min_max_by(fn i -> elem(arr, i) end)

        left = 0..len - 1 
               |> Enum.find(fn i -> elem(arr, i) > elem(arr, index_minimum_unsorted) end)
        right = 0..len - 1
                |> Enum.reverse()
                |> Enum.find(fn i -> elem(arr, i) < elem(arr, index_maximum_unsorted) end)

        case {right, left} do 
            {nil, nil} -> last_unsorted - first_unsorted + 1
            {nil, _} -> last_unsorted - left + 1
            {_, nil} -> right - first_unsorted + 1
            _ -> right - left + 1
        end
    end
  end
      
  defp try_hd(nil), do: nil
  defp try_hd(n) when is_list(n), do: hd(n)
```