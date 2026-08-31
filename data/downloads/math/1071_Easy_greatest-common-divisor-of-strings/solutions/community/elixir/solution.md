# Recursion & Regex

**Author:** macoafi
**Votes:** 0
**Link:** [https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/5656553/](https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/5656553/)

---

# Intuition
The length of the string GCD couldn't be any greater than the length of the GCD of the original strings, so I could narrow the scope to only strings of that length or shorter.

# Approach
It's probably solvable without regular expressions, but why do that when this regex is so simple?

I recursively checked shorter and shorter strings for:

1. matching between both input strings
2. fitting into a regex from beginning of string to end of string at least once (`{1,}`)

If either of those were false, I'd check the next shorter string, until I reached a length of 0, the recursion base case, and returned `""`.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
defmodule Solution do
  @spec gcd_of_strings(str1 :: String.t, str2 :: String.t) :: String.t
  def gcd_of_strings(str1, str2) do
    max_gcd = Integer.gcd(String.length(str1), String.length(str2))
    gcd_of_strings(str1, str2, max_gcd)
  end

  def gcd_of_strings(_str1, _str2, 0), do: ""

  def gcd_of_strings(str1, str2, max_gcd) do
    slice1 = String.slice(str1, 0..(max_gcd - 1))
    slice2 = String.slice(str2, 0..(max_gcd - 1))
    if slice1 == slice2 and divides_string(slice1, str1) and divides_string(slice2, str2) do
        slice1
    else
        gcd_of_strings(str1, str2, max_gcd - 1)
    end
  end

  def divides_string(slice, str) do
    String.match?(str, ~r/^(#{slice}){1,}$/)
  end
end
```