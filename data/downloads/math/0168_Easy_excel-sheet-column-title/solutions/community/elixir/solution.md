# Simple elixir solution

**Author:** user4018j
**Votes:** 1
**Link:** [https://leetcode.com/problems/excel-sheet-column-title/solutions/2052191/](https://leetcode.com/problems/excel-sheet-column-title/solutions/2052191/)

---

```
defmodule Solution do
    @spec convert_to_title(column_number :: integer) :: String.t
    def convert_to_title(column_number) do rec(column_number, "") end

    def rec(0, str) do str end

    def rec(num, str) do
        r = rem(num, 26)
        r = if r === 0, do: 26, else: r
        rec(div((num-r), 26), <<64+r::utf8>> <> str)
    end
end
```