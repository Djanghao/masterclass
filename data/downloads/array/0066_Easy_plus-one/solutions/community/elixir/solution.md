# Integer.digits, undigits

**Author:** AeronStorm
**Votes:** 1
**Link:** [https://leetcode.com/problems/plus-one/solutions/3627910/](https://leetcode.com/problems/plus-one/solutions/3627910/)

---



# Code
```
defmodule Solution do
  @spec plus_one(digits :: [integer]) :: [integer]
  def plus_one(digits) do
    digits |> Integer.undigits |> Kernel.+(1) |> Integer.digits
  end
end
```