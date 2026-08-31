# Elixir dynamic approach

**Author:** stevensonmt
**Votes:** 0
**Link:** [https://leetcode.com/problems/3sum-with-multiplicity/solutions/1979832/](https://leetcode.com/problems/3sum-with-multiplicity/solutions/1979832/)

---

Not the most concise solution. I decided to make a map of individual frequencies and a second map of all possible sums involving two items. For each unique item I then retrieve all the pairs that make the needed sum to reach the target with the current item. I think it could be faster if my map of pair sums was something like `Map<Int, Map<MapSet, Int>>` like `%{ _pair_sum: %{ map_set: frequency of that set } }` where _pair_sum is an integer key and the value associated with it is a map with keys that are MapSets and values that are the products of the frequencies of the members of the set. I think this would reduce the number of lookups overall. I did not attempt this because the current nesting was already getting hard to reason about.
```
  def three_sum_multi(arr, target) when length(arr) < 3, do: 0
  def three_sum_multi(arr, target) when length(arr) == 3 do 
    if Enum.sum(arr) == target do
      1
    else 
      0
    end 
  end
      
  def three_sum_multi(arr, target) do
    freqs = arr 
            |> Enum.frequencies()
            
    keys = Map.keys(freqs) |> Enum.sort()

    two_sums = two_sums_map(keys, freqs, target)

    count_three_sums = count_three_sums(keys, freqs, two_sums, target)
    
      |> rem(1_000_000_007)
  end
      
  defp count_three_sums(keys, freqs, two_sums, target) do 
    keys
    |> Enum.reduce(0, fn k, tally ->                     
                        tally = if k * 3 == target and freqs[k] > 2 do 
                                   
                                 numerator = factorial(freqs[k])
                                 denominator = factorial(3) * factorial(freqs[k] - 3)
                                 tally + div(numerator, denominator)
                                else
                                  tally
                                end
                           tally = tally + (counts_needed_two_sums(k, two_sums[target - k], freqs))
                  end)  
      
  end    
      
  defp two_sums_map(keys, freqs, target) do
      keys
      |> Enum.with_index()
      |> Enum.reduce(%{}, fn {k, i}, sums -> 
               sums = if freqs[k] > 1 and freqs[k] != target / 3 do                                        
                        Map.update(sums, k * 2, MapSet.new([k]), fn curr ->  MapSet.put(curr, k) end)
                      else
                        sums
                      end
                              
               keys
               |> Enum.drop(i + 1)
               |> Enum.map(fn l -> {k + l, MapSet.new([k, l])} end)
               |> Enum.reduce(sums, fn {sum, addends}, sms -> 
                                                           #IO.inspect(addends, label: "addends being added to 2-sum map")
                                                           Map.update(sms, sum, MapSet.put(MapSet.new(), addends), fn curr -> MapSet.put(curr, addends) end) end)
             end)
  end
      
  defp counts_needed_two_sums(k, two_sum, freqs) do
      if two_sum do
        two_sum
        |> Enum.filter(fn addends when is_integer(addends) -> addends > k #already should be accounted for in the triples above where k == addend or as double in previous loop where k < addend
                          addends -> Enum.all?(addends, fn a -> a > k or (a == k and freqs[k] > 1) end)
                      end)
        |> Enum.reduce(0, fn set, acc when is_integer(set) -> 
                                      if freqs[set] > 1 do
                                          count_double(set, k, freqs) + acc
                                      else 
                                        acc + freqs[k]
                                      end
                             set, acc -> 
                                      if MapSet.member?(set, k) do 
                                        (MapSet.delete(set, k) |> Enum.reduce(0, fn i, acc -> acc + freqs[i] end)) * div(factorial(freqs[k]), 2 * factorial(freqs[k] - 2))  + acc 
                                      else
                                        Enum.reduce(set, freqs[k], fn i, prod -> prod * freqs[i] end) + acc
                                      end
                      end)
      else
        0
      end
  end
      
      
  defp count_double(dbl, k, freqs), do: freqs[k] * div( factorial(freqs[dbl]), 2 * factorial(freqs[dbl] - 2) )   
  def factorial(n, acc \\\\ 1)
  def factorial(n, acc) when n < 2, do: acc
  def factorial(n, acc) when n >= 2, do: factorial(n - 1, acc * n)
  ```