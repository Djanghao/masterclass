# Elixir solution

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/push-dominoes/solutions/2632490/](https://leetcode.com/problems/push-dominoes/solutions/2632490/)

---

**Step 1: pad the input**

- add `@L` to the left
- add `R@` to the right

The idea is that if you put one more domino on left of the sequence of dominoes and push it to the left, it does not affect the falling directions of the other dominoes. Same as putting one more domino on the right side and push it to the right. But by adding `L` and `R` to both sides of the sequence, we can be sure there's no dots on either side, so we don't have to handle edge cases.

The `@` character is kinda arbitrary. It's just for the convenience of step 3 and 4 (see below).

e.g.

- `.L..R.` -> `@L.L..R.R@`
- `L.R` -> `@LL.RR@`

**Step 2: split the string**

Split the string into substrings. Each substring contains only the same character.

e.g.

`"@L..R.RR...LLR@"` -> `["@", "L", "..", "R", ".", "RR", "...", "LL", "R", "@"]`

**Step 3: sliding window**

Make a window of size 3 and slide it left to right through the substrings, and transform the middle part of the window.

- If the window looks like `["LLL", "....", "LL"]`, transform the middle part into all `L`s.
- If the window looks like `["RR", "...", "RRRR"]`, transform the middle part into all `R`s.
- If the window looks like `["RR", "....", "LLLL"]`, transform the middle part into half `R`s and half `L`s, and keep the center character (if there is one) as `.`.
- For other windows, just take the middle part.

**Step 4: joining and trimming**

Just join all the middle parts together, and remove the first and the last character, then you get the final result.

**Code**

I just abuse iolists instead of using strings in order to gain some performance.

```elixir
defmodule Solution do
  import Bitwise

  @spec push_dominoes(dominoes :: String.t) :: String.t
  def push_dominoes(dominoes) do
    padded = pad(dominoes)

    ~r/(L+|R+)/
    |> Regex.split(padded, include_captures: true, trim: true)
    |> Stream.chunk_every(3, 1, :discard)
    |> Enum.map(&handle_push/1)
    |> IO.iodata_to_binary()
    |> String.slice(1..-2)
  end
  
  @spec handle_push([String.t]) :: iodata
  defp handle_push(["R" <> _, "." <> _ = dots, "R" <> _]) do
    List.duplicate(?R, byte_size(dots))
  end
      
  defp handle_push(["L" <> _, "." <> _ = dots, "L" <> _]) do
    List.duplicate(?L, byte_size(dots))
  end
      
  defp handle_push(["R" <> _ = lhs, "." <> _ = dots, "L" <> _ = rhs]) do
    push_inward(byte_size(dots))
  end
      
  defp handle_push([_, mid, _]) do
    mid
  end

  @spec push_inward(pos_integer) :: iolist
  defp push_inward(len) do
    [
      List.duplicate(?R, len >>> 1),
      List.duplicate(?., len &&& 1),
      List.duplicate(?L, len >>> 1)
    ]
  end

  @spec pad(String.t) :: String.t
  defp pad(dominoes) do
    "@L#{dominoes}R@"
  end
end
```