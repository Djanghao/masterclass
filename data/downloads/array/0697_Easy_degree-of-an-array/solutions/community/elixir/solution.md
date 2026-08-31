# Elixir, single pass, uses map

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/degree-of-an-array/solutions/4247017/](https://leetcode.com/problems/degree-of-an-array/solutions/4247017/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec find_shortest_sub_array(nums :: [integer]) :: integer
  def find_shortest_sub_array(nums) do
    for x <- nums, reduce: {%{}, 0, 0, 0} do
      {freq_ind_map, max_freq, res_len, i} ->
        {freq_ind_map, new_count, new_len} = get_updated_freq_ind_val(freq_ind_map, x, i)
        if (new_count > max_freq || (new_count == max_freq && new_len < res_len)), 
        do: {freq_ind_map, new_count, new_len, i + 1},
        else: {freq_ind_map, max_freq, res_len, i + 1}
    end |> elem(2)
  end

  defp get_updated_freq_ind_val(map, el, i) do
    case map[el] do
      nil -> {Map.put(map, el, {1, i}), 1, 1}
      {count, start_i} -> {Map.put(map, el, {count + 1, start_i}), count + 1, i + 1 - start_i}
    end
  end
end
```