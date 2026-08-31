# [Elixir] Gentle introduction to map function

**Author:** tiedyedvortex
**Votes:** 3
**Link:** [https://leetcode.com/problems/fizz-buzz/solutions/2048804/](https://leetcode.com/problems/fizz-buzz/solutions/2048804/)

---

(Note: this is referring to the functional programming "map" function, not the data structure knows a map/dictionary/hashmap. Confusing, but I didn't choose the names.)

The solution has two parts: a function to convert an integer into the appropriately configured strings, and a function to apply this over the range 1, 2, 3, ...n. That is, we start with a list of [1,2,3,4,5...n] and then we take the "enfizzen" function and store the results of [enfizzen(1), enfizzen(2)...enfizzen(n)] in a new list. Given how we've defined "enfizzen/1", this results in a list of ["1", "2", "Fizz", "4", "Buzz", ...] as desired.

However, if this is your first introduction to functional programming, here are a few things to pay attention to:

* We are passing in &enfizzen/1, not enfizzen(). This means that we are passing the enfizzen function in as an argument--we are *not* calling it an passing in the output of that function call. In functional programming, **functions are objects**.
* It is not strictly the case that we are evaluating enfizzen(1) before enfizzen(2). Sure, we are storing those results in that order; but each calculation is fully independent, because our functions are "pure" with no impact outside their output. This means, that you could fully parallelize this across as many threads (or in Elixir's case, BEAM processes) as we have the computational power to compute. This means that we could potentially compute this function n times faster!

```
defmodule Solution do
  @spec fizz_buzz(n :: integer) :: [String.t]
  def fizz_buzz(n) do
    Enum.map(1..n, &enfizzen/1)    
  end
  
  @spec enfizzen(i :: integer) :: String.t
  defp enfizzen(i) do
    cond do
        Integer.mod(i, 15)==0 -> "FizzBuzz"
        Integer.mod(i, 5)==0 -> "Buzz"
        Integer.mod(i, 3)==0 -> "Fizz"
        true -> Integer.to_string(i)
    end
  end
end
```