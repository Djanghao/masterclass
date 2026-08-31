# Transformation of input

**Author:** glimmerfors
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-palindrome-with-fixed-length/solutions/3356616/](https://leetcode.com/problems/find-palindrome-with-fixed-length/solutions/3356616/)

---

# Code
```
defmodule Solution do
  @spec kth_palindrome(queries :: [integer], int_length :: integer) :: [integer]
  def kth_palindrome(queries, int_length) do
    Enum.map(queries, fn query -> int_to_palindrome(query, int_length) end)
  end

  defp int_to_palindrome(query, int_length) do
    half_length = ceil(int_length / 2)
    if query <= 10 ** (half_length - 1) * 9 do
      10 ** (half_length - 1) + query - 1
      |> Integer.to_string()
      |> (fn x ->
          rev =
            x
            |> String.codepoints()
            |> Enum.reverse()
            |> (fn [a | b] -> if(rem(int_length, 2) == 0, do: [a | b], else: b) end).()
            |> Enum.join()
          
          x <> rev
        end).()
      |> String.to_integer()
    else
      -1
    end
  end
end
```