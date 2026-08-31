# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/solutions/4263293/](https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/solutions/4263293/)

---

# Approach
Iterate all the numbers from left to right and for each number, divide continuosly by 2 to get the number of 1 bits in the number. Check if the number of 1 bits is prime by checking againg the prime number map set. The maximum input number is 10\u2076 whose total bits are 20. So you can use a set of primenumbers from 1 to 20 instead of manually checking for prime each time.  

# Complexity
- Time complexity:
O(right - left) 

- Space complexity:
O(1) 

# Code
```
defmodule Solution do
  @spec count_prime_set_bits(left :: integer, right :: integer) :: integer
  def count_prime_set_bits(left, right) do
    prime_nums = MapSet.new([2, 3, 5, 7, 11, 13, 17, 19])
    for x <- left..right, reduce: 0 do
      count -> 
        if MapSet.member?(prime_nums, count_set_bits(x, 0)), do: count + 1, else: count
    end
  end

  defp count_set_bits(n, count) when n > 0 do
    count_set_bits(div(n, 2), count + rem(n, 2))
  end
  defp count_set_bits(_, count), do: count
end
```