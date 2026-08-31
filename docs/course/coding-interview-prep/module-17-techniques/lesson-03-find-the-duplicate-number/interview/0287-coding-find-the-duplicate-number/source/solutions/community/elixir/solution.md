# Elixir - 1 line - 😅

**Author:** Nono31
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-duplicate-number/solutions/4916382/](https://leetcode.com/problems/find-the-duplicate-number/solutions/4916382/)

---

Not really what was asked \uD83D\uDE08

# Code
```
defmodule Solution do
  @spec find_duplicate(nums :: [integer]) :: integer
  def find_duplicate(nums) do
    (nums -- Enum.uniq(nums)) |> hd
  end
end
```