# Elixir - Bottom-up dynamic programming || Manual unroll || Abuse macros

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/knight-dialer/solutions/4334547/](https://leetcode.com/problems/knight-dialer/solutions/4334547/)

---

# Code
```
defmodule Solution do
  import Kernel, except: ["+": 2]

  @initial_memo {1, 1, 1, 1, 1, 1, 1, 1, 1, 1}

  # Redefine `+/2` so that the code can be a little bit cleaner.
  defp a + b do
    a
    |> Kernel.+(b)
    |> rem(1_000_000_007)
  end

  @spec knight_dialer(n :: integer) :: integer
  def knight_dialer(n) do
    memo = for _ <- 2..n//1, reduce: @initial_memo do
      prev_memo ->
        {
          elem(prev_memo, 4) + elem(prev_memo, 6),
          elem(prev_memo, 6) + elem(prev_memo, 8),
          elem(prev_memo, 7) + elem(prev_memo, 9),
          elem(prev_memo, 4) + elem(prev_memo, 8),
          elem(prev_memo, 0) + elem(prev_memo, 3) + elem(prev_memo, 9),
          0,
          elem(prev_memo, 0) + elem(prev_memo, 1) + elem(prev_memo, 7),
          elem(prev_memo, 2) + elem(prev_memo, 6),
          elem(prev_memo, 1) + elem(prev_memo, 3),
          elem(prev_memo, 2) + elem(prev_memo, 4)
        }
    end
    
    elem(memo, 0) +
    elem(memo, 1) +
    elem(memo, 2) +
    elem(memo, 3) +
    elem(memo, 4) +
    elem(memo, 5) +
    elem(memo, 6) +
    elem(memo, 7) +
    elem(memo, 8) +
    elem(memo, 9)
  end
end
```

## UPDATE: Abuse macros

This one is cursed. Don't do this.

```elixir
defmodule Solution do
  import Kernel, except: ["+": 2, "!": 1]

  defmacrop a + b do
    quote do
      rem(
        Kernel.+(unquote(a), unquote(b)),
        1_000_000_007
      )
    end
  end

  defmacrop !i do
    quote do
      elem(var!(...), unquote(i))
    end
  end

  defmacrop a ~> b do
    quote do
      unquote(b) = unquote(a)
    end
  end

  @... {1, 1, 1, 1, 1, 1, 1, 1, 1, 1}

  @spec knight_dialer(n :: integer) :: integer
  def knight_dialer(n) do
    2..n//1
    |> Enum.reduce(@..., fn _, ... ->
      {
        !4 + !6,
        !6 + !8,
        !7 + !9,
        !4 + !8,
        !0 + !3 + !9,
        0,
        !0 + !1 + !7,
        !2 + !6,
        !1 + !3,
        !2 + !4
      }
    end)
    ~> ...
    
    !0 +
    !1 +
    !2 +
    !3 +
    !4 +
    !5 +
    !6 +
    !7 +
    !8 +
    !9
  end
end
```