# 100% Time Complexity || 100% Memory Efficiency

**Author:** varuv
**Votes:** 0
**Link:** [https://leetcode.com/problems/gray-code/solutions/5707424/](https://leetcode.com/problems/gray-code/solutions/5707424/)

---

# Intuition
Elixir is the best/easy choice specifically for this problem!

# Approach
<!-- Describe your approach to solving the problem. -->
	1.	Bitwise.bxor/2: This function replaces the deprecated ^^^ operator and performs the bitwise XOR operation.
	2.	Bitwise.<<< and Bitwise.>>>: These functions replace the undefined <<< and >>> operators to perform left and right bitwise shifts, respectively.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of the gray_code function is O(2^n).

	\u2022	The function generates all possible 2^n Gray code numbers (because for n bits, there are 2^n possible Gray codes).
	\u2022	The Enum.map/2 function iterates over the range from 0 to 2^n - 1, which results in 2^n iterations.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(2^n) as well.

	\u2022	The function generates a list containing 2^n elements.
	\u2022	Each element is an integer, and since there are 2^n integers in the result, the space required to store these integers is proportional to 2^n.
# \u26A1\uFE0FCode
```elixir []
defmodule Solution do
  import Bitwise

  @spec gray_code(n :: integer) :: [integer]
  def gray_code(n) do
    Enum.map(0..(1 <<< n) - 1, fn i -> bxor(i, i >>> 1) end)
  end
end
```

# \u26A1\uFE0FPlease UPVOTE!!
