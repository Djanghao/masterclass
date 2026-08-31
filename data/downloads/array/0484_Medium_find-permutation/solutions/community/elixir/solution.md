# [Elixir] Build list backwards for efficiency

**Author:** tiedyedvortex
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-permutation/solutions/2035470/](https://leetcode.com/problems/find-permutation/solutions/2035470/)

---

Concept: if the string starts with a streak that looks like DDDD...I, then that means the sequence of k "D"s must be input as a decreasing sequence of k to 1, and then we start over but with the new minimum value being k+1 instead of 1.

We just need one additional case to handle the fact that we have one more number than letters, so we have to finish the last sequence.

However, since Elixir uses immutable linked lists, appending to a list is an O(N) operation, but prepending is O(1). Rather than incur this cost every time, we build the list backwards (prepending ascending sequences rather than appending decreasing sequences), and then reverse it at the very end in O(n) time.

```
defmodule Solution do
  @spec find_permutation(s :: String.t) :: [integer]
  def find_permutation(s) do
    do_find_permutation(s, [], 1, 1)
  end

  def do_find_permutation("", curr_list, min, max) do
    Enum.reverse(Enum.to_list(min..max) ++ curr_list)
  end

  def do_find_permutation(s, curr_list, min, max) do
    first_char = String.first(s)
    tail_string = String.slice(s, 1..-1)

    if first_char == "I" do
      do_find_permutation(tail_string, Enum.to_list(min..max) ++ curr_list, max+1, max+1)
    else
      do_find_permutation(tail_string, curr_list, min, max+1)
    end
  end
end
```

With a string of DDDIDIDD we would see these function calls:

("DDDIDIDD", [], 1, 1)
("DDIDIDD", [], 1, 2)
("DIDIDD", [], 1, 3)
("IDIDD", [], 1, 4)
("DIDD", [1, 2, 3, 4], 5, 5)
("IDD", [1, 2, 3, 4], 5, 6)
("DD", [5, 6, 1, 2, 3, 4], 7, 7)
("D", [5, 6, 1, 2, 3, 4], 7, 8)
("", [5, 6, 1, 2, 3, 4], 7, 9)

This final function call would be evaluated by first prepending as [7, 8, 9, 5, 6, 1, 2, 3, 4], and then reversing to be [4,3,2,1,6,5,9,8,7] which exactly matches the DDDIDIDD pattern.
