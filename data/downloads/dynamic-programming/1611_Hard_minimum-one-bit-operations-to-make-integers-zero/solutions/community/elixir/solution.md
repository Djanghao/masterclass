# Elixir Solution (Inverse Gray Code)

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/solutions/4663320/](https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/solutions/4663320/)

---

https://en.wikipedia.org/wiki/Gray_code

```
defmodule Solution do
  use Bitwise
  @spec minimum_one_bit_operations(n :: integer) :: integer
  def minimum_one_bit_operations(n) do
    inverse_gray(n, 0)
  end
  def inverse_gray(0, ct), do: ct
  def inverse_gray(n, ct) do
    inverse_gray(n >>> 1, ct ^^^ n)
  end
end
```