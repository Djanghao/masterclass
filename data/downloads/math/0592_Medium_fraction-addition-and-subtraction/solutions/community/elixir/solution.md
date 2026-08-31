# Elixir linear solution

**Author:** Klemo1997
**Votes:** 1
**Link:** [https://leetcode.com/problems/fraction-addition-and-subtraction/solutions/5680111/](https://leetcode.com/problems/fraction-addition-and-subtraction/solutions/5680111/)

---

# Intuition
Consume the string fraction by fraction and add them together. `Integer.parse` is very helpful for our cause.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```elixir []
defmodule Solution do
  @spec fraction_addition(expression :: String.t) :: String.t
  def fraction_addition(e), 
    do: result(e, {0, 1})
        |> then(fn {d, n} -> to_string(d) <> "/" <> to_string(n) end)

  def result(<<>>, {d, n}),
    do: Integer.gcd(d, n) |> then(&({div(d, &1), div(n, &1)}))
  def result(e, {d, n}), 
    do: parse_fraction(e)
        |> then(
            fn
                {{a, ^n}, rest} -> result(rest, {d+a, n}) 
                {{a, b}, rest} -> result(rest, {d*b + a*n, n * b})
            end
        )

  def parse_fraction(string) do
    {d, <<?/, rest::binary>>} = Integer.parse(string)
    {n, rest} = Integer.parse(rest)
    {{d, n}, rest}
  end
end
```