# Elixir, Using Sorting

**Author:** bpfaust
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-covered-intervals/solutions/1787481/](https://leetcode.com/problems/remove-covered-intervals/solutions/1787481/)

---

# Approach
Similar to other solutions posted in this problem's discussion, this solution takes a sorting approach.

1. Order intervals by their end. This will allow us to put larger intervals in front of smaller intervals, as sorting in Elixir is stable. 
2. Order intervals by their beginning. 
3. Step over each interval, comparing it to the last interval observed. If it is within the last interval, skip over it. If it is not within the last interval, add it to the `chain`, and continue on to the next interval in the list. 
4. Pipe the resultant chain into the `length/1` function to return the number of remaining intervals. 

# Solution
Runtime of 328 ms. Memory usage of 52.9 MB. 
```
defmodule Solution do
  @spec remove_covered_intervals(intervals :: [[integer]]) :: integer
  def remove_covered_intervals(intervals) do
    intervals
    |> Enum.sort_by(&(tl(&1)), &>=/2)
    |> Enum.sort_by(&(hd(&1)))
    |> reduce(nil, [])
    |> length()
  end

  def reduce([head = [elem_h | elem_t] | tail], last = [last_h | last_t], chain) do
    if elem_h >= last_h and elem_t <= last_t do
      reduce(tail, last, chain)
    else
      reduce(tail, head, [head | chain]) 
    end
  end
      
  def reduce([head | tail], nil, chain) do
    reduce(tail, head, [head | chain])
  end
      
  def reduce([], _last, chain) do
    chain
  end
end
```

# Testcases
```
[[1,4],[3,6],[2,8]]
[[1,4],[2,3]]
[[1,2],[50,60],[70,80],[2,100]]
[[1,2],[1,4],[3,4]]
```