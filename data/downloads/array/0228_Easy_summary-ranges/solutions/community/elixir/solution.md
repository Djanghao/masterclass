# Elixir Approach and Solution, Function Guards and Pattern Matching Abound!

**Author:** bpfaust
**Votes:** 1
**Link:** [https://leetcode.com/problems/summary-ranges/solutions/1805416/](https://leetcode.com/problems/summary-ranges/solutions/1805416/)

---

# Approach
1. If the input `nums` is empty, return an empty list, `[]`.
2. If we have reached the end of `nums` as defined by an empty list, `[]`, add the final elements to and output `run`. 
3. At the very beginning of the `nums` run, when `last` and `start` are `nil`, we need to prime our start with the `curr` value. 
4. Thereafter, we systematically step across each value in the `nums` range, keeping track of the `last` value we saw and the `start` of the current range we are in. 
5. If the `curr` value is not one greater than the `last` observed, we have stepped into a new range. If the `start` of that range was also equal to the `last` value observed, then it was a range of one item. Appropriately record the range (whether it be a single-item or a true range), push it onto the running list of ranges, `run`, and continue on. 
6. Reverse the list so that it may be returned in ascending order. The problem statement did not say we may return the final list in any order, so it is assumed it must also be in ascending order. 

# Solution
With a select series of in-line comments where they may be helpful. Runtime of 277 ms (quite fast compared to prior problems using Elixir), and memory of 50.6 MB. 
```
defmodule Solution do
  @spec summary_ranges(nums :: [integer]) :: [String.t]
  def summary_ranges([]) do
    []
  end
    
  def summary_ranges(nums) do
    run(nums, nil, nil, [])
    |> Enum.reverse()
  end
  
  # The End of Nums
  def run(_nums = [], last, start, run) when start == last do
    ["#{last}" | run]
  end
    
  def run(_nums = [], last, start, run) do
    ["#{start}->#{last}" | run]         
  end
    
  # The Beginning of Nums
  def run(_nums = [curr | tail], _last = nil, _start = nil, run) do
    run(tail, curr, curr, run)
  end
  
  # The Middle of Nums
  def run(_nums = [curr | tail], last, start, run) when (curr != last + 1) and start == last do
    # curr != last + 1, therefore the end of a range was reached in the last read
    # start is also == to the last, therefore the last read was a range of one item
    # push it onto the run and move on
    run(tail, curr, curr, ["#{last}" | run])
  end
    
  def run(_nums = [curr | tail], last, start, run) when (curr != last + 1) do
    # curr != last + 1, therefore the end of a range was reached in the last read
    # push it onto the run and move on
    run(tail, curr, curr, ["#{start}->#{last}" | run])
  end
    
  def run(_nums = [curr | tail], last, start, run) do
    run(tail, curr, start, run)
  end
end
```

# Testcases
```
[0,1,2,4,5,7]
[0,2,3,4,6,8,9]
[]
[1]
[1,3,5,7,9]
[1,3,5,6,7,9]
[0,1,2,3,5,6,7]
[-7,-6,-5,0,2,3,4]
[-7, 0, 7]
```