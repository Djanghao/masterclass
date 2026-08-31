# Elixir, quadratic equation

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/arranging-coins/solutions/4198128/](https://leetcode.com/problems/arranging-coins/solutions/4198128/)

---

# Approach
The objective is to find the sum of first k natural numbers that is less than or equal to the coins. K is the nuber of rows and is the answer.

Sum of k natural numbers = (k * (k + 1))/2
(k * (k + 1))/2 = n
k\xB2 + k = 2n
k\xB2 + k -2n = 0 which is in the form ax\xB2 + bx + c = 0
In our case a = 1, b = 1, c = -2n

Hence k can be solved using the quadratic equation
(-b + sqrt(b\xB2 - 4ac))/2a
-1 + sqrt(1\xB2 - 4 * 1 * (-2n))/2 * 1
(-1 + sqrt(1 + 8n))/2
(sqrt(1 + 8n) - 1)/2

We have to floor the answer to eliminate the partial rows.

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec arrange_coins(n :: integer) :: integer
  def arrange_coins(n) do
    (:math.sqrt(1 + (8 * n)) - 1) |> Kernel./(2) |> floor
  end
end
```