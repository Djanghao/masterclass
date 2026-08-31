# Elixir: Meta-programming multiple clauses, very efficient and readable

**Author:** pul-paulsen
**Votes:** 3
**Link:** [https://leetcode.com/problems/integer-to-roman/solutions/5791125/](https://leetcode.com/problems/integer-to-roman/solutions/5791125/)

---

# Intuition
An integer can easily be transformed to a roman number: 
* Find the highest value >= the number
* Take the numeral for that value
* Append to the numeral the roman number for the number - the value
* Do so recursively, until you reach 0, which does not exist and if by definition an empty string

# Approach
* This is very efficient with a multi-clause function, but manually coding the clauses is tedious and error-prone, therefore we'll use Elixirs first-class emtaprogramming
* Assign the numerals and their values in decreasing as tuples in a list to a variable (not a module variable, since this is needed only during compilation)
* In a for-comprehension over this variable define the clause for every tuple following the above rules. Use unquote to put the concrete values in the generated code
* After that add manually the base case for 0

This works like a charm and generates really efficient code.

Tail-call recursion is not needed here, since Roman numbers are small enough for body call-recursion.

# Complexity
- Time complexity: **O(n)**, where n is the number of needed numerals
- Space complexity: **O(n)**

# Code
```elixir []
defmodule Solution do

  numerals_and_values = [
    {"M", 1000},
    {"CM", 900},
    {"D", 500},
    {"CD", 400},
    {"C", 100},
    {"XC", 90},
    {"L", 50},
    {"XL", 40},
    {"X", 10},
    {"IX", 9},
    {"V", 5},
    {"IV", 4},
    {"I", 1}
  ] 

  @spec int_to_roman(num :: integer) :: String.t
  for {numeral, value} <- numerals_and_values do
    def int_to_roman(num) when num >= unquote(value), 
        do: unquote(numeral) <> int_to_roman(num - unquote(value))
  end
  def int_to_roman(0), do: ""
end
```