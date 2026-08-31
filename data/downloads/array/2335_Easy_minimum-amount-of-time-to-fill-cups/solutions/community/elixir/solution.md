# Elixir, math

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/solutions/4663932/](https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/solutions/4663932/)

---

# Approach
If one of the stacks are larger than the sum of the other two stacks, it will always take the largest stack times to fill all the cups.

5 2 1
4 1 1
3 0 1
2 0 0
1 0 0
0 0 0 

If the largest stack is less than the sum of the other two stacks, we can calculate the total number of cups that we have to fill. Out of all these cups you can fill two cups at a time. Hence you would need to take cups/2 times to fill all the cups. But if the total number of cups are odd then you will have one cup left left that you have to fill as well.

5 4 4 -> total cups = 5 + 4 + 4 = 13
13/2 = 6
remaining cup = 1 => 6 + 1 = 7 times

5 4 3 -> total cups = 5 + 4 + 3 = 12
12/2 = 6 times
 


# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec fill_cups(amount :: [integer]) :: integer
  def fill_cups(amount) do
    [a, b, c] = Enum.sort(amount, :desc)
    if a > (b + c), do: a, else: ceil((a + b + c)/2)
  end
end
```