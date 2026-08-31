# Elixir, for comprehension

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-divisibility-score/solutions/4745281/](https://leetcode.com/problems/find-the-maximum-divisibility-score/solutions/4745281/)

---

# Complexity
- Time complexity:
O(n * m) where n and m are the length of nums and divisors

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec max_div_score(nums :: [integer], divisors :: [integer]) :: integer
  def max_div_score(nums, divisors) do
    for x <- divisors, reduce: {0, nil} do
      {max_score, res} -> 
        cur_score = Enum.count(nums, &(rem(&1, x) == 0))
        cond do
          cur_score > max_score -> {cur_score, x}
          cur_score == max_score && x < res -> {cur_score, x}
          true -> {max_score, res} 
        end               
    end |> elem(1)
  end
end
```