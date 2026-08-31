# Elixir - Greedy

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-subtraction-operation/solutions/6032122/](https://leetcode.com/problems/prime-subtraction-operation/solutions/6032122/)

---

# Intuition
Because each num in `nums` can subtract at most one prime, we just need to find the biggest possible prime for it to subtract.

The prime numbers are pre-calculated using Eratosthenes' sieve.

You can optimize the searching progress with binary search. I'm just too lazy to do that.

# Code
```elixir [Solution to the Problem]
defmodule Solution do
  @primes [
    997, 991, 983, 977, 971, 967, 953, 947, 941, 937, 929, 919, 911, 907, 887, 883,
    881, 877, 863, 859, 857, 853, 839, 829, 827, 823, 821, 811, 809, 797, 787, 773,
    769, 761, 757, 751, 743, 739, 733, 727, 719, 709, 701, 691, 683, 677, 673, 661,
    659, 653, 647, 643, 641, 631, 619, 617, 613, 607, 601, 599, 593, 587, 577, 571,
    569, 563, 557, 547, 541, 523, 521, 509, 503, 499, 491, 487, 479, 467, 463, 461,
    457, 449, 443, 439, 433, 431, 421, 419, 409, 401, 397, 389, 383, 379, 373, 367,
    359, 353, 349, 347, 337, 331, 317, 313, 311, 307, 293, 283, 281, 277, 271, 269,
    263, 257, 251, 241, 239, 233, 229, 227, 223, 211, 199, 197, 193, 191, 181, 179,
    173, 167, 163, 157, 151, 149, 139, 137, 131, 127, 113, 109, 107, 103, 101, 97,
    89, 83, 79, 73, 71, 67, 61, 59, 53, 47, 43, 41, 37, 31, 29, 23, 19, 17, 13, 11,
    7, 5, 3, 2
  ]

  @spec prime_sub_operation(nums :: [integer]) :: boolean
  def prime_sub_operation(nums) do
    solve(nums, 0)
  end

  defp solve([], _prev) do
    true
  end

  defp solve([h | _t], prev) when h <= prev do
    false
  end

  defp solve([h | t], prev) do
    case Enum.find(@primes, &(&1 < h - prev)) do
      nil -> solve(t, h)
      prime -> solve(t, h - prime)
    end
  end
end
```

# Appendix: Eratosthenes Sieve
```elixir [Eratosthenes Sieve]
sieve = fn 
  [], acc, _sieve ->
    acc

  [h | t], acc, sieve ->
    sieve.(Enum.reject(t, &rem(&1, h) == 0), [h | acc], sieve)
end

primes = sieve.(Enum.to_list(2..1000), [], sieve)
```