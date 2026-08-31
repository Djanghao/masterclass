# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/baseball-game/solutions/4241888/](https://leetcode.com/problems/baseball-game/solutions/4241888/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec cal_points(operations :: [String.t]) :: integer
  def cal_points(operations) do
    for op <- operations, reduce: {[], 0} do
      {scores, total} -> 
        case op do
          "C" -> {tl(scores), total - hd(scores)}
          "D" -> {[2 * hd(scores) | scores], total + 2 * hd(scores)}
          "+" -> 
            [p1, p2 | _] = scores
            {[p1 + p2 | scores], total + p1 + p2}
           x  -> 
             score = String.to_integer(x);
             {[score | scores], total + score}     
        end
    end |> elem(1)
  end
end
```