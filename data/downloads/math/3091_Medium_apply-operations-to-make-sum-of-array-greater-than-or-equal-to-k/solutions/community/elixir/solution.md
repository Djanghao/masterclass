# Elixir 100% Math | Fast | Readable

**Author:** bindles
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/solutions/4918194/](https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/solutions/4918194/)

---

Math | Fast | Readable
# Code
```
defmodule Solution do
  def min_operations(k) do
    sqrt_k = :math.sqrt(k)
    ceiling_sqrt_k = :math.ceil(sqrt_k)
    operations_performed = div(k, trunc(ceiling_sqrt_k))
    subtract = if rem(k, trunc(ceiling_sqrt_k)) == 0, do: 1, else: 0

    round(ceiling_sqrt_k - 1 + operations_performed - subtract)
  end
end
```