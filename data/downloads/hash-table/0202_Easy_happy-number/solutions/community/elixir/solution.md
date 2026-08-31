# [Elixir] Recursion Approach | Beats 75%

**Author:** sultanfariz
**Votes:** 0
**Link:** [https://leetcode.com/problems/happy-number/solutions/5607715/](https://leetcode.com/problems/happy-number/solutions/5607715/)

---

![image.png](./images/0.png)


# Approach
Just follow the description, only return false if the parameter is 1 or 7. 
7 should return true because it will leads to ```49 -> 97 -> 130 -> 10 -> 1```

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
defmodule Solution do
  @spec digits_square(n :: integer) :: boolean
  defp digits_square(0), do: 0
  defp digits_square(n) do
    remain = n |> rem(10)
    (remain * remain) + digits_square(div(n, 10))
  end

  @spec is_happy(n :: integer) :: boolean
  def is_happy(1), do: true
  def is_happy(7), do: true
  def is_happy(n) when n < 10, do: false
  def is_happy(n), do: n |> digits_square |> is_happy
end
```