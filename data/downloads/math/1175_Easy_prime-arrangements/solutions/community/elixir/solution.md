# Elixir, manual calculation

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-arrangements/solutions/4323407/](https://leetcode.com/problems/prime-arrangements/solutions/4323407/)

---

# Approach
Iterate all the numbers and find the total number of prime numbers(pn) within n. You can then find the count of non prime numbers(npn) from subtracting prime number count from n. You have to find the total permutations that can be made from the prime numbers and non - prime numbers. 

permutations of prime numbers * permutations of non prime numbers

The permutations formula n!/(n - r)! can be simplified as just n! in this case, since n and r are the same.

(total prime numbers)! * (total non prim numbers)!

E.g n = 5
prime numbers count = 2,3,5 => 3
non prime numbers count = 5 - 3 => 2
2! * 3! = 12

# Complexity
- Time complexity:
O(n\u221An)

- Space complexity:
O(n\u221An)

# Code
```
defmodule Solution do
  @spec num_prime_arrangements(n :: integer) :: integer
  def num_prime_arrangements(n) do
    prime_count = get_prime_number_count(n, 0)
    non_prime_count = n - prime_count
    {min, max} = if prime_count < non_prime_count, do: {prime_count, non_prime_count}, else: {non_prime_count, prime_count}
    factorial_1 = factorial(min, 1, 1)
    rem(factorial_1 * factorial(max, min + 1, factorial_1), 10**9 + 7)
  end

  defp get_prime_number_count(1, count), do: count
  defp get_prime_number_count(n, count), do: get_prime_number_count(n - 1, (if prime?(n), do: count + 1, else: count))

  defp prime?(n), do: prime?(n, :math.sqrt(n) |> floor)
  defp prime?(n, 1), do: true
  defp prime?(n, i), do: if rem(n, i) == 0, do: false, else: prime?(n, i - 1)

  defp factorial(n, n, prev_factorial), do: n * prev_factorial
  defp factorial(n, i, prev_factorial) when n > i, do: factorial(n, i + 1, i * prev_factorial)
  defp factorial(_, _, prev_factorial), do: prev_factorial
end
```