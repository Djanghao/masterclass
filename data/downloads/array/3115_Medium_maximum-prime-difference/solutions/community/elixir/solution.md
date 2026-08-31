# Elixir finding primes

**Author:** erinawiggins
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-prime-difference/solutions/5700033/](https://leetcode.com/problems/maximum-prime-difference/solutions/5700033/)

---

# Approach
Attach indices to the input list so that we can use them later for our output. we can then access `nums[i]` via `elem(n, 0)` and its index via `elem(n, 1)`.

Recursively deconstruct input list, checking the elements in the range `2..(ceil(nums[i] / 2))`, looking to see if nums[i] % element isn't zero and that we haven't had one in the range equal zero at all yet. We're doing this inside of the reduce function and the accumulator keeps track of whether the number is "still prime". We start optimistically, defaulting it to `true`. if the above comparison fails even once it turns to false and stays false for the rest of the iterations.

`get_primes` is called again, updating first_i when the first prime number is discovered (initializing to 300000 based on constraints of the problem). At the same time we update the last_i to match so we get a difference of 0 in the case of a single prime.

as more primes are found, the last_i is updated accordingly. first_i isn't touched again.

# Complexity
- Time complexity:
$$O(N*Sqrt(M))$$

- Space complexity:
$$O(1)$$

# Code
```elixir []
defmodule Solution do
  @spec maximum_prime_difference(nums :: [integer]) :: integer
  def maximum_prime_difference(nums) do
    Enum.with_index(nums)
    |> get_primes(300000, 0)
  end

  defp get_primes([], first_i, last_i), do: abs(last_i - first_i)
  defp get_primes(nums, first_i, last_i) do
    [n | nums] = nums

    prime? = elem(n, 0) == 2
      or
    Enum.reduce(2..(ceil(elem(n, 0) / 2)), true, fn x, acc ->
      rem(elem(n, 0), x) != 0 and acc
    end)

    if prime? and elem(n, 1) < first_i do
      get_primes(nums, elem(n, 1), elem(n, 1))
    else
      if prime? and elem(n, 1) > last_i do
        get_primes(nums, first_i, elem(n, 1))
      else
        get_primes(nums, first_i, last_i)
      end
    end
  end
end
```