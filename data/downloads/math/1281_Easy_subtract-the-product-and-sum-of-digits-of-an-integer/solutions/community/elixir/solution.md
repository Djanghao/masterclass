# simplest solution elixir

**Author:** DJAruun
**Votes:** 0
**Link:** [https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/5524483/](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/5524483/)

---

# Complexity
- Time complexity: O(n)
- Space complexity: O(1)

# Code
```elixir
defmodule Solution do
  @spec subtract_product_and_sum(n :: integer) :: integer
  def subtract_product_and_sum(n) do
    n_list = Integer.digits(n)

    product = Enum.reduce(n_list, 1, fn x, acc -> x * acc end)
    sum = Enum.reduce(n_list, 0, fn x, acc -> x + acc end)

    product - sum
  end
end
```