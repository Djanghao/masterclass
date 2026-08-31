# Elixir, monotonic stack

**Author:** pul-paulsen
**Votes:** 1
**Link:** [https://leetcode.com/problems/daily-temperatures/solutions/5856781/](https://leetcode.com/problems/daily-temperatures/solutions/5856781/)

---

# Intuition
My first intuition (doing it just with a stack of all days) failed me and was too inefficient, even after I added run-lenth encoding.

But: Keeping a **monotonic** stack with the temperatures **and the indices** of the respective days is a very clever approach, with which I unfortunately did not come up myself; shout out to [Klemo1997](https://leetcode.com/problems/daily-temperatures/solutions/5855126/elixir-recursive-solution-using-monotonic-stack/). 

# Approach
Once one understands the algorithm, it is really fun to implement in Elixir.

Note the added security in the case-block. I expect either only the current day on the stack or the current day followed by the next higher temperature. So I can as well match and guard these assumptions. That is a little trick to guard one self before own errors and to express the intention of the code. I love Elixir for this expressivity. 

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```elixir []
defmodule Solution do
  @spec daily_temperatures(temperatures :: [integer]) :: [integer]
  def daily_temperatures(temperatures), 
    do: days_to_higher_temp(Enum.reverse(Enum.with_index(temperatures)))
    
  defp days_to_higher_temp(temps_and_indices, days \\\\ [], monotonic_stack \\\\ [])  
  defp days_to_higher_temp([], days, _), do: days  
  defp days_to_higher_temp([{temp, index} = day | previous_temps], days, stack) do 
    case push(stack, day) do
        [^day] = stack -> 
            days_to_higher_temp(previous_temps, [0 | days], stack)
        [^day, {higher_temp, target_index} | _] = stack when higher_temp > temp -> 
            days_to_higher_temp(previous_temps, [target_index - index | days], stack)
    end
  end  

  # keep monotone by removing all that are not higher than current 
  defp push([{highest_so_far, _} | stack], {temp, _} = day) 
    when highest_so_far <= temp, do: push(stack, day)
  defp push(stack, day), do: [day | stack]

end
```