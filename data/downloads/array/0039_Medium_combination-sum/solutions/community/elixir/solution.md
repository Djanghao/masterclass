# DFS (ez)

**Author:** tdoubleu
**Votes:** 0
**Link:** [https://leetcode.com/problems/combination-sum/solutions/3766673/](https://leetcode.com/problems/combination-sum/solutions/3766673/)

---

# Intuition
For each possible candidate number `x`, create a recursive call with said number + the updated list of candidates that starts with `x`.



# Approach


Keep track of the sum while performing recursion.
If
- sum > target, no solution
- sum == target, return solution wrapped in a list [ [1,2,3] ] for e.g
- sum < target, keep recursing in DFS manner. When DFS is exhausted, branch out into other possible candidates

Using recursion helps because we access to the updated candidates everytime (for us it's `ctail`). 


# Complexity
- Time complexity: exponential for sure

- Space complexity: no idea

# Code
```
defmodule Solution do
  @spec combination_sum(candidates :: [integer], target :: integer) :: [[integer]]
  def combination_sum(candidates, target) do
    solve(candidates, target, [], 0)
  end

  def solve(candidates, target, seq, sum) when sum > target, do: []
  def solve(candidates, target, seq, sum) when sum == target do
    [seq]
  end
  def solve([], target, seq, sum), do: []
  def solve([c | ctail] = candidates, target, seq, sum) do
    # DFS
    sol1 = solve(candidates, target, [c | seq], sum + c)

    # Iterate through other candidates and try out their solutions
    sol2 = solve(ctail, target, seq, sum)
    
    # Merge solutions. Empty results are fine. [[1,2,3]] ++ [] => [[1,2,3]]
    sol1 ++ sol2
  end
end
```