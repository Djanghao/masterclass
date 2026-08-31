# Elixir, count of one bits

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-watch/solutions/4192107/](https://leetcode.com/problems/binary-watch/solutions/4192107/)

---

# Approach
The led watch's hour leds 8,4,2,1 represents a four bit binary number and the minute leds 32,16,8,4,2,1 represents a six bit binary number.
The provided turned_on = no of 1 bits present in hour leds and minute leds. 

Since the total number of possible hours is 0..11, we can use a constant that maps the number of 1 bits required to get the respective hours.
%{0 => ["0:"],
                     1 => ["1:","2:","4:","8:"],
                     2 => ["3:","5:","6:","9:","10:"], 
                     3 => ["7:","11:"]}

Iterate the minutes from 0..60, get the number of one bits present in the minute. Get the remaining bits by calculating the difference of turned_on and 1 bits in the minute. Use the map to get all the possible hours that can be formed with the remaining bits and combine them with the minute to accumulate the result.


# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @hours_bit_count %{0 => ["0:"],
                     1 => ["1:","2:","4:","8:"],
                     2 => ["3:","5:","6:","9:","10:"], 
                     3 => ["7:","11:"]}

  @spec read_binary_watch(turned_on :: integer) :: [String.t]
  def read_binary_watch(turned_on) do 
    for min <- 0..59, reduce: {%{0 => 0}, []} do
      {bit_count, acc} -> {mins_bits, bit_count} = get_bitcount(min, bit_count)
        possible_hours = Map.get(@hours_bit_count, turned_on - mins_bits, [])
        {bit_count, get_combination(min, possible_hours, acc)} 
    end |> elem(1)
  end

  defp get_combination(min, hours, acc) do
    for hour <- hours, reduce: acc do
          acc -> [hour <> get_min_str(min) | acc]
    end 
  end

  defp get_min_str(n) do
    if n < 10, do: "0#{n}", else: "#{n}"
  end

  defp get_bitcount(i, map) do
   bits = map[div(i,2)] + rem(i,2)
   map = if i > div(59, 2), do: map, else: Map.put(map, i, bits)
   {bits, map}
  end 
end
```