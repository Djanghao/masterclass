# Simple solution

**Author:** nonamecho
**Votes:** 0
**Link:** [https://leetcode.com/problems/robot-return-to-origin/solutions/5590649/](https://leetcode.com/problems/robot-return-to-origin/solutions/5590649/)

---

# Code
```
defmodule Solution do
  @spec judge_circle(moves :: String.t) :: boolean
  def judge_circle(moves) do
  get_move_count(moves, "U") == get_move_count(moves, "D") && get_move_count(moves,"R") == get_move_count(moves, "L")
  end
  def get_move_count(moves, move) do
  String.length(moves) - String.length(String.replace(moves, move, ""))
  end
end
```