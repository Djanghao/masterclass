# Elixir, one pass

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/4705210/](https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/4705210/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec capture_forts(forts :: [integer]) :: integer
  def capture_forts(forts), do: do_capture_forts(forts, nil, 0, 0)

  defp do_capture_forts([fort | forts], prev_fort, cur_caps, max_caps) do
    case fort do
      0 -> if prev_fort, do: do_capture_forts(forts, prev_fort, cur_caps + 1, max_caps),
           else: do_capture_forts(forts, nil, 0, max_caps)
      x when x != prev_fort -> do_capture_forts(forts, x, 0, max(max_caps, cur_caps))
      x -> do_capture_forts(forts, x, 0, max_caps)
    end
  end
  defp do_capture_forts(_, _, _, max_caps), do: max_caps
end
```